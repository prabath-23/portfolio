(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const it={},Tr=[],Bn=()=>{},Bf=()=>!1,Po=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),El=n=>n.startsWith("onUpdate:"),bt=Object.assign,bl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Jd=Object.prototype.hasOwnProperty,et=(n,e)=>Jd.call(n,e),Ie=Array.isArray,Ar=n=>Ms(n)==="[object Map]",zf=n=>Ms(n)==="[object Set]",rc=n=>Ms(n)==="[object Date]",Fe=n=>typeof n=="function",St=n=>typeof n=="string",Tn=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",Hf=n=>(tt(n)||Fe(n))&&Fe(n.then)&&Fe(n.catch),Gf=Object.prototype.toString,Ms=n=>Gf.call(n),Qd=n=>Ms(n).slice(8,-1),Vf=n=>Ms(n)==="[object Object]",Tl=n=>St(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,is=yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ep=/-\w/g,jt=Lo(n=>n.replace(ep,e=>e.slice(1).toUpperCase())),tp=/\B([A-Z])/g,er=Lo(n=>n.replace(tp,"-$1").toLowerCase()),Do=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Zo=Lo(n=>n?`on${Do(n)}`:""),On=(n,e)=>!Object.is(n,e),oo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},kf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Al=n=>{const e=parseFloat(n);return isNaN(e)?n:e},np=n=>{const e=St(n)?Number(n):NaN;return isNaN(e)?n:e};let sc;const Io=()=>sc||(sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qt(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=St(i)?op(i):Qt(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(n)||tt(n))return n}const ip=/;(?![^(]*\))/g,rp=/:([^]+)/,sp=/\/\*[^]*?\*\//g;function op(n){const e={};return n.replace(sp,"").split(ip).forEach(t=>{if(t){const i=t.split(rp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(n){let e="";if(St(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=Dt(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ap="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lp=yl(ap);function Wf(n){return!!n||n===""}function cp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=wl(n[i],e[i]);return t}function wl(n,e){if(n===e)return!0;let t=rc(n),i=rc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Tn(n),i=Tn(e),t||i)return n===e;if(t=Ie(n),i=Ie(e),t||i)return t&&i?cp(n,e):!1;if(t=tt(n),i=tt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!wl(n[a],e[a]))return!1}}return String(n)===String(e)}const Xf=n=>!!(n&&n.__v_isRef===!0),gt=n=>St(n)?n:n==null?"":Ie(n)||tt(n)&&(n.toString===Gf||!Fe(n.toString))?Xf(n)?gt(n.value):JSON.stringify(n,qf,2):String(n),qf=(n,e)=>Xf(e)?qf(n,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Jo(i,s)+" =>"]=r,t),{})}:zf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Jo(t))}:Tn(e)?Jo(e):tt(e)&&!Ie(e)&&!Vf(e)?String(e):e,Jo=(n,e="")=>{var t;return Tn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class up{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){++this._on===1&&(this.prevScope=Kt,Kt=this)}off(){this._on>0&&--this._on===0&&(Kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function fp(){return Kt}let at;const Qo=new WeakSet;class jf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qo.has(this)&&(Qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$f(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oc(this),Kf(this);const e=at,t=En;at=this,En=!0;try{return this.fn()}finally{Zf(this),at=e,En=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pl(e);this.deps=this.depsTail=void 0,oc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){$a(this)&&this.run()}get dirty(){return $a(this)}}let Yf=0,rs,ss;function $f(n,e=!1){if(n.flags|=8,e){n.next=ss,ss=n;return}n.next=rs,rs=n}function Rl(){Yf++}function Cl(){if(--Yf>0)return;if(ss){let e=ss;for(ss=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;rs;){let e=rs;for(rs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Kf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Zf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Pl(i),hp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function $a(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Jf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===us)||(n.globalVersion=us,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!$a(n))))return;n.flags|=2;const e=n.dep,t=at,i=En;at=n,En=!0;try{Kf(n);const r=n.fn(n._value);(e.version===0||On(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{at=t,En=i,Zf(n),n.flags&=-3}}function Pl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Pl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function hp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let En=!0;const Qf=[];function si(){Qf.push(En),En=!1}function oi(){const n=Qf.pop();En=n===void 0?!0:n}function oc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=at;at=void 0;try{e()}finally{at=t}}}let us=0;class dp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ll{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!at||!En||at===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==at)t=this.activeLink=new dp(at,this),at.deps?(t.prevDep=at.depsTail,at.depsTail.nextDep=t,at.depsTail=t):at.deps=at.depsTail=t,eh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=at.depsTail,t.nextDep=void 0,at.depsTail.nextDep=t,at.depsTail=t,at.deps===t&&(at.deps=i)}return t}trigger(e){this.version++,us++,this.notify(e)}notify(e){Rl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Cl()}}}function eh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)eh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ka=new WeakMap,$i=Symbol(""),Za=Symbol(""),fs=Symbol("");function Ft(n,e,t){if(En&&at){let i=Ka.get(n);i||Ka.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Ll),r.map=i,r.key=t),r.track()}}function Qn(n,e,t,i,r,s){const a=Ka.get(n);if(!a){us++;return}const o=l=>{l&&l.trigger()};if(Rl(),e==="clear")a.forEach(o);else{const l=Ie(n),u=l&&Tl(t);if(l&&t==="length"){const c=Number(i);a.forEach((f,h)=>{(h==="length"||h===fs||!Tn(h)&&h>=c)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(fs)),e){case"add":l?u&&o(a.get("length")):(o(a.get($i)),Ar(n)&&o(a.get(Za)));break;case"delete":l||(o(a.get($i)),Ar(n)&&o(a.get(Za)));break;case"set":Ar(n)&&o(a.get($i));break}}Cl()}function ir(n){const e=Je(n);return e===n?e:(Ft(e,"iterate",fs),dn(n)?e:e.map(An))}function Uo(n){return Ft(n=Je(n),"iterate",fs),n}function In(n,e){return ai(n)?Ir(Ki(n)?An(e):e):An(e)}const pp={__proto__:null,[Symbol.iterator](){return ea(this,Symbol.iterator,n=>In(this,n))},concat(...n){return ir(this).concat(...n.map(e=>Ie(e)?ir(e):e))},entries(){return ea(this,"entries",n=>(n[1]=In(this,n[1]),n))},every(n,e){return Vn(this,"every",n,e,void 0,arguments)},filter(n,e){return Vn(this,"filter",n,e,t=>t.map(i=>In(this,i)),arguments)},find(n,e){return Vn(this,"find",n,e,t=>In(this,t),arguments)},findIndex(n,e){return Vn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Vn(this,"findLast",n,e,t=>In(this,t),arguments)},findLastIndex(n,e){return Vn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Vn(this,"forEach",n,e,void 0,arguments)},includes(...n){return ta(this,"includes",n)},indexOf(...n){return ta(this,"indexOf",n)},join(n){return ir(this).join(n)},lastIndexOf(...n){return ta(this,"lastIndexOf",n)},map(n,e){return Vn(this,"map",n,e,void 0,arguments)},pop(){return Xr(this,"pop")},push(...n){return Xr(this,"push",n)},reduce(n,...e){return ac(this,"reduce",n,e)},reduceRight(n,...e){return ac(this,"reduceRight",n,e)},shift(){return Xr(this,"shift")},some(n,e){return Vn(this,"some",n,e,void 0,arguments)},splice(...n){return Xr(this,"splice",n)},toReversed(){return ir(this).toReversed()},toSorted(n){return ir(this).toSorted(n)},toSpliced(...n){return ir(this).toSpliced(...n)},unshift(...n){return Xr(this,"unshift",n)},values(){return ea(this,"values",n=>In(this,n))}};function ea(n,e,t){const i=Uo(n),r=i[e]();return i!==n&&!dn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const mp=Array.prototype;function Vn(n,e,t,i,r,s){const a=Uo(n),o=a!==n&&!dn(n),l=a[e];if(l!==mp[e]){const f=l.apply(n,s);return o?An(f):f}let u=t;a!==n&&(o?u=function(f,h){return t.call(this,In(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(a,u,i);return o&&r?r(c):c}function ac(n,e,t,i){const r=Uo(n),s=r!==n&&!dn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(u,c,f){return o&&(o=!1,u=In(n,u)),t.call(this,u,In(n,c),f,n)}):t.length>3&&(a=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](a,...i);return o?In(n,l):l}function ta(n,e,t){const i=Je(n);Ft(i,"iterate",fs);const r=i[e](...t);return(r===-1||r===!1)&&Ul(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function Xr(n,e,t=[]){si(),Rl();const i=Je(n)[e].apply(n,t);return Cl(),oi(),i}const gp=yl("__proto__,__v_isRef,__isVue"),th=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Tn));function _p(n){Tn(n)||(n=String(n));const e=Je(this);return Ft(e,"has",n),e.hasOwnProperty(n)}class nh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?wp:oh:s?sh:rh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ie(e);if(!r){let l;if(a&&(l=pp[t]))return l;if(t==="hasOwnProperty")return _p}const o=Reflect.get(e,t,Ht(e)?e:i);if((Tn(t)?th.has(t):gp(t))||(r||Ft(e,"get",t),s))return o;if(Ht(o)){const l=a&&Tl(t)?o:o.value;return r&&tt(l)?Qa(l):l}return tt(o)?r?Qa(o):Hr(o):o}}class ih extends nh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Ie(e)&&Tl(t);if(!this._isShallow){const u=ai(s);if(!dn(i)&&!ai(i)&&(s=Je(s),i=Je(i)),!a&&Ht(s)&&!Ht(i))return u||(s.value=i),!0}const o=a?Number(t)<e.length:et(e,t),l=Reflect.set(e,t,i,Ht(e)?e:r);return e===Je(r)&&(o?On(i,s)&&Qn(e,"set",t,i):Qn(e,"add",t,i)),l}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Qn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Tn(t)||!th.has(t))&&Ft(e,"has",t),i}ownKeys(e){return Ft(e,"iterate",Ie(e)?"length":$i),Reflect.ownKeys(e)}}class vp extends nh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const xp=new ih,Sp=new vp,Mp=new ih(!0);const Ja=n=>n,Ds=n=>Reflect.getPrototypeOf(n);function yp(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),a=Ar(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=r[n](...i),c=t?Ja:e?Ir:An;return!e&&Ft(s,"iterate",l?Za:$i),bt(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:o?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function Is(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Ep(n,e){const t={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);n||(On(r,o)&&Ft(a,"get",r),Ft(a,"get",o));const{has:l}=Ds(a),u=e?Ja:n?Ir:An;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ft(Je(r),"iterate",$i),r.size},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return n||(On(r,o)&&Ft(a,"has",r),Ft(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),u=e?Ja:n?Ir:An;return!n&&Ft(l,"iterate",$i),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return bt(t,n?{add:Is("add"),set:Is("set"),delete:Is("delete"),clear:Is("clear")}:{add(r){const s=Je(this),a=Ds(s),o=Je(r),l=!e&&!dn(r)&&!ai(r)?o:r;return a.has.call(s,l)||On(r,l)&&a.has.call(s,r)||On(o,l)&&a.has.call(s,o)||(s.add(l),Qn(s,"add",l,l)),this},set(r,s){!e&&!dn(s)&&!ai(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=Ds(a);let u=o.call(a,r);u||(r=Je(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?On(s,c)&&Qn(a,"set",r,s):Qn(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=Ds(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&Qn(s,"delete",r,void 0),u},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&Qn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=yp(r,n,e)}),t}function Dl(n,e){const t=Ep(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const bp={get:Dl(!1,!1)},Tp={get:Dl(!1,!0)},Ap={get:Dl(!0,!1)};const rh=new WeakMap,sh=new WeakMap,oh=new WeakMap,wp=new WeakMap;function Rp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cp(n){return n.__v_skip||!Object.isExtensible(n)?0:Rp(Qd(n))}function Hr(n){return ai(n)?n:Il(n,!1,xp,bp,rh)}function ah(n){return Il(n,!1,Mp,Tp,sh)}function Qa(n){return Il(n,!0,Sp,Ap,oh)}function Il(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Cp(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function Ki(n){return ai(n)?Ki(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function dn(n){return!!(n&&n.__v_isShallow)}function Ul(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Pp(n){return!et(n,"__v_skip")&&Object.isExtensible(n)&&kf(n,"__v_skip",!0),n}const An=n=>tt(n)?Hr(n):n,Ir=n=>tt(n)?Qa(n):n;function Ht(n){return n?n.__v_isRef===!0:!1}function xt(n){return lh(n,!1)}function Lp(n){return lh(n,!0)}function lh(n,e){return Ht(n)?n:new Dp(n,e)}class Dp{constructor(e,t){this.dep=new Ll,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:An(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||dn(e)||ai(e);e=i?e:Je(e),On(e,t)&&(this._rawValue=e,this._value=i?e:An(e),this.dep.trigger())}}function wr(n){return Ht(n)?n.value:n}const Ip={get:(n,e,t)=>e==="__v_raw"?n:wr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ht(r)&&!Ht(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ch(n){return Ki(n)?n:new Proxy(n,Ip)}class Up{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ll(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=us-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&at!==this)return $f(this,!0),!0}get value(){const e=this.dep.track();return Jf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Np(n,e,t=!1){let i,r;return Fe(n)?i=n:(i=n.get,r=n.set),new Up(i,r,t)}const Us={},mo=new WeakMap;let Hi;function Op(n,e=!1,t=Hi){if(t){let i=mo.get(t);i||mo.set(t,i=[]),i.push(n)}}function Fp(n,e,t=it){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,u=b=>r?b:dn(b)||r===!1||r===0?ei(b,1):ei(b);let c,f,h,p,_=!1,S=!1;if(Ht(n)?(f=()=>n.value,_=dn(n)):Ki(n)?(f=()=>u(n),_=!0):Ie(n)?(S=!0,_=n.some(b=>Ki(b)||dn(b)),f=()=>n.map(b=>{if(Ht(b))return b.value;if(Ki(b))return u(b);if(Fe(b))return l?l(b,2):b()})):Fe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){si();try{h()}finally{oi()}}const b=Hi;Hi=c;try{return l?l(n,3,[p]):n(p)}finally{Hi=b}}:f=Bn,e&&r){const b=f,P=r===!0?1/0:r;f=()=>ei(b(),P)}const m=fp(),d=()=>{c.stop(),m&&m.active&&bl(m.effects,c)};if(s&&e){const b=e;e=(...P)=>{b(...P),d()}}let y=S?new Array(n.length).fill(Us):Us;const v=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(e){const P=c.run();if(r||_||(S?P.some((R,w)=>On(R,y[w])):On(P,y))){h&&h();const R=Hi;Hi=c;try{const w=[P,y===Us?void 0:S&&y[0]===Us?[]:y,p];y=P,l?l(e,3,w):e(...w)}finally{Hi=R}}}else c.run()};return o&&o(v),c=new jf(f),c.scheduler=a?()=>a(v,!1):v,p=b=>Op(b,!1,c),h=c.onStop=()=>{const b=mo.get(c);if(b){if(l)l(b,4);else for(const P of b)P();mo.delete(c)}},e?i?v(!0):y=c.run():a?a(v.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function ei(n,e=1/0,t){if(e<=0||!tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ht(n))ei(n.value,e,t);else if(Ie(n))for(let i=0;i<n.length;i++)ei(n[i],e,t);else if(zf(n)||Ar(n))n.forEach(i=>{ei(i,e,t)});else if(Vf(n)){for(const i in n)ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ei(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ys(n,e,t,i){try{return i?n(...i):n()}catch(r){No(r,e,t)}}function wn(n,e,t,i){if(Fe(n)){const r=ys(n,e,t,i);return r&&Hf(r)&&r.catch(s=>{No(s,e,t)}),r}if(Ie(n)){const r=[];for(let s=0;s<n.length;s++)r.push(wn(n[s],e,t,i));return r}}function No(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||it;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(s){si(),ys(s,null,10,[n,l,u]),oi();return}}Bp(n,t,r,i,a)}function Bp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const qt=[];let Ln=-1;const Rr=[];let _i=null,Sr=0;const uh=Promise.resolve();let go=null;function Nl(n){const e=go||uh;return n?e.then(this?n.bind(this):n):e}function zp(n){let e=Ln+1,t=qt.length;for(;e<t;){const i=e+t>>>1,r=qt[i],s=hs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ol(n){if(!(n.flags&1)){const e=hs(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=hs(t)?qt.push(n):qt.splice(zp(e),0,n),n.flags|=1,fh()}}function fh(){go||(go=uh.then(dh))}function Hp(n){Ie(n)?Rr.push(...n):_i&&n.id===-1?_i.splice(Sr+1,0,n):n.flags&1||(Rr.push(n),n.flags|=1),fh()}function lc(n,e,t=Ln+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function hh(n){if(Rr.length){const e=[...new Set(Rr)].sort((t,i)=>hs(t)-hs(i));if(Rr.length=0,_i){_i.push(...e);return}for(_i=e,Sr=0;Sr<_i.length;Sr++){const t=_i[Sr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}_i=null,Sr=0}}const hs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function dh(n){try{for(Ln=0;Ln<qt.length;Ln++){const e=qt[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ys(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<qt.length;Ln++){const e=qt[Ln];e&&(e.flags&=-2)}Ln=-1,qt.length=0,hh(),go=null,(qt.length||Rr.length)&&dh()}}let It=null,ph=null;function _o(n){const e=It;return It=n,ph=n&&n.type.__scopeId||null,e}function pt(n,e=It,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&So(-1);const s=_o(e);let a;try{a=n(...r)}finally{_o(s),i._d&&So(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Gp(n,e){if(It===null)return n;const t=Go(It),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=it]=e[r];s&&(Fe(s)&&(s={mounted:s,updated:s}),s.deep&&ei(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Pi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(si(),wn(l,t,8,[n.el,o,n,e]),oi())}}function ao(n,e){if(zt){let t=zt.provides;const i=zt.parent&&zt.parent.provides;i===t&&(t=zt.provides=Object.create(i)),t[n]=e}}function zn(n,e,t=!1){const i=qh();if(i||Pr){let r=Pr?Pr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i&&i.proxy):e}}const Vp=Symbol.for("v-scx"),kp=()=>zn(Vp);function Wp(n,e){return Fl(n,null,e)}function lo(n,e,t){return Fl(n,e,t)}function Fl(n,e,t=it){const{immediate:i,deep:r,flush:s,once:a}=t,o=bt({},t),l=e&&i||!e&&s!=="post";let u;if(_s){if(s==="sync"){const p=kp();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Bn,p.resume=Bn,p.pause=Bn,p}}const c=zt;o.call=(p,_,S)=>wn(p,c,_,S);let f=!1;s==="post"?o.scheduler=p=>{$t(p,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():Ol(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=Fp(n,e,o);return _s&&(u?u.push(h):l&&h()),h}function Xp(n,e,t){const i=this.proxy,r=St(n)?n.includes(".")?mh(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const a=Es(this),o=Fl(r,s.bind(i),t);return a(),o}function mh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const qp=Symbol("_vte"),gh=n=>n.__isTeleport,Dn=Symbol("_leaveCb"),qr=Symbol("_enterCb");function jp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gr(()=>{n.isMounted=!0}),tr(()=>{n.isUnmounting=!0}),n}const cn=[Function,Array],_h={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:cn,onEnter:cn,onAfterEnter:cn,onEnterCancelled:cn,onBeforeLeave:cn,onLeave:cn,onAfterLeave:cn,onLeaveCancelled:cn,onBeforeAppear:cn,onAppear:cn,onAfterAppear:cn,onAppearCancelled:cn},vh=n=>{const e=n.subTree;return e.component?vh(e.component):e},Yp={name:"BaseTransition",props:_h,setup(n,{slots:e}){const t=qh(),i=jp();return()=>{const r=e.default&&Mh(e.default(),!0);if(!r||!r.length)return;const s=xh(r),a=Je(n),{mode:o}=a;if(i.isLeaving)return na(s);const l=cc(s);if(!l)return na(s);let u=el(l,a,i,t,f=>u=f);l.type!==Bt&&ds(l,u);let c=t.subTree&&cc(t.subTree);if(c&&c.type!==Bt&&!ki(c,l)&&vh(t).type!==Bt){let f=el(c,a,i,t);if(ds(c,f),o==="out-in"&&l.type!==Bt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},na(s);o==="in-out"&&l.type!==Bt?f.delayLeave=(h,p,_)=>{const S=Sh(i,c);S[String(c.key)]=c,h[Dn]=()=>{p(),h[Dn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function xh(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Bt){e=t;break}}return e}const $p=Yp;function Sh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function el(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:S,onBeforeAppear:m,onAppear:d,onAfterAppear:y,onAppearCancelled:v}=e,b=String(n.key),P=Sh(t,n),R=(G,M)=>{G&&wn(G,i,9,M)},w=(G,M)=>{const A=M[1];R(G,M),Ie(G)?G.every(B=>B.length<=1)&&A():G.length<=1&&A()},F={mode:a,persisted:o,beforeEnter(G){let M=l;if(!t.isMounted)if(s)M=m||l;else return;G[Dn]&&G[Dn](!0);const A=P[b];A&&ki(n,A)&&A.el[Dn]&&A.el[Dn](),R(M,[G])},enter(G){if(P[b]===n)return;let M=u,A=c,B=f;if(!t.isMounted)if(s)M=d||u,A=y||c,B=v||f;else return;let K=!1;G[qr]=W=>{K||(K=!0,W?R(B,[G]):R(A,[G]),F.delayedLeave&&F.delayedLeave(),G[qr]=void 0)};const I=G[qr].bind(null,!1);M?w(M,[G,I]):I()},leave(G,M){const A=String(n.key);if(G[qr]&&G[qr](!0),t.isUnmounting)return M();R(h,[G]);let B=!1;G[Dn]=I=>{B||(B=!0,M(),I?R(S,[G]):R(_,[G]),G[Dn]=void 0,P[A]===n&&delete P[A])};const K=G[Dn].bind(null,!1);P[A]=n,p?w(p,[G,K]):K()},clone(G){const M=el(G,e,t,i,r);return r&&r(M),M}};return F}function na(n){if(Oo(n))return n=bi(n),n.children=null,n}function cc(n){if(!Oo(n))return gh(n.type)&&n.children?xh(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Fe(t.default))return t.default()}}function ds(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ds(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Mh(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===_t?(a.patchFlag&128&&r++,i=i.concat(Mh(a.children,e,o))):(e||a.type!==Bt)&&i.push(o!=null?bi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function yh(n,e){return Fe(n)?bt({name:n.name},e,{setup:n}):n}function Eh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function uc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const vo=new WeakMap;function os(n,e,t,i,r=!1){if(Ie(n)){n.forEach((S,m)=>os(S,e&&(Ie(e)?e[m]:e),t,i,r));return}if(Cr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&os(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Go(i.component):i.el,a=r?null:s,{i:o,r:l}=n,u=e&&e.r,c=o.refs===it?o.refs={}:o.refs,f=o.setupState,h=Je(f),p=f===it?Bf:S=>uc(c,S)?!1:et(h,S),_=(S,m)=>!(m&&uc(c,m));if(u!=null&&u!==l){if(fc(e),St(u))c[u]=null,p(u)&&(f[u]=null);else if(Ht(u)){const S=e;_(u,S.k)&&(u.value=null),S.k&&(c[S.k]=null)}}if(Fe(l))ys(l,o,12,[a,c]);else{const S=St(l),m=Ht(l);if(S||m){const d=()=>{if(n.f){const y=S?p(l)?f[l]:c[l]:_()||!n.k?l.value:c[n.k];if(r)Ie(y)&&bl(y,s);else if(Ie(y))y.includes(s)||y.push(s);else if(S)c[l]=[s],p(l)&&(f[l]=c[l]);else{const v=[s];_(l,n.k)&&(l.value=v),n.k&&(c[n.k]=v)}}else S?(c[l]=a,p(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(c[n.k]=a))};if(a){const y=()=>{d(),vo.delete(n)};y.id=-1,vo.set(n,y),$t(y,t)}else fc(n),d()}}}function fc(n){const e=vo.get(n);e&&(e.flags|=8,vo.delete(n))}Io().requestIdleCallback;Io().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,Oo=n=>n.type.__isKeepAlive;function Kp(n,e){bh(n,"a",e)}function Zp(n,e){bh(n,"da",e)}function bh(n,e,t=zt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Fo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Oo(r.parent.vnode)&&Jp(i,e,t,r),r=r.parent}}function Jp(n,e,t,i){const r=Fo(e,n,i,!0);Th(()=>{bl(i[e],r)},t)}function Fo(n,e,t=zt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{si();const o=Es(t),l=wn(e,t,n,a);return o(),oi(),l});return i?r.unshift(s):r.push(s),s}}const li=n=>(e,t=zt)=>{(!_s||n==="sp")&&Fo(n,(...i)=>e(...i),t)},Qp=li("bm"),Gr=li("m"),em=li("bu"),tm=li("u"),tr=li("bum"),Th=li("um"),nm=li("sp"),im=li("rtg"),rm=li("rtc");function sm(n,e=zt){Fo("ec",n,e)}const om="components";function Bo(n,e){return lm(om,n,!0,e)||n}const am=Symbol.for("v-ndc");function lm(n,e,t=!0,i=!1){const r=It||zt;if(r){const s=r.type;{const o=jm(s,!1);if(o&&(o===e||o===jt(e)||o===Do(jt(e))))return s}const a=hc(r[n]||s[n],e)||hc(r.appContext[n],e);return!a&&i?s:a}}function hc(n,e){return n&&(n[e]||n[jt(e)]||n[Do(jt(e))])}function ii(n,e,t,i){let r;const s=t,a=Ie(n);if(a||St(n)){const o=a&&Ki(n);let l=!1,u=!1;o&&(l=!dn(n),u=ai(n),n=Uo(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?Ir(An(n[c])):An(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}function cm(n,e,t={},i,r){if(It.ce||It.parent&&Cr(It.parent)&&It.parent.ce){const u=Object.keys(t).length>0;return qe(),ms(_t,null,[Ne("slot",t,i)],u?-2:64)}let s=n[e];s&&s._c&&(s._d=!1),qe();const a=s&&Ah(s(t)),o=t.key||a&&a.key,l=ms(_t,{key:(o&&!Tn(o)?o:`_${e}`)+(!a&&i?"_fb":"")},a||[],a&&n._===1?64:-2);return s&&s._c&&(s._d=!0),l}function Ah(n){return n.some(e=>gs(e)?!(e.type===Bt||e.type===_t&&!Ah(e.children)):!0)?n:null}const tl=n=>n?jh(n)?Go(n):tl(n.parent):null,as=bt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>tl(n.parent),$root:n=>tl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Rh(n),$forceUpdate:n=>n.f||(n.f=()=>{Ol(n.update)}),$nextTick:n=>n.n||(n.n=Nl.bind(n.proxy)),$watch:n=>Xp.bind(n)}),ia=(n,e)=>n!==it&&!n.__isScriptSetup&&et(n,e),um={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ia(i,e))return a[e]=1,i[e];if(r!==it&&et(r,e))return a[e]=2,r[e];if(et(s,e))return a[e]=3,s[e];if(t!==it&&et(t,e))return a[e]=4,t[e];nl&&(a[e]=0)}}const u=as[e];let c,f;if(u)return e==="$attrs"&&Ft(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(t!==it&&et(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,et(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ia(r,e)?(r[e]=t,!0):i!==it&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==it&&o[0]!=="$"&&et(n,o)||ia(e,o)||et(s,o)||et(i,o)||et(as,o)||et(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function dc(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let nl=!0;function fm(n){const e=Rh(n),t=n.proxy,i=n.ctx;nl=!1,e.beforeCreate&&pc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:v,unmounted:b,render:P,renderTracked:R,renderTriggered:w,errorCaptured:F,serverPrefetch:G,expose:M,inheritAttrs:A,components:B,directives:K,filters:I}=e;if(u&&hm(u,i,null),a)for(const j in a){const N=a[j];Fe(N)&&(i[j]=N.bind(t))}if(r){const j=r.call(t,t);tt(j)&&(n.data=Hr(j))}if(nl=!0,s)for(const j in s){const N=s[j],ne=Fe(N)?N.bind(t,t):Fe(N.get)?N.get.bind(t,t):Bn,ce=!Fe(N)&&Fe(N.set)?N.set.bind(t):Bn,he=yt({get:ne,set:ce});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>he.value,set:_e=>he.value=_e})}if(o)for(const j in o)wh(o[j],i,t,j);if(l){const j=Fe(l)?l.call(t):l;Reflect.ownKeys(j).forEach(N=>{ao(N,j[N])})}c&&pc(c,n,"c");function L(j,N){Ie(N)?N.forEach(ne=>j(ne.bind(t))):N&&j(N.bind(t))}if(L(Qp,f),L(Gr,h),L(em,p),L(tm,_),L(Kp,S),L(Zp,m),L(sm,F),L(rm,R),L(im,w),L(tr,y),L(Th,b),L(nm,G),Ie(M))if(M.length){const j=n.exposed||(n.exposed={});M.forEach(N=>{Object.defineProperty(j,N,{get:()=>t[N],set:ne=>t[N]=ne,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===Bn&&(n.render=P),A!=null&&(n.inheritAttrs=A),B&&(n.components=B),K&&(n.directives=K),G&&Eh(n)}function hm(n,e,t=Bn){Ie(n)&&(n=il(n));for(const i in n){const r=n[i];let s;tt(r)?"default"in r?s=zn(r.from||i,r.default,!0):s=zn(r.from||i):s=zn(r),Ht(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function pc(n,e,t){wn(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function wh(n,e,t,i){let r=i.includes(".")?mh(t,i):()=>t[i];if(St(n)){const s=e[n];Fe(s)&&lo(r,s)}else if(Fe(n))lo(r,n.bind(t));else if(tt(n))if(Ie(n))n.forEach(s=>wh(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&lo(r,s,n)}}function Rh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>xo(l,u,a,!0)),xo(l,e,a)),tt(e)&&s.set(e,l),l}function xo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&xo(n,s,t,!0),r&&r.forEach(a=>xo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=dm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const dm={data:mc,props:gc,emits:gc,methods:ts,computed:ts,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:ts,directives:ts,watch:mm,provide:mc,inject:pm};function mc(n,e){return e?n?function(){return bt(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function pm(n,e){return ts(il(n),il(e))}function il(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Vt(n,e){return n?[...new Set([].concat(n,e))]:e}function ts(n,e){return n?bt(Object.create(null),n,e):e}function gc(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:bt(Object.create(null),dc(n),dc(e??{})):e}function mm(n,e){if(!n)return e;if(!e)return n;const t=bt(Object.create(null),n);for(const i in e)t[i]=Vt(n[i],e[i]);return t}function Ch(){return{app:null,config:{isNativeTag:Bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gm=0;function _m(n,e){return function(i,r=null){Fe(i)||(i=bt({},i)),r!=null&&!tt(r)&&(r=null);const s=Ch(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:gm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:$m,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&Fe(c.install)?(a.add(c),c.install(u,...f)):Fe(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const p=u._ceVNode||Ne(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,c,h),l=!0,u._container=c,c.__vue_app__=u,Go(p.component)}},onUnmount(c){o.push(c)},unmount(){l&&(wn(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Pr;Pr=u;try{return c()}finally{Pr=f}}};return u}}let Pr=null;const vm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${jt(e)}Modifiers`]||n[`${er(e)}Modifiers`];function xm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),a=s&&vm(i,e.slice(7));a&&(a.trim&&(r=t.map(c=>St(c)?c.trim():c)),a.number&&(r=t.map(Al)));let o,l=i[o=Zo(e)]||i[o=Zo(jt(e))];!l&&s&&(l=i[o=Zo(er(e))]),l&&wn(l,n,6,r);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,wn(u,n,6,r)}}const Sm=new WeakMap;function Ph(n,e,t=!1){const i=t?Sm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Fe(n)){const l=u=>{const c=Ph(u,e,!0);c&&(o=!0,bt(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(tt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>a[l]=null):bt(a,s),tt(n)&&i.set(n,a),a)}function zo(n,e){return!n||!Po(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,er(e))||et(n,e))}function _c(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:h,setupState:p,ctx:_,inheritAttrs:S}=n,m=_o(n);let d,y;try{if(t.shapeFlag&4){const b=r||i,P=b;d=Un(u.call(P,b,c,f,p,h,_)),y=o}else{const b=e;d=Un(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),y=e.props?o:Mm(o)}}catch(b){ls.length=0,No(b,n,1),d=Ne(Bt)}let v=d;if(y&&S!==!1){const b=Object.keys(y),{shapeFlag:P}=v;b.length&&P&7&&(s&&b.some(El)&&(y=ym(y,s)),v=bi(v,y,!1,!0))}return t.dirs&&(v=bi(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&ds(v,t.transition),d=v,_o(m),d}const Mm=n=>{let e;for(const t in n)(t==="class"||t==="style"||Po(t))&&((e||(e={}))[t]=n[t]);return e},ym=(n,e)=>{const t={};for(const i in n)(!El(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Em(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?vc(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(Lh(a,i,h)&&!zo(u,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?vc(i,a,u):!0:!!a;return!1}function vc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Lh(e,n,s)&&!zo(t,s))return!0}return!1}function Lh(n,e,t){const i=n[t],r=e[t];return t==="style"&&tt(i)&&tt(r)?!wl(i,r):i!==r}function bm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Dh={},Ih=()=>Object.create(Dh),Uh=n=>Object.getPrototypeOf(n)===Dh;function Tm(n,e,t,i=!1){const r={},s=Ih();n.propsDefaults=Object.create(null),Nh(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:ah(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Am(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Je(r),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(zo(n.emitsOptions,h))continue;const p=e[h];if(l)if(et(s,h))p!==s[h]&&(s[h]=p,u=!0);else{const _=jt(h);r[_]=rl(l,o,_,p,n,!1)}else p!==s[h]&&(s[h]=p,u=!0)}}}else{Nh(n,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!et(e,f)&&((c=er(f))===f||!et(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=rl(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!et(e,f))&&(delete s[f],u=!0)}u&&Qn(n.attrs,"set","")}function Nh(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(is(l))continue;const u=e[l];let c;r&&et(r,c=jt(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:zo(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=Je(t),u=o||it;for(let c=0;c<s.length;c++){const f=s[c];t[f]=rl(r,l,f,u[f],n,!et(u,f))}}return a}function rl(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=et(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Fe(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=Es(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===er(t))&&(i=!0))}return i}const wm=new WeakMap;function Oh(n,e,t=!1){const i=t?wm:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Fe(n)){const c=f=>{l=!0;const[h,p]=Oh(f,e,!0);bt(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return tt(n)&&i.set(n,Tr),Tr;if(Ie(s))for(let c=0;c<s.length;c++){const f=jt(s[c]);xc(f)&&(a[f]=it)}else if(s)for(const c in s){const f=jt(c);if(xc(f)){const h=s[c],p=a[f]=Ie(h)||Fe(h)?{type:h}:bt({},h),_=p.type;let S=!1,m=!0;if(Ie(_))for(let d=0;d<_.length;++d){const y=_[d],v=Fe(y)&&y.name;if(v==="Boolean"){S=!0;break}else v==="String"&&(m=!1)}else S=Fe(_)&&_.name==="Boolean";p[0]=S,p[1]=m,(S||et(p,"default"))&&o.push(f)}}const u=[a,o];return tt(n)&&i.set(n,u),u}function xc(n){return n[0]!=="$"&&!is(n)}const Bl=n=>n==="_"||n==="_ctx"||n==="$stable",zl=n=>Ie(n)?n.map(Un):[Un(n)],Rm=(n,e,t)=>{if(e._n)return e;const i=pt((...r)=>zl(e(...r)),t);return i._c=!1,i},Fh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Bl(r))continue;const s=n[r];if(Fe(s))e[r]=Rm(r,s,i);else if(s!=null){const a=zl(s);e[r]=()=>a}}},Bh=(n,e)=>{const t=zl(e);n.slots.default=()=>t},zh=(n,e,t)=>{for(const i in e)(t||!Bl(i))&&(n[i]=e[i])},Cm=(n,e,t)=>{const i=n.slots=Ih();if(n.vnode.shapeFlag&32){const r=e._;r?(zh(i,e,t),t&&kf(i,"_",r,!0)):Fh(e,i)}else e&&Bh(n,e)},Pm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:zh(r,e,t):(s=!e.$stable,Fh(e,r)),a=e}else e&&(Bh(n,e),a={default:1});if(s)for(const o in r)!Bl(o)&&a[o]==null&&delete r[o]},$t=Nm;function Lm(n){return Dm(n)}function Dm(n,e){const t=Io();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:p=Bn,insertStaticContent:_}=n,S=(g,C,D,X=null,q=null,Y=null,le=void 0,ae=null,ue=!!C.dynamicChildren)=>{if(g===C)return;g&&!ki(g,C)&&(X=V(g),_e(g,q,Y,!0),g=null),C.patchFlag===-2&&(ue=!1,C.dynamicChildren=null);const{type:E,ref:x,shapeFlag:U}=C;switch(E){case Ho:m(g,C,D,X);break;case Bt:d(g,C,D,X);break;case co:g==null&&y(C,D,X,le);break;case _t:B(g,C,D,X,q,Y,le,ae,ue);break;default:U&1?P(g,C,D,X,q,Y,le,ae,ue):U&6?K(g,C,D,X,q,Y,le,ae,ue):(U&64||U&128)&&E.process(g,C,D,X,q,Y,le,ae,ue,ge)}x!=null&&q?os(x,g&&g.ref,Y,C||g,!C):x==null&&g&&g.ref!=null&&os(g.ref,null,Y,g,!0)},m=(g,C,D,X)=>{if(g==null)i(C.el=o(C.children),D,X);else{const q=C.el=g.el;C.children!==g.children&&u(q,C.children)}},d=(g,C,D,X)=>{g==null?i(C.el=l(C.children||""),D,X):C.el=g.el},y=(g,C,D,X)=>{[g.el,g.anchor]=_(g.children,C,D,X,g.el,g.anchor)},v=({el:g,anchor:C},D,X)=>{let q;for(;g&&g!==C;)q=h(g),i(g,D,X),g=q;i(C,D,X)},b=({el:g,anchor:C})=>{let D;for(;g&&g!==C;)D=h(g),r(g),g=D;r(C)},P=(g,C,D,X,q,Y,le,ae,ue)=>{if(C.type==="svg"?le="svg":C.type==="math"&&(le="mathml"),g==null)R(C,D,X,q,Y,le,ae,ue);else{const E=g.el&&g.el._isVueCE?g.el:null;try{E&&E._beginPatch(),G(g,C,q,Y,le,ae,ue)}finally{E&&E._endPatch()}}},R=(g,C,D,X,q,Y,le,ae)=>{let ue,E;const{props:x,shapeFlag:U,transition:z,dirs:te}=g;if(ue=g.el=a(g.type,Y,x&&x.is,x),U&8?c(ue,g.children):U&16&&F(g.children,ue,null,X,q,ra(g,Y),le,ae),te&&Pi(g,null,X,"created"),w(ue,g,g.scopeId,le,X),x){for(const Te in x)Te!=="value"&&!is(Te)&&s(ue,Te,null,x[Te],Y,X);"value"in x&&s(ue,"value",null,x.value,Y),(E=x.onVnodeBeforeMount)&&Pn(E,X,g)}te&&Pi(g,null,X,"beforeMount");const re=Im(q,z);re&&z.beforeEnter(ue),i(ue,C,D),((E=x&&x.onVnodeMounted)||re||te)&&$t(()=>{E&&Pn(E,X,g),re&&z.enter(ue),te&&Pi(g,null,X,"mounted")},q)},w=(g,C,D,X,q)=>{if(D&&p(g,D),X)for(let Y=0;Y<X.length;Y++)p(g,X[Y]);if(q){let Y=q.subTree;if(C===Y||kh(Y.type)&&(Y.ssContent===C||Y.ssFallback===C)){const le=q.vnode;w(g,le,le.scopeId,le.slotScopeIds,q.parent)}}},F=(g,C,D,X,q,Y,le,ae,ue=0)=>{for(let E=ue;E<g.length;E++){const x=g[E]=ae?Jn(g[E]):Un(g[E]);S(null,x,C,D,X,q,Y,le,ae)}},G=(g,C,D,X,q,Y,le)=>{const ae=C.el=g.el;let{patchFlag:ue,dynamicChildren:E,dirs:x}=C;ue|=g.patchFlag&16;const U=g.props||it,z=C.props||it;let te;if(D&&Li(D,!1),(te=z.onVnodeBeforeUpdate)&&Pn(te,D,C,g),x&&Pi(C,g,D,"beforeUpdate"),D&&Li(D,!0),(U.innerHTML&&z.innerHTML==null||U.textContent&&z.textContent==null)&&c(ae,""),E?M(g.dynamicChildren,E,ae,D,X,ra(C,q),Y):le||N(g,C,ae,null,D,X,ra(C,q),Y,!1),ue>0){if(ue&16)A(ae,U,z,D,q);else if(ue&2&&U.class!==z.class&&s(ae,"class",null,z.class,q),ue&4&&s(ae,"style",U.style,z.style,q),ue&8){const re=C.dynamicProps;for(let Te=0;Te<re.length;Te++){const ye=re[Te],pe=U[ye],me=z[ye];(me!==pe||ye==="value")&&s(ae,ye,pe,me,q,D)}}ue&1&&g.children!==C.children&&c(ae,C.children)}else!le&&E==null&&A(ae,U,z,D,q);((te=z.onVnodeUpdated)||x)&&$t(()=>{te&&Pn(te,D,C,g),x&&Pi(C,g,D,"updated")},X)},M=(g,C,D,X,q,Y,le)=>{for(let ae=0;ae<C.length;ae++){const ue=g[ae],E=C[ae],x=ue.el&&(ue.type===_t||!ki(ue,E)||ue.shapeFlag&198)?f(ue.el):D;S(ue,E,x,null,X,q,Y,le,!0)}},A=(g,C,D,X,q)=>{if(C!==D){if(C!==it)for(const Y in C)!is(Y)&&!(Y in D)&&s(g,Y,C[Y],null,q,X);for(const Y in D){if(is(Y))continue;const le=D[Y],ae=C[Y];le!==ae&&Y!=="value"&&s(g,Y,ae,le,q,X)}"value"in D&&s(g,"value",C.value,D.value,q)}},B=(g,C,D,X,q,Y,le,ae,ue)=>{const E=C.el=g?g.el:o(""),x=C.anchor=g?g.anchor:o("");let{patchFlag:U,dynamicChildren:z,slotScopeIds:te}=C;te&&(ae=ae?ae.concat(te):te),g==null?(i(E,D,X),i(x,D,X),F(C.children||[],D,x,q,Y,le,ae,ue)):U>0&&U&64&&z&&g.dynamicChildren&&g.dynamicChildren.length===z.length?(M(g.dynamicChildren,z,D,q,Y,le,ae),(C.key!=null||q&&C===q.subTree)&&Hh(g,C,!0)):N(g,C,D,x,q,Y,le,ae,ue)},K=(g,C,D,X,q,Y,le,ae,ue)=>{C.slotScopeIds=ae,g==null?C.shapeFlag&512?q.ctx.activate(C,D,X,le,ue):I(C,D,X,q,Y,le,ue):W(g,C,ue)},I=(g,C,D,X,q,Y,le)=>{const ae=g.component=Vm(g,X,q);if(Oo(g)&&(ae.ctx.renderer=ge),km(ae,!1,le),ae.asyncDep){if(q&&q.registerDep(ae,L,le),!g.el){const ue=ae.subTree=Ne(Bt);d(null,ue,C,D),g.placeholder=ue.el}}else L(ae,g,C,D,q,Y,le)},W=(g,C,D)=>{const X=C.component=g.component;if(Em(g,C,D))if(X.asyncDep&&!X.asyncResolved){j(X,C,D);return}else X.next=C,X.update();else C.el=g.el,X.vnode=C},L=(g,C,D,X,q,Y,le)=>{const ae=()=>{if(g.isMounted){let{next:U,bu:z,u:te,parent:re,vnode:Te}=g;{const de=Gh(g);if(de){U&&(U.el=Te.el,j(g,U,le)),de.asyncDep.then(()=>{$t(()=>{g.isUnmounted||E()},q)});return}}let ye=U,pe;Li(g,!1),U?(U.el=Te.el,j(g,U,le)):U=Te,z&&oo(z),(pe=U.props&&U.props.onVnodeBeforeUpdate)&&Pn(pe,re,U,Te),Li(g,!0);const me=_c(g),De=g.subTree;g.subTree=me,S(De,me,f(De.el),V(De),g,q,Y),U.el=me.el,ye===null&&bm(g,me.el),te&&$t(te,q),(pe=U.props&&U.props.onVnodeUpdated)&&$t(()=>Pn(pe,re,U,Te),q)}else{let U;const{el:z,props:te}=C,{bm:re,m:Te,parent:ye,root:pe,type:me}=g,De=Cr(C);Li(g,!1),re&&oo(re),!De&&(U=te&&te.onVnodeBeforeMount)&&Pn(U,ye,C),Li(g,!0);{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(me,g.parent?g.parent.type:void 0);const de=g.subTree=_c(g);S(null,de,D,X,g,q,Y),C.el=de.el}if(Te&&$t(Te,q),!De&&(U=te&&te.onVnodeMounted)){const de=C;$t(()=>Pn(U,ye,de),q)}(C.shapeFlag&256||ye&&Cr(ye.vnode)&&ye.vnode.shapeFlag&256)&&g.a&&$t(g.a,q),g.isMounted=!0,C=D=X=null}};g.scope.on();const ue=g.effect=new jf(ae);g.scope.off();const E=g.update=ue.run.bind(ue),x=g.job=ue.runIfDirty.bind(ue);x.i=g,x.id=g.uid,ue.scheduler=()=>Ol(x),Li(g,!0),E()},j=(g,C,D)=>{C.component=g;const X=g.vnode.props;g.vnode=C,g.next=null,Am(g,C.props,X,D),Pm(g,C.children,D),si(),lc(g),oi()},N=(g,C,D,X,q,Y,le,ae,ue=!1)=>{const E=g&&g.children,x=g?g.shapeFlag:0,U=C.children,{patchFlag:z,shapeFlag:te}=C;if(z>0){if(z&128){ce(E,U,D,X,q,Y,le,ae,ue);return}else if(z&256){ne(E,U,D,X,q,Y,le,ae,ue);return}}te&8?(x&16&&xe(E,q,Y),U!==E&&c(D,U)):x&16?te&16?ce(E,U,D,X,q,Y,le,ae,ue):xe(E,q,Y,!0):(x&8&&c(D,""),te&16&&F(U,D,X,q,Y,le,ae,ue))},ne=(g,C,D,X,q,Y,le,ae,ue)=>{g=g||Tr,C=C||Tr;const E=g.length,x=C.length,U=Math.min(E,x);let z;for(z=0;z<U;z++){const te=C[z]=ue?Jn(C[z]):Un(C[z]);S(g[z],te,D,null,q,Y,le,ae,ue)}E>x?xe(g,q,Y,!0,!1,U):F(C,D,X,q,Y,le,ae,ue,U)},ce=(g,C,D,X,q,Y,le,ae,ue)=>{let E=0;const x=C.length;let U=g.length-1,z=x-1;for(;E<=U&&E<=z;){const te=g[E],re=C[E]=ue?Jn(C[E]):Un(C[E]);if(ki(te,re))S(te,re,D,null,q,Y,le,ae,ue);else break;E++}for(;E<=U&&E<=z;){const te=g[U],re=C[z]=ue?Jn(C[z]):Un(C[z]);if(ki(te,re))S(te,re,D,null,q,Y,le,ae,ue);else break;U--,z--}if(E>U){if(E<=z){const te=z+1,re=te<x?C[te].el:X;for(;E<=z;)S(null,C[E]=ue?Jn(C[E]):Un(C[E]),D,re,q,Y,le,ae,ue),E++}}else if(E>z)for(;E<=U;)_e(g[E],q,Y,!0),E++;else{const te=E,re=E,Te=new Map;for(E=re;E<=z;E++){const Re=C[E]=ue?Jn(C[E]):Un(C[E]);Re.key!=null&&Te.set(Re.key,E)}let ye,pe=0;const me=z-re+1;let De=!1,de=0;const rt=new Array(me);for(E=0;E<me;E++)rt[E]=0;for(E=te;E<=U;E++){const Re=g[E];if(pe>=me){_e(Re,q,Y,!0);continue}let Ae;if(Re.key!=null)Ae=Te.get(Re.key);else for(ye=re;ye<=z;ye++)if(rt[ye-re]===0&&ki(Re,C[ye])){Ae=ye;break}Ae===void 0?_e(Re,q,Y,!0):(rt[Ae-re]=E+1,Ae>=de?de=Ae:De=!0,S(Re,C[Ae],D,null,q,Y,le,ae,ue),pe++)}const Ge=De?Um(rt):Tr;for(ye=Ge.length-1,E=me-1;E>=0;E--){const Re=re+E,Ae=C[Re],Ce=C[Re+1],je=Re+1<x?Ce.el||Vh(Ce):X;rt[E]===0?S(null,Ae,D,je,q,Y,le,ae,ue):De&&(ye<0||E!==Ge[ye]?he(Ae,D,je,2):ye--)}}},he=(g,C,D,X,q=null)=>{const{el:Y,type:le,transition:ae,children:ue,shapeFlag:E}=g;if(E&6){he(g.component.subTree,C,D,X);return}if(E&128){g.suspense.move(C,D,X);return}if(E&64){le.move(g,C,D,ge);return}if(le===_t){i(Y,C,D);for(let U=0;U<ue.length;U++)he(ue[U],C,D,X);i(g.anchor,C,D);return}if(le===co){v(g,C,D);return}if(X!==2&&E&1&&ae)if(X===0)ae.beforeEnter(Y),i(Y,C,D),$t(()=>ae.enter(Y),q);else{const{leave:U,delayLeave:z,afterLeave:te}=ae,re=()=>{g.ctx.isUnmounted?r(Y):i(Y,C,D)},Te=()=>{Y._isLeaving&&Y[Dn](!0),U(Y,()=>{re(),te&&te()})};z?z(Y,re,Te):Te()}else i(Y,C,D)},_e=(g,C,D,X=!1,q=!1)=>{const{type:Y,props:le,ref:ae,children:ue,dynamicChildren:E,shapeFlag:x,patchFlag:U,dirs:z,cacheIndex:te}=g;if(U===-2&&(q=!1),ae!=null&&(si(),os(ae,null,D,g,!0),oi()),te!=null&&(C.renderCache[te]=void 0),x&256){C.ctx.deactivate(g);return}const re=x&1&&z,Te=!Cr(g);let ye;if(Te&&(ye=le&&le.onVnodeBeforeUnmount)&&Pn(ye,C,g),x&6)fe(g.component,D,X);else{if(x&128){g.suspense.unmount(D,X);return}re&&Pi(g,null,C,"beforeUnmount"),x&64?g.type.remove(g,C,D,ge,X):E&&!E.hasOnce&&(Y!==_t||U>0&&U&64)?xe(E,C,D,!1,!0):(Y===_t&&U&384||!q&&x&16)&&xe(ue,C,D),X&&Le(g)}(Te&&(ye=le&&le.onVnodeUnmounted)||re)&&$t(()=>{ye&&Pn(ye,C,g),re&&Pi(g,null,C,"unmounted")},D)},Le=g=>{const{type:C,el:D,anchor:X,transition:q}=g;if(C===_t){Q(D,X);return}if(C===co){b(g);return}const Y=()=>{r(D),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(g.shapeFlag&1&&q&&!q.persisted){const{leave:le,delayLeave:ae}=q,ue=()=>le(D,Y);ae?ae(g.el,Y,ue):ue()}else Y()},Q=(g,C)=>{let D;for(;g!==C;)D=h(g),r(g),g=D;r(C)},fe=(g,C,D)=>{const{bum:X,scope:q,job:Y,subTree:le,um:ae,m:ue,a:E}=g;Sc(ue),Sc(E),X&&oo(X),q.stop(),Y&&(Y.flags|=8,_e(le,g,C,D)),ae&&$t(ae,C),$t(()=>{g.isUnmounted=!0},C)},xe=(g,C,D,X=!1,q=!1,Y=0)=>{for(let le=Y;le<g.length;le++)_e(g[le],C,D,X,q)},V=g=>{if(g.shapeFlag&6)return V(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const C=h(g.anchor||g.el),D=C&&C[qp];return D?h(D):C};let oe=!1;const ie=(g,C,D)=>{let X;g==null?C._vnode&&(_e(C._vnode,null,null,!0),X=C._vnode.component):S(C._vnode||null,g,C,null,null,null,D),C._vnode=g,oe||(oe=!0,lc(X),hh(),oe=!1)},ge={p:S,um:_e,m:he,r:Le,mt:I,mc:F,pc:N,pbc:M,n:V,o:n};return{render:ie,hydrate:void 0,createApp:_m(ie)}}function ra({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Li({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Im(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hh(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Jn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Hh(a,o)),o.type===Ho&&(o.patchFlag===-1&&(o=r[s]=Jn(o)),o.el=a.el),o.type===Bt&&!o.el&&(o.el=a.el)}}function Um(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<u?s=o+1:a=o;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Gh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gh(e)}function Sc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Vh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Vh(e.subTree):null}const kh=n=>n.__isSuspense;function Nm(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):Hp(n)}const _t=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),co=Symbol.for("v-stc"),ls=[];let on=null;function qe(n=!1){ls.push(on=n?null:[])}function Om(){ls.pop(),on=ls[ls.length-1]||null}let ps=1;function So(n,e=!1){ps+=n,n<0&&on&&e&&(on.hasOnce=!0)}function Wh(n){return n.dynamicChildren=ps>0?on||Tr:null,Om(),ps>0&&on&&on.push(n),n}function Ke(n,e,t,i,r,s){return Wh(se(n,e,t,i,r,s,!0))}function ms(n,e,t,i,r){return Wh(Ne(n,e,t,i,r,!0))}function gs(n){return n?n.__v_isVNode===!0:!1}function ki(n,e){return n.type===e.type&&n.key===e.key}const Xh=({key:n})=>n??null,uo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?St(n)||Ht(n)||Fe(n)?{i:It,r:n,k:e,f:!!t}:n:null);function se(n,e=null,t=null,i=0,r=null,s=n===_t?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Xh(e),ref:e&&uo(e),scopeId:ph,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:It};return o?(Hl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=St(t)?8:16),ps>0&&!a&&on&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&on.push(l),l}const Ne=Fm;function Fm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===am)&&(n=Bt),gs(n)){const o=bi(n,e,!0);return t&&Hl(o,t),ps>0&&!s&&on&&(o.shapeFlag&6?on[on.indexOf(n)]=o:on.push(o)),o.patchFlag=-2,o}if(Ym(n)&&(n=n.__vccOpts),e){e=Bm(e);let{class:o,style:l}=e;o&&!St(o)&&(e.class=Dt(o)),tt(l)&&(Ul(l)&&!Ie(l)&&(l=bt({},l)),e.style=Qt(l))}const a=St(n)?1:kh(n)?128:gh(n)?64:tt(n)?4:Fe(n)?2:0;return se(n,e,t,i,r,a,s,!0)}function Bm(n){return n?Ul(n)||Uh(n)?bt({},n):n:null}function bi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,u=e?zm(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&Xh(u),ref:e&&e.ref?t&&s?Ie(s)?s.concat(uo(e)):[s,uo(e)]:uo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_t?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&bi(n.ssContent),ssFallback:n.ssFallback&&bi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ds(c,l.clone(c)),c}function ht(n=" ",e=0){return Ne(Ho,null,n,e)}function fo(n,e){const t=Ne(co,null,n);return t.staticCount=e,t}function qi(n="",e=!1){return e?(qe(),ms(Bt,null,n)):Ne(Bt,null,n)}function Un(n){return n==null||typeof n=="boolean"?Ne(Bt):Ie(n)?Ne(_t,null,n.slice()):gs(n)?Jn(n):Ne(Ho,null,String(n))}function Jn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:bi(n)}function Hl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Hl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Uh(e)?e._ctx=It:r===3&&It&&(It.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:It},t=32):(e=String(e),i&64?(t=16,e=[ht(e)]):t=8);n.children=e,n.shapeFlag|=t}function zm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(r==="style")e.style=Qt([e.style,i.style]);else if(Po(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Pn(n,e,t,i=null){wn(n,e,7,[t,i])}const Hm=Ch();let Gm=0;function Vm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Hm,s={uid:Gm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new up(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oh(i,r),emitsOptions:Ph(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=xm.bind(null,s),n.ce&&n.ce(s),s}let zt=null;const qh=()=>zt||It;let Mo,sl;{const n=Io(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Mo=e("__VUE_INSTANCE_SETTERS__",t=>zt=t),sl=e("__VUE_SSR_SETTERS__",t=>_s=t)}const Es=n=>{const e=zt;return Mo(n),n.scope.on(),()=>{n.scope.off(),Mo(e)}},Mc=()=>{zt&&zt.scope.off(),Mo(null)};function jh(n){return n.vnode.shapeFlag&4}let _s=!1;function km(n,e=!1,t=!1){e&&sl(e);const{props:i,children:r}=n.vnode,s=jh(n);Tm(n,i,s,e),Cm(n,r,t||e);const a=s?Wm(n,e):void 0;return e&&sl(!1),a}function Wm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,um);const{setup:i}=t;if(i){si();const r=n.setupContext=i.length>1?qm(n):null,s=Es(n),a=ys(i,n,0,[n.props,r]),o=Hf(a);if(oi(),s(),(o||n.sp)&&!Cr(n)&&Eh(n),o){if(a.then(Mc,Mc),e)return a.then(l=>{yc(n,l)}).catch(l=>{No(l,n,0)});n.asyncDep=a}else yc(n,a)}else Yh(n)}function yc(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=ch(e)),Yh(n)}function Yh(n,e,t){const i=n.type;n.render||(n.render=i.render||Bn);{const r=Es(n);si();try{fm(n)}finally{oi(),r()}}}const Xm={get(n,e){return Ft(n,"get",""),n[e]}};function qm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Xm),slots:n.slots,emit:n.emit,expose:e}}function Go(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ch(Pp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in as)return as[t](n)},has(e,t){return t in e||t in as}})):n.proxy}function jm(n,e=!0){return Fe(n)?n.displayName||n.name:n.name||e&&n.__name}function Ym(n){return Fe(n)&&"__vccOpts"in n}const yt=(n,e)=>Np(n,e,_s);function Gl(n,e,t){try{So(-1);const i=arguments.length;return i===2?tt(e)&&!Ie(e)?gs(e)?Ne(n,null,[e]):Ne(n,e):Ne(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&gs(t)&&(t=[t]),Ne(n,e,t))}finally{So(1)}}const $m="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ol;const Ec=typeof window<"u"&&window.trustedTypes;if(Ec)try{ol=Ec.createPolicy("vue",{createHTML:n=>n})}catch{}const $h=ol?n=>ol.createHTML(n):n=>n,Km="http://www.w3.org/2000/svg",Zm="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,bc=Zn&&Zn.createElement("template"),Jm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Zn.createElementNS(Km,n):e==="mathml"?Zn.createElementNS(Zm,n):t?Zn.createElement(n,{is:t}):Zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{bc.innerHTML=$h(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=bc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ci="transition",jr="animation",vs=Symbol("_vtc"),Kh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qm=bt({},_h,Kh),eg=n=>(n.displayName="Transition",n.props=Qm,n),tg=eg((n,{slots:e})=>Gl($p,ng(n),e)),Di=(n,e=[])=>{Ie(n)?n.forEach(t=>t(...e)):n&&n(...e)},Tc=n=>n?Ie(n)?n.some(e=>e.length>1):n.length>1:!1;function ng(n){const e={};for(const B in n)B in Kh||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=ig(r),S=_&&_[0],m=_&&_[1],{onBeforeEnter:d,onEnter:y,onEnterCancelled:v,onLeave:b,onLeaveCancelled:P,onBeforeAppear:R=d,onAppear:w=y,onAppearCancelled:F=v}=e,G=(B,K,I,W)=>{B._enterCancelled=W,Ii(B,K?c:o),Ii(B,K?u:a),I&&I()},M=(B,K)=>{B._isLeaving=!1,Ii(B,f),Ii(B,p),Ii(B,h),K&&K()},A=B=>(K,I)=>{const W=B?w:y,L=()=>G(K,B,I);Di(W,[K,L]),Ac(()=>{Ii(K,B?l:s),kn(K,B?c:o),Tc(W)||wc(K,i,S,L)})};return bt(e,{onBeforeEnter(B){Di(d,[B]),kn(B,s),kn(B,a)},onBeforeAppear(B){Di(R,[B]),kn(B,l),kn(B,u)},onEnter:A(!1),onAppear:A(!0),onLeave(B,K){B._isLeaving=!0;const I=()=>M(B,K);kn(B,f),B._enterCancelled?(kn(B,h),Pc(B)):(Pc(B),kn(B,h)),Ac(()=>{B._isLeaving&&(Ii(B,f),kn(B,p),Tc(b)||wc(B,i,m,I))}),Di(b,[B,I])},onEnterCancelled(B){G(B,!1,void 0,!0),Di(v,[B])},onAppearCancelled(B){G(B,!0,void 0,!0),Di(F,[B])},onLeaveCancelled(B){M(B),Di(P,[B])}})}function ig(n){if(n==null)return null;if(tt(n))return[sa(n.enter),sa(n.leave)];{const e=sa(n);return[e,e]}}function sa(n){return np(n)}function kn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[vs]||(n[vs]=new Set)).add(e)}function Ii(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[vs];t&&(t.delete(e),t.size||(n[vs]=void 0))}function Ac(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let rg=0;function wc(n,e,t,i){const r=n._endId=++rg,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=sg(n,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=p=>{p.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,h)}function sg(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${ci}Delay`),s=i(`${ci}Duration`),a=Rc(r,s),o=i(`${jr}Delay`),l=i(`${jr}Duration`),u=Rc(o,l);let c=null,f=0,h=0;e===ci?a>0&&(c=ci,f=a,h=s.length):e===jr?u>0&&(c=jr,f=u,h=l.length):(f=Math.max(a,u),c=f>0?a>u?ci:jr:null,h=c?c===ci?s.length:l.length:0);const p=c===ci&&/\b(?:transform|all)(?:,|$)/.test(i(`${ci}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:p}}function Rc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Cc(t)+Cc(n[i])))}function Cc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Pc(n){return(n?n.ownerDocument:document).body.offsetHeight}function og(n,e,t){const i=n[vs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Lc=Symbol("_vod"),ag=Symbol("_vsh"),lg=Symbol(""),cg=/(?:^|;)\s*display\s*:/;function ug(n,e,t){const i=n.style,r=St(t);let s=!1;if(t&&!r){if(e)if(St(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&ho(i,o,"")}else for(const a in e)t[a]==null&&ho(i,a,"");for(const a in t)a==="display"&&(s=!0),ho(i,a,t[a])}else if(r){if(e!==t){const a=i[lg];a&&(t+=";"+a),i.cssText=t,s=cg.test(t)}}else e&&n.removeAttribute("style");Lc in n&&(n[Lc]=s?i.display:"",n[ag]&&(i.display="none"))}const Dc=/\s*!important$/;function ho(n,e,t){if(Ie(t))t.forEach(i=>ho(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=fg(n,e);Dc.test(t)?n.setProperty(er(i),t.replace(Dc,""),"important"):n[i]=t}}const Ic=["Webkit","Moz","ms"],oa={};function fg(n,e){const t=oa[e];if(t)return t;let i=jt(e);if(i!=="filter"&&i in n)return oa[e]=i;i=Do(i);for(let r=0;r<Ic.length;r++){const s=Ic[r]+i;if(s in n)return oa[e]=s}return e}const Uc="http://www.w3.org/1999/xlink";function Nc(n,e,t,i,r,s=lp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Uc,e.slice(6,e.length)):n.setAttributeNS(Uc,e,t):t==null||s&&!Wf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Tn(t)?String(t):t)}function Oc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?$h(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Wf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function Mr(n,e,t,i){n.addEventListener(e,t,i)}function hg(n,e,t,i){n.removeEventListener(e,t,i)}const Fc=Symbol("_vei");function dg(n,e,t,i,r=null){const s=n[Fc]||(n[Fc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=pg(e);if(i){const u=s[e]=_g(i,r);Mr(n,o,u,l)}else a&&(hg(n,o,a,l),s[e]=void 0)}}const Bc=/(?:Once|Passive|Capture)$/;function pg(n){let e;if(Bc.test(n)){e={};let i;for(;i=n.match(Bc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):er(n.slice(2)),e]}let aa=0;const mg=Promise.resolve(),gg=()=>aa||(mg.then(()=>aa=0),aa=Date.now());function _g(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;wn(vg(i,t.value),e,5,[i])};return t.value=n,t.attached=gg(),t}function vg(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const zc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,xg=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?og(n,i,a):e==="style"?ug(n,t,i):Po(e)?El(e)||dg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Sg(n,e,i,a))?(Oc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Nc(n,e,i,a,s,e!=="value")):n._isVueCE&&(Mg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!St(i)))?Oc(n,jt(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Nc(n,e,i,a))};function Sg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&zc(e)&&Fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return zc(e)&&St(t)?!1:e in n}function Mg(n,e){const t=n._def.props;if(!t)return!1;const i=jt(e);return Array.isArray(t)?t.some(r=>jt(r)===i):Object.keys(t).some(r=>jt(r)===i)}const Hc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ie(e)?t=>oo(e,t):e};function yg(n){n.target.composing=!0}function Gc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const la=Symbol("_assign");function Vc(n,e,t){return e&&(n=n.trim()),t&&(n=Al(n)),n}const Eg={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[la]=Hc(r);const s=i||r.props&&r.props.type==="number";Mr(n,e?"change":"input",a=>{a.target.composing||n[la](Vc(n.value,t,s))}),(t||s)&&Mr(n,"change",()=>{n.value=Vc(n.value,t,s)}),e||(Mr(n,"compositionstart",yg),Mr(n,"compositionend",Gc),Mr(n,"change",Gc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[la]=Hc(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Al(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},bg=bt({patchProp:xg},Jm);let kc;function Tg(){return kc||(kc=Lm(bg))}const Ag=(...n)=>{const e=Tg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Rg(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,wg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function wg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Rg(n){return St(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yr=typeof document<"u";function Zh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Cg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Zh(n.default)}const Qe=Object.assign;function ca(n,e){const t={};for(const i in e){const r=e[i];t[i]=Rn(r)?r.map(n):n(r)}return t}const cs=()=>{},Rn=Array.isArray;function Wc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Jh=/#/g,Pg=/&/g,Lg=/\//g,Dg=/=/g,Ig=/\?/g,Qh=/\+/g,Ug=/%5B/g,Ng=/%5D/g,ed=/%5E/g,Og=/%60/g,td=/%7B/g,Fg=/%7C/g,nd=/%7D/g,Bg=/%20/g;function Vl(n){return n==null?"":encodeURI(""+n).replace(Fg,"|").replace(Ug,"[").replace(Ng,"]")}function zg(n){return Vl(n).replace(td,"{").replace(nd,"}").replace(ed,"^")}function al(n){return Vl(n).replace(Qh,"%2B").replace(Bg,"+").replace(Jh,"%23").replace(Pg,"%26").replace(Og,"`").replace(td,"{").replace(nd,"}").replace(ed,"^")}function Hg(n){return al(n).replace(Dg,"%3D")}function Gg(n){return Vl(n).replace(Jh,"%23").replace(Ig,"%3F")}function Vg(n){return Gg(n).replace(Lg,"%2F")}function xs(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const kg=/\/$/,Wg=n=>n.replace(kg,"");function ua(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Yg(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:xs(a)}}function Xg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Xc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function qg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Ur(e.matched[i],t.matched[r])&&id(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ur(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function id(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!jg(n[t],e[t]))return!1;return!0}function jg(n,e){return Rn(n)?qc(n,e):Rn(e)?qc(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function qc(n,e){return Rn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Yg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ll=function(n){return n.pop="pop",n.push="push",n}({}),fa=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function $g(n){if(!n)if(yr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Wg(n)}const Kg=/^[^#]+#/;function Zg(n,e){return n.replace(Kg,"#")+e}function Jg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Vo=()=>({left:window.scrollX,top:window.scrollY});function Qg(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Jg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function jc(n,e){return(history.state?history.state.position-e:-1)+n}const cl=new Map;function e_(n,e){cl.set(n,e)}function t_(n){const e=cl.get(n);return cl.delete(n),e}function n_(n){return typeof n=="string"||n&&typeof n=="object"}function rd(n){return typeof n=="string"||typeof n=="symbol"}let mt=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const sd=Symbol("");mt.MATCHER_NOT_FOUND+"",mt.NAVIGATION_GUARD_REDIRECT+"",mt.NAVIGATION_ABORTED+"",mt.NAVIGATION_CANCELLED+"",mt.NAVIGATION_DUPLICATED+"";function Nr(n,e){return Qe(new Error,{type:n,[sd]:!0},e)}function Wn(n,e){return n instanceof Error&&sd in n&&(e==null||!!(n.type&e))}const i_=["params","query","hash"];function r_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of i_)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function s_(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Qh," "),s=r.indexOf("="),a=xs(s<0?r:r.slice(0,s)),o=s<0?null:xs(r.slice(s+1));if(a in e){let l=e[a];Rn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function Yc(n){let e="";for(let t in n){const i=n[t];if(t=Hg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(Rn(i)?i.map(r=>r&&al(r)):[i&&al(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function o_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=Rn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const a_=Symbol(""),$c=Symbol(""),kl=Symbol(""),Wl=Symbol(""),ul=Symbol("");function Yr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function vi(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const u=h=>{h===!1?l(Nr(mt.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):n_(h)?l(Nr(mt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},c=s(()=>n.call(i&&i.instances[r],e,t,u));let f=Promise.resolve(c);n.length<3&&(f=f.then(u)),f.catch(h=>l(h))})}function ha(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Zh(l)){const u=(l.__vccOpts||l)[e];u&&s.push(vi(u,t,i,a,o,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=Cg(c)?c.default:c;a.mods[o]=c,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&vi(h,t,i,a,o,r)()}))}}return s}function l_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(u=>Ur(u,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(u=>Ur(u,l))||r.push(l))}return[t,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let c_=()=>location.protocol+"//"+location.host;function od(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),Xc(o,"")}return Xc(t,n)+i+r}function u_(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=od(n,location),_=t.value,S=e.value;let m=0;if(h){if(t.value=p,e.value=h,a&&a===_){a=null;return}m=S?h.position-S.position:0}else i(p);r.forEach(d=>{d(t.value,_,{delta:m,type:ll.pop,direction:m?m>0?fa.forward:fa.back:fa.unknown})})};function l(){a=t.value}function u(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(Qe({},h.state,{scroll:Vo()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:f}}function Kc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Vo():null}}function f_(n){const{history:e,location:t}=window,i={value:od(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:c_()+n+l;try{e[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(p){console.error(p),t[c?"replace":"assign"](h)}}function a(l,u){s(l,Qe({},e.state,Kc(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),i.value=l}function o(l,u){const c=Qe({},r.value,e.state,{forward:l,scroll:Vo()});s(c.current,c,!0),s(l,Qe({},Kc(i.value,l,null),{position:c.position+1},u),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function h_(n){n=$g(n);const e=f_(n),t=u_(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Qe({location:"",base:n,go:i,createHref:Zg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let ji=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Et=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Et||{});const d_={type:ji.Static,value:""},p_=/[a-zA-Z0-9_]/;function m_(n){if(!n)return[[]];if(n==="/")return[[d_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${u}": ${p}`)}let t=Et.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,u="",c="";function f(){u&&(t===Et.Static?s.push({type:ji.Static,value:u}):t===Et.Param||t===Et.ParamRegExp||t===Et.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:ji.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Et.ParamRegExp){i=t,t=Et.EscapeNext;continue}switch(t){case Et.Static:l==="/"?(u&&f(),a()):l===":"?(f(),t=Et.Param):h();break;case Et.EscapeNext:h(),t=i;break;case Et.Param:l==="("?t=Et.ParamRegExp:p_.test(l)?h():(f(),t=Et.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Et.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=Et.ParamRegExpEnd:c+=l;break;case Et.ParamRegExpEnd:f(),t=Et.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:e("Unknown state");break}}return t===Et.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),f(),a(),r}const Zc="[^/]+?",g_={sensitive:!1,strict:!1,start:!0,end:!0};var Wt=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Wt||{});const __=/[.+*?^${}()[\]/\\]/g;function v_(n,e){const t=Qe({},g_,e),i=[];let r=t.start?"^":"";const s=[];for(const u of n){const c=u.length?[]:[Wt.Root];t.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let p=Wt.Segment+(t.sensitive?Wt.BonusCaseSensitive:0);if(h.type===ji.Static)f||(r+="/"),r+=h.value.replace(__,"\\$&"),p+=Wt.Static;else if(h.type===ji.Param){const{value:_,repeatable:S,optional:m,regexp:d}=h;s.push({name:_,repeatable:S,optional:m});const y=d||Zc;if(y!==Zc){p+=Wt.BonusCustomRegExp;try{`${y}`}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+b.message)}}let v=S?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(v=m&&u.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,p+=Wt.Dynamic,m&&(p+=Wt.BonusOptional),S&&(p+=Wt.BonusRepeatable),y===".*"&&(p+=Wt.BonusWildcard)}c.push(p)}i.push(c)}if(t.strict&&t.end){const u=i.length-1;i[u][i[u].length-1]+=Wt.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(u){const c=u.match(a),f={};if(!c)return null;for(let h=1;h<c.length;h++){const p=c[h]||"",_=s[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(u){let c="",f=!1;for(const h of n){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of h)if(p.type===ji.Static)c+=p.value;else if(p.type===ji.Param){const{value:_,repeatable:S,optional:m}=p,d=_ in u?u[_]:"";if(Rn(d)&&!S)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=Rn(d)?d.join("/"):d;if(!y)if(m)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);c+=y}}return c||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function x_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Wt.Static+Wt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Wt.Static+Wt.Segment?1:-1:0}function ad(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=x_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Jc(i))return 1;if(Jc(r))return-1}return r.length-i.length}function Jc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const S_={strict:!1,end:!0,sensitive:!1};function M_(n,e,t){const i=v_(m_(n.path),t),r=Qe(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function y_(n,e){const t=[],i=new Map;e=Wc(S_,e);function r(f){return i.get(f)}function s(f,h,p){const _=!p,S=eu(f);S.aliasOf=p&&p.record;const m=Wc(e,f),d=[S];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of b)d.push(eu(Qe({},S,{components:p?p.record.components:S.components,path:P,aliasOf:p?p.record:S})))}let y,v;for(const b of d){const{path:P}=b;if(h&&P[0]!=="/"){const R=h.record.path,w=R[R.length-1]==="/"?"":"/";b.path=h.record.path+(P&&w+P)}if(y=M_(b,h,m),p?p.alias.push(y):(v=v||y,v!==y&&v.alias.push(y),_&&f.name&&!tu(y)&&a(f.name)),ld(y)&&l(y),S.children){const R=S.children;for(let w=0;w<R.length;w++)s(R[w],y,p&&p.children[w])}p=p||y}return v?()=>{a(v)}:cs}function a(f){if(rd(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=T_(f,t);t.splice(h,0,f),f.record.name&&!tu(f)&&i.set(f.record.name,f)}function u(f,h){let p,_={},S,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Nr(mt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,_=Qe(Qc(h.params,p.keys.filter(v=>!v.optional).concat(p.parent?p.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),f.params&&Qc(f.params,p.keys.map(v=>v.name))),S=p.stringify(_)}else if(f.path!=null)S=f.path,p=t.find(v=>v.re.test(S)),p&&(_=p.parse(S),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(v=>v.re.test(h.path)),!p)throw Nr(mt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,_=Qe({},h.params,f.params),S=p.stringify(_)}const d=[];let y=p;for(;y;)d.unshift(y.record),y=y.parent;return{name:m,path:S,params:_,matched:d,meta:b_(d)}}n.forEach(f=>s(f));function c(){t.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:o,getRecordMatcher:r}}function Qc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function eu(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:E_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function E_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function tu(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function b_(n){return n.reduce((e,t)=>Qe(e,t.meta),{})}function T_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;ad(n,e[s])<0?i=s:t=s+1}const r=A_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function A_(n){let e=n;for(;e=e.parent;)if(ld(e)&&ad(n,e)===0)return e}function ld({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function nu(n){const e=zn(kl),t=zn(Wl),i=yt(()=>{const l=wr(n.to);return e.resolve(l)}),r=yt(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=t.matched;if(!c||!f.length)return-1;const h=f.findIndex(Ur.bind(null,c));if(h>-1)return h;const p=iu(l[u-2]);return u>1&&iu(c)===p&&f[f.length-1].path!==p?f.findIndex(Ur.bind(null,l[u-2])):h}),s=yt(()=>r.value>-1&&L_(t.params,i.value.params)),a=yt(()=>r.value>-1&&r.value===t.matched.length-1&&id(t.params,i.value.params));function o(l={}){if(P_(l)){const u=e[wr(n.replace)?"replace":"push"](wr(n.to)).catch(cs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:yt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function w_(n){return n.length===1?n[0]:n}const R_=yh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:nu,setup(n,{slots:e}){const t=Hr(nu(n)),{options:i}=zn(kl),r=yt(()=>({[ru(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[ru(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&w_(e.default(t));return n.custom?s:Gl("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),C_=R_;function P_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function L_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!Rn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function iu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const ru=(n,e,t)=>n??e??t,D_=yh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=zn(ul),r=yt(()=>n.route||i.value),s=zn($c,0),a=yt(()=>{let u=wr(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),o=yt(()=>r.value.matched[a.value]);ao($c,yt(()=>a.value+1)),ao(a_,o),ao(ul,r);const l=xt();return lo(()=>[l.value,o.value,n.name],([u,c,f],[h,p,_])=>{c&&(c.instances[f]=u,p&&p!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!Ur(c,p)||!h)&&(c.enterCallbacks[f]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=r.value,c=n.name,f=o.value,h=f&&f.components[c];if(!h)return su(t.default,{Component:h,route:u});const p=f.props[c],_=p?p===!0?u.params:typeof p=="function"?p(u):p:null,m=Gl(h,Qe({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return su(t.default,{Component:m,route:u})||m}}});function su(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const I_=D_;function U_(n){const e=y_(n.routes,n),t=n.parseQuery||s_,i=n.stringifyQuery||Yc,r=n.history,s=Yr(),a=Yr(),o=Yr(),l=Lp(ui);let u=ui;yr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=ca.bind(null,V=>""+V),f=ca.bind(null,Vg),h=ca.bind(null,xs);function p(V,oe){let ie,ge;return rd(V)?(ie=e.getRecordMatcher(V),ge=oe):ge=V,e.addRoute(ge,ie)}function _(V){const oe=e.getRecordMatcher(V);oe&&e.removeRoute(oe)}function S(){return e.getRoutes().map(V=>V.record)}function m(V){return!!e.getRecordMatcher(V)}function d(V,oe){if(oe=Qe({},oe||l.value),typeof V=="string"){const D=ua(t,V,oe.path),X=e.resolve({path:D.path},oe),q=r.createHref(D.fullPath);return Qe(D,X,{params:h(X.params),hash:xs(D.hash),redirectedFrom:void 0,href:q})}let ie;if(V.path!=null)ie=Qe({},V,{path:ua(t,V.path,oe.path).path});else{const D=Qe({},V.params);for(const X in D)D[X]==null&&delete D[X];ie=Qe({},V,{params:f(D)}),oe.params=f(oe.params)}const ge=e.resolve(ie,oe),Me=V.hash||"";ge.params=c(h(ge.params));const g=Xg(i,Qe({},V,{hash:zg(Me),path:ge.path})),C=r.createHref(g);return Qe({fullPath:g,hash:Me,query:i===Yc?o_(V.query):V.query||{}},ge,{redirectedFrom:void 0,href:C})}function y(V){return typeof V=="string"?ua(t,V,l.value.path):Qe({},V)}function v(V,oe){if(u!==V)return Nr(mt.NAVIGATION_CANCELLED,{from:oe,to:V})}function b(V){return w(V)}function P(V){return b(Qe(y(V),{replace:!0}))}function R(V,oe){const ie=V.matched[V.matched.length-1];if(ie&&ie.redirect){const{redirect:ge}=ie;let Me=typeof ge=="function"?ge(V,oe):ge;return typeof Me=="string"&&(Me=Me.includes("?")||Me.includes("#")?Me=y(Me):{path:Me},Me.params={}),Qe({query:V.query,hash:V.hash,params:Me.path!=null?{}:V.params},Me)}}function w(V,oe){const ie=u=d(V),ge=l.value,Me=V.state,g=V.force,C=V.replace===!0,D=R(ie,ge);if(D)return w(Qe(y(D),{state:typeof D=="object"?Qe({},Me,D.state):Me,force:g,replace:C}),oe||ie);const X=ie;X.redirectedFrom=oe;let q;return!g&&qg(i,ge,ie)&&(q=Nr(mt.NAVIGATION_DUPLICATED,{to:X,from:ge}),he(ge,ge,!0,!1)),(q?Promise.resolve(q):M(X,ge)).catch(Y=>Wn(Y)?Wn(Y,mt.NAVIGATION_GUARD_REDIRECT)?Y:ce(Y):N(Y,X,ge)).then(Y=>{if(Y){if(Wn(Y,mt.NAVIGATION_GUARD_REDIRECT))return w(Qe({replace:C},y(Y.to),{state:typeof Y.to=="object"?Qe({},Me,Y.to.state):Me,force:g}),oe||X)}else Y=B(X,ge,!0,C,Me);return A(X,ge,Y),Y})}function F(V,oe){const ie=v(V,oe);return ie?Promise.reject(ie):Promise.resolve()}function G(V){const oe=Q.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(V):V()}function M(V,oe){let ie;const[ge,Me,g]=l_(V,oe);ie=ha(ge.reverse(),"beforeRouteLeave",V,oe);for(const D of ge)D.leaveGuards.forEach(X=>{ie.push(vi(X,V,oe))});const C=F.bind(null,V,oe);return ie.push(C),xe(ie).then(()=>{ie=[];for(const D of s.list())ie.push(vi(D,V,oe));return ie.push(C),xe(ie)}).then(()=>{ie=ha(Me,"beforeRouteUpdate",V,oe);for(const D of Me)D.updateGuards.forEach(X=>{ie.push(vi(X,V,oe))});return ie.push(C),xe(ie)}).then(()=>{ie=[];for(const D of g)if(D.beforeEnter)if(Rn(D.beforeEnter))for(const X of D.beforeEnter)ie.push(vi(X,V,oe));else ie.push(vi(D.beforeEnter,V,oe));return ie.push(C),xe(ie)}).then(()=>(V.matched.forEach(D=>D.enterCallbacks={}),ie=ha(g,"beforeRouteEnter",V,oe,G),ie.push(C),xe(ie))).then(()=>{ie=[];for(const D of a.list())ie.push(vi(D,V,oe));return ie.push(C),xe(ie)}).catch(D=>Wn(D,mt.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function A(V,oe,ie){o.list().forEach(ge=>G(()=>ge(V,oe,ie)))}function B(V,oe,ie,ge,Me){const g=v(V,oe);if(g)return g;const C=oe===ui,D=yr?history.state:{};ie&&(ge||C?r.replace(V.fullPath,Qe({scroll:C&&D&&D.scroll},Me)):r.push(V.fullPath,Me)),l.value=V,he(V,oe,ie,C),ce()}let K;function I(){K||(K=r.listen((V,oe,ie)=>{if(!fe.listening)return;const ge=d(V),Me=R(ge,fe.currentRoute.value);if(Me){w(Qe(Me,{replace:!0,force:!0}),ge).catch(cs);return}u=ge;const g=l.value;yr&&e_(jc(g.fullPath,ie.delta),Vo()),M(ge,g).catch(C=>Wn(C,mt.NAVIGATION_ABORTED|mt.NAVIGATION_CANCELLED)?C:Wn(C,mt.NAVIGATION_GUARD_REDIRECT)?(w(Qe(y(C.to),{force:!0}),ge).then(D=>{Wn(D,mt.NAVIGATION_ABORTED|mt.NAVIGATION_DUPLICATED)&&!ie.delta&&ie.type===ll.pop&&r.go(-1,!1)}).catch(cs),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),N(C,ge,g))).then(C=>{C=C||B(ge,g,!1),C&&(ie.delta&&!Wn(C,mt.NAVIGATION_CANCELLED)?r.go(-ie.delta,!1):ie.type===ll.pop&&Wn(C,mt.NAVIGATION_ABORTED|mt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),A(ge,g,C)}).catch(cs)}))}let W=Yr(),L=Yr(),j;function N(V,oe,ie){ce(V);const ge=L.list();return ge.length?ge.forEach(Me=>Me(V,oe,ie)):console.error(V),Promise.reject(V)}function ne(){return j&&l.value!==ui?Promise.resolve():new Promise((V,oe)=>{W.add([V,oe])})}function ce(V){return j||(j=!V,I(),W.list().forEach(([oe,ie])=>V?ie(V):oe()),W.reset()),V}function he(V,oe,ie,ge){const{scrollBehavior:Me}=n;if(!yr||!Me)return Promise.resolve();const g=!ie&&t_(jc(V.fullPath,0))||(ge||!ie)&&history.state&&history.state.scroll||null;return Nl().then(()=>Me(V,oe,g)).then(C=>C&&Qg(C)).catch(C=>N(C,V,oe))}const _e=V=>r.go(V);let Le;const Q=new Set,fe={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:S,resolve:d,options:n,push:b,replace:P,go:_e,back:()=>_e(-1),forward:()=>_e(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:L.add,isReady:ne,install(V){V.component("RouterLink",C_),V.component("RouterView",I_),V.config.globalProperties.$router=fe,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>wr(l)}),yr&&!Le&&l.value===ui&&(Le=!0,b(r.location).catch(ge=>{}));const oe={};for(const ge in ui)Object.defineProperty(oe,ge,{get:()=>l.value[ge],enumerable:!0});V.provide(kl,fe),V.provide(Wl,ah(oe)),V.provide(ul,l);const ie=V.unmount;Q.add(V),V.unmount=function(){Q.delete(V),Q.size<1&&(u=ui,K&&K(),K=null,l.value=ui,Le=!1,j=!1),ie()}}};function xe(V){return V.reduce((oe,ie)=>oe.then(()=>G(ie)),Promise.resolve())}return fe}function cd(n){return zn(Wl)}const N_="/logo.svg",ko=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},O_={class:"nav-links hide-mobile u-flex u-gap-36"},F_=["aria-label","aria-expanded"],B_={__name:"Nav",setup(n){const e=cd(),t=xt(!1),i=xt(!1),r=[{label:"Projects",to:"/projects"},{label:"About",to:{path:"/",hash:"#about"}},{label:"Contact",to:{path:"/",hash:"#contact"}}];function s(){t.value=window.scrollY>50}function a(y){var v;return typeof y.to=="string"?e.path===y.to:(v=y.to)!=null&&v.hash?e.path===(y.to.path||"/")&&e.hash===y.to.hash:!1}function o(y){y.currentTarget.style.transform="rotate(-8deg) scale(1.1)"}function l(y){y.currentTarget.style.transform="rotate(0deg) scale(1)"}Gr(()=>{s(),window.addEventListener("scroll",s)}),tr(()=>{window.removeEventListener("scroll",s)});const u=yt(()=>({position:"fixed",top:0,left:0,right:0,zIndex:200,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 52px",background:t.value?"rgba(10,14,20,0.85)":"transparent",backdropFilter:t.value?"blur(20px)":"none",borderBottom:t.value?"1px solid rgba(255,255,255,0.07)":"1px solid transparent",transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)"})),c={display:"flex",alignItems:"center",gap:"10px",cursor:"none"},f={width:"36px",height:"36px",borderRadius:"10px",transition:"transform 0.2s"},h={fontFamily:"var(--display)",fontWeight:700,fontSize:"var(--text-lg)",color:"var(--text)",letterSpacing:"-0.02em"},p={display:"flex",alignItems:"center",gap:"8px",padding:"8px 18px",borderRadius:"var(--radius-pill)",background:"rgba(74,255,145,0.1)",border:"1px solid rgba(74,255,145,0.25)"},_={width:"7px",height:"7px",borderRadius:"50%",background:"var(--lime)",opacity:.9},S={fontFamily:"var(--mono)",fontSize:"var(--text-xs)",letterSpacing:"0.1em",color:"var(--lime)",textTransform:"uppercase"},m={position:"fixed",top:"76px",left:0,right:0,bottom:0,background:"var(--bg)",padding:"32px",display:"flex",flexDirection:"column",gap:"24px",zIndex:199};function d(y){const v={width:"24px",height:"2px",background:"var(--text)",position:"relative",transition:"all 0.3s"};return y?{...v,background:"transparent"}:v}return(y,v)=>{const b=Bo("RouterLink");return qe(),Ke("nav",{style:Qt(u.value)},[Ne(b,{to:"/",style:c},{default:pt(()=>[se("img",{src:N_,alt:"Logo",style:f,onMouseenter:o,onMouseleave:l},null,32),se("span",{style:h},"Prabath")]),_:1}),se("div",O_,[(qe(),Ke(_t,null,ii(r,P=>Ne(b,{key:P.label,to:P.to,class:Dt(["nav-link",{active:a(P)}])},{default:pt(()=>[ht(gt(P.label),1)]),_:2},1032,["to","class"])),64))]),se("button",{class:"mobile-menu-btn hide-desktop",onClick:v[0]||(v[0]=P=>i.value=!i.value),"aria-label":i.value?"Close menu":"Open menu","aria-expanded":i.value.toString()},[se("span",{style:Qt(d(i.value))},null,4)],8,F_),Ne(tg,{name:"mobile-menu"},{default:pt(()=>[i.value?(qe(),Ke("div",{key:0,class:"mobile-menu",style:m},[(qe(),Ke(_t,null,ii(r,P=>Ne(b,{key:P.label,to:P.to,class:"mobile-nav-link",onClick:v[1]||(v[1]=R=>i.value=!1)},{default:pt(()=>[ht(gt(P.label),1)]),_:2},1032,["to"])),64)),se("div",{style:Qt([p,{"margin-top":"24px"}])},[se("div",{style:_}),se("span",{style:S},"Online")])])):qi("",!0)]),_:1}),se("div",{class:"hide-mobile",style:p},[se("div",{style:_}),se("span",{style:S},"Online")])],4)}}},z_=ko(B_,[["__scopeId","data-v-6cd13377"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xl="162",H_=0,ou=1,G_=2,ud=1,V_=2,Kn=3,Ti=0,en=1,ti=2,Mi=0,Lr=1,au=2,lu=3,cu=4,k_=5,Wi=100,W_=101,X_=102,uu=103,fu=104,q_=200,j_=201,Y_=202,$_=203,fl=204,hl=205,K_=206,Z_=207,J_=208,Q_=209,ev=210,tv=211,nv=212,iv=213,rv=214,sv=0,ov=1,av=2,yo=3,lv=4,cv=5,uv=6,fv=7,fd=0,hv=1,dv=2,yi=0,pv=1,mv=2,gv=3,hd=4,_v=5,vv=6,xv=7,dd=300,Or=301,Fr=302,dl=303,pl=304,Wo=306,ml=1e3,Mn=1001,gl=1002,Xt=1003,hu=1004,$r=1005,Zt=1006,da=1007,Yi=1008,Ei=1009,Sv=1010,Mv=1011,ql=1012,pd=1013,Si=1014,ni=1015,Ss=1016,md=1017,gd=1018,Zi=1020,yv=1021,yn=1023,Ev=1024,bv=1025,Ji=1026,Br=1027,Tv=1028,_d=1029,Av=1030,vd=1031,xd=1033,pa=33776,ma=33777,ga=33778,_a=33779,du=35840,pu=35841,mu=35842,gu=35843,Sd=36196,_u=37492,vu=37496,xu=37808,Su=37809,Mu=37810,yu=37811,Eu=37812,bu=37813,Tu=37814,Au=37815,wu=37816,Ru=37817,Cu=37818,Pu=37819,Lu=37820,Du=37821,va=36492,Iu=36494,Uu=36495,wv=36283,Nu=36284,Ou=36285,Fu=36286,Rv=3200,Cv=3201,Md=0,Pv=1,xi="",Sn="srgb",wi="srgb-linear",jl="display-p3",Xo="display-p3-linear",Eo="linear",lt="srgb",bo="rec709",To="p3",rr=7680,Bu=519,Lv=512,Dv=513,Iv=514,yd=515,Uv=516,Nv=517,Ov=518,Fv=519,zu=35044,Hu="300 es",_l=1035,ri=2e3,Ao=2001;class Vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xa=Math.PI/180,vl=180/Math.PI;function bs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Jt(n,e,t){return Math.max(e,Math.min(t,n))}function Bv(n,e){return(n%e+e)%e}function Sa(n,e,t){return(1-t)*n+t*e}function Gu(n){return(n&n-1)===0&&n!==0}function xl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Kr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],S=r[0],m=r[3],d=r[6],y=r[1],v=r[4],b=r[7],P=r[2],R=r[5],w=r[8];return s[0]=a*S+o*y+l*P,s[3]=a*m+o*v+l*R,s[6]=a*d+o*b+l*w,s[1]=u*S+c*y+f*P,s[4]=u*m+c*v+f*R,s[7]=u*d+c*b+f*w,s[2]=h*S+p*y+_*P,s[5]=h*m+p*v+_*R,s[8]=h*d+p*b+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,h=o*l-c*s,p=u*s-a*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*u-c*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(c*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(i*l-u*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ma.makeScale(e,t)),this}rotate(e){return this.premultiply(Ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ma=new We;function Ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function wo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zv(){const n=wo("canvas");return n.style.display="block",n}const Vu={};function Hv(n){n in Vu||(Vu[n]=!0,console.warn(n))}const ku=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wu=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ns={[wi]:{transfer:Eo,primaries:bo,toReference:n=>n,fromReference:n=>n},[Sn]:{transfer:lt,primaries:bo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Xo]:{transfer:Eo,primaries:To,toReference:n=>n.applyMatrix3(Wu),fromReference:n=>n.applyMatrix3(ku)},[jl]:{transfer:lt,primaries:To,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Wu),fromReference:n=>n.applyMatrix3(ku).convertLinearToSRGB()}},Gv=new Set([wi,Xo]),nt={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Gv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ns[e].toReference,r=Ns[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ns[n].primaries},getTransfer:function(n){return n===xi?Eo:Ns[n].transfer}};function Dr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ya(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let sr;class bd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=wo("canvas")),sr.width=e.width,sr.height=e.height;const i=sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=wo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Dr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Dr(t[i]/255)*255):t[i]=Dr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vv=0;class Td{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vv++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ea(r[a].image)):s.push(Ea(r[a]))}else s=Ea(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ea(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?bd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kv=0;class tn extends Vr{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,i=Mn,r=Mn,s=Zt,a=Yi,o=yn,l=Ei,u=tn.DEFAULT_ANISOTROPY,c=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kv++}),this.uuid=bs(),this.name="",this.source=new Td(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ml:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ml:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=dd;tn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,b=(p+1)/2,P=(d+1)/2,R=(c+h)/4,w=(f+S)/4,F=(_+m)/4;return v>b&&v>P?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=w/i):b>P?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=F/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=F/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-S)/y,this.z=(h-c)/y,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wv extends Vr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new tn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends Wv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ad extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xv extends tn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=S;return}if(f!==S||l!==h||u!==p||c!==_){let m=1-o;const d=l*h+u*p+c*_+f*S,y=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,d*y);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const b=o*y;if(l=l*m+h*b,u=u*m+p*b,c=c*m+_*b,f=f*m+S*b,m===1-o){const P=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=P,u*=P,c*=P,f*=P}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-o*p,e[t+2]=u*_+c*p+o*h-l*f,e[t+3]=c*_-o*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new k,Xu=new Ts;class As{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(s,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Os.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Os.copy(i.boundingBox)),Os.applyMatrix4(e.matrixWorld),this.union(Os)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),Fs.subVectors(this.max,Zr),or.subVectors(e.a,Zr),ar.subVectors(e.b,Zr),lr.subVectors(e.c,Zr),fi.subVectors(ar,or),hi.subVectors(lr,ar),Ui.subVectors(or,lr);let t=[0,-fi.z,fi.y,0,-hi.z,hi.y,0,-Ui.z,Ui.y,fi.z,0,-fi.x,hi.z,0,-hi.x,Ui.z,0,-Ui.x,-fi.y,fi.x,0,-hi.y,hi.x,0,-Ui.y,Ui.x,0];return!Ta(t,or,ar,lr,Fs)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,or,ar,lr,Fs))?!1:(Bs.crossVectors(fi,hi),t=[Bs.x,Bs.y,Bs.z],Ta(t,or,ar,lr,Fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xn=[new k,new k,new k,new k,new k,new k,new k,new k],gn=new k,Os=new As,or=new k,ar=new k,lr=new k,fi=new k,hi=new k,Ui=new k,Zr=new k,Fs=new k,Bs=new k,Ni=new k;function Ta(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ni.fromArray(n,s);const o=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),u=t.dot(Ni),c=i.dot(Ni);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const qv=new As,Jr=new k,Aa=new k;class ws{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):qv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);const t=Jr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Aa)),this.expandByPoint(Jr.copy(e.center).sub(Aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new k,wa=new k,zs=new k,di=new k,Ra=new k,Hs=new k,Ca=new k;class Yl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){wa.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),di.copy(this.origin).sub(wa);const s=e.distanceTo(t)*.5,a=-this.direction.dot(zs),o=di.dot(this.direction),l=-di.dot(zs),u=di.lengthSq(),c=Math.abs(1-a*a);let f,h,p,_;if(c>0)if(f=a*l-o,h=a*o-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const S=1/c;f*=S,h*=S,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(wa).addScaledVector(zs,h),p}intersectSphere(e,t){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,i,r,s){Ra.subVectors(t,e),Hs.subVectors(i,e),Ca.crossVectors(Ra,Hs);let a=this.direction.dot(Ca),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,e);const l=o*this.direction.dot(Hs.crossVectors(di,Hs));if(l<0)return null;const u=o*this.direction.dot(Ra.cross(di));if(u<0||l+u>a)return null;const c=-o*di.dot(Ca);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,a,o,l,u,c,f,h,p,_,S,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,h,p,_,S,m)}set(e,t,i,r,s,a,o,l,u,c,f,h,p,_,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/cr.setFromMatrixColumn(e,0).length(),s=1/cr.setFromMatrixColumn(e,1).length(),a=1/cr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*c,p=a*f,_=o*c,S=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-S*u,t[9]=-o*l,t[2]=S-h*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,S=u*f;t[0]=h+S*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,S=u*f;t[0]=h-S*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=S-h*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,p=a*f,_=o*c,S=o*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+S,t[1]=l*f,t[5]=S*u+h,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*u,_=o*l,S=o*u;t[0]=l*c,t[4]=S-h*f,t[8]=_*f+p,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,p=a*u,_=o*l,S=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+S,t[5]=a*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*c,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Yv)}lookAt(e,t,i){const r=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),pi.crossVectors(i,rn),pi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),pi.crossVectors(i,rn)),pi.normalize(),Gs.crossVectors(rn,pi),r[0]=pi.x,r[4]=Gs.x,r[8]=rn.x,r[1]=pi.y,r[5]=Gs.y,r[9]=rn.y,r[2]=pi.z,r[6]=Gs.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],S=i[6],m=i[10],d=i[14],y=i[3],v=i[7],b=i[11],P=i[15],R=r[0],w=r[4],F=r[8],G=r[12],M=r[1],A=r[5],B=r[9],K=r[13],I=r[2],W=r[6],L=r[10],j=r[14],N=r[3],ne=r[7],ce=r[11],he=r[15];return s[0]=a*R+o*M+l*I+u*N,s[4]=a*w+o*A+l*W+u*ne,s[8]=a*F+o*B+l*L+u*ce,s[12]=a*G+o*K+l*j+u*he,s[1]=c*R+f*M+h*I+p*N,s[5]=c*w+f*A+h*W+p*ne,s[9]=c*F+f*B+h*L+p*ce,s[13]=c*G+f*K+h*j+p*he,s[2]=_*R+S*M+m*I+d*N,s[6]=_*w+S*A+m*W+d*ne,s[10]=_*F+S*B+m*L+d*ce,s[14]=_*G+S*K+m*j+d*he,s[3]=y*R+v*M+b*I+P*N,s[7]=y*w+v*A+b*W+P*ne,s[11]=y*F+v*B+b*L+P*ce,s[15]=y*G+v*K+b*j+P*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],S=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*o*h+i*u*h+r*o*p-i*l*p)+S*(+t*l*p-t*u*h+s*a*h-r*a*p+r*u*c-s*l*c)+m*(+t*u*f-t*o*p-s*a*f+i*a*p+s*o*c-i*u*c)+d*(-r*o*c-t*l*f+t*o*h+r*a*f-i*a*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],S=e[13],m=e[14],d=e[15],y=f*m*u-S*h*u+S*l*p-o*m*p-f*l*d+o*h*d,v=_*h*u-c*m*u-_*l*p+a*m*p+c*l*d-a*h*d,b=c*S*u-_*f*u+_*o*p-a*S*p-c*o*d+a*f*d,P=_*f*l-c*S*l-_*o*h+a*S*h+c*o*m-a*f*m,R=t*y+i*v+r*b+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=y*w,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(o*m*s-S*l*s+S*r*u-i*m*u-o*r*d+i*l*d)*w,e[3]=(f*l*s-o*h*s-f*r*u+i*h*u+o*r*p-i*l*p)*w,e[4]=v*w,e[5]=(c*m*s-_*h*s+_*r*p-t*m*p-c*r*d+t*h*d)*w,e[6]=(_*l*s-a*m*s-_*r*u+t*m*u+a*r*d-t*l*d)*w,e[7]=(a*h*s-c*l*s+c*r*u-t*h*u-a*r*p+t*l*p)*w,e[8]=b*w,e[9]=(_*f*s-c*S*s-_*i*p+t*S*p+c*i*d-t*f*d)*w,e[10]=(a*S*s-_*o*s+_*i*u-t*S*u-a*i*d+t*o*d)*w,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*p-t*o*p)*w,e[12]=P*w,e[13]=(c*S*r-_*f*r+_*i*h-t*S*h-c*i*m+t*f*m)*w,e[14]=(_*o*r-a*S*r-_*i*l+t*S*l+a*i*m-t*o*m)*w,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*h+t*o*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,h=s*u,p=s*c,_=s*f,S=a*c,m=a*f,d=o*f,y=l*u,v=l*c,b=l*f,P=i.x,R=i.y,w=i.z;return r[0]=(1-(S+d))*P,r[1]=(p+b)*P,r[2]=(_-v)*P,r[3]=0,r[4]=(p-b)*R,r[5]=(1-(h+d))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(_+v)*w,r[9]=(m-y)*w,r[10]=(1-(h+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=cr.set(r[0],r[1],r[2]).length();const a=cr.set(r[4],r[5],r[6]).length(),o=cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const u=1/s,c=1/a,f=1/o;return _n.elements[0]*=u,_n.elements[1]*=u,_n.elements[2]*=u,_n.elements[4]*=c,_n.elements[5]*=c,_n.elements[6]*=c,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ri){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(o===ri)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ao)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ri){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(a-s),h=(t+e)*u,p=(i+r)*c;let _,S;if(o===ri)_=(a+s)*f,S=-2*f;else if(o===Ao)_=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const cr=new k,_n=new dt,jv=new k(0,0,0),Yv=new k(1,1,1),pi=new k,Gs=new k,rn=new k,qu=new dt,ju=new Ts;class Hn{constructor(e=0,t=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ju.setFromEuler(this),this.setFromQuaternion(ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class wd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $v=0;const Yu=new k,ur=new Ts,jn=new dt,Vs=new k,Qr=new k,Kv=new k,Zv=new Ts,$u=new k(1,0,0),Ku=new k(0,1,0),Zu=new k(0,0,1),Jv={type:"added"},Qv={type:"removed"},Pa={type:"childadded",child:null},La={type:"childremoved",child:null};class Pt extends Vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new k,t=new Hn,i=new Ts,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new We}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Ku,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Ku,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Vs.copy(e):Vs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Qr,Vs,this.up):jn.lookAt(Vs,Qr,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(jn),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jv),Pa.child=e,this.dispatchEvent(Pa),Pa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qv),La.child=e,this.dispatchEvent(La),La.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Kv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Zv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new k(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new k,Yn=new k,Da=new k,$n=new k,fr=new k,hr=new k,Ju=new k,Ia=new k,Ua=new k,Na=new k;class Fn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),vn.subVectors(e,t),r.cross(vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){vn.subVectors(r,t),Yn.subVectors(i,t),Da.subVectors(e,t);const a=vn.dot(vn),o=vn.dot(Yn),l=vn.dot(Da),u=Yn.dot(Yn),c=Yn.dot(Da),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-o*c)*h,_=(a*c-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$n.x),l.addScaledVector(a,$n.y),l.addScaledVector(o,$n.z),l)}static isFrontFacing(e,t,i,r){return vn.subVectors(i,t),Yn.subVectors(e,t),vn.cross(Yn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),vn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;fr.subVectors(r,i),hr.subVectors(s,i),Ia.subVectors(e,i);const l=fr.dot(Ia),u=hr.dot(Ia);if(l<=0&&u<=0)return t.copy(i);Ua.subVectors(e,r);const c=fr.dot(Ua),f=hr.dot(Ua);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(fr,a);Na.subVectors(e,s);const p=fr.dot(Na),_=hr.dot(Na);if(_>=0&&p<=_)return t.copy(s);const S=p*u-l*_;if(S<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(hr,o);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return Ju.subVectors(s,r),o=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(Ju,o);const d=1/(m+S+h);return a=S*d,o=h*d,t.copy(i).addScaledVector(fr,a).addScaledVector(hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},ks={h:0,s:0,l:0};function Oa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Bv(e,1),t=Jt(t,0,1),i=Jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Oa(a,s,e+1/3),this.g=Oa(a,s,e),this.b=Oa(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=Rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=ya(e.r),this.g=ya(e.g),this.b=ya(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return nt.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Jt(Ot.r*255,0,255))*65536+Math.round(Jt(Ot.g*255,0,255))*256+Math.round(Jt(Ot.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Ot.copy(this),t);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Sn){nt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,i=Ot.g,r=Ot.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(mi),this.setHSL(mi.h+e,mi.s+t,mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(mi),e.getHSL(ks);const i=Sa(mi.h,ks.h,t),r=Sa(mi.s,ks.s,t),s=Sa(mi.l,ks.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ze;Ze.NAMES=Rd;let e0=0;class nr extends Vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Lr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=hl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fl&&(i.blendSrc=this.blendSrc),this.blendDst!==hl&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ro extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new k,Ws=new Ye;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=zu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Kr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yt(t,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zu&&(e.usage=this.usage),e}}class Cd extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pd extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bn extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let t0=0;const un=new dt,Fa=new Pt,dr=new k,sn=new As,es=new As,Rt=new k;class mn extends Vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?Pd:Cd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new bn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new As);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];es.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(sn.min,es.min),sn.expandByPoint(Rt),Rt.addVectors(sn.max,es.max),sn.expandByPoint(Rt)):(sn.expandByPoint(es.min),sn.expandByPoint(es.max))}sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Rt.fromBufferAttribute(o,u),l&&(dr.fromBufferAttribute(e,u),Rt.add(dr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new k,l[F]=new k;const u=new k,c=new k,f=new k,h=new Ye,p=new Ye,_=new Ye,S=new k,m=new k;function d(F,G,M){u.fromBufferAttribute(i,F),c.fromBufferAttribute(i,G),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,F),p.fromBufferAttribute(s,G),_.fromBufferAttribute(s,M),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const A=1/(p.x*_.y-_.x*p.y);isFinite(A)&&(S.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(A),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(A),o[F].add(S),o[G].add(S),o[M].add(S),l[F].add(m),l[G].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let F=0,G=y.length;F<G;++F){const M=y[F],A=M.start,B=M.count;for(let K=A,I=A+B;K<I;K+=3)d(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const v=new k,b=new k,P=new k,R=new k;function w(F){P.fromBufferAttribute(r,F),R.copy(P);const G=o[F];v.copy(G),v.sub(P.multiplyScalar(P.dot(G))).normalize(),b.crossVectors(R,G);const A=b.dot(l[F])<0?-1:1;a.setXYZW(F,v.x,v.y,v.z,A)}for(let F=0,G=y.length;F<G;++F){const M=y[F],A=M.start,B=M.count;for(let K=A,I=A+B;K<I;K+=3)w(e.getX(K+0)),w(e.getX(K+1)),w(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,u=new k,c=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new pn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qu=new dt,Oi=new Yl,Xs=new ws,ef=new k,pr=new k,mr=new k,gr=new k,Ba=new k,qs=new k,js=new Ye,Ys=new Ye,$s=new Ye,tf=new k,nf=new k,rf=new k,Ks=new k,Zs=new k;class hn extends Pt{constructor(e=new mn,t=new Ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){qs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(Ba.fromBufferAttribute(f,e),a?qs.addScaledVector(Ba,c):qs.addScaledVector(Ba.sub(t),c))}t.add(qs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere),Xs.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(Xs.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Xs,ef)===null||Oi.origin.distanceToSquared(ef)>(e.far-e.near)**2))&&(Qu.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(Qu),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,P=v;b<P;b+=3){const R=o.getX(b),w=o.getX(b+1),F=o.getX(b+2);r=Js(this,d,e,i,u,c,f,R,w,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const y=o.getX(m),v=o.getX(m+1),b=o.getX(m+2);r=Js(this,a,e,i,u,c,f,y,v,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=a[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,P=v;b<P;b+=3){const R=b,w=b+1,F=b+2;r=Js(this,d,e,i,u,c,f,R,w,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const y=m,v=m+1,b=m+2;r=Js(this,a,e,i,u,c,f,y,v,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function n0(n,e,t,i,r,s,a,o){let l;if(e.side===en?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ti,o),l===null)return null;Zs.copy(o),Zs.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Zs);return u<t.near||u>t.far?null:{distance:u,point:Zs.clone(),object:n}}function Js(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,pr),n.getVertexPosition(l,mr),n.getVertexPosition(u,gr);const c=n0(n,e,t,i,pr,mr,gr,Ks);if(c){r&&(js.fromBufferAttribute(r,o),Ys.fromBufferAttribute(r,l),$s.fromBufferAttribute(r,u),c.uv=Fn.getInterpolation(Ks,pr,mr,gr,js,Ys,$s,new Ye)),s&&(js.fromBufferAttribute(s,o),Ys.fromBufferAttribute(s,l),$s.fromBufferAttribute(s,u),c.uv1=Fn.getInterpolation(Ks,pr,mr,gr,js,Ys,$s,new Ye)),a&&(tf.fromBufferAttribute(a,o),nf.fromBufferAttribute(a,l),rf.fromBufferAttribute(a,u),c.normal=Fn.getInterpolation(Ks,pr,mr,gr,tf,nf,rf,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new k,materialIndex:0};Fn.getNormal(pr,mr,gr,f.normal),c.face=f}return c}class Rs extends mn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(u,3)),this.setAttribute("normal",new bn(c,3)),this.setAttribute("uv",new bn(f,2));function _(S,m,d,y,v,b,P,R,w,F,G){const M=b/w,A=P/F,B=b/2,K=P/2,I=R/2,W=w+1,L=F+1;let j=0,N=0;const ne=new k;for(let ce=0;ce<L;ce++){const he=ce*A-K;for(let _e=0;_e<W;_e++){const Le=_e*M-B;ne[S]=Le*y,ne[m]=he*v,ne[d]=I,u.push(ne.x,ne.y,ne.z),ne[S]=0,ne[m]=0,ne[d]=R>0?1:-1,c.push(ne.x,ne.y,ne.z),f.push(_e/w),f.push(1-ce/F),j+=1}}for(let ce=0;ce<F;ce++)for(let he=0;he<w;he++){const _e=h+he+W*ce,Le=h+he+W*(ce+1),Q=h+(he+1)+W*(ce+1),fe=h+(he+1)+W*ce;l.push(_e,Le,fe),l.push(Le,Q,fe),N+=6}o.addGroup(p,N,G),p+=N,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=zr(n[t]);for(const r in i)e[r]=i[r]}return e}function i0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ld(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const r0={clone:zr,merge:kt};var s0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=s0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=i0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dd extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gi=new k,sf=new Ye,of=new Ye;class fn extends Dd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vl*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,t){return this.getViewBounds(e,sf,of),t.subVectors(of,sf)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,vr=1;class a0 extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(_r,vr,e,t);r.layers=this.layers,this.add(r);const s=new fn(_r,vr,e,t);s.layers=this.layers,this.add(s);const a=new fn(_r,vr,e,t);a.layers=this.layers,this.add(a);const o=new fn(_r,vr,e,t);o.layers=this.layers,this.add(o);const l=new fn(_r,vr,e,t);l.layers=this.layers,this.add(l);const u=new fn(_r,vr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ao)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Id extends tn{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Or,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class l0 extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Id(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rs(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Mi});s.uniforms.tEquirect.value=t;const a=new hn(r,s),o=t.minFilter;return t.minFilter===Yi&&(t.minFilter=Zt),new a0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const za=new k,c0=new k,u0=new We;class Gi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=za.subVectors(i,t).cross(c0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(za),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||u0.getNormalMatrix(e),r=this.coplanarPoint(za).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new ws,Qs=new k;class $l{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,s=new Gi,a=new Gi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],S=r[10],m=r[11],d=r[12],y=r[13],v=r[14],b=r[15];if(i[0].setComponents(l-s,h-u,m-p,b-d).normalize(),i[1].setComponents(l+s,h+u,m+p,b+d).normalize(),i[2].setComponents(l+a,h+c,m+_,b+y).normalize(),i[3].setComponents(l-a,h-c,m-_,b-y).normalize(),i[4].setComponents(l-o,h-f,m-S,b-v).normalize(),t===ri)i[5].setComponents(l+o,h+f,m+S,b+v).normalize();else if(t===Ao)i[5].setComponents(o,f,S,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ud(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function f0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,f,h),u.onUploadCallback();let S;if(f instanceof Float32Array)S=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)S=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=n.SHORT;else if(f instanceof Uint32Array)S=n.UNSIGNED_INT;else if(f instanceof Int32Array)S=n.INT;else if(f instanceof Int8Array)S=n.BYTE;else if(f instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const h=c.array,p=c._updateRange,_=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&_.length===0&&n.bufferSubData(f,0,h),_.length!==0){for(let S=0,m=_.length;S<m;S++){const d=_[S];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:a,remove:o,update:l}}class Cs extends mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,h=t/l,p=[],_=[],S=[],m=[];for(let d=0;d<c;d++){const y=d*h-a;for(let v=0;v<u;v++){const b=v*f-s;_.push(b,-y,0),S.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const v=y+u*d,b=y+u*(d+1),P=y+1+u*(d+1),R=y+1+u*d;p.push(v,b,R),p.push(b,P,R)}this.setIndex(p),this.setAttribute("position",new bn(_,3)),this.setAttribute("normal",new bn(S,3)),this.setAttribute("uv",new bn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N0=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,O0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,H0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,G0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,ex=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rx=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,sx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,ox=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ux=`PhysicalMaterial material;
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
#endif`,fx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,hx=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,dx=`#if defined( RE_IndirectDiffuse )
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
#endif`,px=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yx=`#if defined( USE_POINTS_UV )
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
#endif`,Ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ax=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Rx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nx=`#ifdef USE_NORMALMAP
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
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,$x=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oS=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aS=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`#include <common>
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
}`,xS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,SS=`#define DISTANCE
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
}`,MS=`#define DISTANCE
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
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ES=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
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
}`,TS=`uniform vec3 diffuse;
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
}`,AS=`#include <common>
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
}`,wS=`uniform vec3 diffuse;
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
}`,RS=`#define LAMBERT
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
}`,CS=`#define LAMBERT
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
}`,PS=`#define MATCAP
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
}`,LS=`#define MATCAP
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
}`,DS=`#define NORMAL
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
}`,IS=`#define NORMAL
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
}`,US=`#define PHONG
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
}`,NS=`#define PHONG
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
}`,OS=`#define STANDARD
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
}`,FS=`#define STANDARD
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
}`,BS=`#define TOON
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
}`,zS=`#define TOON
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
}`,HS=`uniform float size;
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
}`,GS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,kS=`uniform vec3 color;
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
}`,WS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,XS=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:h0,alphahash_pars_fragment:d0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:_0,aomap_fragment:v0,aomap_pars_fragment:x0,batching_pars_vertex:S0,batching_vertex:M0,begin_vertex:y0,beginnormal_vertex:E0,bsdfs:b0,iridescence_fragment:T0,bumpmap_pars_fragment:A0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:P0,color_fragment:L0,color_pars_fragment:D0,color_pars_vertex:I0,color_vertex:U0,common:N0,cube_uv_reflection_fragment:O0,defaultnormal_vertex:F0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:H0,emissivemap_pars_fragment:G0,colorspace_fragment:V0,colorspace_pars_fragment:k0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:q0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:sx,envmap_vertex:Y0,fog_vertex:$0,fog_pars_vertex:K0,fog_fragment:Z0,fog_pars_fragment:J0,gradientmap_pars_fragment:Q0,lightmap_fragment:ex,lightmap_pars_fragment:tx,lights_lambert_fragment:nx,lights_lambert_pars_fragment:ix,lights_pars_begin:rx,lights_toon_fragment:ox,lights_toon_pars_fragment:ax,lights_phong_fragment:lx,lights_phong_pars_fragment:cx,lights_physical_fragment:ux,lights_physical_pars_fragment:fx,lights_fragment_begin:hx,lights_fragment_maps:dx,lights_fragment_end:px,logdepthbuf_fragment:mx,logdepthbuf_pars_fragment:gx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:vx,map_fragment:xx,map_pars_fragment:Sx,map_particle_fragment:Mx,map_particle_pars_fragment:yx,metalnessmap_fragment:Ex,metalnessmap_pars_fragment:bx,morphinstance_vertex:Tx,morphcolor_vertex:Ax,morphnormal_vertex:wx,morphtarget_pars_vertex:Rx,morphtarget_vertex:Cx,normal_fragment_begin:Px,normal_fragment_maps:Lx,normal_pars_fragment:Dx,normal_pars_vertex:Ix,normal_vertex:Ux,normalmap_pars_fragment:Nx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Fx,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:zx,opaque_fragment:Hx,packing:Gx,premultiplied_alpha_fragment:Vx,project_vertex:kx,dithering_fragment:Wx,dithering_pars_fragment:Xx,roughnessmap_fragment:qx,roughnessmap_pars_fragment:jx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:$x,shadowmap_vertex:Kx,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Qx,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:oS,transmission_pars_fragment:aS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:fS,background_vert:hS,background_frag:dS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:_S,depth_vert:vS,depth_frag:xS,distanceRGBA_vert:SS,distanceRGBA_frag:MS,equirect_vert:yS,equirect_frag:ES,linedashed_vert:bS,linedashed_frag:TS,meshbasic_vert:AS,meshbasic_frag:wS,meshlambert_vert:RS,meshlambert_frag:CS,meshmatcap_vert:PS,meshmatcap_frag:LS,meshnormal_vert:DS,meshnormal_frag:IS,meshphong_vert:US,meshphong_frag:NS,meshphysical_vert:OS,meshphysical_frag:FS,meshtoon_vert:BS,meshtoon_frag:zS,points_vert:HS,points_frag:GS,shadow_vert:VS,shadow_frag:kS,sprite_vert:WS,sprite_frag:XS},Se={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Nn={basic:{uniforms:kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:kt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:kt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ze(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:kt([Se.points,Se.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:kt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:kt([Se.common,Se.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:kt([Se.sprite,Se.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:kt([Se.common,Se.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:kt([Se.lights,Se.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Nn.physical={uniforms:kt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const eo={r:0,b:0,g:0},Bi=new Hn,qS=new dt;function jS(n,e,t,i,r,s,a){const o=new Ze(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(m,d){let y=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?S(o,l):v&&v.isColor&&(S(v,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Wo)?(c===void 0&&(c=new hn(new Rs(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:zr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Bi.copy(d.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qS.makeRotationFromEuler(Bi)),c.material.toneMapped=nt.getTransfer(v.colorSpace)!==lt,(f!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new hn(new Cs(2,2),new Ai({name:"BackgroundMaterial",uniforms:zr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=nt.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function S(m,d){m.getRGB(eo,Ld(n)),i.buffers.color.setClear(eo.r,eo.g,eo.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,S(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(o,l)},render:_}}function YS(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let u=l,c=!1;function f(I,W,L,j,N){let ne=!1;if(a){const ce=S(j,L,W);u!==ce&&(u=ce,p(u.object)),ne=d(I,j,L,N),ne&&y(I,j,L,N)}else{const ce=W.wireframe===!0;(u.geometry!==j.id||u.program!==L.id||u.wireframe!==ce)&&(u.geometry=j.id,u.program=L.id,u.wireframe=ce,ne=!0)}N!==null&&t.update(N,n.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,F(I,W,L,j),N!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function S(I,W,L){const j=L.wireframe===!0;let N=o[I.id];N===void 0&&(N={},o[I.id]=N);let ne=N[W.id];ne===void 0&&(ne={},N[W.id]=ne);let ce=ne[j];return ce===void 0&&(ce=m(h()),ne[j]=ce),ce}function m(I){const W=[],L=[],j=[];for(let N=0;N<r;N++)W[N]=0,L[N]=0,j[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:L,attributeDivisors:j,object:I,attributes:{},index:null}}function d(I,W,L,j){const N=u.attributes,ne=W.attributes;let ce=0;const he=L.getAttributes();for(const _e in he)if(he[_e].location>=0){const Q=N[_e];let fe=ne[_e];if(fe===void 0&&(_e==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),_e==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),Q===void 0||Q.attribute!==fe||fe&&Q.data!==fe.data)return!0;ce++}return u.attributesNum!==ce||u.index!==j}function y(I,W,L,j){const N={},ne=W.attributes;let ce=0;const he=L.getAttributes();for(const _e in he)if(he[_e].location>=0){let Q=ne[_e];Q===void 0&&(_e==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),_e==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));const fe={};fe.attribute=Q,Q&&Q.data&&(fe.data=Q.data),N[_e]=fe,ce++}u.attributes=N,u.attributesNum=ce,u.index=j}function v(){const I=u.newAttributes;for(let W=0,L=I.length;W<L;W++)I[W]=0}function b(I){P(I,0)}function P(I,W){const L=u.newAttributes,j=u.enabledAttributes,N=u.attributeDivisors;L[I]=1,j[I]===0&&(n.enableVertexAttribArray(I),j[I]=1),N[I]!==W&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,W),N[I]=W)}function R(){const I=u.newAttributes,W=u.enabledAttributes;for(let L=0,j=W.length;L<j;L++)W[L]!==I[L]&&(n.disableVertexAttribArray(L),W[L]=0)}function w(I,W,L,j,N,ne,ce){ce===!0?n.vertexAttribIPointer(I,W,L,N,ne):n.vertexAttribPointer(I,W,L,j,N,ne)}function F(I,W,L,j){if(i.isWebGL2===!1&&(I.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const N=j.attributes,ne=L.getAttributes(),ce=W.defaultAttributeValues;for(const he in ne){const _e=ne[he];if(_e.location>=0){let Le=N[he];if(Le===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(Le=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(Le=I.instanceColor)),Le!==void 0){const Q=Le.normalized,fe=Le.itemSize,xe=t.get(Le);if(xe===void 0)continue;const V=xe.buffer,oe=xe.type,ie=xe.bytesPerElement,ge=i.isWebGL2===!0&&(oe===n.INT||oe===n.UNSIGNED_INT||Le.gpuType===pd);if(Le.isInterleavedBufferAttribute){const Me=Le.data,g=Me.stride,C=Le.offset;if(Me.isInstancedInterleavedBuffer){for(let D=0;D<_e.locationSize;D++)P(_e.location+D,Me.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let D=0;D<_e.locationSize;D++)b(_e.location+D);n.bindBuffer(n.ARRAY_BUFFER,V);for(let D=0;D<_e.locationSize;D++)w(_e.location+D,fe/_e.locationSize,oe,Q,g*ie,(C+fe/_e.locationSize*D)*ie,ge)}else{if(Le.isInstancedBufferAttribute){for(let Me=0;Me<_e.locationSize;Me++)P(_e.location+Me,Le.meshPerAttribute);I.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let Me=0;Me<_e.locationSize;Me++)b(_e.location+Me);n.bindBuffer(n.ARRAY_BUFFER,V);for(let Me=0;Me<_e.locationSize;Me++)w(_e.location+Me,fe/_e.locationSize,oe,Q,fe*ie,fe/_e.locationSize*Me*ie,ge)}}else if(ce!==void 0){const Q=ce[he];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(_e.location,Q);break;case 3:n.vertexAttrib3fv(_e.location,Q);break;case 4:n.vertexAttrib4fv(_e.location,Q);break;default:n.vertexAttrib1fv(_e.location,Q)}}}}R()}function G(){B();for(const I in o){const W=o[I];for(const L in W){const j=W[L];for(const N in j)_(j[N].object),delete j[N];delete W[L]}delete o[I]}}function M(I){if(o[I.id]===void 0)return;const W=o[I.id];for(const L in W){const j=W[L];for(const N in j)_(j[N].object),delete j[N];delete W[L]}delete o[I.id]}function A(I){for(const W in o){const L=o[W];if(L[I.id]===void 0)continue;const j=L[I.id];for(const N in j)_(j[N].object),delete j[N];delete L[I.id]}}function B(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:K,dispose:G,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:b,disableUnusedAttributes:R}}function $S(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(c[_],f[_]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,h);let _=0;for(let S=0;S<h;S++)_+=f[S];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function KS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,b=a||e.has("OES_texture_float"),P=v&&b,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:P,maxSamples:R}}function ZS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Gi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,v=y*4;let b=d.clippingState||null;l.value=b,b=c(_,h,v,p);for(let P=0;P!==v;++P)b[P]=t[P];d.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const d=p+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,b=p;v!==S;++v,b+=4)a.copy(f[v]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function JS(n){let e=new WeakMap;function t(a,o){return o===dl?a.mapping=Or:o===pl&&(a.mapping=Fr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===dl||o===pl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new l0(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Nd extends Dd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,af=[.125,.215,.35,.446,.526,.582],Xi=20,Ha=new Nd,lf=new Ze;let Ga=null,Va=0,ka=0;const Vi=(1+Math.sqrt(5))/2,xr=1/Vi,cf=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Vi,xr),new k(0,Vi,-xr),new k(xr,0,Vi),new k(-xr,0,Vi),new k(Vi,xr,0),new k(-Vi,xr,0)];class uf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga,Va,ka),e.scissorTest=!1,to(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Or||e.mapping===Fr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget(),Va=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Ss,format:yn,colorSpace:wi,depthBuffer:!1},r=ff(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ff(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QS(s)),this._blurMaterial=eM(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,i,r){const o=new fn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(lf),c.toneMapping=yi,c.autoClear=!1;const p=new Ro({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),_=new hn(new Rs,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(lf),S=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const v=this._cubeSize;to(r,y*v,d>2?v:0,v,v),c.setRenderTarget(r),S&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Or||e.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;to(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cf[(r-1)%cf.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new hn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),S=s/_,m=isFinite(s)?1+Math.floor(c*S):Xi;m>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const d=[];let y=0;for(let w=0;w<Xi;++w){const F=w/S,G=Math.exp(-F*F/2);d.push(G),w===0?y+=G:w<m&&(y+=2*G)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const b=this._sizeLods[r],P=3*b*(r>v-Er?r-v+Er:0),R=4*(this._cubeSize-b);to(t,P,R,3*b,2*b),l.setRenderTarget(t),l.render(f,Ha)}}function QS(n){const e=[],t=[],i=[];let r=n;const s=n-Er+1+af.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Er?l=af[a-n+Er-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,S=3,m=2,d=1,y=new Float32Array(S*_*p),v=new Float32Array(m*_*p),b=new Float32Array(d*_*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,F=R>2?0:-1,G=[w,F,0,w+2/3,F,0,w+2/3,F+1,0,w,F,0,w+2/3,F+1,0,w,F+1,0];y.set(G,S*_*R),v.set(h,m*_*R);const M=[R,R,R,R,R,R];b.set(M,d*_*R)}const P=new mn;P.setAttribute("position",new pn(y,S)),P.setAttribute("uv",new pn(v,m)),P.setAttribute("faceIndex",new pn(b,d)),e.push(P),r>Er&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ff(n,e,t){const i=new Qi(n,e,t);return i.texture.mapping=Wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function to(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function eM(n,e,t){const i=new Float32Array(Xi),r=new k(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function hf(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function df(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function tM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===dl||l===pl,c=l===Or||l===Fr;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new uf(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new uf(n));const h=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function nM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iM(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const S=h.morphAttributes[_];for(let m=0,d=S.length;m<d;m++)e.remove(S[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const S=p[_];for(let m=0,d=S.length;m<d;m++)e.update(S[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let S=0;if(p!==null){const y=p.array;S=p.version;for(let v=0,b=y.length;v<b;v+=3){const P=y[v+0],R=y[v+1],w=y[v+2];h.push(P,R,R,w,w,P)}}else if(_!==void 0){const y=_.array;S=_.version;for(let v=0,b=y.length/3-1;v<b;v+=3){const P=v+0,R=v+1,w=v+2;h.push(P,R,R,w,w,P)}}else return;const m=new(Ed(h)?Pd:Cd)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function rM(n,e,t,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,l;function u(p){o=p.type,l=p.bytesPerElement}function c(p,_){n.drawElements(s,_,o,p*l),t.update(_,s,1)}function f(p,_,S){if(S===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,o,p*l,S),t.update(_,s,S)}function h(p,_,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<S;d++)this.render(p[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,o,p,0,S);let d=0;for(let y=0;y<S;y++)d+=_[y];t.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function sM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function oM(n,e){return n[0]-e[0]}function aM(n,e){return Math.abs(e[1])-Math.abs(n[1])}function lM(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new Ct,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,S=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==S){let K=function(){A.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var p=K;m!==void 0&&m.texture.dispose();const d=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,v=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let w=0;d===!0&&(w=1),y===!0&&(w=2),v===!0&&(w=3);let F=c.attributes.position.count*w,G=1;F>e.maxTextureSize&&(G=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const M=new Float32Array(F*G*4*S),A=new Ad(M,F,G,S);A.type=ni,A.needsUpdate=!0;const B=w*4;for(let I=0;I<S;I++){const W=b[I],L=P[I],j=R[I],N=F*G*4*I;for(let ne=0;ne<W.count;ne++){const ce=ne*B;d===!0&&(a.fromBufferAttribute(W,ne),M[N+ce+0]=a.x,M[N+ce+1]=a.y,M[N+ce+2]=a.z,M[N+ce+3]=0),y===!0&&(a.fromBufferAttribute(L,ne),M[N+ce+4]=a.x,M[N+ce+5]=a.y,M[N+ce+6]=a.z,M[N+ce+7]=0),v===!0&&(a.fromBufferAttribute(j,ne),M[N+ce+8]=a.x,M[N+ce+9]=a.y,M[N+ce+10]=a.z,M[N+ce+11]=j.itemSize===4?a.w:1)}}m={count:S,texture:A,size:new Ye(F,G)},s.set(c,m),c.addEventListener("dispose",K)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let d=0;for(let v=0;v<h.length;v++)d+=h[v];const y=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let S=i[c.id];if(S===void 0||S.length!==_){S=[];for(let b=0;b<_;b++)S[b]=[b,0];i[c.id]=S}for(let b=0;b<_;b++){const P=S[b];P[0]=b,P[1]=h[b]}S.sort(aM);for(let b=0;b<8;b++)b<_&&S[b][1]?(o[b][0]=S[b][0],o[b][1]=S[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(oM);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const P=o[b],R=P[0],w=P[1];R!==Number.MAX_SAFE_INTEGER&&w?(m&&c.getAttribute("morphTarget"+b)!==m[R]&&c.setAttribute("morphTarget"+b,m[R]),d&&c.getAttribute("morphNormal"+b)!==d[R]&&c.setAttribute("morphNormal"+b,d[R]),r[b]=w,y+=w):(m&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),d&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),r[b]=0)}const v=c.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function cM(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class Od extends tn{constructor(e,t,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:Ji,c!==Ji&&c!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ji&&(i=Si),i===void 0&&c===Br&&(i=Zi),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fd=new tn,Bd=new Od(1,1);Bd.compareFunction=yd;const zd=new Ad,Hd=new Xv,Gd=new Id,pf=[],mf=[],gf=new Float32Array(16),_f=new Float32Array(9),vf=new Float32Array(4);function kr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=pf[r];if(s===void 0&&(s=new Float32Array(r),pf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function qo(n,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function uM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function fM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function hM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function dM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function pM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;vf.set(i),n.uniformMatrix2fv(this.addr,!1,vf),At(t,i)}}function mM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;_f.set(i),n.uniformMatrix3fv(this.addr,!1,_f),At(t,i)}}function gM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;gf.set(i),n.uniformMatrix4fv(this.addr,!1,gf),At(t,i)}}function _M(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function vM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function xM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function SM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function MM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function EM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function bM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function TM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Bd:Fd;t.setTexture2D(e||s,r)}function AM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hd,r)}function wM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Gd,r)}function RM(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zd,r)}function CM(n){switch(n){case 5126:return uM;case 35664:return fM;case 35665:return hM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return vM;case 35668:case 35672:return xM;case 35669:case 35673:return SM;case 5125:return MM;case 36294:return yM;case 36295:return EM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return RM}}function PM(n,e){n.uniform1fv(this.addr,e)}function LM(n,e){const t=kr(e,this.size,2);n.uniform2fv(this.addr,t)}function DM(n,e){const t=kr(e,this.size,3);n.uniform3fv(this.addr,t)}function IM(n,e){const t=kr(e,this.size,4);n.uniform4fv(this.addr,t)}function UM(n,e){const t=kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NM(n,e){const t=kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function OM(n,e){const t=kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function FM(n,e){n.uniform1iv(this.addr,e)}function BM(n,e){n.uniform2iv(this.addr,e)}function zM(n,e){n.uniform3iv(this.addr,e)}function HM(n,e){n.uniform4iv(this.addr,e)}function GM(n,e){n.uniform1uiv(this.addr,e)}function VM(n,e){n.uniform2uiv(this.addr,e)}function kM(n,e){n.uniform3uiv(this.addr,e)}function WM(n,e){n.uniform4uiv(this.addr,e)}function XM(n,e,t){const i=this.cache,r=e.length,s=qo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Fd,s[a])}function qM(n,e,t){const i=this.cache,r=e.length,s=qo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hd,s[a])}function jM(n,e,t){const i=this.cache,r=e.length,s=qo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Gd,s[a])}function YM(n,e,t){const i=this.cache,r=e.length,s=qo(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zd,s[a])}function $M(n){switch(n){case 5126:return PM;case 35664:return LM;case 35665:return DM;case 35666:return IM;case 35674:return UM;case 35675:return NM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return HM;case 5125:return GM;case 36294:return VM;case 36295:return kM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return YM}}class KM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=CM(t.type)}}class ZM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}}class JM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Wa=/(\w+)(\])?(\[|\.)?/g;function xf(n,e){n.seq.push(e),n.map[e.id]=e}function QM(n,e,t){const i=n.name,r=i.length;for(Wa.lastIndex=0;;){const s=Wa.exec(i),a=Wa.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){xf(t,u===void 0?new KM(o,n,e):new ZM(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new JM(o),xf(t,f)),t=f}}}class po{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);QM(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Sf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ey=37297;let ty=0;function ny(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function iy(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===To&&t===bo?i="LinearDisplayP3ToLinearSRGB":e===bo&&t===To&&(i="LinearSRGBToLinearDisplayP3"),n){case wi:case Xo:return[i,"LinearTransferOETF"];case Sn:case jl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Mf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ny(n.getShaderSource(e),a)}else return r}function ry(n,e){const t=iy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sy(n,e){let t;switch(e){case pv:t="Linear";break;case mv:t="Reinhard";break;case gv:t="OptimizedCineon";break;case hd:t="ACESFilmic";break;case vv:t="AgX";break;case xv:t="Neutral";break;case _v:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function oy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(br).join(`
`)}function ay(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function ly(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function br(n){return n!==""}function yf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(n){return n.replace(uy,hy)}const fy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hy(n,e){let t=ke[e];if(t===void 0){const i=fy.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const dy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(n){return n.replace(dy,py)}function py(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
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
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function my(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ud?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===V_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function gy(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Or:case Fr:e="ENVMAP_TYPE_CUBE";break;case Wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _y(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fr:e="ENVMAP_MODE_REFRACTION";break}return e}function vy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fd:e="ENVMAP_BLENDING_MULTIPLY";break;case hv:e="ENVMAP_BLENDING_MIX";break;case dv:e="ENVMAP_BLENDING_ADD";break}return e}function xy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Sy(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=my(t),u=gy(t),c=_y(t),f=vy(t),h=xy(t),p=t.isWebGL2?"":oy(t),_=ay(t),S=ly(s),m=r.createProgram();let d,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(br).join(`
`),d.length>0&&(d+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(br).join(`
`),y.length>0&&(y+=`
`)):(d=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),y=[p,Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?ke.tonemapping_pars_fragment:"",t.toneMapping!==yi?sy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,ry("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(br).join(`
`)),a=Sl(a),a=yf(a,t),a=Ef(a,t),o=Sl(o),o=yf(o,t),o=Ef(o,t),a=bf(a),o=bf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=v+d+a,P=v+y+o,R=Sf(r,r.VERTEX_SHADER,b),w=Sf(r,r.FRAGMENT_SHADER,P);r.attachShader(m,R),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function F(B){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(w).trim();let L=!0,j=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,R,w);else{const N=Mf(r,R,"vertex"),ne=Mf(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+K+`
`+N+`
`+ne)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(I===""||W==="")&&(j=!1);j&&(B.diagnostics={runnable:L,programLog:K,vertexShader:{log:I,prefix:d},fragmentShader:{log:W,prefix:y}})}r.deleteShader(R),r.deleteShader(w),G=new po(r,m),M=cy(r,m)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let M;this.getAttributes=function(){return M===void 0&&F(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(m,ey)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ty++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=w,this}let My=0;class yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ey(e),t.set(e,i)),i}}class Ey{constructor(e){this.id=My++,this.code=e,this.usedTimes=0}}function by(n,e,t,i,r,s,a){const o=new wd,l=new yy,u=new Set,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return u.add(M),M===0?"uv":`uv${M}`}function d(M,A,B,K,I){const W=K.fog,L=I.geometry,j=M.isMeshStandardMaterial?K.environment:null,N=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),ne=N&&N.mapping===Wo?N.image.height:null,ce=S[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const he=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,_e=he!==void 0?he.length:0;let Le=0;L.morphAttributes.position!==void 0&&(Le=1),L.morphAttributes.normal!==void 0&&(Le=2),L.morphAttributes.color!==void 0&&(Le=3);let Q,fe,xe,V;if(ce){const st=Nn[ce];Q=st.vertexShader,fe=st.fragmentShader}else Q=M.vertexShader,fe=M.fragmentShader,l.update(M),xe=l.getVertexShaderID(M),V=l.getFragmentShaderID(M);const oe=n.getRenderTarget(),ie=I.isInstancedMesh===!0,ge=I.isBatchedMesh===!0,Me=!!M.map,g=!!M.matcap,C=!!N,D=!!M.aoMap,X=!!M.lightMap,q=!!M.bumpMap,Y=!!M.normalMap,le=!!M.displacementMap,ae=!!M.emissiveMap,ue=!!M.metalnessMap,E=!!M.roughnessMap,x=M.anisotropy>0,U=M.clearcoat>0,z=M.iridescence>0,te=M.sheen>0,re=M.transmission>0,Te=x&&!!M.anisotropyMap,ye=U&&!!M.clearcoatMap,pe=U&&!!M.clearcoatNormalMap,me=U&&!!M.clearcoatRoughnessMap,De=z&&!!M.iridescenceMap,de=z&&!!M.iridescenceThicknessMap,rt=te&&!!M.sheenColorMap,Ge=te&&!!M.sheenRoughnessMap,Re=!!M.specularMap,Ae=!!M.specularColorMap,Ce=!!M.specularIntensityMap,je=re&&!!M.transmissionMap,ze=re&&!!M.thicknessMap,ct=!!M.gradientMap,O=!!M.alphaMap,Ee=M.alphaTest>0,Z=!!M.alphaHash,ve=!!M.extensions;let be=yi;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(be=n.toneMapping);const $e={isWebGL2:f,shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Q,fragmentShader:fe,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:V,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:ge,instancing:ie,instancingColor:ie&&I.instanceColor!==null,instancingMorph:ie&&I.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:wi,alphaToCoverage:!!M.alphaToCoverage,map:Me,matcap:g,envMap:C,envMapMode:C&&N.mapping,envMapCubeUVHeight:ne,aoMap:D,lightMap:X,bumpMap:q,normalMap:Y,displacementMap:p&&le,emissiveMap:ae,normalMapObjectSpace:Y&&M.normalMapType===Pv,normalMapTangentSpace:Y&&M.normalMapType===Md,metalnessMap:ue,roughnessMap:E,anisotropy:x,anisotropyMap:Te,clearcoat:U,clearcoatMap:ye,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,iridescence:z,iridescenceMap:De,iridescenceThicknessMap:de,sheen:te,sheenColorMap:rt,sheenRoughnessMap:Ge,specularMap:Re,specularColorMap:Ae,specularIntensityMap:Ce,transmission:re,transmissionMap:je,thicknessMap:ze,gradientMap:ct,opaque:M.transparent===!1&&M.blending===Lr&&M.alphaToCoverage===!1,alphaMap:O,alphaTest:Ee,alphaHash:Z,combine:M.combine,mapUv:Me&&m(M.map.channel),aoMapUv:D&&m(M.aoMap.channel),lightMapUv:X&&m(M.lightMap.channel),bumpMapUv:q&&m(M.bumpMap.channel),normalMapUv:Y&&m(M.normalMap.channel),displacementMapUv:le&&m(M.displacementMap.channel),emissiveMapUv:ae&&m(M.emissiveMap.channel),metalnessMapUv:ue&&m(M.metalnessMap.channel),roughnessMapUv:E&&m(M.roughnessMap.channel),anisotropyMapUv:Te&&m(M.anisotropyMap.channel),clearcoatMapUv:ye&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&m(M.sheenRoughnessMap.channel),specularMapUv:Re&&m(M.specularMap.channel),specularColorMapUv:Ae&&m(M.specularColorMap.channel),specularIntensityMapUv:Ce&&m(M.specularIntensityMap.channel),transmissionMapUv:je&&m(M.transmissionMap.channel),thicknessMapUv:ze&&m(M.thicknessMap.channel),alphaMapUv:O&&m(M.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Y||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Me||O),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Le,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ve&&M.extensions.derivatives===!0,extensionFragDepth:ve&&M.extensions.fragDepth===!0,extensionDrawBuffers:ve&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ve&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=u.has(1),$e.vertexUv2s=u.has(2),$e.vertexUv3s=u.has(3),u.clear(),$e}function y(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)A.push(B),A.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(v(A,M),b(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function v(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function b(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.instancingMorph&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.normalMapObjectSpace&&o.enable(7),A.normalMapTangentSpace&&o.enable(8),A.clearcoat&&o.enable(9),A.iridescence&&o.enable(10),A.alphaTest&&o.enable(11),A.vertexColors&&o.enable(12),A.vertexAlphas&&o.enable(13),A.vertexUv1s&&o.enable(14),A.vertexUv2s&&o.enable(15),A.vertexUv3s&&o.enable(16),A.vertexTangents&&o.enable(17),A.anisotropy&&o.enable(18),A.alphaHash&&o.enable(19),A.batching&&o.enable(20),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),M.push(o.mask)}function P(M){const A=S[M.type];let B;if(A){const K=Nn[A];B=r0.clone(K.uniforms)}else B=M.uniforms;return B}function R(M,A){let B;for(let K=0,I=c.length;K<I;K++){const W=c[K];if(W.cacheKey===A){B=W,++B.usedTimes;break}}return B===void 0&&(B=new Sy(n,A,M,s),c.push(B)),B}function w(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),M.destroy()}}function F(M){l.remove(M)}function G(){l.dispose()}return{getParameters:d,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:w,releaseShaderCache:F,programs:c,dispose:G}}function Ty(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ay(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Af(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wf(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,_,S,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:S,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function o(f,h,p,_,S,m){const d=a(f,h,p,_,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,S,m){const d=a(f,h,p,_,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||Ay),i.length>1&&i.sort(h||Af),r.length>1&&r.sort(h||Af)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function wy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new wf,n.set(i,[a])):r>=s.length?(a=new wf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ry(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ze};break;case"SpotLight":t={position:new k,direction:new k,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function Cy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Py=0;function Ly(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dy(n,e){const t=new Ry,i=Cy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new k);const s=new k,a=new dt,o=new dt;function l(c,f){let h=0,p=0,_=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let S=0,m=0,d=0,y=0,v=0,b=0,P=0,R=0,w=0,F=0,G=0;c.sort(Ly);const M=f===!0?Math.PI:1;for(let B=0,K=c.length;B<K;B++){const I=c[B],W=I.color,L=I.intensity,j=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=W.r*L*M,p+=W.g*L*M,_+=W.b*L*M;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(I.sh.coefficients[ne],L);G++}else if(I.isDirectionalLight){const ne=t.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const ce=I.shadow,he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,r.directionalShadow[S]=he,r.directionalShadowMap[S]=N,r.directionalShadowMatrix[S]=I.shadow.matrix,b++}r.directional[S]=ne,S++}else if(I.isSpotLight){const ne=t.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(W).multiplyScalar(L*M),ne.distance=j,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,r.spot[d]=ne;const ce=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,ce.updateMatrices(I),I.castShadow&&F++),r.spotLightMatrix[d]=ce.matrix,I.castShadow){const he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,r.spotShadow[d]=he,r.spotShadowMap[d]=N,R++}d++}else if(I.isRectAreaLight){const ne=t.get(I);ne.color.copy(W).multiplyScalar(L),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=ne,y++}else if(I.isPointLight){const ne=t.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*M),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const ce=I.shadow,he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,r.pointShadow[m]=he,r.pointShadowMap[m]=N,r.pointShadowMatrix[m]=I.shadow.matrix,P++}r.point[m]=ne,m++}else if(I.isHemisphereLight){const ne=t.get(I);ne.skyColor.copy(I.color).multiplyScalar(L*M),ne.groundColor.copy(I.groundColor).multiplyScalar(L*M),r.hemi[v]=ne,v++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==S||A.pointLength!==m||A.spotLength!==d||A.rectAreaLength!==y||A.hemiLength!==v||A.numDirectionalShadows!==b||A.numPointShadows!==P||A.numSpotShadows!==R||A.numSpotMaps!==w||A.numLightProbes!==G)&&(r.directional.length=S,r.spot.length=d,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+w-F,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=G,A.directionalLength=S,A.pointLength=m,A.spotLength=d,A.rectAreaLength=y,A.hemiLength=v,A.numDirectionalShadows=b,A.numPointShadows=P,A.numSpotShadows=R,A.numSpotMaps=w,A.numLightProbes=G,r.version=Py++)}function u(c,f){let h=0,p=0,_=0,S=0,m=0;const d=f.matrixWorldInverse;for(let y=0,v=c.length;y<v;y++){const b=c[y];if(b.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),h++}else if(b.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),_++}else if(b.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(b.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),S++}else if(b.isPointLight){const P=r.point[p];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const P=r.hemi[m];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function Rf(n,e){const t=new Dy(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function Iy(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Rf(n,e),t.set(s,[l])):a>=o.length?(l=new Rf(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Uy extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ny extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
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
}`;function By(n,e,t){let i=new $l;const r=new Ye,s=new Ye,a=new Ct,o=new Uy({depthPacking:Cv}),l=new Ny,u={},c=t.maxTextureSize,f={[Ti]:en,[en]:Ti,[ti]:ti},h=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:Oy,fragmentShader:Fy}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new mn;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new hn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud;let d=this.type;this.render=function(R,w,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const G=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Mi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const K=d!==Kn&&this.type===Kn,I=d===Kn&&this.type!==Kn;for(let W=0,L=R.length;W<L;W++){const j=R[W],N=j.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const ne=N.getFrameExtents();if(r.multiply(ne),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ne.x),r.x=s.x*ne.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ne.y),r.y=s.y*ne.y,N.mapSize.y=s.y)),N.map===null||K===!0||I===!0){const he=this.type!==Kn?{minFilter:Xt,magFilter:Xt}:{};N.map!==null&&N.map.dispose(),N.map=new Qi(r.x,r.y,he),N.map.texture.name=j.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const ce=N.getViewportCount();for(let he=0;he<ce;he++){const _e=N.getViewport(he);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),B.viewport(a),N.updateMatrices(j,he),i=N.getFrustum(),b(w,F,N.camera,j,this.type)}N.isPointLightShadow!==!0&&this.type===Kn&&y(N,F),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(G,M,A)};function y(R,w){const F=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Qi(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,F,h,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,F,p,S,null)}function v(R,w,F,G){let M=null;const A=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)M=A;else if(M=F.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=M.uuid,K=w.uuid;let I=u[B];I===void 0&&(I={},u[B]=I);let W=I[K];W===void 0&&(W=M.clone(),I[K]=W,w.addEventListener("dispose",P)),M=W}if(M.visible=w.visible,M.wireframe=w.wireframe,G===Kn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=F}return M}function b(R,w,F,G,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Kn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const K=e.update(R),I=R.material;if(Array.isArray(I)){const W=K.groups;for(let L=0,j=W.length;L<j;L++){const N=W[L],ne=I[N.materialIndex];if(ne&&ne.visible){const ce=v(R,ne,G,M);R.onBeforeShadow(n,R,w,F,K,ce,N),n.renderBufferDirect(F,null,K,ce,R,N),R.onAfterShadow(n,R,w,F,K,ce,N)}}}else if(I.visible){const W=v(R,I,G,M);R.onBeforeShadow(n,R,w,F,K,W,null),n.renderBufferDirect(F,null,K,W,R,null),R.onAfterShadow(n,R,w,F,K,W,null)}}const B=R.children;for(let K=0,I=B.length;K<I;K++)b(B[K],w,F,G,M)}function P(R){R.target.removeEventListener("dispose",P);for(const F in u){const G=u[F],M=R.target.uuid;M in G&&(G[M].dispose(),delete G[M])}}}function zy(n,e,t){const i=t.isWebGL2;function r(){let O=!1;const Ee=new Ct;let Z=null;const ve=new Ct(0,0,0,0);return{setMask:function(be){Z!==be&&!O&&(n.colorMask(be,be,be,be),Z=be)},setLocked:function(be){O=be},setClear:function(be,$e,st,Lt,an){an===!0&&(be*=Lt,$e*=Lt,st*=Lt),Ee.set(be,$e,st,Lt),ve.equals(Ee)===!1&&(n.clearColor(be,$e,st,Lt),ve.copy(Ee))},reset:function(){O=!1,Z=null,ve.set(-1,0,0,0)}}}function s(){let O=!1,Ee=null,Z=null,ve=null;return{setTest:function(be){be?ie(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(be){Ee!==be&&!O&&(n.depthMask(be),Ee=be)},setFunc:function(be){if(Z!==be){switch(be){case sv:n.depthFunc(n.NEVER);break;case ov:n.depthFunc(n.ALWAYS);break;case av:n.depthFunc(n.LESS);break;case yo:n.depthFunc(n.LEQUAL);break;case lv:n.depthFunc(n.EQUAL);break;case cv:n.depthFunc(n.GEQUAL);break;case uv:n.depthFunc(n.GREATER);break;case fv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Z=be}},setLocked:function(be){O=be},setClear:function(be){ve!==be&&(n.clearDepth(be),ve=be)},reset:function(){O=!1,Ee=null,Z=null,ve=null}}}function a(){let O=!1,Ee=null,Z=null,ve=null,be=null,$e=null,st=null,Lt=null,an=null;return{setTest:function(ot){O||(ot?ie(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ot){Ee!==ot&&!O&&(n.stencilMask(ot),Ee=ot)},setFunc:function(ot,Gt,Cn){(Z!==ot||ve!==Gt||be!==Cn)&&(n.stencilFunc(ot,Gt,Cn),Z=ot,ve=Gt,be=Cn)},setOp:function(ot,Gt,Cn){($e!==ot||st!==Gt||Lt!==Cn)&&(n.stencilOp(ot,Gt,Cn),$e=ot,st=Gt,Lt=Cn)},setLocked:function(ot){O=ot},setClear:function(ot){an!==ot&&(n.clearStencil(ot),an=ot)},reset:function(){O=!1,Ee=null,Z=null,ve=null,be=null,$e=null,st=null,Lt=null,an=null}}}const o=new r,l=new s,u=new a,c=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,S=[],m=null,d=!1,y=null,v=null,b=null,P=null,R=null,w=null,F=null,G=new Ze(0,0,0),M=0,A=!1,B=null,K=null,I=null,W=null,L=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,ne=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ce)[1]),N=ne>=1):ce.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),N=ne>=2);let he=null,_e={};const Le=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),fe=new Ct().fromArray(Le),xe=new Ct().fromArray(Q);function V(O,Ee,Z,ve){const be=new Uint8Array(4),$e=n.createTexture();n.bindTexture(O,$e),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<Z;st++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ee+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return $e}const oe={};oe[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ie(n.DEPTH_TEST),l.setFunc(yo),le(!1),ae(ou),ie(n.CULL_FACE),q(Mi);function ie(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function ge(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function Me(O,Ee){return p[O]!==Ee?(n.bindFramebuffer(O,Ee),p[O]=Ee,i&&(O===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Ee),O===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function g(O,Ee){let Z=S,ve=!1;if(O){Z=_.get(Ee),Z===void 0&&(Z=[],_.set(Ee,Z));const be=O.textures;if(Z.length!==be.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,st=be.length;$e<st;$e++)Z[$e]=n.COLOR_ATTACHMENT0+$e;Z.length=be.length,ve=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ve=!0);if(ve)if(t.isWebGL2)n.drawBuffers(Z);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function C(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const D={[Wi]:n.FUNC_ADD,[W_]:n.FUNC_SUBTRACT,[X_]:n.FUNC_REVERSE_SUBTRACT};if(i)D[uu]=n.MIN,D[fu]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(D[uu]=O.MIN_EXT,D[fu]=O.MAX_EXT)}const X={[q_]:n.ZERO,[j_]:n.ONE,[Y_]:n.SRC_COLOR,[fl]:n.SRC_ALPHA,[ev]:n.SRC_ALPHA_SATURATE,[J_]:n.DST_COLOR,[K_]:n.DST_ALPHA,[$_]:n.ONE_MINUS_SRC_COLOR,[hl]:n.ONE_MINUS_SRC_ALPHA,[Q_]:n.ONE_MINUS_DST_COLOR,[Z_]:n.ONE_MINUS_DST_ALPHA,[tv]:n.CONSTANT_COLOR,[nv]:n.ONE_MINUS_CONSTANT_COLOR,[iv]:n.CONSTANT_ALPHA,[rv]:n.ONE_MINUS_CONSTANT_ALPHA};function q(O,Ee,Z,ve,be,$e,st,Lt,an,ot){if(O===Mi){d===!0&&(ge(n.BLEND),d=!1);return}if(d===!1&&(ie(n.BLEND),d=!0),O!==k_){if(O!==y||ot!==A){if((v!==Wi||R!==Wi)&&(n.blendEquation(n.FUNC_ADD),v=Wi,R=Wi),ot)switch(O){case Lr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFunc(n.ONE,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Lr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case au:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case lu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case cu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,P=null,w=null,F=null,G.set(0,0,0),M=0,y=O,A=ot}return}be=be||Ee,$e=$e||Z,st=st||ve,(Ee!==v||be!==R)&&(n.blendEquationSeparate(D[Ee],D[be]),v=Ee,R=be),(Z!==b||ve!==P||$e!==w||st!==F)&&(n.blendFuncSeparate(X[Z],X[ve],X[$e],X[st]),b=Z,P=ve,w=$e,F=st),(Lt.equals(G)===!1||an!==M)&&(n.blendColor(Lt.r,Lt.g,Lt.b,an),G.copy(Lt),M=an),y=O,A=!1}function Y(O,Ee){O.side===ti?ge(n.CULL_FACE):ie(n.CULL_FACE);let Z=O.side===en;Ee&&(Z=!Z),le(Z),O.blending===Lr&&O.transparent===!1?q(Mi):q(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),o.setMask(O.colorWrite);const ve=O.stencilWrite;u.setTest(ve),ve&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),E(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(O){B!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),B=O)}function ae(O){O!==H_?(ie(n.CULL_FACE),O!==K&&(O===ou?n.cullFace(n.BACK):O===G_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),K=O}function ue(O){O!==I&&(N&&n.lineWidth(O),I=O)}function E(O,Ee,Z){O?(ie(n.POLYGON_OFFSET_FILL),(W!==Ee||L!==Z)&&(n.polygonOffset(Ee,Z),W=Ee,L=Z)):ge(n.POLYGON_OFFSET_FILL)}function x(O){O?ie(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function U(O){O===void 0&&(O=n.TEXTURE0+j-1),he!==O&&(n.activeTexture(O),he=O)}function z(O,Ee,Z){Z===void 0&&(he===null?Z=n.TEXTURE0+j-1:Z=he);let ve=_e[Z];ve===void 0&&(ve={type:void 0,texture:void 0},_e[Z]=ve),(ve.type!==O||ve.texture!==Ee)&&(he!==Z&&(n.activeTexture(Z),he=Z),n.bindTexture(O,Ee||oe[O]),ve.type=O,ve.texture=Ee)}function te(){const O=_e[he];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ge(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(O){fe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),fe.copy(O))}function Ce(O){xe.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),xe.copy(O))}function je(O,Ee){let Z=f.get(Ee);Z===void 0&&(Z=new WeakMap,f.set(Ee,Z));let ve=Z.get(O);ve===void 0&&(ve=n.getUniformBlockIndex(Ee,O.name),Z.set(O,ve))}function ze(O,Ee){const ve=f.get(Ee).get(O);c.get(Ee)!==ve&&(n.uniformBlockBinding(Ee,ve,O.__bindingPointIndex),c.set(Ee,ve))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,_e={},p={},_=new WeakMap,S=[],m=null,d=!1,y=null,v=null,b=null,P=null,R=null,w=null,F=null,G=new Ze(0,0,0),M=0,A=!1,B=null,K=null,I=null,W=null,L=null,fe.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ie,disable:ge,bindFramebuffer:Me,drawBuffers:g,useProgram:C,setBlending:q,setMaterial:Y,setFlipSided:le,setCullFace:ae,setLineWidth:ue,setPolygonOffset:E,setScissorTest:x,activeTexture:U,bindTexture:z,unbindTexture:te,compressedTexImage2D:re,compressedTexImage3D:Te,texImage2D:Ge,texImage3D:Re,updateUBOMapping:je,uniformBlockBinding:ze,texStorage2D:de,texStorage3D:rt,texSubImage2D:ye,texSubImage3D:pe,compressedTexSubImage2D:me,compressedTexSubImage3D:De,scissor:Ae,viewport:Ce,reset:ct}}function Hy(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ye,f=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,x){return _?new OffscreenCanvas(E,x):wo("canvas")}function m(E,x,U,z){let te=1;const re=ue(E);if((re.width>z||re.height>z)&&(te=z/Math.max(re.width,re.height)),te<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Te=x?xl:Math.floor,ye=Te(te*re.width),pe=Te(te*re.height);h===void 0&&(h=S(ye,pe));const me=U?S(ye,pe):h;return me.width=ye,me.height=pe,me.getContext("2d").drawImage(E,0,0,ye,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ye+"x"+pe+")."),me}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),E;return E}function d(E){const x=ue(E);return Gu(x.width)&&Gu(x.height)}function y(E){return o?!1:E.wrapS!==Mn||E.wrapT!==Mn||E.minFilter!==Xt&&E.minFilter!==Zt}function v(E,x){return E.generateMipmaps&&x&&E.minFilter!==Xt&&E.minFilter!==Zt}function b(E){n.generateMipmap(E)}function P(E,x,U,z,te=!1){if(o===!1)return x;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let re=x;if(x===n.RED&&(U===n.FLOAT&&(re=n.R32F),U===n.HALF_FLOAT&&(re=n.R16F),U===n.UNSIGNED_BYTE&&(re=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(re=n.R8UI),U===n.UNSIGNED_SHORT&&(re=n.R16UI),U===n.UNSIGNED_INT&&(re=n.R32UI),U===n.BYTE&&(re=n.R8I),U===n.SHORT&&(re=n.R16I),U===n.INT&&(re=n.R32I)),x===n.RG&&(U===n.FLOAT&&(re=n.RG32F),U===n.HALF_FLOAT&&(re=n.RG16F),U===n.UNSIGNED_BYTE&&(re=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(re=n.RG8UI),U===n.UNSIGNED_SHORT&&(re=n.RG16UI),U===n.UNSIGNED_INT&&(re=n.RG32UI),U===n.BYTE&&(re=n.RG8I),U===n.SHORT&&(re=n.RG16I),U===n.INT&&(re=n.RG32I)),x===n.RGBA){const Te=te?Eo:nt.getTransfer(z);U===n.FLOAT&&(re=n.RGBA32F),U===n.HALF_FLOAT&&(re=n.RGBA16F),U===n.UNSIGNED_BYTE&&(re=Te===lt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(re=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(re=n.RGB5_A1)}return(re===n.R16F||re===n.R32F||re===n.RG16F||re===n.RG32F||re===n.RGBA16F||re===n.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function R(E,x,U){return v(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Xt&&E.minFilter!==Zt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){return E===Xt||E===hu||E===$r?n.NEAREST:n.LINEAR}function F(E){const x=E.target;x.removeEventListener("dispose",F),M(x),x.isVideoTexture&&f.delete(x)}function G(E){const x=E.target;x.removeEventListener("dispose",G),B(x)}function M(E){const x=i.get(E);if(x.__webglInit===void 0)return;const U=E.source,z=p.get(U);if(z){const te=z[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(E),Object.keys(z).length===0&&p.delete(U)}i.remove(E)}function A(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const U=E.source,z=p.get(U);delete z[x.__cacheKey],a.memory.textures--}function B(E){const x=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(x.__webglFramebuffer[z]))for(let te=0;te<x.__webglFramebuffer[z].length;te++)n.deleteFramebuffer(x.__webglFramebuffer[z][te]);else n.deleteFramebuffer(x.__webglFramebuffer[z]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[z])}else{if(Array.isArray(x.__webglFramebuffer))for(let z=0;z<x.__webglFramebuffer.length;z++)n.deleteFramebuffer(x.__webglFramebuffer[z]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let z=0;z<x.__webglColorRenderbuffer.length;z++)x.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[z]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=E.textures;for(let z=0,te=U.length;z<te;z++){const re=i.get(U[z]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(U[z])}i.remove(E)}let K=0;function I(){K=0}function W(){const E=K;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),K+=1,E}function L(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function j(E,x){const U=i.get(E);if(E.isVideoTexture&&le(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const z=E.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(U,E,x);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function N(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){xe(U,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function ne(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){xe(U,E,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function ce(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){V(U,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const he={[ml]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},_e={[Xt]:n.NEAREST,[hu]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[Yi]:n.LINEAR_MIPMAP_LINEAR},Le={[Lv]:n.NEVER,[Fv]:n.ALWAYS,[Dv]:n.LESS,[yd]:n.LEQUAL,[Iv]:n.EQUAL,[Ov]:n.GEQUAL,[Uv]:n.GREATER,[Nv]:n.NOTEQUAL};function Q(E,x,U){if(x.type===ni&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Zt||x.magFilter===da||x.magFilter===$r||x.magFilter===Yi||x.minFilter===Zt||x.minFilter===da||x.minFilter===$r||x.minFilter===Yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(n.texParameteri(E,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,he[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,_e[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,_e[x.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==Mn||x.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,w(x.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==Xt&&x.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==$r&&x.minFilter!==Yi||x.type===ni&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Ss&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function fe(E,x){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",F));const z=x.source;let te=p.get(z);te===void 0&&(te={},p.set(z,te));const re=L(x);if(re!==E.__cacheKey){te[re]===void 0&&(te[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),te[re].usedTimes++;const Te=te[E.__cacheKey];Te!==void 0&&(te[E.__cacheKey].usedTimes--,Te.usedTimes===0&&A(x)),E.__cacheKey=re,E.__webglTexture=te[re].texture}return U}function xe(E,x,U){let z=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(z=n.TEXTURE_3D);const te=fe(E,x),re=x.source;t.bindTexture(z,E.__webglTexture,n.TEXTURE0+U);const Te=i.get(re);if(re.version!==Te.__version||te===!0){t.activeTexture(n.TEXTURE0+U);const ye=nt.getPrimaries(nt.workingColorSpace),pe=x.colorSpace===xi?null:nt.getPrimaries(x.colorSpace),me=x.colorSpace===xi||ye===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const De=y(x)&&d(x.image)===!1;let de=m(x.image,De,!1,r.maxTextureSize);de=ae(x,de);const rt=d(de)||o,Ge=s.convert(x.format,x.colorSpace);let Re=s.convert(x.type),Ae=P(x.internalFormat,Ge,Re,x.colorSpace,x.isVideoTexture);Q(z,x,rt);let Ce;const je=x.mipmaps,ze=o&&x.isVideoTexture!==!0&&Ae!==Sd,ct=Te.__version===void 0||te===!0,O=re.dataReady,Ee=R(x,de,rt);if(x.isDepthTexture)Ae=n.DEPTH_COMPONENT,o?x.type===ni?Ae=n.DEPTH_COMPONENT32F:x.type===Si?Ae=n.DEPTH_COMPONENT24:x.type===Zi?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:x.type===ni&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Ji&&Ae===n.DEPTH_COMPONENT&&x.type!==ql&&x.type!==Si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Si,Re=s.convert(x.type)),x.format===Br&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,x.type!==Zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Zi,Re=s.convert(x.type))),ct&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ae,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,Ae,de.width,de.height,0,Ge,Re,null));else if(x.isDataTexture)if(je.length>0&&rt){ze&&ct&&t.texStorage2D(n.TEXTURE_2D,Ee,Ae,je[0].width,je[0].height);for(let Z=0,ve=je.length;Z<ve;Z++)Ce=je[Z],ze?O&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,Ge,Re,Ce.data):t.texImage2D(n.TEXTURE_2D,Z,Ae,Ce.width,Ce.height,0,Ge,Re,Ce.data);x.generateMipmaps=!1}else ze?(ct&&t.texStorage2D(n.TEXTURE_2D,Ee,Ae,de.width,de.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,Ge,Re,de.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,de.width,de.height,0,Ge,Re,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ae,je[0].width,je[0].height,de.depth);for(let Z=0,ve=je.length;Z<ve;Z++)Ce=je[Z],x.format!==yn?Ge!==null?ze?O&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Ce.width,Ce.height,de.depth,Ge,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Ae,Ce.width,Ce.height,de.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,Ce.width,Ce.height,de.depth,Ge,Re,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,Ae,Ce.width,Ce.height,de.depth,0,Ge,Re,Ce.data)}else{ze&&ct&&t.texStorage2D(n.TEXTURE_2D,Ee,Ae,je[0].width,je[0].height);for(let Z=0,ve=je.length;Z<ve;Z++)Ce=je[Z],x.format!==yn?Ge!==null?ze?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,Ge,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,Ae,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?O&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ce.width,Ce.height,Ge,Re,Ce.data):t.texImage2D(n.TEXTURE_2D,Z,Ae,Ce.width,Ce.height,0,Ge,Re,Ce.data)}else if(x.isDataArrayTexture)ze?(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ae,de.width,de.height,de.depth),O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Ge,Re,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,de.width,de.height,de.depth,0,Ge,Re,de.data);else if(x.isData3DTexture)ze?(ct&&t.texStorage3D(n.TEXTURE_3D,Ee,Ae,de.width,de.height,de.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Ge,Re,de.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,de.width,de.height,de.depth,0,Ge,Re,de.data);else if(x.isFramebufferTexture){if(ct)if(ze)t.texStorage2D(n.TEXTURE_2D,Ee,Ae,de.width,de.height);else{let Z=de.width,ve=de.height;for(let be=0;be<Ee;be++)t.texImage2D(n.TEXTURE_2D,be,Ae,Z,ve,0,Ge,Re,null),Z>>=1,ve>>=1}}else if(je.length>0&&rt){if(ze&&ct){const Z=ue(je[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ae,Z.width,Z.height)}for(let Z=0,ve=je.length;Z<ve;Z++)Ce=je[Z],ze?O&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ge,Re,Ce):t.texImage2D(n.TEXTURE_2D,Z,Ae,Ge,Re,Ce);x.generateMipmaps=!1}else if(ze){if(ct){const Z=ue(de);t.texStorage2D(n.TEXTURE_2D,Ee,Ae,Z.width,Z.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,Re,de)}else t.texImage2D(n.TEXTURE_2D,0,Ae,Ge,Re,de);v(x,rt)&&b(z),Te.__version=re.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function V(E,x,U){if(x.image.length!==6)return;const z=fe(E,x),te=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const re=i.get(te);if(te.version!==re.__version||z===!0){t.activeTexture(n.TEXTURE0+U);const Te=nt.getPrimaries(nt.workingColorSpace),ye=x.colorSpace===xi?null:nt.getPrimaries(x.colorSpace),pe=x.colorSpace===xi||Te===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const me=x.isCompressedTexture||x.image[0].isCompressedTexture,De=x.image[0]&&x.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!me&&!De?de[Z]=m(x.image[Z],!1,!0,r.maxCubemapSize):de[Z]=De?x.image[Z].image:x.image[Z],de[Z]=ae(x,de[Z]);const rt=de[0],Ge=d(rt)||o,Re=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type),Ce=P(x.internalFormat,Re,Ae,x.colorSpace),je=o&&x.isVideoTexture!==!0,ze=re.__version===void 0||z===!0,ct=te.dataReady;let O=R(x,rt,Ge);Q(n.TEXTURE_CUBE_MAP,x,Ge);let Ee;if(me){je&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,O,Ce,rt.width,rt.height);for(let Z=0;Z<6;Z++){Ee=de[Z].mipmaps;for(let ve=0;ve<Ee.length;ve++){const be=Ee[ve];x.format!==yn?Re!==null?je?ct&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,be.width,be.height,Re,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Ce,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,be.width,be.height,Re,Ae,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Ce,be.width,be.height,0,Re,Ae,be.data)}}}else{if(Ee=x.mipmaps,je&&ze){Ee.length>0&&O++;const Z=ue(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,O,Ce,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(De){je?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Re,Ae,de[Z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ce,de[Z].width,de[Z].height,0,Re,Ae,de[Z].data);for(let ve=0;ve<Ee.length;ve++){const $e=Ee[ve].image[Z].image;je?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,$e.width,$e.height,Re,Ae,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Ce,$e.width,$e.height,0,Re,Ae,$e.data)}}else{je?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,Ae,de[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ce,Re,Ae,de[Z]);for(let ve=0;ve<Ee.length;ve++){const be=Ee[ve];je?ct&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Re,Ae,be.image[Z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Ce,Re,Ae,be.image[Z])}}}v(x,Ge)&&b(n.TEXTURE_CUBE_MAP),re.__version=te.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function oe(E,x,U,z,te,re){const Te=s.convert(U.format,U.colorSpace),ye=s.convert(U.type),pe=P(U.internalFormat,Te,ye,U.colorSpace);if(!i.get(x).__hasExternalTextures){const De=Math.max(1,x.width>>re),de=Math.max(1,x.height>>re);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,re,pe,De,de,x.depth,0,Te,ye,null):t.texImage2D(te,re,pe,De,de,0,Te,ye,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Y(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,te,i.get(U).__webglTexture,0,q(x)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,te,i.get(U).__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(E,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let z=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||Y(x)){const te=x.depthTexture;te&&te.isDepthTexture&&(te.type===ni?z=n.DEPTH_COMPONENT32F:te.type===Si&&(z=n.DEPTH_COMPONENT24));const re=q(x);Y(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,z,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,re,z,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,z,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const z=q(x);U&&Y(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,x.width,x.height):Y(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const z=x.textures;for(let te=0;te<z.length;te++){const re=z[te],Te=s.convert(re.format,re.colorSpace),ye=s.convert(re.type),pe=P(re.internalFormat,Te,ye,re.colorSpace),me=q(x);U&&Y(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,pe,x.width,x.height):Y(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,pe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,pe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const z=i.get(x.depthTexture).__webglTexture,te=q(x);if(x.depthTexture.format===Ji)Y(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,z,0);else if(x.depthTexture.format===Br)Y(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function Me(E){const x=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ge(x.__webglFramebuffer,E)}else if(U){x.__webglDepthbuffer=[];for(let z=0;z<6;z++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[z]),x.__webglDepthbuffer[z]=n.createRenderbuffer(),ie(x.__webglDepthbuffer[z],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ie(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(E,x,U){const z=i.get(E);x!==void 0&&oe(z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Me(E)}function C(E){const x=E.texture,U=i.get(E),z=i.get(x);E.addEventListener("dispose",G);const te=E.textures,re=E.isWebGLCubeRenderTarget===!0,Te=te.length>1,ye=d(E)||o;if(Te||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=x.version,a.memory.textures++),re){U.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[pe]=[];for(let me=0;me<x.mipmaps.length;me++)U.__webglFramebuffer[pe][me]=n.createFramebuffer()}else U.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)U.__webglFramebuffer[pe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Te)if(r.drawBuffers)for(let pe=0,me=te.length;pe<me;pe++){const De=i.get(te[pe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&Y(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){const me=te[pe];U.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[pe]);const De=s.convert(me.format,me.colorSpace),de=s.convert(me.type),rt=P(me.internalFormat,De,de,me.colorSpace,E.isXRRenderTarget===!0),Ge=q(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,rt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,U.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Q(n.TEXTURE_CUBE_MAP,x,ye);for(let pe=0;pe<6;pe++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)oe(U.__webglFramebuffer[pe][me],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,me);else oe(U.__webglFramebuffer[pe],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);v(x,ye)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let pe=0,me=te.length;pe<me;pe++){const De=te[pe],de=i.get(De);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Q(n.TEXTURE_2D,De,ye),oe(U.__webglFramebuffer,E,De,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),v(De,ye)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,z.__webglTexture),Q(pe,x,ye),o&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)oe(U.__webglFramebuffer[me],E,x,n.COLOR_ATTACHMENT0,pe,me);else oe(U.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,pe,0);v(x,ye)&&b(pe),t.unbindTexture()}E.depthBuffer&&Me(E)}function D(E){const x=d(E)||o,U=E.textures;for(let z=0,te=U.length;z<te;z++){const re=U[z];if(v(re,x)){const Te=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ye=i.get(re).__webglTexture;t.bindTexture(Te,ye),b(Te),t.unbindTexture()}}}function X(E){if(o&&E.samples>0&&Y(E)===!1){const x=E.textures,U=E.width,z=E.height;let te=n.COLOR_BUFFER_BIT;const re=[],Te=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ye=i.get(E),pe=x.length>1;if(pe)for(let me=0;me<x.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let me=0;me<x.length;me++){re.push(n.COLOR_ATTACHMENT0+me),E.depthBuffer&&re.push(Te);const De=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(De===!1&&(E.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ye.__webglColorRenderbuffer[me]),De===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),pe){const de=i.get(x[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,U,z,0,0,U,z,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,re)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let me=0;me<x.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,ye.__webglColorRenderbuffer[me]);const De=i.get(x[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ye.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function q(E){return Math.min(r.maxSamples,E.samples)}function Y(E){const x=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(E){const x=a.render.frame;f.get(E)!==x&&(f.set(E,x),E.update())}function ae(E,x){const U=E.colorSpace,z=E.format,te=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===_l||U!==wi&&U!==xi&&(nt.getTransfer(U)===lt?o===!1?e.has("EXT_sRGB")===!0&&z===yn?(E.format=_l,E.minFilter=Zt,E.generateMipmaps=!1):x=bd.sRGBToLinear(x):(z!==yn||te!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function ue(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=I,this.setTexture2D=j,this.setTexture2DArray=N,this.setTexture3D=ne,this.setTextureCube=ce,this.rebindTextures=g,this.setupRenderTarget=C,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Y}function Gy(n,e,t){const i=t.isWebGL2;function r(s,a=xi){let o;const l=nt.getTransfer(a);if(s===Ei)return n.UNSIGNED_BYTE;if(s===md)return n.UNSIGNED_SHORT_4_4_4_4;if(s===gd)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Sv)return n.BYTE;if(s===Mv)return n.SHORT;if(s===ql)return n.UNSIGNED_SHORT;if(s===pd)return n.INT;if(s===Si)return n.UNSIGNED_INT;if(s===ni)return n.FLOAT;if(s===Ss)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===yv)return n.ALPHA;if(s===yn)return n.RGBA;if(s===Ev)return n.LUMINANCE;if(s===bv)return n.LUMINANCE_ALPHA;if(s===Ji)return n.DEPTH_COMPONENT;if(s===Br)return n.DEPTH_STENCIL;if(s===_l)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Tv)return n.RED;if(s===_d)return n.RED_INTEGER;if(s===Av)return n.RG;if(s===vd)return n.RG_INTEGER;if(s===xd)return n.RGBA_INTEGER;if(s===pa||s===ma||s===ga||s===_a)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===pa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===pa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ma)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ga)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===du||s===pu||s===mu||s===gu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===du)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_u||s===vu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===_u)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===vu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xu||s===Su||s===Mu||s===yu||s===Eu||s===bu||s===Tu||s===Au||s===wu||s===Ru||s===Cu||s===Pu||s===Lu||s===Du)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===xu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Su)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Eu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Au)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===wu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ru)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Pu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Du)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===va||s===Iu||s===Uu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===va)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Iu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Uu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wv||s===Nu||s===Ou||s===Fu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===va)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Nu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ou)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Fu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zi?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Vy extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class no extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ky={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new no,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new no,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new no,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),d=this._getHandJoint(u,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ky)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new no;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Wy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new tn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Ai({extensions:{fragDepth:!0},vertexShader:Wy,fragmentShader:Xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hn(new Cs(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class jy extends Vr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const S=new qy,m=t.getContextAttributes();let d=null,y=null;const v=[],b=[],P=new Ye;let R=null;const w=new fn;w.layers.enable(1),w.viewport=new Ct;const F=new fn;F.layers.enable(2),F.viewport=new Ct;const G=[w,F],M=new Vy;M.layers.enable(1),M.layers.enable(2);let A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let fe=v[Q];return fe===void 0&&(fe=new Xa,v[Q]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Q){let fe=v[Q];return fe===void 0&&(fe=new Xa,v[Q]=fe),fe.getGripSpace()},this.getHand=function(Q){let fe=v[Q];return fe===void 0&&(fe=new Xa,v[Q]=fe),fe.getHandSpace()};function K(Q){const fe=b.indexOf(Q.inputSource);if(fe===-1)return;const xe=v[fe];xe!==void 0&&(xe.update(Q.inputSource,Q.frame,u||a),xe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function I(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",W);for(let Q=0;Q<v.length;Q++){const fe=b[Q];fe!==null&&(b[Q]=null,v[Q].disconnect(fe))}A=null,B=null,S.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,y=null,Le.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Q){u=Q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",I),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Qi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,xe=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Br:Ji,xe=m.stencil?Zi:Si);const oe={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(oe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Qi(h.textureWidth,h.textureHeight,{format:yn,type:Ei,depthTexture:new Od(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ie=e.properties.get(y);ie.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function W(Q){for(let fe=0;fe<Q.removed.length;fe++){const xe=Q.removed[fe],V=b.indexOf(xe);V>=0&&(b[V]=null,v[V].disconnect(xe))}for(let fe=0;fe<Q.added.length;fe++){const xe=Q.added[fe];let V=b.indexOf(xe);if(V===-1){for(let ie=0;ie<v.length;ie++)if(ie>=b.length){b.push(xe),V=ie;break}else if(b[ie]===null){b[ie]=xe,V=ie;break}if(V===-1)break}const oe=v[V];oe&&oe.connect(xe)}}const L=new k,j=new k;function N(Q,fe,xe){L.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(xe.matrixWorld);const V=L.distanceTo(j),oe=fe.projectionMatrix.elements,ie=xe.projectionMatrix.elements,ge=oe[14]/(oe[10]-1),Me=oe[14]/(oe[10]+1),g=(oe[9]+1)/oe[5],C=(oe[9]-1)/oe[5],D=(oe[8]-1)/oe[0],X=(ie[8]+1)/ie[0],q=ge*D,Y=ge*X,le=V/(-D+X),ae=le*-D;fe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ae),Q.translateZ(le),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const ue=ge+le,E=Me+le,x=q-ae,U=Y+(V-ae),z=g*Me/E*ue,te=C*Me/E*ue;Q.projectionMatrix.makePerspective(x,U,z,te,ue,E),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ne(Q,fe){fe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(fe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;S.texture!==null&&(Q.near=S.depthNear,Q.far=S.depthFar),M.near=F.near=w.near=Q.near,M.far=F.far=w.far=Q.far,(A!==M.near||B!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,B=M.far,w.near=A,w.far=B,F.near=A,F.far=B,w.updateProjectionMatrix(),F.updateProjectionMatrix(),Q.updateProjectionMatrix());const fe=Q.parent,xe=M.cameras;ne(M,fe);for(let V=0;V<xe.length;V++)ne(xe[V],fe);xe.length===2?N(M,w,F):M.projectionMatrix.copy(w.projectionMatrix),ce(Q,M,fe)};function ce(Q,fe,xe){xe===null?Q.matrix.copy(fe.matrixWorld):(Q.matrix.copy(xe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(fe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(fe.projectionMatrix),Q.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=vl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return S.texture!==null};let he=null;function _e(Q,fe){if(c=fe.getViewerPose(u||a),_=fe,c!==null){const xe=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let V=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,V=!0);for(let ie=0;ie<xe.length;ie++){const ge=xe[ie];let Me=null;if(p!==null)Me=p.getViewport(ge);else{const C=f.getViewSubImage(h,ge);Me=C.viewport,ie===0&&(e.setRenderTargetTextures(y,C.colorTexture,h.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(y))}let g=G[ie];g===void 0&&(g=new fn,g.layers.enable(ie),g.viewport=new Ct,G[ie]=g),g.matrix.fromArray(ge.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.projectionMatrix.fromArray(ge.projectionMatrix),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),g.viewport.set(Me.x,Me.y,Me.width,Me.height),ie===0&&(M.matrix.copy(g.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),V===!0&&M.cameras.push(g)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const ie=f.getDepthInformation(xe[0]);ie&&ie.isValid&&ie.texture&&S.init(e,ie,r.renderState)}}for(let xe=0;xe<v.length;xe++){const V=b[xe],oe=v[xe];V!==null&&oe!==void 0&&oe.update(V,fe,u||a)}S.render(e,M),he&&he(Q,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Le=new Ud;Le.setAnimationLoop(_e),this.setAnimationLoop=function(Q){he=Q},this.dispose=function(){}}}const zi=new Hn,Yy=new dt;function $y(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ld(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,v,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),v=y.envMap,b=y.envMapRotation;if(v&&(m.envMap.value=v,zi.copy(b),zi.x*=-1,zi.y*=-1,zi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(zi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*P,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ky(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const b=v.program;i.uniformBlockBinding(y,b)}function u(y,v){let b=r[y.id];b===void 0&&(_(y),b=c(y),r[y.id]=b,y.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(y,P);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function c(y){const v=f();y.__bindingPointIndex=v;const b=n.createBuffer(),P=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],b=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let R=0,w=b.length;R<w;R++){const F=Array.isArray(b[R])?b[R]:[b[R]];for(let G=0,M=F.length;G<M;G++){const A=F[G];if(p(A,R,G,P)===!0){const B=A.__offset,K=Array.isArray(A.value)?A.value:[A.value];let I=0;for(let W=0;W<K.length;W++){const L=K[W],j=S(L);typeof L=="number"||typeof L=="boolean"?(A.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,B+I,A.__data)):L.isMatrix3?(A.__data[0]=L.elements[0],A.__data[1]=L.elements[1],A.__data[2]=L.elements[2],A.__data[3]=0,A.__data[4]=L.elements[3],A.__data[5]=L.elements[4],A.__data[6]=L.elements[5],A.__data[7]=0,A.__data[8]=L.elements[6],A.__data[9]=L.elements[7],A.__data[10]=L.elements[8],A.__data[11]=0):(L.toArray(A.__data,I),I+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,v,b,P){const R=y.value,w=v+"_"+b;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const F=P[w];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return P[w]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(y){const v=y.uniforms;let b=0;const P=16;for(let w=0,F=v.length;w<F;w++){const G=Array.isArray(v[w])?v[w]:[v[w]];for(let M=0,A=G.length;M<A;M++){const B=G[M],K=Array.isArray(B.value)?B.value:[B.value];for(let I=0,W=K.length;I<W;I++){const L=K[I],j=S(L),N=b%P;N!==0&&P-N<j.boundary&&(b+=P-N),B.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=b,b+=j.storage}}}const R=b%P;return R>0&&(b+=P-R),y.__size=b,y.__cache={},this}function S(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Vd{constructor(e={}){const{canvas:t=zv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),_=new Int32Array(4);let S=null,m=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const v=this;let b=!1,P=0,R=0,w=null,F=-1,G=null;const M=new Ct,A=new Ct;let B=null;const K=new Ze(0);let I=0,W=t.width,L=t.height,j=1,N=null,ne=null;const ce=new Ct(0,0,W,L),he=new Ct(0,0,W,L);let _e=!1;const Le=new $l;let Q=!1,fe=!1,xe=null;const V=new dt,oe=new Ye,ie=new k,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Me(){return w===null?j:1}let g=i;function C(T,H){for(let J=0;J<T.length;J++){const ee=T[J],$=t.getContext(ee,H);if($!==null)return $}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xl}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),g===null){const H=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&H.shift(),g=C(H,T),g===null)throw C(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let D,X,q,Y,le,ae,ue,E,x,U,z,te,re,Te,ye,pe,me,De,de,rt,Ge,Re,Ae,Ce;function je(){D=new nM(g),X=new KS(g,D,e),D.init(X),Re=new Gy(g,D,X),q=new zy(g,D,X),Y=new sM(g),le=new Ty,ae=new Hy(g,D,q,le,X,Re,Y),ue=new JS(v),E=new tM(v),x=new f0(g,X),Ae=new YS(g,D,x,X),U=new iM(g,x,Y,Ae),z=new cM(g,U,x,Y),de=new lM(g,X,ae),pe=new ZS(le),te=new by(v,ue,E,D,X,Ae,pe),re=new $y(v,le),Te=new wy,ye=new Iy(D,X),De=new jS(v,ue,E,q,z,h,l),me=new By(v,z,X),Ce=new Ky(g,Y,X,q),rt=new $S(g,D,Y,X),Ge=new rM(g,D,Y,X),Y.programs=te.programs,v.capabilities=X,v.extensions=D,v.properties=le,v.renderLists=Te,v.shadowMap=me,v.state=q,v.info=Y}je();const ze=new jy(v,g);this.xr=ze,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const T=D.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=D.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(W,L,!1))},this.getSize=function(T){return T.set(W,L)},this.setSize=function(T,H,J=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,L=H,t.width=Math.floor(T*j),t.height=Math.floor(H*j),J===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(W*j,L*j).floor()},this.setDrawingBufferSize=function(T,H,J){W=T,L=H,j=J,t.width=Math.floor(T*J),t.height=Math.floor(H*J),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,H,J,ee){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,H,J,ee),q.viewport(M.copy(ce).multiplyScalar(j).round())},this.getScissor=function(T){return T.copy(he)},this.setScissor=function(T,H,J,ee){T.isVector4?he.set(T.x,T.y,T.z,T.w):he.set(T,H,J,ee),q.scissor(A.copy(he).multiplyScalar(j).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(T){q.setScissorTest(_e=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){ne=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,H=!0,J=!0){let ee=0;if(T){let $=!1;if(w!==null){const we=w.texture.format;$=we===xd||we===vd||we===_d}if($){const we=w.texture.type,Pe=we===Ei||we===Si||we===ql||we===Zi||we===md||we===gd,Ue=De.getClearColor(),Oe=De.getClearAlpha(),Xe=Ue.r,Be=Ue.g,He=Ue.b;Pe?(p[0]=Xe,p[1]=Be,p[2]=He,p[3]=Oe,g.clearBufferuiv(g.COLOR,0,p)):(_[0]=Xe,_[1]=Be,_[2]=He,_[3]=Oe,g.clearBufferiv(g.COLOR,0,_))}else ee|=g.COLOR_BUFFER_BIT}H&&(ee|=g.DEPTH_BUFFER_BIT),J&&(ee|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Te.dispose(),ye.dispose(),le.dispose(),ue.dispose(),E.dispose(),z.dispose(),Ae.dispose(),Ce.dispose(),te.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",an),ze.removeEventListener("sessionend",ot),xe&&(xe.dispose(),xe=null),Gt.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=Y.autoReset,H=me.enabled,J=me.autoUpdate,ee=me.needsUpdate,$=me.type;je(),Y.autoReset=T,me.enabled=H,me.autoUpdate=J,me.needsUpdate=ee,me.type=$}function Ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Z(T){const H=T.target;H.removeEventListener("dispose",Z),ve(H)}function ve(T){be(T),le.remove(T)}function be(T){const H=le.get(T).programs;H!==void 0&&(H.forEach(function(J){te.releaseProgram(J)}),T.isShaderMaterial&&te.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,J,ee,$,we){H===null&&(H=ge);const Pe=$.isMesh&&$.matrixWorld.determinant()<0,Ue=Yd(T,H,J,ee,$);q.setMaterial(ee,Pe);let Oe=J.index,Xe=1;if(ee.wireframe===!0){if(Oe=U.getWireframeAttribute(J),Oe===void 0)return;Xe=2}const Be=J.drawRange,He=J.attributes.position;let vt=Be.start*Xe,nn=(Be.start+Be.count)*Xe;we!==null&&(vt=Math.max(vt,we.start*Xe),nn=Math.min(nn,(we.start+we.count)*Xe)),Oe!==null?(vt=Math.max(vt,0),nn=Math.min(nn,Oe.count)):He!=null&&(vt=Math.max(vt,0),nn=Math.min(nn,He.count));const wt=nn-vt;if(wt<0||wt===1/0)return;Ae.setup($,ee,Ue,J,Oe);let Gn,ft=rt;if(Oe!==null&&(Gn=x.get(Oe),ft=Ge,ft.setIndex(Gn)),$.isMesh)ee.wireframe===!0?(q.setLineWidth(ee.wireframeLinewidth*Me()),ft.setMode(g.LINES)):ft.setMode(g.TRIANGLES);else if($.isLine){let Ve=ee.linewidth;Ve===void 0&&(Ve=1),q.setLineWidth(Ve*Me()),$.isLineSegments?ft.setMode(g.LINES):$.isLineLoop?ft.setMode(g.LINE_LOOP):ft.setMode(g.LINE_STRIP)}else $.isPoints?ft.setMode(g.POINTS):$.isSprite&&ft.setMode(g.TRIANGLES);if($.isBatchedMesh)ft.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)ft.renderInstances(vt,wt,$.count);else if(J.isInstancedBufferGeometry){const Ve=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,jo=Math.min(J.instanceCount,Ve);ft.renderInstances(vt,wt,jo)}else ft.render(vt,wt)};function $e(T,H,J){T.transparent===!0&&T.side===ti&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,Ls(T,H,J),T.side=Ti,T.needsUpdate=!0,Ls(T,H,J),T.side=ti):Ls(T,H,J)}this.compile=function(T,H,J=null){J===null&&(J=T),m=ye.get(J),m.init(),y.push(m),J.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),T!==J&&T.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(v._useLegacyLights);const ee=new Set;return T.traverse(function($){const we=$.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Ue=we[Pe];$e(Ue,J,$),ee.add(Ue)}else $e(we,J,$),ee.add(we)}),y.pop(),m=null,ee},this.compileAsync=function(T,H,J=null){const ee=this.compile(T,H,J);return new Promise($=>{function we(){if(ee.forEach(function(Pe){le.get(Pe).currentProgram.isReady()&&ee.delete(Pe)}),ee.size===0){$(T);return}setTimeout(we,10)}D.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let st=null;function Lt(T){st&&st(T)}function an(){Gt.stop()}function ot(){Gt.start()}const Gt=new Ud;Gt.setAnimationLoop(Lt),typeof self<"u"&&Gt.setContext(self),this.setAnimationLoop=function(T){st=T,ze.setAnimationLoop(T),T===null?Gt.stop():Gt.start()},ze.addEventListener("sessionstart",an),ze.addEventListener("sessionend",ot),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(H),H=ze.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,H,w),m=ye.get(T,y.length),m.init(),y.push(m),V.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Le.setFromProjectionMatrix(V),fe=this.localClippingEnabled,Q=pe.init(this.clippingPlanes,fe),S=Te.get(T,d.length),S.init(),d.push(S),Cn(T,H,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(N,ne),this.info.render.frame++,Q===!0&&pe.beginShadows();const J=m.state.shadowsArray;if(me.render(J,T,H),Q===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1)&&De.render(S,T),m.setupLights(v._useLegacyLights),H.isArrayCamera){const ee=H.cameras;for(let $=0,we=ee.length;$<we;$++){const Pe=ee[$];Jl(S,T,Pe,Pe.viewport)}}else Jl(S,T,H);w!==null&&(ae.updateMultisampleRenderTarget(w),ae.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,H),Ae.resetDefaultState(),F=-1,G=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function Cn(T,H,J,ee){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Le.intersectsSprite(T)){ee&&ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(V);const Pe=z.update(T),Ue=T.material;Ue.visible&&S.push(T,Pe,Ue,J,ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Le.intersectsObject(T))){const Pe=z.update(T),Ue=T.material;if(ee&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ie.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ie.copy(Pe.boundingSphere.center)),ie.applyMatrix4(T.matrixWorld).applyMatrix4(V)),Array.isArray(Ue)){const Oe=Pe.groups;for(let Xe=0,Be=Oe.length;Xe<Be;Xe++){const He=Oe[Xe],vt=Ue[He.materialIndex];vt&&vt.visible&&S.push(T,Pe,vt,J,ie.z,He)}}else Ue.visible&&S.push(T,Pe,Ue,J,ie.z,null)}}const we=T.children;for(let Pe=0,Ue=we.length;Pe<Ue;Pe++)Cn(we[Pe],H,J,ee)}function Jl(T,H,J,ee){const $=T.opaque,we=T.transmissive,Pe=T.transparent;m.setupLightsView(J),Q===!0&&pe.setGlobalState(v.clippingPlanes,J),we.length>0&&jd($,we,H,J),ee&&q.viewport(M.copy(ee)),$.length>0&&Ps($,H,J),we.length>0&&Ps(we,H,J),Pe.length>0&&Ps(Pe,H,J),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function jd(T,H,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;const we=X.isWebGL2;xe===null&&(xe=new Qi(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?Ss:Ei,minFilter:Yi,samples:we?4:0})),v.getDrawingBufferSize(oe),we?xe.setSize(oe.x,oe.y):xe.setSize(xl(oe.x),xl(oe.y));const Pe=v.getRenderTarget();v.setRenderTarget(xe),v.getClearColor(K),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const Ue=v.toneMapping;v.toneMapping=yi,Ps(T,J,ee),ae.updateMultisampleRenderTarget(xe),ae.updateRenderTargetMipmap(xe);let Oe=!1;for(let Xe=0,Be=H.length;Xe<Be;Xe++){const He=H[Xe],vt=He.object,nn=He.geometry,wt=He.material,Gn=He.group;if(wt.side===ti&&vt.layers.test(ee.layers)){const ft=wt.side;wt.side=en,wt.needsUpdate=!0,Ql(vt,J,ee,nn,wt,Gn),wt.side=ft,wt.needsUpdate=!0,Oe=!0}}Oe===!0&&(ae.updateMultisampleRenderTarget(xe),ae.updateRenderTargetMipmap(xe)),v.setRenderTarget(Pe),v.setClearColor(K,I),v.toneMapping=Ue}function Ps(T,H,J){const ee=H.isScene===!0?H.overrideMaterial:null;for(let $=0,we=T.length;$<we;$++){const Pe=T[$],Ue=Pe.object,Oe=Pe.geometry,Xe=ee===null?Pe.material:ee,Be=Pe.group;Ue.layers.test(J.layers)&&Ql(Ue,H,J,Oe,Xe,Be)}}function Ql(T,H,J,ee,$,we){T.onBeforeRender(v,H,J,ee,$,we),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(v,H,J,ee,T,we),$.transparent===!0&&$.side===ti&&$.forceSinglePass===!1?($.side=en,$.needsUpdate=!0,v.renderBufferDirect(J,H,ee,$,T,we),$.side=Ti,$.needsUpdate=!0,v.renderBufferDirect(J,H,ee,$,T,we),$.side=ti):v.renderBufferDirect(J,H,ee,$,T,we),T.onAfterRender(v,H,J,ee,$,we)}function Ls(T,H,J){H.isScene!==!0&&(H=ge);const ee=le.get(T),$=m.state.lights,we=m.state.shadowsArray,Pe=$.state.version,Ue=te.getParameters(T,$.state,we,H,J),Oe=te.getProgramCacheKey(Ue);let Xe=ee.programs;ee.environment=T.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(T.isMeshStandardMaterial?E:ue).get(T.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",Z),Xe=new Map,ee.programs=Xe);let Be=Xe.get(Oe);if(Be!==void 0){if(ee.currentProgram===Be&&ee.lightsStateVersion===Pe)return tc(T,Ue),Be}else Ue.uniforms=te.getUniforms(T),T.onBuild(J,Ue,v),T.onBeforeCompile(Ue,v),Be=te.acquireProgram(Ue,Oe),Xe.set(Oe,Be),ee.uniforms=Ue.uniforms;const He=ee.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=pe.uniform),tc(T,Ue),ee.needsLights=Kd(T),ee.lightsStateVersion=Pe,ee.needsLights&&(He.ambientLightColor.value=$.state.ambient,He.lightProbe.value=$.state.probe,He.directionalLights.value=$.state.directional,He.directionalLightShadows.value=$.state.directionalShadow,He.spotLights.value=$.state.spot,He.spotLightShadows.value=$.state.spotShadow,He.rectAreaLights.value=$.state.rectArea,He.ltc_1.value=$.state.rectAreaLTC1,He.ltc_2.value=$.state.rectAreaLTC2,He.pointLights.value=$.state.point,He.pointLightShadows.value=$.state.pointShadow,He.hemisphereLights.value=$.state.hemi,He.directionalShadowMap.value=$.state.directionalShadowMap,He.directionalShadowMatrix.value=$.state.directionalShadowMatrix,He.spotShadowMap.value=$.state.spotShadowMap,He.spotLightMatrix.value=$.state.spotLightMatrix,He.spotLightMap.value=$.state.spotLightMap,He.pointShadowMap.value=$.state.pointShadowMap,He.pointShadowMatrix.value=$.state.pointShadowMatrix),ee.currentProgram=Be,ee.uniformsList=null,Be}function ec(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=po.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function tc(T,H){const J=le.get(T);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Yd(T,H,J,ee,$){H.isScene!==!0&&(H=ge),ae.resetTextureUnits();const we=H.fog,Pe=ee.isMeshStandardMaterial?H.environment:null,Ue=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:wi,Oe=(ee.isMeshStandardMaterial?E:ue).get(ee.envMap||Pe),Xe=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Be=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),He=!!J.morphAttributes.position,vt=!!J.morphAttributes.normal,nn=!!J.morphAttributes.color;let wt=yi;ee.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(wt=v.toneMapping);const Gn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ft=Gn!==void 0?Gn.length:0,Ve=le.get(ee),jo=m.state.lights;if(Q===!0&&(fe===!0||T!==G)){const ln=T===G&&ee.id===F;pe.setState(ee,T,ln)}let ut=!1;ee.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==jo.state.version||Ve.outputColorSpace!==Ue||$.isBatchedMesh&&Ve.batching===!1||!$.isBatchedMesh&&Ve.batching===!0||$.isInstancedMesh&&Ve.instancing===!1||!$.isInstancedMesh&&Ve.instancing===!0||$.isSkinnedMesh&&Ve.skinning===!1||!$.isSkinnedMesh&&Ve.skinning===!0||$.isInstancedMesh&&Ve.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ve.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ve.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ve.instancingMorph===!1&&$.morphTexture!==null||Ve.envMap!==Oe||ee.fog===!0&&Ve.fog!==we||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==pe.numPlanes||Ve.numIntersection!==pe.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==Be||Ve.morphTargets!==He||Ve.morphNormals!==vt||Ve.morphColors!==nn||Ve.toneMapping!==wt||X.isWebGL2===!0&&Ve.morphTargetsCount!==ft)&&(ut=!0):(ut=!0,Ve.__version=ee.version);let Ri=Ve.currentProgram;ut===!0&&(Ri=Ls(ee,H,$));let nc=!1,Wr=!1,Yo=!1;const Ut=Ri.getUniforms(),Ci=Ve.uniforms;if(q.useProgram(Ri.program)&&(nc=!0,Wr=!0,Yo=!0),ee.id!==F&&(F=ee.id,Wr=!0),nc||G!==T){Ut.setValue(g,"projectionMatrix",T.projectionMatrix),Ut.setValue(g,"viewMatrix",T.matrixWorldInverse);const ln=Ut.map.cameraPosition;ln!==void 0&&ln.setValue(g,ie.setFromMatrixPosition(T.matrixWorld)),X.logarithmicDepthBuffer&&Ut.setValue(g,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ut.setValue(g,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,Wr=!0,Yo=!0)}if($.isSkinnedMesh){Ut.setOptional(g,$,"bindMatrix"),Ut.setOptional(g,$,"bindMatrixInverse");const ln=$.skeleton;ln&&(X.floatVertexTextures?(ln.boneTexture===null&&ln.computeBoneTexture(),Ut.setValue(g,"boneTexture",ln.boneTexture,ae)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Ut.setOptional(g,$,"batchingTexture"),Ut.setValue(g,"batchingTexture",$._matricesTexture,ae));const $o=J.morphAttributes;if(($o.position!==void 0||$o.normal!==void 0||$o.color!==void 0&&X.isWebGL2===!0)&&de.update($,J,Ri),(Wr||Ve.receiveShadow!==$.receiveShadow)&&(Ve.receiveShadow=$.receiveShadow,Ut.setValue(g,"receiveShadow",$.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ci.envMap.value=Oe,Ci.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Wr&&(Ut.setValue(g,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&$d(Ci,Yo),we&&ee.fog===!0&&re.refreshFogUniforms(Ci,we),re.refreshMaterialUniforms(Ci,ee,j,L,xe),po.upload(g,ec(Ve),Ci,ae)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(po.upload(g,ec(Ve),Ci,ae),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ut.setValue(g,"center",$.center),Ut.setValue(g,"modelViewMatrix",$.modelViewMatrix),Ut.setValue(g,"normalMatrix",$.normalMatrix),Ut.setValue(g,"modelMatrix",$.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const ln=ee.uniformsGroups;for(let Ko=0,Zd=ln.length;Ko<Zd;Ko++)if(X.isWebGL2){const ic=ln[Ko];Ce.update(ic,Ri),Ce.bind(ic,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function $d(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Kd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,H,J){le.get(T.texture).__webglTexture=H,le.get(T.depthTexture).__webglTexture=J;const ee=le.get(T);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const J=le.get(T);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,J=0){w=T,P=H,R=J;let ee=!0,$=null,we=!1,Pe=!1;if(T){const Oe=le.get(T);Oe.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(g.FRAMEBUFFER,null),ee=!1):Oe.__webglFramebuffer===void 0?ae.setupRenderTarget(T):Oe.__hasExternalTextures&&ae.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const Be=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?$=Be[H][J]:$=Be[H],we=!0):X.isWebGL2&&T.samples>0&&ae.useMultisampledRTT(T)===!1?$=le.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?$=Be[J]:$=Be,M.copy(T.viewport),A.copy(T.scissor),B=T.scissorTest}else M.copy(ce).multiplyScalar(j).floor(),A.copy(he).multiplyScalar(j).floor(),B=_e;if(q.bindFramebuffer(g.FRAMEBUFFER,$)&&X.drawBuffers&&ee&&q.drawBuffers(T,$),q.viewport(M),q.scissor(A),q.setScissorTest(B),we){const Oe=le.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+H,Oe.__webglTexture,J)}else if(Pe){const Oe=le.get(T.texture),Xe=H||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Oe.__webglTexture,J||0,Xe)}F=-1},this.readRenderTargetPixels=function(T,H,J,ee,$,we,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){q.bindFramebuffer(g.FRAMEBUFFER,Ue);try{const Oe=T.texture,Xe=Oe.format,Be=Oe.type;if(Xe!==yn&&Re.convert(Xe)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===Ss&&(D.has("EXT_color_buffer_half_float")||X.isWebGL2&&D.has("EXT_color_buffer_float"));if(Be!==Ei&&Re.convert(Be)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===ni&&(X.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-ee&&J>=0&&J<=T.height-$&&g.readPixels(H,J,ee,$,Re.convert(Xe),Re.convert(Be),we)}finally{const Oe=w!==null?le.get(w).__webglFramebuffer:null;q.bindFramebuffer(g.FRAMEBUFFER,Oe)}}},this.copyFramebufferToTexture=function(T,H,J=0){const ee=Math.pow(2,-J),$=Math.floor(H.image.width*ee),we=Math.floor(H.image.height*ee);ae.setTexture2D(H,0),g.copyTexSubImage2D(g.TEXTURE_2D,J,0,0,T.x,T.y,$,we),q.unbindTexture()},this.copyTextureToTexture=function(T,H,J,ee=0){const $=H.image.width,we=H.image.height,Pe=Re.convert(J.format),Ue=Re.convert(J.type);ae.setTexture2D(J,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,J.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,J.unpackAlignment),H.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,ee,T.x,T.y,$,we,Pe,Ue,H.image.data):H.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,ee,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Pe,H.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,ee,T.x,T.y,Pe,Ue,H.image),ee===0&&J.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),q.unbindTexture()},this.copyTextureToTexture3D=function(T,H,J,ee,$=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=Math.round(T.max.x-T.min.x),Pe=Math.round(T.max.y-T.min.y),Ue=T.max.z-T.min.z+1,Oe=Re.convert(ee.format),Xe=Re.convert(ee.type);let Be;if(ee.isData3DTexture)ae.setTexture3D(ee,0),Be=g.TEXTURE_3D;else if(ee.isDataArrayTexture||ee.isCompressedArrayTexture)ae.setTexture2DArray(ee,0),Be=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,ee.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,ee.unpackAlignment);const He=g.getParameter(g.UNPACK_ROW_LENGTH),vt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),nn=g.getParameter(g.UNPACK_SKIP_PIXELS),wt=g.getParameter(g.UNPACK_SKIP_ROWS),Gn=g.getParameter(g.UNPACK_SKIP_IMAGES),ft=J.isCompressedTexture?J.mipmaps[$]:J.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,T.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,T.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,T.min.z),J.isDataTexture||J.isData3DTexture?g.texSubImage3D(Be,$,H.x,H.y,H.z,we,Pe,Ue,Oe,Xe,ft.data):ee.isCompressedArrayTexture?g.compressedTexSubImage3D(Be,$,H.x,H.y,H.z,we,Pe,Ue,Oe,ft.data):g.texSubImage3D(Be,$,H.x,H.y,H.z,we,Pe,Ue,Oe,Xe,ft),g.pixelStorei(g.UNPACK_ROW_LENGTH,He),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,vt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,nn),g.pixelStorei(g.UNPACK_SKIP_ROWS,wt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Gn),$===0&&ee.generateMipmaps&&g.generateMipmap(Be),q.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){P=0,R=0,w=null,q.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jl?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Xo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zy extends Vd{}Zy.prototype.isWebGL1Renderer=!0;class Jy extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kd extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cf=new k,Pf=new k,Lf=new dt,qa=new Yl,io=new ws;class Qy extends Pt{constructor(e=new mn,t=new kd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Cf.fromBufferAttribute(t,r-1),Pf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Cf.distanceTo(Pf);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;Lf.copy(r).invert(),qa.copy(e.ray).applyMatrix4(Lf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new k,c=new k,f=new k,h=new k,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const d=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let v=d,b=y-1;v<b;v+=p){const P=_.getX(v),R=_.getX(v+1);if(u.fromBufferAttribute(m,P),c.fromBufferAttribute(m,R),qa.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const F=e.ray.origin.distanceTo(h);F<e.near||F>e.far||t.push({distance:F,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=d,b=y-1;v<b;v+=p){if(u.fromBufferAttribute(m,v),c.fromBufferAttribute(m,v+1),qa.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Wd extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Df=new dt,Ml=new Yl,ro=new ws,so=new k;class eE extends Pt{constructor(e=new mn,t=new Wd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(r),ro.radius+=s,e.ray.intersectsSphere(ro)===!1)return;Df.copy(r).invert(),Ml.copy(e.ray).applyMatrix4(Df);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=h,S=p;_<S;_++){const m=u.getX(_);so.fromBufferAttribute(f,m),If(so,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=h,S=p;_<S;_++)so.fromBufferAttribute(f,_),If(so,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function If(n,e,t,i,r,s,a){const o=Ml.distanceSqToPoint(n);if(o<t){const l=new k;Ml.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Zl extends mn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),u(i),c(),this.setAttribute("position",new bn(s,3)),this.setAttribute("normal",new bn(s.slice(),3)),this.setAttribute("uv",new bn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new k,b=new k,P=new k;for(let R=0;R<t.length;R+=3)p(t[R+0],v),p(t[R+1],b),p(t[R+2],P),l(v,b,P,y)}function l(y,v,b,P){const R=P+1,w=[];for(let F=0;F<=R;F++){w[F]=[];const G=y.clone().lerp(b,F/R),M=v.clone().lerp(b,F/R),A=R-F;for(let B=0;B<=A;B++)B===0&&F===R?w[F][B]=G:w[F][B]=G.clone().lerp(M,B/A)}for(let F=0;F<R;F++)for(let G=0;G<2*(R-F)-1;G++){const M=Math.floor(G/2);G%2===0?(h(w[F][M+1]),h(w[F+1][M]),h(w[F][M])):(h(w[F][M+1]),h(w[F+1][M+1]),h(w[F+1][M]))}}function u(y){const v=new k;for(let b=0;b<s.length;b+=3)v.x=s[b+0],v.y=s[b+1],v.z=s[b+2],v.normalize().multiplyScalar(y),s[b+0]=v.x,s[b+1]=v.y,s[b+2]=v.z}function c(){const y=new k;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];const b=m(y)/2/Math.PI+.5,P=d(y)/Math.PI+.5;a.push(b,1-P)}_(),f()}function f(){for(let y=0;y<a.length;y+=6){const v=a[y+0],b=a[y+2],P=a[y+4],R=Math.max(v,b,P),w=Math.min(v,b,P);R>.9&&w<.1&&(v<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function p(y,v){const b=y*3;v.x=e[b+0],v.y=e[b+1],v.z=e[b+2]}function _(){const y=new k,v=new k,b=new k,P=new k,R=new Ye,w=new Ye,F=new Ye;for(let G=0,M=0;G<s.length;G+=9,M+=6){y.set(s[G+0],s[G+1],s[G+2]),v.set(s[G+3],s[G+4],s[G+5]),b.set(s[G+6],s[G+7],s[G+8]),R.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),F.set(a[M+4],a[M+5]),P.copy(y).add(v).add(b).divideScalar(3);const A=m(P);S(R,M+0,y,A),S(w,M+2,v,A),S(F,M+4,b,A)}}function S(y,v,b,P){P<0&&y.x===1&&(a[v]=y.x-1),b.x===0&&b.z===0&&(a[v]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.vertices,e.indices,e.radius,e.details)}}class Co extends Zl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Co(e.radius,e.detail)}}class tE extends nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xd extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ja=new dt,Uf=new k,Nf=new k;class nE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $l,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uf),Nf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nf),t.updateMatrixWorld(),ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ja),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iE extends nE{constructor(){super(new Nd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Of extends Xd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new iE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rE extends Xd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);const sE={__name:"ThreeScene",props:{mouse:{type:Object,required:!0}},setup(n){const e=n,t=xt(null);let i,r,s,a,o;return Gr(()=>{const l=t.value;i=new Vd({canvas:l,antialias:!0,alpha:!0}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),i.outputColorSpace=Sn,i.toneMapping=hd,i.toneMappingExposure=1,r=new Jy,s=new fn(60,window.innerWidth/window.innerHeight,.1,200),s.position.z=14;const u=new rE(16777215,.8);r.add(u);const c=new Of(16777215,1.25);c.position.set(6,10,8),r.add(c);const f=new Of(15122944,.8);f.position.set(-10,4,-6),r.add(f);const h=new hn(new Cs(60,60),new tE({color:856343,transparent:!0,opacity:.25,roughness:1}));h.rotation.x=-Math.PI/2,h.position.y=-5.5,r.add(h);const p=[15122944,15221651,54910,43212,14774357,10656766],_=[];for(let A=0;A<28;A++){const B=.25+Math.random()*1.1,K=new Co(B,5),I=p[Math.floor(Math.random()*p.length)],W=!0,L=new Ro({color:I,wireframe:W,transparent:!0,reflectivity:1,opacity:.35}),j=new hn(K,L);j.position.set((Math.random()-.5)*26,(Math.random()-.5)*16,(Math.random()-.5)*8-2),j.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),r.add(j),_.push({mesh:j,bobOffset:Math.random()*Math.PI*2,bobSpeed:.3+Math.random()*.5,bobAmt:.5+Math.random()*1.2,rotX:(Math.random()-.5)*.012,rotY:(Math.random()-.5)*.016,baseY:j.position.y})}const S=new Co(3.5,2),m=new Ro({color:15122944,wireframe:!0,transparent:!0,opacity:.03}),d=new hn(S,m);r.add(d);const y=700,v=new Float32Array(y*3),b=new Float32Array(y*3),P=[[.9,.76,0],[.91,.26,.58],[0,.84,.49],[0,.66,.8],[.88,.44,.33],[.64,.61,1]];for(let A=0;A<y;A++){v[A*3]=(Math.random()-.5)*40,v[A*3+1]=(Math.random()-.5)*25,v[A*3+2]=(Math.random()-.5)*12-4;const B=P[Math.floor(Math.random()*P.length)];b[A*3]=B[0],b[A*3+1]=B[1],b[A*3+2]=B[2]}const R=new mn;R.setAttribute("position",new pn(v,3)),R.setAttribute("color",new pn(b,3)),r.add(new eE(R,new Wd({size:.06,vertexColors:!0,transparent:!0,opacity:.4})));const w=[];for(let A=0;A<12;A++){const B=_[Math.floor(Math.random()*_.length)],K=_[Math.floor(Math.random()*_.length)];if(B===K)continue;const I=new mn().setFromPoints([B.mesh.position.clone(),K.mesh.position.clone()]),W=new kd({color:15122944,transparent:!0,opacity:.04}),L=new Qy(I,W);r.add(L),w.push({line:L,a:B,b:K})}let F=0;const G={x:0,y:0},M=()=>{var A,B;a=requestAnimationFrame(M),F+=.008,G.x+=((((A=e.mouse)==null?void 0:A.x)||0)-G.x)*.04,G.y+=((((B=e.mouse)==null?void 0:B.y)||0)-G.y)*.04,_.forEach(K=>{K.mesh.position.y=K.baseY+Math.sin(F*K.bobSpeed+K.bobOffset)*K.bobAmt,K.mesh.rotation.x+=K.rotX,K.mesh.rotation.y+=K.rotY}),d.rotation.y=F*.07,d.rotation.x=F*.04,w.forEach(({line:K,a:I,b:W})=>{const L=K.geometry.attributes.position.array;L[0]=I.mesh.position.x,L[1]=I.mesh.position.y,L[2]=I.mesh.position.z,L[3]=W.mesh.position.x,L[4]=W.mesh.position.y,L[5]=W.mesh.position.z,K.geometry.attributes.position.needsUpdate=!0}),s.position.x+=(G.x*1.5-s.position.x)*.03,s.position.y+=(G.y*.8-s.position.y)*.03,s.lookAt(0,0,0),i.render(r,s)};M(),o=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)},window.addEventListener("resize",o)}),tr(()=>{a&&cancelAnimationFrame(a),o&&window.removeEventListener("resize",o),i&&i.dispose()}),(l,u)=>(qe(),Ke("canvas",{ref_key:"canvasEl",ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}},null,512))}},oE={key:1,style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none",background:"radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(8,12,20,0.85) 100%)"}},aE={key:2,style:{position:"fixed",inset:0,zIndex:0,background:"var(--bg)",backgroundImage:`
          radial-gradient(ellipse at 15% 25%, rgba(255,229,0,0.04) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 75%, rgba(255,45,120,0.04) 0%, transparent 55%)
        `}},lE={__name:"App",setup(n){const e=Hr({x:0,y:0}),t=xt(null),i=xt(null),r=xt(!1),s=xt(!1),a=cd(),o=yt(()=>a.path==="/"),l={background:"#000000",color:"var(--text)",minHeight:"100vh",cursor:"none"};let u,c=0,f=0,h=0;const p=()=>{u||(u=requestAnimationFrame(()=>{var b;u=null;const d=t.value,y=i.value;d&&(d.style.setProperty("--cursor-x",`${c}px`),d.style.setProperty("--cursor-y",`${f}px`)),y&&(y.style.setProperty("--cursor-x",`${c}px`),y.style.setProperty("--cursor-y",`${f}px`));const v=performance.now();if(v-h>80){h=v;try{const P=document.elementFromPoint(c,f);r.value=!!((b=P==null?void 0:P.closest)!=null&&b.call(P,'a,button,input,textarea,select,label,[role="link"],.chip,.card'))}catch{r.value=!1}}}))};function _(d){d.pointerType&&d.pointerType!=="mouse"||(c=d.clientX,f=d.clientY,e.x=(c/window.innerWidth-.5)*2,e.y=-(f/window.innerHeight-.5)*2,p())}function S(){s.value=window.scrollY>500}function m(){window.scrollTo({top:0,behavior:"smooth"})}return Gr(()=>{window.addEventListener("pointermove",_,{passive:!0}),window.addEventListener("scroll",S)}),tr(()=>{window.removeEventListener("pointermove",_),window.removeEventListener("scroll",S),u&&cancelAnimationFrame(u)}),(d,y)=>{const v=Bo("RouterView");return qe(),Ke("div",{style:l},[se("div",{ref_key:"cursorDotEl",ref:t,class:Dt(["cursor-dot",{hovering:r.value}])},null,2),se("div",{ref_key:"cursorRingEl",ref:i,class:Dt(["cursor-ring",{hovering:r.value}])},null,2),se("button",{class:Dt(["back-to-top",{visible:s.value}]),onClick:m,"aria-label":"Back to top"}," ↑ ",2),o.value?(qe(),ms(sE,{key:0,mouse:e},null,8,["mouse"])):qi("",!0),o.value?(qe(),Ke("div",oE)):(qe(),Ke("div",aE)),Ne(z_),se("main",{style:Qt({position:"relative",zIndex:o.value?10:5})},[Ne(v)],4)])}}},cE="/assets/habit-tracker-dashboard.png";function uE(n,e,t){return Math.min(t,Math.max(e,n))}function fE(){var n,e;try{return!!((e=(n=window.matchMedia)==null?void 0:n.call(window,"(prefers-reduced-motion: reduce)"))!=null&&e.matches)}catch{return!1}}function Ff({from:n=0,to:e=0,durationMs:t=900,easing:i=a=>1-Math.pow(1-a,3),onUpdate:r,onComplete:s}){let a=0;const o=performance.now(),l=u=>{const c=t<=0?1:uE((u-o)/t,0,1),f=n+(e-n)*i(c);if(r==null||r(f,c),c>=1){s==null||s(),a=0;return}a=requestAnimationFrame(l)};return a=requestAnimationFrame(l),()=>{a&&cancelAnimationFrame(a),a=0}}const hE={class:"bento-content"},dE={__name:"BentoCard",props:{accent:{type:String,default:"var(--yellow)"},size:{type:String,default:"sm",validator:n=>["sm","md","lg","xl"].includes(n)},style:{type:Object,default:()=>({})}},setup(n){const e=n,t=yt(()=>({"--bento-accent":e.accent||"var(--yellow)"})),i=yt(()=>`bento--${e.size}`),r=xt(null);let s=0,a=0,o=0;function l(){s=0;const f=r.value;f&&(f.style.setProperty("--mx",`${a.toFixed(2)}px`),f.style.setProperty("--my",`${o.toFixed(2)}px`))}function u(f){if(f.pointerType&&f.pointerType!=="mouse")return;const h=r.value;if(!h)return;const p=h.getBoundingClientRect();a=f.clientX-p.left,o=f.clientY-p.top,!s&&(s=requestAnimationFrame(l))}function c(){const f=r.value;f&&(f.style.removeProperty("--mx"),f.style.removeProperty("--my"))}return(f,h)=>(qe(),Ke("div",{ref_key:"cardEl",ref:r,class:Dt(["bento glass",i.value]),style:Qt([t.value,n.style]),tabindex:"0",onPointermove:u,onPointerleave:c},[se("div",hE,[cm(f.$slots,"default",{},void 0)])],38))}},xn=ko(dE,[["__scopeId","data-v-9cb5b05e"]]),pE=["viewBox","fill","stroke","stroke-width"],mE=["innerHTML"],ns={__name:"Icon",props:{name:{type:String,required:!0},size:{type:[Number,String],default:24},color:{type:String,default:"currentColor"}},setup(n){const e=n,t={globe:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'},check:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,path:'<polyline points="20 6 9 17 4 12"/>'},github:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>'},linkedin:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>'},twitter:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'},devto:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M7.72 20.56c.36.18.76.18 1.12 0l6.92-3.98c.36-.21.58-.61.58-1.04V5.62c0-.43-.22-.83-.58-1.04L8.84 2.6c-.36-.18-.76-.18-1.12 0L.8 6.58c-.36.21-.58.61-.58 1.04v9.92c0 .43.22.83.58 1.04l6.92 3.98zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-5.67c-1.2 0-2.17.97-2.17 2.17s.97 2.17 2.17 2.17 2.17-.97 2.17-2.17-.97-2.17-2.17-2.17zM5.33 9.13c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm4.67 8.62h-3.5V8.75h1.17v6h1.17v-6h1.16v9z"/>'},instagram:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,path:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>'},email:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>'},cart:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'},brain:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 5.28.55"/><path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1-1.32 4.24 3 3 0 0 1-.34 5.58 2.5 2.5 0 0 1-5.28.55"/><path d="M12 4.5v16"/>'},clipboard:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>'},folder:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'},code:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'},arrowRight:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'},mapPin:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'},user:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'},briefcase:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'}},i=yt(()=>t[e.name]||t.code),r=yt(()=>({width:typeof e.size=="number"?`${e.size}px`:e.size,height:typeof e.size=="number"?`${e.size}px`:e.size,color:e.color,display:"inline-block",flexShrink:0}));return(s,a)=>(qe(),Ke("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:i.value.viewBox,style:Qt(r.value),fill:i.value.fill,stroke:i.value.stroke,"stroke-width":i.value.strokeWidth},[se("g",{innerHTML:i.value.path},null,8,mE)],12,pE))}},gE={key:0,style:{fontSize:"var(--text-base)"}},Ya={__name:"FloatBadge",props:{emoji:{type:String,default:""},icon:{type:String,default:""},label:{type:String,required:!0},color:{type:String,required:!0},style:{type:Object,default:()=>({})}},setup(n){const e=n,t=yt(()=>({display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",borderRadius:"var(--radius-sm)",background:`color-mix(in srgb, ${e.color} 8%, transparent)`,border:`1px solid color-mix(in srgb, ${e.color} 20%, transparent)`,fontFamily:"var(--mono)",fontSize:"var(--text-xs)",letterSpacing:"0.06em",color:e.color,whiteSpace:"nowrap"}));return(i,r)=>(qe(),Ke("div",{style:Qt([t.value,n.style])},[n.emoji?(qe(),Ke("span",gE,gt(n.emoji),1)):n.icon?(qe(),ms(ns,{key:1,name:n.icon,size:14,color:n.color},null,8,["name","color"])):qi("",!0),ht(" "+gt(n.label),1)],4))}},_E={class:"typewriter"},vE={__name:"Typewriter",setup(n){const e=["Full Stack Developer","Java Engineer","Backend Specialist","UI Developer"],t=xt(0),i=xt(""),r=xt(!1),s=xt(!1);let a;function o(){a&&clearTimeout(a),a=void 0}return Wp(()=>{if(o(),s.value){a=setTimeout(()=>{s.value=!1},2e3);return}const l=e[t.value];if(!r.value&&i.value===l){s.value=!0,r.value=!0;return}if(r.value&&i.value===""){r.value=!1,t.value=(t.value+1)%e.length;return}const u=r.value?40:70;a=setTimeout(()=>{i.value=r.value?i.value.slice(0,-1):l.slice(0,i.value.length+1)},u)}),tr(()=>o()),(l,u)=>(qe(),Ke("span",_E,[ht(gt(i.value)+" ",1),u[0]||(u[0]=se("span",{class:"typewriter-cursor","aria-hidden":"true"},"|",-1))]))}},xE={class:"home-hero"},SE={class:"home-hero-inner parallax-item","data-parallax":"","data-scroll":"0.10","data-mouse":"0.40"},ME={class:"hero-grid"},yE={class:"hero-copy"},EE={class:"hero-badges"},bE={class:"hero-title"},TE={class:"hero-role"},AE={class:"hero-actions"},wE={class:"hero-dashboard","aria-label":"Portfolio dashboard preview"},RE={class:"home-marquee"},CE={class:"marquee-track"},PE={id:"about",class:"home-section home-about"},LE={class:"home-inner"},DE={class:"u-font-display u-fw-800 u-lh-1 text-7xl text-glow glow-lime",style:{color:"var(--lime)"}},IE={class:"u-font-mono text-xs u-text-muted",style:{letterSpacing:"0.08em"}},UE={class:"u-flex u-wrap u-gap-2"},NE={class:"u-font-display u-fw-800 u-lh-1 text-7xl text-glow glow-orange",style:{color:"var(--orange)"}},OE={class:"home-section home-projects"},FE={class:"home-inner"},BE={class:"grid-3"},zE=["data-id"],HE={style:{marginBottom:"10px"}},GE={style:{fontFamily:"var(--display)",fontWeight:700,fontSize:"var(--text-2xl)",marginBottom:"10px",color:"var(--text)"}},VE={style:{fontSize:"var(--text-base)",lineHeight:1.7,color:"var(--text-mid)",marginBottom:"24px",fontWeight:300}},kE={id:"contact",class:"home-section home-contact"},WE={class:"home-inner"},XE={class:"contact-socials"},qE=["href","aria-label"],jE={style:{display:"flex",alignItems:"center",gap:"12px",minWidth:0}},YE={style:{fontFamily:"var(--display)",fontWeight:600,fontSize:"var(--text-lg)",whiteSpace:"nowrap"}},$E={class:"contact-social-handle",style:{fontFamily:"var(--mono)",fontSize:"var(--text-xs)",color:"var(--text-muted)",letterSpacing:"0.08em"}},KE={__name:"Home",setup(n){const e=xt(null),t=xt(null),i=Hr({}),r=xt(0),s=xt(0);let a=!1,o,l;const u=[{label:"Java",color:"orange"},{label:"Spring Boot",color:"lime"},{label:"React",color:"sky"},{label:"Three.js",color:"pink"},{label:"TypeScript",color:"sky"},{label:"PostgreSQL",color:"lav"},{label:"MySQL",color:"orange"},{label:"Docker",color:"sky"},{label:"AWS",color:"yellow"},{label:"Git",color:"orange"},{label:"REST APIs",color:"lime"},{label:"WebSockets",color:"pink"},{label:"Figma",color:"lav"},{label:"Vite",color:"yellow"},{label:"Node.js",color:"lime"}],c=[{title:"Momentum Habit Tracker",cat:"Productivity",icon:"check",color:"var(--teal)",pill:"lime",desc:"Habit and task tracking with daily targets and progress heatmaps"}],f=[{label:"GitHub",url:"https://github.com/prabath-23",handle:"github.com/prabath-23",icon:"github",color:"var(--text-mid)"},{label:"LinkedIn",url:"https://linkedin.com/in/prabath-sai/",handle:"linkedin.com/in/prabath-sai",icon:"linkedin",color:"var(--sky)"},{label:"Instagram",url:"https://instagram.com/prabath.chowdary",handle:"@prabath.chowdary",icon:"instagram",color:"var(--pink)"}];let h,p,_=[],S,m,d,y=0,v=0,b=0,P=0,R=0,w=0,F,G;const M=async()=>{await Nl();const W=t.value;if(!W)return;Array.from(W.children||[]).forEach((j,N)=>{j.style.setProperty("--reveal-i",String(N))})},A=()=>{if(!a){if(a=!0,fE()){r.value=4,s.value=5;return}o=Ff({from:0,to:4,durationMs:900,onUpdate:W=>r.value=Math.round(W)}),l=Ff({from:0,to:5,durationMs:900,onUpdate:W=>s.value=Math.round(W)})}},B=()=>{const W=t.value;if(!W)return;const L=window.getComputedStyle(W),j=Number(L.getPropertyValue("--bento-cols"))||6,N=Number.parseFloat(L.getPropertyValue("--bento-gap"))||12,ne=W.clientWidth||0;if(!ne)return;const ce=(ne-(j-1)*N)/j;W.style.setProperty("--bento-cell",`${Math.max(1,ce).toFixed(2)}px`)},K=()=>{G||(G=requestAnimationFrame(()=>{G=null,B()}))},I=W=>{var j,N;if(!W||(N=(j=window.matchMedia)==null?void 0:j.call(window,"(prefers-reduced-motion: reduce)"))!=null&&N.matches||(_=Array.from(W.querySelectorAll("[data-parallax]")),!_.length))return;const L=()=>{p||(p=requestAnimationFrame(()=>{p=null,v+=(y-v)*.08,R+=(b-R)*.1,w+=(P-w)*.1;for(const ne of _){const ce=Number(ne.dataset.scroll||0),he=Number(ne.dataset.mouse||0),_e=Number(ne.dataset.rotate||0),Le=Number(ne.dataset.scale||0),Q=ne.dataset.baseTransform||"",fe=R*he*28,xe=-v*ce+w*he*18,V=R*_e,oe=1+(Math.abs(R)+Math.abs(w))*.35*Le;ne.style.transform=`${Q} translate3d(${fe.toFixed(2)}px, ${xe.toFixed(2)}px, 0) rotate(${V.toFixed(2)}deg) scale(${oe.toFixed(4)})`}(Math.abs(y-v)>.5||Math.abs(b-R)>.002||Math.abs(P-w)>.002)&&L()}))};S=()=>{y=window.scrollY||0,L()},m=ne=>{var _e,Le;if((Le=(_e=window.matchMedia)==null?void 0:_e.call(window,"(hover: none)"))!=null&&Le.matches)return;const ce=window.innerWidth||1,he=window.innerHeight||1;b=(ne.clientX/ce-.5)*2,P=(ne.clientY/he-.5)*2,L()},d=()=>L(),window.addEventListener("scroll",S,{passive:!0}),window.addEventListener("pointermove",m,{passive:!0}),window.addEventListener("resize",d,{passive:!0}),y=window.scrollY||0,L()};return Gr(()=>{const W=e.value;W&&(I(W),M(),K(),t.value&&"ResizeObserver"in window?(F=new ResizeObserver(()=>K()),F.observe(t.value)):window.addEventListener("resize",K,{passive:!0}),h=new IntersectionObserver(L=>{L.forEach(j=>{if(!j.isIntersecting)return;const N=j.target.dataset.id;N&&(i[N]=!0),N==="bento"&&A()})},{threshold:.1}),W.querySelectorAll(".reveal").forEach(L=>h.observe(L)))}),tr(()=>{h&&h.disconnect(),o==null||o(),l==null||l(),F?F.disconnect():window.removeEventListener("resize",K),G&&cancelAnimationFrame(G),p&&cancelAnimationFrame(p),S&&window.removeEventListener("scroll",S),m&&window.removeEventListener("pointermove",m),d&&window.removeEventListener("resize",d),_.forEach(W=>{W!=null&&W.style&&(W.style.transform="")}),_=[]}),(W,L)=>{const j=Bo("RouterLink");return qe(),Ke("div",{ref_key:"rootEl",ref:e,class:"home"},[se("section",xE,[se("div",SE,[se("div",ME,[se("div",yE,[se("div",EE,[Ne(Ya,{icon:"code",label:"Product engineering",color:"var(--lime)"}),Ne(Ya,{icon:"globe",label:"India",color:"var(--sky)"}),Ne(Ya,{icon:"check",label:"Available",color:"var(--yellow)"})]),se("h1",bE,[L[0]||(L[0]=se("span",{class:"hero-name","data-text":"Prabath"},"Prabath",-1)),se("span",TE,[Ne(vE)])]),L[3]||(L[3]=se("p",{class:"hero-lede"},[se("span",{class:"hero-lede-strong"},"I build full-stack products that feel clear, fast, and dependable."),ht(" I care about the details users notice and the engineering choices teams maintain. "),se("span",{class:"hero-lede-muted"},"Frontend with Vue and React, backend with Java and Spring Boot, shaped by product thinking and practical delivery.")],-1)),se("div",AE,[Ne(j,{to:"/projects",class:"btn-yellow"},{default:pt(()=>[...L[1]||(L[1]=[ht("View Projects",-1)])]),_:1}),Ne(j,{to:{path:"/",hash:"#contact"},class:"btn-outline"},{default:pt(()=>[...L[2]||(L[2]=[ht("Get in Touch",-1)])]),_:1})])]),se("aside",wE,[L[5]||(L[5]=fo('<div class="dash-card dash-card--main" data-v-ecc4167e><div class="dash-eyebrow" data-v-ecc4167e><span data-v-ecc4167e>Featured build</span><span class="dash-live" data-v-ecc4167e>Live</span></div><h2 data-v-ecc4167e>Momentum Habit Tracker</h2><p data-v-ecc4167e>A focused habit dashboard for daily check-ins, targets, and year-level progress heatmaps.</p><div class="dash-screenshot" data-v-ecc4167e><img src="'+cE+'" alt="Momentum Habit Tracker dashboard preview" data-v-ecc4167e></div></div><div class="dash-card dash-card--metric" data-v-ecc4167e><span class="dash-label" data-v-ecc4167e>Stack</span><strong data-v-ecc4167e>React</strong><span data-v-ecc4167e>Vite + Tailwind</span></div><div class="dash-card dash-card--metric" data-v-ecc4167e><span class="dash-label" data-v-ecc4167e>Focus</span><strong data-v-ecc4167e>Habits</strong><span data-v-ecc4167e>Daily momentum</span></div>',3)),Ne(j,{to:"/projects",class:"dash-card dash-card--cta"},{default:pt(()=>[...L[4]||(L[4]=[se("span",null,"Open projects",-1),se("strong",null,"View work →",-1)])]),_:1})])])]),L[6]||(L[6]=se("div",{class:"parallax-item","data-parallax":"","data-scroll":"0.12","data-mouse":"0.25","data-base-transform":"translateX(-50%)",style:{position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"8px",animation:"fadeIn 1.5s ease 1.5s both"}},[se("span",{style:{fontFamily:"var(--mono)",fontSize:"var(--text-xs)",letterSpacing:"0.2em",color:"var(--text-muted)",textTransform:"uppercase"}}," scroll "),se("div",{style:{width:"1px",height:"48px",background:"linear-gradient(to bottom, var(--yellow), transparent)"}})],-1))]),se("div",RE,[L[7]||(L[7]=se("div",{class:"home-marquee-fade home-marquee-fade--left"},null,-1)),L[8]||(L[8]=se("div",{class:"home-marquee-fade home-marquee-fade--right"},null,-1)),se("div",CE,[(qe(!0),Ke(_t,null,ii([...u,...u],(N,ne)=>(qe(),Ke("span",{key:ne,class:Dt(["pill",N.color]),style:{flexShrink:0}},gt(N.label),3))),128))])]),se("section",PE,[se("div",LE,[se("div",{class:Dt(["reveal",{visible:!!i.about}]),"data-id":"about",style:{marginBottom:"48px"}},[...L[9]||(L[9]=[se("div",{class:"section-chip"},"About Me",-1),se("h2",{class:"section-title"},[ht(" Who's "),se("span",{class:"grad-yellow"},"Prabath?")],-1)])],2),se("div",{ref_key:"bentoGridEl",ref:t,class:Dt(["reveal reveal-delay-1 bento-grid",{visible:!!i.bento}]),"data-id":"bento"},[Ne(xn,{size:"sm",accent:"var(--lime)",class:"glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5"},{default:pt(()=>[se("div",DE,gt(r.value)+"+",1),L[10]||(L[10]=se("div",{class:"u-font-mono text-xs u-text-muted u-uppercase u-mt-2",style:{letterSpacing:"0.12em"}}," Years Coding ",-1))]),_:1}),Ne(xn,{size:"md",accent:"var(--sky)",class:"glass-strong u-flex u-items-center u-gap-18 u-p-5"},{default:pt(()=>[Ne(ns,{name:"globe",size:48,color:"var(--text-mid)"}),se("div",null,[L[12]||(L[12]=se("div",{class:"u-font-display u-fw-700 text-lg u-mb-1"},"India",-1)),se("div",IE,[L[11]||(L[11]=ht("Remote friendly ",-1)),Ne(ns,{name:"check",size:12,color:"var(--lime)"})])])]),_:1}),Ne(xn,{size:"lg",accent:"var(--yellow)",class:"glass-strong u-p-5 about-profile-card"},{default:pt(()=>[L[13]||(L[13]=se("p",{class:"text-base u-fw-300 u-mb-6",style:{lineHeight:1.75,color:"#b8cce0"}}," I build polished product interfaces and reliable Java services with the same bias: make the path clear, keep the system fast, and give every interaction a reason. ",-1)),se("div",UE,[(qe(),Ke(_t,null,ii(["Java","Spring Boot","React","Three.js","PostgreSQL"],N=>se("span",{key:N,class:"pill yellow"},gt(N),1)),64))])]),_:1}),Ne(xn,{size:"sm",accent:"var(--orange)",class:"glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5"},{default:pt(()=>[se("div",NE,gt(s.value)+"+",1),L[14]||(L[14]=se("div",{class:"u-font-mono text-xs u-text-muted u-uppercase u-mt-2",style:{letterSpacing:"0.12em"}},"Projects",-1))]),_:1}),Ne(xn,{size:"md",accent:"var(--lavender)",class:"glass-strong u-flex u-col u-gap-3 u-p-5"},{default:pt(()=>[...L[15]||(L[15]=[se("div",{class:"u-font-display u-fw-700 text-lg"},"3D Web",-1),se("div",{class:"text-sm u-text-muted u-lh-16"}," Building immersive experiences with Three.js. ",-1)])]),_:1}),Ne(xn,{size:"sm",accent:"var(--teal)",class:"glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5"},{default:pt(()=>[...L[16]||(L[16]=[se("div",{class:"u-font-display u-fw-800 u-lh-1 text-5xl text-glow glow-yellow",style:{color:"var(--teal)"}},"⚡",-1),se("div",{class:"u-font-mono text-xs u-text-muted u-uppercase u-mt-2",style:{letterSpacing:"0.12em"}},[ht(" Fast"),se("br"),ht("Shipping ")],-1)])]),_:1}),Ne(xn,{size:"md",accent:"var(--sky)",class:"glass-strong u-flex u-col u-gap-2 u-p-5"},{default:pt(()=>[...L[17]||(L[17]=[se("div",{class:"u-font-display u-fw-700 text-lg"},"What I care about",-1),se("ul",{class:"text-sm u-text-mid u-lh-17",style:{marginLeft:"18px"}},[se("li",null,"UX that feels effortless"),se("li",null,"Performance & reliability"),se("li",null,"Clean architecture")],-1)])]),_:1}),Ne(xn,{size:"sm",accent:"var(--lavender)",class:"glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5"},{default:pt(()=>[...L[18]||(L[18]=[se("div",{class:"u-font-display u-fw-800 u-lh-1 text-5xl text-glow glow-lav",style:{color:"var(--lavender)"}},"★",-1),se("div",{class:"u-font-mono text-xs u-text-muted u-uppercase u-mt-2",style:{letterSpacing:"0.12em"}},[ht(" Detail"),se("br"),ht("Oriented ")],-1)])]),_:1}),Ne(xn,{size:"md",accent:"var(--lime)",class:"glass-strong u-flex u-col u-gap-3 u-p-5"},{default:pt(()=>[...L[19]||(L[19]=[se("div",{class:"u-font-display u-fw-700 text-lg"},"Currently building",-1),se("div",{class:"text-sm u-text-mid u-lh-17"}," A cleaner frontend-only portfolio with project routing, responsive cards, and a live habit tracker showcase. ",-1),se("div",{class:"u-flex u-wrap u-gap-2 u-mt-2"},[se("span",{class:"pill lime"},"Vue"),se("span",{class:"pill yellow"},"Three.js"),se("span",{class:"pill sky"},"Spring")],-1)])]),_:1}),Ne(xn,{size:"sm",accent:"var(--pink)",class:"glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5"},{default:pt(()=>[...L[20]||(L[20]=[se("div",{class:"u-font-display u-fw-800 u-lh-1 text-5xl text-glow glow-pink",style:{color:"var(--pink)"}},"✦",-1),se("div",{class:"u-font-mono text-xs u-text-muted u-uppercase u-mt-2",style:{letterSpacing:"0.12em"}},[ht(" UI"),se("br"),ht("Polish ")],-1)])]),_:1}),Ne(xn,{size:"sm",accent:"var(--sky)",class:"glass-strong u-flex u-col u-justify-center u-items-center u-text-center u-p-5"},{default:pt(()=>[...L[21]||(L[21]=[se("div",{class:"u-font-display u-fw-800 u-lh-1 text-5xl text-glow glow-sky",style:{color:"var(--sky)"}},"◎",-1),se("div",{class:"u-font-mono text-xs u-text-muted u-uppercase u-mt-2",style:{letterSpacing:"0.12em"}},[ht(" Pixel"),se("br"),ht("Perfect ")],-1)])]),_:1})],2)])]),se("section",OE,[se("div",FE,[se("div",{class:Dt(["reveal u-flex u-justify-between u-items-end u-wrap u-gap-5 u-mb-9",{visible:!!i["projects-title"]}]),"data-id":"projects-title"},[L[23]||(L[23]=se("div",null,[se("div",{class:"section-chip"},"Featured Work"),se("h2",{class:"section-title"},[ht("Things I've "),se("span",{class:"grad-pink"},"Built")])],-1)),Ne(j,{to:"/projects",class:"home-all-projects-link"},{default:pt(()=>[...L[22]||(L[22]=[ht("All projects →",-1)])]),_:1})],2),se("div",BE,[(qe(),Ke(_t,null,ii(c,(N,ne)=>se("div",{key:N.title,class:Dt(["proj-card reveal",[`reveal-delay-${ne+1}`,{visible:!!i[`proj-${ne}`]}]]),"data-id":`proj-${ne}`,style:Qt({"--card-accent":N.color})},[Ne(ns,{name:N.icon,size:40,color:N.color,style:{marginBottom:"16px"}},null,8,["name","color"]),se("div",HE,[se("span",{class:Dt(["pill",N.pill]),style:{marginBottom:"10px",display:"inline-block"}},gt(N.cat),3)]),se("h3",GE,gt(N.title),1),se("p",VE,gt(N.desc),1),Ne(j,{to:"/projects",class:"home-project-link",style:Qt({color:N.color})},{default:pt(()=>[...L[24]||(L[24]=[ht(" View project ↗ ",-1)])]),_:1},8,["style"])],14,zE)),64))])])]),se("section",kE,[se("div",WE,[se("div",{class:Dt(["reveal glass contact-card",{visible:!!i.contact}]),"data-id":"contact",style:{borderTop:"3px solid var(--yellow)",position:"relative",overflow:"hidden"}},[L[25]||(L[25]=fo('<div style="position:absolute;top:-20%;right:-5%;width:300px;height:300px;background:radial-gradient(circle, rgba(255,229,0,0.03) 0%, transparent 70%);border-radius:50%;pointer-events:none;" data-v-ecc4167e></div><div style="position:relative;" data-v-ecc4167e><div class="section-chip" style="margin-bottom:20px;" data-v-ecc4167e>Contact</div><h2 style="font-family:var(--display);font-weight:800;font-size:clamp(36px,4.5vw,58px);letter-spacing:-0.03em;line-height:1.05;margin-bottom:20px;" data-v-ecc4167e> Got a cool<br data-v-ecc4167e>project? <span class="grad-yellow" data-v-ecc4167e>Let&#39;s talk.</span></h2><p style="font-size:15px;line-height:1.8;color:var(--text-mid);margin-bottom:36px;font-weight:300;" data-v-ecc4167e> Happy to connect about collaborations, product work, and engineering conversations. </p><a href="mailto:hello@prabath.dev" class="btn-yellow" data-v-ecc4167e>Say Hello</a></div>',2)),se("div",XE,[(qe(),Ke(_t,null,ii(f,N=>se("a",{key:N.label,href:N.url,class:"contact-social-link","aria-label":`Open ${N.label}`},[se("div",jE,[Ne(ns,{name:N.icon,size:18,color:N.color},null,8,["name","color"]),se("span",YE,gt(N.label),1)]),se("span",$E,gt(N.handle)+" ↗ ",1)],8,qE)),64))])],2),L[26]||(L[26]=fo('<div style="margin-top:60px;padding-top:28px;border-top:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;" data-v-ecc4167e><span style="font-family:var(--mono);font-size:var(--text-xs);color:var(--text-muted);letter-spacing:0.1em;" data-v-ecc4167e> © 2026 Prabath </span><div style="display:flex;gap:8px;" data-v-ecc4167e><span class="pill lime" data-v-ecc4167e>Open to collaborate</span><span class="pill sky" data-v-ecc4167e>Remote friendly</span></div></div>',1))])])],512)}}},ZE=ko(KE,[["__scopeId","data-v-ecc4167e"]]),JE={class:"page"},QE={class:"page-header"},eb={class:"page-inner"},tb={class:"page-tools"},nb={class:"chips"},ib=["onClick"],rb={class:"page-body"},sb={class:"page-inner"},ob={key:0,style:{textAlign:"center",padding:"80px 0",fontFamily:"var(--mono)",fontSize:"var(--text-xs)",color:"var(--text-muted)",letterSpacing:"0.15em"}},ab={key:1,style:{textAlign:"center",padding:"80px 0",fontFamily:"var(--mono)",fontSize:"var(--text-sm)",color:"var(--text-muted)"}},lb={key:2,class:"cards-grid"},cb={class:"project-kicker"},ub={class:"project-badges"},fb={key:0,class:"badge featured"},hb={key:1,class:"badge live"},db={style:{fontFamily:"var(--mono)",fontSize:"var(--text-xs)",color:"var(--text-muted)",letterSpacing:"0.12em"}},pb={class:"project-title",style:{marginBottom:"14px",color:"var(--text)"}},mb={class:"project-desc",style:{marginBottom:"22px"}},gb={class:"u-flex u-wrap u-gap-1 u-mb-7"},_b={class:"project-links"},vb=["href"],xb=["href","target"],Sb={__name:"Projects",setup(n){const t=xt([{id:"momentum-habit-tracker",title:"Momentum Habit Tracker",category:"Productivity · React",description:"A polished habit and task tracker with daily marking, targets, and week, month, and year progress heatmaps.",tech:["React","Vite","Tailwind CSS"],year:"2026",featured:!0,githubUrl:"#",liveUrl:"https://momentum.prabath.in",liveTarget:"_self",color:"#00d4aa"}]),i=xt(!1),r=xt("all"),s=xt(""),a=yt(()=>{const l=t.value.map(u=>(u.category||"").split(" · ")[0].toLowerCase()).filter(Boolean);return["all",...Array.from(new Set(l))]}),o=yt(()=>{const l=(s.value||"").toLowerCase().trim(),u=r.value==="all"?t.value:t.value.filter(c=>(c.category||"").toLowerCase().includes(r.value));return l?u.filter(c=>[c.title,c.category,c.description,Array.isArray(c.tech)?c.tech.join(" "):"",c.year].filter(Boolean).join(" ").toLowerCase().includes(l)):u});return(l,u)=>(qe(),Ke("div",JE,[se("div",QE,[se("div",eb,[u[1]||(u[1]=fo('<div style="width:44px;height:1px;background:var(--teal);margin-bottom:16px;"></div><p class="section-label">Portfolio</p><div class="page-title-row"><div><h1 class="section-title">Projects</h1><p class="page-subtitle">A small set of things I’ve built across realtime systems, product interfaces, and interactive UI.</p></div></div>',3)),se("div",tb,[Gp(se("input",{"onUpdate:modelValue":u[0]||(u[0]=c=>s.value=c),class:"input",placeholder:"Search projects…",style:{maxWidth:"320px"}},null,512),[[Eg,s.value,void 0,{trim:!0}]]),se("div",nb,[(qe(!0),Ke(_t,null,ii(a.value,c=>(qe(),Ke("button",{key:c,class:Dt(["chip",{active:r.value===c}]),onClick:f=>r.value=c},gt(c),11,ib))),128))])])])]),se("div",rb,[se("div",sb,[i.value?(qe(),Ke("div",ob," Loading projects... ")):o.value.length===0?(qe(),Ke("div",ab,' No projects in "'+gt(r.value)+'" yet. ',1)):(qe(),Ke("div",lb,[(qe(!0),Ke(_t,null,ii(o.value,(c,f)=>(qe(),Ke("article",{key:c.id||c.title,class:Dt(["card project-card",{"project-card--spotlight":c.id==="momentum-habit-tracker"}]),style:Qt({"--accent":c.color,animation:`riseUp 0.7s cubic-bezier(0.16,1,0.3,1) ${f*.1}s both`})},[se("div",cb,[se("div",ub,[se("span",{class:"badge",style:Qt({borderColor:"rgba(255,255,255,0.10)",color:c.color})},gt(c.category),5),c.featured?(qe(),Ke("span",fb,"Featured")):qi("",!0),c.id==="momentum-habit-tracker"?(qe(),Ke("span",hb,"Live")):qi("",!0)]),se("span",db,gt(c.year),1)]),se("h2",pb,gt(c.title),1),se("p",mb,gt(c.description),1),se("div",gb,[(qe(!0),Ke(_t,null,ii(c.tech,h=>(qe(),Ke("span",{key:h,class:"tag"},gt(h),1))),128))]),se("div",_b,[c.githubUrl&&c.githubUrl!=="#"?(qe(),Ke("a",{key:0,href:c.githubUrl,target:"_blank",rel:"noopener noreferrer"}," GitHub ↗ ",8,vb)):qi("",!0),c.liveUrl&&c.liveUrl!=="#"?(qe(),Ke("a",{key:1,href:c.liveUrl,target:c.liveTarget||"_blank",rel:"noopener noreferrer"}," Live Demo ↗ ",8,xb)):qi("",!0)])],6))),128))]))])])]))}},Mb={},yb={style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"24px",textAlign:"center",padding:"0 24px",position:"relative",zIndex:10}};function Eb(n,e){const t=Bo("RouterLink");return qe(),Ke("div",yb,[e[1]||(e[1]=se("div",{style:{fontSize:"var(--text-7xl)"}},"🤔",-1)),e[2]||(e[2]=se("div",{class:"section-chip"},"404 — Not found",-1)),e[3]||(e[3]=se("h1",{style:{fontFamily:"var(--display)",fontSize:"var(--text-5xl)",fontWeight:800,letterSpacing:"-0.03em"}},[ht(" Lost in "),se("span",{class:"grad-yellow"},"cyberspace")],-1)),Ne(t,{to:"/",class:"btn-yellow"},{default:pt(()=>[...e[0]||(e[0]=[ht("Take me home 🏠",-1)])]),_:1})])}const bb=ko(Mb,[["render",Eb]]),Tb=U_({history:h_(),routes:[{path:"/",component:ZE},{path:"/projects",component:Sb},{path:"/:pathMatch(.*)*",component:bb}],scrollBehavior(n,e,t){return t||(n.hash?{el:n.hash}:{top:0})}}),qd=Ag(lE);qd.use(Tb);qd.mount("#app");
