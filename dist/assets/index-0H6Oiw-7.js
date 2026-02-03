(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ye={},Fs=[],Kn=()=>{},Af=()=>!1,Qo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Cc=n=>n.startsWith("onUpdate:"),qe=Object.assign,Pc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},qp=Object.prototype.hasOwnProperty,pe=(n,t)=>qp.call(n,t),Xt=Array.isArray,Os=n=>Vr(n)==="[object Map]",tr=n=>Vr(n)==="[object Set]",Mu=n=>Vr(n)==="[object Date]",Zt=n=>typeof n=="function",Fe=n=>typeof n=="string",Bn=n=>typeof n=="symbol",Ee=n=>n!==null&&typeof n=="object",Rf=n=>(Ee(n)||Zt(n))&&Zt(n.then)&&Zt(n.catch),wf=Object.prototype.toString,Vr=n=>wf.call(n),Kp=n=>Vr(n).slice(8,-1),Cf=n=>Vr(n)==="[object Object]",ta=n=>Fe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,xr=wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},jp=/-\w/g,Pn=ea(n=>n.replace(jp,t=>t.slice(1).toUpperCase())),Zp=/\B([A-Z])/g,hs=ea(n=>n.replace(Zp,"-$1").toLowerCase()),na=ea(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ea=ea(n=>n?`on${na(n)}`:""),Xi=(n,t)=>!Object.is(n,t),Ao=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Pf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},ia=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let yu;const sa=()=>yu||(yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ra(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Fe(i)?em(i):ra(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Fe(n)||Ee(n))return n}const Jp=/;(?![^(]*\))/g,Qp=/:([^]+)/,tm=/\/\*[^]*?\*\//g;function em(n){const t={};return n.replace(tm,"").split(Jp).forEach(e=>{if(e){const i=e.split(Qp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function en(n){let t="";if(Fe(n))t=n;else if(Xt(n))for(let e=0;e<n.length;e++){const i=en(n[e]);i&&(t+=i+" ")}else if(Ee(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const nm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",im=wc(nm);function Df(n){return!!n||n===""}function sm(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=zr(n[i],t[i]);return e}function zr(n,t){if(n===t)return!0;let e=Mu(n),i=Mu(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=Bn(n),i=Bn(t),e||i)return n===t;if(e=Xt(n),i=Xt(t),e||i)return e&&i?sm(n,t):!1;if(e=Ee(n),i=Ee(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!zr(n[o],t[o]))return!1}}return String(n)===String(t)}function Dc(n,t){return n.findIndex(e=>zr(e,t))}const If=n=>!!(n&&n.__v_isRef===!0),rt=n=>Fe(n)?n:n==null?"":Xt(n)||Ee(n)&&(n.toString===wf||!Zt(n.toString))?If(n)?rt(n.value):JSON.stringify(n,Lf,2):String(n),Lf=(n,t)=>If(t)?Lf(n,t.value):Os(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[ba(i,r)+" =>"]=s,e),{})}:tr(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ba(e))}:Bn(t)?ba(t):Ee(t)&&!Xt(t)&&!Cf(t)?String(t):t,ba=(n,t="")=>{var e;return Bn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ze;class Uf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ze,!t&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Ze;try{return Ze=this,t()}finally{Ze=e}}}on(){++this._on===1&&(this.prevScope=Ze,Ze=this)}off(){this._on>0&&--this._on===0&&(Ze=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Nf(n){return new Uf(n)}function Ff(){return Ze}function rm(n,t=!1){Ze&&Ze.cleanups.push(n)}let Ae;const Ta=new WeakSet;class Of{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&Ze.active&&Ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ta.has(this)&&(Ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eu(this),Vf(this);const t=Ae,e=Fn;Ae=this,Fn=!0;try{return this.fn()}finally{zf(this),Ae=t,Fn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Uc(t);this.deps=this.depsTail=void 0,Eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let Bf=0,Sr,Mr;function kf(n,t=!1){if(n.flags|=8,t){n.next=Mr,Mr=n;return}n.next=Sr,Sr=n}function Ic(){Bf++}function Lc(){if(--Bf>0)return;if(Mr){let t=Mr;for(Mr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Sr;){let t=Sr;for(Sr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Vf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Uc(i),om(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function vl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Hf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Hf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===wr)||(n.globalVersion=wr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!vl(n))))return;n.flags|=2;const t=n.dep,e=Ae,i=Fn;Ae=n,Fn=!0;try{Vf(n);const s=n.fn(n._value);(t.version===0||Xi(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{Ae=e,Fn=i,zf(n),n.flags&=-3}}function Uc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Uc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function om(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Fn=!0;const Gf=[];function Mi(){Gf.push(Fn),Fn=!1}function yi(){const n=Gf.pop();Fn=n===void 0?!0:n}function Eu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=Ae;Ae=void 0;try{t()}finally{Ae=e}}}let wr=0;class am{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Nc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ae||!Fn||Ae===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Ae)e=this.activeLink=new am(Ae,this),Ae.deps?(e.prevDep=Ae.depsTail,Ae.depsTail.nextDep=e,Ae.depsTail=e):Ae.deps=Ae.depsTail=e,Wf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=Ae.depsTail,e.nextDep=void 0,Ae.depsTail.nextDep=e,Ae.depsTail=e,Ae.deps===e&&(Ae.deps=i)}return e}trigger(t){this.version++,wr++,this.notify(t)}notify(t){Ic();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Lc()}}}function Wf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Wf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Bo=new WeakMap,cs=Symbol(""),xl=Symbol(""),Cr=Symbol("");function Je(n,t,e){if(Fn&&Ae){let i=Bo.get(n);i||Bo.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Nc),s.map=i,s.key=e),s.track()}}function hi(n,t,e,i,s,r){const o=Bo.get(n);if(!o){wr++;return}const a=l=>{l&&l.trigger()};if(Ic(),t==="clear")o.forEach(a);else{const l=Xt(n),c=l&&ta(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,m)=>{(m==="length"||m===Cr||!Bn(m)&&m>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Cr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(cs)),Os(n)&&a(o.get(xl)));break;case"delete":l||(a(o.get(cs)),Os(n)&&a(o.get(xl)));break;case"set":Os(n)&&a(o.get(cs));break}}Lc()}function lm(n,t){const e=Bo.get(n);return e&&e.get(t)}function _s(n){const t=ue(n);return t===n?t:(Je(t,"iterate",Cr),bn(n)?t:t.map(kn))}function oa(n){return Je(n=ue(n),"iterate",Cr),n}function Oi(n,t){return Ei(n)?Ws(gi(n)?kn(t):t):kn(t)}const cm={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,n=>Oi(this,n))},concat(...n){return _s(this).concat(...n.map(t=>Xt(t)?_s(t):t))},entries(){return Aa(this,"entries",n=>(n[1]=Oi(this,n[1]),n))},every(n,t){return si(this,"every",n,t,void 0,arguments)},filter(n,t){return si(this,"filter",n,t,e=>e.map(i=>Oi(this,i)),arguments)},find(n,t){return si(this,"find",n,t,e=>Oi(this,e),arguments)},findIndex(n,t){return si(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return si(this,"findLast",n,t,e=>Oi(this,e),arguments)},findLastIndex(n,t){return si(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return si(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ra(this,"includes",n)},indexOf(...n){return Ra(this,"indexOf",n)},join(n){return _s(this).join(n)},lastIndexOf(...n){return Ra(this,"lastIndexOf",n)},map(n,t){return si(this,"map",n,t,void 0,arguments)},pop(){return sr(this,"pop")},push(...n){return sr(this,"push",n)},reduce(n,...t){return bu(this,"reduce",n,t)},reduceRight(n,...t){return bu(this,"reduceRight",n,t)},shift(){return sr(this,"shift")},some(n,t){return si(this,"some",n,t,void 0,arguments)},splice(...n){return sr(this,"splice",n)},toReversed(){return _s(this).toReversed()},toSorted(n){return _s(this).toSorted(n)},toSpliced(...n){return _s(this).toSpliced(...n)},unshift(...n){return sr(this,"unshift",n)},values(){return Aa(this,"values",n=>Oi(this,n))}};function Aa(n,t,e){const i=oa(n),s=i[t]();return i!==n&&!bn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const um=Array.prototype;function si(n,t,e,i,s,r){const o=oa(n),a=o!==n&&!bn(n),l=o[t];if(l!==um[t]){const f=l.apply(n,r);return a?kn(f):f}let c=e;o!==n&&(a?c=function(f,m){return e.call(this,Oi(n,f),m,n)}:e.length>2&&(c=function(f,m){return e.call(this,f,m,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function bu(n,t,e,i){const s=oa(n);let r=e;return s!==n&&(bn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,Oi(n,a),l,n)}),s[t](r,...i)}function Ra(n,t,e){const i=ue(n);Je(i,"iterate",Cr);const s=i[t](...e);return(s===-1||s===!1)&&aa(e[0])?(e[0]=ue(e[0]),i[t](...e)):s}function sr(n,t,e=[]){Mi(),Ic();const i=ue(n)[t].apply(n,e);return Lc(),yi(),i}const dm=wc("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Bn));function fm(n){Bn(n)||(n=String(n));const t=ue(this);return Je(t,"has",n),t.hasOwnProperty(n)}class $f{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?ym:jf:r?Kf:qf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Xt(t);if(!s){let l;if(o&&(l=cm[e]))return l;if(e==="hasOwnProperty")return fm}const a=Reflect.get(t,e,Le(t)?t:i);if((Bn(e)?Xf.has(e):dm(e))||(s||Je(t,"get",e),r))return a;if(Le(a)){const l=o&&ta(e)?a:a.value;return s&&Ee(l)?Ml(l):l}return Ee(a)?s?Ml(a):Hr(a):a}}class Yf extends $f{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Xt(t)&&ta(e);if(!this._isShallow){const c=Ei(r);if(!bn(i)&&!Ei(i)&&(r=ue(r),i=ue(i)),!o&&Le(r)&&!Le(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:pe(t,e),l=Reflect.set(t,e,i,Le(t)?t:s);return t===ue(s)&&(a?Xi(i,r)&&hi(t,"set",e,i):hi(t,"add",e,i)),l}deleteProperty(t,e){const i=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&hi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Bn(e)||!Xf.has(e))&&Je(t,"has",e),i}ownKeys(t){return Je(t,"iterate",Xt(t)?"length":cs),Reflect.ownKeys(t)}}class hm extends $f{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const pm=new Yf,mm=new hm,_m=new Yf(!0);const Sl=n=>n,Jr=n=>Reflect.getPrototypeOf(n);function gm(n,t,e){return function(...i){const s=this.__v_raw,r=ue(s),o=Os(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Sl:t?Ws:kn;return!t&&Je(r,"iterate",l?xl:cs),qe(Object.create(c),{next(){const{value:f,done:m}=c.next();return m?{value:f,done:m}:{value:a?[u(f[0]),u(f[1])]:u(f),done:m}}})}}function Qr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function vm(n,t){const e={get(s){const r=this.__v_raw,o=ue(r),a=ue(s);n||(Xi(s,a)&&Je(o,"get",s),Je(o,"get",a));const{has:l}=Jr(o),c=t?Sl:n?Ws:kn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Je(ue(s),"iterate",cs),s.size},has(s){const r=this.__v_raw,o=ue(r),a=ue(s);return n||(Xi(s,a)&&Je(o,"has",s),Je(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ue(a),c=t?Sl:n?Ws:kn;return!n&&Je(l,"iterate",cs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return qe(e,n?{add:Qr("add"),set:Qr("set"),delete:Qr("delete"),clear:Qr("clear")}:{add(s){!t&&!bn(s)&&!Ei(s)&&(s=ue(s));const r=ue(this);return Jr(r).has.call(r,s)||(r.add(s),hi(r,"add",s,s)),this},set(s,r){!t&&!bn(r)&&!Ei(r)&&(r=ue(r));const o=ue(this),{has:a,get:l}=Jr(o);let c=a.call(o,s);c||(s=ue(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Xi(r,u)&&hi(o,"set",s,r):hi(o,"add",s,r),this},delete(s){const r=ue(this),{has:o,get:a}=Jr(r);let l=o.call(r,s);l||(s=ue(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&hi(r,"delete",s,void 0),c},clear(){const s=ue(this),r=s.size!==0,o=s.clear();return r&&hi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=gm(s,n,t)}),e}function Fc(n,t){const e=vm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pe(e,s)&&s in i?e:i,s,r)}const xm={get:Fc(!1,!1)},Sm={get:Fc(!1,!0)},Mm={get:Fc(!0,!1)};const qf=new WeakMap,Kf=new WeakMap,jf=new WeakMap,ym=new WeakMap;function Em(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bm(n){return n.__v_skip||!Object.isExtensible(n)?0:Em(Kp(n))}function Hr(n){return Ei(n)?n:Oc(n,!1,pm,xm,qf)}function Zf(n){return Oc(n,!1,_m,Sm,Kf)}function Ml(n){return Oc(n,!0,mm,Mm,jf)}function Oc(n,t,e,i,s){if(!Ee(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=bm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function gi(n){return Ei(n)?gi(n.__v_raw):!!(n&&n.__v_isReactive)}function Ei(n){return!!(n&&n.__v_isReadonly)}function bn(n){return!!(n&&n.__v_isShallow)}function aa(n){return n?!!n.__v_raw:!1}function ue(n){const t=n&&n.__v_raw;return t?ue(t):n}function Bc(n){return!pe(n,"__v_skip")&&Object.isExtensible(n)&&Pf(n,"__v_skip",!0),n}const kn=n=>Ee(n)?Hr(n):n,Ws=n=>Ee(n)?Ml(n):n;function Le(n){return n?n.__v_isRef===!0:!1}function Dt(n){return Jf(n,!1)}function Tm(n){return Jf(n,!0)}function Jf(n,t){return Le(n)?n:new Am(n,t)}class Am{constructor(t,e){this.dep=new Nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ue(t),this._value=e?t:kn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||bn(t)||Ei(t);t=i?t:ue(t),Xi(t,e)&&(this._rawValue=t,this._value=i?t:kn(t),this.dep.trigger())}}function an(n){return Le(n)?n.value:n}const Rm={get:(n,t,e)=>t==="__v_raw"?n:an(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Le(s)&&!Le(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Qf(n){return gi(n)?n:new Proxy(n,Rm)}function wm(n){const t=Xt(n)?new Array(n.length):{};for(const e in n)t[e]=Pm(n,e);return t}class Cm{constructor(t,e,i){this._object=t,this._key=e,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=ue(t);let s=!0,r=t;if(!Xt(t)||!ta(String(e)))do s=!aa(r)||bn(r);while(s&&(r=r.__v_raw));this._shallow=s}get value(){let t=this._object[this._key];return this._shallow&&(t=an(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&Le(this._raw[this._key])){const e=this._object[this._key];if(Le(e)){e.value=t;return}}this._object[this._key]=t}get dep(){return lm(this._raw,this._key)}}function Pm(n,t,e){return new Cm(n,t,e)}class Dm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return kf(this,!0),!0}get value(){const t=this.dep.track();return Hf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Im(n,t,e=!1){let i,s;return Zt(n)?i=n:(i=n.get,s=n.set),new Dm(i,s,e)}const to={},ko=new WeakMap;let is;function Lm(n,t=!1,e=is){if(e){let i=ko.get(e);i||ko.set(e,i=[]),i.push(n)}}function Um(n,t,e=ye){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=b=>s?b:bn(b)||s===!1||s===0?pi(b,1):pi(b);let u,f,m,p,v=!1,g=!1;if(Le(n)?(f=()=>n.value,v=bn(n)):gi(n)?(f=()=>c(n),v=!0):Xt(n)?(g=!0,v=n.some(b=>gi(b)||bn(b)),f=()=>n.map(b=>{if(Le(b))return b.value;if(gi(b))return c(b);if(Zt(b))return l?l(b,2):b()})):Zt(n)?t?f=l?()=>l(n,2):n:f=()=>{if(m){Mi();try{m()}finally{yi()}}const b=is;is=u;try{return l?l(n,3,[p]):n(p)}finally{is=b}}:f=Kn,t&&s){const b=f,w=s===!0?1/0:s;f=()=>pi(b(),w)}const _=Ff(),h=()=>{u.stop(),_&&_.active&&Pc(_.effects,u)};if(r&&t){const b=t;t=(...w)=>{b(...w),h()}}let M=g?new Array(n.length).fill(to):to;const A=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const w=u.run();if(s||v||(g?w.some((I,D)=>Xi(I,M[D])):Xi(w,M))){m&&m();const I=is;is=u;try{const D=[w,M===to?void 0:g&&M[0]===to?[]:M,p];M=w,l?l(t,3,D):t(...D)}finally{is=I}}}else u.run()};return a&&a(A),u=new Of(f),u.scheduler=o?()=>o(A,!1):A,p=b=>Lm(b,!1,u),m=u.onStop=()=>{const b=ko.get(u);if(b){if(l)l(b,4);else for(const w of b)w();ko.delete(u)}},t?i?A(!0):M=u.run():o?o(A.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function pi(n,t=1/0,e){if(t<=0||!Ee(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Le(n))pi(n.value,t,e);else if(Xt(n))for(let i=0;i<n.length;i++)pi(n[i],t,e);else if(tr(n)||Os(n))n.forEach(i=>{pi(i,t,e)});else if(Cf(n)){for(const i in n)pi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&pi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Gr(n,t,e,i){try{return i?n(...i):n()}catch(s){la(s,t,e)}}function Qn(n,t,e,i){if(Zt(n)){const s=Gr(n,t,e,i);return s&&Rf(s)&&s.catch(r=>{la(r,t,e)}),s}if(Xt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Qn(n[r],t,e,i));return s}}function la(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ye;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Mi(),Gr(r,null,10,[n,l,c]),yi();return}}Nm(n,e,s,i,o)}function Nm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const ln=[];let Wn=-1;const Bs=[];let Bi=null,Ls=0;const th=Promise.resolve();let Vo=null;function Wr(n){const t=Vo||th;return n?t.then(this?n.bind(this):n):t}function Fm(n){let t=Wn+1,e=ln.length;for(;t<e;){const i=t+e>>>1,s=ln[i],r=Pr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function kc(n){if(!(n.flags&1)){const t=Pr(n),e=ln[ln.length-1];!e||!(n.flags&2)&&t>=Pr(e)?ln.push(n):ln.splice(Fm(t),0,n),n.flags|=1,eh()}}function eh(){Vo||(Vo=th.then(ih))}function Om(n){Xt(n)?Bs.push(...n):Bi&&n.id===-1?Bi.splice(Ls+1,0,n):n.flags&1||(Bs.push(n),n.flags|=1),eh()}function Tu(n,t,e=Wn+1){for(;e<ln.length;e++){const i=ln[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;ln.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function nh(n){if(Bs.length){const t=[...new Set(Bs)].sort((e,i)=>Pr(e)-Pr(i));if(Bs.length=0,Bi){Bi.push(...t);return}for(Bi=t,Ls=0;Ls<Bi.length;Ls++){const e=Bi[Ls];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Bi=null,Ls=0}}const Pr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ih(n){try{for(Wn=0;Wn<ln.length;Wn++){const t=ln[Wn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Gr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Wn<ln.length;Wn++){const t=ln[Wn];t&&(t.flags&=-2)}Wn=-1,ln.length=0,nh(),Vo=null,(ln.length||Bs.length)&&ih()}}let $e=null,sh=null;function zo(n){const t=$e;return $e=n,sh=n&&n.type.__scopeId||null,t}function te(n,t=$e,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Xo(-1);const r=zo(t);let o;try{o=n(...s)}finally{zo(r),i._d&&Xo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ie(n,t){if($e===null)return n;const e=fa($e),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ye]=t[s];r&&(Zt(r)&&(r={mounted:r,updated:r}),r.deep&&pi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ki(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Mi(),Qn(l,e,8,[n.el,a,n,t]),yi())}}function Ro(n,t){if(Qe){let e=Qe.provides;const i=Qe.parent&&Qe.parent.provides;i===e&&(e=Qe.provides=Object.create(i)),e[n]=t}}function On(n,t,e=!1){const i=Dh();if(i||us){let s=us?us._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Zt(t)?t.call(i&&i.proxy):t}}function Bm(){return!!(Dh()||us)}const km=Symbol.for("v-scx"),Vm=()=>On(km);function yr(n,t,e){return rh(n,t,e)}function rh(n,t,e=ye){const{immediate:i,deep:s,flush:r,once:o}=e,a=qe({},e),l=t&&i||!t&&r!=="post";let c;if(Lr){if(r==="sync"){const p=Vm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Kn,p.resume=Kn,p.pause=Kn,p}}const u=Qe;a.call=(p,v,g)=>Qn(p,u,v,g);let f=!1;r==="post"?a.scheduler=p=>{Sn(p,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(p,v)=>{v?p():kc(p)}),a.augmentJob=p=>{t&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const m=Um(n,t,a);return Lr&&(c?c.push(m):l&&m()),m}function zm(n,t,e){const i=this.proxy,s=Fe(n)?n.includes(".")?oh(i,n):()=>i[n]:n.bind(i,i);let r;Zt(t)?r=t:(r=t.handler,e=t);const o=Xr(this),a=rh(s,r.bind(i),e);return o(),a}function oh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Hm=Symbol("_vte"),Gm=n=>n.__isTeleport,Wm=Symbol("_leaveCb");function Vc(n,t){n.shapeFlag&6&&n.component?(n.transition=t,Vc(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function ah(n,t){return Zt(n)?qe({name:n.name},t,{setup:n}):n}function lh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Ho=new WeakMap;function Er(n,t,e,i,s=!1){if(Xt(n)){n.forEach((v,g)=>Er(v,t&&(Xt(t)?t[g]:t),e,i,s));return}if(ks(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Er(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?fa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ye?a.refs={}:a.refs,f=a.setupState,m=ue(f),p=f===ye?Af:v=>pe(m,v);if(c!=null&&c!==l){if(Au(t),Fe(c))u[c]=null,p(c)&&(f[c]=null);else if(Le(c)){c.value=null;const v=t;v.k&&(u[v.k]=null)}}if(Zt(l))Gr(l,a,12,[o,u]);else{const v=Fe(l),g=Le(l);if(v||g){const _=()=>{if(n.f){const h=v?p(l)?f[l]:u[l]:l.value;if(s)Xt(h)&&Pc(h,r);else if(Xt(h))h.includes(r)||h.push(r);else if(v)u[l]=[r],p(l)&&(f[l]=u[l]);else{const M=[r];l.value=M,n.k&&(u[n.k]=M)}}else v?(u[l]=o,p(l)&&(f[l]=o)):g&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const h=()=>{_(),Ho.delete(n)};h.id=-1,Ho.set(n,h),Sn(h,e)}else Au(n),_()}}}function Au(n){const t=Ho.get(n);t&&(t.flags|=8,Ho.delete(n))}sa().requestIdleCallback;sa().cancelIdleCallback;const ks=n=>!!n.type.__asyncLoader,ch=n=>n.type.__isKeepAlive;function Xm(n,t){uh(n,"a",t)}function $m(n,t){uh(n,"da",t)}function uh(n,t,e=Qe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ca(t,i,e),e){let s=e.parent;for(;s&&s.parent;)ch(s.parent.vnode)&&Ym(i,t,e,s),s=s.parent}}function Ym(n,t,e,i){const s=ca(t,n,i,!0);dh(()=>{Pc(i[t],s)},e)}function ca(n,t,e=Qe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Mi();const a=Xr(e),l=Qn(t,e,n,o);return a(),yi(),l});return i?s.unshift(r):s.push(r),r}}const Ri=n=>(t,e=Qe)=>{(!Lr||n==="sp")&&ca(n,(...i)=>t(...i),e)},qm=Ri("bm"),zc=Ri("m"),Km=Ri("bu"),jm=Ri("u"),Hc=Ri("bum"),dh=Ri("um"),Zm=Ri("sp"),Jm=Ri("rtg"),Qm=Ri("rtc");function t_(n,t=Qe){ca("ec",n,t)}const e_="components";function Go(n,t){return i_(e_,n,!0,t)||n}const n_=Symbol.for("v-ndc");function i_(n,t,e=!0,i=!1){const s=$e||Qe;if(s){const r=s.type;{const a=z_(r,!1);if(a&&(a===t||a===Pn(t)||a===na(Pn(t))))return r}const o=Ru(s[n]||r[n],t)||Ru(s.appContext[n],t);return!o&&i?r:o}}function Ru(n,t){return n&&(n[t]||n[Pn(t)]||n[na(Pn(t))])}function fe(n,t,e,i){let s;const r=e,o=Xt(n);if(o||Fe(n)){const a=o&&gi(n);let l=!1,c=!1;a&&(l=!bn(n),c=Ei(n),n=oa(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=t(l?c?Ws(kn(n[u])):kn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(Ee(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}function wa(n,t,e={},i,s){if($e.ce||$e.parent&&ks($e.parent)&&$e.parent.ce){const c=Object.keys(e).length>0;return t!=="default"&&(e.name=t),ft(),$o(Kt,null,[zt("slot",e,i)],c?-2:64)}let r=n[t];r&&r._c&&(r._d=!1),ft();const o=r&&fh(r(e)),a=e.key||o&&o.key,l=$o(Kt,{key:(a&&!Bn(a)?a:`_${t}`)+(!o&&i?"_fb":"")},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function fh(n){return n.some(t=>Ir(t)?!(t.type===bi||t.type===Kt&&!fh(t.children)):!0)?n:null}const yl=n=>n?Ih(n)?fa(n):yl(n.parent):null,br=qe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>yl(n.parent),$root:n=>yl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ph(n),$forceUpdate:n=>n.f||(n.f=()=>{kc(n.update)}),$nextTick:n=>n.n||(n.n=Wr.bind(n.proxy)),$watch:n=>zm.bind(n)}),Ca=(n,t)=>n!==ye&&!n.__isScriptSetup&&pe(n,t),s_={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ca(i,t))return o[t]=1,i[t];if(s!==ye&&pe(s,t))return o[t]=2,s[t];if(pe(r,t))return o[t]=3,r[t];if(e!==ye&&pe(e,t))return o[t]=4,e[t];El&&(o[t]=0)}}const c=br[t];let u,f;if(c)return t==="$attrs"&&Je(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ye&&pe(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,pe(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ca(s,t)?(s[t]=e,!0):i!==ye&&pe(i,t)?(i[t]=e,!0):pe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ye&&a[0]!=="$"&&pe(n,a)||Ca(t,a)||pe(r,a)||pe(i,a)||pe(br,a)||pe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:pe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function wu(n){return Xt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let El=!0;function r_(n){const t=ph(n),e=n.proxy,i=n.ctx;El=!1,t.beforeCreate&&Cu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:m,beforeUpdate:p,updated:v,activated:g,deactivated:_,beforeDestroy:h,beforeUnmount:M,destroyed:A,unmounted:b,render:w,renderTracked:I,renderTriggered:D,errorCaptured:F,serverPrefetch:S,expose:T,inheritAttrs:N,components:W,directives:$,filters:H}=t;if(c&&o_(c,i,null),o)for(const k in o){const tt=o[k];Zt(tt)&&(i[k]=tt.bind(e))}if(s){const k=s.call(e,e);Ee(k)&&(n.data=Hr(k))}if(El=!0,r)for(const k in r){const tt=r[k],_t=Zt(tt)?tt.bind(e,e):Zt(tt.get)?tt.get.bind(e,e):Kn,gt=!Zt(tt)&&Zt(tt.set)?tt.set.bind(e):Kn,Mt=Xe({get:_t,set:gt});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:Bt=>Mt.value=Bt})}if(a)for(const k in a)hh(a[k],i,e,k);if(l){const k=Zt(l)?l.call(e):l;Reflect.ownKeys(k).forEach(tt=>{Ro(tt,k[tt])})}u&&Cu(u,n,"c");function z(k,tt){Xt(tt)?tt.forEach(_t=>k(_t.bind(e))):tt&&k(tt.bind(e))}if(z(qm,f),z(zc,m),z(Km,p),z(jm,v),z(Xm,g),z($m,_),z(t_,F),z(Qm,I),z(Jm,D),z(Hc,M),z(dh,b),z(Zm,S),Xt(T))if(T.length){const k=n.exposed||(n.exposed={});T.forEach(tt=>{Object.defineProperty(k,tt,{get:()=>e[tt],set:_t=>e[tt]=_t,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===Kn&&(n.render=w),N!=null&&(n.inheritAttrs=N),W&&(n.components=W),$&&(n.directives=$),S&&lh(n)}function o_(n,t,e=Kn){Xt(n)&&(n=bl(n));for(const i in n){const s=n[i];let r;Ee(s)?"default"in s?r=On(s.from||i,s.default,!0):r=On(s.from||i):r=On(s),Le(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Cu(n,t,e){Qn(Xt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function hh(n,t,e,i){let s=i.includes(".")?oh(e,i):()=>e[i];if(Fe(n)){const r=t[n];Zt(r)&&yr(s,r)}else if(Zt(n))yr(s,n.bind(e));else if(Ee(n))if(Xt(n))n.forEach(r=>hh(r,t,e,i));else{const r=Zt(n.handler)?n.handler.bind(e):t[n.handler];Zt(r)&&yr(s,r,n)}}function ph(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Wo(l,c,o,!0)),Wo(l,t,o)),Ee(t)&&r.set(t,l),l}function Wo(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Wo(n,r,e,!0),s&&s.forEach(o=>Wo(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=a_[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const a_={data:Pu,props:Du,emits:Du,methods:_r,computed:_r,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:_r,directives:_r,watch:c_,provide:Pu,inject:l_};function Pu(n,t){return t?n?function(){return qe(Zt(n)?n.call(this,this):n,Zt(t)?t.call(this,this):t)}:t:n}function l_(n,t){return _r(bl(n),bl(t))}function bl(n){if(Xt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function sn(n,t){return n?[...new Set([].concat(n,t))]:t}function _r(n,t){return n?qe(Object.create(null),n,t):t}function Du(n,t){return n?Xt(n)&&Xt(t)?[...new Set([...n,...t])]:qe(Object.create(null),wu(n),wu(t??{})):t}function c_(n,t){if(!n)return t;if(!t)return n;const e=qe(Object.create(null),n);for(const i in t)e[i]=sn(n[i],t[i]);return e}function mh(){return{app:null,config:{isNativeTag:Af,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let u_=0;function d_(n,t){return function(i,s=null){Zt(i)||(i=qe({},i)),s!=null&&!Ee(s)&&(s=null);const r=mh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:u_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:G_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&Zt(u.install)?(o.add(u),u.install(c,...f)):Zt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,m){if(!l){const p=c._ceVNode||zt(i,s);return p.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),n(p,u,m),l=!0,c._container=u,u.__vue_app__=c,fa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Qn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=us;us=c;try{return u()}finally{us=f}}};return c}}let us=null;const f_=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Pn(t)}Modifiers`]||n[`${hs(t)}Modifiers`];function h_(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ye;let s=e;const r=t.startsWith("update:"),o=r&&f_(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Fe(u)?u.trim():u)),o.number&&(s=e.map(ia)));let a,l=i[a=Ea(t)]||i[a=Ea(Pn(t))];!l&&r&&(l=i[a=Ea(hs(t))]),l&&Qn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qn(c,n,6,s)}}const p_=new WeakMap;function _h(n,t,e=!1){const i=e?p_:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Zt(n)){const l=c=>{const u=_h(c,t,!0);u&&(a=!0,qe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Ee(n)&&i.set(n,null),null):(Xt(r)?r.forEach(l=>o[l]=null):qe(o,r),Ee(n)&&i.set(n,o),o)}function ua(n,t){return!n||!Qo(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(n,t[0].toLowerCase()+t.slice(1))||pe(n,hs(t))||pe(n,t))}function Iu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:m,setupState:p,ctx:v,inheritAttrs:g}=n,_=zo(n);let h,M;try{if(e.shapeFlag&4){const b=s||i,w=b;h=Xn(c.call(w,b,u,f,p,m,v)),M=a}else{const b=t;h=Xn(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),M=t.props?a:m_(a)}}catch(b){Tr.length=0,la(b,n,1),h=zt(bi)}let A=h;if(M&&g!==!1){const b=Object.keys(M),{shapeFlag:w}=A;b.length&&w&7&&(r&&b.some(Cc)&&(M=__(M,r)),A=Xs(A,M,!1,!0))}return e.dirs&&(A=Xs(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition&&Vc(A,e.transition),h=A,zo(_),h}const m_=n=>{let t;for(const e in n)(e==="class"||e==="style"||Qo(e))&&((t||(t={}))[e]=n[e]);return t},__=(n,t)=>{const e={};for(const i in n)(!Cc(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function g_(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Lu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const m=u[f];if(o[m]!==i[m]&&!ua(c,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lu(i,o,c):!0:!!o;return!1}function Lu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!ua(e,r))return!0}return!1}function v_({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const gh={},vh=()=>Object.create(gh),xh=n=>Object.getPrototypeOf(n)===gh;function x_(n,t,e,i=!1){const s={},r=vh();n.propsDefaults=Object.create(null),Sh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Zf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function S_(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ue(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let m=u[f];if(ua(n.emitsOptions,m))continue;const p=t[m];if(l)if(pe(r,m))p!==r[m]&&(r[m]=p,c=!0);else{const v=Pn(m);s[v]=Tl(l,a,v,p,n,!1)}else p!==r[m]&&(r[m]=p,c=!0)}}}else{Sh(n,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!pe(t,f)&&((u=hs(f))===f||!pe(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=Tl(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!pe(t,f))&&(delete r[f],c=!0)}c&&hi(n.attrs,"set","")}function Sh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(xr(l))continue;const c=t[l];let u;s&&pe(s,u=Pn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:ua(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ue(e),c=a||ye;for(let u=0;u<r.length;u++){const f=r[u];e[f]=Tl(s,l,f,c[f],n,!pe(c,f))}}return o}function Tl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=pe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Zt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Xr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===hs(e))&&(i=!0))}return i}const M_=new WeakMap;function Mh(n,t,e=!1){const i=e?M_:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Zt(n)){const u=f=>{l=!0;const[m,p]=Mh(f,t,!0);qe(o,m),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Ee(n)&&i.set(n,Fs),Fs;if(Xt(r))for(let u=0;u<r.length;u++){const f=Pn(r[u]);Uu(f)&&(o[f]=ye)}else if(r)for(const u in r){const f=Pn(u);if(Uu(f)){const m=r[u],p=o[f]=Xt(m)||Zt(m)?{type:m}:qe({},m),v=p.type;let g=!1,_=!0;if(Xt(v))for(let h=0;h<v.length;++h){const M=v[h],A=Zt(M)&&M.name;if(A==="Boolean"){g=!0;break}else A==="String"&&(_=!1)}else g=Zt(v)&&v.name==="Boolean";p[0]=g,p[1]=_,(g||pe(p,"default"))&&a.push(f)}}const c=[o,a];return Ee(n)&&i.set(n,c),c}function Uu(n){return n[0]!=="$"&&!xr(n)}const Gc=n=>n==="_"||n==="_ctx"||n==="$stable",Wc=n=>Xt(n)?n.map(Xn):[Xn(n)],y_=(n,t,e)=>{if(t._n)return t;const i=te((...s)=>Wc(t(...s)),e);return i._c=!1,i},yh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Gc(s))continue;const r=n[s];if(Zt(r))t[s]=y_(s,r,i);else if(r!=null){const o=Wc(r);t[s]=()=>o}}},Eh=(n,t)=>{const e=Wc(t);n.slots.default=()=>e},bh=(n,t,e)=>{for(const i in t)(e||!Gc(i))&&(n[i]=t[i])},E_=(n,t,e)=>{const i=n.slots=vh();if(n.vnode.shapeFlag&32){const s=t._;s?(bh(i,t,e),e&&Pf(i,"_",s,!0)):yh(t,i)}else t&&Eh(n,t)},b_=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ye;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:bh(s,t,e):(r=!t.$stable,yh(t,s)),o=t}else t&&(Eh(n,t),o={default:1});if(r)for(const a in s)!Gc(a)&&o[a]==null&&delete s[a]},Sn=C_;function T_(n){return A_(n)}function A_(n,t){const e=sa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:m,setScopeId:p=Kn,insertStaticContent:v}=n,g=(C,P,O,Q=null,Z=null,nt=null,R=void 0,ht=null,ct=!!P.dynamicChildren)=>{if(C===P)return;C&&!rr(C,P)&&(Q=U(C),Bt(C,Z,nt,!0),C=null),P.patchFlag===-2&&(ct=!1,P.dynamicChildren=null);const{type:ot,ref:ut,shapeFlag:y}=P;switch(ot){case da:_(C,P,O,Q);break;case bi:h(C,P,O,Q);break;case wo:C==null&&M(P,O,Q,R);break;case Kt:W(C,P,O,Q,Z,nt,R,ht,ct);break;default:y&1?w(C,P,O,Q,Z,nt,R,ht,ct):y&6?$(C,P,O,Q,Z,nt,R,ht,ct):(y&64||y&128)&&ot.process(C,P,O,Q,Z,nt,R,ht,ct,at)}ut!=null&&Z?Er(ut,C&&C.ref,nt,P||C,!P):ut==null&&C&&C.ref!=null&&Er(C.ref,null,nt,C,!0)},_=(C,P,O,Q)=>{if(C==null)i(P.el=a(P.children),O,Q);else{const Z=P.el=C.el;P.children!==C.children&&c(Z,P.children)}},h=(C,P,O,Q)=>{C==null?i(P.el=l(P.children||""),O,Q):P.el=C.el},M=(C,P,O,Q)=>{[C.el,C.anchor]=v(C.children,P,O,Q,C.el,C.anchor)},A=({el:C,anchor:P},O,Q)=>{let Z;for(;C&&C!==P;)Z=m(C),i(C,O,Q),C=Z;i(P,O,Q)},b=({el:C,anchor:P})=>{let O;for(;C&&C!==P;)O=m(C),s(C),C=O;s(P)},w=(C,P,O,Q,Z,nt,R,ht,ct)=>{if(P.type==="svg"?R="svg":P.type==="math"&&(R="mathml"),C==null)I(P,O,Q,Z,nt,R,ht,ct);else{const ot=C.el&&C.el._isVueCE?C.el:null;try{ot&&ot._beginPatch(),S(C,P,Z,nt,R,ht,ct)}finally{ot&&ot._endPatch()}}},I=(C,P,O,Q,Z,nt,R,ht)=>{let ct,ot;const{props:ut,shapeFlag:y,transition:x,dirs:L}=C;if(ct=C.el=o(C.type,nt,ut&&ut.is,ut),y&8?u(ct,C.children):y&16&&F(C.children,ct,null,Q,Z,Pa(C,nt),R,ht),L&&Ki(C,null,Q,"created"),D(ct,C,C.scopeId,R,Q),ut){for(const it in ut)it!=="value"&&!xr(it)&&r(ct,it,null,ut[it],nt,Q);"value"in ut&&r(ct,"value",null,ut.value,nt),(ot=ut.onVnodeBeforeMount)&&Hn(ot,Q,C)}L&&Ki(C,null,Q,"beforeMount");const K=R_(Z,x);K&&x.beforeEnter(ct),i(ct,P,O),((ot=ut&&ut.onVnodeMounted)||K||L)&&Sn(()=>{ot&&Hn(ot,Q,C),K&&x.enter(ct),L&&Ki(C,null,Q,"mounted")},Z)},D=(C,P,O,Q,Z)=>{if(O&&p(C,O),Q)for(let nt=0;nt<Q.length;nt++)p(C,Q[nt]);if(Z){let nt=Z.subTree;if(P===nt||wh(nt.type)&&(nt.ssContent===P||nt.ssFallback===P)){const R=Z.vnode;D(C,R,R.scopeId,R.slotScopeIds,Z.parent)}}},F=(C,P,O,Q,Z,nt,R,ht,ct=0)=>{for(let ot=ct;ot<C.length;ot++){const ut=C[ot]=ht?ki(C[ot]):Xn(C[ot]);g(null,ut,P,O,Q,Z,nt,R,ht)}},S=(C,P,O,Q,Z,nt,R)=>{const ht=P.el=C.el;let{patchFlag:ct,dynamicChildren:ot,dirs:ut}=P;ct|=C.patchFlag&16;const y=C.props||ye,x=P.props||ye;let L;if(O&&ji(O,!1),(L=x.onVnodeBeforeUpdate)&&Hn(L,O,P,C),ut&&Ki(P,C,O,"beforeUpdate"),O&&ji(O,!0),(y.innerHTML&&x.innerHTML==null||y.textContent&&x.textContent==null)&&u(ht,""),ot?T(C.dynamicChildren,ot,ht,O,Q,Pa(P,Z),nt):R||tt(C,P,ht,null,O,Q,Pa(P,Z),nt,!1),ct>0){if(ct&16)N(ht,y,x,O,Z);else if(ct&2&&y.class!==x.class&&r(ht,"class",null,x.class,Z),ct&4&&r(ht,"style",y.style,x.style,Z),ct&8){const K=P.dynamicProps;for(let it=0;it<K.length;it++){const q=K[it],wt=y[q],vt=x[q];(vt!==wt||q==="value")&&r(ht,q,wt,vt,Z,O)}}ct&1&&C.children!==P.children&&u(ht,P.children)}else!R&&ot==null&&N(ht,y,x,O,Z);((L=x.onVnodeUpdated)||ut)&&Sn(()=>{L&&Hn(L,O,P,C),ut&&Ki(P,C,O,"updated")},Q)},T=(C,P,O,Q,Z,nt,R)=>{for(let ht=0;ht<P.length;ht++){const ct=C[ht],ot=P[ht],ut=ct.el&&(ct.type===Kt||!rr(ct,ot)||ct.shapeFlag&198)?f(ct.el):O;g(ct,ot,ut,null,Q,Z,nt,R,!0)}},N=(C,P,O,Q,Z)=>{if(P!==O){if(P!==ye)for(const nt in P)!xr(nt)&&!(nt in O)&&r(C,nt,P[nt],null,Z,Q);for(const nt in O){if(xr(nt))continue;const R=O[nt],ht=P[nt];R!==ht&&nt!=="value"&&r(C,nt,ht,R,Z,Q)}"value"in O&&r(C,"value",P.value,O.value,Z)}},W=(C,P,O,Q,Z,nt,R,ht,ct)=>{const ot=P.el=C?C.el:a(""),ut=P.anchor=C?C.anchor:a("");let{patchFlag:y,dynamicChildren:x,slotScopeIds:L}=P;L&&(ht=ht?ht.concat(L):L),C==null?(i(ot,O,Q),i(ut,O,Q),F(P.children||[],O,ut,Z,nt,R,ht,ct)):y>0&&y&64&&x&&C.dynamicChildren&&C.dynamicChildren.length===x.length?(T(C.dynamicChildren,x,O,Z,nt,R,ht),(P.key!=null||Z&&P===Z.subTree)&&Th(C,P,!0)):tt(C,P,O,ut,Z,nt,R,ht,ct)},$=(C,P,O,Q,Z,nt,R,ht,ct)=>{P.slotScopeIds=ht,C==null?P.shapeFlag&512?Z.ctx.activate(P,O,Q,R,ct):H(P,O,Q,Z,nt,R,ct):B(C,P,ct)},H=(C,P,O,Q,Z,nt,R)=>{const ht=C.component=F_(C,Q,Z);if(ch(C)&&(ht.ctx.renderer=at),O_(ht,!1,R),ht.asyncDep){if(Z&&Z.registerDep(ht,z,R),!C.el){const ct=ht.subTree=zt(bi);h(null,ct,P,O),C.placeholder=ct.el}}else z(ht,C,P,O,Z,nt,R)},B=(C,P,O)=>{const Q=P.component=C.component;if(g_(C,P,O))if(Q.asyncDep&&!Q.asyncResolved){k(Q,P,O);return}else Q.next=P,Q.update();else P.el=C.el,Q.vnode=P},z=(C,P,O,Q,Z,nt,R)=>{const ht=()=>{if(C.isMounted){let{next:y,bu:x,u:L,parent:K,vnode:it}=C;{const kt=Ah(C);if(kt){y&&(y.el=it.el,k(C,y,R)),kt.asyncDep.then(()=>{C.isUnmounted||ht()});return}}let q=y,wt;ji(C,!1),y?(y.el=it.el,k(C,y,R)):y=it,x&&Ao(x),(wt=y.props&&y.props.onVnodeBeforeUpdate)&&Hn(wt,K,y,it),ji(C,!0);const vt=Iu(C),It=C.subTree;C.subTree=vt,g(It,vt,f(It.el),U(It),C,Z,nt),y.el=vt.el,q===null&&v_(C,vt.el),L&&Sn(L,Z),(wt=y.props&&y.props.onVnodeUpdated)&&Sn(()=>Hn(wt,K,y,it),Z)}else{let y;const{el:x,props:L}=P,{bm:K,m:it,parent:q,root:wt,type:vt}=C,It=ks(P);ji(C,!1),K&&Ao(K),!It&&(y=L&&L.onVnodeBeforeMount)&&Hn(y,q,P),ji(C,!0);{wt.ce&&wt.ce._def.shadowRoot!==!1&&wt.ce._injectChildStyle(vt);const kt=C.subTree=Iu(C);g(null,kt,O,Q,C,Z,nt),P.el=kt.el}if(it&&Sn(it,Z),!It&&(y=L&&L.onVnodeMounted)){const kt=P;Sn(()=>Hn(y,q,kt),Z)}(P.shapeFlag&256||q&&ks(q.vnode)&&q.vnode.shapeFlag&256)&&C.a&&Sn(C.a,Z),C.isMounted=!0,P=O=Q=null}};C.scope.on();const ct=C.effect=new Of(ht);C.scope.off();const ot=C.update=ct.run.bind(ct),ut=C.job=ct.runIfDirty.bind(ct);ut.i=C,ut.id=C.uid,ct.scheduler=()=>kc(ut),ji(C,!0),ot()},k=(C,P,O)=>{P.component=C;const Q=C.vnode.props;C.vnode=P,C.next=null,S_(C,P.props,Q,O),b_(C,P.children,O),Mi(),Tu(C),yi()},tt=(C,P,O,Q,Z,nt,R,ht,ct=!1)=>{const ot=C&&C.children,ut=C?C.shapeFlag:0,y=P.children,{patchFlag:x,shapeFlag:L}=P;if(x>0){if(x&128){gt(ot,y,O,Q,Z,nt,R,ht,ct);return}else if(x&256){_t(ot,y,O,Q,Z,nt,R,ht,ct);return}}L&8?(ut&16&&j(ot,Z,nt),y!==ot&&u(O,y)):ut&16?L&16?gt(ot,y,O,Q,Z,nt,R,ht,ct):j(ot,Z,nt,!0):(ut&8&&u(O,""),L&16&&F(y,O,Q,Z,nt,R,ht,ct))},_t=(C,P,O,Q,Z,nt,R,ht,ct)=>{C=C||Fs,P=P||Fs;const ot=C.length,ut=P.length,y=Math.min(ot,ut);let x;for(x=0;x<y;x++){const L=P[x]=ct?ki(P[x]):Xn(P[x]);g(C[x],L,O,null,Z,nt,R,ht,ct)}ot>ut?j(C,Z,nt,!0,!1,y):F(P,O,Q,Z,nt,R,ht,ct,y)},gt=(C,P,O,Q,Z,nt,R,ht,ct)=>{let ot=0;const ut=P.length;let y=C.length-1,x=ut-1;for(;ot<=y&&ot<=x;){const L=C[ot],K=P[ot]=ct?ki(P[ot]):Xn(P[ot]);if(rr(L,K))g(L,K,O,null,Z,nt,R,ht,ct);else break;ot++}for(;ot<=y&&ot<=x;){const L=C[y],K=P[x]=ct?ki(P[x]):Xn(P[x]);if(rr(L,K))g(L,K,O,null,Z,nt,R,ht,ct);else break;y--,x--}if(ot>y){if(ot<=x){const L=x+1,K=L<ut?P[L].el:Q;for(;ot<=x;)g(null,P[ot]=ct?ki(P[ot]):Xn(P[ot]),O,K,Z,nt,R,ht,ct),ot++}}else if(ot>x)for(;ot<=y;)Bt(C[ot],Z,nt,!0),ot++;else{const L=ot,K=ot,it=new Map;for(ot=K;ot<=x;ot++){const Tt=P[ot]=ct?ki(P[ot]):Xn(P[ot]);Tt.key!=null&&it.set(Tt.key,ot)}let q,wt=0;const vt=x-K+1;let It=!1,kt=0;const pt=new Array(vt);for(ot=0;ot<vt;ot++)pt[ot]=0;for(ot=L;ot<=y;ot++){const Tt=C[ot];if(wt>=vt){Bt(Tt,Z,nt,!0);continue}let Lt;if(Tt.key!=null)Lt=it.get(Tt.key);else for(q=K;q<=x;q++)if(pt[q-K]===0&&rr(Tt,P[q])){Lt=q;break}Lt===void 0?Bt(Tt,Z,nt,!0):(pt[Lt-K]=ot+1,Lt>=kt?kt=Lt:It=!0,g(Tt,P[Lt],O,null,Z,nt,R,ht,ct),wt++)}const Et=It?w_(pt):Fs;for(q=Et.length-1,ot=vt-1;ot>=0;ot--){const Tt=K+ot,Lt=P[Tt],yt=P[Tt+1],Jt=Tt+1<ut?yt.el||Rh(yt):Q;pt[ot]===0?g(null,Lt,O,Jt,Z,nt,R,ht,ct):It&&(q<0||ot!==Et[q]?Mt(Lt,O,Jt,2):q--)}}},Mt=(C,P,O,Q,Z=null)=>{const{el:nt,type:R,transition:ht,children:ct,shapeFlag:ot}=C;if(ot&6){Mt(C.component.subTree,P,O,Q);return}if(ot&128){C.suspense.move(P,O,Q);return}if(ot&64){R.move(C,P,O,at);return}if(R===Kt){i(nt,P,O);for(let y=0;y<ct.length;y++)Mt(ct[y],P,O,Q);i(C.anchor,P,O);return}if(R===wo){A(C,P,O);return}if(Q!==2&&ot&1&&ht)if(Q===0)ht.beforeEnter(nt),i(nt,P,O),Sn(()=>ht.enter(nt),Z);else{const{leave:y,delayLeave:x,afterLeave:L}=ht,K=()=>{C.ctx.isUnmounted?s(nt):i(nt,P,O)},it=()=>{nt._isLeaving&&nt[Wm](!0),y(nt,()=>{K(),L&&L()})};x?x(nt,K,it):it()}else i(nt,P,O)},Bt=(C,P,O,Q=!1,Z=!1)=>{const{type:nt,props:R,ref:ht,children:ct,dynamicChildren:ot,shapeFlag:ut,patchFlag:y,dirs:x,cacheIndex:L}=C;if(y===-2&&(Z=!1),ht!=null&&(Mi(),Er(ht,null,O,C,!0),yi()),L!=null&&(P.renderCache[L]=void 0),ut&256){P.ctx.deactivate(C);return}const K=ut&1&&x,it=!ks(C);let q;if(it&&(q=R&&R.onVnodeBeforeUnmount)&&Hn(q,P,C),ut&6)ne(C.component,O,Q);else{if(ut&128){C.suspense.unmount(O,Q);return}K&&Ki(C,null,P,"beforeUnmount"),ut&64?C.type.remove(C,P,O,at,Q):ot&&!ot.hasOnce&&(nt!==Kt||y>0&&y&64)?j(ot,P,O,!1,!0):(nt===Kt&&y&384||!Z&&ut&16)&&j(ct,P,O),Q&&Wt(C)}(it&&(q=R&&R.onVnodeUnmounted)||K)&&Sn(()=>{q&&Hn(q,P,C),K&&Ki(C,null,P,"unmounted")},O)},Wt=C=>{const{type:P,el:O,anchor:Q,transition:Z}=C;if(P===Kt){ae(O,Q);return}if(P===wo){b(C);return}const nt=()=>{s(O),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(C.shapeFlag&1&&Z&&!Z.persisted){const{leave:R,delayLeave:ht}=Z,ct=()=>R(O,nt);ht?ht(C.el,nt,ct):ct()}else nt()},ae=(C,P)=>{let O;for(;C!==P;)O=m(C),s(C),C=O;s(P)},ne=(C,P,O)=>{const{bum:Q,scope:Z,job:nt,subTree:R,um:ht,m:ct,a:ot}=C;Nu(ct),Nu(ot),Q&&Ao(Q),Z.stop(),nt&&(nt.flags|=8,Bt(R,C,P,O)),ht&&Sn(ht,P),Sn(()=>{C.isUnmounted=!0},P)},j=(C,P,O,Q=!1,Z=!1,nt=0)=>{for(let R=nt;R<C.length;R++)Bt(C[R],P,O,Q,Z)},U=C=>{if(C.shapeFlag&6)return U(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const P=m(C.anchor||C.el),O=P&&P[Hm];return O?m(O):P};let st=!1;const lt=(C,P,O)=>{let Q;C==null?P._vnode&&(Bt(P._vnode,null,null,!0),Q=P._vnode.component):g(P._vnode||null,C,P,null,null,null,O),P._vnode=C,st||(st=!0,Tu(Q),nh(),st=!1)},at={p:g,um:Bt,m:Mt,r:Wt,mt:H,mc:F,pc:tt,pbc:T,n:U,o:n};return{render:lt,hydrate:void 0,createApp:d_(lt)}}function Pa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function ji({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function R_(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Th(n,t,e=!1){const i=n.children,s=t.children;if(Xt(i)&&Xt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ki(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Th(o,a)),a.type===da&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===Kt?1:0)),a.type===bi&&!a.el&&(a.el=o.el)}}function w_(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Ah(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ah(t)}function Nu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Rh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Rh(t.subTree):null}const wh=n=>n.__isSuspense;function C_(n,t){t&&t.pendingBranch?Xt(n)?t.effects.push(...n):t.effects.push(n):Om(n)}const Kt=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),bi=Symbol.for("v-cmt"),wo=Symbol.for("v-stc"),Tr=[];let yn=null;function ft(n=!1){Tr.push(yn=n?null:[])}function P_(){Tr.pop(),yn=Tr[Tr.length-1]||null}let Dr=1;function Xo(n,t=!1){Dr+=n,n<0&&yn&&t&&(yn.hasOnce=!0)}function Ch(n){return n.dynamicChildren=Dr>0?yn||Fs:null,P_(),Dr>0&&yn&&yn.push(n),n}function mt(n,t,e,i,s,r){return Ch(d(n,t,e,i,s,r,!0))}function $o(n,t,e,i,s){return Ch(zt(n,t,e,i,s,!0))}function Ir(n){return n?n.__v_isVNode===!0:!1}function rr(n,t){return n.type===t.type&&n.key===t.key}const Ph=({key:n})=>n??null,Co=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Fe(n)||Le(n)||Zt(n)?{i:$e,r:n,k:t,f:!!e}:n:null);function d(n,t=null,e=null,i=0,s=null,r=n===Kt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Ph(t),ref:t&&Co(t),scopeId:sh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$e};return a?(Xc(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Fe(e)?8:16),Dr>0&&!o&&yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&yn.push(l),l}const zt=D_;function D_(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===n_)&&(n=bi),Ir(n)){const a=Xs(n,t,!0);return e&&Xc(a,e),Dr>0&&!r&&yn&&(a.shapeFlag&6?yn[yn.indexOf(n)]=a:yn.push(a)),a.patchFlag=-2,a}if(H_(n)&&(n=n.__vccOpts),t){t=I_(t);let{class:a,style:l}=t;a&&!Fe(a)&&(t.class=en(a)),Ee(l)&&(aa(l)&&!Xt(l)&&(l=qe({},l)),t.style=ra(l))}const o=Fe(n)?1:wh(n)?128:Gm(n)?64:Ee(n)?4:Zt(n)?2:0;return d(n,t,e,i,s,o,r,!0)}function I_(n){return n?aa(n)||xh(n)?qe({},n):n:null}function Xs(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?L_(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ph(c),ref:t&&t.ref?e&&r?Xt(r)?r.concat(Co(t)):[r,Co(t)]:Co(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Kt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xs(n.ssContent),ssFallback:n.ssFallback&&Xs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Vc(u,l.clone(u)),u}function Ve(n=" ",t=0){return zt(da,null,n,t)}function Vs(n,t){const e=zt(wo,null,n);return e.staticCount=t,e}function En(n="",t=!1){return t?(ft(),$o(bi,null,n)):zt(bi,null,n)}function Xn(n){return n==null||typeof n=="boolean"?zt(bi):Xt(n)?zt(Kt,null,n.slice()):Ir(n)?ki(n):zt(da,null,String(n))}function ki(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xs(n)}function Xc(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Xt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Xc(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!xh(t)?t._ctx=$e:s===3&&$e&&($e.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Zt(t)?(t={default:t,_ctx:$e},e=32):(t=String(t),i&64?(e=16,t=[Ve(t)]):e=8);n.children=t,n.shapeFlag|=e}function L_(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=en([t.class,i.class]));else if(s==="style")t.style=ra([t.style,i.style]);else if(Qo(s)){const r=t[s],o=i[s];o&&r!==o&&!(Xt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Hn(n,t,e,i=null){Qn(n,t,7,[e,i])}const U_=mh();let N_=0;function F_(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||U_,r={uid:N_++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Uf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mh(i,s),emitsOptions:_h(i,s),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:i.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=h_.bind(null,r),n.ce&&n.ce(r),r}let Qe=null;const Dh=()=>Qe||$e;let Yo,Al;{const n=sa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Yo=t("__VUE_INSTANCE_SETTERS__",e=>Qe=e),Al=t("__VUE_SSR_SETTERS__",e=>Lr=e)}const Xr=n=>{const t=Qe;return Yo(n),n.scope.on(),()=>{n.scope.off(),Yo(t)}},Fu=()=>{Qe&&Qe.scope.off(),Yo(null)};function Ih(n){return n.vnode.shapeFlag&4}let Lr=!1;function O_(n,t=!1,e=!1){t&&Al(t);const{props:i,children:s}=n.vnode,r=Ih(n);x_(n,i,r,t),E_(n,s,e||t);const o=r?B_(n,t):void 0;return t&&Al(!1),o}function B_(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,s_);const{setup:i}=e;if(i){Mi();const s=n.setupContext=i.length>1?V_(n):null,r=Xr(n),o=Gr(i,n,0,[n.props,s]),a=Rf(o);if(yi(),r(),(a||n.sp)&&!ks(n)&&lh(n),a){if(o.then(Fu,Fu),t)return o.then(l=>{Ou(n,l)}).catch(l=>{la(l,n,0)});n.asyncDep=o}else Ou(n,o)}else Lh(n)}function Ou(n,t,e){Zt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ee(t)&&(n.setupState=Qf(t)),Lh(n)}function Lh(n,t,e){const i=n.type;n.render||(n.render=i.render||Kn);{const s=Xr(n);Mi();try{r_(n)}finally{yi(),s()}}}const k_={get(n,t){return Je(n,"get",""),n[t]}};function V_(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,k_),slots:n.slots,emit:n.emit,expose:t}}function fa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Qf(Bc(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in br)return br[e](n)},has(t,e){return e in t||e in br}})):n.proxy}function z_(n,t=!0){return Zt(n)?n.displayName||n.name:n.name||t&&n.__name}function H_(n){return Zt(n)&&"__vccOpts"in n}const Xe=(n,t)=>Im(n,t,Lr);function Uh(n,t,e){try{Xo(-1);const i=arguments.length;return i===2?Ee(t)&&!Xt(t)?Ir(t)?zt(n,null,[t]):zt(n,t):zt(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Ir(e)&&(e=[e]),zt(n,t,e))}finally{Xo(1)}}const G_="3.5.27";/**
* @vue/runtime-dom v3.5.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rl;const Bu=typeof window<"u"&&window.trustedTypes;if(Bu)try{Rl=Bu.createPolicy("vue",{createHTML:n=>n})}catch{}const Nh=Rl?n=>Rl.createHTML(n):n=>n,W_="http://www.w3.org/2000/svg",X_="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,ku=di&&di.createElement("template"),$_={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?di.createElementNS(W_,n):t==="mathml"?di.createElementNS(X_,n):e?di.createElement(n,{is:e}):di.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>di.createTextNode(n),createComment:n=>di.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>di.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{ku.innerHTML=Nh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ku.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Y_=Symbol("_vtc");function q_(n,t,e){const i=n[Y_];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Vu=Symbol("_vod"),K_=Symbol("_vsh"),j_=Symbol(""),Z_=/(?:^|;)\s*display\s*:/;function J_(n,t,e){const i=n.style,s=Fe(e);let r=!1;if(e&&!s){if(t)if(Fe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Po(i,a,"")}else for(const o in t)e[o]==null&&Po(i,o,"");for(const o in e)o==="display"&&(r=!0),Po(i,o,e[o])}else if(s){if(t!==e){const o=i[j_];o&&(e+=";"+o),i.cssText=e,r=Z_.test(e)}}else t&&n.removeAttribute("style");Vu in n&&(n[Vu]=r?i.display:"",n[K_]&&(i.display="none"))}const zu=/\s*!important$/;function Po(n,t,e){if(Xt(e))e.forEach(i=>Po(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=Q_(n,t);zu.test(e)?n.setProperty(hs(i),e.replace(zu,""),"important"):n[i]=e}}const Hu=["Webkit","Moz","ms"],Da={};function Q_(n,t){const e=Da[t];if(e)return e;let i=Pn(t);if(i!=="filter"&&i in n)return Da[t]=i;i=na(i);for(let s=0;s<Hu.length;s++){const r=Hu[s]+i;if(r in n)return Da[t]=r}return t}const Gu="http://www.w3.org/1999/xlink";function Wu(n,t,e,i,s,r=im(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Gu,t.slice(6,t.length)):n.setAttributeNS(Gu,t,e):e==null||r&&!Df(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Bn(e)?String(e):e)}function Xu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Nh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Df(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Hi(n,t,e,i){n.addEventListener(t,e,i)}function tg(n,t,e,i){n.removeEventListener(t,e,i)}const $u=Symbol("_vei");function eg(n,t,e,i,s=null){const r=n[$u]||(n[$u]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=ng(t);if(i){const c=r[t]=rg(i,s);Hi(n,a,c,l)}else o&&(tg(n,a,o,l),r[t]=void 0)}}const Yu=/(?:Once|Passive|Capture)$/;function ng(n){let t;if(Yu.test(n)){t={};let i;for(;i=n.match(Yu);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):hs(n.slice(2)),t]}let Ia=0;const ig=Promise.resolve(),sg=()=>Ia||(ig.then(()=>Ia=0),Ia=Date.now());function rg(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Qn(og(i,e.value),t,5,[i])};return e.value=n,e.attached=sg(),e}function og(n,t){if(Xt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const qu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ag=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?q_(n,i,o):t==="style"?J_(n,e,i):Qo(t)?Cc(t)||eg(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lg(n,t,i,o))?(Xu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Wu(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Fe(i))?Xu(n,Pn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Wu(n,t,i,o))};function lg(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&qu(t)&&Zt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qu(t)&&Fe(e)?!1:t in n}const $s=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Xt(t)?e=>Ao(t,e):t};function cg(n){n.target.composing=!0}function Ku(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const vi=Symbol("_assign");function ju(n,t,e){return t&&(n=n.trim()),e&&(n=ia(n)),n}const fi={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[vi]=$s(s);const r=i||s.props&&s.props.type==="number";Hi(n,t?"change":"input",o=>{o.target.composing||n[vi](ju(n.value,e,r))}),(e||r)&&Hi(n,"change",()=>{n.value=ju(n.value,e,r)}),t||(Hi(n,"compositionstart",cg),Hi(n,"compositionend",Ku),Hi(n,"change",Ku))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[vi]=$s(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?ia(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},Fh={deep:!0,created(n,t,e){n[vi]=$s(e),Hi(n,"change",()=>{const i=n._modelValue,s=Ur(n),r=n.checked,o=n[vi];if(Xt(i)){const a=Dc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(tr(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Oh(n,r))})},mounted:Zu,beforeUpdate(n,t,e){n[vi]=$s(e),Zu(n,t,e)}};function Zu(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Xt(t))s=Dc(t,i.props.value)>-1;else if(tr(t))s=t.has(i.props.value);else{if(t===e)return;s=zr(t,Oh(n,!0))}n.checked!==s&&(n.checked=s)}const Se={deep:!0,created(n,{value:t,modifiers:{number:e}},i){const s=tr(t);Hi(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>e?ia(Ur(o)):Ur(o));n[vi](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Wr(()=>{n._assigning=!1})}),n[vi]=$s(i)},mounted(n,{value:t}){Ju(n,t)},beforeUpdate(n,t,e){n[vi]=$s(e)},updated(n,{value:t}){n._assigning||Ju(n,t)}};function Ju(n,t){const e=n.multiple,i=Xt(t);if(!(e&&!i&&!tr(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Ur(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Dc(t,a)>-1}else o.selected=t.has(a);else if(zr(Ur(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Ur(n){return"_value"in n?n._value:n.value}function Oh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const ug=qe({patchProp:ag},$_);let Qu;function dg(){return Qu||(Qu=T_(ug))}const fg=(...n)=>{const t=dg().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=pg(i);if(!s)return;const r=t._component;!Zt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,hg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function hg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function pg(n){return Fe(n)?document.querySelector(n):n}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Bh;const ha=n=>Bh=n,kh=Symbol();function wl(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var Ar;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(Ar||(Ar={}));function mg(){const n=Nf(!0),t=n.run(()=>Dt({}));let e=[],i=[];const s=Bc({install(r){ha(s),s._a=r,r.provide(kh,s),r.config.globalProperties.$pinia=s,i.forEach(o=>e.push(o)),i=[]},use(r){return this._a?e.push(r):i.push(r),this},_p:e,_a:null,_e:n,_s:new Map,state:t});return s}const Vh=()=>{};function td(n,t,e,i=Vh){n.push(t);const s=()=>{const r=n.indexOf(t);r>-1&&(n.splice(r,1),i())};return!e&&Ff()&&rm(s),s}function gs(n,...t){n.slice().forEach(e=>{e(...t)})}const _g=n=>n(),ed=Symbol(),La=Symbol();function Cl(n,t){n instanceof Map&&t instanceof Map?t.forEach((e,i)=>n.set(i,e)):n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const e in t){if(!t.hasOwnProperty(e))continue;const i=t[e],s=n[e];wl(s)&&wl(i)&&n.hasOwnProperty(e)&&!Le(i)&&!gi(i)?n[e]=Cl(s,i):n[e]=i}return n}const gg=Symbol();function vg(n){return!wl(n)||!n.hasOwnProperty(gg)}const{assign:Fi}=Object;function xg(n){return!!(Le(n)&&n.effect)}function Sg(n,t,e,i){const{state:s,actions:r,getters:o}=t,a=e.state.value[n];let l;function c(){a||(e.state.value[n]=s?s():{});const u=wm(e.state.value[n]);return Fi(u,r,Object.keys(o||{}).reduce((f,m)=>(f[m]=Bc(Xe(()=>{ha(e);const p=e._s.get(n);return o[m].call(p,p)})),f),{}))}return l=zh(n,c,t,e,i,!0),l}function zh(n,t,e={},i,s,r){let o;const a=Fi({actions:{}},e),l={deep:!0};let c,u,f=[],m=[],p;const v=i.state.value[n];!r&&!v&&(i.state.value[n]={});let g;function _(F){let S;c=u=!1,typeof F=="function"?(F(i.state.value[n]),S={type:Ar.patchFunction,storeId:n,events:p}):(Cl(i.state.value[n],F),S={type:Ar.patchObject,payload:F,storeId:n,events:p});const T=g=Symbol();Wr().then(()=>{g===T&&(c=!0)}),u=!0,gs(f,S,i.state.value[n])}const h=r?function(){const{state:S}=e,T=S?S():{};this.$patch(N=>{Fi(N,T)})}:Vh;function M(){o.stop(),f=[],m=[],i._s.delete(n)}const A=(F,S="")=>{if(ed in F)return F[La]=S,F;const T=function(){ha(i);const N=Array.from(arguments),W=[],$=[];function H(k){W.push(k)}function B(k){$.push(k)}gs(m,{args:N,name:T[La],store:w,after:H,onError:B});let z;try{z=F.apply(this&&this.$id===n?this:w,N)}catch(k){throw gs($,k),k}return z instanceof Promise?z.then(k=>(gs(W,k),k)).catch(k=>(gs($,k),Promise.reject(k))):(gs(W,z),z)};return T[ed]=!0,T[La]=S,T},b={_p:i,$id:n,$onAction:td.bind(null,m),$patch:_,$reset:h,$subscribe(F,S={}){const T=td(f,F,S.detached,()=>N()),N=o.run(()=>yr(()=>i.state.value[n],W=>{(S.flush==="sync"?u:c)&&F({storeId:n,type:Ar.direct,events:p},W)},Fi({},l,S)));return T},$dispose:M},w=Hr(b);i._s.set(n,w);const D=(i._a&&i._a.runWithContext||_g)(()=>i._e.run(()=>(o=Nf()).run(()=>t({action:A}))));for(const F in D){const S=D[F];if(Le(S)&&!xg(S)||gi(S))r||(v&&vg(S)&&(Le(S)?S.value=v[F]:Cl(S,v[F])),i.state.value[n][F]=S);else if(typeof S=="function"){const T=A(S,F);D[F]=T,a.actions[F]=S}}return Fi(w,D),Fi(ue(w),D),Object.defineProperty(w,"$state",{get:()=>i.state.value[n],set:F=>{_(S=>{Fi(S,F)})}}),i._p.forEach(F=>{Fi(w,o.run(()=>F({store:w,app:i._a,pinia:i,options:a})))}),v&&r&&e.hydrate&&e.hydrate(w.$state,v),c=!0,u=!0,w}/*! #__NO_SIDE_EFFECTS__ */function $c(n,t,e){let i,s;const r=typeof t=="function";typeof n=="string"?(i=n,s=r?e:t):(s=n,i=n.id);function o(a,l){const c=Bm();return a=a||(c?On(kh,null):null),a&&ha(a),a=Bh,a._s.has(i)||(r?zh(i,t,s,a):Sg(i,s,a)),a._s.get(i)}return o.$id=i,o}const Oe=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},Mg={};function yg(n,t){const e=Go("router-view");return ft(),$o(e)}const Eg=Oe(Mg,[["render",yg]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Us=typeof document<"u";function Hh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function bg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Hh(n.default)}const he=Object.assign;function Ua(n,t){const e={};for(const i in t){const s=t[i];e[i]=Vn(s)?s.map(n):n(s)}return e}const Rr=()=>{},Vn=Array.isArray;function nd(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Gh=/#/g,Tg=/&/g,Ag=/\//g,Rg=/=/g,wg=/\?/g,Wh=/\+/g,Cg=/%5B/g,Pg=/%5D/g,Xh=/%5E/g,Dg=/%60/g,$h=/%7B/g,Ig=/%7C/g,Yh=/%7D/g,Lg=/%20/g;function Yc(n){return n==null?"":encodeURI(""+n).replace(Ig,"|").replace(Cg,"[").replace(Pg,"]")}function Ug(n){return Yc(n).replace($h,"{").replace(Yh,"}").replace(Xh,"^")}function Pl(n){return Yc(n).replace(Wh,"%2B").replace(Lg,"+").replace(Gh,"%23").replace(Tg,"%26").replace(Dg,"`").replace($h,"{").replace(Yh,"}").replace(Xh,"^")}function Ng(n){return Pl(n).replace(Rg,"%3D")}function Fg(n){return Yc(n).replace(Gh,"%23").replace(wg,"%3F")}function Og(n){return Fg(n).replace(Ag,"%2F")}function Nr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Bg=/\/$/,kg=n=>n.replace(Bg,"");function Na(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=Gg(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:Nr(o)}}function Vg(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function id(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function zg(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Ys(t.matched[i],e.matched[s])&&qh(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Ys(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function qh(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!Hg(n[e],t[e]))return!1;return!0}function Hg(n,t){return Vn(n)?sd(n,t):Vn(t)?sd(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function sd(n,t){return Vn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function Gg(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Dl=function(n){return n.pop="pop",n.push="push",n}({}),Fa=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Wg(n){if(!n)if(Us){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),kg(n)}const Xg=/^[^#]+#/;function $g(n,t){return n.replace(Xg,"#")+t}function Yg(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const pa=()=>({left:window.scrollX,top:window.scrollY});function qg(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Yg(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function rd(n,t){return(history.state?history.state.position-t:-1)+n}const Il=new Map;function Kg(n,t){Il.set(n,t)}function jg(n){const t=Il.get(n);return Il.delete(n),t}function Zg(n){return typeof n=="string"||n&&typeof n=="object"}function Kh(n){return typeof n=="string"||typeof n=="symbol"}let De=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const jh=Symbol("");De.MATCHER_NOT_FOUND+"",De.NAVIGATION_GUARD_REDIRECT+"",De.NAVIGATION_ABORTED+"",De.NAVIGATION_CANCELLED+"",De.NAVIGATION_DUPLICATED+"";function qs(n,t){return he(new Error,{type:n,[jh]:!0},t)}function ri(n,t){return n instanceof Error&&jh in n&&(t==null||!!(n.type&t))}const Jg=["params","query","hash"];function Qg(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of Jg)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function tv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(Wh," "),r=s.indexOf("="),o=Nr(r<0?s:s.slice(0,r)),a=r<0?null:Nr(s.slice(r+1));if(o in t){let l=t[o];Vn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function od(n){let t="";for(let e in n){const i=n[e];if(e=Ng(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Vn(i)?i.map(s=>s&&Pl(s)):[i&&Pl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function ev(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Vn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const nv=Symbol(""),ad=Symbol(""),ma=Symbol(""),Zh=Symbol(""),Ll=Symbol("");function or(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Vi(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=m=>{m===!1?l(qs(De.NAVIGATION_ABORTED,{from:e,to:t})):m instanceof Error?l(m):Zg(m)?l(qs(De.NAVIGATION_GUARD_REDIRECT,{from:t,to:m})):(o&&i.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(m=>l(m))})}function Oa(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Hh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Vi(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=bg(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const m=(f.__vccOpts||f)[t];return m&&Vi(m,e,i,o,a,s)()}))}}return r}function iv(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>Ys(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>Ys(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let sv=()=>location.protocol+"//"+location.host;function Jh(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),id(a,"")}return id(e,n)+i+s}function rv(n,t,e,i){let s=[],r=[],o=null;const a=({state:m})=>{const p=Jh(n,location),v=e.value,g=t.value;let _=0;if(m){if(e.value=p,t.value=m,o&&o===v){o=null;return}_=g?m.position-g.position:0}else i(p);s.forEach(h=>{h(e.value,v,{delta:_,type:Dl.pop,direction:_?_>0?Fa.forward:Fa.back:Fa.unknown})})};function l(){o=e.value}function c(m){s.push(m);const p=()=>{const v=s.indexOf(m);v>-1&&s.splice(v,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(he({},m.state,{scroll:pa()}),"")}}function f(){for(const m of r)m();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function ld(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?pa():null}}function ov(n){const{history:t,location:e}=window,i={value:Jh(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const f=n.indexOf("#"),m=f>-1?(e.host&&document.querySelector("base")?n:n.slice(f))+l:sv()+n+l;try{t[u?"replaceState":"pushState"](c,"",m),s.value=c}catch(p){console.error(p),e[u?"replace":"assign"](m)}}function o(l,c){r(l,he({},t.state,ld(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=he({},s.value,t.state,{forward:l,scroll:pa()});r(u.current,u,!0),r(l,he({},ld(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function av(n){n=Wg(n);const t=ov(n),e=rv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=he({location:"",base:n,go:i,createHref:$g.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function lv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),av(n)}let os=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var ke=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(ke||{});const cv={type:os.Static,value:""},uv=/[a-zA-Z0-9_]/;function dv(n){if(!n)return[[]];if(n==="/")return[[cv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${c}": ${p}`)}let e=ke.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function f(){c&&(e===ke.Static?r.push({type:os.Static,value:c}):e===ke.Param||e===ke.ParamRegExp||e===ke.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:os.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function m(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==ke.ParamRegExp){i=e,e=ke.EscapeNext;continue}switch(e){case ke.Static:l==="/"?(c&&f(),o()):l===":"?(f(),e=ke.Param):m();break;case ke.EscapeNext:m(),e=i;break;case ke.Param:l==="("?e=ke.ParamRegExp:uv.test(l)?m():(f(),e=ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ke.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=ke.ParamRegExpEnd:u+=l;break;case ke.ParamRegExpEnd:f(),e=ke.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===ke.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),f(),o(),s}const cd="[^/]+?",fv={sensitive:!1,strict:!1,start:!0,end:!0};var on=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(on||{});const hv=/[.+*?^${}()[\]/\\]/g;function pv(n,t){const e=he({},fv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[on.Root];e.strict&&!c.length&&(s+="/");for(let f=0;f<c.length;f++){const m=c[f];let p=on.Segment+(e.sensitive?on.BonusCaseSensitive:0);if(m.type===os.Static)f||(s+="/"),s+=m.value.replace(hv,"\\$&"),p+=on.Static;else if(m.type===os.Param){const{value:v,repeatable:g,optional:_,regexp:h}=m;r.push({name:v,repeatable:g,optional:_});const M=h||cd;if(M!==cd){p+=on.BonusCustomRegExp;try{`${M}`}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+b.message)}}let A=g?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(A=_&&c.length<2?`(?:/${A})`:"/"+A),_&&(A+="?"),s+=A,p+=on.Dynamic,_&&(p+=on.BonusOptional),g&&(p+=on.BonusRepeatable),M===".*"&&(p+=on.BonusWildcard)}u.push(p)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=on.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let m=1;m<u.length;m++){const p=u[m]||"",v=r[m-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const m of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of m)if(p.type===os.Static)u+=p.value;else if(p.type===os.Param){const{value:v,repeatable:g,optional:_}=p,h=v in c?c[v]:"";if(Vn(h)&&!g)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Vn(h)?h.join("/"):h;if(!M)if(_)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function mv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===on.Static+on.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===on.Static+on.Segment?1:-1:0}function Qh(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=mv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(ud(i))return 1;if(ud(s))return-1}return s.length-i.length}function ud(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const _v={strict:!1,end:!0,sensitive:!1};function gv(n,t,e){const i=pv(dv(n.path),e),s=he(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function vv(n,t){const e=[],i=new Map;t=nd(_v,t);function s(f){return i.get(f)}function r(f,m,p){const v=!p,g=fd(f);g.aliasOf=p&&p.record;const _=nd(t,f),h=[g];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of b)h.push(fd(he({},g,{components:p?p.record.components:g.components,path:w,aliasOf:p?p.record:g})))}let M,A;for(const b of h){const{path:w}=b;if(m&&w[0]!=="/"){const I=m.record.path,D=I[I.length-1]==="/"?"":"/";b.path=m.record.path+(w&&D+w)}if(M=gv(b,m,_),p?p.alias.push(M):(A=A||M,A!==M&&A.alias.push(M),v&&f.name&&!hd(M)&&o(f.name)),tp(M)&&l(M),g.children){const I=g.children;for(let D=0;D<I.length;D++)r(I[D],M,p&&p.children[D])}p=p||M}return A?()=>{o(A)}:Rr}function o(f){if(Kh(f)){const m=i.get(f);m&&(i.delete(f),e.splice(e.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=e.indexOf(f);m>-1&&(e.splice(m,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return e}function l(f){const m=Mv(f,e);e.splice(m,0,f),f.record.name&&!hd(f)&&i.set(f.record.name,f)}function c(f,m){let p,v={},g,_;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw qs(De.MATCHER_NOT_FOUND,{location:f});_=p.record.name,v=he(dd(m.params,p.keys.filter(A=>!A.optional).concat(p.parent?p.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),f.params&&dd(f.params,p.keys.map(A=>A.name))),g=p.stringify(v)}else if(f.path!=null)g=f.path,p=e.find(A=>A.re.test(g)),p&&(v=p.parse(g),_=p.record.name);else{if(p=m.name?i.get(m.name):e.find(A=>A.re.test(m.path)),!p)throw qs(De.MATCHER_NOT_FOUND,{location:f,currentLocation:m});_=p.record.name,v=he({},m.params,f.params),g=p.stringify(v)}const h=[];let M=p;for(;M;)h.unshift(M.record),M=M.parent;return{name:_,path:g,params:v,matched:h,meta:Sv(h)}}n.forEach(f=>r(f));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function dd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function fd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:xv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function xv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function hd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Sv(n){return n.reduce((t,e)=>he(t,e.meta),{})}function Mv(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;Qh(n,t[r])<0?i=r:e=r+1}const s=yv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function yv(n){let t=n;for(;t=t.parent;)if(tp(t)&&Qh(n,t)===0)return t}function tp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function pd(n){const t=On(ma),e=On(Zh),i=Xe(()=>{const l=an(n.to);return t.resolve(l)}),s=Xe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=e.matched;if(!u||!f.length)return-1;const m=f.findIndex(Ys.bind(null,u));if(m>-1)return m;const p=md(l[c-2]);return c>1&&md(u)===p&&f[f.length-1].path!==p?f.findIndex(Ys.bind(null,l[c-2])):m}),r=Xe(()=>s.value>-1&&Rv(e.params,i.value.params)),o=Xe(()=>s.value>-1&&s.value===e.matched.length-1&&qh(e.params,i.value.params));function a(l={}){if(Av(l)){const c=t[an(n.replace)?"replace":"push"](an(n.to)).catch(Rr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Xe(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Ev(n){return n.length===1?n[0]:n}const bv=ah({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:pd,setup(n,{slots:t}){const e=Hr(pd(n)),{options:i}=On(ma),s=Xe(()=>({[_d(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[_d(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&Ev(t.default(e));return n.custom?r:Uh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Tv=bv;function Av(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Rv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Vn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function md(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _d=(n,t,e)=>n??t??e,wv=ah({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=On(Ll),s=Xe(()=>n.route||i.value),r=On(ad,0),o=Xe(()=>{let c=an(r);const{matched:u}=s.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Xe(()=>s.value.matched[o.value]);Ro(ad,Xe(()=>o.value+1)),Ro(nv,a),Ro(Ll,s);const l=Dt();return yr(()=>[l.value,a.value,n.name],([c,u,f],[m,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===m&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Ys(u,p)||!m)&&(u.enterCallbacks[f]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,f=a.value,m=f&&f.components[u];if(!m)return gd(e.default,{Component:m,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,_=Uh(m,he({},v,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return gd(e.default,{Component:_,route:c})||_}}});function gd(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Cv=wv;function Pv(n){const t=vv(n.routes,n),e=n.parseQuery||tv,i=n.stringifyQuery||od,s=n.history,r=or(),o=or(),a=or(),l=Tm(Ci);let c=Ci;Us&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ua.bind(null,U=>""+U),f=Ua.bind(null,Og),m=Ua.bind(null,Nr);function p(U,st){let lt,at;return Kh(U)?(lt=t.getRecordMatcher(U),at=st):at=U,t.addRoute(at,lt)}function v(U){const st=t.getRecordMatcher(U);st&&t.removeRoute(st)}function g(){return t.getRoutes().map(U=>U.record)}function _(U){return!!t.getRecordMatcher(U)}function h(U,st){if(st=he({},st||l.value),typeof U=="string"){const O=Na(e,U,st.path),Q=t.resolve({path:O.path},st),Z=s.createHref(O.fullPath);return he(O,Q,{params:m(Q.params),hash:Nr(O.hash),redirectedFrom:void 0,href:Z})}let lt;if(U.path!=null)lt=he({},U,{path:Na(e,U.path,st.path).path});else{const O=he({},U.params);for(const Q in O)O[Q]==null&&delete O[Q];lt=he({},U,{params:f(O)}),st.params=f(st.params)}const at=t.resolve(lt,st),Nt=U.hash||"";at.params=u(m(at.params));const C=Vg(i,he({},U,{hash:Ug(Nt),path:at.path})),P=s.createHref(C);return he({fullPath:C,hash:Nt,query:i===od?ev(U.query):U.query||{}},at,{redirectedFrom:void 0,href:P})}function M(U){return typeof U=="string"?Na(e,U,l.value.path):he({},U)}function A(U,st){if(c!==U)return qs(De.NAVIGATION_CANCELLED,{from:st,to:U})}function b(U){return D(U)}function w(U){return b(he(M(U),{replace:!0}))}function I(U,st){const lt=U.matched[U.matched.length-1];if(lt&&lt.redirect){const{redirect:at}=lt;let Nt=typeof at=="function"?at(U,st):at;return typeof Nt=="string"&&(Nt=Nt.includes("?")||Nt.includes("#")?Nt=M(Nt):{path:Nt},Nt.params={}),he({query:U.query,hash:U.hash,params:Nt.path!=null?{}:U.params},Nt)}}function D(U,st){const lt=c=h(U),at=l.value,Nt=U.state,C=U.force,P=U.replace===!0,O=I(lt,at);if(O)return D(he(M(O),{state:typeof O=="object"?he({},Nt,O.state):Nt,force:C,replace:P}),st||lt);const Q=lt;Q.redirectedFrom=st;let Z;return!C&&zg(i,at,lt)&&(Z=qs(De.NAVIGATION_DUPLICATED,{to:Q,from:at}),Mt(at,at,!0,!1)),(Z?Promise.resolve(Z):T(Q,at)).catch(nt=>ri(nt)?ri(nt,De.NAVIGATION_GUARD_REDIRECT)?nt:gt(nt):tt(nt,Q,at)).then(nt=>{if(nt){if(ri(nt,De.NAVIGATION_GUARD_REDIRECT))return D(he({replace:P},M(nt.to),{state:typeof nt.to=="object"?he({},Nt,nt.to.state):Nt,force:C}),st||Q)}else nt=W(Q,at,!0,P,Nt);return N(Q,at,nt),nt})}function F(U,st){const lt=A(U,st);return lt?Promise.reject(lt):Promise.resolve()}function S(U){const st=ae.values().next().value;return st&&typeof st.runWithContext=="function"?st.runWithContext(U):U()}function T(U,st){let lt;const[at,Nt,C]=iv(U,st);lt=Oa(at.reverse(),"beforeRouteLeave",U,st);for(const O of at)O.leaveGuards.forEach(Q=>{lt.push(Vi(Q,U,st))});const P=F.bind(null,U,st);return lt.push(P),j(lt).then(()=>{lt=[];for(const O of r.list())lt.push(Vi(O,U,st));return lt.push(P),j(lt)}).then(()=>{lt=Oa(Nt,"beforeRouteUpdate",U,st);for(const O of Nt)O.updateGuards.forEach(Q=>{lt.push(Vi(Q,U,st))});return lt.push(P),j(lt)}).then(()=>{lt=[];for(const O of C)if(O.beforeEnter)if(Vn(O.beforeEnter))for(const Q of O.beforeEnter)lt.push(Vi(Q,U,st));else lt.push(Vi(O.beforeEnter,U,st));return lt.push(P),j(lt)}).then(()=>(U.matched.forEach(O=>O.enterCallbacks={}),lt=Oa(C,"beforeRouteEnter",U,st,S),lt.push(P),j(lt))).then(()=>{lt=[];for(const O of o.list())lt.push(Vi(O,U,st));return lt.push(P),j(lt)}).catch(O=>ri(O,De.NAVIGATION_CANCELLED)?O:Promise.reject(O))}function N(U,st,lt){a.list().forEach(at=>S(()=>at(U,st,lt)))}function W(U,st,lt,at,Nt){const C=A(U,st);if(C)return C;const P=st===Ci,O=Us?history.state:{};lt&&(at||P?s.replace(U.fullPath,he({scroll:P&&O&&O.scroll},Nt)):s.push(U.fullPath,Nt)),l.value=U,Mt(U,st,lt,P),gt()}let $;function H(){$||($=s.listen((U,st,lt)=>{if(!ne.listening)return;const at=h(U),Nt=I(at,ne.currentRoute.value);if(Nt){D(he(Nt,{replace:!0,force:!0}),at).catch(Rr);return}c=at;const C=l.value;Us&&Kg(rd(C.fullPath,lt.delta),pa()),T(at,C).catch(P=>ri(P,De.NAVIGATION_ABORTED|De.NAVIGATION_CANCELLED)?P:ri(P,De.NAVIGATION_GUARD_REDIRECT)?(D(he(M(P.to),{force:!0}),at).then(O=>{ri(O,De.NAVIGATION_ABORTED|De.NAVIGATION_DUPLICATED)&&!lt.delta&&lt.type===Dl.pop&&s.go(-1,!1)}).catch(Rr),Promise.reject()):(lt.delta&&s.go(-lt.delta,!1),tt(P,at,C))).then(P=>{P=P||W(at,C,!1),P&&(lt.delta&&!ri(P,De.NAVIGATION_CANCELLED)?s.go(-lt.delta,!1):lt.type===Dl.pop&&ri(P,De.NAVIGATION_ABORTED|De.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),N(at,C,P)}).catch(Rr)}))}let B=or(),z=or(),k;function tt(U,st,lt){gt(U);const at=z.list();return at.length?at.forEach(Nt=>Nt(U,st,lt)):console.error(U),Promise.reject(U)}function _t(){return k&&l.value!==Ci?Promise.resolve():new Promise((U,st)=>{B.add([U,st])})}function gt(U){return k||(k=!U,H(),B.list().forEach(([st,lt])=>U?lt(U):st()),B.reset()),U}function Mt(U,st,lt,at){const{scrollBehavior:Nt}=n;if(!Us||!Nt)return Promise.resolve();const C=!lt&&jg(rd(U.fullPath,0))||(at||!lt)&&history.state&&history.state.scroll||null;return Wr().then(()=>Nt(U,st,C)).then(P=>P&&qg(P)).catch(P=>tt(P,U,st))}const Bt=U=>s.go(U);let Wt;const ae=new Set,ne={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:_,getRoutes:g,resolve:h,options:n,push:b,replace:w,go:Bt,back:()=>Bt(-1),forward:()=>Bt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:z.add,isReady:_t,install(U){U.component("RouterLink",Tv),U.component("RouterView",Cv),U.config.globalProperties.$router=ne,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>an(l)}),Us&&!Wt&&l.value===Ci&&(Wt=!0,b(s.location).catch(at=>{}));const st={};for(const at in Ci)Object.defineProperty(st,at,{get:()=>l.value[at],enumerable:!0});U.provide(ma,ne),U.provide(Zh,Zf(st)),U.provide(Ll,l);const lt=U.unmount;ae.add(U),U.unmount=function(){ae.delete(U),ae.size<1&&(c=Ci,$&&$(),$=null,l.value=Ci,Wt=!1,k=!1),lt()}}};function j(U){return U.reduce((st,lt)=>st.then(()=>S(lt)),Promise.resolve())}return ne}function ep(){return On(ma)}const Dv={},Iv={class:"blank"};function Lv(n,t){const e=Go("router-view");return ft(),mt("div",Iv,[t[0]||(t[0]=d("div",{class:"scanlines"},null,-1)),zt(e)])}const Uv=Oe(Dv,[["render",Lv],["__scopeId","data-v-1fbcc552"]]),Nv=[{id:"u1",username:"admin",password:"admin123",name:"系统管理员",role:"admin"},{id:"u2",username:"ops",password:"ops123",name:"操作员",role:"operator"},{id:"u3",username:"audit",password:"audit123",name:"审计员",role:"auditor"}],qc=$c("auth",{state:()=>({user:null,token:""}),getters:{isAuthed:n=>!!n.token,role:n=>{var t;return((t=n.user)==null?void 0:t.role)||"guest"},displayName:n=>{var t;return((t=n.user)==null?void 0:t.name)||"未登录"}},actions:{login({username:n,password:t}){const e=Nv.find(i=>i.username===n&&i.password===t);if(!e)throw new Error("账号或口令错误");this.user={id:e.id,name:e.name,role:e.role},this.token=`sess_${e.id}_${Date.now()}`},logout(){this.user=null,this.token=""}}}),Fv={class:"nav__top"},Ov=["title"],Bv={key:0},kv={key:1},Vv={class:"nav__scroll"},zv={class:"nav__group"},Hv={class:"nav__group"},Gv={class:"nav__group"},Wv={class:"nav__group"},Xv={class:"nav__group"},$v={class:"nav__group"},Yv={class:"nav__group"},qv={class:"nav__bottom"},Kv={class:"user s-badge"},jv={style:{opacity:".8"}},Zv={class:"main"},Jv={class:"content"},Qv={class:"content-inner"},t0={__name:"MainLayout",setup(n){const t=qc(),e=ep(),i=Dt(!1);function s(){t.logout(),e.push("/auth/login")}return(r,o)=>{const a=Go("RouterLink"),l=Go("router-view");return ft(),mt("div",{class:en(["wrap",{"is-collapsed":i.value}])},[d("aside",{class:en(["nav s-panel",{"is-collapsed":i.value}])},[d("div",Fv,[o[1]||(o[1]=d("div",{class:"logo"},"SR·U-FLEET",-1)),d("button",{class:"nav__toggle",type:"button",onClick:o[0]||(o[0]=c=>i.value=!i.value),title:i.value?"展开菜单":"收起菜单"},[i.value?(ft(),mt("span",Bv,"»")):(ft(),mt("span",kv,"«"))],8,Ov),o[2]||(o[2]=d("div",{class:"tag"},"无人集群仿真验证平台 · 地下水环境监测应用场景",-1))]),d("div",Vv,[d("div",zv,[o[4]||(o[4]=d("div",{class:"nav__label"},"总览",-1)),zt(a,{class:"nav__item",to:"/app/command",title:"指挥控制中心"},{default:te(()=>[...o[3]||(o[3]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M4 4h16v4H4zM4 10h10v10H4zM16 10h4v10h-4z"})],-1),d("span",{class:"nav__text"},"指挥控制中心",-1)])]),_:1})]),d("div",Hv,[o[8]||(o[8]=d("div",{class:"nav__label"},"任务生成",-1)),zt(a,{class:"nav__item",to:"/app/mission/task",title:"任务建议 / 动态分配"},{default:te(()=>[...o[5]||(o[5]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M4 5h16v2H4zM4 11h16v2H4zM4 17h10v2H4zM18 16l3 3-3 3"})],-1),d("span",{class:"nav__text"},"任务建议 / 动态分配",-1)])]),_:1}),zt(a,{class:"nav__item",to:"/app/mission/planner",title:"智能航迹规划（算法）"},{default:te(()=>[...o[6]||(o[6]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M4 18l6-6 4 4 6-8"}),d("path",{d:"M4 6h4"})],-1),d("span",{class:"nav__text"},"智能航迹规划（算法）",-1)])]),_:1}),zt(a,{class:"nav__item",to:"/app/mission/loop",title:"决策快速闭环（≥2）"},{default:te(()=>[...o[7]||(o[7]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M4 12a8 8 0 0 1 13-6"}),d("path",{d:"M20 4v6h-6"}),d("path",{d:"M20 12a8 8 0 0 1-13 6"}),d("path",{d:"M4 20v-6h6"})],-1),d("span",{class:"nav__text"},"决策快速闭环（≥2）",-1)])]),_:1})]),d("div",Gv,[o[11]||(o[11]=d("div",{class:"nav__label"},"通信网络",-1)),zt(a,{class:"nav__item",to:"/app/network/monitor",title:"网络状态监测（分层时延）"},{default:te(()=>[...o[9]||(o[9]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M3 20h18"}),d("path",{d:"M6 16v-6"}),d("path",{d:"M12 16V8"}),d("path",{d:"M18 16v-10"})],-1),d("span",{class:"nav__text"},"网络状态监测（分层时延）",-1)])]),_:1}),zt(a,{class:"nav__item",to:"/app/network/resilience",title:"自组网健壮性 / 返航"},{default:te(()=>[...o[10]||(o[10]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M4 12h6"}),d("path",{d:"M14 6l6 6-6 6"}),d("path",{d:"M6 6h6"}),d("path",{d:"M6 18h6"})],-1),d("span",{class:"nav__text"},"自组网健壮性 / 返航",-1)])]),_:1})]),d("div",Wv,[o[14]||(o[14]=d("div",{class:"nav__label"},"节点行为",-1)),zt(a,{class:"nav__item",to:"/app/nodes/behavior",title:"协同决策 / 无中心抗损"},{default:te(()=>[...o[12]||(o[12]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M12 4l4 4-4 4-4-4z"}),d("path",{d:"M4 20l4-4"}),d("path",{d:"M20 20l-4-4"})],-1),d("span",{class:"nav__text"},"协同决策 / 无中心抗损",-1)])]),_:1}),zt(a,{class:"nav__item",to:"/app/nodes/formations",title:"队形库（≥3）/ 存储"},{default:te(()=>[...o[13]||(o[13]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M5 7h4v4H5zM15 7h4v4h-4zM10 13h4v4h-4z"})],-1),d("span",{class:"nav__text"},"队形库（≥3）/ 存储",-1)])]),_:1})]),d("div",Xv,[o[16]||(o[16]=d("div",{class:"nav__label"},"可视化",-1)),zt(a,{class:"nav__item",to:"/app/viz/3d",title:"三维态势（简洁直观）"},{default:te(()=>[...o[15]||(o[15]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M12 3l9 4.5-9 4.5-9-4.5z"}),d("path",{d:"M21 7.5v9L12 21l-9-4.5v-9"})],-1),d("span",{class:"nav__text"},"三维态势（简洁直观）",-1)])]),_:1})]),d("div",$v,[o[20]||(o[20]=d("div",{class:"nav__label"},"标准与能力",-1)),zt(a,{class:"nav__item",to:"/app/standards/unified",title:"统一数据标准（≥20条）"},{default:te(()=>[...o[17]||(o[17]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M4 6h16"}),d("path",{d:"M4 12h16"}),d("path",{d:"M4 18h10"})],-1),d("span",{class:"nav__text"},"统一数据标准（≥20条）",-1)])]),_:1}),zt(a,{class:"nav__item",to:"/app/recognition/targets",title:"目标识别（≥10目标）"},{default:te(()=>[...o[18]||(o[18]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("circle",{cx:"12",cy:"12",r:"3"}),d("path",{d:"M12 2v4M12 18v4M2 12h4M18 12h4"})],-1),d("span",{class:"nav__text"},"目标识别（≥10目标）",-1)])]),_:1}),zt(a,{class:"nav__item",to:"/app/flighttest/scenario",title:"实飞测试配置"},{default:te(()=>[...o[19]||(o[19]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M3 12l18-6-6 18-2-7z"})],-1),d("span",{class:"nav__text"},"实飞测试配置",-1)])]),_:1})]),d("div",Yv,[o[24]||(o[24]=d("div",{class:"nav__label"},"安全与日志",-1)),zt(a,{class:"nav__item",to:"/app/security/users",title:"身份认证 / 权限"},{default:te(()=>[...o[21]||(o[21]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("circle",{cx:"12",cy:"8",r:"3"}),d("path",{d:"M4 20c1.5-4 14.5-4 16 0"})],-1),d("span",{class:"nav__text"},"身份认证 / 权限",-1)])]),_:1}),zt(a,{class:"nav__item",to:"/app/security/audit",title:"审计留痕"},{default:te(()=>[...o[22]||(o[22]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M6 4h9l3 3v13H6z"}),d("path",{d:"M9 12h6"}),d("path",{d:"M9 16h4"})],-1),d("span",{class:"nav__text"},"审计留痕",-1)])]),_:1}),zt(a,{class:"nav__item",to:"/app/logs/system",title:"系统日志管理"},{default:te(()=>[...o[23]||(o[23]=[d("svg",{class:"nav__icon",viewBox:"0 0 24 24","aria-hidden":"true"},[d("path",{d:"M5 5h14v4H5z"}),d("path",{d:"M5 11h14v8H5z"})],-1),d("span",{class:"nav__text"},"系统日志管理",-1)])]),_:1})])]),d("div",qv,[d("div",Kv,[o[25]||(o[25]=d("span",{class:"s-dot"},null,-1)),d("span",null,rt(an(t).displayName),1),o[26]||(o[26]=d("span",{style:{opacity:".65"}},"/",-1)),d("span",jv,rt(an(t).role),1)]),d("button",{class:"s-btn s-btn--danger nav__logout",onClick:s},[...o[27]||(o[27]=[Vs('<svg class="nav__icon" viewBox="0 0 24 24" aria-hidden="true" data-v-aa3e9094><path d="M4 4h10v16H4z" data-v-aa3e9094></path><path d="M14 12h6" data-v-aa3e9094></path><path d="M18 9l3 3-3 3" data-v-aa3e9094></path></svg><span class="nav__text" data-v-aa3e9094>退出登录</span>',2)])])]),o[28]||(o[28]=d("div",{class:"scanlines"},null,-1))],2),d("main",Zv,[o[29]||(o[29]=Vs('<header class="topbar s-panel" data-v-aa3e9094><div class="topbar__left" data-v-aa3e9094><div class="s-title" data-v-aa3e9094>陕西省地下水环境监测网络体系建设项目(二期)地下水环境监管平台建设(二次)</div><div class="s-subtitle" data-v-aa3e9094> 应用场景系统：任务生成 / 通信网络 / 节点行为 / 可视化（对标招标指标） </div></div><div class="topbar__right" data-v-aa3e9094><span class="s-badge pulse" data-v-aa3e9094><span class="s-dot" data-v-aa3e9094></span> SYSTEM ONLINE</span><span class="s-badge" data-v-aa3e9094><span class="s-dot s-dot--ok" data-v-aa3e9094></span> AUTH OK</span></div></header>',1)),d("section",Jv,[d("div",Qv,[zt(l)])])])],2)}}},e0=Oe(t0,[["__scopeId","data-v-aa3e9094"]]);function ar(n){return String(n).padStart(2,"0")}function n0(){const n=new Date;return`${n.getFullYear()}-${ar(n.getMonth()+1)}-${ar(n.getDate())} ${ar(n.getHours())}:${ar(n.getMinutes())}:${ar(n.getSeconds())}`}const np="sys_logs_v1",vd=2e3;function i0(n,t){try{const e=JSON.parse(n);return Array.isArray(e)?e:t}catch{return t}}function s0(){return`${Date.now()}_${Math.random().toString(16).slice(2)}`}function r0(){const n=Math.random().toString(16).slice(2),t=Math.random().toString(16).slice(2);return(n+t).slice(0,18)}function Ba(n){try{localStorage.setItem(np,JSON.stringify(n))}catch{}}function o0(){return typeof localStorage>"u"?[]:i0(localStorage.getItem(np)||"[]",[])}const wi=$c("logs",{state:()=>({items:o0()}),getters:{latest:n=>n.items.slice(-50).reverse()},actions:{add(n){const t={id:n.id||s0(),time:n.time||n0(),level:n.level||"INFO",module:n.module||"SYSTEM",action:n.action||"UNKNOWN",operator:n.operator||"system",ip:n.ip||"-",traceId:n.traceId||r0(),result:n.result||"-",message:n.message||"",meta:n.meta||{}};t.ts=t.time,t.detail=t.message,this.items.push(t),this.items.length>vd&&this.items.splice(0,this.items.length-vd),Ba(this.items)},push(n,t,e,i={}){if(typeof n=="object"&&n){this.add(n);return}this.add({level:n,action:t,message:e,meta:i})},clear(){this.items=[],Ba(this.items)},replaceAll(n){this.items=Array.isArray(n)?n:[],Ba(this.items)}}}),a0={class:"login s-panel"},l0={class:"form"},c0={key:0,class:"err"},u0={__name:"Login",setup(n){const t=Dt(""),e=Dt(""),i=Dt(""),s=ep(),r=qc(),o=wi();function a(){t.value="admin",e.value="admin123"}async function l(){i.value="";try{r.login({username:t.value.trim(),password:e.value}),o.push("AUDIT","AUTH_LOGIN",`用户登录：${r.displayName}`,{role:r.role}),s.push("/app/command")}catch(c){i.value=(c==null?void 0:c.message)||"登录失败",o.push("WARN","AUTH_FAIL",`登录失败：${t.value}`,{})}}return(c,u)=>(ft(),mt("div",a0,[u[5]||(u[5]=Vs('<div class="scanlines" data-v-960c8b5a></div><div class="head" data-v-960c8b5a><div class="brand" data-v-960c8b5a>SR·U-FLEET</div><div class="desc" data-v-960c8b5a>无人集群仿真验证平台 · 应用场景系统（纯 Vue 前端）</div><div class="hint" data-v-960c8b5a>内置账号：admin/admin123 · ops/ops123 · audit/audit123</div></div>',2)),d("div",l0,[u[3]||(u[3]=d("label",{class:"lbl"},"账号",-1)),ie(d("input",{class:"s-input","onUpdate:modelValue":u[0]||(u[0]=f=>t.value=f),placeholder:"请输入账号"},null,512),[[fi,t.value]]),u[4]||(u[4]=d("label",{class:"lbl",style:{"margin-top":"10px"}},"口令",-1)),ie(d("input",{class:"s-input","onUpdate:modelValue":u[1]||(u[1]=f=>e.value=f),type:"password",placeholder:"请输入口令"},null,512),[[fi,e.value]]),d("div",{class:"row"},[d("button",{class:"s-btn s-btn--primary",onClick:l},"进入系统"),d("button",{class:"s-btn",onClick:a},"填充管理员")]),i.value?(ft(),mt("div",c0,[u[2]||(u[2]=d("span",{class:"dot"},null,-1)),Ve(" "+rt(i.value),1)])):En("",!0)])]))}},d0=Oe(u0,[["__scopeId","data-v-960c8b5a"]]),f0=[{model:"FW-2.4M",type:"fixed-wing",wingspan_m:2.4,material:"复合材料（非木质）",endurance_min:55,wind_level:6,ip:"IPX4",temp_c:[-20,50]},{model:"MR-6R",type:"multirotor",wingspan_m:null,material:"复合材料",endurance_min:45,wind_level:6,ip:"IPX4",temp_c:[-20,50]}],h0=[{id:"wedge",name:"楔形队形",nodes:5,desc:"前导+两翼扩展，适用于开阔区域搜索"},{id:"line",name:"横队队形",nodes:5,desc:"平行扫描，适用于规则走廊式航线"},{id:"circle",name:"环形队形",nodes:5,desc:"围绕目标区构建多角度观测环"},{id:"grid",name:"网格队形",nodes:5,desc:"网格覆盖，适用于面积域巡检/监测"}],p0=$c("sim",{state:()=>({scenario:{name:"地下水环境监测 · 无人集群仿真验证",uavCount:5,fixedWingMin:1,commMaxKm:2,deployMinutes:15},uavModels:f0,formations:h0,nodes:[],links:[],targets:[],missions:[],time:{t:0,running:!1,speed:1}}),getters:{nodeCount:n=>n.nodes.length,linkCount:n=>n.links.length},actions:{reset(){this.nodes=[],this.links=[],this.targets=[],this.missions=[],this.time={t:0,running:!1,speed:1}}}}),m0={class:"grid"},_0={class:"s-panel panel"},g0={class:"panel__head"},v0={class:"badges"},x0={class:"s-badge"},S0={class:"s-badge"},M0={class:"kpis"},y0={class:"kpi"},E0={class:"v"},b0={class:"kpi"},T0={class:"v"},A0={class:"kpi"},R0={class:"v"},w0={class:"kpi"},C0={class:"v"},P0={class:"s-panel panel"},D0={class:"channel"},I0={class:"chips"},L0=["onClick"],U0={class:"videoWall"},N0=["data-active"],F0={class:"feed__hdr"},O0={class:"s-badge"},B0={class:"feed__body"},k0={class:"txt"},V0={class:"s-panel panel panel--map"},z0={class:"map"},H0={class:"map__hud"},G0={class:"map__svg",viewBox:"0 0 100 60",preserveAspectRatio:"xMidYMid meet"},W0=["x1","y1","x2","y2"],X0=["cx","cy"],$0=["x","y"],Y0={key:0,class:"map__empty"},q0={class:"s-panel panel panel--logs"},K0={class:"logList"},j0={key:0,class:"empty"},Z0={class:"meta"},J0=["data-lvl"],Q0={class:"ts"},tx={class:"act"},ex={class:"detail"},nx={__name:"CommandCenter",setup(n){const t=p0(),e=wi(),i=Dt({suggest:86,latency:42,errXY:.6,errZ:.3,loop:140}),s=Dt([{id:1,name:"CH-1"},{id:2,name:"CH-2"},{id:3,name:"CH-3"},{id:4,name:"CH-4"}]),r=Dt(1);let o=null;const a=Xe(()=>{if(!t.nodes||t.nodes.length===0)return[];const v=t.nodes.length,g=Math.ceil(Math.sqrt(v)),_=Math.ceil(v/g),h=22,M=78,A=20,b=40,w=g>1?(M-h)/(g-1):0,I=_>1?(b-A)/(_-1):0;return t.nodes.map((D,F)=>{const S=Math.floor(F/g),T=F%g;return{x:h+T*w,y:A+S*I,id:D.id,role:D.role}})}),l=Xe(()=>{var g;const v=new Map;return(g=t.nodes)==null||g.forEach((_,h)=>{const M=a.value[h];M&&v.set(_.id,M)}),v}),c=Xe(()=>{if(!t.links||t.links.length===0)return[];const v=l.value;return t.links.map(g=>{const _=v.get(g.a),h=v.get(g.b);if(!_||!h)return null;const M=g.delay<=30?"ok":g.delay<=60?"warn":"bad";return{x1:_.x,y1:_.y,x2:h.x,y2:h.y,level:M}}).filter(Boolean)});function u(){t.reset(),t.nodes=[{id:"UAV-01",type:"fixed-wing",role:"leader",lat:34.27,lon:108.95,alt:320,bat:92},{id:"UAV-02",type:"multirotor",role:"wing",lat:34.271,lon:108.948,alt:305,bat:88},{id:"UAV-03",type:"multirotor",role:"wing",lat:34.269,lon:108.952,alt:310,bat:85},{id:"UAV-04",type:"multirotor",role:"wing",lat:34.272,lon:108.953,alt:300,bat:83},{id:"UAV-05",type:"multirotor",role:"wing",lat:34.268,lon:108.947,alt:298,bat:81}],t.links=[{a:"UAV-01",b:"UAV-02",delay:24,rssi:-62},{a:"UAV-01",b:"UAV-03",delay:31,rssi:-66},{a:"UAV-02",b:"UAV-04",delay:18,rssi:-59},{a:"UAV-03",b:"UAV-05",delay:45,rssi:-70}],e.push("INFO","SIM_SEED","初始化编队态势（固定翼≥1 + 编队链路）",{nodes:t.nodes.length,links:t.links.length})}function f(){i.value.suggest=70+Math.round(Math.random()*40),i.value.latency=30+Math.round(Math.random()*60),i.value.errXY=(.4+Math.random()*.7).toFixed(2),i.value.errZ=(.2+Math.random()*.4).toFixed(2),i.value.loop=120+Math.round(Math.random()*80),e.push("INFO","KPI_SIM","关键 KPI 联动刷新",{...i.value})}function m(){t.reset(),e.push("AUDIT","SIM_CLEAR","清空态势与任务数据",{})}function p(){e.push("INFO","HEALTH_CHECK","系统自检通过：分层链路/统一标准/权限模块在线",{ok:!0})}return zc(()=>{o=setInterval(f,4e3)}),Hc(()=>{o&&clearInterval(o)}),(v,g)=>(ft(),mt("div",m0,[d("section",_0,[d("div",g0,[g[3]||(g[3]=d("div",null,[d("div",{class:"s-title"},"指挥控制中心 · 一站式管理"),d("div",{class:"s-subtitle"},"态势 / 网络 / 视频 / 日志 / 决策闭环（对标招标指标）")],-1)),d("div",v0,[d("span",x0,[g[0]||(g[0]=d("span",{class:"s-dot s-dot--ok"},null,-1)),Ve(" NODES: "+rt(an(t).nodeCount),1)]),d("span",S0,[g[1]||(g[1]=d("span",{class:"s-dot"},null,-1)),Ve(" LINKS: "+rt(an(t).linkCount),1)]),g[2]||(g[2]=d("span",{class:"s-badge"},[d("span",{class:"s-dot s-dot--warn"}),Ve(" LATENCY: MIX")],-1))])]),g[8]||(g[8]=Vs('<div class="hero" data-v-00067c1d><div class="hero__box" data-v-00067c1d><div class="k" data-v-00067c1d>项目</div><div class="v" data-v-00067c1d>地下水环境监管平台（二期）</div></div><div class="hero__box" data-v-00067c1d><div class="k" data-v-00067c1d>实飞编队</div><div class="v" data-v-00067c1d>5 架（固定翼≥1）</div></div><div class="hero__box" data-v-00067c1d><div class="k" data-v-00067c1d>通信距离</div><div class="v" data-v-00067c1d>≥ 2 km</div></div><div class="hero__box" data-v-00067c1d><div class="k" data-v-00067c1d>部署效率</div><div class="v" data-v-00067c1d>≤ 15 min</div></div></div>',1)),d("div",M0,[d("div",y0,[g[4]||(g[4]=d("div",{class:"k"},"建议响应",-1)),d("div",E0,rt(i.value.suggest)+" ms",1)]),d("div",b0,[g[5]||(g[5]=d("div",{class:"k"},"链路时延",-1)),d("div",T0,rt(i.value.latency)+" ms",1)]),d("div",A0,[g[6]||(g[6]=d("div",{class:"k"},"识别误差",-1)),d("div",R0,"±"+rt(i.value.errXY)+" m / ±"+rt(i.value.errZ)+" m",1)]),d("div",w0,[g[7]||(g[7]=d("div",{class:"k"},"任务闭环",-1)),d("div",C0,rt(i.value.loop)+" ms",1)])]),d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:u},"初始化编队态势"),d("button",{class:"s-btn",onClick:f},"联动演示"),d("button",{class:"s-btn",onClick:p},"写入运行日志"),d("button",{class:"s-btn s-btn--danger",onClick:m},"清空")]),g[9]||(g[9]=d("div",{class:"note"},[d("div",{class:"s-title",style:{"font-size":"12px"}},"运行策略（对标指标）"),d("ul",null,[d("li",null,"分层式、模块化架构：任务/通信/节点/可视化四大模块联动。"),d("li",null,"统一数据标准：位置/状态/指令/反馈/安全，条目≥20。"),d("li",null,"智能规划：A* / RRT / PSO / GA 多算法快速航线与队形存储。"),d("li",null,"强健壮性：通信受限仍自组网维持编队，并支持自动返航。")])],-1)),g[10]||(g[10]=d("div",{class:"scanlines"},null,-1))]),d("section",P0,[g[15]||(g[15]=d("div",{class:"panel__head"},[d("div",{class:"s-title"},"视频流回传墙（联调）"),d("div",{class:"s-subtitle"},"多通道 / 帧率 / 时延可视")],-1)),d("div",D0,[g[11]||(g[11]=d("div",{class:"k"},"通道选择",-1)),d("div",I0,[(ft(!0),mt(Kt,null,fe(s.value,_=>(ft(),mt("button",{key:_.id,class:en(["chip",{active:_.id===r.value}]),onClick:h=>r.value=_.id},rt(_.name),11,L0))),128))])]),d("div",U0,[(ft(),mt(Kt,null,fe(4,_=>d("div",{key:_,class:"feed","data-active":r.value===_},[d("div",F0,[d("span",O0,[g[12]||(g[12]=d("span",{class:"s-dot"},null,-1)),Ve(" CH-"+rt(_),1)]),g[13]||(g[13]=Vs('<span class="s-badge" data-v-00067c1d><span class="s-dot s-dot--ok" data-v-00067c1d></span> 25 fps</span><span class="s-badge" data-v-00067c1d><span class="s-dot" data-v-00067c1d></span> 68 ms</span><span class="s-badge" data-v-00067c1d><span class="s-dot" data-v-00067c1d></span> 1.2 Mbps</span>',3))]),d("div",B0,[g[14]||(g[14]=d("div",{class:"scan"},null,-1)),d("div",k0,"UAV VIDEO "+rt(_),1)])],8,N0)),64))])]),d("section",V0,[g[18]||(g[18]=d("div",{class:"panel__head"},[d("div",{class:"s-title"},"联动地图 / 任务态势线"),d("div",{class:"s-subtitle"},"地下水监测任务态势 · 编队链路可视化")],-1)),d("div",z0,[g[16]||(g[16]=d("div",{class:"map__grid"},null,-1)),d("div",H0,"任务态势联动 | 节点："+rt(an(t).nodeCount)+" | 链路："+rt(an(t).linkCount),1),g[17]||(g[17]=Vs('<div class="map__legend" data-v-00067c1d><span class="lg" data-v-00067c1d><i class="dot lg--leader" data-v-00067c1d></i> 固定翼/领航</span><span class="lg" data-v-00067c1d><i class="dot lg--wing" data-v-00067c1d></i> 旋翼/编队</span><span class="lg" data-v-00067c1d><i class="line lg--ok" data-v-00067c1d></i> 低时延</span><span class="lg" data-v-00067c1d><i class="line lg--warn" data-v-00067c1d></i> 中时延</span><span class="lg" data-v-00067c1d><i class="line lg--bad" data-v-00067c1d></i> 高时延</span></div>',1)),(ft(),mt("svg",G0,[(ft(!0),mt(Kt,null,fe(c.value,(_,h)=>(ft(),mt("line",{key:h,class:en(["route",`route--${_.level}`]),x1:_.x1,y1:_.y1,x2:_.x2,y2:_.y2},null,10,W0))),128)),(ft(!0),mt(Kt,null,fe(a.value,(_,h)=>(ft(),mt("circle",{key:h,class:en(["dot",_.role==="leader"?"dot--leader":"dot--wing"]),cx:_.x,cy:_.y,r:"2.4"},null,10,X0))),128)),(ft(!0),mt(Kt,null,fe(a.value,(_,h)=>(ft(),mt("text",{key:`t-${h}`,class:"nodeLabel",x:_.x+2.2,y:_.y-2.2},rt(_.id),9,$0))),128))])),a.value.length===0?(ft(),mt("div",Y0,"暂无态势节点，请点击“初始化编队态势”")):En("",!0)])]),d("section",q0,[g[19]||(g[19]=d("div",{class:"panel__head"},[d("div",{class:"s-title"},"系统日志（最近 50 条）"),d("div",{class:"s-subtitle"},"审计留痕 / 支持导出")],-1)),d("div",K0,[an(e).latest.length===0?(ft(),mt("div",j0,"暂无日志")):En("",!0),(ft(!0),mt(Kt,null,fe(an(e).latest,_=>(ft(),mt("div",{key:_.id,class:"logItem"},[d("div",Z0,[d("span",{class:"lvl","data-lvl":_.level},rt(_.level),9,J0),d("span",Q0,rt(_.ts),1),d("span",tx,rt(_.action),1)]),d("div",ex,rt(_.detail),1)]))),128))])])]))}},ix=Oe(nx,[["__scopeId","data-v-00067c1d"]]),sx={key:0,class:"head"},rx={class:"left"},ox={key:0,class:"s-title"},ax={key:1,class:"s-subtitle"},lx={class:"right"},cx={class:"body"},ux={key:1,class:"foot"},dx={__name:"SCard",props:{title:{type:String,default:""},subtitle:{type:String,default:""},tight:{type:Boolean,default:!1}},setup(n){return(t,e)=>(ft(),mt("section",{class:en(["s-panel card",{tight:n.tight}])},[n.title||t.$slots.header?(ft(),mt("header",sx,[d("div",rx,[n.title?(ft(),mt("div",ox,rt(n.title),1)):En("",!0),n.subtitle?(ft(),mt("div",ax,rt(n.subtitle),1)):En("",!0)]),d("div",lx,[wa(t.$slots,"header",{},void 0)])])):En("",!0),d("div",cx,[wa(t.$slots,"default",{},void 0)]),t.$slots.footer?(ft(),mt("div",ux,[wa(t.$slots,"footer",{},void 0)])):En("",!0),e[0]||(e[0]=d("div",{class:"scanlines"},null,-1))],2))}},Re=Oe(dx,[["__scopeId","data-v-a8cfe187"]]),fx={class:"grid"},hx={class:"row"},px={class:"box"},mx={class:"box"},_x={class:"box"},gx={class:"row"},vx={class:"box"},xx={class:"chips"},Sx=["onUpdate:modelValue"],Mx={class:"box"},yx={class:"box"},Ex={class:"out"},bx={class:"idx"},Tx={class:"txt"},Ax={key:0,class:"empty"},Rx={class:"eta"},wx={class:"s-badge"},Cx={class:"s-badge"},Px={class:"s-badge"},Dx={__name:"TaskGenerator",setup(n){const t=wi(),e=Dt("巡检"),i=Dt("R1"),s=Dt("T10"),r=Dt("V"),o=Dt("STANDARD"),a=Dt([{id:"A*",name:"A*",on:!0},{id:"RRT",name:"RRT",on:!0},{id:"PSO",name:"PSO",on:!1},{id:"GA",name:"遗传算法",on:!1}]),l=Dt([]),c=Dt({total:0,finish:0}),u=Dt("待生成");function f(){const _=s.value==="T10"?10:12,h=e.value==="巡检"?26:e.value==="应急"?18:22,M=i.value==="R1"?0:i.value==="R2"?4:-3,A=a.value.filter(w=>w.on).map(w=>w.name).join(" / ")||"A*",b=Math.max(12,h+Math.round(_*.8)+M);l.value=[`任务类型：${e.value}；目标序列：${_} 点；规则集：${i.value}；编队：${r.value}。`,`算法库：${A}；执行策略：固定翼覆盖 + 旋翼精细采样；自组网保持编队。`,"动态分配：低电量节点自动靠近；回执输出：ACK / PROGRESS / ETA。",`时间估算：预计总时长 ${b} 分钟（含航线/编队重构/采样窗口）。`],c.value={total:b,finish:b},u.value="已生成建议",t.push("INFO","TASK_SUGGEST","生成任务建议与时间估算",{taskType:e.value,ruleSet:i.value,targets:_,algorithms:A})}function m(){u.value="待审批",t.push("AUDIT","TASK_SUBMIT","提交审批",{flow:o.value})}function p(){u.value="审批通过",t.push("AUDIT","TASK_APPROVE","审批通过",{approver:"系统管理员"})}function v(){u.value="执行中",l.value.unshift("【已执行】动态分配下发：CMD_FORM / CMD_GOTO / FBK_ACK 进入闭环。"),t.push("AUDIT","TASK_ASSIGN","应用动态分配方案",{mode:"rule+state"})}function g(){l.value=[],c.value={total:0,finish:0},u.value="待生成"}return(_,h)=>(ft(),mt("div",fx,[zt(Re,{title:"任务建议与动态分配",subtitle:"依据任务需求 + 规则集 + 实时态势，生成建议并估算时间指标"},{default:te(()=>[d("div",hx,[d("div",px,[h[6]||(h[6]=d("div",{class:"k"},"任务类型",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[0]||(h[0]=M=>e.value=M)},[...h[5]||(h[5]=[d("option",{value:"巡检"},"地下水监测巡检",-1),d("option",{value:"应急"},"疑似污染应急排查",-1),d("option",{value:"溯源"},"异常点位溯源",-1)])],512),[[Se,e.value]])]),d("div",mx,[h[8]||(h[8]=d("div",{class:"k"},"规则集",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[1]||(h[1]=M=>i.value=M)},[...h[7]||(h[7]=[d("option",{value:"R1"},"R1：固定翼覆盖优先",-1),d("option",{value:"R2"},"R2：旋翼精细盘旋采样",-1),d("option",{value:"R3"},"R3：低电量优先近区",-1)])],512),[[Se,i.value]])]),d("div",_x,[h[10]||(h[10]=d("div",{class:"k"},"目标序列",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[2]||(h[2]=M=>s.value=M)},[...h[9]||(h[9]=[d("option",{value:"T10"},"T10：10 个目标点（满足容量指标）",-1),d("option",{value:"T12"},"T12：12 个目标点（加分展示）",-1)])],512),[[Se,s.value]])])]),d("div",gx,[d("div",vx,[h[11]||(h[11]=d("div",{class:"k"},"算法库",-1)),d("div",xx,[(ft(!0),mt(Kt,null,fe(a.value,M=>(ft(),mt("label",{class:"chip",key:M.id},[ie(d("input",{type:"checkbox","onUpdate:modelValue":A=>M.on=A},null,8,Sx),[[Fh,M.on]]),d("span",null,rt(M.name),1)]))),128))])]),d("div",Mx,[h[13]||(h[13]=d("div",{class:"k"},"编队方案",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[3]||(h[3]=M=>r.value=M)},[...h[12]||(h[12]=[d("option",{value:"V"},"V 型（≥3）",-1),d("option",{value:"LINE"},"一字阵",-1),d("option",{value:"CIRCLE"},"环形阵",-1)])],512),[[Se,r.value]])]),d("div",yx,[h[15]||(h[15]=d("div",{class:"k"},"审批流",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[4]||(h[4]=M=>o.value=M)},[...h[14]||(h[14]=[d("option",{value:"FAST"},"快速（建议→执行）",-1),d("option",{value:"AUDIT"},"标准（建议→审批→执行）",-1),d("option",{value:"EXPERT"},"专家（建议→专家复核→执行）",-1)])],512),[[Se,o.value]])])]),d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:f},"生成任务建议"),d("button",{class:"s-btn",onClick:m},"提交审批"),d("button",{class:"s-btn",onClick:p},"审批通过"),d("button",{class:"s-btn",onClick:v},"应用动态分配"),d("button",{class:"s-btn s-btn--danger",onClick:g},"重置")]),h[16]||(h[16]=d("div",{class:"tips"},[d("span",{class:"s-badge"},[d("span",{class:"s-dot"}),Ve(" 实时估算：ETA / 总时长")]),d("span",{class:"s-badge"},[d("span",{class:"s-dot s-dot--ok"}),Ve(" 快速反应：规则触发 + 状态驱动")]),d("span",{class:"s-badge"},[d("span",{class:"s-dot s-dot--warn"}),Ve(" 闭环输出：ACK / PROGRESS / ETA")])],-1))]),_:1}),zt(Re,{title:"任务建议输出",subtitle:"建议 → 审批 → 执行 → 回执闭环"},{default:te(()=>[d("div",Ex,[(ft(!0),mt(Kt,null,fe(l.value,(M,A)=>(ft(),mt("div",{class:"line",key:A},[d("span",bx,"#"+rt(A+1),1),d("span",Tx,rt(M),1)]))),128)),l.value.length===0?(ft(),mt("div",Ax,"点击“生成任务建议”开始生成")):En("",!0)]),d("div",Rx,[d("span",wx,[h[17]||(h[17]=d("span",{class:"s-dot s-dot--warn"},null,-1)),Ve(" 预计总时长："+rt(c.value.total)+" min",1)]),d("span",Cx,[h[18]||(h[18]=d("span",{class:"s-dot"},null,-1)),Ve(" 预计完成时间：T+"+rt(c.value.finish)+" min",1)]),d("span",Px,[h[19]||(h[19]=d("span",{class:"s-dot s-dot--ok"},null,-1)),Ve(" 流程状态："+rt(u.value),1)])])]),_:1})]))}},Ix=Oe(Dx,[["__scopeId","data-v-53e2cd44"]]),Lx={class:"grid"},Ux={class:"row"},Nx={class:"box"},Fx={class:"chips"},Ox=["onUpdate:modelValue"],Bx={class:"box"},kx={class:"box"},Vx={class:"route"},zx={class:"route__head"},Hx={class:"s-badge"},Gx={class:"s-badge"},Wx={class:"s-badge"},Xx={class:"route__body"},$x={class:"i"},Yx={class:"t"},qx={key:0,class:"empty"},Kx={class:"formations"},jx=["data-active"],Zx={class:"name"},Jx={class:"meta"},Qx={class:"ops"},tS=["onClick"],eS=["onClick"],nS={__name:"Planner",setup(n){const t=wi(),e=Dt([{id:"A*",name:"A*",on:!0},{id:"RRT",name:"RRT",on:!0},{id:"PSO",name:"PSO",on:!1},{id:"GA",name:"遗传算法",on:!1}]),i=Dt("MOUNTAIN"),s=Dt("SAFE"),r=Dt({nodes:0,eta:0,energy:0,points:[]}),o=Dt([{id:"V",name:"V 型编队",desc:"固定翼 1 + 旋翼 4，覆盖优先"},{id:"LINE",name:"一字阵",desc:"长距通信稳定、对齐航线"},{id:"CIRCLE",name:"环形阵",desc:"重点区域回旋采样"}]),a=Dt("V");function l(){const p=e.value.filter(_=>_.on).map(_=>_.name).join(" / ")||"A*",v=i.value==="MOUNTAIN"?8:i.value==="PLAIN"?6:7,g=s.value==="SAFE"?2:s.value==="FAST"?-1:1;r.value={nodes:6+v,eta:18+v+g,energy:32+v*2,points:["起点：监测井-01 → 采样窗口 A","航段：河谷走廊避障 + 高差修正","中继：补给区-03 低空盘旋","航段：坡面避障 + 视距链路","终点：监测井-08 回执上传"]},t.push("INFO","PATH_PLAN","生成航线规划",{algorithms:p,env:i.value,constraint:s.value})}function c(){t.push("AUDIT","FORMATION_SAVE","保存队形",{id:a.value})}function u(){t.push("INFO","FORMATION_LOAD","载入队形",{id:a.value})}function f(p){a.value=p.id,t.push("AUDIT","FORMATION_APPLY","应用队形",{id:p.id})}function m(p){t.push("INFO","FORMATION_PREVIEW","预览队形",{id:p.id})}return(p,v)=>(ft(),mt("div",Lx,[zt(Re,{title:"智能航迹规划（算法库）",subtitle:"不少于 3 种算法，支持快速航线规划与队形设置"},{default:te(()=>[d("div",Ux,[d("div",Nx,[v[2]||(v[2]=d("div",{class:"k"},"算法选择",-1)),d("div",Fx,[(ft(!0),mt(Kt,null,fe(e.value,g=>(ft(),mt("label",{class:"chip",key:g.id},[ie(d("input",{type:"checkbox","onUpdate:modelValue":_=>g.on=_},null,8,Ox),[[Fh,g.on]]),d("span",null,rt(g.name),1)]))),128))])]),d("div",Bx,[v[4]||(v[4]=d("div",{class:"k"},"环境模型",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":v[0]||(v[0]=g=>i.value=g)},[...v[3]||(v[3]=[d("option",{value:"MOUNTAIN"},"高寒山地",-1),d("option",{value:"PLAIN"},"平原",-1),d("option",{value:"URBAN"},"城镇边界",-1)])],512),[[Se,i.value]])]),d("div",kx,[v[6]||(v[6]=d("div",{class:"k"},"约束条件",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":v[1]||(v[1]=g=>s.value=g)},[...v[5]||(v[5]=[d("option",{value:"SAFE"},"避障优先",-1),d("option",{value:"FAST"},"速度优先",-1),d("option",{value:"ENERGY"},"能耗优先",-1)])],512),[[Se,s.value]])])]),d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:l},"生成航线"),d("button",{class:"s-btn",onClick:c},"保存队形"),d("button",{class:"s-btn s-btn--ghost",onClick:u},"载入队形")]),d("div",Vx,[d("div",zx,[d("span",Hx,[v[7]||(v[7]=d("span",{class:"s-dot"},null,-1)),Ve(" 航线节点："+rt(r.value.nodes),1)]),d("span",Gx,[v[8]||(v[8]=d("span",{class:"s-dot s-dot--ok"},null,-1)),Ve(" 预计时长："+rt(r.value.eta)+" min",1)]),d("span",Wx,[v[9]||(v[9]=d("span",{class:"s-dot s-dot--warn"},null,-1)),Ve(" 预估能耗："+rt(r.value.energy)+"%",1)])]),d("div",Xx,[(ft(!0),mt(Kt,null,fe(r.value.points,(g,_)=>(ft(),mt("div",{class:"item",key:_},[d("span",$x,"#"+rt(_+1),1),d("span",Yx,rt(g),1)]))),128)),r.value.points.length===0?(ft(),mt("div",qx,"请点击“生成航线”")):En("",!0)])])]),_:1}),zt(Re,{title:"队形库（≥3）",subtitle:"支持快速设置、存储与复用"},{default:te(()=>[d("div",Kx,[(ft(!0),mt(Kt,null,fe(o.value,g=>(ft(),mt("div",{class:"f-card",key:g.id,"data-active":g.id===a.value},[d("div",Zx,rt(g.name),1),d("div",Jx,rt(g.desc),1),d("div",Qx,[d("button",{class:"s-btn",onClick:_=>f(g)},"应用",8,tS),d("button",{class:"s-btn s-btn--ghost",onClick:_=>m(g)},"预览",8,eS)])],8,jx))),128))])]),_:1})]))}},iS=Oe(nS,[["__scopeId","data-v-16280c17"]]),sS={class:"grid"},rS={class:"row"},oS={class:"box"},aS={class:"box"},lS={class:"box"},cS={class:"timeline"},uS={class:"t"},dS={class:"k"},fS={class:"v"},hS={key:0,class:"empty"},pS={class:"metrics"},mS={class:"metric"},_S={class:"v"},gS={class:"metric"},vS={class:"v"},xS={class:"metric"},SS={class:"v"},MS={class:"metric"},yS={class:"v"},ES={__name:"ClosedLoopLab",setup(n){const t=wi(),e=Dt("MODE_A"),i=Dt("OK"),s=Dt("AUTO"),r=Dt([]),o=Dt({loopMs:0,assignRate:0,formation:"稳定",mesh:"正常"});function a(){return new Date().toLocaleTimeString()}function l(){r.value=[{t:a(),k:"建议生成",v:`模式 ${e.value}`},{t:a(),k:"链路状态",v:i.value},{t:a(),k:"闭环触发",v:s.value}],o.value={loopMs:120+Math.round(Math.random()*80),assignRate:96,formation:"稳定",mesh:i.value==="LOST"?"自组网":"正常"},t.push("INFO","LOOP_START","启动闭环",{mode:e.value,link:i.value,trigger:s.value})}function c(){r.value.unshift({t:a(),k:"回执",v:"ACK / PROGRESS / ETA"}),t.push("INFO","LOOP_ACK","回执闭环",{})}function u(){r.value.unshift({t:a(),k:"再分配",v:"分配至近区低电量节点"}),t.push("AUDIT","LOOP_REASSIGN","触发再分配",{})}function f(){r.value=[],o.value={loopMs:0,assignRate:0,formation:"稳定",mesh:"正常"}}return(m,p)=>(ft(),mt("div",sS,[zt(Re,{title:"决策快速闭环实验室（≥2模式）",subtitle:"建议 → 执行 → 回执 → 再分配，闭环验证"},{default:te(()=>[d("div",rS,[d("div",oS,[p[4]||(p[4]=d("div",{class:"k"},"闭环模式",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":p[0]||(p[0]=v=>e.value=v)},[...p[3]||(p[3]=[d("option",{value:"MODE_A"},"模式 A：建议→执行→回执",-1),d("option",{value:"MODE_B"},"模式 B：建议→审批→执行→回执",-1),d("option",{value:"MODE_C"},"模式 C：建议→专家复核→执行",-1)])],512),[[Se,e.value]])]),d("div",aS,[p[6]||(p[6]=d("div",{class:"k"},"通信状态",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":p[1]||(p[1]=v=>i.value=v)},[...p[5]||(p[5]=[d("option",{value:"OK"},"正常链路",-1),d("option",{value:"LIMIT"},"受限链路",-1),d("option",{value:"LOST"},"链路中断",-1)])],512),[[Se,i.value]])]),d("div",lS,[p[8]||(p[8]=d("div",{class:"k"},"闭环触发",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":p[2]||(p[2]=v=>s.value=v)},[...p[7]||(p[7]=[d("option",{value:"AUTO"},"自动触发",-1),d("option",{value:"MANUAL"},"人工触发",-1)])],512),[[Se,s.value]])])]),d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:l},"启动闭环"),d("button",{class:"s-btn",onClick:c},"回执 ACK"),d("button",{class:"s-btn",onClick:u},"触发再分配"),d("button",{class:"s-btn s-btn--danger",onClick:f},"重置")]),d("div",cS,[(ft(!0),mt(Kt,null,fe(r.value,(v,g)=>(ft(),mt("div",{class:"evt",key:g},[d("span",uS,rt(v.t),1),d("span",dS,rt(v.k),1),d("span",fS,rt(v.v),1)]))),128)),r.value.length===0?(ft(),mt("div",hS,"点击“启动闭环”开始验证")):En("",!0)])]),_:1}),zt(Re,{title:"闭环指标",subtitle:"状态驱动与规则触发下的实时评估"},{default:te(()=>[d("div",pS,[d("div",mS,[p[9]||(p[9]=d("div",{class:"k"},"闭环耗时",-1)),d("div",_S,rt(o.value.loopMs)+" ms",1)]),d("div",gS,[p[10]||(p[10]=d("div",{class:"k"},"分配成功率",-1)),d("div",vS,rt(o.value.assignRate)+"%",1)]),d("div",xS,[p[11]||(p[11]=d("div",{class:"k"},"自主保持编队",-1)),d("div",SS,rt(o.value.formation),1)]),d("div",MS,[p[12]||(p[12]=d("div",{class:"k"},"自组网状态",-1)),d("div",yS,rt(o.value.mesh),1)])]),p[13]||(p[13]=d("div",{class:"notes"},[d("div",{class:"note"},[d("div",{class:"k"},"说明"),d("div",{class:"v"},"链路受限时仍保持编队并自主完成任务，支持返航策略。")])],-1))]),_:1})]))}},bS=Oe(ES,[["__scopeId","data-v-fd1cca93"]]),TS={class:"grid"},AS={class:"row"},RS={class:"box"},wS={class:"box"},CS={class:"box"},PS={class:"stat"},DS={class:"pill"},IS={class:"v"},LS={class:"pill"},US={class:"v"},NS={class:"pill"},FS={class:"v"},OS={class:"pill"},BS={class:"v"},kS={class:"table"},VS={class:"fusion"},zS={class:"name"},HS={class:"meta"},GS={class:"state"},WS={__name:"NetworkMonitor",setup(n){const t=wi(),e=Dt("LOW"),i=Dt("MESH"),s=Dt("AUTO"),r=Dt({latency:0,availability:0,jitter:0,loss:0}),o=Dt([]),a=Dt([{id:1,name:"位置信息",desc:"统一坐标系与时间戳",state:"OK"},{id:2,name:"状态信息",desc:"任务/电量/链路",state:"OK"},{id:3,name:"指令/反馈",desc:"CMD / ACK / PROGRESS",state:"OK"}]);function l(){r.value={latency:32+Math.round(Math.random()*40),availability:98,jitter:5+Math.round(Math.random()*6),loss:.5},o.value=[{id:1,name:"地面站 ↔ 中继",level:"低时延",latency:18,state:"OK"},{id:2,name:"中继 ↔ 编队",level:"中时延",latency:42,state:"OK"},{id:3,name:"编队 ↔ 编队",level:"高时延",latency:68,state:"WARN"}],t.push("INFO","NET_PROBE","网络探测",{layer:e.value,topo:i.value,policy:s.value})}function c(){l()}function u(){r.value={latency:0,availability:0,jitter:0,loss:0},o.value=[]}return(f,m)=>(ft(),mt("div",TS,[zt(Re,{title:"网络状态监测（分层时延）",subtitle:"分层架构：低时延链路 / 高时延链路 / 标准接口交互"},{default:te(()=>[d("div",AS,[d("div",RS,[m[4]||(m[4]=d("div",{class:"k"},"链路层级",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":m[0]||(m[0]=p=>e.value=p)},[...m[3]||(m[3]=[d("option",{value:"LOW"},"低时延（站内）",-1),d("option",{value:"MID"},"中时延（区域）",-1),d("option",{value:"HIGH"},"高时延（跨域）",-1)])],512),[[Se,e.value]])]),d("div",wS,[m[6]||(m[6]=d("div",{class:"k"},"网状拓扑",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":m[1]||(m[1]=p=>i.value=p)},[...m[5]||(m[5]=[d("option",{value:"MESH"},"自组网 Mesh",-1),d("option",{value:"STAR"},"星型",-1),d("option",{value:"HYBRID"},"混合",-1)])],512),[[Se,i.value]])]),d("div",CS,[m[8]||(m[8]=d("div",{class:"k"},"通信策略",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":m[2]||(m[2]=p=>s.value=p)},[...m[7]||(m[7]=[d("option",{value:"AUTO"},"自动调度",-1),d("option",{value:"SAFE"},"可靠性优先",-1),d("option",{value:"FAST"},"延迟优先",-1)])],512),[[Se,s.value]])])]),d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:l},"开始探测"),d("button",{class:"s-btn",onClick:c},"刷新状态"),d("button",{class:"s-btn s-btn--danger",onClick:u},"重置")]),d("div",PS,[d("div",DS,[m[9]||(m[9]=d("div",{class:"k"},"平均时延",-1)),d("div",IS,rt(r.value.latency)+" ms",1)]),d("div",LS,[m[10]||(m[10]=d("div",{class:"k"},"可用性",-1)),d("div",US,rt(r.value.availability)+"%",1)]),d("div",NS,[m[11]||(m[11]=d("div",{class:"k"},"链路抖动",-1)),d("div",FS,rt(r.value.jitter)+" ms",1)]),d("div",OS,[m[12]||(m[12]=d("div",{class:"k"},"丢包率",-1)),d("div",BS,rt(r.value.loss)+"%",1)])]),d("div",kS,[m[13]||(m[13]=d("div",{class:"thead"},[d("span",null,"链路"),d("span",null,"层级"),d("span",null,"时延"),d("span",null,"状态")],-1)),(ft(!0),mt(Kt,null,fe(o.value,p=>(ft(),mt("div",{class:"trow",key:p.id},[d("span",null,rt(p.name),1),d("span",null,rt(p.level),1),d("span",null,rt(p.latency)+" ms",1),d("span",{class:en(["state",p.state])},rt(p.state),3)]))),128))])]),_:1}),zt(Re,{title:"多源信息融合",subtitle:"统一数据标准、状态一致性校验"},{default:te(()=>[d("div",VS,[(ft(!0),mt(Kt,null,fe(a.value,p=>(ft(),mt("div",{class:"f-card",key:p.id},[d("div",zS,rt(p.name),1),d("div",HS,rt(p.desc),1),d("div",GS,rt(p.state),1)]))),128))])]),_:1})]))}},XS=Oe(WS,[["__scopeId","data-v-872e83cf"]]),$S={class:"grid"},YS={class:"row"},qS={class:"box"},KS={class:"box"},jS={class:"box"},ZS={class:"status"},JS={class:"pill"},QS={class:"v"},tM={class:"pill"},eM={class:"v"},nM={class:"pill"},iM={class:"v"},sM={class:"pill"},rM={class:"v"},oM={class:"events"},aM={class:"t"},lM={class:"k"},cM={class:"v"},uM={key:0,class:"empty"},dM={class:"matrix"},fM=["onClick"],hM={__name:"MeshResilience",setup(n){const t=wi(),e=Dt("S1"),i=Dt("MESH"),s=Dt("5"),r=Dt({mesh:"待验证",rth:"待验证",formation:"待验证",range:0}),o=Dt([]),a=Dt([{id:"UAV-01",state:"OK",role:"固定翼"},{id:"UAV-02",state:"OK",role:"旋翼"},{id:"UAV-03",state:"WARN",role:"旋翼"},{id:"UAV-04",state:"OK",role:"旋翼"},{id:"UAV-05",state:"OK",role:"旋翼"}]);function l(){return new Date().toLocaleTimeString()}function c(){r.value={mesh:i.value==="MESH"?"正常":"备用",rth:i.value==="RETURN"?"触发":"待命",formation:"稳定",range:2.4},o.value=[{t:l(),k:"场景",v:e.value},{t:l(),k:"策略",v:i.value},{t:l(),k:"编队",v:`${s.value} 架`}],t.push("INFO","MESH_SIM","启动自组网仿真",{scenario:e.value,strategy:i.value,fleet:s.value})}function u(){o.value.unshift({t:l(),k:"补位",v:"节点 UAV-03 自动补位完成"}),t.push("AUDIT","MESH_HEAL","自动补位",{id:"UAV-03"})}function f(){o.value.unshift({t:l(),k:"中继",v:"中继切换至 UAV-02"}),t.push("INFO","MESH_RELAY","中继切换",{id:"UAV-02"})}function m(v){v.state="OK",o.value.unshift({t:l(),k:"补位",v:`${v.id} 已补位`})}function p(){r.value={mesh:"待验证",rth:"待验证",formation:"待验证",range:0},o.value=[]}return(v,g)=>(ft(),mt("div",$S,[zt(Re,{title:"自组网健壮性 / 断链返航",subtitle:"分布式协调决策，通信受限仍保持编队与自主完成任务"},{default:te(()=>[d("div",YS,[d("div",qS,[g[4]||(g[4]=d("div",{class:"k"},"断链场景",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":g[0]||(g[0]=_=>e.value=_)},[...g[3]||(g[3]=[d("option",{value:"S1"},"S1：部分链路丢失",-1),d("option",{value:"S2"},"S2：地面站失联",-1),d("option",{value:"S3"},"S3：单节点损坏",-1)])],512),[[Se,e.value]])]),d("div",KS,[g[6]||(g[6]=d("div",{class:"k"},"处置策略",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":g[1]||(g[1]=_=>i.value=_)},[...g[5]||(g[5]=[d("option",{value:"MESH"},"自组网维持编队",-1),d("option",{value:"RETURN"},"自动返航",-1),d("option",{value:"RELAY"},"临时中继",-1)])],512),[[Se,i.value]])]),d("div",jS,[g[8]||(g[8]=d("div",{class:"k"},"编队规模",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":g[2]||(g[2]=_=>s.value=_)},[...g[7]||(g[7]=[d("option",{value:"5"},"5 架（固定翼≥1）",-1),d("option",{value:"7"},"7 架（加分）",-1)])],512),[[Se,s.value]])])]),d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:c},"启动仿真"),d("button",{class:"s-btn",onClick:u},"自动补位"),d("button",{class:"s-btn s-btn--ghost",onClick:f},"中继切换"),d("button",{class:"s-btn s-btn--danger",onClick:p},"重置")]),d("div",ZS,[d("div",JS,[g[9]||(g[9]=d("div",{class:"k"},"自组网",-1)),d("div",QS,rt(r.value.mesh),1)]),d("div",tM,[g[10]||(g[10]=d("div",{class:"k"},"返航策略",-1)),d("div",eM,rt(r.value.rth),1)]),d("div",nM,[g[11]||(g[11]=d("div",{class:"k"},"编队保持",-1)),d("div",iM,rt(r.value.formation),1)]),d("div",sM,[g[12]||(g[12]=d("div",{class:"k"},"通信距离",-1)),d("div",rM,rt(r.value.range)+" km",1)])]),d("div",oM,[(ft(!0),mt(Kt,null,fe(o.value,(_,h)=>(ft(),mt("div",{class:"evt",key:h},[d("span",aM,rt(_.t),1),d("span",lM,rt(_.k),1),d("span",cM,rt(_.v),1)]))),128)),o.value.length===0?(ft(),mt("div",uM,"点击“启动仿真”")):En("",!0)])]),_:1}),zt(Re,{title:"节点抗损补位",subtitle:"无中心抗损与分布式协同"},{default:te(()=>[d("div",dM,[g[13]||(g[13]=d("div",{class:"head"},[d("span",null,"节点"),d("span",null,"状态"),d("span",null,"角色"),d("span",null,"动作")],-1)),(ft(!0),mt(Kt,null,fe(a.value,_=>(ft(),mt("div",{class:"row",key:_.id},[d("span",null,rt(_.id),1),d("span",{class:en(["state",_.state])},rt(_.state),3),d("span",null,rt(_.role),1),d("button",{class:"s-btn",onClick:h=>m(_)},"补位",8,fM)]))),128))])]),_:1})]))}},pM=Oe(hM,[["__scopeId","data-v-f3665f0f"]]),mM={class:"grid"},_M={class:"row"},gM={class:"box"},vM={class:"box"},xM={class:"box"},SM={class:"events"},MM={class:"t"},yM={class:"k"},EM={class:"v"},bM={key:0,class:"empty"},TM={class:"matrix"},AM=["onClick"],RM={__name:"NodeBehavior",setup(n){const t=wi(),e=Dt("DISTRIBUTED"),i=Dt("AUTO"),s=Dt("LOCAL"),r=Dt([]),o=Dt([{id:"UAV-01",state:"OK",role:"固定翼"},{id:"UAV-02",state:"OK",role:"旋翼"},{id:"UAV-03",state:"OK",role:"旋翼"},{id:"UAV-04",state:"OK",role:"旋翼"},{id:"UAV-05",state:"OK",role:"旋翼"}]);function a(){return new Date().toLocaleTimeString()}function l(){r.value=[{t:a(),k:"协同启动",v:e.value},{t:a(),k:"抗损策略",v:i.value},{t:a(),k:"协同范围",v:s.value}],t.push("INFO","NODE_SYNC","启动协同决策",{mode:e.value,strategy:i.value,scope:s.value})}function c(){const p=o.value[2];p.state="ERROR",r.value.unshift({t:a(),k:"损坏",v:`${p.id} 节点失效`}),t.push("WARN","NODE_DOWN","节点失效",{id:p.id})}function u(){const p=o.value[2];p.state="OK",r.value.unshift({t:a(),k:"补位",v:`${p.id} 补位完成`}),t.push("AUDIT","NODE_RECOVER","补位恢复",{id:p.id})}function f(p){p.state="OK",r.value.unshift({t:a(),k:"补位",v:`${p.id} 补位完成`})}function m(){o.value.forEach(p=>p.state="OK"),r.value=[]}return(p,v)=>(ft(),mt("div",mM,[zt(Re,{title:"协同决策 / 无中心抗损",subtitle:"分布式协调决策，单节点损坏自动补位"},{default:te(()=>[d("div",_M,[d("div",gM,[v[4]||(v[4]=d("div",{class:"k"},"协同模式",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":v[0]||(v[0]=g=>e.value=g)},[...v[3]||(v[3]=[d("option",{value:"DISTRIBUTED"},"分布式协同",-1),d("option",{value:"LEADER"},"主从协同",-1),d("option",{value:"HYBRID"},"混合协同",-1)])],512),[[Se,e.value]])]),d("div",vM,[v[6]||(v[6]=d("div",{class:"k"},"抗损策略",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":v[1]||(v[1]=g=>i.value=g)},[...v[5]||(v[5]=[d("option",{value:"AUTO"},"自动补位",-1),d("option",{value:"REPLAN"},"重新规划",-1),d("option",{value:"HOLD"},"保持队形",-1)])],512),[[Se,i.value]])]),d("div",xM,[v[8]||(v[8]=d("div",{class:"k"},"协同范围",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":v[2]||(v[2]=g=>s.value=g)},[...v[7]||(v[7]=[d("option",{value:"LOCAL"},"近域协同",-1),d("option",{value:"REGION"},"区域协同",-1),d("option",{value:"CROSS"},"跨域协同",-1)])],512),[[Se,s.value]])])]),d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:l},"启动协同"),d("button",{class:"s-btn",onClick:c},"模拟损坏"),d("button",{class:"s-btn s-btn--ghost",onClick:u},"补位恢复"),d("button",{class:"s-btn s-btn--danger",onClick:m},"重置")]),d("div",SM,[(ft(!0),mt(Kt,null,fe(r.value,(g,_)=>(ft(),mt("div",{class:"evt",key:_},[d("span",MM,rt(g.t),1),d("span",yM,rt(g.k),1),d("span",EM,rt(g.v),1)]))),128)),r.value.length===0?(ft(),mt("div",bM,"点击“启动协同”")):En("",!0)])]),_:1}),zt(Re,{title:"节点状态与角色",subtitle:"节点分工与补位状态"},{default:te(()=>[d("div",TM,[v[9]||(v[9]=d("div",{class:"head"},[d("span",null,"节点"),d("span",null,"状态"),d("span",null,"角色"),d("span",null,"动作")],-1)),(ft(!0),mt(Kt,null,fe(o.value,g=>(ft(),mt("div",{class:"row",key:g.id},[d("span",null,rt(g.id),1),d("span",{class:en(["state",g.state])},rt(g.state),3),d("span",null,rt(g.role),1),d("button",{class:"s-btn",onClick:_=>f(g)},"补位",8,AM)]))),128))])]),_:1})]))}},wM=Oe(RM,[["__scopeId","data-v-2a940bec"]]),CM={class:"grid"},PM={class:"cards"},DM=["data-active"],IM={class:"name"},LM={class:"meta"},UM={class:"ops"},NM=["onClick"],FM=["onClick"],OM=["onClick"],BM={class:"table"},kM={__name:"FormationLibrary",setup(n){const t=wi(),e=Dt([{id:"V",name:"V 型编队",desc:"固定翼 1 + 旋翼 4，覆盖优先"},{id:"LINE",name:"一字阵",desc:"长距通信稳定、对齐航线"},{id:"CIRCLE",name:"环形阵",desc:"重点区域回旋采样"}]),i=Dt("V"),s=Dt([{id:"UAV-01",type:"固定翼",pos:"(0,0,0)",state:"OK"},{id:"UAV-02",type:"旋翼",pos:"(1,0,1)",state:"OK"},{id:"UAV-03",type:"旋翼",pos:"(-1,0,1)",state:"OK"},{id:"UAV-04",type:"旋翼",pos:"(2,0,2)",state:"OK"},{id:"UAV-05",type:"旋翼",pos:"(-2,0,2)",state:"OK"}]);function r(f){i.value=f.id,t.push("AUDIT","FORMATION_APPLY","应用队形",{id:f.id})}function o(f){t.push("INFO","FORMATION_PREVIEW","预览队形",{id:f.id})}function a(f){t.push("AUDIT","FORMATION_SAVE","保存队形",{id:f.id})}function l(){t.push("INFO","FORMATION_NEW","新建队形",{})}function c(){t.push("INFO","FORMATION_IMPORT","导入坐标数据",{models:["FixedWing","Rotor"]})}function u(){t.push("INFO","FORMATION_EXPORT","导出队形",{id:i.value})}return(f,m)=>(ft(),mt("div",CM,[zt(Re,{title:"队形库管理（≥3）",subtitle:"支持存储 / 复用 / 导入不同机型坐标数据"},{default:te(()=>[d("div",{class:"toolbar"},[d("button",{class:"s-btn s-btn--primary",onClick:l},"新建队形"),d("button",{class:"s-btn",onClick:c},"导入机型坐标"),d("button",{class:"s-btn s-btn--ghost",onClick:u},"导出队形")]),d("div",PM,[(ft(!0),mt(Kt,null,fe(e.value,p=>(ft(),mt("div",{class:"card",key:p.id,"data-active":p.id===i.value},[d("div",IM,rt(p.name),1),d("div",LM,rt(p.desc),1),d("div",UM,[d("button",{class:"s-btn",onClick:v=>r(p)},"应用",8,NM),d("button",{class:"s-btn",onClick:v=>o(p)},"预览",8,FM),d("button",{class:"s-btn s-btn--ghost",onClick:v=>a(p)},"保存",8,OM)])],8,DM))),128))])]),_:1}),zt(Re,{title:"编队详情",subtitle:"固定翼/旋翼混编，支持≥5架"},{default:te(()=>[d("div",BM,[m[0]||(m[0]=d("div",{class:"thead"},[d("span",null,"节点"),d("span",null,"类型"),d("span",null,"坐标"),d("span",null,"状态")],-1)),(ft(!0),mt(Kt,null,fe(s.value,p=>(ft(),mt("div",{class:"trow",key:p.id},[d("span",null,rt(p.id),1),d("span",null,rt(p.type),1),d("span",null,rt(p.pos),1),d("span",{class:en(["state",p.state])},rt(p.state),3)]))),128))])]),_:1})]))}},VM=Oe(kM,[["__scopeId","data-v-2be998b6"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kc="182",zs={ROTATE:0,DOLLY:1,PAN:2},Ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zM=0,xd=1,HM=2,Do=1,GM=2,gr=3,$i=0,pn=1,mi=2,xi=0,Hs=1,Sd=2,Md=3,yd=4,WM=5,ss=100,XM=101,$M=102,YM=103,qM=104,KM=200,jM=201,ZM=202,JM=203,Ul=204,Nl=205,QM=206,ty=207,ey=208,ny=209,iy=210,sy=211,ry=212,oy=213,ay=214,Fl=0,Ol=1,Bl=2,Ks=3,kl=4,Vl=5,zl=6,Hl=7,ip=0,ly=1,cy=2,jn=0,sp=1,rp=2,op=3,ap=4,lp=5,cp=6,up=7,dp=300,ds=301,js=302,Gl=303,Wl=304,_a=306,Xl=1e3,_i=1001,$l=1002,Ye=1003,uy=1004,eo=1005,tn=1006,ka=1007,as=1008,Mn=1009,fp=1010,hp=1011,Fr=1012,jc=1013,ti=1014,Yn=1015,Ti=1016,Zc=1017,Jc=1018,Or=1020,pp=35902,mp=35899,_p=1021,gp=1022,Nn=1023,Ai=1026,ls=1027,vp=1028,Qc=1029,Zs=1030,tu=1031,eu=1033,Io=33776,Lo=33777,Uo=33778,No=33779,Yl=35840,ql=35841,Kl=35842,jl=35843,Zl=36196,Jl=37492,Ql=37496,tc=37488,ec=37489,nc=37490,ic=37491,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,uc=37814,dc=37815,fc=37816,hc=37817,pc=37818,mc=37819,_c=37820,gc=37821,vc=36492,xc=36494,Sc=36495,Mc=36283,yc=36284,Ec=36285,bc=36286,dy=3200,xp=0,fy=1,Gi="",Rn="srgb",Js="srgb-linear",qo="linear",ge="srgb",vs=7680,Ed=519,hy=512,py=513,my=514,nu=515,_y=516,gy=517,iu=518,vy=519,bd=35044,Td="300 es",qn=2e3,Ko=2001;function Sp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function jo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xy(){const n=jo("canvas");return n.style.display="block",n}const Ad={};function Rd(...n){const t="THREE."+n.shift();console.log(t,...n)}function Yt(...n){const t="THREE."+n.shift();console.warn(t,...n)}function de(...n){const t="THREE."+n.shift();console.error(t,...n)}function Br(...n){const t=n.join(" ");t in Ad||(Ad[t]=!0,Yt(...n))}function Sy(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fo=Math.PI/180,Tc=180/Math.PI;function $r(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function My(n,t){return(n%t+t)%t}function Va(n,t,e){return(1-e)*n+e*t}function lr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yy={DEG2RAD:Fo};class jt{constructor(t=0,e=0){jt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],m=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a>=1){t[e+0]=m,t[e+1]=p,t[e+2]=v,t[e+3]=g;return}if(f!==g||l!==m||c!==p||u!==v){let _=l*m+c*p+u*v+f*g;_<0&&(m=-m,p=-p,v=-v,g=-g,_=-_);let h=1-a;if(_<.9995){const M=Math.acos(_),A=Math.sin(M);h=Math.sin(h*M)/A,a=Math.sin(a*M)/A,l=l*h+m*a,c=c*h+p*a,u=u*h+v*a,f=f*h+g*a}else{l=l*h+m*a,c=c*h+p*a,u=u*h+v*a,f=f*h+g*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],m=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+u*f+l*p-c*m,t[e+1]=l*v+u*m+c*f-a*p,t[e+2]=c*v+u*p+a*m-l*f,t[e+3]=u*v-a*f-l*m-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),m=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=m*u*f+c*p*v,this._y=c*p*f-m*u*v,this._z=c*u*v+m*p*f,this._w=c*u*f-m*p*v;break;case"YXZ":this._x=m*u*f+c*p*v,this._y=c*p*f-m*u*v,this._z=c*u*v-m*p*f,this._w=c*u*f+m*p*v;break;case"ZXY":this._x=m*u*f-c*p*v,this._y=c*p*f+m*u*v,this._z=c*u*v+m*p*f,this._w=c*u*f-m*p*v;break;case"ZYX":this._x=m*u*f-c*p*v,this._y=c*p*f+m*u*v,this._z=c*u*v-m*p*f,this._w=c*u*f+m*p*v;break;case"YZX":this._x=m*u*f+c*p*v,this._y=c*p*f+m*u*v,this._z=c*u*v-m*p*f,this._w=c*u*f-m*p*v;break;case"XZY":this._x=m*u*f-c*p*v,this._y=c*p*f-m*u*v,this._z=c*u*v+m*p*f,this._w=c*u*f+m*p*v;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],m=i+a+f;if(m>0){const p=.5/Math.sqrt(m+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,i=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return za.copy(this).projectOnVector(t),this.sub(za)}reflect(t){return this.sub(za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new X,wd=new fs;class Qt{constructor(t,e,i,s,r,o,a,l,c){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],m=i[2],p=i[5],v=i[8],g=s[0],_=s[3],h=s[6],M=s[1],A=s[4],b=s[7],w=s[2],I=s[5],D=s[8];return r[0]=o*g+a*M+l*w,r[3]=o*_+a*A+l*I,r[6]=o*h+a*b+l*D,r[1]=c*g+u*M+f*w,r[4]=c*_+u*A+f*I,r[7]=c*h+u*b+f*D,r[2]=m*g+p*M+v*w,r[5]=m*_+p*A+v*I,r[8]=m*h+p*b+v*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,m=a*l-u*r,p=c*r-o*l,v=e*f+i*m+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return t[0]=f*g,t[1]=(s*c-u*i)*g,t[2]=(a*i-s*o)*g,t[3]=m*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=p*g,t[7]=(i*l-c*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ha=new Qt,Cd=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ey(){const n={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ge&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?qo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Br("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Br("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Js]:{primaries:t,whitePoint:i,transfer:qo,toXYZ:Cd,fromXYZ:Pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:t,whitePoint:i,transfer:ge,toXYZ:Cd,fromXYZ:Pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),n}const le=Ey();function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Gs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xs;class by{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{xs===void 0&&(xs=jo("canvas")),xs.width=t.width,xs.height=t.height;const s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=xs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=jo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Si(e[i]/255)*255):e[i]=Si(e[i]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ty=0;class su{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=$r(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ga(s[o].image)):r.push(Ga(s[o]))}else r=Ga(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?by.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}let Ay=0;const Wa=new X;class cn extends ps{constructor(t=cn.DEFAULT_IMAGE,e=cn.DEFAULT_MAPPING,i=_i,s=_i,r=tn,o=as,a=Nn,l=Mn,c=cn.DEFAULT_ANISOTROPY,u=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=$r(),this.name="",this.source=new su(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xl:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case $l:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xl:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case $l:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=dp;cn.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,i=0,s=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],m=l[1],p=l[5],v=l[9],g=l[2],_=l[6],h=l[10];if(Math.abs(u-m)<.01&&Math.abs(f-g)<.01&&Math.abs(v-_)<.01){if(Math.abs(u+m)<.1&&Math.abs(f+g)<.1&&Math.abs(v+_)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,b=(p+1)/2,w=(h+1)/2,I=(u+m)/4,D=(f+g)/4,F=(v+_)/4;return A>b&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=I/i,r=D/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=I/s,r=F/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=D/r,s=F/r),this.set(i,s,r,e),this}let M=Math.sqrt((_-v)*(_-v)+(f-g)*(f-g)+(m-u)*(m-u));return Math.abs(M)<.001&&(M=1),this.x=(_-v)/M,this.y=(f-g)/M,this.z=(m-u)/M,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ry extends ps{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new cn(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new su(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Ry{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Mp extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wy extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(r,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),io.subVectors(this.max,cr),Ss.subVectors(t.a,cr),Ms.subVectors(t.b,cr),ys.subVectors(t.c,cr),Pi.subVectors(Ms,Ss),Di.subVectors(ys,Ms),Zi.subVectors(Ss,ys);let e=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-Zi.z,Zi.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,Zi.z,0,-Zi.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-Zi.y,Zi.x,0];return!Xa(e,Ss,Ms,ys,io)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,Ss,Ms,ys,io))?!1:(so.crossVectors(Pi,Di),e=[so.x,so.y,so.z],Xa(e,Ss,Ms,ys,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const oi=[new X,new X,new X,new X,new X,new X,new X,new X],Dn=new X,no=new Yr,Ss=new X,Ms=new X,ys=new X,Pi=new X,Di=new X,Zi=new X,cr=new X,io=new X,so=new X,Ji=new X;function Xa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ji.fromArray(n,r);const a=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),u=i.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Cy=new Yr,ur=new X,$a=new X;class ga{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Cy.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add($a)),this.expandByPoint(ur.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ai=new X,Ya=new X,ro=new X,Ii=new X,qa=new X,oo=new X,Ka=new X;class ru{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ya.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(Ya);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ro),a=Ii.dot(this.direction),l=-Ii.dot(ro),c=Ii.lengthSq(),u=Math.abs(1-o*o);let f,m,p,v;if(u>0)if(f=o*l-a,m=o*a-l,v=r*u,f>=0)if(m>=-v)if(m<=v){const g=1/u;f*=g,m*=g,p=f*(f+o*m+2*a)+m*(o*f+m+2*l)+c}else m=r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m=-r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;else m<=-v?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c):m<=v?(f=0,m=Math.min(Math.max(-r,-l),r),p=m*(m+2*l)+c):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+m*(m+2*l)+c);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),p=-f*f+m*(m+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ya).addScaledVector(ro,m),p}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,m=this.origin;return c>=0?(i=(t.min.x-m.x)*c,s=(t.max.x-m.x)*c):(i=(t.max.x-m.x)*c,s=(t.min.x-m.x)*c),u>=0?(r=(t.min.y-m.y)*u,o=(t.max.y-m.y)*u):(r=(t.max.y-m.y)*u,o=(t.min.y-m.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-m.z)*f,l=(t.max.z-m.z)*f):(a=(t.max.z-m.z)*f,l=(t.min.z-m.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,r){qa.subVectors(e,t),oo.subVectors(i,t),Ka.crossVectors(qa,oo);let o=this.direction.dot(Ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);const l=a*this.direction.dot(oo.crossVectors(Ii,oo));if(l<0)return null;const c=a*this.direction.dot(qa.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(Ka);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,i,s,r,o,a,l,c,u,f,m,p,v,g,_){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,m,p,v,g,_)}set(t,e,i,s,r,o,a,l,c,u,f,m,p,v,g,_){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=m,h[3]=p,h[7]=v,h[11]=g,h[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const m=o*u,p=o*f,v=a*u,g=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+v*c,e[5]=m-g*c,e[9]=-a*l,e[2]=g-m*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const m=l*u,p=l*f,v=c*u,g=c*f;e[0]=m+g*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-v,e[6]=g+m*a,e[10]=o*l}else if(t.order==="ZXY"){const m=l*u,p=l*f,v=c*u,g=c*f;e[0]=m-g*a,e[4]=-o*f,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*u,e[9]=g-m*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const m=o*u,p=o*f,v=a*u,g=a*f;e[0]=l*u,e[4]=v*c-p,e[8]=m*c+g,e[1]=l*f,e[5]=g*c+m,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const m=o*l,p=o*c,v=a*l,g=a*c;e[0]=l*u,e[4]=g-m*f,e[8]=v*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+v,e[10]=m-g*f}else if(t.order==="XZY"){const m=o*l,p=o*c,v=a*l,g=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=m*f+g,e[5]=o*u,e[9]=p*f-v,e[2]=v*f-p,e[6]=a*u,e[10]=g*f+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Py,t,Dy)}lookAt(t,e,i){const s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Li.crossVectors(i,vn),Li.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Li.crossVectors(i,vn)),Li.normalize(),ao.crossVectors(vn,Li),s[0]=Li.x,s[4]=ao.x,s[8]=vn.x,s[1]=Li.y,s[5]=ao.y,s[9]=vn.y,s[2]=Li.z,s[6]=ao.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],m=i[9],p=i[13],v=i[2],g=i[6],_=i[10],h=i[14],M=i[3],A=i[7],b=i[11],w=i[15],I=s[0],D=s[4],F=s[8],S=s[12],T=s[1],N=s[5],W=s[9],$=s[13],H=s[2],B=s[6],z=s[10],k=s[14],tt=s[3],_t=s[7],gt=s[11],Mt=s[15];return r[0]=o*I+a*T+l*H+c*tt,r[4]=o*D+a*N+l*B+c*_t,r[8]=o*F+a*W+l*z+c*gt,r[12]=o*S+a*$+l*k+c*Mt,r[1]=u*I+f*T+m*H+p*tt,r[5]=u*D+f*N+m*B+p*_t,r[9]=u*F+f*W+m*z+p*gt,r[13]=u*S+f*$+m*k+p*Mt,r[2]=v*I+g*T+_*H+h*tt,r[6]=v*D+g*N+_*B+h*_t,r[10]=v*F+g*W+_*z+h*gt,r[14]=v*S+g*$+_*k+h*Mt,r[3]=M*I+A*T+b*H+w*tt,r[7]=M*D+A*N+b*B+w*_t,r[11]=M*F+A*W+b*z+w*gt,r[15]=M*S+A*$+b*k+w*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],m=t[10],p=t[14],v=t[3],g=t[7],_=t[11],h=t[15],M=l*p-c*m,A=a*p-c*f,b=a*m-l*f,w=o*p-c*u,I=o*m-l*u,D=o*f-a*u;return e*(g*M-_*A+h*b)-i*(v*M-_*w+h*I)+s*(v*A-g*w+h*D)-r*(v*b-g*I+_*D)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],m=t[10],p=t[11],v=t[12],g=t[13],_=t[14],h=t[15],M=f*_*c-g*m*c+g*l*p-a*_*p-f*l*h+a*m*h,A=v*m*c-u*_*c-v*l*p+o*_*p+u*l*h-o*m*h,b=u*g*c-v*f*c+v*a*p-o*g*p-u*a*h+o*f*h,w=v*f*l-u*g*l-v*a*m+o*g*m+u*a*_-o*f*_,I=e*M+i*A+s*b+r*w;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return t[0]=M*D,t[1]=(g*m*r-f*_*r-g*s*p+i*_*p+f*s*h-i*m*h)*D,t[2]=(a*_*r-g*l*r+g*s*c-i*_*c-a*s*h+i*l*h)*D,t[3]=(f*l*r-a*m*r-f*s*c+i*m*c+a*s*p-i*l*p)*D,t[4]=A*D,t[5]=(u*_*r-v*m*r+v*s*p-e*_*p-u*s*h+e*m*h)*D,t[6]=(v*l*r-o*_*r-v*s*c+e*_*c+o*s*h-e*l*h)*D,t[7]=(o*m*r-u*l*r+u*s*c-e*m*c-o*s*p+e*l*p)*D,t[8]=b*D,t[9]=(v*f*r-u*g*r-v*i*p+e*g*p+u*i*h-e*f*h)*D,t[10]=(o*g*r-v*a*r+v*i*c-e*g*c-o*i*h+e*a*h)*D,t[11]=(u*a*r-o*f*r-u*i*c+e*f*c+o*i*p-e*a*p)*D,t[12]=w*D,t[13]=(u*g*s-v*f*s+v*i*m-e*g*m-u*i*_+e*f*_)*D,t[14]=(v*a*s-o*g*s-v*i*l+e*g*l+o*i*_-e*a*_)*D,t[15]=(o*f*s-u*a*s+u*i*l-e*f*l-o*i*m+e*a*m)*D,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,m=r*c,p=r*u,v=r*f,g=o*u,_=o*f,h=a*f,M=l*c,A=l*u,b=l*f,w=i.x,I=i.y,D=i.z;return s[0]=(1-(g+h))*w,s[1]=(p+b)*w,s[2]=(v-A)*w,s[3]=0,s[4]=(p-b)*I,s[5]=(1-(m+h))*I,s[6]=(_+M)*I,s[7]=0,s[8]=(v+A)*D,s[9]=(_-M)*D,s[10]=(1-(m+g))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let r=Es.set(s[0],s[1],s[2]).length();const o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),In.copy(this);const c=1/r,u=1/o,f=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,e.setFromRotationMatrix(In),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=qn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(i-s),m=(e+t)/(e-t),p=(i+s)/(i-s);let v,g;if(l)v=r/(o-r),g=o*r/(o-r);else if(a===qn)v=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ko)v=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=qn,l=!1){const c=this.elements,u=2/(e-t),f=2/(i-s),m=-(e+t)/(e-t),p=-(i+s)/(i-s);let v,g;if(l)v=1/(o-r),g=o/(o-r);else if(a===qn)v=-2/(o-r),g=-(o+r)/(o-r);else if(a===Ko)v=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=m,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Es=new X,In=new we,Py=new X(0,0,0),Dy=new X(1,1,1),Li=new X,ao=new X,vn=new X,Dd=new we,Id=new fs;class ei{constructor(t=0,e=0,i=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],m=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Dd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Id.setFromEuler(this),this.setFromQuaternion(Id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class yp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Iy=0;const Ld=new X,bs=new fs,li=new we,lo=new X,dr=new X,Ly=new X,Uy=new fs,Ud=new X(1,0,0),Nd=new X(0,1,0),Fd=new X(0,0,1),Od={type:"added"},Ny={type:"removed"},Ts={type:"childadded",child:null},ja={type:"childremoved",child:null};class We extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new X,e=new ei,i=new fs,s=new X(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new Qt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(Ud,t)}rotateY(t){return this.rotateOnAxis(Nd,t)}rotateZ(t){return this.rotateOnAxis(Fd,t)}translateOnAxis(t,e){return Ld.copy(t).applyQuaternion(this.quaternion),this.position.add(Ld.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ud,t)}translateY(t){return this.translateOnAxis(Nd,t)}translateZ(t){return this.translateOnAxis(Fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?lo.copy(t):lo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(dr,lo,this.up):li.lookAt(lo,dr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(li),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Od),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ny),ja.child=t,this.dispatchEvent(ja),ja.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Od),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Ly),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Uy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),m=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),m.length>0&&(i.skeletons=m),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}We.DEFAULT_UP=new X(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new X,ci=new X,Za=new X,ui=new X,As=new X,Rs=new X,Bd=new X,Ja=new X,Qa=new X,tl=new X,el=new Ie,nl=new Ie,il=new Ie;class Un{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),ci.subVectors(i,e),Za.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(ci),l=Ln.dot(Za),c=ci.dot(ci),u=ci.dot(Za),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const m=1/f,p=(c*l-a*u)*m,v=(o*u-a*l)*m;return r.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return el.setScalar(0),nl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,e),nl.fromBufferAttribute(t,i),il.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(el,r.x),o.addScaledVector(nl,r.y),o.addScaledVector(il,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ci.subVectors(t,e),Ln.cross(ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Ln.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;As.subVectors(s,i),Rs.subVectors(r,i),Ja.subVectors(t,i);const l=As.dot(Ja),c=Rs.dot(Ja);if(l<=0&&c<=0)return e.copy(i);Qa.subVectors(t,s);const u=As.dot(Qa),f=Rs.dot(Qa);if(u>=0&&f<=u)return e.copy(s);const m=l*f-u*c;if(m<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(As,o);tl.subVectors(t,r);const p=As.dot(tl),v=Rs.dot(tl);if(v>=0&&p<=v)return e.copy(r);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Rs,a);const _=u*v-p*f;if(_<=0&&f-u>=0&&p-v>=0)return Bd.subVectors(r,s),a=(f-u)/(f-u+(p-v)),e.copy(s).addScaledVector(Bd,a);const h=1/(_+g+m);return o=g*h,a=m*h,e.copy(i).addScaledVector(As,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},co={h:0,s:0,l:0};function sl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class oe{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Rn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=My(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=sl(o,r,t+1/3),this.g=sl(o,r,t),this.b=sl(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Rn){function i(r){r!==void 0&&parseFloat(r)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Rn){const i=Ep[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Rn){return le.workingToColorSpace(je.copy(this),t),Math.round(re(je.r*255,0,255))*65536+Math.round(re(je.g*255,0,255))*256+Math.round(re(je.b*255,0,255))}getHexString(t=Rn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(je.copy(this),e);const i=je.r,s=je.g,r=je.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Rn){le.workingToColorSpace(je.copy(this),t);const e=je.r,i=je.g,s=je.b;return t!==Rn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(co);const i=Va(Ui.h,co.h,e),s=Va(Ui.s,co.s,e),r=Va(Ui.l,co.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new oe;oe.NAMES=Ep;let Fy=0;class er extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Hs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ed&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bp extends er{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new X,uo=new jt;let Oy=0;class Jn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Oy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bd,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=lr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lr(e,this.array)),e}setX(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lr(e,this.array)),e}setY(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lr(e,this.array)),e}setW(t,e){return this.normalized&&(e=fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fn(e,this.array),i=fn(i,this.array),s=fn(s,this.array),r=fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bd&&(t.usage=this.usage),t}}class Tp extends Jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ap extends Jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ue extends Jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let By=0;const An=new we,rl=new We,ws=new X,xn=new Yr,fr=new Yr,Ge=new X;class mn extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sp(t)?Ap:Tp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,i){return An.makeTranslation(t,e,i),this.applyMatrix4(An),this}scale(t,e,i){return An.makeScale(t,e,i),this.applyMatrix4(An),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ue(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];xn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(t){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(xn.min,fr.min),xn.expandByPoint(Ge),Ge.addVectors(xn.max,fr.max),xn.expandByPoint(Ge)):(xn.expandByPoint(fr.min),xn.expandByPoint(fr.max))}xn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ge.fromBufferAttribute(a,c),l&&(ws.fromBufferAttribute(t,c),Ge.add(ws)),s=Math.max(s,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new X,l[F]=new X;const c=new X,u=new X,f=new X,m=new jt,p=new jt,v=new jt,g=new X,_=new X;function h(F,S,T){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,T),m.fromBufferAttribute(r,F),p.fromBufferAttribute(r,S),v.fromBufferAttribute(r,T),u.sub(c),f.sub(c),p.sub(m),v.sub(m);const N=1/(p.x*v.y-v.x*p.y);isFinite(N)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(N),_.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(N),a[F].add(g),a[S].add(g),a[T].add(g),l[F].add(_),l[S].add(_),l[T].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let F=0,S=M.length;F<S;++F){const T=M[F],N=T.start,W=T.count;for(let $=N,H=N+W;$<H;$+=3)h(t.getX($+0),t.getX($+1),t.getX($+2))}const A=new X,b=new X,w=new X,I=new X;function D(F){w.fromBufferAttribute(s,F),I.copy(w);const S=a[F];A.copy(S),A.sub(w.multiplyScalar(w.dot(S))).normalize(),b.crossVectors(I,S);const N=b.dot(l[F])<0?-1:1;o.setXYZW(F,A.x,A.y,A.z,N)}for(let F=0,S=M.length;F<S;++F){const T=M[F],N=T.start,W=T.count;for(let $=N,H=N+W;$<H;$+=3)D(t.getX($+0)),D(t.getX($+1)),D(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let m=0,p=i.count;m<p;m++)i.setXYZ(m,0,0,0);const s=new X,r=new X,o=new X,a=new X,l=new X,c=new X,u=new X,f=new X;if(t)for(let m=0,p=t.count;m<p;m+=3){const v=t.getX(m+0),g=t.getX(m+1),_=t.getX(m+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let m=0,p=e.count;m<p;m+=3)s.fromBufferAttribute(e,m+0),r.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(m+0,u.x,u.y,u.z),i.setXYZ(m+1,u.x,u.y,u.z),i.setXYZ(m+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,m=new c.constructor(l.length*u);let p=0,v=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let h=0;h<u;h++)m[v++]=c[p++]}return new Jn(m,u,f)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new mn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const m=c[u],p=t(m,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,m=c.length;f<m;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let m=0,p=f.length;m<p;m++)u.push(f[m].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kd=new we,Qi=new ru,fo=new ga,Vd=new X,ho=new X,po=new X,mo=new X,ol=new X,_o=new X,zd=new X,go=new X;class Cn extends We{constructor(t=new mn,e=new bp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ol.fromBufferAttribute(f,t),o?_o.addScaledVector(ol,u):_o.addScaledVector(ol.sub(e),u))}e.add(_o)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(fo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(fo,Vd)===null||Qi.origin.distanceToSquared(Vd)>(t.far-t.near)**2))&&(kd.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(kd),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,m=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=m.length;v<g;v++){const _=m[v],h=o[_.materialIndex],M=Math.max(_.start,p.start),A=Math.min(a.count,Math.min(_.start+_.count,p.start+p.count));for(let b=M,w=A;b<w;b+=3){const I=a.getX(b),D=a.getX(b+1),F=a.getX(b+2);s=vo(this,h,t,i,c,u,f,I,D,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let _=v,h=g;_<h;_+=3){const M=a.getX(_),A=a.getX(_+1),b=a.getX(_+2);s=vo(this,o,t,i,c,u,f,M,A,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=m.length;v<g;v++){const _=m[v],h=o[_.materialIndex],M=Math.max(_.start,p.start),A=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));for(let b=M,w=A;b<w;b+=3){const I=b,D=b+1,F=b+2;s=vo(this,h,t,i,c,u,f,I,D,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let _=v,h=g;_<h;_+=3){const M=_,A=_+1,b=_+2;s=vo(this,o,t,i,c,u,f,M,A,b),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function ky(n,t,e,i,s,r,o,a){let l;if(t.side===pn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===$i,a),l===null)return null;go.copy(a),go.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(go);return c<e.near||c>e.far?null:{distance:c,point:go.clone(),object:n}}function vo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,ho),n.getVertexPosition(l,po),n.getVertexPosition(c,mo);const u=ky(n,t,e,i,ho,po,mo,zd);if(u){const f=new X;Un.getBarycoord(zd,ho,po,mo,f),s&&(u.uv=Un.getInterpolatedAttribute(s,a,l,c,f,new jt)),r&&(u.uv1=Un.getInterpolatedAttribute(r,a,l,c,f,new jt)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,l,c,f,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new X,materialIndex:0};Un.getNormal(ho,po,mo,m.normal),u.face=m,u.barycoord=f}return u}class qr extends mn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let m=0,p=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(f,2));function v(g,_,h,M,A,b,w,I,D,F,S){const T=b/D,N=w/F,W=b/2,$=w/2,H=I/2,B=D+1,z=F+1;let k=0,tt=0;const _t=new X;for(let gt=0;gt<z;gt++){const Mt=gt*N-$;for(let Bt=0;Bt<B;Bt++){const Wt=Bt*T-W;_t[g]=Wt*M,_t[_]=Mt*A,_t[h]=H,c.push(_t.x,_t.y,_t.z),_t[g]=0,_t[_]=0,_t[h]=I>0?1:-1,u.push(_t.x,_t.y,_t.z),f.push(Bt/D),f.push(1-gt/F),k+=1}}for(let gt=0;gt<F;gt++)for(let Mt=0;Mt<D;Mt++){const Bt=m+Mt+B*gt,Wt=m+Mt+B*(gt+1),ae=m+(Mt+1)+B*(gt+1),ne=m+(Mt+1)+B*gt;l.push(Bt,Wt,ne),l.push(Wt,ae,ne),tt+=6}a.addGroup(p,tt,S),p+=tt,m+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qs(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function rn(n){const t={};for(let e=0;e<n.length;e++){const i=Qs(n[e]);for(const s in i)t[s]=i[s]}return t}function Vy(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Rp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const zy={clone:Qs,merge:rn};var Hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends er{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hy,this.fragmentShader=Gy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qs(t.uniforms),this.uniformsGroups=Vy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class wp extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new X,Hd=new jt,Gd=new jt;class wn extends wp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Tc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tc*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Hd,Gd),e.subVectors(Gd,Hd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Cs=-90,Ps=1;class Wy extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new wn(Cs,Ps,t,e);s.layers=this.layers,this.add(s);const r=new wn(Cs,Ps,t,e);r.layers=this.layers,this.add(r);const o=new wn(Cs,Ps,t,e);o.layers=this.layers,this.add(o);const a=new wn(Cs,Ps,t,e);a.layers=this.layers,this.add(a);const l=new wn(Cs,Ps,t,e);l.layers=this.layers,this.add(l);const c=new wn(Cs,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),m=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,m,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Cp extends cn{constructor(t=[],e=ds,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pp extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cp(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qr(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:xi});r.uniforms.tEquirect.value=e;const o=new Cn(s,r),a=e.minFilter;return e.minFilter===as&&(e.minFilter=tn),new Wy(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class xo extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xy={type:"move"};class al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,i),h=this._getHandJoint(c,g);_!==null&&(h.matrix.fromArray(_.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=_.radius),h.visible=_!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],m=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&m>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&m<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new xo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class $y extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yy extends cn{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ye,u=Ye,f,m){super(null,o,a,l,c,u,s,r,f,m),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ll=new X,qy=new X,Ky=new Qt;class zi{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ll.subVectors(i,e).cross(qy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ll),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ky.getNormalMatrix(t),s=this.coplanarPoint(ll).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ga,jy=new jt(.5,.5),So=new X;class ou{constructor(t=new zi,e=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=qn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],m=r[6],p=r[7],v=r[8],g=r[9],_=r[10],h=r[11],M=r[12],A=r[13],b=r[14],w=r[15];if(s[0].setComponents(c-o,p-u,h-v,w-M).normalize(),s[1].setComponents(c+o,p+u,h+v,w+M).normalize(),s[2].setComponents(c+a,p+f,h+g,w+A).normalize(),s[3].setComponents(c-a,p-f,h-g,w-A).normalize(),i)s[4].setComponents(l,m,_,b).normalize(),s[5].setComponents(c-l,p-m,h-_,w-b).normalize();else if(s[4].setComponents(c-l,p-m,h-_,w-b).normalize(),e===qn)s[5].setComponents(c+l,p+m,h+_,w+b).normalize();else if(e===Ko)s[5].setComponents(l,m,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);const e=jy.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(So.x=s.normal.x>0?t.max.x:t.min.x,So.y=s.normal.y>0?t.max.y:t.min.y,So.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class au extends er{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Zo=new X,Jo=new X,Wd=new we,hr=new ru,Mo=new ga,cl=new X,Xd=new X;class Zy extends We{constructor(t=new mn,e=new au){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Zo.fromBufferAttribute(e,s-1),Jo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Zo.distanceTo(Jo);t.setAttribute("lineDistance",new Ue(i,1))}else Yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;Wd.copy(s).invert(),hr.copy(t.ray).applyMatrix4(Wd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,m=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let g=p,_=v-1;g<_;g+=c){const h=u.getX(g),M=u.getX(g+1),A=yo(this,t,hr,l,h,M,g);A&&e.push(A)}if(this.isLineLoop){const g=u.getX(v-1),_=u.getX(p),h=yo(this,t,hr,l,g,_,v-1);h&&e.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=p,_=v-1;g<_;g+=c){const h=yo(this,t,hr,l,g,g+1,g);h&&e.push(h)}if(this.isLineLoop){const g=yo(this,t,hr,l,v-1,p,v-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yo(n,t,e,i,s,r,o){const a=n.geometry.attributes.position;if(Zo.fromBufferAttribute(a,s),Jo.fromBufferAttribute(a,r),e.distanceSqToSegment(Zo,Jo,cl,Xd)>i)return;cl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(cl);if(!(c<t.near||c>t.far))return{distance:c,point:Xd.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const $d=new X,Yd=new X;class Dp extends Zy{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)$d.fromBufferAttribute(e,s),Yd.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+$d.distanceTo(Yd);t.setAttribute("lineDistance",new Ue(i,1))}else Yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kr extends cn{constructor(t,e,i=ti,s,r,o,a=Ye,l=Ye,c,u=Ai,f=1){if(u!==Ai&&u!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:t,height:e,depth:f};super(m,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new su(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Jy extends kr{constructor(t,e=ti,i=ds,s,r,o=Ye,a=Ye,l,c=Ai){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ip extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class lu extends mn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],m=[],p=[];let v=0;const g=[],_=i/2;let h=0;M(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(m,3)),this.setAttribute("uv",new Ue(p,2));function M(){const b=new X,w=new X;let I=0;const D=(e-t)/i;for(let F=0;F<=r;F++){const S=[],T=F/r,N=T*(e-t)+t;for(let W=0;W<=s;W++){const $=W/s,H=$*l+a,B=Math.sin(H),z=Math.cos(H);w.x=N*B,w.y=-T*i+_,w.z=N*z,f.push(w.x,w.y,w.z),b.set(B,D,z).normalize(),m.push(b.x,b.y,b.z),p.push($,1-T),S.push(v++)}g.push(S)}for(let F=0;F<s;F++)for(let S=0;S<r;S++){const T=g[S][F],N=g[S+1][F],W=g[S+1][F+1],$=g[S][F+1];(t>0||S!==0)&&(u.push(T,N,$),I+=3),(e>0||S!==r-1)&&(u.push(N,W,$),I+=3)}c.addGroup(h,I,0),h+=I}function A(b){const w=v,I=new jt,D=new X;let F=0;const S=b===!0?t:e,T=b===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,_*T,0),m.push(0,T,0),p.push(.5,.5),v++;const N=v;for(let W=0;W<=s;W++){const H=W/s*l+a,B=Math.cos(H),z=Math.sin(H);D.x=S*z,D.y=_*T,D.z=S*B,f.push(D.x,D.y,D.z),m.push(0,T,0),I.x=B*.5+.5,I.y=z*.5*T+.5,p.push(I.x,I.y),v++}for(let W=0;W<s;W++){const $=w+W,H=N+W;b===!0?u.push(H,H+1,$):u.push(H+1,H,$),F+=3}c.addGroup(h,F,b===!0?1:2),h+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kr extends mn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,m=e/l,p=[],v=[],g=[],_=[];for(let h=0;h<u;h++){const M=h*m-o;for(let A=0;A<c;A++){const b=A*f-r;v.push(b,-M,0),g.push(0,0,1),_.push(A/a),_.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<a;M++){const A=M+c*h,b=M+c*(h+1),w=M+1+c*(h+1),I=M+1+c*h;p.push(A,b,I),p.push(b,w,I)}this.setIndex(p),this.setAttribute("position",new Ue(v,3)),this.setAttribute("normal",new Ue(g,3)),this.setAttribute("uv",new Ue(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.width,t.height,t.widthSegments,t.heightSegments)}}class cu extends mn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new X,m=new X,p=[],v=[],g=[],_=[];for(let h=0;h<=i;h++){const M=[],A=h/i;let b=0;h===0&&o===0?b=.5/e:h===i&&l===Math.PI&&(b=-.5/e);for(let w=0;w<=e;w++){const I=w/e;f.x=-t*Math.cos(s+I*r)*Math.sin(o+A*a),f.y=t*Math.cos(o+A*a),f.z=t*Math.sin(s+I*r)*Math.sin(o+A*a),v.push(f.x,f.y,f.z),m.copy(f).normalize(),g.push(m.x,m.y,m.z),_.push(I+b,1-A),M.push(c++)}u.push(M)}for(let h=0;h<i;h++)for(let M=0;M<e;M++){const A=u[h][M+1],b=u[h][M],w=u[h+1][M],I=u[h+1][M+1];(h!==0||o>0)&&p.push(A,b,I),(h!==i-1||l<Math.PI)&&p.push(b,w,I)}this.setIndex(p),this.setAttribute("position",new Ue(v,3)),this.setAttribute("normal",new Ue(g,3)),this.setAttribute("uv",new Ue(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qy extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qd extends er{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xp,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tE extends er{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class eE extends er{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uu extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class nE extends uu{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const ul=new we,Kd=new X,jd=new X;class iE{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Kd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kd),jd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jd),e.updateMatrixWorld(),ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class du extends wp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class sE extends iE{constructor(){super(new du(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rE extends uu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new sE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class oE extends uu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class aE extends wn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class lE{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Zd{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jd extends Dp{constructor(t=10,e=10,i=4473924,s=8947848){i=new oe(i),s=new oe(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let m=0,p=0,v=-a;m<=e;m++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const g=m===r?i:s;g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3,g.toArray(c,p),p+=3}const u=new mn;u.setAttribute("position",new Ue(l,3)),u.setAttribute("color",new Ue(c,3));const f=new au({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class cE extends Dp{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new mn;s.setAttribute("position",new Ue(e,3)),s.setAttribute("color",new Ue(i,3));const r=new au({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,i){const s=new oe,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(i),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class uE extends ps{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Yt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Qd(n,t,e,i){const s=dE(i);switch(e){case _p:return n*t;case vp:return n*t/s.components*s.byteLength;case Qc:return n*t/s.components*s.byteLength;case Zs:return n*t*2/s.components*s.byteLength;case tu:return n*t*2/s.components*s.byteLength;case gp:return n*t*3/s.components*s.byteLength;case Nn:return n*t*4/s.components*s.byteLength;case eu:return n*t*4/s.components*s.byteLength;case Io:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Uo:case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:case jl:return Math.max(n,16)*Math.max(t,8)/4;case Yl:case Kl:return Math.max(n,8)*Math.max(t,8)/2;case Zl:case Jl:case tc:case ec:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ql:case nc:case ic:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case hc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case _c:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case vc:case xc:case Sc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mc:case yc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ec:case bc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dE(n){switch(n){case Mn:case fp:return{byteLength:1,components:1};case Fr:case hp:case Ti:return{byteLength:2,components:1};case Zc:case Jc:return{byteLength:2,components:4};case ti:case jc:case Yn:return{byteLength:4,components:1};case pp:case mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Lp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function fE(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,v)=>p.start-v.start);let m=0;for(let p=1;p<f.length;p++){const v=f[m],g=f[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++m,f[m]=g)}f.length=m+1;for(let p=0,v=f.length;p<v;p++){const g=f[p];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var hE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pE=`#ifdef USE_ALPHAHASH
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
#endif`,mE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_E=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xE=`#ifdef USE_AOMAP
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
#endif`,yE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,EE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,AE=`#ifdef USE_IRIDESCENCE
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
#endif`,wE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NE=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,OE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BE=`vec3 transformedNormal = objectNormal;
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
#endif`,kE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GE="gl_FragColor = linearToOutputTexel( gl_FragColor );",WE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XE=`#ifdef USE_ENVMAP
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
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
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
#endif`,qE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KE=`#ifdef USE_ENVMAP
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
#endif`,jE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ZE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,JE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tb=`#ifdef USE_GRADIENTMAP
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
}`,eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sb=`uniform bool receiveShadow;
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
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ub=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,db=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fb=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,hb=`#if defined( RE_IndirectDiffuse )
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
#endif`,pb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_b=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yb=`#if defined( USE_POINTS_UV )
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
#endif`,Eb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ab=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wb=`#ifdef USE_MORPHTARGETS
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
#endif`,Cb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Db=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nb=`#ifdef USE_NORMALMAP
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
#endif`,Fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ob=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qb=`#ifdef USE_SKINNING
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
#endif`,t1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e1=`#ifdef USE_SKINNING
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
#endif`,n1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,s1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o1=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,a1=`#ifdef USE_TRANSMISSION
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const f1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h1=`uniform sampler2D t2D;
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v1=`#include <common>
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
}`,x1=`#if DEPTH_PACKING == 3200
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
}`,S1=`#define DISTANCE
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
}`,M1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`uniform float scale;
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
}`,T1=`uniform vec3 diffuse;
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
}`,A1=`#include <common>
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
}`,R1=`uniform vec3 diffuse;
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
}`,w1=`#define LAMBERT
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
}`,C1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,P1=`#define MATCAP
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
}`,D1=`#define MATCAP
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
}`,I1=`#define NORMAL
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
}`,L1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U1=`#define PHONG
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
}`,N1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,F1=`#define STANDARD
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
}`,O1=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,B1=`#define TOON
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
}`,k1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,V1=`uniform float size;
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
}`,z1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,W1=`uniform float rotation;
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
}`,X1=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:hE,alphahash_pars_fragment:pE,alphamap_fragment:mE,alphamap_pars_fragment:_E,alphatest_fragment:gE,alphatest_pars_fragment:vE,aomap_fragment:xE,aomap_pars_fragment:SE,batching_pars_vertex:ME,batching_vertex:yE,begin_vertex:EE,beginnormal_vertex:bE,bsdfs:TE,iridescence_fragment:AE,bumpmap_pars_fragment:RE,clipping_planes_fragment:wE,clipping_planes_pars_fragment:CE,clipping_planes_pars_vertex:PE,clipping_planes_vertex:DE,color_fragment:IE,color_pars_fragment:LE,color_pars_vertex:UE,color_vertex:NE,common:FE,cube_uv_reflection_fragment:OE,defaultnormal_vertex:BE,displacementmap_pars_vertex:kE,displacementmap_vertex:VE,emissivemap_fragment:zE,emissivemap_pars_fragment:HE,colorspace_fragment:GE,colorspace_pars_fragment:WE,envmap_fragment:XE,envmap_common_pars_fragment:$E,envmap_pars_fragment:YE,envmap_pars_vertex:qE,envmap_physical_pars_fragment:rb,envmap_vertex:KE,fog_vertex:jE,fog_pars_vertex:ZE,fog_fragment:JE,fog_pars_fragment:QE,gradientmap_pars_fragment:tb,lightmap_pars_fragment:eb,lights_lambert_fragment:nb,lights_lambert_pars_fragment:ib,lights_pars_begin:sb,lights_toon_fragment:ob,lights_toon_pars_fragment:ab,lights_phong_fragment:lb,lights_phong_pars_fragment:cb,lights_physical_fragment:ub,lights_physical_pars_fragment:db,lights_fragment_begin:fb,lights_fragment_maps:hb,lights_fragment_end:pb,logdepthbuf_fragment:mb,logdepthbuf_pars_fragment:_b,logdepthbuf_pars_vertex:gb,logdepthbuf_vertex:vb,map_fragment:xb,map_pars_fragment:Sb,map_particle_fragment:Mb,map_particle_pars_fragment:yb,metalnessmap_fragment:Eb,metalnessmap_pars_fragment:bb,morphinstance_vertex:Tb,morphcolor_vertex:Ab,morphnormal_vertex:Rb,morphtarget_pars_vertex:wb,morphtarget_vertex:Cb,normal_fragment_begin:Pb,normal_fragment_maps:Db,normal_pars_fragment:Ib,normal_pars_vertex:Lb,normal_vertex:Ub,normalmap_pars_fragment:Nb,clearcoat_normal_fragment_begin:Fb,clearcoat_normal_fragment_maps:Ob,clearcoat_pars_fragment:Bb,iridescence_pars_fragment:kb,opaque_fragment:Vb,packing:zb,premultiplied_alpha_fragment:Hb,project_vertex:Gb,dithering_fragment:Wb,dithering_pars_fragment:Xb,roughnessmap_fragment:$b,roughnessmap_pars_fragment:Yb,shadowmap_pars_fragment:qb,shadowmap_pars_vertex:Kb,shadowmap_vertex:jb,shadowmask_pars_fragment:Zb,skinbase_vertex:Jb,skinning_pars_vertex:Qb,skinning_vertex:t1,skinnormal_vertex:e1,specularmap_fragment:n1,specularmap_pars_fragment:i1,tonemapping_fragment:s1,tonemapping_pars_fragment:r1,transmission_fragment:o1,transmission_pars_fragment:a1,uv_pars_fragment:l1,uv_pars_vertex:c1,uv_vertex:u1,worldpos_vertex:d1,background_vert:f1,background_frag:h1,backgroundCube_vert:p1,backgroundCube_frag:m1,cube_vert:_1,cube_frag:g1,depth_vert:v1,depth_frag:x1,distance_vert:S1,distance_frag:M1,equirect_vert:y1,equirect_frag:E1,linedashed_vert:b1,linedashed_frag:T1,meshbasic_vert:A1,meshbasic_frag:R1,meshlambert_vert:w1,meshlambert_frag:C1,meshmatcap_vert:P1,meshmatcap_frag:D1,meshnormal_vert:I1,meshnormal_frag:L1,meshphong_vert:U1,meshphong_frag:N1,meshphysical_vert:F1,meshphysical_frag:O1,meshtoon_vert:B1,meshtoon_frag:k1,points_vert:V1,points_frag:z1,shadow_vert:H1,shadow_frag:G1,sprite_vert:W1,sprite_frag:X1},Rt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},$n={basic:{uniforms:rn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:rn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:rn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:rn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:rn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new oe(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:rn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:rn([Rt.points,Rt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:rn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:rn([Rt.common,Rt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:rn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:rn([Rt.sprite,Rt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:rn([Rt.common,Rt.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:rn([Rt.lights,Rt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};$n.physical={uniforms:rn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Eo={r:0,b:0,g:0},es=new ei,$1=new we;function Y1(n,t,e,i,s,r,o){const a=new oe(0);let l=r===!0?0:1,c,u,f=null,m=0,p=null;function v(A){let b=A.isScene===!0?A.background:null;return b&&b.isTexture&&(b=(A.backgroundBlurriness>0?e:t).get(b)),b}function g(A){let b=!1;const w=v(A);w===null?h(a,l):w&&w.isColor&&(h(w,1),b=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(A,b){const w=v(b);w&&(w.isCubeTexture||w.mapping===_a)?(u===void 0&&(u=new Cn(new qr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Qs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),es.copy(b.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4($1.makeRotationFromEuler(es)),u.material.toneMapped=le.getTransfer(w.colorSpace)!==ge,(f!==w||m!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,m=w.version,p=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Cn(new Kr(2,2),new ni({name:"BackgroundMaterial",uniforms:Qs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=le.getTransfer(w.colorSpace)!==ge,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||m!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,m=w.version,p=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function h(A,b){A.getRGB(Eo,Rp(n)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,b,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,b=1){a.set(A),l=b,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,h(a,l)},render:g,addToRenderList:_,dispose:M}}function q1(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=m(null);let r=s,o=!1;function a(T,N,W,$,H){let B=!1;const z=f($,W,N);r!==z&&(r=z,c(r.object)),B=p(T,$,W,H),B&&v(T,$,W,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,b(T,N,W,$),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,N,W){const $=W.wireframe===!0;let H=i[T.id];H===void 0&&(H={},i[T.id]=H);let B=H[N.id];B===void 0&&(B={},H[N.id]=B);let z=B[$];return z===void 0&&(z=m(l()),B[$]=z),z}function m(T){const N=[],W=[],$=[];for(let H=0;H<e;H++)N[H]=0,W[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:$,object:T,attributes:{},index:null}}function p(T,N,W,$){const H=r.attributes,B=N.attributes;let z=0;const k=W.getAttributes();for(const tt in k)if(k[tt].location>=0){const gt=H[tt];let Mt=B[tt];if(Mt===void 0&&(tt==="instanceMatrix"&&T.instanceMatrix&&(Mt=T.instanceMatrix),tt==="instanceColor"&&T.instanceColor&&(Mt=T.instanceColor)),gt===void 0||gt.attribute!==Mt||Mt&&gt.data!==Mt.data)return!0;z++}return r.attributesNum!==z||r.index!==$}function v(T,N,W,$){const H={},B=N.attributes;let z=0;const k=W.getAttributes();for(const tt in k)if(k[tt].location>=0){let gt=B[tt];gt===void 0&&(tt==="instanceMatrix"&&T.instanceMatrix&&(gt=T.instanceMatrix),tt==="instanceColor"&&T.instanceColor&&(gt=T.instanceColor));const Mt={};Mt.attribute=gt,gt&&gt.data&&(Mt.data=gt.data),H[tt]=Mt,z++}r.attributes=H,r.attributesNum=z,r.index=$}function g(){const T=r.newAttributes;for(let N=0,W=T.length;N<W;N++)T[N]=0}function _(T){h(T,0)}function h(T,N){const W=r.newAttributes,$=r.enabledAttributes,H=r.attributeDivisors;W[T]=1,$[T]===0&&(n.enableVertexAttribArray(T),$[T]=1),H[T]!==N&&(n.vertexAttribDivisor(T,N),H[T]=N)}function M(){const T=r.newAttributes,N=r.enabledAttributes;for(let W=0,$=N.length;W<$;W++)N[W]!==T[W]&&(n.disableVertexAttribArray(W),N[W]=0)}function A(T,N,W,$,H,B,z){z===!0?n.vertexAttribIPointer(T,N,W,H,B):n.vertexAttribPointer(T,N,W,$,H,B)}function b(T,N,W,$){g();const H=$.attributes,B=W.getAttributes(),z=N.defaultAttributeValues;for(const k in B){const tt=B[k];if(tt.location>=0){let _t=H[k];if(_t===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(_t=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(_t=T.instanceColor)),_t!==void 0){const gt=_t.normalized,Mt=_t.itemSize,Bt=t.get(_t);if(Bt===void 0)continue;const Wt=Bt.buffer,ae=Bt.type,ne=Bt.bytesPerElement,j=ae===n.INT||ae===n.UNSIGNED_INT||_t.gpuType===jc;if(_t.isInterleavedBufferAttribute){const U=_t.data,st=U.stride,lt=_t.offset;if(U.isInstancedInterleavedBuffer){for(let at=0;at<tt.locationSize;at++)h(tt.location+at,U.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let at=0;at<tt.locationSize;at++)_(tt.location+at);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let at=0;at<tt.locationSize;at++)A(tt.location+at,Mt/tt.locationSize,ae,gt,st*ne,(lt+Mt/tt.locationSize*at)*ne,j)}else{if(_t.isInstancedBufferAttribute){for(let U=0;U<tt.locationSize;U++)h(tt.location+U,_t.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let U=0;U<tt.locationSize;U++)_(tt.location+U);n.bindBuffer(n.ARRAY_BUFFER,Wt);for(let U=0;U<tt.locationSize;U++)A(tt.location+U,Mt/tt.locationSize,ae,gt,Mt*ne,Mt/tt.locationSize*U*ne,j)}}else if(z!==void 0){const gt=z[k];if(gt!==void 0)switch(gt.length){case 2:n.vertexAttrib2fv(tt.location,gt);break;case 3:n.vertexAttrib3fv(tt.location,gt);break;case 4:n.vertexAttrib4fv(tt.location,gt);break;default:n.vertexAttrib1fv(tt.location,gt)}}}}M()}function w(){F();for(const T in i){const N=i[T];for(const W in N){const $=N[W];for(const H in $)u($[H].object),delete $[H];delete N[W]}delete i[T]}}function I(T){if(i[T.id]===void 0)return;const N=i[T.id];for(const W in N){const $=N[W];for(const H in $)u($[H].object),delete $[H];delete N[W]}delete i[T.id]}function D(T){for(const N in i){const W=i[N];if(W[T.id]===void 0)continue;const $=W[T.id];for(const H in $)u($[H].object),delete $[H];delete W[T.id]}}function F(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:g,enableAttribute:_,disableUnusedAttributes:M}}function K1(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v];e.update(p,i,1)}function l(c,u,f,m){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],m[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,m,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g]*m[g];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function j1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Nn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const F=D===Ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Mn&&i.convert(D)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Yn&&!F)}function l(D){if(D==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Yt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:_,maxAttributes:h,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:w,samples:I}}function Z1(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new zi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){const p=f.length!==0||m||i!==0||s;return s=m,i=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){e=u(f,m,0)},this.setState=function(f,m,p){const v=f.clippingPlanes,g=f.clipIntersection,_=f.clipShadows,h=n.get(f);if(!s||v===null||v.length===0||r&&!_)r?u(null):c();else{const M=r?0:i,A=M*4;let b=h.clippingState||null;l.value=b,b=u(v,m,A,p);for(let w=0;w!==A;++w)b[w]=e[w];h.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,m,p,v){const g=f!==null?f.length:0;let _=null;if(g!==0){if(_=l.value,v!==!0||_===null){const h=p+g*4,M=m.matrixWorldInverse;a.getNormalMatrix(M),(_===null||_.length<h)&&(_=new Float32Array(h));for(let A=0,b=p;A!==g;++A,b+=4)o.copy(f[A]).applyMatrix4(M,a),o.normal.toArray(_,b),_[b+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function J1(n){let t=new WeakMap;function e(o,a){return a===Gl?o.mapping=ds:a===Wl&&(o.mapping=js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gl||a===Wl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pp(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Wi=4,tf=[.125,.215,.35,.446,.526,.582],rs=20,Q1=256,pr=new du,ef=new oe;let dl=null,fl=0,hl=0,pl=!1;const tT=new X;class nf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=tT}=r;dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=of(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(dl,fl,hl),this._renderer.xr.enabled=pl,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ds||t.mapping===js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dl=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ti,format:Nn,colorSpace:Js,depthBuffer:!1},s=sf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sf(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eT(r)),this._blurMaterial=iT(r,t,e),this._ggxMaterial=nT(r,t,e)}return s}_compileMaterial(t){const e=new Cn(new mn,t);this._renderer.compile(e,pr)}_sceneToCubeUV(t,e,i,s,r){const l=new wn(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,p=f.toneMapping;f.getClearColor(ef),f.toneMapping=jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Cn(new qr,new bp({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let h=!1;const M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,h=!0):(_.color.copy(ef),h=!0);for(let A=0;A<6;A++){const b=A%3;b===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):b===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const w=this._cubeSize;Ds(s,b*w,A>2?w:0,w,w),f.setRenderTarget(s),h&&f.render(g,l),f.render(t,l)}f.toneMapping=p,f.autoClear=m,t.background=M}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ds||t.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=of()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,pr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),m=0+c*1.25,p=f*m,{_lodMax:v}=this,g=this._sizeLods[i],_=3*g*(i>v-Wi?i-v+Wi:0),h=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=v-e,Ds(r,_,h,3*g,2*g),s.setRenderTarget(r),s.render(a,pr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=v-i,Ds(t,_,h,3*g,2*g),s.setRenderTarget(t),s.render(a,pr)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&de("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const m=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*rs-1),g=r/v,_=isFinite(r)?1+Math.floor(u*g):rs;_>rs&&Yt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${rs}`);const h=[];let M=0;for(let D=0;D<rs;++D){const F=D/g,S=Math.exp(-F*F/2);h.push(S),D===0?M+=S:D<_&&(M+=2*S)}for(let D=0;D<h.length;D++)h[D]=h[D]/M;m.envMap.value=t.texture,m.samples.value=_,m.weights.value=h,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:A}=this;m.dTheta.value=v,m.mipInt.value=A-i;const b=this._sizeLods[s],w=3*b*(s>A-Wi?s-A+Wi:0),I=4*(this._cubeSize-b);Ds(e,w,I,3*b,2*b),l.setRenderTarget(e),l.render(f,pr)}}function eT(n){const t=[],e=[],i=[];let s=n;const r=n-Wi+1+tf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Wi?l=tf[o-n+Wi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,f=1+c,m=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,g=3,_=2,h=1,M=new Float32Array(g*v*p),A=new Float32Array(_*v*p),b=new Float32Array(h*v*p);for(let I=0;I<p;I++){const D=I%3*2/3-1,F=I>2?0:-1,S=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];M.set(S,g*v*I),A.set(m,_*v*I);const T=[I,I,I,I,I,I];b.set(T,h*v*I)}const w=new mn;w.setAttribute("position",new Jn(M,g)),w.setAttribute("uv",new Jn(A,_)),w.setAttribute("faceIndex",new Jn(b,h)),i.push(new Cn(w,null)),s>Wi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function sf(n,t,e){const i=new Zn(n,t,e);return i.texture.mapping=_a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function nT(n,t,e){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Q1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:va(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function iT(n,t,e){const i=new Float32Array(rs),s=new X(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:va(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function rf(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:va(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function of(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function va(){return`

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
	`}function sT(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Gl||l===Wl,u=l===ds||l===js;if(c||u){let f=t.get(a);const m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new nf(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new nf(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function rT(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Br("WebGLRenderer: "+i+" extension not supported."),s}}}function oT(n,t,e,i){const s={},r=new WeakMap;function o(f){const m=f.target;m.index!==null&&t.remove(m.index);for(const v in m.attributes)t.remove(m.attributes[v]);m.removeEventListener("dispose",o),delete s[m.id];const p=r.get(m);p&&(t.remove(p),r.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,e.memory.geometries++),m}function l(f){const m=f.attributes;for(const p in m)t.update(m[p],n.ARRAY_BUFFER)}function c(f){const m=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const M=p.array;g=p.version;for(let A=0,b=M.length;A<b;A+=3){const w=M[A+0],I=M[A+1],D=M[A+2];m.push(w,I,I,D,D,w)}}else if(v!==void 0){const M=v.array;g=v.version;for(let A=0,b=M.length/3-1;A<b;A+=3){const w=A+0,I=A+1,D=A+2;m.push(w,I,I,D,D,w)}}else return;const _=new(Sp(m)?Ap:Tp)(m,1);_.version=g;const h=r.get(f);h&&t.remove(h),r.set(f,_)}function u(f){const m=r.get(f);if(m){const p=f.index;p!==null&&m.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function aT(n,t,e){let i;function s(m){i=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function l(m,p){n.drawElements(i,p,r,m*o),e.update(p,i,1)}function c(m,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,m*o,v),e.update(p,i,v))}function u(m,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,m,0,v);let _=0;for(let h=0;h<v;h++)_+=p[h];e.update(_,i,1)}function f(m,p,v,g){if(v===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let h=0;h<m.length;h++)c(m[h]/o,p[h],g[h]);else{_.multiDrawElementsInstancedWEBGL(i,p,0,r,m,0,g,0,v);let h=0;for(let M=0;M<v;M++)h+=p[M]*g[M];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function lT(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:de("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function cT(n,t,e){const i=new WeakMap,s=new Ie;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let m=i.get(a);if(m===void 0||m.count!==f){let T=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;m!==void 0&&m.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),g===!0&&(b=2),_===!0&&(b=3);let w=a.attributes.position.count*b,I=1;w>t.maxTextureSize&&(I=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const D=new Float32Array(w*I*4*f),F=new Mp(D,w,I,f);F.type=Yn,F.needsUpdate=!0;const S=b*4;for(let N=0;N<f;N++){const W=h[N],$=M[N],H=A[N],B=w*I*4*N;for(let z=0;z<W.count;z++){const k=z*S;v===!0&&(s.fromBufferAttribute(W,z),D[B+k+0]=s.x,D[B+k+1]=s.y,D[B+k+2]=s.z,D[B+k+3]=0),g===!0&&(s.fromBufferAttribute($,z),D[B+k+4]=s.x,D[B+k+5]=s.y,D[B+k+6]=s.z,D[B+k+7]=0),_===!0&&(s.fromBufferAttribute(H,z),D[B+k+8]=s.x,D[B+k+9]=s.y,D[B+k+10]=s.z,D[B+k+11]=H.itemSize===4?s.w:1)}}m={count:f,texture:F,size:new jt(w,I)},i.set(a,m),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let _=0;_<c.length;_++)v+=c[_];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",m.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:r}}function uT(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==c&&(m.update(),s.set(m,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const dT={[sp]:"LINEAR_TONE_MAPPING",[rp]:"REINHARD_TONE_MAPPING",[op]:"CINEON_TONE_MAPPING",[ap]:"ACES_FILMIC_TONE_MAPPING",[cp]:"AGX_TONE_MAPPING",[up]:"NEUTRAL_TONE_MAPPING",[lp]:"CUSTOM_TONE_MAPPING"};function fT(n,t,e,i,s){const r=new Zn(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Zn(t,e,{type:Ti,depthBuffer:!1,stencilBuffer:!1}),a=new mn;a.setAttribute("position",new Ue([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ue([0,2,0,0,2,0],2));const l=new Qy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Cn(a,l),u=new du(-1,1,1,-1,0,1);let f=null,m=null,p=!1,v,g=null,_=[],h=!1;this.setSize=function(M,A){r.setSize(M,A),o.setSize(M,A);for(let b=0;b<_.length;b++){const w=_[b];w.setSize&&w.setSize(M,A)}},this.setEffects=function(M){_=M,h=_.length>0&&_[0].isRenderPass===!0;const A=r.width,b=r.height;for(let w=0;w<_.length;w++){const I=_[w];I.setSize&&I.setSize(A,b)}},this.begin=function(M,A){if(p||M.toneMapping===jn&&_.length===0)return!1;if(g=A,A!==null){const b=A.width,w=A.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return h===!1&&M.setRenderTarget(r),v=M.toneMapping,M.toneMapping=jn,!0},this.hasRenderPass=function(){return h},this.end=function(M,A){M.toneMapping=v,p=!0;let b=r,w=o;for(let I=0;I<_.length;I++){const D=_[I];if(D.enabled!==!1&&(D.render(M,w,b,A),D.needsSwap!==!1)){const F=b;b=w,w=F}}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,l.defines={},le.getTransfer(f)===ge&&(l.defines.SRGB_TRANSFER="");const I=dT[m];I&&(l.defines[I]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(g),M.render(c,u),g=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Up=new cn,Ac=new kr(1,1),Np=new Mp,Fp=new wy,Op=new Cp,af=[],lf=[],cf=new Float32Array(16),uf=new Float32Array(9),df=new Float32Array(4);function nr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=af[s];if(r===void 0&&(r=new Float32Array(s),af[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function He(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xa(n,t){let e=lf[t];e===void 0&&(e=new Int32Array(t),lf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function hT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function pT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),He(e,t)}}function mT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),He(e,t)}}function _T(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),He(e,t)}}function gT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(ze(e,i))return;df.set(i),n.uniformMatrix2fv(this.addr,!1,df),He(e,i)}}function vT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(ze(e,i))return;uf.set(i),n.uniformMatrix3fv(this.addr,!1,uf),He(e,i)}}function xT(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(ze(e,i))return;cf.set(i),n.uniformMatrix4fv(this.addr,!1,cf),He(e,i)}}function ST(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function MT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),He(e,t)}}function yT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),He(e,t)}}function ET(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),He(e,t)}}function bT(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function TT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),He(e,t)}}function AT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),He(e,t)}}function RT(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),He(e,t)}}function wT(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ac.compareFunction=e.isReversedDepthBuffer()?iu:nu,r=Ac):r=Up,e.setTexture2D(t||r,s)}function CT(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Fp,s)}function PT(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Op,s)}function DT(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Np,s)}function IT(n){switch(n){case 5126:return hT;case 35664:return pT;case 35665:return mT;case 35666:return _T;case 35674:return gT;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return yT;case 35669:case 35673:return ET;case 5125:return bT;case 36294:return TT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return PT;case 36289:case 36303:case 36311:case 36292:return DT}}function LT(n,t){n.uniform1fv(this.addr,t)}function UT(n,t){const e=nr(t,this.size,2);n.uniform2fv(this.addr,e)}function NT(n,t){const e=nr(t,this.size,3);n.uniform3fv(this.addr,e)}function FT(n,t){const e=nr(t,this.size,4);n.uniform4fv(this.addr,e)}function OT(n,t){const e=nr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function BT(n,t){const e=nr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function kT(n,t){const e=nr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function VT(n,t){n.uniform1iv(this.addr,t)}function zT(n,t){n.uniform2iv(this.addr,t)}function HT(n,t){n.uniform3iv(this.addr,t)}function GT(n,t){n.uniform4iv(this.addr,t)}function WT(n,t){n.uniform1uiv(this.addr,t)}function XT(n,t){n.uniform2uiv(this.addr,t)}function $T(n,t){n.uniform3uiv(this.addr,t)}function YT(n,t){n.uniform4uiv(this.addr,t)}function qT(n,t,e){const i=this.cache,s=t.length,r=xa(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),He(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ac:o=Up;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function KT(n,t,e){const i=this.cache,s=t.length,r=xa(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Fp,r[o])}function jT(n,t,e){const i=this.cache,s=t.length,r=xa(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Op,r[o])}function ZT(n,t,e){const i=this.cache,s=t.length,r=xa(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),He(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Np,r[o])}function JT(n){switch(n){case 5126:return LT;case 35664:return UT;case 35665:return NT;case 35666:return FT;case 35674:return OT;case 35675:return BT;case 35676:return kT;case 5124:case 35670:return VT;case 35667:case 35671:return zT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return WT;case 36294:return XT;case 36295:return $T;case 36296:return YT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return ZT}}class QT{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=IT(e.type)}}class tA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=JT(e.type)}}class eA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function ff(n,t){n.seq.push(t),n.map[t.id]=t}function nA(n,t,e){const i=n.name,s=i.length;for(ml.lastIndex=0;;){const r=ml.exec(i),o=ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){ff(e,c===void 0?new QT(a,n,t):new tA(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new eA(a),ff(e,f)),e=f}}}class Oo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);nA(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function hf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const iA=37297;let sA=0;function rA(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const pf=new Qt;function oA(n){le._getMatrix(pf,le.workingColorSpace,n);const t=`mat3( ${pf.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case qo:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function mf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+rA(n.getShaderSource(t),a)}else return r}function aA(n,t){const e=oA(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const lA={[sp]:"Linear",[rp]:"Reinhard",[op]:"Cineon",[ap]:"ACESFilmic",[cp]:"AgX",[up]:"Neutral",[lp]:"Custom"};function cA(n,t){const e=lA[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const bo=new X;function uA(){le.getLuminanceCoefficients(bo);const n=bo.x.toFixed(4),t=bo.y.toFixed(4),e=bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function fA(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hA(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function vr(n){return n!==""}function _f(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(pA,_A)}const mA=new Map;function _A(n,t){let e=ee[t];if(e===void 0){const i=mA.get(t);if(i!==void 0)e=ee[i],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Rc(e)}const gA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vf(n){return n.replace(gA,vA)}function vA(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const xA={[Do]:"SHADOWMAP_TYPE_PCF",[gr]:"SHADOWMAP_TYPE_VSM"};function SA(n){return xA[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const MA={[ds]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[_a]:"ENVMAP_TYPE_CUBE_UV"};function yA(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":MA[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const EA={[js]:"ENVMAP_MODE_REFRACTION"};function bA(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":EA[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TA={[ip]:"ENVMAP_BLENDING_MULTIPLY",[ly]:"ENVMAP_BLENDING_MIX",[cy]:"ENVMAP_BLENDING_ADD"};function AA(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TA[n.combine]||"ENVMAP_BLENDING_NONE"}function RA(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function wA(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=SA(e),c=yA(e),u=bA(e),f=AA(e),m=RA(e),p=dA(e),v=fA(r),g=s.createProgram();let _,h,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(vr).join(`
`),_.length>0&&(_+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(vr).join(`
`),h.length>0&&(h+=`
`)):(_=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),h=[xf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==jn?"#define TONE_MAPPING":"",e.toneMapping!==jn?ee.tonemapping_pars_fragment:"",e.toneMapping!==jn?cA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,aA("linearToOutputTexel",e.outputColorSpace),uA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),o=Rc(o),o=_f(o,e),o=gf(o,e),a=Rc(a),a=_f(a,e),a=gf(a,e),o=vf(o),a=vf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,h=["#define varying in",e.glslVersion===Td?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=M+_+o,b=M+h+a,w=hf(s,s.VERTEX_SHADER,A),I=hf(s,s.FRAGMENT_SHADER,b);s.attachShader(g,w),s.attachShader(g,I),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function D(N){if(n.debug.checkShaderErrors){const W=s.getProgramInfoLog(g)||"",$=s.getShaderInfoLog(w)||"",H=s.getShaderInfoLog(I)||"",B=W.trim(),z=$.trim(),k=H.trim();let tt=!0,_t=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(tt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,w,I);else{const gt=mf(s,w,"vertex"),Mt=mf(s,I,"fragment");de("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+B+`
`+gt+`
`+Mt)}else B!==""?Yt("WebGLProgram: Program Info Log:",B):(z===""||k==="")&&(_t=!1);_t&&(N.diagnostics={runnable:tt,programLog:B,vertexShader:{log:z,prefix:_},fragmentShader:{log:k,prefix:h}})}s.deleteShader(w),s.deleteShader(I),F=new Oo(s,g),S=hA(s,g)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(g,iA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sA++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=I,this}let CA=0;class PA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new DA(t),e.set(t,i)),i}}class DA{constructor(t){this.id=CA++,this.code=t,this.usedTimes=0}}function IA(n,t,e,i,s,r,o){const a=new yp,l=new PA,c=new Set,u=[],f=new Map,m=s.logarithmicDepthBuffer;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return c.add(S),S===0?"uv":`uv${S}`}function _(S,T,N,W,$){const H=W.fog,B=$.geometry,z=S.isMeshStandardMaterial?W.environment:null,k=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),tt=k&&k.mapping===_a?k.image.height:null,_t=v[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&Yt("WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const gt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Mt=gt!==void 0?gt.length:0;let Bt=0;B.morphAttributes.position!==void 0&&(Bt=1),B.morphAttributes.normal!==void 0&&(Bt=2),B.morphAttributes.color!==void 0&&(Bt=3);let Wt,ae,ne,j;if(_t){const me=$n[_t];Wt=me.vertexShader,ae=me.fragmentShader}else Wt=S.vertexShader,ae=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),j=l.getFragmentShaderID(S);const U=n.getRenderTarget(),st=n.state.buffers.depth.getReversed(),lt=$.isInstancedMesh===!0,at=$.isBatchedMesh===!0,Nt=!!S.map,C=!!S.matcap,P=!!k,O=!!S.aoMap,Q=!!S.lightMap,Z=!!S.bumpMap,nt=!!S.normalMap,R=!!S.displacementMap,ht=!!S.emissiveMap,ct=!!S.metalnessMap,ot=!!S.roughnessMap,ut=S.anisotropy>0,y=S.clearcoat>0,x=S.dispersion>0,L=S.iridescence>0,K=S.sheen>0,it=S.transmission>0,q=ut&&!!S.anisotropyMap,wt=y&&!!S.clearcoatMap,vt=y&&!!S.clearcoatNormalMap,It=y&&!!S.clearcoatRoughnessMap,kt=L&&!!S.iridescenceMap,pt=L&&!!S.iridescenceThicknessMap,Et=K&&!!S.sheenColorMap,Tt=K&&!!S.sheenRoughnessMap,Lt=!!S.specularMap,yt=!!S.specularColorMap,Jt=!!S.specularIntensityMap,V=it&&!!S.transmissionMap,Pt=it&&!!S.thicknessMap,St=!!S.gradientMap,Ut=!!S.alphaMap,xt=S.alphaTest>0,dt=!!S.alphaHash,bt=!!S.extensions;let qt=jn;S.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(qt=n.toneMapping);const be={shaderID:_t,shaderType:S.type,shaderName:S.name,vertexShader:Wt,fragmentShader:ae,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:at,batchingColor:at&&$._colorsTexture!==null,instancing:lt,instancingColor:lt&&$.instanceColor!==null,instancingMorph:lt&&$.morphTexture!==null,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Js,alphaToCoverage:!!S.alphaToCoverage,map:Nt,matcap:C,envMap:P,envMapMode:P&&k.mapping,envMapCubeUVHeight:tt,aoMap:O,lightMap:Q,bumpMap:Z,normalMap:nt,displacementMap:R,emissiveMap:ht,normalMapObjectSpace:nt&&S.normalMapType===fy,normalMapTangentSpace:nt&&S.normalMapType===xp,metalnessMap:ct,roughnessMap:ot,anisotropy:ut,anisotropyMap:q,clearcoat:y,clearcoatMap:wt,clearcoatNormalMap:vt,clearcoatRoughnessMap:It,dispersion:x,iridescence:L,iridescenceMap:kt,iridescenceThicknessMap:pt,sheen:K,sheenColorMap:Et,sheenRoughnessMap:Tt,specularMap:Lt,specularColorMap:yt,specularIntensityMap:Jt,transmission:it,transmissionMap:V,thicknessMap:Pt,gradientMap:St,opaque:S.transparent===!1&&S.blending===Hs&&S.alphaToCoverage===!1,alphaMap:Ut,alphaTest:xt,alphaHash:dt,combine:S.combine,mapUv:Nt&&g(S.map.channel),aoMapUv:O&&g(S.aoMap.channel),lightMapUv:Q&&g(S.lightMap.channel),bumpMapUv:Z&&g(S.bumpMap.channel),normalMapUv:nt&&g(S.normalMap.channel),displacementMapUv:R&&g(S.displacementMap.channel),emissiveMapUv:ht&&g(S.emissiveMap.channel),metalnessMapUv:ct&&g(S.metalnessMap.channel),roughnessMapUv:ot&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:wt&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:vt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:kt&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(S.sheenRoughnessMap.channel),specularMapUv:Lt&&g(S.specularMap.channel),specularColorMapUv:yt&&g(S.specularColorMap.channel),specularIntensityMapUv:Jt&&g(S.specularIntensityMap.channel),transmissionMapUv:V&&g(S.transmissionMap.channel),thicknessMapUv:Pt&&g(S.thicknessMap.channel),alphaMapUv:Ut&&g(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(nt||ut),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!B.attributes.uv&&(Nt||Ut),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:st,skinning:$.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Bt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:qt,decodeVideoTexture:Nt&&S.map.isVideoTexture===!0&&le.getTransfer(S.map.colorSpace)===ge,decodeVideoTextureEmissive:ht&&S.emissiveMap.isVideoTexture===!0&&le.getTransfer(S.emissiveMap.colorSpace)===ge,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mi,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:bt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&S.extensions.multiDraw===!0||at)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function h(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)T.push(N),T.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(M(T,S),A(T,S),T.push(n.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function M(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function A(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function b(S){const T=v[S.type];let N;if(T){const W=$n[T];N=zy.clone(W.uniforms)}else N=S.uniforms;return N}function w(S,T){let N=f.get(T);return N!==void 0?++N.usedTimes:(N=new wA(n,T,S,r),u.push(N),f.set(T,N)),N}function I(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),f.delete(S.cacheKey),S.destroy()}}function D(S){l.remove(S)}function F(){l.dispose()}return{getParameters:_,getProgramCacheKey:h,getUniforms:b,acquireProgram:w,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:F}}function LA(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function UA(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Sf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Mf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,m,p,v,g,_){let h=n[t];return h===void 0?(h={id:f.id,object:f,geometry:m,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:_},n[t]=h):(h.id=f.id,h.object=f,h.geometry=m,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=_),t++,h}function a(f,m,p,v,g,_){const h=o(f,m,p,v,g,_);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(f,m,p,v,g,_){const h=o(f,m,p,v,g,_);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(f,m){e.length>1&&e.sort(f||UA),i.length>1&&i.sort(m||Sf),s.length>1&&s.sort(m||Sf)}function u(){for(let f=t,m=n.length;f<m;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function NA(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Mf,n.set(i,[o])):s>=r.length?(o=new Mf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function FA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new oe};break;case"SpotLight":e={position:new X,direction:new X,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new oe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":e={color:new oe,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function OA(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let BA=0;function kA(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function VA(n){const t=new FA,e=OA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const s=new X,r=new we,o=new we;function a(c){let u=0,f=0,m=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,v=0,g=0,_=0,h=0,M=0,A=0,b=0,w=0,I=0,D=0;c.sort(kA);for(let S=0,T=c.length;S<T;S++){const N=c[S],W=N.color,$=N.intensity,H=N.distance;let B=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Zs?B=N.shadow.map.texture:B=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=W.r*$,f+=W.g*$,m+=W.b*$;else if(N.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(N.sh.coefficients[z],$);D++}else if(N.isDirectionalLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const k=N.shadow,tt=e.get(N);tt.shadowIntensity=k.intensity,tt.shadowBias=k.bias,tt.shadowNormalBias=k.normalBias,tt.shadowRadius=k.radius,tt.shadowMapSize=k.mapSize,i.directionalShadow[p]=tt,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=N.shadow.matrix,M++}i.directional[p]=z,p++}else if(N.isSpotLight){const z=t.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(W).multiplyScalar($),z.distance=H,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,i.spot[g]=z;const k=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,k.updateMatrices(N),N.castShadow&&I++),i.spotLightMatrix[g]=k.matrix,N.castShadow){const tt=e.get(N);tt.shadowIntensity=k.intensity,tt.shadowBias=k.bias,tt.shadowNormalBias=k.normalBias,tt.shadowRadius=k.radius,tt.shadowMapSize=k.mapSize,i.spotShadow[g]=tt,i.spotShadowMap[g]=B,b++}g++}else if(N.isRectAreaLight){const z=t.get(N);z.color.copy(W).multiplyScalar($),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),i.rectArea[_]=z,_++}else if(N.isPointLight){const z=t.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),z.distance=N.distance,z.decay=N.decay,N.castShadow){const k=N.shadow,tt=e.get(N);tt.shadowIntensity=k.intensity,tt.shadowBias=k.bias,tt.shadowNormalBias=k.normalBias,tt.shadowRadius=k.radius,tt.shadowMapSize=k.mapSize,tt.shadowCameraNear=k.camera.near,tt.shadowCameraFar=k.camera.far,i.pointShadow[v]=tt,i.pointShadowMap[v]=B,i.pointShadowMatrix[v]=N.shadow.matrix,A++}i.point[v]=z,v++}else if(N.isHemisphereLight){const z=t.get(N);z.skyColor.copy(N.color).multiplyScalar($),z.groundColor.copy(N.groundColor).multiplyScalar($),i.hemi[h]=z,h++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=m;const F=i.hash;(F.directionalLength!==p||F.pointLength!==v||F.spotLength!==g||F.rectAreaLength!==_||F.hemiLength!==h||F.numDirectionalShadows!==M||F.numPointShadows!==A||F.numSpotShadows!==b||F.numSpotMaps!==w||F.numLightProbes!==D)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=_,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=b+w-I,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=D,F.directionalLength=p,F.pointLength=v,F.spotLength=g,F.rectAreaLength=_,F.hemiLength=h,F.numDirectionalShadows=M,F.numPointShadows=A,F.numSpotShadows=b,F.numSpotMaps=w,F.numLightProbes=D,i.version=BA++)}function l(c,u){let f=0,m=0,p=0,v=0,g=0;const _=u.matrixWorldInverse;for(let h=0,M=c.length;h<M;h++){const A=c[h];if(A.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),f++}else if(A.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),p++}else if(A.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),o.identity(),r.copy(A.matrixWorld),r.premultiply(_),o.extractRotation(r),b.halfWidth.set(A.width*.5,0,0),b.halfHeight.set(0,A.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const b=i.point[m];b.position.setFromMatrixPosition(A.matrixWorld),b.position.applyMatrix4(_),m++}else if(A.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(A.matrixWorld),b.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:i}}function yf(n){const t=new VA(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zA(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new yf(n),t.set(s,[a])):r>=o.length?(a=new yf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,WA=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],XA=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Ef=new we,mr=new X,_l=new X;function $A(n,t,e){let i=new ou;const s=new jt,r=new jt,o=new Ie,a=new tE,l=new eE,c={},u=e.maxTextureSize,f={[$i]:pn,[pn]:$i,[mi]:mi},m=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),p=m.clone();p.defines.HORIZONTAL_PASS=1;const v=new mn;v.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Cn(v,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Do;let h=this.type;this.render=function(I,D,F){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;I.type===GM&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),I.type=Do);const S=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),W=n.state;W.setBlending(xi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const $=h!==this.type;$&&D.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(B=>B.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,B=I.length;H<B;H++){const z=I[H],k=z.shadow;if(k===void 0){Yt("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const tt=k.getFrameExtents();if(s.multiply(tt),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/tt.x),s.x=r.x*tt.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/tt.y),s.y=r.y*tt.y,k.mapSize.y=r.y)),k.map===null||$===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===gr){if(z.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Zn(s.x,s.y,{format:Zs,type:Ti,minFilter:tn,magFilter:tn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new kr(s.x,s.y,Yn),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=Ai,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ye,k.map.depthTexture.magFilter=Ye}else{z.isPointLight?(k.map=new Pp(s.x),k.map.depthTexture=new Jy(s.x,ti)):(k.map=new Zn(s.x,s.y),k.map.depthTexture=new kr(s.x,s.y,ti)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=Ai;const gt=n.state.buffers.depth.getReversed();this.type===Do?(k.map.depthTexture.compareFunction=gt?iu:nu,k.map.depthTexture.minFilter=tn,k.map.depthTexture.magFilter=tn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ye,k.map.depthTexture.magFilter=Ye)}k.camera.updateProjectionMatrix()}const _t=k.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<_t;gt++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,gt),n.clear();else{gt===0&&(n.setRenderTarget(k.map),n.clear());const Mt=k.getViewport(gt);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),W.viewport(o)}if(z.isPointLight){const Mt=k.camera,Bt=k.matrix,Wt=z.distance||Mt.far;Wt!==Mt.far&&(Mt.far=Wt,Mt.updateProjectionMatrix()),mr.setFromMatrixPosition(z.matrixWorld),Mt.position.copy(mr),_l.copy(Mt.position),_l.add(WA[gt]),Mt.up.copy(XA[gt]),Mt.lookAt(_l),Mt.updateMatrixWorld(),Bt.makeTranslation(-mr.x,-mr.y,-mr.z),Ef.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ef,Mt.coordinateSystem,Mt.reversedDepth)}else k.updateMatrices(z);i=k.getFrustum(),b(D,F,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===gr&&M(k,F),k.needsUpdate=!1}h=this.type,_.needsUpdate=!1,n.setRenderTarget(S,T,N)};function M(I,D){const F=t.update(g);m.defines.VSM_SAMPLES!==I.blurSamples&&(m.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,m.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zn(s.x,s.y,{format:Zs,type:Ti})),m.uniforms.shadow_pass.value=I.map.depthTexture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(D,null,F,m,g,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(D,null,F,p,g,null)}function A(I,D,F,S){let T=null;const N=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(N!==void 0)T=N;else if(T=F.isPointLight===!0?l:a,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const W=T.uuid,$=D.uuid;let H=c[W];H===void 0&&(H={},c[W]=H);let B=H[$];B===void 0&&(B=T.clone(),H[$]=B,D.addEventListener("dispose",w)),T=B}if(T.visible=D.visible,T.wireframe=D.wireframe,S===gr?T.side=D.shadowSide!==null?D.shadowSide:D.side:T.side=D.shadowSide!==null?D.shadowSide:f[D.side],T.alphaMap=D.alphaMap,T.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,T.map=D.map,T.clipShadows=D.clipShadows,T.clippingPlanes=D.clippingPlanes,T.clipIntersection=D.clipIntersection,T.displacementMap=D.displacementMap,T.displacementScale=D.displacementScale,T.displacementBias=D.displacementBias,T.wireframeLinewidth=D.wireframeLinewidth,T.linewidth=D.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const W=n.properties.get(T);W.light=F}return T}function b(I,D,F,S,T){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===gr)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const $=t.update(I),H=I.material;if(Array.isArray(H)){const B=$.groups;for(let z=0,k=B.length;z<k;z++){const tt=B[z],_t=H[tt.materialIndex];if(_t&&_t.visible){const gt=A(I,_t,S,T);I.onBeforeShadow(n,I,D,F,$,gt,tt),n.renderBufferDirect(F,null,$,gt,I,tt),I.onAfterShadow(n,I,D,F,$,gt,tt)}}}else if(H.visible){const B=A(I,H,S,T);I.onBeforeShadow(n,I,D,F,$,B,null),n.renderBufferDirect(F,null,$,B,I,null),I.onAfterShadow(n,I,D,F,$,B,null)}}const W=I.children;for(let $=0,H=W.length;$<H;$++)b(W[$],D,F,S,T)}function w(I){I.target.removeEventListener("dispose",w);for(const F in c){const S=c[F],T=I.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}const YA={[Fl]:Ol,[Bl]:zl,[kl]:Hl,[Ks]:Vl,[Ol]:Fl,[zl]:Bl,[Hl]:kl,[Vl]:Ks};function qA(n,t){function e(){let V=!1;const Pt=new Ie;let St=null;const Ut=new Ie(0,0,0,0);return{setMask:function(xt){St!==xt&&!V&&(n.colorMask(xt,xt,xt,xt),St=xt)},setLocked:function(xt){V=xt},setClear:function(xt,dt,bt,qt,be){be===!0&&(xt*=qt,dt*=qt,bt*=qt),Pt.set(xt,dt,bt,qt),Ut.equals(Pt)===!1&&(n.clearColor(xt,dt,bt,qt),Ut.copy(Pt))},reset:function(){V=!1,St=null,Ut.set(-1,0,0,0)}}}function i(){let V=!1,Pt=!1,St=null,Ut=null,xt=null;return{setReversed:function(dt){if(Pt!==dt){const bt=t.get("EXT_clip_control");dt?bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.ZERO_TO_ONE_EXT):bt.clipControlEXT(bt.LOWER_LEFT_EXT,bt.NEGATIVE_ONE_TO_ONE_EXT),Pt=dt;const qt=xt;xt=null,this.setClear(qt)}},getReversed:function(){return Pt},setTest:function(dt){dt?U(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(dt){St!==dt&&!V&&(n.depthMask(dt),St=dt)},setFunc:function(dt){if(Pt&&(dt=YA[dt]),Ut!==dt){switch(dt){case Fl:n.depthFunc(n.NEVER);break;case Ol:n.depthFunc(n.ALWAYS);break;case Bl:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case kl:n.depthFunc(n.EQUAL);break;case Vl:n.depthFunc(n.GEQUAL);break;case zl:n.depthFunc(n.GREATER);break;case Hl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ut=dt}},setLocked:function(dt){V=dt},setClear:function(dt){xt!==dt&&(Pt&&(dt=1-dt),n.clearDepth(dt),xt=dt)},reset:function(){V=!1,St=null,Ut=null,xt=null,Pt=!1}}}function s(){let V=!1,Pt=null,St=null,Ut=null,xt=null,dt=null,bt=null,qt=null,be=null;return{setTest:function(me){V||(me?U(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function(me){Pt!==me&&!V&&(n.stencilMask(me),Pt=me)},setFunc:function(me,zn,ii){(St!==me||Ut!==zn||xt!==ii)&&(n.stencilFunc(me,zn,ii),St=me,Ut=zn,xt=ii)},setOp:function(me,zn,ii){(dt!==me||bt!==zn||qt!==ii)&&(n.stencilOp(me,zn,ii),dt=me,bt=zn,qt=ii)},setLocked:function(me){V=me},setClear:function(me){be!==me&&(n.clearStencil(me),be=me)},reset:function(){V=!1,Pt=null,St=null,Ut=null,xt=null,dt=null,bt=null,qt=null,be=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},m=new WeakMap,p=[],v=null,g=!1,_=null,h=null,M=null,A=null,b=null,w=null,I=null,D=new oe(0,0,0),F=0,S=!1,T=null,N=null,W=null,$=null,H=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(tt)[1]),z=k>=1):tt.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),z=k>=2);let _t=null,gt={};const Mt=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),Wt=new Ie().fromArray(Mt),ae=new Ie().fromArray(Bt);function ne(V,Pt,St,Ut){const xt=new Uint8Array(4),dt=n.createTexture();n.bindTexture(V,dt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let bt=0;bt<St;bt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Pt,0,n.RGBA,1,1,Ut,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(Pt+bt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return dt}const j={};j[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(Ks),Z(!1),nt(xd),U(n.CULL_FACE),O(xi);function U(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function st(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function lt(V,Pt){return f[V]!==Pt?(n.bindFramebuffer(V,Pt),f[V]=Pt,V===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Pt),V===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Pt),!0):!1}function at(V,Pt){let St=p,Ut=!1;if(V){St=m.get(Pt),St===void 0&&(St=[],m.set(Pt,St));const xt=V.textures;if(St.length!==xt.length||St[0]!==n.COLOR_ATTACHMENT0){for(let dt=0,bt=xt.length;dt<bt;dt++)St[dt]=n.COLOR_ATTACHMENT0+dt;St.length=xt.length,Ut=!0}}else St[0]!==n.BACK&&(St[0]=n.BACK,Ut=!0);Ut&&n.drawBuffers(St)}function Nt(V){return v!==V?(n.useProgram(V),v=V,!0):!1}const C={[ss]:n.FUNC_ADD,[XM]:n.FUNC_SUBTRACT,[$M]:n.FUNC_REVERSE_SUBTRACT};C[YM]=n.MIN,C[qM]=n.MAX;const P={[KM]:n.ZERO,[jM]:n.ONE,[ZM]:n.SRC_COLOR,[Ul]:n.SRC_ALPHA,[iy]:n.SRC_ALPHA_SATURATE,[ey]:n.DST_COLOR,[QM]:n.DST_ALPHA,[JM]:n.ONE_MINUS_SRC_COLOR,[Nl]:n.ONE_MINUS_SRC_ALPHA,[ny]:n.ONE_MINUS_DST_COLOR,[ty]:n.ONE_MINUS_DST_ALPHA,[sy]:n.CONSTANT_COLOR,[ry]:n.ONE_MINUS_CONSTANT_COLOR,[oy]:n.CONSTANT_ALPHA,[ay]:n.ONE_MINUS_CONSTANT_ALPHA};function O(V,Pt,St,Ut,xt,dt,bt,qt,be,me){if(V===xi){g===!0&&(st(n.BLEND),g=!1);return}if(g===!1&&(U(n.BLEND),g=!0),V!==WM){if(V!==_||me!==S){if((h!==ss||b!==ss)&&(n.blendEquation(n.FUNC_ADD),h=ss,b=ss),me)switch(V){case Hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sd:n.blendFunc(n.ONE,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case yd:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:de("WebGLState: Invalid blending: ",V);break}else switch(V){case Hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sd:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Md:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yd:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",V);break}M=null,A=null,w=null,I=null,D.set(0,0,0),F=0,_=V,S=me}return}xt=xt||Pt,dt=dt||St,bt=bt||Ut,(Pt!==h||xt!==b)&&(n.blendEquationSeparate(C[Pt],C[xt]),h=Pt,b=xt),(St!==M||Ut!==A||dt!==w||bt!==I)&&(n.blendFuncSeparate(P[St],P[Ut],P[dt],P[bt]),M=St,A=Ut,w=dt,I=bt),(qt.equals(D)===!1||be!==F)&&(n.blendColor(qt.r,qt.g,qt.b,be),D.copy(qt),F=be),_=V,S=!1}function Q(V,Pt){V.side===mi?st(n.CULL_FACE):U(n.CULL_FACE);let St=V.side===pn;Pt&&(St=!St),Z(St),V.blending===Hs&&V.transparent===!1?O(xi):O(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const Ut=V.stencilWrite;a.setTest(Ut),Ut&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ht(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(V){T!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),T=V)}function nt(V){V!==zM?(U(n.CULL_FACE),V!==N&&(V===xd?n.cullFace(n.BACK):V===HM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),N=V}function R(V){V!==W&&(z&&n.lineWidth(V),W=V)}function ht(V,Pt,St){V?(U(n.POLYGON_OFFSET_FILL),($!==Pt||H!==St)&&(n.polygonOffset(Pt,St),$=Pt,H=St)):st(n.POLYGON_OFFSET_FILL)}function ct(V){V?U(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function ot(V){V===void 0&&(V=n.TEXTURE0+B-1),_t!==V&&(n.activeTexture(V),_t=V)}function ut(V,Pt,St){St===void 0&&(_t===null?St=n.TEXTURE0+B-1:St=_t);let Ut=gt[St];Ut===void 0&&(Ut={type:void 0,texture:void 0},gt[St]=Ut),(Ut.type!==V||Ut.texture!==Pt)&&(_t!==St&&(n.activeTexture(St),_t=St),n.bindTexture(V,Pt||j[V]),Ut.type=V,Ut.texture=Pt)}function y(){const V=gt[_t];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function x(){try{n.compressedTexImage2D(...arguments)}catch(V){de("WebGLState:",V)}}function L(){try{n.compressedTexImage3D(...arguments)}catch(V){de("WebGLState:",V)}}function K(){try{n.texSubImage2D(...arguments)}catch(V){de("WebGLState:",V)}}function it(){try{n.texSubImage3D(...arguments)}catch(V){de("WebGLState:",V)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(V){de("WebGLState:",V)}}function wt(){try{n.compressedTexSubImage3D(...arguments)}catch(V){de("WebGLState:",V)}}function vt(){try{n.texStorage2D(...arguments)}catch(V){de("WebGLState:",V)}}function It(){try{n.texStorage3D(...arguments)}catch(V){de("WebGLState:",V)}}function kt(){try{n.texImage2D(...arguments)}catch(V){de("WebGLState:",V)}}function pt(){try{n.texImage3D(...arguments)}catch(V){de("WebGLState:",V)}}function Et(V){Wt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Wt.copy(V))}function Tt(V){ae.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ae.copy(V))}function Lt(V,Pt){let St=c.get(Pt);St===void 0&&(St=new WeakMap,c.set(Pt,St));let Ut=St.get(V);Ut===void 0&&(Ut=n.getUniformBlockIndex(Pt,V.name),St.set(V,Ut))}function yt(V,Pt){const Ut=c.get(Pt).get(V);l.get(Pt)!==Ut&&(n.uniformBlockBinding(Pt,Ut,V.__bindingPointIndex),l.set(Pt,Ut))}function Jt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},_t=null,gt={},f={},m=new WeakMap,p=[],v=null,g=!1,_=null,h=null,M=null,A=null,b=null,w=null,I=null,D=new oe(0,0,0),F=0,S=!1,T=null,N=null,W=null,$=null,H=null,Wt.set(0,0,n.canvas.width,n.canvas.height),ae.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:st,bindFramebuffer:lt,drawBuffers:at,useProgram:Nt,setBlending:O,setMaterial:Q,setFlipSided:Z,setCullFace:nt,setLineWidth:R,setPolygonOffset:ht,setScissorTest:ct,activeTexture:ot,bindTexture:ut,unbindTexture:y,compressedTexImage2D:x,compressedTexImage3D:L,texImage2D:kt,texImage3D:pt,updateUBOMapping:Lt,uniformBlockBinding:yt,texStorage2D:vt,texStorage3D:It,texSubImage2D:K,texSubImage3D:it,compressedTexSubImage2D:q,compressedTexSubImage3D:wt,scissor:Et,viewport:Tt,reset:Jt}}function KA(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,u=new WeakMap;let f;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,x){return p?new OffscreenCanvas(y,x):jo("canvas")}function g(y,x,L){let K=1;const it=ut(y);if((it.width>L||it.height>L)&&(K=L/Math.max(it.width,it.height)),K<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const q=Math.floor(K*it.width),wt=Math.floor(K*it.height);f===void 0&&(f=v(q,wt));const vt=x?v(q,wt):f;return vt.width=q,vt.height=wt,vt.getContext("2d").drawImage(y,0,0,q,wt),Yt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+q+"x"+wt+")."),vt}else return"data"in y&&Yt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),y;return y}function _(y){return y.generateMipmaps}function h(y){n.generateMipmap(y)}function M(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(y,x,L,K,it=!1){if(y!==null){if(n[y]!==void 0)return n[y];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let q=x;if(x===n.RED&&(L===n.FLOAT&&(q=n.R32F),L===n.HALF_FLOAT&&(q=n.R16F),L===n.UNSIGNED_BYTE&&(q=n.R8)),x===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.R8UI),L===n.UNSIGNED_SHORT&&(q=n.R16UI),L===n.UNSIGNED_INT&&(q=n.R32UI),L===n.BYTE&&(q=n.R8I),L===n.SHORT&&(q=n.R16I),L===n.INT&&(q=n.R32I)),x===n.RG&&(L===n.FLOAT&&(q=n.RG32F),L===n.HALF_FLOAT&&(q=n.RG16F),L===n.UNSIGNED_BYTE&&(q=n.RG8)),x===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RG8UI),L===n.UNSIGNED_SHORT&&(q=n.RG16UI),L===n.UNSIGNED_INT&&(q=n.RG32UI),L===n.BYTE&&(q=n.RG8I),L===n.SHORT&&(q=n.RG16I),L===n.INT&&(q=n.RG32I)),x===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGB8UI),L===n.UNSIGNED_SHORT&&(q=n.RGB16UI),L===n.UNSIGNED_INT&&(q=n.RGB32UI),L===n.BYTE&&(q=n.RGB8I),L===n.SHORT&&(q=n.RGB16I),L===n.INT&&(q=n.RGB32I)),x===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(q=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(q=n.RGBA16UI),L===n.UNSIGNED_INT&&(q=n.RGBA32UI),L===n.BYTE&&(q=n.RGBA8I),L===n.SHORT&&(q=n.RGBA16I),L===n.INT&&(q=n.RGBA32I)),x===n.RGB&&(L===n.UNSIGNED_INT_5_9_9_9_REV&&(q=n.RGB9_E5),L===n.UNSIGNED_INT_10F_11F_11F_REV&&(q=n.R11F_G11F_B10F)),x===n.RGBA){const wt=it?qo:le.getTransfer(K);L===n.FLOAT&&(q=n.RGBA32F),L===n.HALF_FLOAT&&(q=n.RGBA16F),L===n.UNSIGNED_BYTE&&(q=wt===ge?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(q=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(q=n.RGB5_A1)}return(q===n.R16F||q===n.R32F||q===n.RG16F||q===n.RG32F||q===n.RGBA16F||q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function b(y,x){let L;return y?x===null||x===ti||x===Or?L=n.DEPTH24_STENCIL8:x===Yn?L=n.DEPTH32F_STENCIL8:x===Fr&&(L=n.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ti||x===Or?L=n.DEPTH_COMPONENT24:x===Yn?L=n.DEPTH_COMPONENT32F:x===Fr&&(L=n.DEPTH_COMPONENT16),L}function w(y,x){return _(y)===!0||y.isFramebufferTexture&&y.minFilter!==Ye&&y.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function I(y){const x=y.target;x.removeEventListener("dispose",I),F(x),x.isVideoTexture&&u.delete(x)}function D(y){const x=y.target;x.removeEventListener("dispose",D),T(x)}function F(y){const x=i.get(y);if(x.__webglInit===void 0)return;const L=y.source,K=m.get(L);if(K){const it=K[x.__cacheKey];it.usedTimes--,it.usedTimes===0&&S(y),Object.keys(K).length===0&&m.delete(L)}i.remove(y)}function S(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const L=y.source,K=m.get(L);delete K[x.__cacheKey],o.memory.textures--}function T(y){const x=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let it=0;it<x.__webglFramebuffer[K].length;it++)n.deleteFramebuffer(x.__webglFramebuffer[K][it]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const L=y.textures;for(let K=0,it=L.length;K<it;K++){const q=i.get(L[K]);q.__webglTexture&&(n.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(L[K])}i.remove(y)}let N=0;function W(){N=0}function $(){const y=N;return y>=s.maxTextures&&Yt("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),N+=1,y}function H(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function B(y,x){const L=i.get(y);if(y.isVideoTexture&&ct(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&L.__version!==y.version){const K=y.image;if(K===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{j(L,y,x);return}}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+x)}function z(y,x){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){j(L,y,x);return}else y.isExternalTexture&&(L.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+x)}function k(y,x){const L=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){j(L,y,x);return}e.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+x)}function tt(y,x){const L=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&L.__version!==y.version){U(L,y,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+x)}const _t={[Xl]:n.REPEAT,[_i]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},gt={[Ye]:n.NEAREST,[uy]:n.NEAREST_MIPMAP_NEAREST,[eo]:n.NEAREST_MIPMAP_LINEAR,[tn]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[as]:n.LINEAR_MIPMAP_LINEAR},Mt={[hy]:n.NEVER,[vy]:n.ALWAYS,[py]:n.LESS,[nu]:n.LEQUAL,[my]:n.EQUAL,[iu]:n.GEQUAL,[_y]:n.GREATER,[gy]:n.NOTEQUAL};function Bt(y,x){if(x.type===Yn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===ka||x.magFilter===eo||x.magFilter===as||x.minFilter===tn||x.minFilter===ka||x.minFilter===eo||x.minFilter===as)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,_t[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,_t[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,_t[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,gt[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,gt[x.minFilter]),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Mt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ye||x.minFilter!==eo&&x.minFilter!==as||x.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Wt(y,x){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",I));const K=x.source;let it=m.get(K);it===void 0&&(it={},m.set(K,it));const q=H(x);if(q!==y.__cacheKey){it[q]===void 0&&(it[q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),it[q].usedTimes++;const wt=it[y.__cacheKey];wt!==void 0&&(it[y.__cacheKey].usedTimes--,wt.usedTimes===0&&S(x)),y.__cacheKey=q,y.__webglTexture=it[q].texture}return L}function ae(y,x,L){return Math.floor(Math.floor(y/L)/x)}function ne(y,x,L,K){const q=y.updateRanges;if(q.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,L,K,x.data);else{q.sort((pt,Et)=>pt.start-Et.start);let wt=0;for(let pt=1;pt<q.length;pt++){const Et=q[wt],Tt=q[pt],Lt=Et.start+Et.count,yt=ae(Tt.start,x.width,4),Jt=ae(Et.start,x.width,4);Tt.start<=Lt+1&&yt===Jt&&ae(Tt.start+Tt.count-1,x.width,4)===yt?Et.count=Math.max(Et.count,Tt.start+Tt.count-Et.start):(++wt,q[wt]=Tt)}q.length=wt+1;const vt=n.getParameter(n.UNPACK_ROW_LENGTH),It=n.getParameter(n.UNPACK_SKIP_PIXELS),kt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let pt=0,Et=q.length;pt<Et;pt++){const Tt=q[pt],Lt=Math.floor(Tt.start/4),yt=Math.ceil(Tt.count/4),Jt=Lt%x.width,V=Math.floor(Lt/x.width),Pt=yt,St=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Jt),n.pixelStorei(n.UNPACK_SKIP_ROWS,V),e.texSubImage2D(n.TEXTURE_2D,0,Jt,V,Pt,St,L,K,x.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,vt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,It),n.pixelStorei(n.UNPACK_SKIP_ROWS,kt)}}function j(y,x,L){let K=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=n.TEXTURE_3D);const it=Wt(y,x),q=x.source;e.bindTexture(K,y.__webglTexture,n.TEXTURE0+L);const wt=i.get(q);if(q.version!==wt.__version||it===!0){e.activeTexture(n.TEXTURE0+L);const vt=le.getPrimaries(le.workingColorSpace),It=x.colorSpace===Gi?null:le.getPrimaries(x.colorSpace),kt=x.colorSpace===Gi||vt===It?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let pt=g(x.image,!1,s.maxTextureSize);pt=ot(x,pt);const Et=r.convert(x.format,x.colorSpace),Tt=r.convert(x.type);let Lt=A(x.internalFormat,Et,Tt,x.colorSpace,x.isVideoTexture);Bt(K,x);let yt;const Jt=x.mipmaps,V=x.isVideoTexture!==!0,Pt=wt.__version===void 0||it===!0,St=q.dataReady,Ut=w(x,pt);if(x.isDepthTexture)Lt=b(x.format===ls,x.type),Pt&&(V?e.texStorage2D(n.TEXTURE_2D,1,Lt,pt.width,pt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Et,Tt,null));else if(x.isDataTexture)if(Jt.length>0){V&&Pt&&e.texStorage2D(n.TEXTURE_2D,Ut,Lt,Jt[0].width,Jt[0].height);for(let xt=0,dt=Jt.length;xt<dt;xt++)yt=Jt[xt],V?St&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,yt.width,yt.height,Et,Tt,yt.data):e.texImage2D(n.TEXTURE_2D,xt,Lt,yt.width,yt.height,0,Et,Tt,yt.data);x.generateMipmaps=!1}else V?(Pt&&e.texStorage2D(n.TEXTURE_2D,Ut,Lt,pt.width,pt.height),St&&ne(x,pt,Et,Tt)):e.texImage2D(n.TEXTURE_2D,0,Lt,pt.width,pt.height,0,Et,Tt,pt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){V&&Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,Lt,Jt[0].width,Jt[0].height,pt.depth);for(let xt=0,dt=Jt.length;xt<dt;xt++)if(yt=Jt[xt],x.format!==Nn)if(Et!==null)if(V){if(St)if(x.layerUpdates.size>0){const bt=Qd(yt.width,yt.height,x.format,x.type);for(const qt of x.layerUpdates){const be=yt.data.subarray(qt*bt/yt.data.BYTES_PER_ELEMENT,(qt+1)*bt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,qt,yt.width,yt.height,1,Et,be)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,yt.width,yt.height,pt.depth,Et,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xt,Lt,yt.width,yt.height,pt.depth,0,yt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?St&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,yt.width,yt.height,pt.depth,Et,Tt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,xt,Lt,yt.width,yt.height,pt.depth,0,Et,Tt,yt.data)}else{V&&Pt&&e.texStorage2D(n.TEXTURE_2D,Ut,Lt,Jt[0].width,Jt[0].height);for(let xt=0,dt=Jt.length;xt<dt;xt++)yt=Jt[xt],x.format!==Nn?Et!==null?V?St&&e.compressedTexSubImage2D(n.TEXTURE_2D,xt,0,0,yt.width,yt.height,Et,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,xt,Lt,yt.width,yt.height,0,yt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?St&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,yt.width,yt.height,Et,Tt,yt.data):e.texImage2D(n.TEXTURE_2D,xt,Lt,yt.width,yt.height,0,Et,Tt,yt.data)}else if(x.isDataArrayTexture)if(V){if(Pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ut,Lt,pt.width,pt.height,pt.depth),St)if(x.layerUpdates.size>0){const xt=Qd(pt.width,pt.height,x.format,x.type);for(const dt of x.layerUpdates){const bt=pt.data.subarray(dt*xt/pt.data.BYTES_PER_ELEMENT,(dt+1)*xt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,dt,pt.width,pt.height,1,Et,Tt,bt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Et,Tt,pt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,pt.width,pt.height,pt.depth,0,Et,Tt,pt.data);else if(x.isData3DTexture)V?(Pt&&e.texStorage3D(n.TEXTURE_3D,Ut,Lt,pt.width,pt.height,pt.depth),St&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Et,Tt,pt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,pt.width,pt.height,pt.depth,0,Et,Tt,pt.data);else if(x.isFramebufferTexture){if(Pt)if(V)e.texStorage2D(n.TEXTURE_2D,Ut,Lt,pt.width,pt.height);else{let xt=pt.width,dt=pt.height;for(let bt=0;bt<Ut;bt++)e.texImage2D(n.TEXTURE_2D,bt,Lt,xt,dt,0,Et,Tt,null),xt>>=1,dt>>=1}}else if(Jt.length>0){if(V&&Pt){const xt=ut(Jt[0]);e.texStorage2D(n.TEXTURE_2D,Ut,Lt,xt.width,xt.height)}for(let xt=0,dt=Jt.length;xt<dt;xt++)yt=Jt[xt],V?St&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,Et,Tt,yt):e.texImage2D(n.TEXTURE_2D,xt,Lt,Et,Tt,yt);x.generateMipmaps=!1}else if(V){if(Pt){const xt=ut(pt);e.texStorage2D(n.TEXTURE_2D,Ut,Lt,xt.width,xt.height)}St&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et,Tt,pt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,Et,Tt,pt);_(x)&&h(K),wt.__version=q.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function U(y,x,L){if(x.image.length!==6)return;const K=Wt(y,x),it=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const q=i.get(it);if(it.version!==q.__version||K===!0){e.activeTexture(n.TEXTURE0+L);const wt=le.getPrimaries(le.workingColorSpace),vt=x.colorSpace===Gi?null:le.getPrimaries(x.colorSpace),It=x.colorSpace===Gi||wt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const kt=x.isCompressedTexture||x.image[0].isCompressedTexture,pt=x.image[0]&&x.image[0].isDataTexture,Et=[];for(let dt=0;dt<6;dt++)!kt&&!pt?Et[dt]=g(x.image[dt],!0,s.maxCubemapSize):Et[dt]=pt?x.image[dt].image:x.image[dt],Et[dt]=ot(x,Et[dt]);const Tt=Et[0],Lt=r.convert(x.format,x.colorSpace),yt=r.convert(x.type),Jt=A(x.internalFormat,Lt,yt,x.colorSpace),V=x.isVideoTexture!==!0,Pt=q.__version===void 0||K===!0,St=it.dataReady;let Ut=w(x,Tt);Bt(n.TEXTURE_CUBE_MAP,x);let xt;if(kt){V&&Pt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,Jt,Tt.width,Tt.height);for(let dt=0;dt<6;dt++){xt=Et[dt].mipmaps;for(let bt=0;bt<xt.length;bt++){const qt=xt[bt];x.format!==Nn?Lt!==null?V?St&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,qt.width,qt.height,Lt,qt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Jt,qt.width,qt.height,0,qt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,qt.width,qt.height,Lt,yt,qt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Jt,qt.width,qt.height,0,Lt,yt,qt.data)}}}else{if(xt=x.mipmaps,V&&Pt){xt.length>0&&Ut++;const dt=ut(Et[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,Jt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(pt){V?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Et[dt].width,Et[dt].height,Lt,yt,Et[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Jt,Et[dt].width,Et[dt].height,0,Lt,yt,Et[dt].data);for(let bt=0;bt<xt.length;bt++){const be=xt[bt].image[dt].image;V?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,be.width,be.height,Lt,yt,be.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Jt,be.width,be.height,0,Lt,yt,be.data)}}else{V?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Lt,yt,Et[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Jt,Lt,yt,Et[dt]);for(let bt=0;bt<xt.length;bt++){const qt=xt[bt];V?St&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,Lt,yt,qt.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Jt,Lt,yt,qt.image[dt])}}}_(x)&&h(n.TEXTURE_CUBE_MAP),q.__version=it.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function st(y,x,L,K,it,q){const wt=r.convert(L.format,L.colorSpace),vt=r.convert(L.type),It=A(L.internalFormat,wt,vt,L.colorSpace),kt=i.get(x),pt=i.get(L);if(pt.__renderTarget=x,!kt.__hasExternalTextures){const Et=Math.max(1,x.width>>q),Tt=Math.max(1,x.height>>q);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,q,It,Et,Tt,x.depth,0,wt,vt,null):e.texImage2D(it,q,It,Et,Tt,0,wt,vt,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),ht(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,it,pt.__webglTexture,0,R(x)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,it,pt.__webglTexture,q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(y,x,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer){const K=x.depthTexture,it=K&&K.isDepthTexture?K.type:null,q=b(x.stencilBuffer,it),wt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ht(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(x),q,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(x),q,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,q,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,y)}else{const K=x.textures;for(let it=0;it<K.length;it++){const q=K[it],wt=r.convert(q.format,q.colorSpace),vt=r.convert(q.type),It=A(q.internalFormat,wt,vt,q.colorSpace);ht(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(x),It,x.width,x.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(x),It,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,It,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(y,x,L){const K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=i.get(x.depthTexture);if(it.__renderTarget=x,(!it.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(it.__webglInit===void 0&&(it.__webglInit=!0,x.depthTexture.addEventListener("dispose",I)),it.__webglTexture===void 0){it.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,x.depthTexture);const kt=r.convert(x.depthTexture.format),pt=r.convert(x.depthTexture.type);let Et;x.depthTexture.format===Ai?Et=n.DEPTH_COMPONENT24:x.depthTexture.format===ls&&(Et=n.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,Et,x.width,x.height,0,kt,pt,null)}}else B(x.depthTexture,0);const q=it.__webglTexture,wt=R(x),vt=K?n.TEXTURE_CUBE_MAP_POSITIVE_X+L:n.TEXTURE_2D,It=x.depthTexture.format===ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ai)ht(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,It,vt,q,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,It,vt,q,0);else if(x.depthTexture.format===ls)ht(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,It,vt,q,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,It,vt,q,0);else throw new Error("Unknown depthTexture format")}function Nt(y){const x=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const K=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const it=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",it)};K.addEventListener("dispose",it),x.__depthDisposeCallback=it}x.__boundDepthTexture=K}if(y.depthTexture&&!x.__autoAllocateDepthBuffer)if(L)for(let K=0;K<6;K++)at(x.__webglFramebuffer[K],y,K);else{const K=y.texture.mipmaps;K&&K.length>0?at(x.__webglFramebuffer[0],y,0):at(x.__webglFramebuffer,y,0)}else if(L){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=n.createRenderbuffer(),lt(x.__webglDepthbuffer[K],y,!1);else{const it=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,q)}}else{const K=y.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),lt(x.__webglDepthbuffer,y,!1);else{const it=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,q),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,q)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function C(y,x,L){const K=i.get(y);x!==void 0&&st(K.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&Nt(y)}function P(y){const x=y.texture,L=i.get(y),K=i.get(x);y.addEventListener("dispose",D);const it=y.textures,q=y.isWebGLCubeRenderTarget===!0,wt=it.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=x.version,o.memory.textures++),q){L.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer[vt]=[];for(let It=0;It<x.mipmaps.length;It++)L.__webglFramebuffer[vt][It]=n.createFramebuffer()}else L.__webglFramebuffer[vt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){L.__webglFramebuffer=[];for(let vt=0;vt<x.mipmaps.length;vt++)L.__webglFramebuffer[vt]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(wt)for(let vt=0,It=it.length;vt<It;vt++){const kt=i.get(it[vt]);kt.__webglTexture===void 0&&(kt.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&ht(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let vt=0;vt<it.length;vt++){const It=it[vt];L.__webglColorRenderbuffer[vt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[vt]);const kt=r.convert(It.format,It.colorSpace),pt=r.convert(It.type),Et=A(It.internalFormat,kt,pt,It.colorSpace,y.isXRRenderTarget===!0),Tt=R(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,Et,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,L.__webglColorRenderbuffer[vt])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),lt(L.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(q){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,x);for(let vt=0;vt<6;vt++)if(x.mipmaps&&x.mipmaps.length>0)for(let It=0;It<x.mipmaps.length;It++)st(L.__webglFramebuffer[vt][It],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,It);else st(L.__webglFramebuffer[vt],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);_(x)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let vt=0,It=it.length;vt<It;vt++){const kt=it[vt],pt=i.get(kt);let Et=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Et=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Et,pt.__webglTexture),Bt(Et,kt),st(L.__webglFramebuffer,y,kt,n.COLOR_ATTACHMENT0+vt,Et,0),_(kt)&&h(Et)}e.unbindTexture()}else{let vt=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(vt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,K.__webglTexture),Bt(vt,x),x.mipmaps&&x.mipmaps.length>0)for(let It=0;It<x.mipmaps.length;It++)st(L.__webglFramebuffer[It],y,x,n.COLOR_ATTACHMENT0,vt,It);else st(L.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,vt,0);_(x)&&h(vt),e.unbindTexture()}y.depthBuffer&&Nt(y)}function O(y){const x=y.textures;for(let L=0,K=x.length;L<K;L++){const it=x[L];if(_(it)){const q=M(y),wt=i.get(it).__webglTexture;e.bindTexture(q,wt),h(q),e.unbindTexture()}}}const Q=[],Z=[];function nt(y){if(y.samples>0){if(ht(y)===!1){const x=y.textures,L=y.width,K=y.height;let it=n.COLOR_BUFFER_BIT;const q=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(y),vt=x.length>1;if(vt)for(let kt=0;kt<x.length;kt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const It=y.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let kt=0;kt<x.length;kt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),vt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[kt]);const pt=i.get(x[kt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,pt,0)}n.blitFramebuffer(0,0,L,K,0,0,L,K,it,n.NEAREST),l===!0&&(Q.length=0,Z.length=0,Q.push(n.COLOR_ATTACHMENT0+kt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Q.push(q),Z.push(q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),vt)for(let kt=0;kt<x.length;kt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[kt]);const pt=i.get(x[kt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+kt,n.TEXTURE_2D,pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function R(y){return Math.min(s.maxSamples,y.samples)}function ht(y){const x=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(y){const x=o.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function ot(y,x){const L=y.colorSpace,K=y.format,it=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==Js&&L!==Gi&&(le.getTransfer(L)===ge?(K!==Nn||it!==Mn)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",L)),x}function ut(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=W,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=tt,this.rebindTextures=C,this.setupRenderTarget=P,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function jA(n,t){function e(i,s=Gi){let r;const o=le.getTransfer(s);if(i===Mn)return n.UNSIGNED_BYTE;if(i===Zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===fp)return n.BYTE;if(i===hp)return n.SHORT;if(i===Fr)return n.UNSIGNED_SHORT;if(i===jc)return n.INT;if(i===ti)return n.UNSIGNED_INT;if(i===Yn)return n.FLOAT;if(i===Ti)return n.HALF_FLOAT;if(i===_p)return n.ALPHA;if(i===gp)return n.RGB;if(i===Nn)return n.RGBA;if(i===Ai)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===vp)return n.RED;if(i===Qc)return n.RED_INTEGER;if(i===Zs)return n.RG;if(i===tu)return n.RG_INTEGER;if(i===eu)return n.RGBA_INTEGER;if(i===Io||i===Lo||i===Uo||i===No)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yl||i===ql||i===Kl||i===jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zl||i===Jl||i===Ql||i===tc||i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Zl||i===Jl)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ql)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===tc)return r.COMPRESSED_R11_EAC;if(i===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(i===nc)return r.COMPRESSED_RG11_EAC;if(i===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===dc||i===fc||i===hc||i===pc||i===mc||i===_c||i===gc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_c)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vc||i===xc||i===Sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===vc)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mc||i===yc||i===Ec||i===bc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ec)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JA=`
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

}`;class QA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Ip(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ni({vertexShader:ZA,fragmentShader:JA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Cn(new Kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tR extends ps{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,m=null,p=null,v=null;const g=typeof XRWebGLBinding<"u",_=new QA,h={},M=e.getContextAttributes();let A=null,b=null;const w=[],I=[],D=new jt;let F=null;const S=new wn;S.viewport=new Ie;const T=new wn;T.viewport=new Ie;const N=[S,T],W=new aE;let $=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let U=w[j];return U===void 0&&(U=new al,w[j]=U),U.getTargetRaySpace()},this.getControllerGrip=function(j){let U=w[j];return U===void 0&&(U=new al,w[j]=U),U.getGripSpace()},this.getHand=function(j){let U=w[j];return U===void 0&&(U=new al,w[j]=U),U.getHandSpace()};function B(j){const U=I.indexOf(j.inputSource);if(U===-1)return;const st=w[U];st!==void 0&&(st.update(j.inputSource,j.frame,c||o),st.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",k);for(let j=0;j<w.length;j++){const U=I[j];U!==null&&(I[j]=null,w[j].disconnect(U))}$=null,H=null,_.reset();for(const j in h)delete h[j];t.setRenderTarget(A),p=null,m=null,f=null,s=null,b=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",z),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(D),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,lt=null,at=null;M.depth&&(at=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=M.stencil?ls:Ai,lt=M.stencil?Or:ti);const Nt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};f=this.getBinding(),m=f.createProjectionLayer(Nt),s.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),b=new Zn(m.textureWidth,m.textureHeight,{format:Nn,type:Mn,depthTexture:new kr(m.textureWidth,m.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const st={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(j){for(let U=0;U<j.removed.length;U++){const st=j.removed[U],lt=I.indexOf(st);lt>=0&&(I[lt]=null,w[lt].disconnect(st))}for(let U=0;U<j.added.length;U++){const st=j.added[U];let lt=I.indexOf(st);if(lt===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=I.length){I.push(st),lt=Nt;break}else if(I[Nt]===null){I[Nt]=st,lt=Nt;break}if(lt===-1)break}const at=w[lt];at&&at.connect(st)}}const tt=new X,_t=new X;function gt(j,U,st){tt.setFromMatrixPosition(U.matrixWorld),_t.setFromMatrixPosition(st.matrixWorld);const lt=tt.distanceTo(_t),at=U.projectionMatrix.elements,Nt=st.projectionMatrix.elements,C=at[14]/(at[10]-1),P=at[14]/(at[10]+1),O=(at[9]+1)/at[5],Q=(at[9]-1)/at[5],Z=(at[8]-1)/at[0],nt=(Nt[8]+1)/Nt[0],R=C*Z,ht=C*nt,ct=lt/(-Z+nt),ot=ct*-Z;if(U.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ot),j.translateZ(ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),at[10]===-1)j.projectionMatrix.copy(U.projectionMatrix),j.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const ut=C+ct,y=P+ct,x=R-ot,L=ht+(lt-ot),K=O*P/y*ut,it=Q*P/y*ut;j.projectionMatrix.makePerspective(x,L,K,it,ut,y),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function Mt(j,U){U===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(U.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let U=j.near,st=j.far;_.texture!==null&&(_.depthNear>0&&(U=_.depthNear),_.depthFar>0&&(st=_.depthFar)),W.near=T.near=S.near=U,W.far=T.far=S.far=st,($!==W.near||H!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),$=W.near,H=W.far),W.layers.mask=j.layers.mask|6,S.layers.mask=W.layers.mask&3,T.layers.mask=W.layers.mask&5;const lt=j.parent,at=W.cameras;Mt(W,lt);for(let Nt=0;Nt<at.length;Nt++)Mt(at[Nt],lt);at.length===2?gt(W,S,T):W.projectionMatrix.copy(S.projectionMatrix),Bt(j,W,lt)};function Bt(j,U,st){st===null?j.matrix.copy(U.matrixWorld):(j.matrix.copy(st.matrixWorld),j.matrix.invert(),j.matrix.multiply(U.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(U.projectionMatrix),j.projectionMatrixInverse.copy(U.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Tc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(m===null&&p===null))return l},this.setFoveation=function(j){l=j,m!==null&&(m.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(W)},this.getCameraTexture=function(j){return h[j]};let Wt=null;function ae(j,U){if(u=U.getViewerPose(c||o),v=U,u!==null){const st=u.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let lt=!1;st.length!==W.cameras.length&&(W.cameras.length=0,lt=!0);for(let P=0;P<st.length;P++){const O=st[P];let Q=null;if(p!==null)Q=p.getViewport(O);else{const nt=f.getViewSubImage(m,O);Q=nt.viewport,P===0&&(t.setRenderTargetTextures(b,nt.colorTexture,nt.depthStencilTexture),t.setRenderTarget(b))}let Z=N[P];Z===void 0&&(Z=new wn,Z.layers.enable(P),Z.viewport=new Ie,N[P]=Z),Z.matrix.fromArray(O.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(O.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Q.x,Q.y,Q.width,Q.height),P===0&&(W.matrix.copy(Z.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),lt===!0&&W.cameras.push(Z)}const at=s.enabledFeatures;if(at&&at.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){f=i.getBinding();const P=f.getDepthInformation(st[0]);P&&P.isValid&&P.texture&&_.init(P,s.renderState)}if(at&&at.includes("camera-access")&&g){t.state.unbindTexture(),f=i.getBinding();for(let P=0;P<st.length;P++){const O=st[P].camera;if(O){let Q=h[O];Q||(Q=new Ip,h[O]=Q);const Z=f.getCameraImage(O);Q.sourceTexture=Z}}}}for(let st=0;st<w.length;st++){const lt=I[st],at=w[st];lt!==null&&at!==void 0&&at.update(lt,U,c||o)}Wt&&Wt(j,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),v=null}const ne=new Lp;ne.setAnimationLoop(ae),this.setAnimationLoop=function(j){Wt=j},this.dispose=function(){}}}const ns=new ei,eR=new we;function nR(n,t){function e(_,h){_.matrixAutoUpdate===!0&&_.updateMatrix(),h.value.copy(_.matrix)}function i(_,h){h.color.getRGB(_.fogColor.value,Rp(n)),h.isFog?(_.fogNear.value=h.near,_.fogFar.value=h.far):h.isFogExp2&&(_.fogDensity.value=h.density)}function s(_,h,M,A,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(_,h):h.isMeshToonMaterial?(r(_,h),f(_,h)):h.isMeshPhongMaterial?(r(_,h),u(_,h)):h.isMeshStandardMaterial?(r(_,h),m(_,h),h.isMeshPhysicalMaterial&&p(_,h,b)):h.isMeshMatcapMaterial?(r(_,h),v(_,h)):h.isMeshDepthMaterial?r(_,h):h.isMeshDistanceMaterial?(r(_,h),g(_,h)):h.isMeshNormalMaterial?r(_,h):h.isLineBasicMaterial?(o(_,h),h.isLineDashedMaterial&&a(_,h)):h.isPointsMaterial?l(_,h,M,A):h.isSpriteMaterial?c(_,h):h.isShadowMaterial?(_.color.value.copy(h.color),_.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(_,h){_.opacity.value=h.opacity,h.color&&_.diffuse.value.copy(h.color),h.emissive&&_.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(_.map.value=h.map,e(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,e(h.alphaMap,_.alphaMapTransform)),h.bumpMap&&(_.bumpMap.value=h.bumpMap,e(h.bumpMap,_.bumpMapTransform),_.bumpScale.value=h.bumpScale,h.side===pn&&(_.bumpScale.value*=-1)),h.normalMap&&(_.normalMap.value=h.normalMap,e(h.normalMap,_.normalMapTransform),_.normalScale.value.copy(h.normalScale),h.side===pn&&_.normalScale.value.negate()),h.displacementMap&&(_.displacementMap.value=h.displacementMap,e(h.displacementMap,_.displacementMapTransform),_.displacementScale.value=h.displacementScale,_.displacementBias.value=h.displacementBias),h.emissiveMap&&(_.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,_.emissiveMapTransform)),h.specularMap&&(_.specularMap.value=h.specularMap,e(h.specularMap,_.specularMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest);const M=t.get(h),A=M.envMap,b=M.envMapRotation;A&&(_.envMap.value=A,ns.copy(b),ns.x*=-1,ns.y*=-1,ns.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),_.envMapRotation.value.setFromMatrix4(eR.makeRotationFromEuler(ns)),_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=h.reflectivity,_.ior.value=h.ior,_.refractionRatio.value=h.refractionRatio),h.lightMap&&(_.lightMap.value=h.lightMap,_.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,_.lightMapTransform)),h.aoMap&&(_.aoMap.value=h.aoMap,_.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,_.aoMapTransform))}function o(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,h.map&&(_.map.value=h.map,e(h.map,_.mapTransform))}function a(_,h){_.dashSize.value=h.dashSize,_.totalSize.value=h.dashSize+h.gapSize,_.scale.value=h.scale}function l(_,h,M,A){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.size.value=h.size*M,_.scale.value=A*.5,h.map&&(_.map.value=h.map,e(h.map,_.uvTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,e(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function c(_,h){_.diffuse.value.copy(h.color),_.opacity.value=h.opacity,_.rotation.value=h.rotation,h.map&&(_.map.value=h.map,e(h.map,_.mapTransform)),h.alphaMap&&(_.alphaMap.value=h.alphaMap,e(h.alphaMap,_.alphaMapTransform)),h.alphaTest>0&&(_.alphaTest.value=h.alphaTest)}function u(_,h){_.specular.value.copy(h.specular),_.shininess.value=Math.max(h.shininess,1e-4)}function f(_,h){h.gradientMap&&(_.gradientMap.value=h.gradientMap)}function m(_,h){_.metalness.value=h.metalness,h.metalnessMap&&(_.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,_.metalnessMapTransform)),_.roughness.value=h.roughness,h.roughnessMap&&(_.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,_.roughnessMapTransform)),h.envMap&&(_.envMapIntensity.value=h.envMapIntensity)}function p(_,h,M){_.ior.value=h.ior,h.sheen>0&&(_.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),_.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(_.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,_.sheenColorMapTransform)),h.sheenRoughnessMap&&(_.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,_.sheenRoughnessMapTransform))),h.clearcoat>0&&(_.clearcoat.value=h.clearcoat,_.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(_.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,_.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(_.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===pn&&_.clearcoatNormalScale.value.negate())),h.dispersion>0&&(_.dispersion.value=h.dispersion),h.iridescence>0&&(_.iridescence.value=h.iridescence,_.iridescenceIOR.value=h.iridescenceIOR,_.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(_.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,_.iridescenceMapTransform)),h.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),h.transmission>0&&(_.transmission.value=h.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(_.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,_.transmissionMapTransform)),_.thickness.value=h.thickness,h.thicknessMap&&(_.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=h.attenuationDistance,_.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(_.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(_.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=h.specularIntensity,_.specularColor.value.copy(h.specularColor),h.specularColorMap&&(_.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,_.specularColorMapTransform)),h.specularIntensityMap&&(_.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,h){h.matcap&&(_.matcap.value=h.matcap)}function g(_,h){const M=t.get(h).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iR(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,A){const b=A.program;i.uniformBlockBinding(M,b)}function c(M,A){let b=s[M.id];b===void 0&&(v(M),b=u(M),s[M.id]=b,M.addEventListener("dispose",_));const w=A.program;i.updateUBOMapping(M,w);const I=t.render.frame;r[M.id]!==I&&(m(M),r[M.id]=I)}function u(M){const A=f();M.__bindingPointIndex=A;const b=n.createBuffer(),w=M.__size,I=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,w,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,b),b}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const A=s[M.id],b=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let I=0,D=b.length;I<D;I++){const F=Array.isArray(b[I])?b[I]:[b[I]];for(let S=0,T=F.length;S<T;S++){const N=F[S];if(p(N,I,S,w)===!0){const W=N.__offset,$=Array.isArray(N.value)?N.value:[N.value];let H=0;for(let B=0;B<$.length;B++){const z=$[B],k=g(z);typeof z=="number"||typeof z=="boolean"?(N.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,W+H,N.__data)):z.isMatrix3?(N.__data[0]=z.elements[0],N.__data[1]=z.elements[1],N.__data[2]=z.elements[2],N.__data[3]=0,N.__data[4]=z.elements[3],N.__data[5]=z.elements[4],N.__data[6]=z.elements[5],N.__data[7]=0,N.__data[8]=z.elements[6],N.__data[9]=z.elements[7],N.__data[10]=z.elements[8],N.__data[11]=0):(z.toArray(N.__data,H),H+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,A,b,w){const I=M.value,D=A+"_"+b;if(w[D]===void 0)return typeof I=="number"||typeof I=="boolean"?w[D]=I:w[D]=I.clone(),!0;{const F=w[D];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return w[D]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function v(M){const A=M.uniforms;let b=0;const w=16;for(let D=0,F=A.length;D<F;D++){const S=Array.isArray(A[D])?A[D]:[A[D]];for(let T=0,N=S.length;T<N;T++){const W=S[T],$=Array.isArray(W.value)?W.value:[W.value];for(let H=0,B=$.length;H<B;H++){const z=$[H],k=g(z),tt=b%w,_t=tt%k.boundary,gt=tt+_t;b+=_t,gt!==0&&w-gt<k.storage&&(b+=w-gt),W.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=k.storage}}}const I=b%w;return I>0&&(b+=w-I),M.__size=b,M.__cache={},this}function g(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Yt("WebGLRenderer: Unsupported uniform value type.",M),A}function _(M){const A=M.target;A.removeEventListener("dispose",_);const b=o.indexOf(A.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function h(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}const sR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function rR(){return Gn===null&&(Gn=new Yy(sR,16,16,Zs,Ti),Gn.name="DFG_LUT",Gn.minFilter=tn,Gn.magFilter=tn,Gn.wrapS=_i,Gn.wrapT=_i,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class oR{constructor(t={}){const{canvas:e=xy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:p=Mn}=t;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=o;const g=p,_=new Set([eu,tu,Qc]),h=new Set([Mn,ti,Fr,Or,Zc,Jc]),M=new Uint32Array(4),A=new Int32Array(4);let b=null,w=null;const I=[],D=[];let F=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let T=!1;this._outputColorSpace=Rn;let N=0,W=0,$=null,H=-1,B=null;const z=new Ie,k=new Ie;let tt=null;const _t=new oe(0);let gt=0,Mt=e.width,Bt=e.height,Wt=1,ae=null,ne=null;const j=new Ie(0,0,Mt,Bt),U=new Ie(0,0,Mt,Bt);let st=!1;const lt=new ou;let at=!1,Nt=!1;const C=new we,P=new X,O=new Ie,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Z=!1;function nt(){return $===null?Wt:1}let R=i;function ht(E,G){return e.getContext(E,G)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",me,!1),R===null){const G="webgl2";if(R=ht(G,E),R===null)throw ht(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw de("WebGLRenderer: "+E.message),E}let ct,ot,ut,y,x,L,K,it,q,wt,vt,It,kt,pt,Et,Tt,Lt,yt,Jt,V,Pt,St,Ut,xt;function dt(){ct=new rT(R),ct.init(),St=new jA(R,ct),ot=new j1(R,ct,t,St),ut=new qA(R,ct),ot.reversedDepthBuffer&&m&&ut.buffers.depth.setReversed(!0),y=new lT(R),x=new LA,L=new KA(R,ct,ut,x,ot,St,y),K=new J1(S),it=new sT(S),q=new fE(R),Ut=new q1(R,q),wt=new oT(R,q,y,Ut),vt=new uT(R,wt,q,y),Jt=new cT(R,ot,L),Tt=new Z1(x),It=new IA(S,K,it,ct,ot,Ut,Tt),kt=new nR(S,x),pt=new NA,Et=new zA(ct),yt=new Y1(S,K,it,ut,vt,v,l),Lt=new $A(S,vt,ot),xt=new iR(R,y,ot,ut),V=new K1(R,ct,y),Pt=new aT(R,ct,y),y.programs=It.programs,S.capabilities=ot,S.extensions=ct,S.properties=x,S.renderLists=pt,S.shadowMap=Lt,S.state=ut,S.info=y}dt(),g!==Mn&&(F=new fT(g,e.width,e.height,s,r));const bt=new tR(S,R);this.xr=bt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Wt},this.setPixelRatio=function(E){E!==void 0&&(Wt=E,this.setSize(Mt,Bt,!1))},this.getSize=function(E){return E.set(Mt,Bt)},this.setSize=function(E,G,et=!0){if(bt.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Mt=E,Bt=G,e.width=Math.floor(E*Wt),e.height=Math.floor(G*Wt),et===!0&&(e.style.width=E+"px",e.style.height=G+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(Mt*Wt,Bt*Wt).floor()},this.setDrawingBufferSize=function(E,G,et){Mt=E,Bt=G,Wt=et,e.width=Math.floor(E*et),e.height=Math.floor(G*et),this.setViewport(0,0,E,G)},this.setEffects=function(E){if(g===Mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let G=0;G<E.length;G++)if(E[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(z)},this.getViewport=function(E){return E.copy(j)},this.setViewport=function(E,G,et,J){E.isVector4?j.set(E.x,E.y,E.z,E.w):j.set(E,G,et,J),ut.viewport(z.copy(j).multiplyScalar(Wt).round())},this.getScissor=function(E){return E.copy(U)},this.setScissor=function(E,G,et,J){E.isVector4?U.set(E.x,E.y,E.z,E.w):U.set(E,G,et,J),ut.scissor(k.copy(U).multiplyScalar(Wt).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(E){ut.setScissorTest(st=E)},this.setOpaqueSort=function(E){ae=E},this.setTransparentSort=function(E){ne=E},this.getClearColor=function(E){return E.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,et=!0){let J=0;if(E){let Y=!1;if($!==null){const At=$.texture.format;Y=_.has(At)}if(Y){const At=$.texture.type,Ft=h.has(At),Ct=yt.getClearColor(),Ot=yt.getClearAlpha(),Vt=Ct.r,$t=Ct.g,Ht=Ct.b;Ft?(M[0]=Vt,M[1]=$t,M[2]=Ht,M[3]=Ot,R.clearBufferuiv(R.COLOR,0,M)):(A[0]=Vt,A[1]=$t,A[2]=Ht,A[3]=Ot,R.clearBufferiv(R.COLOR,0,A))}else J|=R.COLOR_BUFFER_BIT}G&&(J|=R.DEPTH_BUFFER_BIT),et&&(J|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",me,!1),yt.dispose(),pt.dispose(),Et.dispose(),x.dispose(),K.dispose(),it.dispose(),vt.dispose(),Ut.dispose(),xt.dispose(),It.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",pu),bt.removeEventListener("sessionend",mu),Yi.stop()};function qt(E){E.preventDefault(),Rd("WebGLRenderer: Context Lost."),T=!0}function be(){Rd("WebGLRenderer: Context Restored."),T=!1;const E=y.autoReset,G=Lt.enabled,et=Lt.autoUpdate,J=Lt.needsUpdate,Y=Lt.type;dt(),y.autoReset=E,Lt.enabled=G,Lt.autoUpdate=et,Lt.needsUpdate=J,Lt.type=Y}function me(E){de("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zn(E){const G=E.target;G.removeEventListener("dispose",zn),ii(G)}function ii(E){Vp(E),x.remove(E)}function Vp(E){const G=x.get(E).programs;G!==void 0&&(G.forEach(function(et){It.releaseProgram(et)}),E.isShaderMaterial&&It.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,et,J,Y,At){G===null&&(G=Q);const Ft=Y.isMesh&&Y.matrixWorld.determinant()<0,Ct=Hp(E,G,et,J,Y);ut.setMaterial(J,Ft);let Ot=et.index,Vt=1;if(J.wireframe===!0){if(Ot=wt.getWireframeAttribute(et),Ot===void 0)return;Vt=2}const $t=et.drawRange,Ht=et.attributes.position;let se=$t.start*Vt,ve=($t.start+$t.count)*Vt;At!==null&&(se=Math.max(se,At.start*Vt),ve=Math.min(ve,(At.start+At.count)*Vt)),Ot!==null?(se=Math.max(se,0),ve=Math.min(ve,Ot.count)):Ht!=null&&(se=Math.max(se,0),ve=Math.min(ve,Ht.count));const Ce=ve-se;if(Ce<0||Ce===1/0)return;Ut.setup(Y,J,Ct,et,Ot);let Pe,Me=V;if(Ot!==null&&(Pe=q.get(Ot),Me=Pt,Me.setIndex(Pe)),Y.isMesh)J.wireframe===!0?(ut.setLineWidth(J.wireframeLinewidth*nt()),Me.setMode(R.LINES)):Me.setMode(R.TRIANGLES);else if(Y.isLine){let Gt=J.linewidth;Gt===void 0&&(Gt=1),ut.setLineWidth(Gt*nt()),Y.isLineSegments?Me.setMode(R.LINES):Y.isLineLoop?Me.setMode(R.LINE_LOOP):Me.setMode(R.LINE_STRIP)}else Y.isPoints?Me.setMode(R.POINTS):Y.isSprite&&Me.setMode(R.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Br("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Me.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Gt=Y._multiDrawStarts,_e=Y._multiDrawCounts,ce=Y._multiDrawCount,_n=Ot?q.get(Ot).bytesPerElement:1,ms=x.get(J).currentProgram.getUniforms();for(let gn=0;gn<ce;gn++)ms.setValue(R,"_gl_DrawID",gn),Me.render(Gt[gn]/_n,_e[gn])}else if(Y.isInstancedMesh)Me.renderInstances(se,Ce,Y.count);else if(et.isInstancedBufferGeometry){const Gt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,_e=Math.min(et.instanceCount,Gt);Me.renderInstances(se,Ce,_e)}else Me.render(se,Ce)};function hu(E,G,et){E.transparent===!0&&E.side===mi&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,Zr(E,G,et),E.side=$i,E.needsUpdate=!0,Zr(E,G,et),E.side=mi):Zr(E,G,et)}this.compile=function(E,G,et=null){et===null&&(et=E),w=Et.get(et),w.init(G),D.push(w),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),E!==et&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights();const J=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const At=Y.material;if(At)if(Array.isArray(At))for(let Ft=0;Ft<At.length;Ft++){const Ct=At[Ft];hu(Ct,et,Y),J.add(Ct)}else hu(At,et,Y),J.add(At)}),w=D.pop(),J},this.compileAsync=function(E,G,et=null){const J=this.compile(E,G,et);return new Promise(Y=>{function At(){if(J.forEach(function(Ft){x.get(Ft).currentProgram.isReady()&&J.delete(Ft)}),J.size===0){Y(E);return}setTimeout(At,10)}ct.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Sa=null;function zp(E){Sa&&Sa(E)}function pu(){Yi.stop()}function mu(){Yi.start()}const Yi=new Lp;Yi.setAnimationLoop(zp),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(E){Sa=E,bt.setAnimationLoop(E),E===null?Yi.stop():Yi.start()},bt.addEventListener("sessionstart",pu),bt.addEventListener("sessionend",mu),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const et=bt.enabled===!0&&bt.isPresenting===!0,J=F!==null&&($===null||et)&&F.begin(S,$);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(G),G=bt.getCamera()),E.isScene===!0&&E.onBeforeRender(S,E,G,$),w=Et.get(E,D.length),w.init(G),D.push(w),C.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),lt.setFromProjectionMatrix(C,qn,G.reversedDepth),Nt=this.localClippingEnabled,at=Tt.init(this.clippingPlanes,Nt),b=pt.get(E,I.length),b.init(),I.push(b),bt.enabled===!0&&bt.isPresenting===!0){const Ft=S.xr.getDepthSensingMesh();Ft!==null&&Ma(Ft,G,-1/0,S.sortObjects)}Ma(E,G,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(ae,ne),Z=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,Z&&yt.addToRenderList(b,E),this.info.render.frame++,at===!0&&Tt.beginShadows();const Y=w.state.shadowsArray;if(Lt.render(Y,E,G),at===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&F.hasRenderPass())===!1){const Ft=b.opaque,Ct=b.transmissive;if(w.setupLights(),G.isArrayCamera){const Ot=G.cameras;if(Ct.length>0)for(let Vt=0,$t=Ot.length;Vt<$t;Vt++){const Ht=Ot[Vt];gu(Ft,Ct,E,Ht)}Z&&yt.render(E);for(let Vt=0,$t=Ot.length;Vt<$t;Vt++){const Ht=Ot[Vt];_u(b,E,Ht,Ht.viewport)}}else Ct.length>0&&gu(Ft,Ct,E,G),Z&&yt.render(E),_u(b,E,G)}$!==null&&W===0&&(L.updateMultisampleRenderTarget($),L.updateRenderTargetMipmap($)),J&&F.end(S),E.isScene===!0&&E.onAfterRender(S,E,G),Ut.resetDefaultState(),H=-1,B=null,D.pop(),D.length>0?(w=D[D.length-1],at===!0&&Tt.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?b=I[I.length-1]:b=null};function Ma(E,G,et,J){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)et=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||lt.intersectsSprite(E)){J&&O.setFromMatrixPosition(E.matrixWorld).applyMatrix4(C);const Ft=vt.update(E),Ct=E.material;Ct.visible&&b.push(E,Ft,Ct,et,O.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||lt.intersectsObject(E))){const Ft=vt.update(E),Ct=E.material;if(J&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),O.copy(E.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),O.copy(Ft.boundingSphere.center)),O.applyMatrix4(E.matrixWorld).applyMatrix4(C)),Array.isArray(Ct)){const Ot=Ft.groups;for(let Vt=0,$t=Ot.length;Vt<$t;Vt++){const Ht=Ot[Vt],se=Ct[Ht.materialIndex];se&&se.visible&&b.push(E,Ft,se,et,O.z,Ht)}}else Ct.visible&&b.push(E,Ft,Ct,et,O.z,null)}}const At=E.children;for(let Ft=0,Ct=At.length;Ft<Ct;Ft++)Ma(At[Ft],G,et,J)}function _u(E,G,et,J){const{opaque:Y,transmissive:At,transparent:Ft}=E;w.setupLightsView(et),at===!0&&Tt.setGlobalState(S.clippingPlanes,et),J&&ut.viewport(z.copy(J)),Y.length>0&&jr(Y,G,et),At.length>0&&jr(At,G,et),Ft.length>0&&jr(Ft,G,et),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function gu(E,G,et,J){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){const se=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new Zn(1,1,{generateMipmaps:!0,type:se?Ti:Mn,minFilter:as,samples:ot.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace})}const At=w.state.transmissionRenderTarget[J.id],Ft=J.viewport||z;At.setSize(Ft.z*S.transmissionResolutionScale,Ft.w*S.transmissionResolutionScale);const Ct=S.getRenderTarget(),Ot=S.getActiveCubeFace(),Vt=S.getActiveMipmapLevel();S.setRenderTarget(At),S.getClearColor(_t),gt=S.getClearAlpha(),gt<1&&S.setClearColor(16777215,.5),S.clear(),Z&&yt.render(et);const $t=S.toneMapping;S.toneMapping=jn;const Ht=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),at===!0&&Tt.setGlobalState(S.clippingPlanes,J),jr(E,et,J),L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At),ct.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let ve=0,Ce=G.length;ve<Ce;ve++){const Pe=G[ve],{object:Me,geometry:Gt,material:_e,group:ce}=Pe;if(_e.side===mi&&Me.layers.test(J.layers)){const _n=_e.side;_e.side=pn,_e.needsUpdate=!0,vu(Me,et,J,Gt,_e,ce),_e.side=_n,_e.needsUpdate=!0,se=!0}}se===!0&&(L.updateMultisampleRenderTarget(At),L.updateRenderTargetMipmap(At))}S.setRenderTarget(Ct,Ot,Vt),S.setClearColor(_t,gt),Ht!==void 0&&(J.viewport=Ht),S.toneMapping=$t}function jr(E,G,et){const J=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,At=E.length;Y<At;Y++){const Ft=E[Y],{object:Ct,geometry:Ot,group:Vt}=Ft;let $t=Ft.material;$t.allowOverride===!0&&J!==null&&($t=J),Ct.layers.test(et.layers)&&vu(Ct,G,et,Ot,$t,Vt)}}function vu(E,G,et,J,Y,At){E.onBeforeRender(S,G,et,J,Y,At),E.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(S,G,et,J,E,At),Y.transparent===!0&&Y.side===mi&&Y.forceSinglePass===!1?(Y.side=pn,Y.needsUpdate=!0,S.renderBufferDirect(et,G,J,Y,E,At),Y.side=$i,Y.needsUpdate=!0,S.renderBufferDirect(et,G,J,Y,E,At),Y.side=mi):S.renderBufferDirect(et,G,J,Y,E,At),E.onAfterRender(S,G,et,J,Y,At)}function Zr(E,G,et){G.isScene!==!0&&(G=Q);const J=x.get(E),Y=w.state.lights,At=w.state.shadowsArray,Ft=Y.state.version,Ct=It.getParameters(E,Y.state,At,G,et),Ot=It.getProgramCacheKey(Ct);let Vt=J.programs;J.environment=E.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(E.isMeshStandardMaterial?it:K).get(E.envMap||J.environment),J.envMapRotation=J.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,Vt===void 0&&(E.addEventListener("dispose",zn),Vt=new Map,J.programs=Vt);let $t=Vt.get(Ot);if($t!==void 0){if(J.currentProgram===$t&&J.lightsStateVersion===Ft)return Su(E,Ct),$t}else Ct.uniforms=It.getUniforms(E),E.onBeforeCompile(Ct,S),$t=It.acquireProgram(Ct,Ot),Vt.set(Ot,$t),J.uniforms=Ct.uniforms;const Ht=J.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ht.clippingPlanes=Tt.uniform),Su(E,Ct),J.needsLights=Wp(E),J.lightsStateVersion=Ft,J.needsLights&&(Ht.ambientLightColor.value=Y.state.ambient,Ht.lightProbe.value=Y.state.probe,Ht.directionalLights.value=Y.state.directional,Ht.directionalLightShadows.value=Y.state.directionalShadow,Ht.spotLights.value=Y.state.spot,Ht.spotLightShadows.value=Y.state.spotShadow,Ht.rectAreaLights.value=Y.state.rectArea,Ht.ltc_1.value=Y.state.rectAreaLTC1,Ht.ltc_2.value=Y.state.rectAreaLTC2,Ht.pointLights.value=Y.state.point,Ht.pointLightShadows.value=Y.state.pointShadow,Ht.hemisphereLights.value=Y.state.hemi,Ht.directionalShadowMap.value=Y.state.directionalShadowMap,Ht.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ht.spotShadowMap.value=Y.state.spotShadowMap,Ht.spotLightMatrix.value=Y.state.spotLightMatrix,Ht.spotLightMap.value=Y.state.spotLightMap,Ht.pointShadowMap.value=Y.state.pointShadowMap,Ht.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=$t,J.uniformsList=null,$t}function xu(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=Oo.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Su(E,G){const et=x.get(E);et.outputColorSpace=G.outputColorSpace,et.batching=G.batching,et.batchingColor=G.batchingColor,et.instancing=G.instancing,et.instancingColor=G.instancingColor,et.instancingMorph=G.instancingMorph,et.skinning=G.skinning,et.morphTargets=G.morphTargets,et.morphNormals=G.morphNormals,et.morphColors=G.morphColors,et.morphTargetsCount=G.morphTargetsCount,et.numClippingPlanes=G.numClippingPlanes,et.numIntersection=G.numClipIntersection,et.vertexAlphas=G.vertexAlphas,et.vertexTangents=G.vertexTangents,et.toneMapping=G.toneMapping}function Hp(E,G,et,J,Y){G.isScene!==!0&&(G=Q),L.resetTextureUnits();const At=G.fog,Ft=J.isMeshStandardMaterial?G.environment:null,Ct=$===null?S.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Js,Ot=(J.isMeshStandardMaterial?it:K).get(J.envMap||Ft),Vt=J.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,$t=!!et.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ht=!!et.morphAttributes.position,se=!!et.morphAttributes.normal,ve=!!et.morphAttributes.color;let Ce=jn;J.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ce=S.toneMapping);const Pe=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,Me=Pe!==void 0?Pe.length:0,Gt=x.get(J),_e=w.state.lights;if(at===!0&&(Nt===!0||E!==B)){const nn=E===B&&J.id===H;Tt.setState(J,E,nn)}let ce=!1;J.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==_e.state.version||Gt.outputColorSpace!==Ct||Y.isBatchedMesh&&Gt.batching===!1||!Y.isBatchedMesh&&Gt.batching===!0||Y.isBatchedMesh&&Gt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Gt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Gt.instancing===!1||!Y.isInstancedMesh&&Gt.instancing===!0||Y.isSkinnedMesh&&Gt.skinning===!1||!Y.isSkinnedMesh&&Gt.skinning===!0||Y.isInstancedMesh&&Gt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Gt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Gt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Gt.instancingMorph===!1&&Y.morphTexture!==null||Gt.envMap!==Ot||J.fog===!0&&Gt.fog!==At||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Tt.numPlanes||Gt.numIntersection!==Tt.numIntersection)||Gt.vertexAlphas!==Vt||Gt.vertexTangents!==$t||Gt.morphTargets!==Ht||Gt.morphNormals!==se||Gt.morphColors!==ve||Gt.toneMapping!==Ce||Gt.morphTargetsCount!==Me)&&(ce=!0):(ce=!0,Gt.__version=J.version);let _n=Gt.currentProgram;ce===!0&&(_n=Zr(J,G,Y));let ms=!1,gn=!1,ir=!1;const Te=_n.getUniforms(),un=Gt.uniforms;if(ut.useProgram(_n.program)&&(ms=!0,gn=!0,ir=!0),J.id!==H&&(H=J.id,gn=!0),ms||B!==E){ut.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Te.setValue(R,"projectionMatrix",E.projectionMatrix),Te.setValue(R,"viewMatrix",E.matrixWorldInverse);const dn=Te.map.cameraPosition;dn!==void 0&&dn.setValue(R,P.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&Te.setValue(R,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Te.setValue(R,"isOrthographic",E.isOrthographicCamera===!0),B!==E&&(B=E,gn=!0,ir=!0)}if(Gt.needsLights&&(_e.state.directionalShadowMap.length>0&&Te.setValue(R,"directionalShadowMap",_e.state.directionalShadowMap,L),_e.state.spotShadowMap.length>0&&Te.setValue(R,"spotShadowMap",_e.state.spotShadowMap,L),_e.state.pointShadowMap.length>0&&Te.setValue(R,"pointShadowMap",_e.state.pointShadowMap,L)),Y.isSkinnedMesh){Te.setOptional(R,Y,"bindMatrix"),Te.setOptional(R,Y,"bindMatrixInverse");const nn=Y.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Te.setValue(R,"boneTexture",nn.boneTexture,L))}Y.isBatchedMesh&&(Te.setOptional(R,Y,"batchingTexture"),Te.setValue(R,"batchingTexture",Y._matricesTexture,L),Te.setOptional(R,Y,"batchingIdTexture"),Te.setValue(R,"batchingIdTexture",Y._indirectTexture,L),Te.setOptional(R,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Te.setValue(R,"batchingColorTexture",Y._colorsTexture,L));const Tn=et.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&Jt.update(Y,et,_n),(gn||Gt.receiveShadow!==Y.receiveShadow)&&(Gt.receiveShadow=Y.receiveShadow,Te.setValue(R,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(un.envMap.value=Ot,un.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(un.envMapIntensity.value=G.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=rR()),gn&&(Te.setValue(R,"toneMappingExposure",S.toneMappingExposure),Gt.needsLights&&Gp(un,ir),At&&J.fog===!0&&kt.refreshFogUniforms(un,At),kt.refreshMaterialUniforms(un,J,Wt,Bt,w.state.transmissionRenderTarget[E.id]),Oo.upload(R,xu(Gt),un,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Oo.upload(R,xu(Gt),un,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Te.setValue(R,"center",Y.center),Te.setValue(R,"modelViewMatrix",Y.modelViewMatrix),Te.setValue(R,"normalMatrix",Y.normalMatrix),Te.setValue(R,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const nn=J.uniformsGroups;for(let dn=0,ya=nn.length;dn<ya;dn++){const qi=nn[dn];xt.update(qi,_n),xt.bind(qi,_n)}}return _n}function Gp(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Wp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(E,G,et){const J=x.get(E);J.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=G,x.get(E.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:et,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const et=x.get(E);et.__webglFramebuffer=G,et.__useDefaultFramebuffer=G===void 0};const Xp=R.createFramebuffer();this.setRenderTarget=function(E,G=0,et=0){$=E,N=G,W=et;let J=null,Y=!1,At=!1;if(E){const Ct=x.get(E);if(Ct.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(R.FRAMEBUFFER,Ct.__webglFramebuffer),z.copy(E.viewport),k.copy(E.scissor),tt=E.scissorTest,ut.viewport(z),ut.scissor(k),ut.setScissorTest(tt),H=-1;return}else if(Ct.__webglFramebuffer===void 0)L.setupRenderTarget(E);else if(Ct.__hasExternalTextures)L.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const $t=E.depthTexture;if(Ct.__boundDepthTexture!==$t){if($t!==null&&x.has($t)&&(E.width!==$t.image.width||E.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(E)}}const Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(At=!0);const Vt=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Vt[G])?J=Vt[G][et]:J=Vt[G],Y=!0):E.samples>0&&L.useMultisampledRTT(E)===!1?J=x.get(E).__webglMultisampledFramebuffer:Array.isArray(Vt)?J=Vt[et]:J=Vt,z.copy(E.viewport),k.copy(E.scissor),tt=E.scissorTest}else z.copy(j).multiplyScalar(Wt).floor(),k.copy(U).multiplyScalar(Wt).floor(),tt=st;if(et!==0&&(J=Xp),ut.bindFramebuffer(R.FRAMEBUFFER,J)&&ut.drawBuffers(E,J),ut.viewport(z),ut.scissor(k),ut.setScissorTest(tt),Y){const Ct=x.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ct.__webglTexture,et)}else if(At){const Ct=G;for(let Ot=0;Ot<E.textures.length;Ot++){const Vt=x.get(E.textures[Ot]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ot,Vt.__webglTexture,et,Ct)}}else if(E!==null&&et!==0){const Ct=x.get(E.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ct.__webglTexture,et)}H=-1},this.readRenderTargetPixels=function(E,G,et,J,Y,At,Ft,Ct=0){if(!(E&&E.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot){ut.bindFramebuffer(R.FRAMEBUFFER,Ot);try{const Vt=E.textures[Ct],$t=Vt.format,Ht=Vt.type;if(!ot.textureFormatReadable($t)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Ht)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-J&&et>=0&&et<=E.height-Y&&(E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ct),R.readPixels(G,et,J,Y,St.convert($t),St.convert(Ht),At))}finally{const Vt=$!==null?x.get($).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(E,G,et,J,Y,At,Ft,Ct=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ot=Ot[Ft]),Ot)if(G>=0&&G<=E.width-J&&et>=0&&et<=E.height-Y){ut.bindFramebuffer(R.FRAMEBUFFER,Ot);const Vt=E.textures[Ct],$t=Vt.format,Ht=Vt.type;if(!ot.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.bufferData(R.PIXEL_PACK_BUFFER,At.byteLength,R.STREAM_READ),E.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ct),R.readPixels(G,et,J,Y,St.convert($t),St.convert(Ht),0);const ve=$!==null?x.get($).__webglFramebuffer:null;ut.bindFramebuffer(R.FRAMEBUFFER,ve);const Ce=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Sy(R,Ce,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,At),R.deleteBuffer(se),R.deleteSync(Ce),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,et=0){const J=Math.pow(2,-et),Y=Math.floor(E.image.width*J),At=Math.floor(E.image.height*J),Ft=G!==null?G.x:0,Ct=G!==null?G.y:0;L.setTexture2D(E,0),R.copyTexSubImage2D(R.TEXTURE_2D,et,0,0,Ft,Ct,Y,At),ut.unbindTexture()};const $p=R.createFramebuffer(),Yp=R.createFramebuffer();this.copyTextureToTexture=function(E,G,et=null,J=null,Y=0,At=null){At===null&&(Y!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Y,Y=0):At=0);let Ft,Ct,Ot,Vt,$t,Ht,se,ve,Ce;const Pe=E.isCompressedTexture?E.mipmaps[At]:E.image;if(et!==null)Ft=et.max.x-et.min.x,Ct=et.max.y-et.min.y,Ot=et.isBox3?et.max.z-et.min.z:1,Vt=et.min.x,$t=et.min.y,Ht=et.isBox3?et.min.z:0;else{const Tn=Math.pow(2,-Y);Ft=Math.floor(Pe.width*Tn),Ct=Math.floor(Pe.height*Tn),E.isDataArrayTexture?Ot=Pe.depth:E.isData3DTexture?Ot=Math.floor(Pe.depth*Tn):Ot=1,Vt=0,$t=0,Ht=0}J!==null?(se=J.x,ve=J.y,Ce=J.z):(se=0,ve=0,Ce=0);const Me=St.convert(G.format),Gt=St.convert(G.type);let _e;G.isData3DTexture?(L.setTexture3D(G,0),_e=R.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),_e=R.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),_e=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,G.unpackAlignment);const ce=R.getParameter(R.UNPACK_ROW_LENGTH),_n=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ms=R.getParameter(R.UNPACK_SKIP_PIXELS),gn=R.getParameter(R.UNPACK_SKIP_ROWS),ir=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Pe.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pe.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Vt),R.pixelStorei(R.UNPACK_SKIP_ROWS,$t),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ht);const Te=E.isDataArrayTexture||E.isData3DTexture,un=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const Tn=x.get(E),nn=x.get(G),dn=x.get(Tn.__renderTarget),ya=x.get(nn.__renderTarget);ut.bindFramebuffer(R.READ_FRAMEBUFFER,dn.__webglFramebuffer),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,ya.__webglFramebuffer);for(let qi=0;qi<Ot;qi++)Te&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(E).__webglTexture,Y,Ht+qi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,x.get(G).__webglTexture,At,Ce+qi)),R.blitFramebuffer(Vt,$t,Ft,Ct,se,ve,Ft,Ct,R.DEPTH_BUFFER_BIT,R.NEAREST);ut.bindFramebuffer(R.READ_FRAMEBUFFER,null),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||x.has(E)){const Tn=x.get(E),nn=x.get(G);ut.bindFramebuffer(R.READ_FRAMEBUFFER,$p),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,Yp);for(let dn=0;dn<Ot;dn++)Te?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tn.__webglTexture,Y,Ht+dn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Tn.__webglTexture,Y),un?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,nn.__webglTexture,At,Ce+dn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,nn.__webglTexture,At),Y!==0?R.blitFramebuffer(Vt,$t,Ft,Ct,se,ve,Ft,Ct,R.COLOR_BUFFER_BIT,R.NEAREST):un?R.copyTexSubImage3D(_e,At,se,ve,Ce+dn,Vt,$t,Ft,Ct):R.copyTexSubImage2D(_e,At,se,ve,Vt,$t,Ft,Ct);ut.bindFramebuffer(R.READ_FRAMEBUFFER,null),ut.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else un?E.isDataTexture||E.isData3DTexture?R.texSubImage3D(_e,At,se,ve,Ce,Ft,Ct,Ot,Me,Gt,Pe.data):G.isCompressedArrayTexture?R.compressedTexSubImage3D(_e,At,se,ve,Ce,Ft,Ct,Ot,Me,Pe.data):R.texSubImage3D(_e,At,se,ve,Ce,Ft,Ct,Ot,Me,Gt,Pe):E.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,At,se,ve,Ft,Ct,Me,Gt,Pe.data):E.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,At,se,ve,Pe.width,Pe.height,Me,Pe.data):R.texSubImage2D(R.TEXTURE_2D,At,se,ve,Ft,Ct,Me,Gt,Pe);R.pixelStorei(R.UNPACK_ROW_LENGTH,ce),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_n),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ms),R.pixelStorei(R.UNPACK_SKIP_ROWS,gn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ir),At===0&&G.generateMipmaps&&R.generateMipmap(_e),ut.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&L.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?L.setTextureCube(E,0):E.isData3DTexture?L.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?L.setTexture2DArray(E,0):L.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){N=0,W=0,$=null,ut.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}const bf={type:"change"},fu={type:"start"},Bp={type:"end"},To=new ru,Tf=new zi,aR=Math.cos(70*yy.DEG2RAD),Be=new X,hn=2*Math.PI,xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6;class lR extends uE{constructor(t,e=null){super(t,e),this.state=xe.NONE,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:Ns.ROTATE,TWO:Ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new fs,this._lastTargetPosition=new X,this._quat=new fs().setFromUnitVectors(t.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Zd,this._sphericalDelta=new Zd,this._scale=1,this._panOffset=new X,this._rotateStart=new jt,this._rotateEnd=new jt,this._rotateDelta=new jt,this._panStart=new jt,this._panEnd=new jt,this._panDelta=new jt,this._dollyStart=new jt,this._dollyEnd=new jt,this._dollyDelta=new jt,this._dollyDirection=new X,this._mouse=new jt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=uR.bind(this),this._onPointerDown=cR.bind(this),this._onPointerUp=dR.bind(this),this._onContextMenu=vR.bind(this),this._onMouseWheel=pR.bind(this),this._onKeyDown=mR.bind(this),this._onTouchStart=_R.bind(this),this._onTouchMove=gR.bind(this),this._onMouseDown=fR.bind(this),this._onMouseMove=hR.bind(this),this._interceptControlDown=xR.bind(this),this._interceptControlUp=SR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bf),this.update(),this.state=xe.NONE}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=hn:i>Math.PI&&(i-=hn),s<-Math.PI?s+=hn:s>Math.PI&&(s-=hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new X(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new X(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(To.origin.copy(this.object.position),To.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(To.direction))<aR?this.object.lookAt(this.target):(Tf.setFromNormalAndCoplanarPoint(this.object.up,this.target),To.intersectPlane(Tf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?hn/60*this.autoRotateSpeed*t:hn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Be.copy(s).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(hn*this._rotateDelta.x/e.clientHeight),this._rotateUp(hn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new jt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function cR(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function uR(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dR(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Bp),this.state=xe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function fR(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xe.DOLLY;break;case zs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xe.ROTATE}break;case zs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xe.PAN}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(fu)}function hR(n){switch(this.state){case xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function pR(n){this.enabled===!1||this.enableZoom===!1||this.state!==xe.NONE||(n.preventDefault(),this.dispatchEvent(fu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Bp))}function mR(n){this.enabled!==!1&&this._handleKeyDown(n)}function _R(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xe.TOUCH_ROTATE;break;case Ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xe.TOUCH_PAN;break;default:this.state=xe.NONE}break;case 2:switch(this.touches.TWO){case Ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xe.TOUCH_DOLLY_PAN;break;case Ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xe.TOUCH_DOLLY_ROTATE;break;default:this.state=xe.NONE}break;default:this.state=xe.NONE}this.state!==xe.NONE&&this.dispatchEvent(fu)}function gR(n){switch(this._trackPointer(n),this.state){case xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xe.NONE}}function vR(n){this.enabled!==!1&&n.preventDefault()}function xR(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function SR(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const MR={class:"grid"},yR={class:"wrap"},ER={class:"panel"},bR={class:"row"},TR={class:"s-badge"},AR={class:"s-badge"},RR={class:"s-badge"},wR={class:"actions"},CR={class:"metrics"},PR={class:"metric"},DR={class:"v"},IR={class:"metric"},LR={class:"v"},UR={class:"metric"},NR={class:"v"},FR={class:"metric"},OR={class:"v"},BR={key:0,class:"empty"},kR=["data-motion"],VR={class:"item__head"},zR={class:"id"},HR={class:"tags"},GR={class:"tag"},WR={class:"tag"},XR={class:"coords"},$R={class:"spd"},YR={class:"mini-map","aria-hidden":"true"},qR={class:"hud"},KR={class:"hud__line"},Is=10,jR={__name:"ThreeDSituation",setup(n){const t=Dt([]),e=Dt(null),i=Dt(!1),s=Dt({suggestMs:86,latencyMs:42,errXY:.6,errZ:.3,pathAlgo:"A* / RRT / PSO",now:""}),r=Xe(()=>t.value.filter(H=>H.motion==="DYNAMIC").length),o=Xe(()=>t.value.filter(H=>H.motion==="STATIC").length);let a=null,l=null,c=null,u=null,f=0,m=null,p=[],v=null,g=null;function _(H=100){return Math.floor(Math.random()*H)}function h(H){return H==="STATIC"?Math.random()>.5?"监测井":"补给区":Math.random()>.5?"固定翼":"旋翼"}function M(H){const B=new qd({color:H==="DYNAMIC"?2068108:2923373,roughness:.6,metalness:.1});if(H==="STATIC"){const k=new lu(.15,.15,.4,16);return new Cn(k,B)}const z=new cu(.18,18,18);return new Cn(z,B)}function A(H){const B=(H==="DYNAMIC"?"DYN-":"STA-")+String(Date.now()).slice(-6),z=h(H),k=_(800)/100-4,tt=_(80)/100+.2,_t=_(800)/100-4,gt=H==="DYNAMIC"?_(60)/10+2:0,Mt=_(360),Bt=H==="DYNAMIC"?Math.cos(Mt)*gt*.03:0,Wt=H==="DYNAMIC"?Math.sin(Mt)*gt*.03:0;return{id:B,type:z,motion:H,x:k,y:tt,z:_t,speed:gt,vx:Bt,vz:Wt}}function b(){D("STATIC")}function w(){D("DYNAMIC")}function I(){for(let H=0;H<3;H++)D("DYNAMIC");for(let H=0;H<2;H++)D("STATIC")}function D(H){const B=A(H);if(t.value.unshift(B),l){const z=M(H);z.position.set(B.x,B.y,B.z),z.userData={id:B.id,motion:H,vx:B.vx,vz:B.vz},l.add(z),p.push(z)}}function F(){t.value=[],l&&p.length&&(p.forEach(H=>{var B,z;l.remove(H),(z=(B=H.geometry)==null?void 0:B.dispose)==null||z.call(B),H.material&&(Array.isArray(H.material)?H.material:[H.material]).forEach(tt=>{var _t;return(_t=tt.dispose)==null?void 0:_t.call(tt)})}),p=[]),Wr(()=>{var H;(H=a==null?void 0:a.__onResize)==null||H.call(a)})}function S(){const H=e.value;if(!H)return;l=new $y,l.background=new oe(15398129),c=new wn(60,1,.1,200),c.position.set(3.8,2.6,4.8),c.lookAt(0,0,0),a=new oR({antialias:!0,alpha:!0}),a.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),a.setSize(H.clientWidth,H.clientHeight),a.setClearColor(15398129,1),H.appendChild(a.domElement),u=new lR(c,a.domElement),u.enableDamping=!0,u.dampingFactor=.08,u.screenSpacePanning=!0,u.target.set(0,0,0),u.update(),u.maxPolarAngle=Math.PI/2.05,u.minDistance=2,u.maxDistance=20;const B=new nE(15135470,13098196,.8);l.add(B),l.add(new oE(16777215,.4));const z=new rE(16777215,.9);z.position.set(4,6,3),l.add(z);const k=new cE(2.5);l.add(k);const tt=new Jd(20,20,11060410,13098196);tt.material.opacity=.7,tt.material.transparent=!0,l.add(tt);const _t=new Jd(20,40,13098196,15135470);_t.material.opacity=.45,_t.material.transparent=!0,l.add(_t);const gt=new Kr(20,20),Mt=new qd({color:13623770,roughness:.95,metalness:.05}),Bt=new Cn(gt,Mt);Bt.name="ground",Bt.rotation.x=-Math.PI/2,Bt.position.y=-.8,l.add(Bt),m=new lE;const Wt=()=>{if(f=requestAnimationFrame(Wt),!i.value){const ne=Math.min(m.getDelta(),.033);p.forEach(j=>{j.userData.motion==="DYNAMIC"&&(j.position.x+=j.userData.vx*ne*60,j.position.z+=j.userData.vz*ne*60,(j.position.x>Is||j.position.x<-Is)&&(j.userData.vx*=-1),(j.position.z>Is||j.position.z<-Is)&&(j.userData.vz*=-1))}),t.value=t.value.map(j=>{if(j.motion!=="DYNAMIC")return j;const U=p.find(st=>st.userData.id===j.id);return U?{...j,x:U.position.x,y:U.position.y,z:U.position.z}:j})}u==null||u.update(),a.render(l,c)};Wt();const ae=()=>{!a||!c||!e.value||(g&&clearTimeout(g),g=setTimeout(()=>{const ne=e.value.clientWidth,j=e.value.clientHeight;a.setSize(ne,j),c.aspect=ne/j,c.updateProjectionMatrix()},220))};window.addEventListener("resize",ae),a.__onResize=ae,v=new ResizeObserver(ae),v.observe(H)}function T(){var H;if(f&&cancelAnimationFrame(f),f=0,a!=null&&a.__onResize&&window.removeEventListener("resize",a.__onResize),v==null||v.disconnect(),v=null,g&&clearTimeout(g),g=null,u==null||u.dispose(),u=null,l&&l.traverse(B=>{var z,k;B.geometry&&((k=(z=B.geometry).dispose)==null||k.call(z)),B.material&&(Array.isArray(B.material)?B.material:[B.material]).forEach(_t=>{var gt;return(gt=_t.dispose)==null?void 0:gt.call(_t)})}),a){a.dispose();const B=a.domElement;(H=B==null?void 0:B.parentNode)==null||H.removeChild(B)}a=null,l=null,c=null,p=[]}let N=null;zc(()=>{S(),N=setInterval(()=>{s.value.suggestMs=70+_(40),s.value.latencyMs=30+_(50),s.value.errXY=(.4+Math.random()*.7).toFixed(2),s.value.errZ=(.2+Math.random()*.4).toFixed(2),s.value.now=new Date().toLocaleString()},1e3)}),Hc(()=>{T(),N&&clearInterval(N)});function W(H){const B=Number(H);return Number.isNaN(B)?"-":B.toFixed(2)}function $(H){const B=Number(H);if(Number.isNaN(B))return"50%";const z=(B+Is)/(Is*2)*100;return`${Math.max(4,Math.min(96,z))}%`}return(H,B)=>(ft(),mt("div",MR,[zt(Re,{title:"三维态势可视化（Three.js 渲染）",subtitle:"鼠标拖动旋转 / 滚轮缩放 / 右键平移（OrbitControls）"},{default:te(()=>[d("div",yR,[d("div",ER,[d("div",bR,[B[4]||(B[4]=d("span",{class:"s-badge"},[d("span",{class:"s-dot s-dot--ok"}),Ve(" Render: OK")],-1)),d("span",TR,[B[1]||(B[1]=d("span",{class:"s-dot"},null,-1)),Ve(" 目标总数："+rt(t.value.length),1)]),d("span",AR,[B[2]||(B[2]=d("span",{class:"s-dot"},null,-1)),Ve(" 动态："+rt(r.value),1)]),d("span",RR,[B[3]||(B[3]=d("span",{class:"s-dot s-dot--warn"},null,-1)),Ve(" 静态："+rt(o.value),1)])]),d("div",wR,[d("button",{class:"s-btn",onClick:b},"生成静态目标"),d("button",{class:"s-btn s-btn--primary",onClick:w},"生成动态目标"),d("button",{class:"s-btn s-btn--ghost",onClick:I},"批量生成(5)"),d("button",{class:"s-btn",onClick:B[0]||(B[0]=z=>i.value=!i.value)},rt(i.value?"继续仿真":"暂停仿真"),1),d("button",{class:"s-btn s-btn--danger",onClick:F},"清空")]),d("div",CR,[d("div",PR,[B[5]||(B[5]=d("div",{class:"k"},"任务建议响应",-1)),d("div",DR,rt(s.value.suggestMs)+" ms",1)]),d("div",IR,[B[6]||(B[6]=d("div",{class:"k"},"链路时延",-1)),d("div",LR,rt(s.value.latencyMs)+" ms",1)]),d("div",UR,[B[7]||(B[7]=d("div",{class:"k"},"识别误差",-1)),d("div",NR,"±"+rt(s.value.errXY)+" m / ±"+rt(s.value.errZ)+" m",1)]),d("div",FR,[B[8]||(B[8]=d("div",{class:"k"},"航迹规划",-1)),d("div",OR,rt(s.value.pathAlgo),1)])]),d("div",{class:en(["list",{"is-empty":t.value.length===0}])},[t.value.length===0?(ft(),mt("div",BR,"暂无目标，点击“生成静态目标/动态目标”")):En("",!0),(ft(!0),mt(Kt,null,fe(t.value,z=>(ft(),mt("div",{key:z.id,class:"item","data-motion":z.motion},[d("div",VR,[d("div",zR,rt(z.id),1),d("div",HR,[d("span",GR,rt(z.motion==="DYNAMIC"?"动态":"静态"),1),d("span",WR,rt(z.type),1)])]),d("div",XR,[d("span",null,"x "+rt(W(z.x)),1),d("span",null,"y "+rt(W(z.y)),1),d("span",null,"z "+rt(W(z.z)),1),d("span",$R,"v "+rt(W(z.speed))+" m/s",1)]),d("div",YR,[d("span",{class:"dot",style:ra({left:$(z.x),top:$(z.z)})},null,4)])],8,kR))),128))],2),B[9]||(B[9]=d("div",{class:"tips"},[d("div",{class:"tip"},[d("span",{class:"k"},"左键拖动"),d("span",{class:"v"},"旋转")]),d("div",{class:"tip"},[d("span",{class:"k"},"滚轮"),d("span",{class:"v"},"缩放")]),d("div",{class:"tip"},[d("span",{class:"k"},"右键拖动"),d("span",{class:"v"},"平移")])],-1))]),d("div",{class:"viewport",ref_key:"mountEl",ref:e},[d("div",qR,[B[10]||(B[10]=d("div",{class:"hud__line"},"统一任务态势图 | 地下水监测网络 | 3D 联动展示",-1)),d("div",KR,"时间："+rt(s.value.now),1)])],512)])]),_:1})]))}},ZR=Oe(jR,[["__scopeId","data-v-6b5c2b8c"]]),JR={class:"grid"},QR={class:"table"},tw={class:"id"},ew={class:"field"},nw={class:"desc"},iw={class:"frame"},sw={class:"name"},rw={class:"meta"},ow={class:"list"},aw={__name:"UnifiedDataStandard",setup(n){const t=Dt([{id:"S01",type:"位置信息",field:"lat",desc:"纬度"},{id:"S02",type:"位置信息",field:"lon",desc:"经度"},{id:"S03",type:"位置信息",field:"alt",desc:"高度"},{id:"S04",type:"位置信息",field:"heading",desc:"航向"},{id:"S05",type:"状态信息",field:"battery",desc:"电量"},{id:"S06",type:"状态信息",field:"link",desc:"链路状态"},{id:"S07",type:"状态信息",field:"speed",desc:"速度"},{id:"S08",type:"状态信息",field:"health",desc:"健康度"},{id:"S09",type:"指令",field:"CMD_FORM",desc:"队形指令"},{id:"S10",type:"指令",field:"CMD_GOTO",desc:"航点指令"},{id:"S11",type:"指令",field:"CMD_RTH",desc:"返航指令"},{id:"S12",type:"反馈",field:"ACK",desc:"确认回执"},{id:"S13",type:"反馈",field:"PROGRESS",desc:"执行进度"},{id:"S14",type:"反馈",field:"ETA",desc:"预计时间"},{id:"S15",type:"设备",field:"model",desc:"机型"},{id:"S16",type:"设备",field:"payload",desc:"载荷"},{id:"S17",type:"安全",field:"auth",desc:"身份认证"},{id:"S18",type:"安全",field:"role",desc:"角色权限"},{id:"S19",type:"安全",field:"audit_id",desc:"审计链路"},{id:"S20",type:"任务",field:"task_id",desc:"任务编号"},{id:"S21",type:"任务",field:"target_seq",desc:"目标序列"},{id:"S22",type:"任务",field:"policy",desc:"规则集"}]),e=Dt([{title:"位置信息",desc:"统一坐标系与时间戳",items:["lat","lon","alt","heading"]},{title:"状态信息",desc:"任务 / 电量 / 链路 / 健康度",items:["battery","link","speed","health"]},{title:"指令与反馈",desc:"指令闭环 + 回执",items:["CMD_FORM","CMD_GOTO","CMD_RTH","ACK","PROGRESS","ETA"]},{title:"设备与安全",desc:"机型 / 载荷 / 权限",items:["model","payload","auth","role","audit_id"]}]);return(i,s)=>(ft(),mt("div",JR,[zt(Re,{title:"统一数据标准（≥20条）",subtitle:"位置信息 / 状态 / 指令 / 反馈 / 设备 / 安全"},{default:te(()=>[d("div",QR,[s[0]||(s[0]=d("div",{class:"thead"},[d("span",null,"编号"),d("span",null,"类型"),d("span",null,"字段"),d("span",null,"说明")],-1)),(ft(!0),mt(Kt,null,fe(t.value,(r,o)=>(ft(),mt("div",{class:"trow",key:o},[d("span",tw,rt(r.id),1),d("span",null,rt(r.type),1),d("span",ew,rt(r.field),1),d("span",nw,rt(r.desc),1)]))),128))])]),_:1}),zt(Re,{title:"信息框架",subtitle:"统一信息条目 + 交互标准接口"},{default:te(()=>[d("div",iw,[(ft(!0),mt(Kt,null,fe(e.value,r=>(ft(),mt("div",{class:"block",key:r.title},[d("div",sw,rt(r.title),1),d("div",rw,rt(r.desc),1),d("div",ow,[(ft(!0),mt(Kt,null,fe(r.items,o=>(ft(),mt("span",{class:"pill",key:o},rt(o),1))),128))])]))),128))])]),_:1})]))}},lw=Oe(aw,[["__scopeId","data-v-602200dd"]]),cw={class:"grid"},uw={class:"row"},dw={class:"box"},fw={class:"box"},hw={class:"box"},pw={class:"row"},mw={class:"box"},_w={class:"box"},gw={class:"box"},vw={class:"kpis"},xw={class:"kpi"},Sw={class:"v"},Mw={class:"kpi"},yw={class:"v"},Ew={class:"kpi"},bw={class:"v"},Tw={class:"table"},Aw=["onUpdate:modelValue"],Rw=["onUpdate:modelValue"],ww=["onUpdate:modelValue"],Cw={class:"table table--models"},Pw=["onUpdate:modelValue"],Dw=["onUpdate:modelValue"],Iw=["onUpdate:modelValue"],Lw=["onUpdate:modelValue"],Uw={__name:"FlightTestScenario",setup(n){const t=Dt("5"),e=Dt("2"),i=Dt("15"),s=Dt("6"),r=Dt("40"),o=Dt("-20~50"),a=Dt({xy:.8,z:.3,v:.5}),l=Dt([{name:"通信距离",value:"≥ 2 km",note:"支持自组网"},{name:"部署效率",value:"≤ 15 min",note:"展开/撤收"},{name:"探测误差",value:"±1m / ±0.5m",note:"水平/垂直"}]),c=Dt([{name:"固定翼 A型",size:"2.5 m",endurance:"≥ 40 min",ip:"IPX4"},{name:"旋翼 B型",size:"0.9 m",endurance:"≥ 35 min",ip:"IPX4"}]);function u(){a.value={xy:(.6+Math.random()*.4).toFixed(2),z:(.2+Math.random()*.3).toFixed(2),v:(.3+Math.random()*.7).toFixed(2)}}function f(){a.value={xy:.8,z:.3,v:.5}}function m(){l.value.push({name:"新指标",value:"",note:""})}function p(){l.value.length>0&&l.value.pop()}function v(){c.value.push({name:"新机型",size:"",endurance:"",ip:""})}function g(){c.value.length>0&&c.value.pop()}return(_,h)=>(ft(),mt("div",cw,[zt(Re,{title:"实飞测试配置",subtitle:"对标招标条款：编队构型 / 通信距离 / 探测误差 / 展开撤收时间"},{default:te(()=>[d("div",uw,[d("div",dw,[h[7]||(h[7]=d("div",{class:"k"},"编队构型",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[0]||(h[0]=M=>t.value=M)},[...h[6]||(h[6]=[d("option",{value:"5"},"5 架（固定翼≥1）",-1),d("option",{value:"6"},"6 架（加分）",-1),d("option",{value:"7"},"7 架（加分）",-1)])],512),[[Se,t.value]])]),d("div",fw,[h[9]||(h[9]=d("div",{class:"k"},"通信距离",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[1]||(h[1]=M=>e.value=M)},[...h[8]||(h[8]=[d("option",{value:"2"},"≥ 2 km",-1),d("option",{value:"3"},"≥ 3 km",-1)])],512),[[Se,e.value]])]),d("div",hw,[h[11]||(h[11]=d("div",{class:"k"},"展开/撤收",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[2]||(h[2]=M=>i.value=M)},[...h[10]||(h[10]=[d("option",{value:"15"},"≤ 15 min",-1),d("option",{value:"12"},"≤ 12 min",-1)])],512),[[Se,i.value]])])]),d("div",pw,[d("div",mw,[h[13]||(h[13]=d("div",{class:"k"},"抗风能力",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[3]||(h[3]=M=>s.value=M)},[...h[12]||(h[12]=[d("option",{value:"6"},"≥ 6 级（阵风 7）",-1),d("option",{value:"7"},"≥ 7 级",-1)])],512),[[Se,s.value]])]),d("div",_w,[h[15]||(h[15]=d("div",{class:"k"},"续航",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[4]||(h[4]=M=>r.value=M)},[...h[14]||(h[14]=[d("option",{value:"40"},"空载 ≥ 40 min",-1),d("option",{value:"50"},"空载 ≥ 50 min",-1)])],512),[[Se,r.value]])]),d("div",gw,[h[17]||(h[17]=d("div",{class:"k"},"环境适应",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":h[5]||(h[5]=M=>o.value=M)},[...h[16]||(h[16]=[d("option",{value:"-20~50"},"-20℃ ~ 50℃",-1)])],512),[[Se,o.value]])])]),d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:u},"生成测试方案"),d("button",{class:"s-btn",onClick:f},"重置")]),d("div",vw,[d("div",xw,[h[18]||(h[18]=d("div",{class:"k"},"水平误差",-1)),d("div",Sw,"±"+rt(a.value.xy)+" m",1)]),d("div",Mw,[h[19]||(h[19]=d("div",{class:"k"},"垂直误差",-1)),d("div",yw,"±"+rt(a.value.z)+" m",1)]),d("div",Ew,[h[20]||(h[20]=d("div",{class:"k"},"速度误差",-1)),d("div",bw,"±"+rt(a.value.v)+" m/s",1)]),h[21]||(h[21]=d("div",{class:"kpi"},[d("div",{class:"k"},"探测范围"),d("div",{class:"v"},"≥ 10 km")],-1))])]),_:1}),zt(Re,{title:"实飞参数表（可编辑）",subtitle:"支持参数化展示与演示调整"},{default:te(()=>[d("div",Tw,[h[22]||(h[22]=d("div",{class:"thead"},[d("span",null,"指标"),d("span",null,"值"),d("span",null,"备注")],-1)),(ft(!0),mt(Kt,null,fe(l.value,(M,A)=>(ft(),mt("div",{class:"trow",key:A},[ie(d("input",{class:"cell","onUpdate:modelValue":b=>M.name=b},null,8,Aw),[[fi,M.name]]),ie(d("input",{class:"cell","onUpdate:modelValue":b=>M.value=b},null,8,Rw),[[fi,M.value]]),ie(d("input",{class:"cell","onUpdate:modelValue":b=>M.note=b},null,8,ww),[[fi,M.note]])]))),128))]),d("div",{class:"actions"},[d("button",{class:"s-btn",onClick:m},"新增参数"),d("button",{class:"s-btn s-btn--ghost",onClick:p},"删除末行")])]),_:1}),zt(Re,{title:"机型库（可编辑）",subtitle:"固定翼 / 旋翼 机型数据演示"},{default:te(()=>[d("div",Cw,[h[23]||(h[23]=d("div",{class:"thead"},[d("span",null,"机型"),d("span",null,"翼展/尺寸"),d("span",null,"续航"),d("span",null,"防护等级")],-1)),(ft(!0),mt(Kt,null,fe(c.value,(M,A)=>(ft(),mt("div",{class:"trow",key:A},[ie(d("input",{class:"cell","onUpdate:modelValue":b=>M.name=b},null,8,Pw),[[fi,M.name]]),ie(d("input",{class:"cell","onUpdate:modelValue":b=>M.size=b},null,8,Dw),[[fi,M.size]]),ie(d("input",{class:"cell","onUpdate:modelValue":b=>M.endurance=b},null,8,Iw),[[fi,M.endurance]]),ie(d("input",{class:"cell","onUpdate:modelValue":b=>M.ip=b},null,8,Lw),[[fi,M.ip]])]))),128))]),d("div",{class:"actions"},[d("button",{class:"s-btn",onClick:v},"新增机型"),d("button",{class:"s-btn s-btn--ghost",onClick:g},"删除末行")])]),_:1})]))}},Nw=Oe(Uw,[["__scopeId","data-v-df7873de"]]),Fw={class:"grid"},Ow={class:"row"},Bw={class:"box"},kw={class:"box"},Vw={class:"box"},zw={class:"table"},Hw={__name:"TargetRecognition",setup(n){const t=Dt("10"),e=Dt("air"),i=Dt("A"),s=Dt([]);function r(){const a=Number(t.value);s.value=Array.from({length:a}).map((l,c)=>({id:`T-${String(c+1).padStart(2,"0")}`,type:e.value==="air"?"空中":"地表",errXY:(.2+Math.random()*.8).toFixed(2),errZ:(.1+Math.random()*.5).toFixed(2),errV:(.2+Math.random()*.8).toFixed(2)}))}function o(){s.value=[]}return(a,l)=>(ft(),mt("div",Fw,[zt(Re,{title:"目标识别能力展示",subtitle:"不少于 10 个目标识别能力，误差满足指标"},{default:te(()=>[d("div",Ow,[d("div",Bw,[l[4]||(l[4]=d("div",{class:"k"},"目标数量",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":l[0]||(l[0]=c=>t.value=c)},[...l[3]||(l[3]=[d("option",{value:"10"},"≥ 10",-1),d("option",{value:"12"},"12（加分）",-1)])],512),[[Se,t.value]])]),d("div",kw,[l[6]||(l[6]=d("div",{class:"k"},"识别类型",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":l[1]||(l[1]=c=>e.value=c)},[...l[5]||(l[5]=[d("option",{value:"air"},"空中目标",-1),d("option",{value:"surface"},"地表目标",-1)])],512),[[Se,e.value]])]),d("div",Vw,[l[8]||(l[8]=d("div",{class:"k"},"误差标准",-1)),ie(d("select",{class:"s-select","onUpdate:modelValue":l[2]||(l[2]=c=>i.value=c)},[...l[7]||(l[7]=[d("option",{value:"A"},"水平 ±1m / 垂直 ±0.5m",-1),d("option",{value:"B"},"水平 ±0.8m / 垂直 ±0.3m",-1)])],512),[[Se,i.value]])])]),d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:r},"生成识别结果"),d("button",{class:"s-btn",onClick:o},"重置")]),d("div",zw,[l[9]||(l[9]=d("div",{class:"thead"},[d("span",null,"目标"),d("span",null,"类型"),d("span",null,"水平误差"),d("span",null,"垂直误差"),d("span",null,"速度误差")],-1)),(ft(!0),mt(Kt,null,fe(s.value,c=>(ft(),mt("div",{class:"trow",key:c.id},[d("span",null,rt(c.id),1),d("span",null,rt(c.type),1),d("span",null,rt(c.errXY)+" m",1),d("span",null,rt(c.errZ)+" m",1),d("span",null,rt(c.errV)+" m/s",1)]))),128))])]),_:1})]))}},Gw=Oe(Hw,[["__scopeId","data-v-335493a4"]]),Ww={class:"grid"},Xw={class:"table"},$w={class:"matrix"},Yw={__name:"UsersRoles",setup(n){const t=Dt([{id:1,name:"系统管理员",role:"admin",perm:"全量权限",state:"OK"},{id:2,name:"指挥操作员",role:"operator",perm:"任务/监控",state:"OK"},{id:3,name:"审计专员",role:"auditor",perm:"审计/日志",state:"OK"}]),e=Dt([{name:"任务建议/分配",admin:"✔",operator:"✔",auditor:"—"},{name:"航迹规划",admin:"✔",operator:"✔",auditor:"—"},{name:"网络监测",admin:"✔",operator:"✔",auditor:"—"},{name:"审计留痕",admin:"✔",operator:"—",auditor:"✔"},{name:"配置管理",admin:"✔",operator:"—",auditor:"—"}]);return(i,s)=>(ft(),mt("div",Ww,[zt(Re,{title:"用户与角色权限",subtitle:"统一身份认证与权限控制"},{default:te(()=>[d("div",Xw,[s[0]||(s[0]=d("div",{class:"thead"},[d("span",null,"用户"),d("span",null,"角色"),d("span",null,"权限"),d("span",null,"状态")],-1)),(ft(!0),mt(Kt,null,fe(t.value,r=>(ft(),mt("div",{class:"trow",key:r.id},[d("span",null,rt(r.name),1),d("span",null,rt(r.role),1),d("span",null,rt(r.perm),1),d("span",{class:en(["state",r.state])},rt(r.state),3)]))),128))])]),_:1}),zt(Re,{title:"权限矩阵",subtitle:"功能 / 角色 / 操作控制"},{default:te(()=>[d("div",$w,[s[1]||(s[1]=d("div",{class:"head"},[d("span",null,"功能"),d("span",null,"管理员"),d("span",null,"操作员"),d("span",null,"审计员")],-1)),(ft(!0),mt(Kt,null,fe(e.value,r=>(ft(),mt("div",{class:"row",key:r.name},[d("span",null,rt(r.name),1),d("span",null,rt(r.admin),1),d("span",null,rt(r.operator),1),d("span",null,rt(r.auditor),1)]))),128))])]),_:1})]))}},qw=Oe(Yw,[["__scopeId","data-v-1ca93fb9"]]),Kw={class:"grid"},jw={class:"table"},Zw={class:"t"},Jw={class:"d"},Qw={__name:"Audit",setup(n){const t=Dt([{time:new Date().toLocaleString(),user:"系统管理员",event:"TASK_APPROVE",detail:"审批通过：地下水监测巡检"},{time:new Date().toLocaleString(),user:"指挥操作员",event:"FORMATION_APPLY",detail:"应用队形：V 型编队"}]);function e(){t.value.unshift({time:new Date().toLocaleString(),user:"审计专员",event:"LOG_EXPORT",detail:"导出系统日志（审计留痕）"})}function i(){t.value=[...t.value]}function s(){t.value=[]}return(r,o)=>(ft(),mt("div",Kw,[zt(Re,{title:"审计留痕",subtitle:"关键操作全链路记录"},{default:te(()=>[d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:e},"新增审计事件"),d("button",{class:"s-btn",onClick:i},"刷新"),d("button",{class:"s-btn s-btn--danger",onClick:s},"清空")]),d("div",jw,[o[0]||(o[0]=d("div",{class:"thead"},[d("span",null,"时间"),d("span",null,"操作者"),d("span",null,"事件"),d("span",null,"详情")],-1)),(ft(!0),mt(Kt,null,fe(t.value,(a,l)=>(ft(),mt("div",{class:"trow",key:l},[d("span",Zw,rt(a.time),1),d("span",null,rt(a.user),1),d("span",null,rt(a.event),1),d("span",Jw,rt(a.detail),1)]))),128))])]),_:1})]))}},tC=Oe(Qw,[["__scopeId","data-v-f0d1edda"]]),eC={class:"grid"},nC={class:"table"},iC={class:"t"},sC={class:"msg"},rC={__name:"SystemLogs",setup(n){const t=Dt([{time:new Date().toLocaleString(),level:"INFO",module:"TASK",msg:"生成任务建议与时间估算"},{time:new Date().toLocaleString(),level:"AUDIT",module:"SEC",msg:"审批通过：地下水监测巡检"}]);function e(){t.value.unshift({time:new Date().toLocaleString(),level:"INFO",module:"NET",msg:"链路探测完成：低时延/中时延/高时延"})}function i(){t.value.unshift({time:new Date().toLocaleString(),level:"AUDIT",module:"LOG",msg:"日志导出：system-logs.csv"})}function s(){t.value=[]}return(r,o)=>(ft(),mt("div",eC,[zt(Re,{title:"系统日志管理",subtitle:"全链路日志 / 可追溯 / 可导出"},{default:te(()=>[d("div",{class:"actions"},[d("button",{class:"s-btn s-btn--primary",onClick:e},"生成模拟日志"),d("button",{class:"s-btn",onClick:i},"导出日志"),d("button",{class:"s-btn s-btn--danger",onClick:s},"清空")]),d("div",nC,[o[0]||(o[0]=d("div",{class:"thead"},[d("span",null,"时间"),d("span",null,"级别"),d("span",null,"模块"),d("span",null,"事件")],-1)),(ft(!0),mt(Kt,null,fe(t.value,(a,l)=>(ft(),mt("div",{class:"trow",key:l},[d("span",iC,rt(a.time),1),d("span",{class:en(["lvl",a.level])},rt(a.level),3),d("span",null,rt(a.module),1),d("span",sC,rt(a.msg),1)]))),128))])]),_:1})]))}},oC=Oe(rC,[["__scopeId","data-v-a6ed9b8f"]]),aC=[{path:"/",redirect:"/app/command"},{path:"/auth",component:Uv,children:[{path:"login",name:"Login",component:d0}]},{path:"/app",component:e0,children:[{path:"command",name:"CommandCenter",component:ix},{path:"mission/task",name:"TaskGenerator",component:Ix},{path:"mission/planner",name:"Planner",component:iS},{path:"mission/loop",name:"ClosedLoopLab",component:bS},{path:"network/monitor",name:"NetworkMonitor",component:XS},{path:"network/resilience",name:"MeshResilience",component:pM},{path:"nodes/behavior",name:"NodeBehavior",component:wM},{path:"nodes/formations",name:"FormationLibrary",component:VM},{path:"viz/3d",name:"ThreeDSituation",component:ZR},{path:"standards/unified",name:"UnifiedDataStandard",component:lw},{path:"flighttest/scenario",name:"FlightTestScenario",component:Nw},{path:"recognition/targets",name:"TargetRecognition",component:Gw},{path:"security/users",name:"UsersRoles",component:qw},{path:"security/audit",name:"Audit",component:tC},{path:"logs/system",name:"SystemLogs",component:oC}]},{path:"/:pathMatch(.*)*",redirect:"/app/command"}],kp=Pv({history:lv(),routes:aC,scrollBehavior(){return{left:0,top:0}}});kp.beforeEach(n=>{const t=qc(),e=n.path.startsWith("/auth");if(!e&&!t.isAuthed)return"/auth/login";if(e&&t.isAuthed)return"/app/command"});fg(Eg).use(mg()).use(kp).mount("#app");
