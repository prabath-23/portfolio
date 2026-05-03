(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _l(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const it={},yr=[],Un=()=>{},Uf=()=>!1,Ao=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),vl=n=>n.startsWith("onUpdate:"),Mt=Object.assign,xl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Kd=Object.prototype.hasOwnProperty,Qe=(n,e)=>Kd.call(n,e),De=Array.isArray,br=n=>ps(n)==="[object Map]",Nf=n=>ps(n)==="[object Set]",Ql=n=>ps(n)==="[object Date]",Oe=n=>typeof n=="function",_t=n=>typeof n=="string",On=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",Of=n=>(et(n)||Oe(n))&&Oe(n.then)&&Oe(n.catch),Ff=Object.prototype.toString,ps=n=>Ff.call(n),Zd=n=>ps(n).slice(8,-1),Bf=n=>ps(n)==="[object Object]",Ml=n=>_t(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Zr=_l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Jd=/-\w/g,kt=wo(n=>n.replace(Jd,e=>e.slice(1).toUpperCase())),Qd=/\B([A-Z])/g,Qi=wo(n=>n.replace(Qd,"-$1").toLowerCase()),Ro=wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),qo=wo(n=>n?`on${Ro(n)}`:""),Dn=(n,e)=>!Object.is(n,e),no=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},zf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Sl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},ep=n=>{const e=_t(n)?Number(n):NaN;return isNaN(e)?n:e};let ec;const Co=()=>ec||(ec=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function un(n){if(De(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=_t(i)?rp(i):un(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(_t(n)||et(n))return n}const tp=/;(?![^(]*\))/g,np=/:([^]+)/,ip=/\/\*[^]*?\*\//g;function rp(n){const e={};return n.replace(ip,"").split(tp).forEach(t=>{if(t){const i=t.split(np);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ni(n){let e="";if(_t(n))e=n;else if(De(n))for(let t=0;t<n.length;t++){const i=ni(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const sp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",op=_l(sp);function Hf(n){return!!n||n===""}function ap(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=El(n[i],e[i]);return t}function El(n,e){if(n===e)return!0;let t=Ql(n),i=Ql(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=On(n),i=On(e),t||i)return n===e;if(t=De(n),i=De(e),t||i)return t&&i?ap(n,e):!1;if(t=et(n),i=et(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!El(n[a],e[a]))return!1}}return String(n)===String(e)}const Gf=n=>!!(n&&n.__v_isRef===!0),ct=n=>_t(n)?n:n==null?"":De(n)||et(n)&&(n.toString===Ff||!Oe(n.toString))?Gf(n)?ct(n.value):JSON.stringify(n,kf,2):String(n),kf=(n,e)=>Gf(e)?kf(n,e.value):br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[jo(i,s)+" =>"]=r,t),{})}:Nf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>jo(t))}:On(e)?jo(e):et(e)&&!De(e)&&!Bf(e)?String(e):e,jo=(n,e="")=>{var t;return On(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xt;class lp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Xt,!e&&Xt&&(this.index=(Xt.scopes||(Xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Xt;try{return Xt=this,e()}finally{Xt=t}}}on(){++this._on===1&&(this.prevScope=Xt,Xt=this)}off(){this._on>0&&--this._on===0&&(Xt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function cp(){return Xt}let at;const Yo=new WeakSet;class Vf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xt&&Xt.active&&Xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yo.has(this)&&(Yo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Xf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,tc(this),qf(this);const e=at,t=Mn;at=this,Mn=!0;try{return this.fn()}finally{jf(this),at=e,Mn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tl(e);this.deps=this.depsTail=void 0,tc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Va(this)&&this.run()}get dirty(){return Va(this)}}let Wf=0,Jr,Qr;function Xf(n,e=!1){if(n.flags|=8,e){n.next=Qr,Qr=n;return}n.next=Jr,Jr=n}function yl(){Wf++}function bl(){if(--Wf>0)return;if(Qr){let e=Qr;for(Qr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Jr;){let e=Jr;for(Jr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function qf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Tl(i),up(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Va(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Yf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Yf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===ss)||(n.globalVersion=ss,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Va(n))))return;n.flags|=2;const e=n.dep,t=at,i=Mn;at=n,Mn=!0;try{qf(n);const r=n.fn(n._value);(e.version===0||Dn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{at=t,Mn=i,jf(n),n.flags&=-3}}function Tl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Tl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function up(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Mn=!0;const $f=[];function ri(){$f.push(Mn),Mn=!1}function si(){const n=$f.pop();Mn=n===void 0?!0:n}function tc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=at;at=void 0;try{e()}finally{at=t}}}let ss=0;class fp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Al{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!at||!Mn||at===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==at)t=this.activeLink=new fp(at,this),at.deps?(t.prevDep=at.depsTail,at.depsTail.nextDep=t,at.depsTail=t):at.deps=at.depsTail=t,Kf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=at.depsTail,t.nextDep=void 0,at.depsTail.nextDep=t,at.depsTail=t,at.deps===t&&(at.deps=i)}return t}trigger(e){this.version++,ss++,this.notify(e)}notify(e){yl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bl()}}}function Kf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Kf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Wa=new WeakMap,Yi=Symbol(""),Xa=Symbol(""),os=Symbol("");function Dt(n,e,t){if(Mn&&at){let i=Wa.get(n);i||Wa.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Al),r.map=i,r.key=t),r.track()}}function Kn(n,e,t,i,r,s){const a=Wa.get(n);if(!a){ss++;return}const o=l=>{l&&l.trigger()};if(yl(),e==="clear")a.forEach(o);else{const l=De(n),c=l&&Ml(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===os||!On(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(os)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Yi)),br(n)&&o(a.get(Xa)));break;case"delete":l||(o(a.get(Yi)),br(n)&&o(a.get(Xa)));break;case"set":br(n)&&o(a.get(Yi));break}}bl()}function tr(n){const e=Ze(n);return e===n?e:(Dt(e,"iterate",os),fn(n)?e:e.map(En))}function Po(n){return Dt(n=Ze(n),"iterate",os),n}function Cn(n,e){return oi(n)?Pr($i(n)?En(e):e):En(e)}const hp={__proto__:null,[Symbol.iterator](){return $o(this,Symbol.iterator,n=>Cn(this,n))},concat(...n){return tr(this).concat(...n.map(e=>De(e)?tr(e):e))},entries(){return $o(this,"entries",n=>(n[1]=Cn(this,n[1]),n))},every(n,e){return zn(this,"every",n,e,void 0,arguments)},filter(n,e){return zn(this,"filter",n,e,t=>t.map(i=>Cn(this,i)),arguments)},find(n,e){return zn(this,"find",n,e,t=>Cn(this,t),arguments)},findIndex(n,e){return zn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return zn(this,"findLast",n,e,t=>Cn(this,t),arguments)},findLastIndex(n,e){return zn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return zn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ko(this,"includes",n)},indexOf(...n){return Ko(this,"indexOf",n)},join(n){return tr(this).join(n)},lastIndexOf(...n){return Ko(this,"lastIndexOf",n)},map(n,e){return zn(this,"map",n,e,void 0,arguments)},pop(){return Hr(this,"pop")},push(...n){return Hr(this,"push",n)},reduce(n,...e){return nc(this,"reduce",n,e)},reduceRight(n,...e){return nc(this,"reduceRight",n,e)},shift(){return Hr(this,"shift")},some(n,e){return zn(this,"some",n,e,void 0,arguments)},splice(...n){return Hr(this,"splice",n)},toReversed(){return tr(this).toReversed()},toSorted(n){return tr(this).toSorted(n)},toSpliced(...n){return tr(this).toSpliced(...n)},unshift(...n){return Hr(this,"unshift",n)},values(){return $o(this,"values",n=>Cn(this,n))}};function $o(n,e,t){const i=Po(n),r=i[e]();return i!==n&&!fn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const dp=Array.prototype;function zn(n,e,t,i,r,s){const a=Po(n),o=a!==n&&!fn(n),l=a[e];if(l!==dp[e]){const f=l.apply(n,s);return o?En(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,Cn(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function nc(n,e,t,i){const r=Po(n),s=r!==n&&!fn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(c,u,f){return o&&(o=!1,c=Cn(n,c)),t.call(this,c,Cn(n,u),f,n)}):t.length>3&&(a=function(c,u,f){return t.call(this,c,u,f,n)}));const l=r[e](a,...i);return o?Cn(n,l):l}function Ko(n,e,t){const i=Ze(n);Dt(i,"iterate",os);const r=i[e](...t);return(r===-1||r===!1)&&Cl(t[0])?(t[0]=Ze(t[0]),i[e](...t)):r}function Hr(n,e,t=[]){ri(),yl();const i=Ze(n)[e].apply(n,t);return bl(),si(),i}const pp=_l("__proto__,__v_isRef,__isVue"),Zf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(On));function mp(n){On(n)||(n=String(n));const e=Ze(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class Jf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Tp:nh:s?th:eh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=De(e);if(!r){let l;if(a&&(l=hp[t]))return l;if(t==="hasOwnProperty")return mp}const o=Reflect.get(e,t,Ut(e)?e:i);if((On(t)?Zf.has(t):pp(t))||(r||Dt(e,"get",t),s))return o;if(Ut(o)){const l=a&&Ml(t)?o:o.value;return r&&et(l)?ja(l):l}return et(o)?r?ja(o):ms(o):o}}class Qf extends Jf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=De(e)&&Ml(t);if(!this._isShallow){const c=oi(s);if(!fn(i)&&!oi(i)&&(s=Ze(s),i=Ze(i)),!a&&Ut(s)&&!Ut(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:Qe(e,t),l=Reflect.set(e,t,i,Ut(e)?e:r);return e===Ze(r)&&(o?Dn(i,s)&&Kn(e,"set",t,i):Kn(e,"add",t,i)),l}deleteProperty(e,t){const i=Qe(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Kn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!On(t)||!Zf.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",De(e)?"length":Yi),Reflect.ownKeys(e)}}class gp extends Jf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _p=new Qf,vp=new gp,xp=new Qf(!0);const qa=n=>n,Rs=n=>Reflect.getPrototypeOf(n);function Mp(n,e,t){return function(...i){const r=this.__v_raw,s=Ze(r),a=br(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?qa:e?Pr:En;return!e&&Dt(s,"iterate",l?Xa:Yi),Mt(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function Cs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Sp(n,e){const t={get(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);n||(Dn(r,o)&&Dt(a,"get",r),Dt(a,"get",o));const{has:l}=Rs(a),c=e?qa:n?Pr:En;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Dt(Ze(r),"iterate",Yi),r.size},has(r){const s=this.__v_raw,a=Ze(s),o=Ze(r);return n||(Dn(r,o)&&Dt(a,"has",r),Dt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Ze(o),c=e?qa:n?Pr:En;return!n&&Dt(l,"iterate",Yi),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Mt(t,n?{add:Cs("add"),set:Cs("set"),delete:Cs("delete"),clear:Cs("clear")}:{add(r){const s=Ze(this),a=Rs(s),o=Ze(r),l=!e&&!fn(r)&&!oi(r)?o:r;return a.has.call(s,l)||Dn(r,l)&&a.has.call(s,r)||Dn(o,l)&&a.has.call(s,o)||(s.add(l),Kn(s,"add",l,l)),this},set(r,s){!e&&!fn(s)&&!oi(s)&&(s=Ze(s));const a=Ze(this),{has:o,get:l}=Rs(a);let c=o.call(a,r);c||(r=Ze(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Dn(s,u)&&Kn(a,"set",r,s):Kn(a,"add",r,s),this},delete(r){const s=Ze(this),{has:a,get:o}=Rs(s);let l=a.call(s,r);l||(r=Ze(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Kn(s,"delete",r,void 0),c},clear(){const r=Ze(this),s=r.size!==0,a=r.clear();return s&&Kn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Mp(r,n,e)}),t}function wl(n,e){const t=Sp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Qe(t,r)&&r in i?t:i,r,s)}const Ep={get:wl(!1,!1)},yp={get:wl(!1,!0)},bp={get:wl(!0,!1)};const eh=new WeakMap,th=new WeakMap,nh=new WeakMap,Tp=new WeakMap;function Ap(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wp(n){return n.__v_skip||!Object.isExtensible(n)?0:Ap(Zd(n))}function ms(n){return oi(n)?n:Rl(n,!1,_p,Ep,eh)}function ih(n){return Rl(n,!1,xp,yp,th)}function ja(n){return Rl(n,!0,vp,bp,nh)}function Rl(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=wp(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function $i(n){return oi(n)?$i(n.__v_raw):!!(n&&n.__v_isReactive)}function oi(n){return!!(n&&n.__v_isReadonly)}function fn(n){return!!(n&&n.__v_isShallow)}function Cl(n){return n?!!n.__v_raw:!1}function Ze(n){const e=n&&n.__v_raw;return e?Ze(e):n}function Rp(n){return!Qe(n,"__v_skip")&&Object.isExtensible(n)&&zf(n,"__v_skip",!0),n}const En=n=>et(n)?ms(n):n,Pr=n=>et(n)?ja(n):n;function Ut(n){return n?n.__v_isRef===!0:!1}function ln(n){return rh(n,!1)}function Cp(n){return rh(n,!0)}function rh(n,e){return Ut(n)?n:new Pp(n,e)}class Pp{constructor(e,t){this.dep=new Al,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ze(e),this._value=t?e:En(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||fn(e)||oi(e);e=i?e:Ze(e),Dn(e,t)&&(this._rawValue=e,this._value=i?e:En(e),this.dep.trigger())}}function Tr(n){return Ut(n)?n.value:n}const Lp={get:(n,e,t)=>e==="__v_raw"?n:Tr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Ut(r)&&!Ut(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function sh(n){return $i(n)?n:new Proxy(n,Lp)}class Dp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Al(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ss-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&at!==this)return Xf(this,!0),!0}get value(){const e=this.dep.track();return Yf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ip(n,e,t=!1){let i,r;return Oe(n)?i=n:(i=n.get,r=n.set),new Dp(i,r,t)}const Ps={},co=new WeakMap;let zi;function Up(n,e=!1,t=zi){if(t){let i=co.get(t);i||co.set(t,i=[]),i.push(n)}}function Np(n,e,t=it){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=b=>r?b:fn(b)||r===!1||r===0?Zn(b,1):Zn(b);let u,f,h,p,v=!1,S=!1;if(Ut(n)?(f=()=>n.value,v=fn(n)):$i(n)?(f=()=>c(n),v=!0):De(n)?(S=!0,v=n.some(b=>$i(b)||fn(b)),f=()=>n.map(b=>{if(Ut(b))return b.value;if($i(b))return c(b);if(Oe(b))return l?l(b,2):b()})):Oe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ri();try{h()}finally{si()}}const b=zi;zi=u;try{return l?l(n,3,[p]):n(p)}finally{zi=b}}:f=Un,e&&r){const b=f,P=r===!0?1/0:r;f=()=>Zn(b(),P)}const m=cp(),d=()=>{u.stop(),m&&m.active&&xl(m.effects,u)};if(s&&e){const b=e;e=(...P)=>{b(...P),d()}}let E=S?new Array(n.length).fill(Ps):Ps;const _=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const P=u.run();if(r||v||(S?P.some((R,w)=>Dn(R,E[w])):Dn(P,E))){h&&h();const R=zi;zi=u;try{const w=[P,E===Ps?void 0:S&&E[0]===Ps?[]:E,p];E=P,l?l(e,3,w):e(...w)}finally{zi=R}}}else u.run()};return o&&o(_),u=new Vf(f),u.scheduler=a?()=>a(_,!1):_,p=b=>Up(b,!1,u),h=u.onStop=()=>{const b=co.get(u);if(b){if(l)l(b,4);else for(const P of b)P();co.delete(u)}},e?i?_(!0):E=u.run():a?a(_.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Zn(n,e=1/0,t){if(e<=0||!et(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Ut(n))Zn(n.value,e,t);else if(De(n))for(let i=0;i<n.length;i++)Zn(n[i],e,t);else if(Nf(n)||br(n))n.forEach(i=>{Zn(i,e,t)});else if(Bf(n)){for(const i in n)Zn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Zn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(n,e,t,i){try{return i?n(...i):n()}catch(r){Lo(r,e,t)}}function yn(n,e,t,i){if(Oe(n)){const r=gs(n,e,t,i);return r&&Of(r)&&r.catch(s=>{Lo(s,e,t)}),r}if(De(n)){const r=[];for(let s=0;s<n.length;s++)r.push(yn(n[s],e,t,i));return r}}function Lo(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||it;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){ri(),gs(s,null,10,[n,l,c]),si();return}}Op(n,t,r,i,a)}function Op(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ht=[];let wn=-1;const Ar=[];let gi=null,vr=0;const oh=Promise.resolve();let uo=null;function ah(n){const e=uo||oh;return n?e.then(this?n.bind(this):n):e}function Fp(n){let e=wn+1,t=Ht.length;for(;e<t;){const i=e+t>>>1,r=Ht[i],s=as(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Pl(n){if(!(n.flags&1)){const e=as(n),t=Ht[Ht.length-1];!t||!(n.flags&2)&&e>=as(t)?Ht.push(n):Ht.splice(Fp(e),0,n),n.flags|=1,lh()}}function lh(){uo||(uo=oh.then(uh))}function Bp(n){De(n)?Ar.push(...n):gi&&n.id===-1?gi.splice(vr+1,0,n):n.flags&1||(Ar.push(n),n.flags|=1),lh()}function ic(n,e,t=wn+1){for(;t<Ht.length;t++){const i=Ht[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ht.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ch(n){if(Ar.length){const e=[...new Set(Ar)].sort((t,i)=>as(t)-as(i));if(Ar.length=0,gi){gi.push(...e);return}for(gi=e,vr=0;vr<gi.length;vr++){const t=gi[vr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}gi=null,vr=0}}const as=n=>n.id==null?n.flags&2?-1:1/0:n.id;function uh(n){try{for(wn=0;wn<Ht.length;wn++){const e=Ht[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<Ht.length;wn++){const e=Ht[wn];e&&(e.flags&=-2)}wn=-1,Ht.length=0,ch(),uo=null,(Ht.length||Ar.length)&&uh()}}let Qt=null,fh=null;function fo(n){const e=Qt;return Qt=n,fh=n&&n.type.__scopeId||null,e}function ei(n,e=Qt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&mo(-1);const s=fo(e);let a;try{a=n(...r)}finally{fo(s),i._d&&mo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function zp(n,e){if(Qt===null)return n;const t=Fo(Qt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=it]=e[r];s&&(Oe(s)&&(s={mounted:s,updated:s}),s.deep&&Zn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Ci(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ri(),yn(l,t,8,[n.el,o,n,e]),si())}}function io(n,e){if(It){let t=It.provides;const i=It.parent&&It.parent.provides;i===t&&(t=It.provides=Object.create(i)),t[n]=e}}function Nn(n,e,t=!1){const i=Wh();if(i||wr){let r=wr?wr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Oe(e)?e.call(i&&i.proxy):e}}const Hp=Symbol.for("v-scx"),Gp=()=>Nn(Hp);function ro(n,e,t){return hh(n,e,t)}function hh(n,e,t=it){const{immediate:i,deep:r,flush:s,once:a}=t,o=Mt({},t),l=e&&i||!e&&s!=="post";let c;if(us){if(s==="sync"){const p=Gp();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Un,p.resume=Un,p.pause=Un,p}}const u=It;o.call=(p,v,S)=>yn(p,u,v,S);let f=!1;s==="post"?o.scheduler=p=>{Wt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,v)=>{v?p():Pl(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Np(n,e,o);return us&&(c?c.push(h):l&&h()),h}function kp(n,e,t){const i=this.proxy,r=_t(n)?n.includes(".")?dh(i,n):()=>i[n]:n.bind(i,i);let s;Oe(e)?s=e:(s=e.handler,t=e);const a=xs(this),o=hh(r,s.bind(i),t);return a(),o}function dh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Vp=Symbol("_vte"),ph=n=>n.__isTeleport,Rn=Symbol("_leaveCb"),Gr=Symbol("_enterCb");function Wp(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _s(()=>{n.isMounted=!0}),vs(()=>{n.isUnmounting=!0}),n}const rn=[Function,Array],mh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rn,onEnter:rn,onAfterEnter:rn,onEnterCancelled:rn,onBeforeLeave:rn,onLeave:rn,onAfterLeave:rn,onLeaveCancelled:rn,onBeforeAppear:rn,onAppear:rn,onAfterAppear:rn,onAppearCancelled:rn},gh=n=>{const e=n.subTree;return e.component?gh(e.component):e},Xp={name:"BaseTransition",props:mh,setup(n,{slots:e}){const t=Wh(),i=Wp();return()=>{const r=e.default&&xh(e.default(),!0);if(!r||!r.length)return;const s=_h(r),a=Ze(n),{mode:o}=a;if(i.isLeaving)return Zo(s);const l=rc(s);if(!l)return Zo(s);let c=Ya(l,a,i,t,f=>c=f);l.type!==Gt&&ls(l,c);let u=t.subTree&&rc(t.subTree);if(u&&u.type!==Gt&&!ki(u,l)&&gh(t).type!==Gt){let f=Ya(u,a,i,t);if(ls(u,f),o==="out-in"&&l.type!==Gt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Zo(s);o==="in-out"&&l.type!==Gt?f.delayLeave=(h,p,v)=>{const S=vh(i,u);S[String(u.key)]=u,h[Rn]=()=>{p(),h[Rn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function _h(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Gt){e=t;break}}return e}const qp=Xp;function vh(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ya(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:v,onLeaveCancelled:S,onBeforeAppear:m,onAppear:d,onAfterAppear:E,onAppearCancelled:_}=e,b=String(n.key),P=vh(t,n),R=(V,M)=>{V&&yn(V,i,9,M)},w=(V,M)=>{const A=M[1];R(V,M),De(V)?V.every(O=>O.length<=1)&&A():V.length<=1&&A()},N={mode:a,persisted:o,beforeEnter(V){let M=l;if(!t.isMounted)if(s)M=m||l;else return;V[Rn]&&V[Rn](!0);const A=P[b];A&&ki(n,A)&&A.el[Rn]&&A.el[Rn](),R(M,[V])},enter(V){if(P[b]===n)return;let M=c,A=u,O=f;if(!t.isMounted)if(s)M=d||c,A=E||u,O=_||f;else return;let K=!1;V[Gr]=ne=>{K||(K=!0,ne?R(O,[V]):R(A,[V]),N.delayedLeave&&N.delayedLeave(),V[Gr]=void 0)};const D=V[Gr].bind(null,!1);M?w(M,[V,D]):D()},leave(V,M){const A=String(n.key);if(V[Gr]&&V[Gr](!0),t.isUnmounting)return M();R(h,[V]);let O=!1;V[Rn]=D=>{O||(O=!0,M(),D?R(S,[V]):R(v,[V]),V[Rn]=void 0,P[A]===n&&delete P[A])};const K=V[Rn].bind(null,!1);P[A]=n,p?w(p,[V,K]):K()},clone(V){const M=Ya(V,e,t,i,r);return r&&r(M),M}};return N}function Zo(n){if(Do(n))return n=yi(n),n.children=null,n}function rc(n){if(!Do(n))return ph(n.type)&&n.children?_h(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Oe(t.default))return t.default()}}function ls(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ls(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function xh(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===mt?(a.patchFlag&128&&r++,i=i.concat(xh(a.children,e,o))):(e||a.type!==Gt)&&i.push(o!=null?yi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Mh(n,e){return Oe(n)?Mt({name:n.name},e,{setup:n}):n}function Sh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function sc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const ho=new WeakMap;function es(n,e,t,i,r=!1){if(De(n)){n.forEach((S,m)=>es(S,e&&(De(e)?e[m]:e),t,i,r));return}if(ts(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&es(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Fo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===it?o.refs={}:o.refs,f=o.setupState,h=Ze(f),p=f===it?Uf:S=>sc(u,S)?!1:Qe(h,S),v=(S,m)=>!(m&&sc(u,m));if(c!=null&&c!==l){if(oc(e),_t(c))u[c]=null,p(c)&&(f[c]=null);else if(Ut(c)){const S=e;v(c,S.k)&&(c.value=null),S.k&&(u[S.k]=null)}}if(Oe(l))gs(l,o,12,[a,u]);else{const S=_t(l),m=Ut(l);if(S||m){const d=()=>{if(n.f){const E=S?p(l)?f[l]:u[l]:v()||!n.k?l.value:u[n.k];if(r)De(E)&&xl(E,s);else if(De(E))E.includes(s)||E.push(s);else if(S)u[l]=[s],p(l)&&(f[l]=u[l]);else{const _=[s];v(l,n.k)&&(l.value=_),n.k&&(u[n.k]=_)}}else S?(u[l]=a,p(l)&&(f[l]=a)):m&&(v(l,n.k)&&(l.value=a),n.k&&(u[n.k]=a))};if(a){const E=()=>{d(),ho.delete(n)};E.id=-1,ho.set(n,E),Wt(E,t)}else oc(n),d()}}}function oc(n){const e=ho.get(n);e&&(e.flags|=8,ho.delete(n))}Co().requestIdleCallback;Co().cancelIdleCallback;const ts=n=>!!n.type.__asyncLoader,Do=n=>n.type.__isKeepAlive;function jp(n,e){Eh(n,"a",e)}function Yp(n,e){Eh(n,"da",e)}function Eh(n,e,t=It){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Io(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Do(r.parent.vnode)&&$p(i,e,t,r),r=r.parent}}function $p(n,e,t,i){const r=Io(e,n,i,!0);yh(()=>{xl(i[e],r)},t)}function Io(n,e,t=It,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{ri();const o=xs(t),l=yn(e,t,n,a);return o(),si(),l});return i?r.unshift(s):r.push(s),s}}const ai=n=>(e,t=It)=>{(!us||n==="sp")&&Io(n,(...i)=>e(...i),t)},Kp=ai("bm"),_s=ai("m"),Zp=ai("bu"),Jp=ai("u"),vs=ai("bum"),yh=ai("um"),Qp=ai("sp"),em=ai("rtg"),tm=ai("rtc");function nm(n,e=It){Io("ec",n,e)}const im="components";function Uo(n,e){return sm(im,n,!0,e)||n}const rm=Symbol.for("v-ndc");function sm(n,e,t=!0,i=!1){const r=Qt||It;if(r){const s=r.type;{const o=Vm(s,!1);if(o&&(o===e||o===kt(e)||o===Ro(kt(e))))return s}const a=ac(r[n]||s[n],e)||ac(r.appContext[n],e);return!a&&i?s:a}}function ac(n,e){return n&&(n[e]||n[kt(e)]||n[Ro(kt(e))])}function on(n,e,t,i){let r;const s=t,a=De(n);if(a||_t(n)){const o=a&&$i(n);let l=!1,c=!1;o&&(l=!fn(n),c=oi(n),n=Po(n)),r=new Array(n.length);for(let u=0,f=n.length;u<f;u++)r[u]=e(l?c?Pr(En(n[u])):En(n[u]):n[u],u,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(et(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s)}}else r=[];return r}const $a=n=>n?Xh(n)?Fo(n):$a(n.parent):null,ns=Mt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$a(n.parent),$root:n=>$a(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Th(n),$forceUpdate:n=>n.f||(n.f=()=>{Pl(n.update)}),$nextTick:n=>n.n||(n.n=ah.bind(n.proxy)),$watch:n=>kp.bind(n)}),Jo=(n,e)=>n!==it&&!n.__isScriptSetup&&Qe(n,e),om={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Jo(i,e))return a[e]=1,i[e];if(r!==it&&Qe(r,e))return a[e]=2,r[e];if(Qe(s,e))return a[e]=3,s[e];if(t!==it&&Qe(t,e))return a[e]=4,t[e];Ka&&(a[e]=0)}}const c=ns[e];let u,f;if(c)return e==="$attrs"&&Dt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==it&&Qe(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,Qe(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Jo(r,e)?(r[e]=t,!0):i!==it&&Qe(i,e)?(i[e]=t,!0):Qe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==it&&o[0]!=="$"&&Qe(n,o)||Jo(e,o)||Qe(s,o)||Qe(i,o)||Qe(ns,o)||Qe(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Qe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function lc(n){return De(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ka=!0;function am(n){const e=Th(n),t=n.proxy,i=n.ctx;Ka=!1,e.beforeCreate&&cc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:v,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:E,destroyed:_,unmounted:b,render:P,renderTracked:R,renderTriggered:w,errorCaptured:N,serverPrefetch:V,expose:M,inheritAttrs:A,components:O,directives:K,filters:D}=e;if(c&&lm(c,i,null),a)for(const ee in a){const X=a[ee];Oe(X)&&(i[ee]=X.bind(t))}if(r){const ee=r.call(t,t);et(ee)&&(n.data=ms(ee))}if(Ka=!0,s)for(const ee in s){const X=s[ee],ae=Oe(X)?X.bind(t,t):Oe(X.get)?X.get.bind(t,t):Un,ce=!Oe(X)&&Oe(X.set)?X.set.bind(t):Un,pe=Tt({get:ae,set:ce});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>pe.value,set:Se=>pe.value=Se})}if(o)for(const ee in o)bh(o[ee],i,t,ee);if(l){const ee=Oe(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(X=>{io(X,ee[X])})}u&&cc(u,n,"c");function W(ee,X){De(X)?X.forEach(ae=>ee(ae.bind(t))):X&&ee(X.bind(t))}if(W(Kp,f),W(_s,h),W(Zp,p),W(Jp,v),W(jp,S),W(Yp,m),W(nm,N),W(tm,R),W(em,w),W(vs,E),W(yh,b),W(Qp,V),De(M))if(M.length){const ee=n.exposed||(n.exposed={});M.forEach(X=>{Object.defineProperty(ee,X,{get:()=>t[X],set:ae=>t[X]=ae,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===Un&&(n.render=P),A!=null&&(n.inheritAttrs=A),O&&(n.components=O),K&&(n.directives=K),V&&Sh(n)}function lm(n,e,t=Un){De(n)&&(n=Za(n));for(const i in n){const r=n[i];let s;et(r)?"default"in r?s=Nn(r.from||i,r.default,!0):s=Nn(r.from||i):s=Nn(r),Ut(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function cc(n,e,t){yn(De(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function bh(n,e,t,i){let r=i.includes(".")?dh(t,i):()=>t[i];if(_t(n)){const s=e[n];Oe(s)&&ro(r,s)}else if(Oe(n))ro(r,n.bind(t));else if(et(n))if(De(n))n.forEach(s=>bh(s,e,t,i));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&ro(r,s,n)}}function Th(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>po(l,c,a,!0)),po(l,e,a)),et(e)&&s.set(e,l),l}function po(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&po(n,s,t,!0),r&&r.forEach(a=>po(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=cm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const cm={data:uc,props:fc,emits:fc,methods:Kr,computed:Kr,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Kr,directives:Kr,watch:fm,provide:uc,inject:um};function uc(n,e){return e?n?function(){return Mt(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function um(n,e){return Kr(Za(n),Za(e))}function Za(n){if(De(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function Kr(n,e){return n?Mt(Object.create(null),n,e):e}function fc(n,e){return n?De(n)&&De(e)?[...new Set([...n,...e])]:Mt(Object.create(null),lc(n),lc(e??{})):e}function fm(n,e){if(!n)return e;if(!e)return n;const t=Mt(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function Ah(){return{app:null,config:{isNativeTag:Uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hm=0;function dm(n,e){return function(i,r=null){Oe(i)||(i=Mt({},i)),r!=null&&!et(r)&&(r=null);const s=Ah(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:hm++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Xm,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Oe(u.install)?(a.add(u),u.install(c,...f)):Oe(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||nt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Fo(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(yn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=wr;wr=c;try{return u()}finally{wr=f}}};return c}}let wr=null;const pm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${kt(e)}Modifiers`]||n[`${Qi(e)}Modifiers`];function mm(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||it;let r=t;const s=e.startsWith("update:"),a=s&&pm(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>_t(u)?u.trim():u)),a.number&&(r=t.map(Sl)));let o,l=i[o=qo(e)]||i[o=qo(kt(e))];!l&&s&&(l=i[o=qo(Qi(e))]),l&&yn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,yn(c,n,6,r)}}const gm=new WeakMap;function wh(n,e,t=!1){const i=t?gm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Oe(n)){const l=c=>{const u=wh(c,e,!0);u&&(o=!0,Mt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(et(n)&&i.set(n,null),null):(De(s)?s.forEach(l=>a[l]=null):Mt(a,s),et(n)&&i.set(n,a),a)}function No(n,e){return!n||!Ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),Qe(n,e[0].toLowerCase()+e.slice(1))||Qe(n,Qi(e))||Qe(n,e))}function hc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:v,inheritAttrs:S}=n,m=fo(n);let d,E;try{if(t.shapeFlag&4){const b=r||i,P=b;d=Pn(c.call(P,b,u,f,p,h,v)),E=o}else{const b=e;d=Pn(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),E=e.props?o:_m(o)}}catch(b){is.length=0,Lo(b,n,1),d=nt(Gt)}let _=d;if(E&&S!==!1){const b=Object.keys(E),{shapeFlag:P}=_;b.length&&P&7&&(s&&b.some(vl)&&(E=vm(E,s)),_=yi(_,E,!1,!0))}return t.dirs&&(_=yi(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&ls(_,t.transition),d=_,fo(m),d}const _m=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ao(t))&&((e||(e={}))[t]=n[t]);return e},vm=(n,e)=>{const t={};for(const i in n)(!vl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function xm(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?dc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Rh(a,i,h)&&!No(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?dc(i,a,c):!0:!!a;return!1}function dc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Rh(e,n,s)&&!No(t,s))return!0}return!1}function Rh(n,e,t){const i=n[t],r=e[t];return t==="style"&&et(i)&&et(r)?!El(i,r):i!==r}function Mm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Ch={},Ph=()=>Object.create(Ch),Lh=n=>Object.getPrototypeOf(n)===Ch;function Sm(n,e,t,i=!1){const r={},s=Ph();n.propsDefaults=Object.create(null),Dh(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:ih(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Em(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Ze(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(No(n.emitsOptions,h))continue;const p=e[h];if(l)if(Qe(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const v=kt(h);r[v]=Ja(l,o,v,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Dh(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Qe(e,f)&&((u=Qi(f))===f||!Qe(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ja(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Qe(e,f))&&(delete s[f],c=!0)}c&&Kn(n.attrs,"set","")}function Dh(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Zr(l))continue;const c=e[l];let u;r&&Qe(r,u=kt(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:No(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Ze(t),c=o||it;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ja(r,l,f,c[f],n,!Qe(c,f))}}return a}function Ja(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Qe(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Oe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=xs(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Qi(t))&&(i=!0))}return i}const ym=new WeakMap;function Ih(n,e,t=!1){const i=t?ym:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Oe(n)){const u=f=>{l=!0;const[h,p]=Ih(f,e,!0);Mt(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return et(n)&&i.set(n,yr),yr;if(De(s))for(let u=0;u<s.length;u++){const f=kt(s[u]);pc(f)&&(a[f]=it)}else if(s)for(const u in s){const f=kt(u);if(pc(f)){const h=s[u],p=a[f]=De(h)||Oe(h)?{type:h}:Mt({},h),v=p.type;let S=!1,m=!0;if(De(v))for(let d=0;d<v.length;++d){const E=v[d],_=Oe(E)&&E.name;if(_==="Boolean"){S=!0;break}else _==="String"&&(m=!1)}else S=Oe(v)&&v.name==="Boolean";p[0]=S,p[1]=m,(S||Qe(p,"default"))&&o.push(f)}}const c=[a,o];return et(n)&&i.set(n,c),c}function pc(n){return n[0]!=="$"&&!Zr(n)}const Ll=n=>n==="_"||n==="_ctx"||n==="$stable",Dl=n=>De(n)?n.map(Pn):[Pn(n)],bm=(n,e,t)=>{if(e._n)return e;const i=ei((...r)=>Dl(e(...r)),t);return i._c=!1,i},Uh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Ll(r))continue;const s=n[r];if(Oe(s))e[r]=bm(r,s,i);else if(s!=null){const a=Dl(s);e[r]=()=>a}}},Nh=(n,e)=>{const t=Dl(e);n.slots.default=()=>t},Oh=(n,e,t)=>{for(const i in e)(t||!Ll(i))&&(n[i]=e[i])},Tm=(n,e,t)=>{const i=n.slots=Ph();if(n.vnode.shapeFlag&32){const r=e._;r?(Oh(i,e,t),t&&zf(i,"_",r,!0)):Uh(e,i)}else e&&Nh(n,e)},Am=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=it;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Oh(r,e,t):(s=!e.$stable,Uh(e,r)),a=e}else e&&(Nh(n,e),a={default:1});if(s)for(const o in r)!Ll(o)&&a[o]==null&&delete r[o]},Wt=Lm;function wm(n){return Rm(n)}function Rm(n,e){const t=Co();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Un,insertStaticContent:v}=n,S=(g,C,L,G=null,k=null,q=null,le=void 0,oe=null,ue=!!C.dynamicChildren)=>{if(g===C)return;g&&!ki(g,C)&&(G=H(g),Se(g,k,q,!0),g=null),C.patchFlag===-2&&(ue=!1,C.dynamicChildren=null);const{type:y,ref:x,shapeFlag:I}=C;switch(y){case Oo:m(g,C,L,G);break;case Gt:d(g,C,L,G);break;case so:g==null&&E(C,L,G,le);break;case mt:O(g,C,L,G,k,q,le,oe,ue);break;default:I&1?P(g,C,L,G,k,q,le,oe,ue):I&6?K(g,C,L,G,k,q,le,oe,ue):(I&64||I&128)&&y.process(g,C,L,G,k,q,le,oe,ue,ge)}x!=null&&k?es(x,g&&g.ref,q,C||g,!C):x==null&&g&&g.ref!=null&&es(g.ref,null,q,g,!0)},m=(g,C,L,G)=>{if(g==null)i(C.el=o(C.children),L,G);else{const k=C.el=g.el;C.children!==g.children&&c(k,C.children)}},d=(g,C,L,G)=>{g==null?i(C.el=l(C.children||""),L,G):C.el=g.el},E=(g,C,L,G)=>{[g.el,g.anchor]=v(g.children,C,L,G,g.el,g.anchor)},_=({el:g,anchor:C},L,G)=>{let k;for(;g&&g!==C;)k=h(g),i(g,L,G),g=k;i(C,L,G)},b=({el:g,anchor:C})=>{let L;for(;g&&g!==C;)L=h(g),r(g),g=L;r(C)},P=(g,C,L,G,k,q,le,oe,ue)=>{if(C.type==="svg"?le="svg":C.type==="math"&&(le="mathml"),g==null)R(C,L,G,k,q,le,oe,ue);else{const y=g.el&&g.el._isVueCE?g.el:null;try{y&&y._beginPatch(),V(g,C,k,q,le,oe,ue)}finally{y&&y._endPatch()}}},R=(g,C,L,G,k,q,le,oe)=>{let ue,y;const{props:x,shapeFlag:I,transition:F,dirs:Q}=g;if(ue=g.el=a(g.type,q,x&&x.is,x),I&8?u(ue,g.children):I&16&&N(g.children,ue,null,G,k,Qo(g,q),le,oe),Q&&Ci(g,null,G,"created"),w(ue,g,g.scopeId,le,G),x){for(const Te in x)Te!=="value"&&!Zr(Te)&&s(ue,Te,null,x[Te],q,G);"value"in x&&s(ue,"value",null,x.value,q),(y=x.onVnodeBeforeMount)&&An(y,G,g)}Q&&Ci(g,null,G,"beforeMount");const ie=Cm(k,F);ie&&F.beforeEnter(ue),i(ue,C,L),((y=x&&x.onVnodeMounted)||ie||Q)&&Wt(()=>{y&&An(y,G,g),ie&&F.enter(ue),Q&&Ci(g,null,G,"mounted")},k)},w=(g,C,L,G,k)=>{if(L&&p(g,L),G)for(let q=0;q<G.length;q++)p(g,G[q]);if(k){let q=k.subTree;if(C===q||Hh(q.type)&&(q.ssContent===C||q.ssFallback===C)){const le=k.vnode;w(g,le,le.scopeId,le.slotScopeIds,k.parent)}}},N=(g,C,L,G,k,q,le,oe,ue=0)=>{for(let y=ue;y<g.length;y++){const x=g[y]=oe?$n(g[y]):Pn(g[y]);S(null,x,C,L,G,k,q,le,oe)}},V=(g,C,L,G,k,q,le)=>{const oe=C.el=g.el;let{patchFlag:ue,dynamicChildren:y,dirs:x}=C;ue|=g.patchFlag&16;const I=g.props||it,F=C.props||it;let Q;if(L&&Pi(L,!1),(Q=F.onVnodeBeforeUpdate)&&An(Q,L,C,g),x&&Ci(C,g,L,"beforeUpdate"),L&&Pi(L,!0),(I.innerHTML&&F.innerHTML==null||I.textContent&&F.textContent==null)&&u(oe,""),y?M(g.dynamicChildren,y,oe,L,G,Qo(C,k),q):le||X(g,C,oe,null,L,G,Qo(C,k),q,!1),ue>0){if(ue&16)A(oe,I,F,L,k);else if(ue&2&&I.class!==F.class&&s(oe,"class",null,F.class,k),ue&4&&s(oe,"style",I.style,F.style,k),ue&8){const ie=C.dynamicProps;for(let Te=0;Te<ie.length;Te++){const Ee=ie[Te],de=I[Ee],me=F[Ee];(me!==de||Ee==="value")&&s(oe,Ee,de,me,k,L)}}ue&1&&g.children!==C.children&&u(oe,C.children)}else!le&&y==null&&A(oe,I,F,L,k);((Q=F.onVnodeUpdated)||x)&&Wt(()=>{Q&&An(Q,L,C,g),x&&Ci(C,g,L,"updated")},G)},M=(g,C,L,G,k,q,le)=>{for(let oe=0;oe<C.length;oe++){const ue=g[oe],y=C[oe],x=ue.el&&(ue.type===mt||!ki(ue,y)||ue.shapeFlag&198)?f(ue.el):L;S(ue,y,x,null,G,k,q,le,!0)}},A=(g,C,L,G,k)=>{if(C!==L){if(C!==it)for(const q in C)!Zr(q)&&!(q in L)&&s(g,q,C[q],null,k,G);for(const q in L){if(Zr(q))continue;const le=L[q],oe=C[q];le!==oe&&q!=="value"&&s(g,q,oe,le,k,G)}"value"in L&&s(g,"value",C.value,L.value,k)}},O=(g,C,L,G,k,q,le,oe,ue)=>{const y=C.el=g?g.el:o(""),x=C.anchor=g?g.anchor:o("");let{patchFlag:I,dynamicChildren:F,slotScopeIds:Q}=C;Q&&(oe=oe?oe.concat(Q):Q),g==null?(i(y,L,G),i(x,L,G),N(C.children||[],L,x,k,q,le,oe,ue)):I>0&&I&64&&F&&g.dynamicChildren&&g.dynamicChildren.length===F.length?(M(g.dynamicChildren,F,L,k,q,le,oe),(C.key!=null||k&&C===k.subTree)&&Fh(g,C,!0)):X(g,C,L,x,k,q,le,oe,ue)},K=(g,C,L,G,k,q,le,oe,ue)=>{C.slotScopeIds=oe,g==null?C.shapeFlag&512?k.ctx.activate(C,L,G,le,ue):D(C,L,G,k,q,le,ue):ne(g,C,ue)},D=(g,C,L,G,k,q,le)=>{const oe=g.component=Bm(g,G,k);if(Do(g)&&(oe.ctx.renderer=ge),zm(oe,!1,le),oe.asyncDep){if(k&&k.registerDep(oe,W,le),!g.el){const ue=oe.subTree=nt(Gt);d(null,ue,C,L),g.placeholder=ue.el}}else W(oe,g,C,L,k,q,le)},ne=(g,C,L)=>{const G=C.component=g.component;if(xm(g,C,L))if(G.asyncDep&&!G.asyncResolved){ee(G,C,L);return}else G.next=C,G.update();else C.el=g.el,G.vnode=C},W=(g,C,L,G,k,q,le)=>{const oe=()=>{if(g.isMounted){let{next:I,bu:F,u:Q,parent:ie,vnode:Te}=g;{const he=Bh(g);if(he){I&&(I.el=Te.el,ee(g,I,le)),he.asyncDep.then(()=>{Wt(()=>{g.isUnmounted||y()},k)});return}}let Ee=I,de;Pi(g,!1),I?(I.el=Te.el,ee(g,I,le)):I=Te,F&&no(F),(de=I.props&&I.props.onVnodeBeforeUpdate)&&An(de,ie,I,Te),Pi(g,!0);const me=hc(g),Le=g.subTree;g.subTree=me,S(Le,me,f(Le.el),H(Le),g,k,q),I.el=me.el,Ee===null&&Mm(g,me.el),Q&&Wt(Q,k),(de=I.props&&I.props.onVnodeUpdated)&&Wt(()=>An(de,ie,I,Te),k)}else{let I;const{el:F,props:Q}=C,{bm:ie,m:Te,parent:Ee,root:de,type:me}=g,Le=ts(C);Pi(g,!1),ie&&no(ie),!Le&&(I=Q&&Q.onVnodeBeforeMount)&&An(I,Ee,C),Pi(g,!0);{de.ce&&de.ce._hasShadowRoot()&&de.ce._injectChildStyle(me,g.parent?g.parent.type:void 0);const he=g.subTree=hc(g);S(null,he,L,G,g,k,q),C.el=he.el}if(Te&&Wt(Te,k),!Le&&(I=Q&&Q.onVnodeMounted)){const he=C;Wt(()=>An(I,Ee,he),k)}(C.shapeFlag&256||Ee&&ts(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&Wt(g.a,k),g.isMounted=!0,C=L=G=null}};g.scope.on();const ue=g.effect=new Vf(oe);g.scope.off();const y=g.update=ue.run.bind(ue),x=g.job=ue.runIfDirty.bind(ue);x.i=g,x.id=g.uid,ue.scheduler=()=>Pl(x),Pi(g,!0),y()},ee=(g,C,L)=>{C.component=g;const G=g.vnode.props;g.vnode=C,g.next=null,Em(g,C.props,G,L),Am(g,C.children,L),ri(),ic(g),si()},X=(g,C,L,G,k,q,le,oe,ue=!1)=>{const y=g&&g.children,x=g?g.shapeFlag:0,I=C.children,{patchFlag:F,shapeFlag:Q}=C;if(F>0){if(F&128){ce(y,I,L,G,k,q,le,oe,ue);return}else if(F&256){ae(y,I,L,G,k,q,le,oe,ue);return}}Q&8?(x&16&&Me(y,k,q),I!==y&&u(L,I)):x&16?Q&16?ce(y,I,L,G,k,q,le,oe,ue):Me(y,k,q,!0):(x&8&&u(L,""),Q&16&&N(I,L,G,k,q,le,oe,ue))},ae=(g,C,L,G,k,q,le,oe,ue)=>{g=g||yr,C=C||yr;const y=g.length,x=C.length,I=Math.min(y,x);let F;for(F=0;F<I;F++){const Q=C[F]=ue?$n(C[F]):Pn(C[F]);S(g[F],Q,L,null,k,q,le,oe,ue)}y>x?Me(g,k,q,!0,!1,I):N(C,L,G,k,q,le,oe,ue,I)},ce=(g,C,L,G,k,q,le,oe,ue)=>{let y=0;const x=C.length;let I=g.length-1,F=x-1;for(;y<=I&&y<=F;){const Q=g[y],ie=C[y]=ue?$n(C[y]):Pn(C[y]);if(ki(Q,ie))S(Q,ie,L,null,k,q,le,oe,ue);else break;y++}for(;y<=I&&y<=F;){const Q=g[I],ie=C[F]=ue?$n(C[F]):Pn(C[F]);if(ki(Q,ie))S(Q,ie,L,null,k,q,le,oe,ue);else break;I--,F--}if(y>I){if(y<=F){const Q=F+1,ie=Q<x?C[Q].el:G;for(;y<=F;)S(null,C[y]=ue?$n(C[y]):Pn(C[y]),L,ie,k,q,le,oe,ue),y++}}else if(y>F)for(;y<=I;)Se(g[y],k,q,!0),y++;else{const Q=y,ie=y,Te=new Map;for(y=ie;y<=F;y++){const Re=C[y]=ue?$n(C[y]):Pn(C[y]);Re.key!=null&&Te.set(Re.key,y)}let Ee,de=0;const me=F-ie+1;let Le=!1,he=0;const rt=new Array(me);for(y=0;y<me;y++)rt[y]=0;for(y=Q;y<=I;y++){const Re=g[y];if(de>=me){Se(Re,k,q,!0);continue}let Ae;if(Re.key!=null)Ae=Te.get(Re.key);else for(Ee=ie;Ee<=F;Ee++)if(rt[Ee-ie]===0&&ki(Re,C[Ee])){Ae=Ee;break}Ae===void 0?Se(Re,k,q,!0):(rt[Ae-ie]=y+1,Ae>=he?he=Ae:Le=!0,S(Re,C[Ae],L,null,k,q,le,oe,ue),de++)}const He=Le?Pm(rt):yr;for(Ee=He.length-1,y=me-1;y>=0;y--){const Re=ie+y,Ae=C[Re],Ce=C[Re+1],qe=Re+1<x?Ce.el||zh(Ce):G;rt[y]===0?S(null,Ae,L,qe,k,q,le,oe,ue):Le&&(Ee<0||y!==He[Ee]?pe(Ae,L,qe,2):Ee--)}}},pe=(g,C,L,G,k=null)=>{const{el:q,type:le,transition:oe,children:ue,shapeFlag:y}=g;if(y&6){pe(g.component.subTree,C,L,G);return}if(y&128){g.suspense.move(C,L,G);return}if(y&64){le.move(g,C,L,ge);return}if(le===mt){i(q,C,L);for(let I=0;I<ue.length;I++)pe(ue[I],C,L,G);i(g.anchor,C,L);return}if(le===so){_(g,C,L);return}if(G!==2&&y&1&&oe)if(G===0)oe.beforeEnter(q),i(q,C,L),Wt(()=>oe.enter(q),k);else{const{leave:I,delayLeave:F,afterLeave:Q}=oe,ie=()=>{g.ctx.isUnmounted?r(q):i(q,C,L)},Te=()=>{q._isLeaving&&q[Rn](!0),I(q,()=>{ie(),Q&&Q()})};F?F(q,ie,Te):Te()}else i(q,C,L)},Se=(g,C,L,G=!1,k=!1)=>{const{type:q,props:le,ref:oe,children:ue,dynamicChildren:y,shapeFlag:x,patchFlag:I,dirs:F,cacheIndex:Q}=g;if(I===-2&&(k=!1),oe!=null&&(ri(),es(oe,null,L,g,!0),si()),Q!=null&&(C.renderCache[Q]=void 0),x&256){C.ctx.deactivate(g);return}const ie=x&1&&F,Te=!ts(g);let Ee;if(Te&&(Ee=le&&le.onVnodeBeforeUnmount)&&An(Ee,C,g),x&6)fe(g.component,L,G);else{if(x&128){g.suspense.unmount(L,G);return}ie&&Ci(g,null,C,"beforeUnmount"),x&64?g.type.remove(g,C,L,ge,G):y&&!y.hasOnce&&(q!==mt||I>0&&I&64)?Me(y,C,L,!1,!0):(q===mt&&I&384||!k&&x&16)&&Me(ue,C,L),G&&Ue(g)}(Te&&(Ee=le&&le.onVnodeUnmounted)||ie)&&Wt(()=>{Ee&&An(Ee,C,g),ie&&Ci(g,null,C,"unmounted")},L)},Ue=g=>{const{type:C,el:L,anchor:G,transition:k}=g;if(C===mt){Z(L,G);return}if(C===so){b(g);return}const q=()=>{r(L),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(g.shapeFlag&1&&k&&!k.persisted){const{leave:le,delayLeave:oe}=k,ue=()=>le(L,q);oe?oe(g.el,q,ue):ue()}else q()},Z=(g,C)=>{let L;for(;g!==C;)L=h(g),r(g),g=L;r(C)},fe=(g,C,L)=>{const{bum:G,scope:k,job:q,subTree:le,um:oe,m:ue,a:y}=g;mc(ue),mc(y),G&&no(G),k.stop(),q&&(q.flags|=8,Se(le,g,C,L)),oe&&Wt(oe,C),Wt(()=>{g.isUnmounted=!0},C)},Me=(g,C,L,G=!1,k=!1,q=0)=>{for(let le=q;le<g.length;le++)Se(g[le],C,L,G,k)},H=g=>{if(g.shapeFlag&6)return H(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const C=h(g.anchor||g.el),L=C&&C[Vp];return L?h(L):C};let se=!1;const te=(g,C,L)=>{let G;g==null?C._vnode&&(Se(C._vnode,null,null,!0),G=C._vnode.component):S(C._vnode||null,g,C,null,null,null,L),C._vnode=g,se||(se=!0,ic(G),ch(),se=!1)},ge={p:S,um:Se,m:pe,r:Ue,mt:D,mc:N,pc:X,pbc:M,n:H,o:n};return{render:te,hydrate:void 0,createApp:dm(te)}}function Qo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Cm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Fh(n,e,t=!1){const i=n.children,r=e.children;if(De(i)&&De(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=$n(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Fh(a,o)),o.type===Oo&&(o.patchFlag===-1&&(o=r[s]=$n(o)),o.el=a.el),o.type===Gt&&!o.el&&(o.el=a.el)}}function Pm(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Bh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Bh(e)}function mc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function zh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?zh(e.subTree):null}const Hh=n=>n.__isSuspense;function Lm(n,e){e&&e.pendingBranch?De(n)?e.effects.push(...n):e.effects.push(n):Bp(n)}const mt=Symbol.for("v-fgt"),Oo=Symbol.for("v-txt"),Gt=Symbol.for("v-cmt"),so=Symbol.for("v-stc"),is=[];let en=null;function Xe(n=!1){is.push(en=n?null:[])}function Dm(){is.pop(),en=is[is.length-1]||null}let cs=1;function mo(n,e=!1){cs+=n,n<0&&en&&e&&(en.hasOnce=!0)}function Gh(n){return n.dynamicChildren=cs>0?en||yr:null,Dm(),cs>0&&en&&en.push(n),n}function $e(n,e,t,i,r,s){return Gh(re(n,e,t,i,r,s,!0))}function Il(n,e,t,i,r){return Gh(nt(n,e,t,i,r,!0))}function go(n){return n?n.__v_isVNode===!0:!1}function ki(n,e){return n.type===e.type&&n.key===e.key}const kh=({key:n})=>n??null,oo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?_t(n)||Ut(n)||Oe(n)?{i:Qt,r:n,k:e,f:!!t}:n:null);function re(n,e=null,t=null,i=0,r=null,s=n===mt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&kh(e),ref:e&&oo(e),scopeId:fh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qt};return o?(Ul(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=_t(t)?8:16),cs>0&&!a&&en&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&en.push(l),l}const nt=Im;function Im(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===rm)&&(n=Gt),go(n)){const o=yi(n,e,!0);return t&&Ul(o,t),cs>0&&!s&&en&&(o.shapeFlag&6?en[en.indexOf(n)]=o:en.push(o)),o.patchFlag=-2,o}if(Wm(n)&&(n=n.__vccOpts),e){e=Um(e);let{class:o,style:l}=e;o&&!_t(o)&&(e.class=ni(o)),et(l)&&(Cl(l)&&!De(l)&&(l=Mt({},l)),e.style=un(l))}const a=_t(n)?1:Hh(n)?128:ph(n)?64:et(n)?4:Oe(n)?2:0;return re(n,e,t,i,r,a,s,!0)}function Um(n){return n?Cl(n)||Lh(n)?Mt({},n):n:null}function yi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?Nm(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&kh(c),ref:e&&e.ref?t&&s?De(s)?s.concat(oo(e)):[s,oo(e)]:oo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==mt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&yi(n.ssContent),ssFallback:n.ssFallback&&yi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ls(u,l.clone(u)),u}function ii(n=" ",e=0){return nt(Oo,null,n,e)}function Vh(n,e){const t=nt(so,null,n);return t.staticCount=e,t}function Xi(n="",e=!1){return e?(Xe(),Il(Gt,null,n)):nt(Gt,null,n)}function Pn(n){return n==null||typeof n=="boolean"?nt(Gt):De(n)?nt(mt,null,n.slice()):go(n)?$n(n):nt(Oo,null,String(n))}function $n(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:yi(n)}function Ul(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ul(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Lh(e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Qt},t=32):(e=String(e),i&64?(t=16,e=[ii(e)]):t=8);n.children=e,n.shapeFlag|=t}function Nm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ni([e.class,i.class]));else if(r==="style")e.style=un([e.style,i.style]);else if(Ao(r)){const s=e[r],a=i[r];a&&s!==a&&!(De(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function An(n,e,t,i=null){yn(n,e,7,[t,i])}const Om=Ah();let Fm=0;function Bm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Om,s={uid:Fm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ih(i,r),emitsOptions:wh(i,r),emit:null,emitted:null,propsDefaults:it,inheritAttrs:i.inheritAttrs,ctx:it,data:it,props:it,attrs:it,slots:it,refs:it,setupState:it,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=mm.bind(null,s),n.ce&&n.ce(s),s}let It=null;const Wh=()=>It||Qt;let _o,Qa;{const n=Co(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};_o=e("__VUE_INSTANCE_SETTERS__",t=>It=t),Qa=e("__VUE_SSR_SETTERS__",t=>us=t)}const xs=n=>{const e=It;return _o(n),n.scope.on(),()=>{n.scope.off(),_o(e)}},gc=()=>{It&&It.scope.off(),_o(null)};function Xh(n){return n.vnode.shapeFlag&4}let us=!1;function zm(n,e=!1,t=!1){e&&Qa(e);const{props:i,children:r}=n.vnode,s=Xh(n);Sm(n,i,s,e),Tm(n,r,t||e);const a=s?Hm(n,e):void 0;return e&&Qa(!1),a}function Hm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,om);const{setup:i}=t;if(i){ri();const r=n.setupContext=i.length>1?km(n):null,s=xs(n),a=gs(i,n,0,[n.props,r]),o=Of(a);if(si(),s(),(o||n.sp)&&!ts(n)&&Sh(n),o){if(a.then(gc,gc),e)return a.then(l=>{_c(n,l)}).catch(l=>{Lo(l,n,0)});n.asyncDep=a}else _c(n,a)}else qh(n)}function _c(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=sh(e)),qh(n)}function qh(n,e,t){const i=n.type;n.render||(n.render=i.render||Un);{const r=xs(n);ri();try{am(n)}finally{si(),r()}}}const Gm={get(n,e){return Dt(n,"get",""),n[e]}};function km(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Gm),slots:n.slots,emit:n.emit,expose:e}}function Fo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(sh(Rp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ns)return ns[t](n)},has(e,t){return t in e||t in ns}})):n.proxy}function Vm(n,e=!0){return Oe(n)?n.displayName||n.name:n.name||e&&n.__name}function Wm(n){return Oe(n)&&"__vccOpts"in n}const Tt=(n,e)=>Ip(n,e,us);function Nl(n,e,t){try{mo(-1);const i=arguments.length;return i===2?et(e)&&!De(e)?go(e)?nt(n,null,[e]):nt(n,e):nt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&go(t)&&(t=[t]),nt(n,e,t))}finally{mo(1)}}const Xm="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let el;const vc=typeof window<"u"&&window.trustedTypes;if(vc)try{el=vc.createPolicy("vue",{createHTML:n=>n})}catch{}const jh=el?n=>el.createHTML(n):n=>n,qm="http://www.w3.org/2000/svg",jm="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,xc=Yn&&Yn.createElement("template"),Ym={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Yn.createElementNS(qm,n):e==="mathml"?Yn.createElementNS(jm,n):t?Yn.createElement(n,{is:t}):Yn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{xc.innerHTML=jh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=xc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},li="transition",kr="animation",fs=Symbol("_vtc"),Yh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$m=Mt({},mh,Yh),Km=n=>(n.displayName="Transition",n.props=$m,n),Zm=Km((n,{slots:e})=>Nl(qp,Jm(n),e)),Li=(n,e=[])=>{De(n)?n.forEach(t=>t(...e)):n&&n(...e)},Mc=n=>n?De(n)?n.some(e=>e.length>1):n.length>1:!1;function Jm(n){const e={};for(const O in n)O in Yh||(e[O]=n[O]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,v=Qm(r),S=v&&v[0],m=v&&v[1],{onBeforeEnter:d,onEnter:E,onEnterCancelled:_,onLeave:b,onLeaveCancelled:P,onBeforeAppear:R=d,onAppear:w=E,onAppearCancelled:N=_}=e,V=(O,K,D,ne)=>{O._enterCancelled=ne,Di(O,K?u:o),Di(O,K?c:a),D&&D()},M=(O,K)=>{O._isLeaving=!1,Di(O,f),Di(O,p),Di(O,h),K&&K()},A=O=>(K,D)=>{const ne=O?w:E,W=()=>V(K,O,D);Li(ne,[K,W]),Sc(()=>{Di(K,O?l:s),Hn(K,O?u:o),Mc(ne)||Ec(K,i,S,W)})};return Mt(e,{onBeforeEnter(O){Li(d,[O]),Hn(O,s),Hn(O,a)},onBeforeAppear(O){Li(R,[O]),Hn(O,l),Hn(O,c)},onEnter:A(!1),onAppear:A(!0),onLeave(O,K){O._isLeaving=!0;const D=()=>M(O,K);Hn(O,f),O._enterCancelled?(Hn(O,h),Tc(O)):(Tc(O),Hn(O,h)),Sc(()=>{O._isLeaving&&(Di(O,f),Hn(O,p),Mc(b)||Ec(O,i,m,D))}),Li(b,[O,D])},onEnterCancelled(O){V(O,!1,void 0,!0),Li(_,[O])},onAppearCancelled(O){V(O,!0,void 0,!0),Li(N,[O])},onLeaveCancelled(O){M(O),Li(P,[O])}})}function Qm(n){if(n==null)return null;if(et(n))return[ea(n.enter),ea(n.leave)];{const e=ea(n);return[e,e]}}function ea(n){return ep(n)}function Hn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[fs]||(n[fs]=new Set)).add(e)}function Di(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[fs];t&&(t.delete(e),t.size||(n[fs]=void 0))}function Sc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let eg=0;function Ec(n,e,t,i){const r=n._endId=++eg,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=tg(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,h)}function tg(n,e){const t=window.getComputedStyle(n),i=v=>(t[v]||"").split(", "),r=i(`${li}Delay`),s=i(`${li}Duration`),a=yc(r,s),o=i(`${kr}Delay`),l=i(`${kr}Duration`),c=yc(o,l);let u=null,f=0,h=0;e===li?a>0&&(u=li,f=a,h=s.length):e===kr?c>0&&(u=kr,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?li:kr:null,h=u?u===li?s.length:l.length:0);const p=u===li&&/\b(?:transform|all)(?:,|$)/.test(i(`${li}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function yc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>bc(t)+bc(n[i])))}function bc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Tc(n){return(n?n.ownerDocument:document).body.offsetHeight}function ng(n,e,t){const i=n[fs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ac=Symbol("_vod"),ig=Symbol("_vsh"),rg=Symbol(""),sg=/(?:^|;)\s*display\s*:/;function og(n,e,t){const i=n.style,r=_t(t);let s=!1;if(t&&!r){if(e)if(_t(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&ao(i,o,"")}else for(const a in e)t[a]==null&&ao(i,a,"");for(const a in t)a==="display"&&(s=!0),ao(i,a,t[a])}else if(r){if(e!==t){const a=i[rg];a&&(t+=";"+a),i.cssText=t,s=sg.test(t)}}else e&&n.removeAttribute("style");Ac in n&&(n[Ac]=s?i.display:"",n[ig]&&(i.display="none"))}const wc=/\s*!important$/;function ao(n,e,t){if(De(t))t.forEach(i=>ao(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=ag(n,e);wc.test(t)?n.setProperty(Qi(i),t.replace(wc,""),"important"):n[i]=t}}const Rc=["Webkit","Moz","ms"],ta={};function ag(n,e){const t=ta[e];if(t)return t;let i=kt(e);if(i!=="filter"&&i in n)return ta[e]=i;i=Ro(i);for(let r=0;r<Rc.length;r++){const s=Rc[r]+i;if(s in n)return ta[e]=s}return e}const Cc="http://www.w3.org/1999/xlink";function Pc(n,e,t,i,r,s=op(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Cc,e.slice(6,e.length)):n.setAttributeNS(Cc,e,t):t==null||s&&!Hf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":On(t)?String(t):t)}function Lc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?jh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Hf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function xr(n,e,t,i){n.addEventListener(e,t,i)}function lg(n,e,t,i){n.removeEventListener(e,t,i)}const Dc=Symbol("_vei");function cg(n,e,t,i,r=null){const s=n[Dc]||(n[Dc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=ug(e);if(i){const c=s[e]=dg(i,r);xr(n,o,c,l)}else a&&(lg(n,o,a,l),s[e]=void 0)}}const Ic=/(?:Once|Passive|Capture)$/;function ug(n){let e;if(Ic.test(n)){e={};let i;for(;i=n.match(Ic);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Qi(n.slice(2)),e]}let na=0;const fg=Promise.resolve(),hg=()=>na||(fg.then(()=>na=0),na=Date.now());function dg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;yn(pg(i,t.value),e,5,[i])};return t.value=n,t.attached=hg(),t}function pg(n,e){if(De(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Uc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,mg=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?ng(n,i,a):e==="style"?og(n,t,i):Ao(e)?vl(e)||cg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):gg(n,e,i,a))?(Lc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pc(n,e,i,a,s,e!=="value")):n._isVueCE&&(_g(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!_t(i)))?Lc(n,kt(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Pc(n,e,i,a))};function gg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Uc(e)&&Oe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Uc(e)&&_t(t)?!1:e in n}function _g(n,e){const t=n._def.props;if(!t)return!1;const i=kt(e);return Array.isArray(t)?t.some(r=>kt(r)===i):Object.keys(t).some(r=>kt(r)===i)}const Nc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return De(e)?t=>no(e,t):e};function vg(n){n.target.composing=!0}function Oc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ia=Symbol("_assign");function Fc(n,e,t){return e&&(n=n.trim()),t&&(n=Sl(n)),n}const xg={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[ia]=Nc(r);const s=i||r.props&&r.props.type==="number";xr(n,e?"change":"input",a=>{a.target.composing||n[ia](Fc(n.value,t,s))}),(t||s)&&xr(n,"change",()=>{n.value=Fc(n.value,t,s)}),e||(xr(n,"compositionstart",vg),xr(n,"compositionend",Oc),xr(n,"change",Oc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[ia]=Nc(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Sl(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Mg=Mt({patchProp:mg},Ym);let Bc;function Sg(){return Bc||(Bc=wm(Mg))}const Eg=(...n)=>{const e=Sg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=bg(i);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,yg(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function yg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function bg(n){return _t(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Mr=typeof document<"u";function $h(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Tg(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&$h(n.default)}const Je=Object.assign;function ra(n,e){const t={};for(const i in e){const r=e[i];t[i]=bn(r)?r.map(n):n(r)}return t}const rs=()=>{},bn=Array.isArray;function zc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const Kh=/#/g,Ag=/&/g,wg=/\//g,Rg=/=/g,Cg=/\?/g,Zh=/\+/g,Pg=/%5B/g,Lg=/%5D/g,Jh=/%5E/g,Dg=/%60/g,Qh=/%7B/g,Ig=/%7C/g,ed=/%7D/g,Ug=/%20/g;function Ol(n){return n==null?"":encodeURI(""+n).replace(Ig,"|").replace(Pg,"[").replace(Lg,"]")}function Ng(n){return Ol(n).replace(Qh,"{").replace(ed,"}").replace(Jh,"^")}function tl(n){return Ol(n).replace(Zh,"%2B").replace(Ug,"+").replace(Kh,"%23").replace(Ag,"%26").replace(Dg,"`").replace(Qh,"{").replace(ed,"}").replace(Jh,"^")}function Og(n){return tl(n).replace(Rg,"%3D")}function Fg(n){return Ol(n).replace(Kh,"%23").replace(Cg,"%3F")}function Bg(n){return Fg(n).replace(wg,"%2F")}function hs(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const zg=/\/$/,Hg=n=>n.replace(zg,"");function sa(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Wg(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:hs(a)}}function Gg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Hc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function kg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Lr(e.matched[i],t.matched[r])&&td(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Lr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function td(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!Vg(n[t],e[t]))return!1;return!0}function Vg(n,e){return bn(n)?Gc(n,e):bn(e)?Gc(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function Gc(n,e){return bn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function Wg(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let nl=function(n){return n.pop="pop",n.push="push",n}({}),oa=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Xg(n){if(!n)if(Mr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Hg(n)}const qg=/^[^#]+#/;function jg(n,e){return n.replace(qg,"#")+e}function Yg(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Bo=()=>({left:window.scrollX,top:window.scrollY});function $g(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=Yg(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function kc(n,e){return(history.state?history.state.position-e:-1)+n}const il=new Map;function Kg(n,e){il.set(n,e)}function Zg(n){const e=il.get(n);return il.delete(n),e}function Jg(n){return typeof n=="string"||n&&typeof n=="object"}function nd(n){return typeof n=="string"||typeof n=="symbol"}let pt=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const id=Symbol("");pt.MATCHER_NOT_FOUND+"",pt.NAVIGATION_GUARD_REDIRECT+"",pt.NAVIGATION_ABORTED+"",pt.NAVIGATION_CANCELLED+"",pt.NAVIGATION_DUPLICATED+"";function Dr(n,e){return Je(new Error,{type:n,[id]:!0},e)}function Gn(n,e){return n instanceof Error&&id in n&&(e==null||!!(n.type&e))}const Qg=["params","query","hash"];function e_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of Qg)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function t_(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(Zh," "),s=r.indexOf("="),a=hs(s<0?r:r.slice(0,s)),o=s<0?null:hs(r.slice(s+1));if(a in e){let l=e[a];bn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function Vc(n){let e="";for(let t in n){const i=n[t];if(t=Og(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(bn(i)?i.map(r=>r&&tl(r)):[i&&tl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function n_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=bn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const i_=Symbol(""),Wc=Symbol(""),Fl=Symbol(""),Bl=Symbol(""),rl=Symbol("");function Vr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function _i(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(Dr(pt.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):Jg(h)?l(Dr(pt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function aa(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if($h(l)){const c=(l.__vccOpts||l)[e];c&&s.push(_i(c,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=Tg(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&_i(h,t,i,a,o,r)()}))}}return s}function r_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>Lr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Lr(c,l))||r.push(l))}return[t,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let s_=()=>location.protocol+"//"+location.host;function rd(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),Hc(o,"")}return Hc(t,n)+i+r}function o_(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=rd(n,location),v=t.value,S=e.value;let m=0;if(h){if(t.value=p,e.value=h,a&&a===v){a=null;return}m=S?h.position-S.position:0}else i(p);r.forEach(d=>{d(t.value,v,{delta:m,type:nl.pop,direction:m?m>0?oa.forward:oa.back:oa.unknown})})};function l(){a=t.value}function c(h){r.push(h);const p=()=>{const v=r.indexOf(h);v>-1&&r.splice(v,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(Je({},h.state,{scroll:Bo()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function Xc(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Bo():null}}function a_(n){const{history:e,location:t}=window,i={value:rd(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:s_()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](h)}}function a(l,c){s(l,Je({},e.state,Xc(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=Je({},r.value,e.state,{forward:l,scroll:Bo()});s(u.current,u,!0),s(l,Je({},Xc(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function l_(n){n=Xg(n);const e=a_(n),t=o_(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Je({location:"",base:n,go:i,createHref:jg.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let qi=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var xt=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(xt||{});const c_={type:qi.Static,value:""},u_=/[a-zA-Z0-9_]/;function f_(n){if(!n)return[[]];if(n==="/")return[[c_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=xt.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===xt.Static?s.push({type:qi.Static,value:c}):t===xt.Param||t===xt.ParamRegExp||t===xt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:qi.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==xt.ParamRegExp){i=t,t=xt.EscapeNext;continue}switch(t){case xt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),t=xt.Param):h();break;case xt.EscapeNext:h(),t=i;break;case xt.Param:l==="("?t=xt.ParamRegExp:u_.test(l)?h():(f(),t=xt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case xt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=xt.ParamRegExpEnd:u+=l;break;case xt.ParamRegExpEnd:f(),t=xt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===xt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const qc="[^/]+?",h_={sensitive:!1,strict:!1,start:!0,end:!0};var Bt=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Bt||{});const d_=/[.+*?^${}()[\]/\\]/g;function p_(n,e){const t=Je({},h_,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[Bt.Root];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=Bt.Segment+(t.sensitive?Bt.BonusCaseSensitive:0);if(h.type===qi.Static)f||(r+="/"),r+=h.value.replace(d_,"\\$&"),p+=Bt.Static;else if(h.type===qi.Param){const{value:v,repeatable:S,optional:m,regexp:d}=h;s.push({name:v,repeatable:S,optional:m});const E=d||qc;if(E!==qc){p+=Bt.BonusCustomRegExp;try{`${E}`}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+b.message)}}let _=S?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),r+=_,p+=Bt.Dynamic,m&&(p+=Bt.BonusOptional),S&&(p+=Bt.BonusRepeatable),E===".*"&&(p+=Bt.BonusWildcard)}u.push(p)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=Bt.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",v=s[h-1];f[v.name]=p&&v.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===qi.Static)u+=p.value;else if(p.type===qi.Param){const{value:v,repeatable:S,optional:m}=p,d=v in c?c[v]:"";if(bn(d)&&!S)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=bn(d)?d.join("/"):d;if(!E)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=E}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function m_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===Bt.Static+Bt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Bt.Static+Bt.Segment?1:-1:0}function sd(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=m_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(jc(i))return 1;if(jc(r))return-1}return r.length-i.length}function jc(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const g_={strict:!1,end:!0,sensitive:!1};function __(n,e,t){const i=p_(f_(n.path),t),r=Je(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function v_(n,e){const t=[],i=new Map;e=zc(g_,e);function r(f){return i.get(f)}function s(f,h,p){const v=!p,S=$c(f);S.aliasOf=p&&p.record;const m=zc(e,f),d=[S];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of b)d.push($c(Je({},S,{components:p?p.record.components:S.components,path:P,aliasOf:p?p.record:S})))}let E,_;for(const b of d){const{path:P}=b;if(h&&P[0]!=="/"){const R=h.record.path,w=R[R.length-1]==="/"?"":"/";b.path=h.record.path+(P&&w+P)}if(E=__(b,h,m),p?p.alias.push(E):(_=_||E,_!==E&&_.alias.push(E),v&&f.name&&!Kc(E)&&a(f.name)),od(E)&&l(E),S.children){const R=S.children;for(let w=0;w<R.length;w++)s(R[w],E,p&&p.children[w])}p=p||E}return _?()=>{a(_)}:rs}function a(f){if(nd(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=S_(f,t);t.splice(h,0,f),f.record.name&&!Kc(f)&&i.set(f.record.name,f)}function c(f,h){let p,v={},S,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Dr(pt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,v=Je(Yc(h.params,p.keys.filter(_=>!_.optional).concat(p.parent?p.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),f.params&&Yc(f.params,p.keys.map(_=>_.name))),S=p.stringify(v)}else if(f.path!=null)S=f.path,p=t.find(_=>_.re.test(S)),p&&(v=p.parse(S),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(_=>_.re.test(h.path)),!p)throw Dr(pt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,v=Je({},h.params,f.params),S=p.stringify(v)}const d=[];let E=p;for(;E;)d.unshift(E.record),E=E.parent;return{name:m,path:S,params:v,matched:d,meta:M_(d)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Yc(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function $c(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:x_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function x_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Kc(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function M_(n){return n.reduce((e,t)=>Je(e,t.meta),{})}function S_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;sd(n,e[s])<0?i=s:t=s+1}const r=E_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function E_(n){let e=n;for(;e=e.parent;)if(od(e)&&sd(n,e)===0)return e}function od({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Zc(n){const e=Nn(Fl),t=Nn(Bl),i=Tt(()=>{const l=Tr(n.to);return e.resolve(l)}),r=Tt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(Lr.bind(null,u));if(h>-1)return h;const p=Jc(l[c-2]);return c>1&&Jc(u)===p&&f[f.length-1].path!==p?f.findIndex(Lr.bind(null,l[c-2])):h}),s=Tt(()=>r.value>-1&&w_(t.params,i.value.params)),a=Tt(()=>r.value>-1&&r.value===t.matched.length-1&&td(t.params,i.value.params));function o(l={}){if(A_(l)){const c=e[Tr(n.replace)?"replace":"push"](Tr(n.to)).catch(rs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Tt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function y_(n){return n.length===1?n[0]:n}const b_=Mh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Zc,setup(n,{slots:e}){const t=ms(Zc(n)),{options:i}=Nn(Fl),r=Tt(()=>({[Qc(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Qc(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&y_(e.default(t));return n.custom?s:Nl("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),T_=b_;function A_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function w_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!bn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function Jc(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Qc=(n,e,t)=>n??e??t,R_=Mh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Nn(rl),r=Tt(()=>n.route||i.value),s=Nn(Wc,0),a=Tt(()=>{let c=Tr(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Tt(()=>r.value.matched[a.value]);io(Wc,Tt(()=>a.value+1)),io(i_,o),io(rl,r);const l=ln();return ro(()=>[l.value,o.value,n.name],([c,u,f],[h,p,v])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Lr(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return eu(t.default,{Component:h,route:c});const p=f.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Nl(h,Je({},v,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return eu(t.default,{Component:m,route:c})||m}}});function eu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const C_=R_;function P_(n){const e=v_(n.routes,n),t=n.parseQuery||t_,i=n.stringifyQuery||Vc,r=n.history,s=Vr(),a=Vr(),o=Vr(),l=Cp(ci);let c=ci;Mr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ra.bind(null,H=>""+H),f=ra.bind(null,Bg),h=ra.bind(null,hs);function p(H,se){let te,ge;return nd(H)?(te=e.getRecordMatcher(H),ge=se):ge=H,e.addRoute(ge,te)}function v(H){const se=e.getRecordMatcher(H);se&&e.removeRoute(se)}function S(){return e.getRoutes().map(H=>H.record)}function m(H){return!!e.getRecordMatcher(H)}function d(H,se){if(se=Je({},se||l.value),typeof H=="string"){const L=sa(t,H,se.path),G=e.resolve({path:L.path},se),k=r.createHref(L.fullPath);return Je(L,G,{params:h(G.params),hash:hs(L.hash),redirectedFrom:void 0,href:k})}let te;if(H.path!=null)te=Je({},H,{path:sa(t,H.path,se.path).path});else{const L=Je({},H.params);for(const G in L)L[G]==null&&delete L[G];te=Je({},H,{params:f(L)}),se.params=f(se.params)}const ge=e.resolve(te,se),xe=H.hash||"";ge.params=u(h(ge.params));const g=Gg(i,Je({},H,{hash:Ng(xe),path:ge.path})),C=r.createHref(g);return Je({fullPath:g,hash:xe,query:i===Vc?n_(H.query):H.query||{}},ge,{redirectedFrom:void 0,href:C})}function E(H){return typeof H=="string"?sa(t,H,l.value.path):Je({},H)}function _(H,se){if(c!==H)return Dr(pt.NAVIGATION_CANCELLED,{from:se,to:H})}function b(H){return w(H)}function P(H){return b(Je(E(H),{replace:!0}))}function R(H,se){const te=H.matched[H.matched.length-1];if(te&&te.redirect){const{redirect:ge}=te;let xe=typeof ge=="function"?ge(H,se):ge;return typeof xe=="string"&&(xe=xe.includes("?")||xe.includes("#")?xe=E(xe):{path:xe},xe.params={}),Je({query:H.query,hash:H.hash,params:xe.path!=null?{}:H.params},xe)}}function w(H,se){const te=c=d(H),ge=l.value,xe=H.state,g=H.force,C=H.replace===!0,L=R(te,ge);if(L)return w(Je(E(L),{state:typeof L=="object"?Je({},xe,L.state):xe,force:g,replace:C}),se||te);const G=te;G.redirectedFrom=se;let k;return!g&&kg(i,ge,te)&&(k=Dr(pt.NAVIGATION_DUPLICATED,{to:G,from:ge}),pe(ge,ge,!0,!1)),(k?Promise.resolve(k):M(G,ge)).catch(q=>Gn(q)?Gn(q,pt.NAVIGATION_GUARD_REDIRECT)?q:ce(q):X(q,G,ge)).then(q=>{if(q){if(Gn(q,pt.NAVIGATION_GUARD_REDIRECT))return w(Je({replace:C},E(q.to),{state:typeof q.to=="object"?Je({},xe,q.to.state):xe,force:g}),se||G)}else q=O(G,ge,!0,C,xe);return A(G,ge,q),q})}function N(H,se){const te=_(H,se);return te?Promise.reject(te):Promise.resolve()}function V(H){const se=Z.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(H):H()}function M(H,se){let te;const[ge,xe,g]=r_(H,se);te=aa(ge.reverse(),"beforeRouteLeave",H,se);for(const L of ge)L.leaveGuards.forEach(G=>{te.push(_i(G,H,se))});const C=N.bind(null,H,se);return te.push(C),Me(te).then(()=>{te=[];for(const L of s.list())te.push(_i(L,H,se));return te.push(C),Me(te)}).then(()=>{te=aa(xe,"beforeRouteUpdate",H,se);for(const L of xe)L.updateGuards.forEach(G=>{te.push(_i(G,H,se))});return te.push(C),Me(te)}).then(()=>{te=[];for(const L of g)if(L.beforeEnter)if(bn(L.beforeEnter))for(const G of L.beforeEnter)te.push(_i(G,H,se));else te.push(_i(L.beforeEnter,H,se));return te.push(C),Me(te)}).then(()=>(H.matched.forEach(L=>L.enterCallbacks={}),te=aa(g,"beforeRouteEnter",H,se,V),te.push(C),Me(te))).then(()=>{te=[];for(const L of a.list())te.push(_i(L,H,se));return te.push(C),Me(te)}).catch(L=>Gn(L,pt.NAVIGATION_CANCELLED)?L:Promise.reject(L))}function A(H,se,te){o.list().forEach(ge=>V(()=>ge(H,se,te)))}function O(H,se,te,ge,xe){const g=_(H,se);if(g)return g;const C=se===ci,L=Mr?history.state:{};te&&(ge||C?r.replace(H.fullPath,Je({scroll:C&&L&&L.scroll},xe)):r.push(H.fullPath,xe)),l.value=H,pe(H,se,te,C),ce()}let K;function D(){K||(K=r.listen((H,se,te)=>{if(!fe.listening)return;const ge=d(H),xe=R(ge,fe.currentRoute.value);if(xe){w(Je(xe,{replace:!0,force:!0}),ge).catch(rs);return}c=ge;const g=l.value;Mr&&Kg(kc(g.fullPath,te.delta),Bo()),M(ge,g).catch(C=>Gn(C,pt.NAVIGATION_ABORTED|pt.NAVIGATION_CANCELLED)?C:Gn(C,pt.NAVIGATION_GUARD_REDIRECT)?(w(Je(E(C.to),{force:!0}),ge).then(L=>{Gn(L,pt.NAVIGATION_ABORTED|pt.NAVIGATION_DUPLICATED)&&!te.delta&&te.type===nl.pop&&r.go(-1,!1)}).catch(rs),Promise.reject()):(te.delta&&r.go(-te.delta,!1),X(C,ge,g))).then(C=>{C=C||O(ge,g,!1),C&&(te.delta&&!Gn(C,pt.NAVIGATION_CANCELLED)?r.go(-te.delta,!1):te.type===nl.pop&&Gn(C,pt.NAVIGATION_ABORTED|pt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),A(ge,g,C)}).catch(rs)}))}let ne=Vr(),W=Vr(),ee;function X(H,se,te){ce(H);const ge=W.list();return ge.length?ge.forEach(xe=>xe(H,se,te)):console.error(H),Promise.reject(H)}function ae(){return ee&&l.value!==ci?Promise.resolve():new Promise((H,se)=>{ne.add([H,se])})}function ce(H){return ee||(ee=!H,D(),ne.list().forEach(([se,te])=>H?te(H):se()),ne.reset()),H}function pe(H,se,te,ge){const{scrollBehavior:xe}=n;if(!Mr||!xe)return Promise.resolve();const g=!te&&Zg(kc(H.fullPath,0))||(ge||!te)&&history.state&&history.state.scroll||null;return ah().then(()=>xe(H,se,g)).then(C=>C&&$g(C)).catch(C=>X(C,H,se))}const Se=H=>r.go(H);let Ue;const Z=new Set,fe={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:S,resolve:d,options:n,push:b,replace:P,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:W.add,isReady:ae,install(H){H.component("RouterLink",T_),H.component("RouterView",C_),H.config.globalProperties.$router=fe,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>Tr(l)}),Mr&&!Ue&&l.value===ci&&(Ue=!0,b(r.location).catch(ge=>{}));const se={};for(const ge in ci)Object.defineProperty(se,ge,{get:()=>l.value[ge],enumerable:!0});H.provide(Fl,fe),H.provide(Bl,ih(se)),H.provide(rl,l);const te=H.unmount;Z.add(H),H.unmount=function(){Z.delete(H),Z.size<1&&(c=ci,K&&K(),K=null,l.value=ci,Ue=!1,ee=!1),te()}}};function Me(H){return H.reduce((se,te)=>se.then(()=>V(te)),Promise.resolve())}return fe}function ad(n){return Nn(Bl)}const L_="/logo.svg",zl=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},D_={class:"nav-links hide-mobile u-flex u-gap-36"},I_=["aria-label","aria-expanded"],U_={__name:"Nav",setup(n){const e=ad(),t=ln(!1),i=ln(!1),r=[{label:"Projects",to:"/projects"},{label:"About",to:{path:"/",hash:"#about"}},{label:"Contact",to:{path:"/",hash:"#contact"}}];function s(){t.value=window.scrollY>50}function a(E){var _;return typeof E.to=="string"?e.path===E.to:(_=E.to)!=null&&_.hash?e.path===(E.to.path||"/")&&e.hash===E.to.hash:!1}function o(E){E.currentTarget.style.transform="rotate(-8deg) scale(1.1)"}function l(E){E.currentTarget.style.transform="rotate(0deg) scale(1)"}_s(()=>{s(),window.addEventListener("scroll",s)}),vs(()=>{window.removeEventListener("scroll",s)});const c=Tt(()=>({position:"fixed",top:0,left:0,right:0,zIndex:200,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 52px",background:t.value?"rgba(10,14,20,0.85)":"transparent",backdropFilter:t.value?"blur(20px)":"none",borderBottom:t.value?"1px solid rgba(255,255,255,0.07)":"1px solid transparent",transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)"})),u={display:"flex",alignItems:"center",gap:"10px",cursor:"none"},f={width:"36px",height:"36px",borderRadius:"10px",transition:"transform 0.2s"},h={fontFamily:"var(--display)",fontWeight:700,fontSize:"var(--text-lg)",color:"var(--text)",letterSpacing:"-0.02em"},p={display:"flex",alignItems:"center",gap:"8px",padding:"8px 18px",borderRadius:"var(--radius-pill)",background:"rgba(74,255,145,0.1)",border:"1px solid rgba(74,255,145,0.25)"},v={width:"7px",height:"7px",borderRadius:"50%",background:"var(--lime)",opacity:.9},S={fontFamily:"var(--mono)",fontSize:"var(--text-xs)",letterSpacing:"0.1em",color:"var(--lime)",textTransform:"uppercase"},m={position:"fixed",top:"76px",left:0,right:0,bottom:0,background:"var(--bg)",padding:"32px",display:"flex",flexDirection:"column",gap:"24px",zIndex:199};function d(E){const _={width:"24px",height:"2px",background:"var(--text)",position:"relative",transition:"all 0.3s"};return E?{..._,background:"transparent"}:_}return(E,_)=>{const b=Uo("RouterLink");return Xe(),$e("nav",{style:un(c.value)},[nt(b,{to:"/",style:u},{default:ei(()=>[re("img",{src:L_,alt:"Logo",style:f,onMouseenter:o,onMouseleave:l},null,32),re("span",{style:h},"Prabath")]),_:1}),re("div",D_,[(Xe(),$e(mt,null,on(r,P=>nt(b,{key:P.label,to:P.to,class:ni(["nav-link",{active:a(P)}])},{default:ei(()=>[ii(ct(P.label),1)]),_:2},1032,["to","class"])),64))]),re("button",{class:"mobile-menu-btn hide-desktop",onClick:_[0]||(_[0]=P=>i.value=!i.value),"aria-label":i.value?"Close menu":"Open menu","aria-expanded":i.value.toString()},[re("span",{style:un(d(i.value))},null,4)],8,I_),nt(Zm,{name:"mobile-menu"},{default:ei(()=>[i.value?(Xe(),$e("div",{key:0,class:"mobile-menu",style:m},[(Xe(),$e(mt,null,on(r,P=>nt(b,{key:P.label,to:P.to,class:"mobile-nav-link",onClick:_[1]||(_[1]=R=>i.value=!1)},{default:ei(()=>[ii(ct(P.label),1)]),_:2},1032,["to"])),64)),re("div",{style:un([p,{"margin-top":"24px"}])},[re("div",{style:v}),re("span",{style:S},"Online")])])):Xi("",!0)]),_:1}),re("div",{class:"hide-mobile",style:p},[re("div",{style:v}),re("span",{style:S},"Online")])],4)}}},N_=zl(U_,[["__scopeId","data-v-6cd13377"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hl="162",O_=0,tu=1,F_=2,ld=1,B_=2,jn=3,bi=0,Yt=1,Jn=2,Mi=0,Rr=1,nu=2,iu=3,ru=4,z_=5,Vi=100,H_=101,G_=102,su=103,ou=104,k_=200,V_=201,W_=202,X_=203,sl=204,ol=205,q_=206,j_=207,Y_=208,$_=209,K_=210,Z_=211,J_=212,Q_=213,ev=214,tv=0,nv=1,iv=2,vo=3,rv=4,sv=5,ov=6,av=7,cd=0,lv=1,cv=2,Si=0,uv=1,fv=2,hv=3,ud=4,dv=5,pv=6,mv=7,fd=300,Ir=301,Ur=302,al=303,ll=304,zo=306,cl=1e3,vn=1001,ul=1002,zt=1003,au=1004,Wr=1005,qt=1006,la=1007,ji=1008,Ei=1009,gv=1010,_v=1011,Gl=1012,hd=1013,xi=1014,Qn=1015,ds=1016,dd=1017,pd=1018,Ki=1020,vv=1021,xn=1023,xv=1024,Mv=1025,Zi=1026,Nr=1027,Sv=1028,md=1029,Ev=1030,gd=1031,_d=1033,ca=33776,ua=33777,fa=33778,ha=33779,lu=35840,cu=35841,uu=35842,fu=35843,vd=36196,hu=37492,du=37496,pu=37808,mu=37809,gu=37810,_u=37811,vu=37812,xu=37813,Mu=37814,Su=37815,Eu=37816,yu=37817,bu=37818,Tu=37819,Au=37820,wu=37821,da=36492,Ru=36494,Cu=36495,yv=36283,Pu=36284,Lu=36285,Du=36286,bv=3200,Tv=3201,xd=0,Av=1,vi="",_n="srgb",Ai="srgb-linear",kl="display-p3",Ho="display-p3-linear",xo="linear",lt="srgb",Mo="rec709",So="p3",nr=7680,Iu=519,wv=512,Rv=513,Cv=514,Md=515,Pv=516,Lv=517,Dv=518,Iv=519,Uu=35044,Nu="300 es",fl=1035,ti=2e3,Eo=2001;class Fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pa=Math.PI/180,hl=180/Math.PI;function Ms(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function Uv(n,e){return(n%e+e)%e}function ma(n,e,t){return(1-t)*n+t*e}function Ou(n){return(n&n-1)===0&&n!==0}function dl(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Xr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],v=i[8],S=r[0],m=r[3],d=r[6],E=r[1],_=r[4],b=r[7],P=r[2],R=r[5],w=r[8];return s[0]=a*S+o*E+l*P,s[3]=a*m+o*_+l*R,s[6]=a*d+o*b+l*w,s[1]=c*S+u*E+f*P,s[4]=c*m+u*_+f*R,s[7]=c*d+u*b+f*w,s[2]=h*S+p*E+v*P,s[5]=h*m+p*_+v*R,s[8]=h*d+p*b+v*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,v=t*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(u*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(i*l-c*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ga.makeScale(e,t)),this}rotate(e){return this.premultiply(ga.makeRotation(-e)),this}translate(e,t){return this.premultiply(ga.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ga=new Ve;function Sd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Nv(){const n=yo("canvas");return n.style.display="block",n}const Fu={};function Ov(n){n in Fu||(Fu[n]=!0,console.warn(n))}const Bu=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zu=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ls={[Ai]:{transfer:xo,primaries:Mo,toReference:n=>n,fromReference:n=>n},[_n]:{transfer:lt,primaries:Mo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ho]:{transfer:xo,primaries:So,toReference:n=>n.applyMatrix3(zu),fromReference:n=>n.applyMatrix3(Bu)},[kl]:{transfer:lt,primaries:So,toReference:n=>n.convertSRGBToLinear().applyMatrix3(zu),fromReference:n=>n.applyMatrix3(Bu).convertLinearToSRGB()}},Fv=new Set([Ai,Ho]),tt={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Fv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ls[e].toReference,r=Ls[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ls[n].primaries},getTransfer:function(n){return n===vi?xo:Ls[n].transfer}};function Cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _a(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class Ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=yo("canvas")),ir.width=e.width,ir.height=e.height;const i=ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cr(t[i]/255)*255):t[i]=Cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Bv=0;class yd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Ms(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(va(r[a].image)):s.push(va(r[a]))}else s=va(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ed.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zv=0;class $t extends Fr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,i=vn,r=vn,s=qt,a=ji,o=xn,l=Ei,c=$t.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zv++}),this.uuid=Ms(),this.name="",this.source=new yd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cl:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case ul:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cl:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case ul:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=fd;$t.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],v=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,b=(p+1)/2,P=(d+1)/2,R=(u+h)/4,w=(f+S)/4,N=(v+m)/4;return _>b&&_>P?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=R/i,s=w/i):b>P?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=N/s),this.set(i,r,s,t),this}let E=Math.sqrt((m-v)*(m-v)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(f-S)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hv extends Fr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new $t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Hv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class bd extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gv extends $t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ss{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],S=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S;return}if(f!==S||l!==h||c!==p||u!==v){let m=1-o;const d=l*h+c*p+u*v+f*S,E=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const P=Math.sqrt(_),R=Math.atan2(P,d*E);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const b=o*E;if(l=l*m+h*b,c=c*m+p*b,u=u*m+v*b,f=f*m+S*b,m===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*p-c*h,e[t+1]=l*v+u*h+c*f-o*p,e[t+2]=c*v+u*p+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"YXZ":this._x=h*u*f+c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"ZXY":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f-h*p*v;break;case"ZYX":this._x=h*u*f-c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f+h*p*v;break;case"YZX":this._x=h*u*f+c*p*v,this._y=c*p*f+h*u*v,this._z=c*u*v-h*p*f,this._w=c*u*f-h*p*v;break;case"XZY":this._x=h*u*f-c*p*v,this._y=c*p*f-h*u*v,this._z=c*u*v+h*p*f,this._w=c*u*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xa.copy(this).projectOnVector(e),this.sub(xa)}reflect(e){return this.sub(xa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new z,Hu=new Ss;class Es{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ds.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ds.copy(i.boundingBox)),Ds.applyMatrix4(e.matrixWorld),this.union(Ds)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Is.subVectors(this.max,qr),rr.subVectors(e.a,qr),sr.subVectors(e.b,qr),or.subVectors(e.c,qr),ui.subVectors(sr,rr),fi.subVectors(or,sr),Ii.subVectors(rr,or);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ii.z,Ii.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ii.z,0,-Ii.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ii.y,Ii.x,0];return!Ma(t,rr,sr,or,Is)||(t=[1,0,0,0,1,0,0,0,1],!Ma(t,rr,sr,or,Is))?!1:(Us.crossVectors(ui,fi),t=[Us.x,Us.y,Us.z],Ma(t,rr,sr,or,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new z,new z,new z,new z,new z,new z,new z,new z],pn=new z,Ds=new Es,rr=new z,sr=new z,or=new z,ui=new z,fi=new z,Ii=new z,qr=new z,Is=new z,Us=new z,Ui=new z;function Ma(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ui.fromArray(n,s);const o=r.x*Math.abs(Ui.x)+r.y*Math.abs(Ui.y)+r.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),u=i.dot(Ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const kv=new Es,jr=new z,Sa=new z;class ys{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):kv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(jr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Sa)),this.expandByPoint(jr.copy(e.center).sub(Sa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new z,Ea=new z,Ns=new z,hi=new z,ya=new z,Os=new z,ba=new z;class Vl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ea.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(Ea);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=hi.dot(this.direction),l=-hi.dot(Ns),c=hi.lengthSq(),u=Math.abs(1-a*a);let f,h,p,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const S=1/u;f*=S,h*=S,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ea).addScaledVector(Ns,h),p}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,i,r,s){ya.subVectors(t,e),Os.subVectors(i,e),ba.crossVectors(ya,Os);let a=this.direction.dot(ba),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const l=o*this.direction.dot(Os.crossVectors(hi,Os));if(l<0)return null;const c=o*this.direction.dot(ya.cross(hi));if(c<0||l+c>a)return null;const u=-o*hi.dot(ba);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,v,S,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,S,m)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,v,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),s=1/ar.setFromMatrixColumn(e,1).length(),a=1/ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,v=o*u,S=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+v*c,t[5]=h-S*c,t[9]=-o*l,t[2]=S-h*c,t[6]=v+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,v=c*u,S=c*f;t[0]=h+S*o,t[4]=v*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-v,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,v=c*u,S=c*f;t[0]=h-S*o,t[4]=-a*f,t[8]=v+p*o,t[1]=p+v*o,t[5]=a*u,t[9]=S-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,v=o*u,S=o*f;t[0]=l*u,t[4]=v*c-p,t[8]=h*c+S,t[1]=l*f,t[5]=S*c+h,t[9]=p*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,S=o*c;t[0]=l*u,t[4]=S-h*f,t[8]=v*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+v,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,S=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+S,t[5]=a*u,t[9]=p*f-v,t[2]=v*f-p,t[6]=o*u,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vv,e,Wv)}lookAt(e,t,i){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),di.crossVectors(i,Zt),di.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),di.crossVectors(i,Zt)),di.normalize(),Fs.crossVectors(Zt,di),r[0]=di.x,r[4]=Fs.x,r[8]=Zt.x,r[1]=di.y,r[5]=Fs.y,r[9]=Zt.y,r[2]=di.z,r[6]=Fs.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],v=i[2],S=i[6],m=i[10],d=i[14],E=i[3],_=i[7],b=i[11],P=i[15],R=r[0],w=r[4],N=r[8],V=r[12],M=r[1],A=r[5],O=r[9],K=r[13],D=r[2],ne=r[6],W=r[10],ee=r[14],X=r[3],ae=r[7],ce=r[11],pe=r[15];return s[0]=a*R+o*M+l*D+c*X,s[4]=a*w+o*A+l*ne+c*ae,s[8]=a*N+o*O+l*W+c*ce,s[12]=a*V+o*K+l*ee+c*pe,s[1]=u*R+f*M+h*D+p*X,s[5]=u*w+f*A+h*ne+p*ae,s[9]=u*N+f*O+h*W+p*ce,s[13]=u*V+f*K+h*ee+p*pe,s[2]=v*R+S*M+m*D+d*X,s[6]=v*w+S*A+m*ne+d*ae,s[10]=v*N+S*O+m*W+d*ce,s[14]=v*V+S*K+m*ee+d*pe,s[3]=E*R+_*M+b*D+P*X,s[7]=E*w+_*A+b*ne+P*ae,s[11]=E*N+_*O+b*W+P*ce,s[15]=E*V+_*K+b*ee+P*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],v=e[3],S=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+S*(+t*l*p-t*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],v=e[12],S=e[13],m=e[14],d=e[15],E=f*m*c-S*h*c+S*l*p-o*m*p-f*l*d+o*h*d,_=v*h*c-u*m*c-v*l*p+a*m*p+u*l*d-a*h*d,b=u*S*c-v*f*c+v*o*p-a*S*p-u*o*d+a*f*d,P=v*f*l-u*S*l-v*o*h+a*S*h+u*o*m-a*f*m,R=t*E+i*_+r*b+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=E*w,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(o*m*s-S*l*s+S*r*c-i*m*c-o*r*d+i*l*d)*w,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*w,e[4]=_*w,e[5]=(u*m*s-v*h*s+v*r*p-t*m*p-u*r*d+t*h*d)*w,e[6]=(v*l*s-a*m*s-v*r*c+t*m*c+a*r*d-t*l*d)*w,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*w,e[8]=b*w,e[9]=(v*f*s-u*S*s-v*i*p+t*S*p+u*i*d-t*f*d)*w,e[10]=(a*S*s-v*o*s+v*i*c-t*S*c-a*i*d+t*o*d)*w,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*w,e[12]=P*w,e[13]=(u*S*r-v*f*r+v*i*h-t*S*h-u*i*m+t*f*m)*w,e[14]=(v*o*r-a*S*r-v*i*l+t*S*l+a*i*m-t*o*m)*w,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,v=s*f,S=a*u,m=a*f,d=o*f,E=l*c,_=l*u,b=l*f,P=i.x,R=i.y,w=i.z;return r[0]=(1-(S+d))*P,r[1]=(p+b)*P,r[2]=(v-_)*P,r[3]=0,r[4]=(p-b)*R,r[5]=(1-(h+d))*R,r[6]=(m+E)*R,r[7]=0,r[8]=(v+_)*w,r[9]=(m-E)*w,r[10]=(1-(h+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ar.set(r[0],r[1],r[2]).length();const a=ar.set(r[4],r[5],r[6]).length(),o=ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const c=1/s,u=1/a,f=1/o;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=f,mn.elements[9]*=f,mn.elements[10]*=f,t.setFromRotationMatrix(mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ti){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(o===ti)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Eo)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ti){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,p=(i+r)*u;let v,S;if(o===ti)v=(a+s)*f,S=-2*f;else if(o===Eo)v=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ar=new z,mn=new dt,Vv=new z(0,0,0),Wv=new z(1,1,1),di=new z,Fs=new z,Zt=new z,Gu=new dt,ku=new Ss;class Fn{constructor(e=0,t=0,i=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ku.setFromEuler(this),this.setFromQuaternion(ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Td{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xv=0;const Vu=new z,lr=new Ss,Wn=new dt,Bs=new z,Yr=new z,qv=new z,jv=new Ss,Wu=new z(1,0,0),Xu=new z(0,1,0),qu=new z(0,0,1),Yv={type:"added"},$v={type:"removed"},Ta={type:"childadded",child:null},Aa={type:"childremoved",child:null};class wt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new z,t=new Fn,i=new Ss,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ve}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Td,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(Wu,e)}rotateY(e){return this.rotateOnAxis(Xu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Vu.copy(e).applyQuaternion(this.quaternion),this.position.add(Vu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wu,e)}translateY(e){return this.translateOnAxis(Xu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bs.copy(e):Bs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Yr,Bs,this.up):Wn.lookAt(Bs,Yr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(Wn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Yv),Ta.child=e,this.dispatchEvent(Ta),Ta.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($v),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,e,qv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yr,jv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new z(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new z,Xn=new z,wa=new z,qn=new z,cr=new z,ur=new z,ju=new z,Ra=new z,Ca=new z,Pa=new z;class In{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gn.subVectors(r,t),Xn.subVectors(i,t),wa.subVectors(e,t);const a=gn.dot(gn),o=gn.dot(Xn),l=gn.dot(wa),c=Xn.dot(Xn),u=Xn.dot(wa),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),Xn.subVectors(e,t),gn.cross(Xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),gn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;cr.subVectors(r,i),ur.subVectors(s,i),Ra.subVectors(e,i);const l=cr.dot(Ra),c=ur.dot(Ra);if(l<=0&&c<=0)return t.copy(i);Ca.subVectors(e,r);const u=cr.dot(Ca),f=ur.dot(Ca);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(cr,a);Pa.subVectors(e,s);const p=cr.dot(Pa),v=ur.dot(Pa);if(v>=0&&p<=v)return t.copy(s);const S=p*c-l*v;if(S<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(ur,o);const m=u*v-p*f;if(m<=0&&f-u>=0&&p-v>=0)return ju.subVectors(s,r),o=(f-u)/(f-u+(p-v)),t.copy(r).addScaledVector(ju,o);const d=1/(m+S+h);return a=S*d,o=h*d,t.copy(i).addScaledVector(cr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},zs={h:0,s:0,l:0};function La(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=Uv(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=La(a,s,e+1/3),this.g=La(a,s,e),this.b=La(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const i=Ad[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=_a(e.r),this.g=_a(e.g),this.b=_a(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return tt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(jt(Lt.r*255,0,255))*65536+Math.round(jt(Lt.g*255,0,255))*256+Math.round(jt(Lt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=_n){tt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,r=Lt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(zs);const i=ma(pi.h,zs.h,t),r=ma(pi.s,zs.s,t),s=ma(pi.l,zs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ke;Ke.NAMES=Ad;let Kv=0;class er extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ms(),this.name="",this.type="Material",this.blending=Rr,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=ol,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==bi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==ol&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bo extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new z,Hs=new je;class hn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Uu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ov("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hs.fromBufferAttribute(this,t),Hs.applyMatrix3(e),this.setXY(t,Hs.x,Hs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),i=Vt(i,this.array),r=Vt(r,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uu&&(e.usage=this.usage),e}}class wd extends hn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rd extends hn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Sn extends hn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zv=0;const sn=new dt,Da=new wt,fr=new z,Jt=new Es,$r=new Es,bt=new z;class dn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sd(e)?Rd:wd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return Da.lookAt(e),Da.updateMatrix(),this.applyMatrix4(Da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Sn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];$r.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(Jt.min,$r.min),Jt.expandByPoint(bt),bt.addVectors(Jt.max,$r.max),Jt.expandByPoint(bt)):(Jt.expandByPoint($r.min),Jt.expandByPoint($r.max))}Jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(fr.fromBufferAttribute(e,c),bt.add(fr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new z,l[N]=new z;const c=new z,u=new z,f=new z,h=new je,p=new je,v=new je,S=new z,m=new z;function d(N,V,M){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,V),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,V),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),p.sub(h),v.sub(h);const A=1/(p.x*v.y-v.x*p.y);isFinite(A)&&(S.copy(u).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(A),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(A),o[N].add(S),o[V].add(S),o[M].add(S),l[N].add(m),l[V].add(m),l[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let N=0,V=E.length;N<V;++N){const M=E[N],A=M.start,O=M.count;for(let K=A,D=A+O;K<D;K+=3)d(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const _=new z,b=new z,P=new z,R=new z;function w(N){P.fromBufferAttribute(r,N),R.copy(P);const V=o[N];_.copy(V),_.sub(P.multiplyScalar(P.dot(V))).normalize(),b.crossVectors(R,V);const A=b.dot(l[N])<0?-1:1;a.setXYZW(N,_.x,_.y,_.z,A)}for(let N=0,V=E.length;N<V;++N){const M=E[N],A=M.start,O=M.count;for(let K=A,D=A+O;K<D;K+=3)w(e.getX(K+0)),w(e.getX(K+1)),w(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*u;for(let d=0;d<u;d++)h[v++]=c[p++]}return new hn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yu=new dt,Ni=new Vl,Gs=new ys,$u=new z,hr=new z,dr=new z,pr=new z,Ia=new z,ks=new z,Vs=new je,Ws=new je,Xs=new je,Ku=new z,Zu=new z,Ju=new z,qs=new z,js=new z;class cn extends wt{constructor(e=new dn,t=new bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ks.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ia.fromBufferAttribute(f,e),a?ks.addScaledVector(Ia,u):ks.addScaledVector(Ia.sub(t),u))}t.add(ks)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Gs.copy(i.boundingSphere),Gs.applyMatrix4(s),Ni.copy(e.ray).recast(e.near),!(Gs.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Gs,$u)===null||Ni.origin.distanceToSquared($u)>(e.far-e.near)**2))&&(Yu.copy(s).invert(),Ni.copy(e.ray).applyMatrix4(Yu),!(i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=a[m.materialIndex],E=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,P=_;b<P;b+=3){const R=o.getX(b),w=o.getX(b+1),N=o.getX(b+2);r=Ys(this,d,e,i,c,u,f,R,w,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const E=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);r=Ys(this,a,e,i,c,u,f,E,_,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,S=h.length;v<S;v++){const m=h[v],d=a[m.materialIndex],E=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,P=_;b<P;b+=3){const R=b,w=b+1,N=b+2;r=Ys(this,d,e,i,c,u,f,R,w,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const E=m,_=m+1,b=m+2;r=Ys(this,a,e,i,c,u,f,E,_,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Jv(n,e,t,i,r,s,a,o){let l;if(e.side===Yt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===bi,o),l===null)return null;js.copy(o),js.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:n}}function Ys(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,hr),n.getVertexPosition(l,dr),n.getVertexPosition(c,pr);const u=Jv(n,e,t,i,hr,dr,pr,qs);if(u){r&&(Vs.fromBufferAttribute(r,o),Ws.fromBufferAttribute(r,l),Xs.fromBufferAttribute(r,c),u.uv=In.getInterpolation(qs,hr,dr,pr,Vs,Ws,Xs,new je)),s&&(Vs.fromBufferAttribute(s,o),Ws.fromBufferAttribute(s,l),Xs.fromBufferAttribute(s,c),u.uv1=In.getInterpolation(qs,hr,dr,pr,Vs,Ws,Xs,new je)),a&&(Ku.fromBufferAttribute(a,o),Zu.fromBufferAttribute(a,l),Ju.fromBufferAttribute(a,c),u.normal=In.getInterpolation(qs,hr,dr,pr,Ku,Zu,Ju,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new z,materialIndex:0};In.getNormal(hr,dr,pr,f.normal),u.face=f}return u}class bs extends dn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Sn(c,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(f,2));function v(S,m,d,E,_,b,P,R,w,N,V){const M=b/w,A=P/N,O=b/2,K=P/2,D=R/2,ne=w+1,W=N+1;let ee=0,X=0;const ae=new z;for(let ce=0;ce<W;ce++){const pe=ce*A-K;for(let Se=0;Se<ne;Se++){const Ue=Se*M-O;ae[S]=Ue*E,ae[m]=pe*_,ae[d]=D,c.push(ae.x,ae.y,ae.z),ae[S]=0,ae[m]=0,ae[d]=R>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(Se/w),f.push(1-ce/N),ee+=1}}for(let ce=0;ce<N;ce++)for(let pe=0;pe<w;pe++){const Se=h+pe+ne*ce,Ue=h+pe+ne*(ce+1),Z=h+(pe+1)+ne*(ce+1),fe=h+(pe+1)+ne*ce;l.push(Se,Ue,fe),l.push(Ue,Z,fe),X+=6}o.addGroup(p,X,V),p+=X,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ft(n){const e={};for(let t=0;t<n.length;t++){const i=Or(n[t]);for(const r in i)e[r]=i[r]}return e}function Qv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cd(n){return n.getRenderTarget()===null?n.outputColorSpace:tt.workingColorSpace}const e0={clone:Or,merge:Ft};var t0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t0,this.fragmentShader=n0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=Qv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pd extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new z,Qu=new je,ef=new je;class an extends Pd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Qu,ef),t.subVectors(ef,Qu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class i0 extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(mr,gr,e,t);r.layers=this.layers,this.add(r);const s=new an(mr,gr,e,t);s.layers=this.layers,this.add(s);const a=new an(mr,gr,e,t);a.layers=this.layers,this.add(a);const o=new an(mr,gr,e,t);o.layers=this.layers,this.add(o);const l=new an(mr,gr,e,t);l.layers=this.layers,this.add(l);const c=new an(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ld extends $t{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r0 extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ld(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new bs(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Mi});s.uniforms.tEquirect.value=t;const a=new cn(r,s),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=qt),new i0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Ua=new z,s0=new z,o0=new Ve;class Hi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ua.subVectors(i,t).cross(s0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ua),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||o0.getNormalMatrix(e),r=this.coplanarPoint(Ua).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oi=new ys,$s=new z;class Wl{constructor(e=new Hi,t=new Hi,i=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ti){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],v=r[9],S=r[10],m=r[11],d=r[12],E=r[13],_=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,m-p,b-d).normalize(),i[1].setComponents(l+s,h+c,m+p,b+d).normalize(),i[2].setComponents(l+a,h+u,m+v,b+E).normalize(),i[3].setComponents(l-a,h-u,m-v,b-E).normalize(),i[4].setComponents(l-o,h-f,m-S,b-_).normalize(),t===ti)i[5].setComponents(l+o,h+f,m+S,b+_).normalize();else if(t===Eo)i[5].setComponents(o,f,S,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){return Oi.center.set(0,0,0),Oi.radius=.7071067811865476,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($s.x=r.normal.x>0?e.max.x:e.min.x,$s.y=r.normal.y>0?e.max.y:e.min.y,$s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function a0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=f.byteLength,v=n.createBuffer();n.bindBuffer(u,v),n.bufferData(u,f,h),c.onUploadCallback();let S;if(f instanceof Float32Array)S=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)S=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=n.SHORT;else if(f instanceof Uint32Array)S=n.UNSIGNED_INT;else if(f instanceof Int32Array)S=n.INT;else if(f instanceof Int8Array)S=n.BYTE;else if(f instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,u,f){const h=u.array,p=u._updateRange,v=u.updateRanges;if(n.bindBuffer(f,c),p.count===-1&&v.length===0&&n.bufferSubData(f,0,h),v.length!==0){for(let S=0,m=v.length;S<m;S++){const d=v[S];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class Ts extends dn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],v=[],S=[],m=[];for(let d=0;d<u;d++){const E=d*h-a;for(let _=0;_<c;_++){const b=_*f-s;v.push(b,-E,0),S.push(0,0,1),m.push(_/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){const _=E+c*d,b=E+c*(d+1),P=E+1+c*(d+1),R=E+1+c*d;p.push(_,b,R),p.push(b,P,R)}this.setIndex(p),this.setAttribute("position",new Sn(v,3)),this.setAttribute("normal",new Sn(S,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.widthSegments,e.heightSegments)}}var l0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
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
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
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
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,E0=`#ifdef USE_BUMPMAP
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
#endif`,y0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,L0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`
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
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,j0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,K0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ex=`uniform bool receiveShadow;
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
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ox=`PhysicalMaterial material;
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
#endif`,ax=`struct PhysicalMaterial {
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
}`,lx=`
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vx=`#if defined( USE_POINTS_UV )
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
#endif`,xx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yx=`#ifdef USE_MORPHNORMALS
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
#endif`,bx=`#ifdef USE_MORPHTARGETS
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
#endif`,Tx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Lx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jx=`float getShadowMask() {
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
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zx=`#ifdef USE_SKINNING
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
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nM=`#ifdef USE_TRANSMISSION
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
#endif`,iM=`#ifdef USE_TRANSMISSION
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
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cM=`uniform sampler2D t2D;
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`#include <common>
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
}`,mM=`#if DEPTH_PACKING == 3200
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
}`,gM=`#define DISTANCE
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
}`,_M=`#define DISTANCE
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
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`uniform float scale;
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
}`,SM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,yM=`uniform vec3 diffuse;
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
}`,bM=`#define LAMBERT
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
}`,TM=`#define LAMBERT
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
}`,AM=`#define MATCAP
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
}`,wM=`#define MATCAP
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
}`,RM=`#define NORMAL
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
}`,CM=`#define NORMAL
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
}`,PM=`#define PHONG
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
}`,LM=`#define PHONG
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
}`,DM=`#define STANDARD
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
}`,IM=`#define STANDARD
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
}`,UM=`#define TOON
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
}`,NM=`#define TOON
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
}`,OM=`uniform float size;
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
}`,FM=`uniform vec3 diffuse;
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
}`,BM=`#include <common>
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
}`,zM=`uniform vec3 color;
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
}`,HM=`uniform float rotation;
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
}`,GM=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:l0,alphahash_pars_fragment:c0,alphamap_fragment:u0,alphamap_pars_fragment:f0,alphatest_fragment:h0,alphatest_pars_fragment:d0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:_0,begin_vertex:v0,beginnormal_vertex:x0,bsdfs:M0,iridescence_fragment:S0,bumpmap_pars_fragment:E0,clipping_planes_fragment:y0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:A0,color_fragment:w0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:L0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:I0,displacementmap_pars_vertex:U0,displacementmap_vertex:N0,emissivemap_fragment:O0,emissivemap_pars_fragment:F0,colorspace_fragment:B0,colorspace_pars_fragment:z0,envmap_fragment:H0,envmap_common_pars_fragment:G0,envmap_pars_fragment:k0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:tx,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:q0,fog_fragment:j0,fog_pars_fragment:Y0,gradientmap_pars_fragment:$0,lightmap_fragment:K0,lightmap_pars_fragment:Z0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:Q0,lights_pars_begin:ex,lights_toon_fragment:nx,lights_toon_pars_fragment:ix,lights_phong_fragment:rx,lights_phong_pars_fragment:sx,lights_physical_fragment:ox,lights_physical_pars_fragment:ax,lights_fragment_begin:lx,lights_fragment_maps:cx,lights_fragment_end:ux,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:dx,logdepthbuf_vertex:px,map_fragment:mx,map_pars_fragment:gx,map_particle_fragment:_x,map_particle_pars_fragment:vx,metalnessmap_fragment:xx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Sx,morphcolor_vertex:Ex,morphnormal_vertex:yx,morphtarget_pars_vertex:bx,morphtarget_vertex:Tx,normal_fragment_begin:Ax,normal_fragment_maps:wx,normal_pars_fragment:Rx,normal_pars_vertex:Cx,normal_vertex:Px,normalmap_pars_fragment:Lx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Nx,opaque_fragment:Ox,packing:Fx,premultiplied_alpha_fragment:Bx,project_vertex:zx,dithering_fragment:Hx,dithering_pars_fragment:Gx,roughnessmap_fragment:kx,roughnessmap_pars_fragment:Vx,shadowmap_pars_fragment:Wx,shadowmap_pars_vertex:Xx,shadowmap_vertex:qx,shadowmask_pars_fragment:jx,skinbase_vertex:Yx,skinning_pars_vertex:$x,skinning_vertex:Kx,skinnormal_vertex:Zx,specularmap_fragment:Jx,specularmap_pars_fragment:Qx,tonemapping_fragment:eM,tonemapping_pars_fragment:tM,transmission_fragment:nM,transmission_pars_fragment:iM,uv_pars_fragment:rM,uv_pars_vertex:sM,uv_vertex:oM,worldpos_vertex:aM,background_vert:lM,background_frag:cM,backgroundCube_vert:uM,backgroundCube_frag:fM,cube_vert:hM,cube_frag:dM,depth_vert:pM,depth_frag:mM,distanceRGBA_vert:gM,distanceRGBA_frag:_M,equirect_vert:vM,equirect_frag:xM,linedashed_vert:MM,linedashed_frag:SM,meshbasic_vert:EM,meshbasic_frag:yM,meshlambert_vert:bM,meshlambert_frag:TM,meshmatcap_vert:AM,meshmatcap_frag:wM,meshnormal_vert:RM,meshnormal_frag:CM,meshphong_vert:PM,meshphong_frag:LM,meshphysical_vert:DM,meshphysical_frag:IM,meshtoon_vert:UM,meshtoon_frag:NM,points_vert:OM,points_frag:FM,shadow_vert:BM,shadow_frag:zM,sprite_vert:HM,sprite_frag:GM},ve={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Ln={basic:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Ft([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Ft([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Ft([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ke(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Ft([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Ft([ve.points,ve.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Ft([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Ft([ve.common,ve.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Ft([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Ft([ve.sprite,ve.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Ft([ve.common,ve.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Ft([ve.lights,ve.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Ln.physical={uniforms:Ft([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ks={r:0,b:0,g:0},Fi=new Fn,kM=new dt;function VM(n,e,t,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function v(m,d){let E=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?S(o,l):_&&_.isColor&&(S(_,1),E=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===zo)?(u===void 0&&(u=new cn(new bs(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:Or(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Fi.copy(d.backgroundRotation),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(Fi)),u.material.toneMapped=tt.getTransfer(_.colorSpace)!==lt,(f!==_||h!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new cn(new Ts(2,2),new Ti({name:"BackgroundMaterial",uniforms:Or(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=tt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function S(m,d){m.getRGB(Ks,Cd(n)),i.buffers.color.setClear(Ks.r,Ks.g,Ks.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,S(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(o,l)},render:v}}function WM(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(D,ne,W,ee,X){let ae=!1;if(a){const ce=S(ee,W,ne);c!==ce&&(c=ce,p(c.object)),ae=d(D,ee,W,X),ae&&E(D,ee,W,X)}else{const ce=ne.wireframe===!0;(c.geometry!==ee.id||c.program!==W.id||c.wireframe!==ce)&&(c.geometry=ee.id,c.program=W.id,c.wireframe=ce,ae=!0)}X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,N(D,ne,W,ee),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function v(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function S(D,ne,W){const ee=W.wireframe===!0;let X=o[D.id];X===void 0&&(X={},o[D.id]=X);let ae=X[ne.id];ae===void 0&&(ae={},X[ne.id]=ae);let ce=ae[ee];return ce===void 0&&(ce=m(h()),ae[ee]=ce),ce}function m(D){const ne=[],W=[],ee=[];for(let X=0;X<r;X++)ne[X]=0,W[X]=0,ee[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:W,attributeDivisors:ee,object:D,attributes:{},index:null}}function d(D,ne,W,ee){const X=c.attributes,ae=ne.attributes;let ce=0;const pe=W.getAttributes();for(const Se in pe)if(pe[Se].location>=0){const Z=X[Se];let fe=ae[Se];if(fe===void 0&&(Se==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),Se==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),Z===void 0||Z.attribute!==fe||fe&&Z.data!==fe.data)return!0;ce++}return c.attributesNum!==ce||c.index!==ee}function E(D,ne,W,ee){const X={},ae=ne.attributes;let ce=0;const pe=W.getAttributes();for(const Se in pe)if(pe[Se].location>=0){let Z=ae[Se];Z===void 0&&(Se==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),Se==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const fe={};fe.attribute=Z,Z&&Z.data&&(fe.data=Z.data),X[Se]=fe,ce++}c.attributes=X,c.attributesNum=ce,c.index=ee}function _(){const D=c.newAttributes;for(let ne=0,W=D.length;ne<W;ne++)D[ne]=0}function b(D){P(D,0)}function P(D,ne){const W=c.newAttributes,ee=c.enabledAttributes,X=c.attributeDivisors;W[D]=1,ee[D]===0&&(n.enableVertexAttribArray(D),ee[D]=1),X[D]!==ne&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,ne),X[D]=ne)}function R(){const D=c.newAttributes,ne=c.enabledAttributes;for(let W=0,ee=ne.length;W<ee;W++)ne[W]!==D[W]&&(n.disableVertexAttribArray(W),ne[W]=0)}function w(D,ne,W,ee,X,ae,ce){ce===!0?n.vertexAttribIPointer(D,ne,W,X,ae):n.vertexAttribPointer(D,ne,W,ee,X,ae)}function N(D,ne,W,ee){if(i.isWebGL2===!1&&(D.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const X=ee.attributes,ae=W.getAttributes(),ce=ne.defaultAttributeValues;for(const pe in ae){const Se=ae[pe];if(Se.location>=0){let Ue=X[pe];if(Ue===void 0&&(pe==="instanceMatrix"&&D.instanceMatrix&&(Ue=D.instanceMatrix),pe==="instanceColor"&&D.instanceColor&&(Ue=D.instanceColor)),Ue!==void 0){const Z=Ue.normalized,fe=Ue.itemSize,Me=t.get(Ue);if(Me===void 0)continue;const H=Me.buffer,se=Me.type,te=Me.bytesPerElement,ge=i.isWebGL2===!0&&(se===n.INT||se===n.UNSIGNED_INT||Ue.gpuType===hd);if(Ue.isInterleavedBufferAttribute){const xe=Ue.data,g=xe.stride,C=Ue.offset;if(xe.isInstancedInterleavedBuffer){for(let L=0;L<Se.locationSize;L++)P(Se.location+L,xe.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let L=0;L<Se.locationSize;L++)b(Se.location+L);n.bindBuffer(n.ARRAY_BUFFER,H);for(let L=0;L<Se.locationSize;L++)w(Se.location+L,fe/Se.locationSize,se,Z,g*te,(C+fe/Se.locationSize*L)*te,ge)}else{if(Ue.isInstancedBufferAttribute){for(let xe=0;xe<Se.locationSize;xe++)P(Se.location+xe,Ue.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let xe=0;xe<Se.locationSize;xe++)b(Se.location+xe);n.bindBuffer(n.ARRAY_BUFFER,H);for(let xe=0;xe<Se.locationSize;xe++)w(Se.location+xe,fe/Se.locationSize,se,Z,fe*te,fe/Se.locationSize*xe*te,ge)}}else if(ce!==void 0){const Z=ce[pe];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(Se.location,Z);break;case 3:n.vertexAttrib3fv(Se.location,Z);break;case 4:n.vertexAttrib4fv(Se.location,Z);break;default:n.vertexAttrib1fv(Se.location,Z)}}}}R()}function V(){O();for(const D in o){const ne=o[D];for(const W in ne){const ee=ne[W];for(const X in ee)v(ee[X].object),delete ee[X];delete ne[W]}delete o[D]}}function M(D){if(o[D.id]===void 0)return;const ne=o[D.id];for(const W in ne){const ee=ne[W];for(const X in ee)v(ee[X].object),delete ee[X];delete ne[W]}delete o[D.id]}function A(D){for(const ne in o){const W=o[ne];if(W[D.id]===void 0)continue;const ee=W[D.id];for(const X in ee)v(ee[X].object),delete ee[X];delete W[D.id]}}function O(){K(),u=!0,c!==l&&(c=l,p(c.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:K,dispose:V,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:b,disableUnusedAttributes:R}}function XM(n,e,t,i){const r=i.isWebGL2;let s;function a(u){s=u}function o(u,f){n.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let p,v;if(r)p=n,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(u[v],f[v]);else{p.multiDrawArraysWEBGL(s,u,0,f,0,h);let v=0;for(let S=0;S<h;S++)v+=f[S];t.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function qM(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,b=a||e.has("OES_texture_float"),P=_&&b,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:P,maxSamples:R}}function jM(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Hi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const E=s?0:i,_=E*4;let b=d.clippingState||null;l.value=b,b=u(v,h,_,p);for(let P=0;P!==_;++P)b[P]=t[P];d.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,v){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const d=p+S*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,b=p;_!==S;++_,b+=4)a.copy(f[_]).applyMatrix4(E,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function YM(n){let e=new WeakMap;function t(a,o){return o===al?a.mapping=Ir:o===ll&&(a.mapping=Ur),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===al||o===ll)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new r0(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Id extends Pd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,tf=[.125,.215,.35,.446,.526,.582],Wi=20,Na=new Id,nf=new Ke;let Oa=null,Fa=0,Ba=0;const Gi=(1+Math.sqrt(5))/2,_r=1/Gi,rf=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Gi,_r),new z(0,Gi,-_r),new z(_r,0,Gi),new z(-_r,0,Gi),new z(Gi,_r,0),new z(-Gi,_r,0)];class sf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=af(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Fa,Ba),e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:ds,format:xn,colorSpace:Ai,depthBuffer:!1},r=of(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$M(s)),this._blurMaterial=KM(s,e,t)}return r}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,i,r){const o=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(nf),u.toneMapping=Si,u.autoClear=!1;const p=new bo({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),v=new cn(new bs,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(nf),S=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const _=this._cubeSize;Zs(r,E*_,d>2?_:0,_,_),u.setRenderTarget(r),S&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ir||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=af());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Zs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Na)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=rf[(r-1)%rf.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new cn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Wi-1),S=s/v,m=isFinite(s)?1+Math.floor(u*S):Wi;m>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wi}`);const d=[];let E=0;for(let w=0;w<Wi;++w){const N=w/S,V=Math.exp(-N*N/2);d.push(V),w===0?E+=V:w<m&&(E+=2*V)}for(let w=0;w<d.length;w++)d[w]=d[w]/E;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-i;const b=this._sizeLods[r],P=3*b*(r>_-Sr?r-_+Sr:0),R=4*(this._cubeSize-b);Zs(t,P,R,3*b,2*b),l.setRenderTarget(t),l.render(f,Na)}}function $M(n){const e=[],t=[],i=[];let r=n;const s=n-Sr+1+tf.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Sr?l=tf[a-n+Sr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,v=6,S=3,m=2,d=1,E=new Float32Array(S*v*p),_=new Float32Array(m*v*p),b=new Float32Array(d*v*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,N=R>2?0:-1,V=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];E.set(V,S*v*R),_.set(h,m*v*R);const M=[R,R,R,R,R,R];b.set(M,d*v*R)}const P=new dn;P.setAttribute("position",new hn(E,S)),P.setAttribute("uv",new hn(_,m)),P.setAttribute("faceIndex",new hn(b,d)),e.push(P),r>Sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function of(n,e,t){const i=new Ji(n,e,t);return i.texture.mapping=zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function KM(n,e,t){const i=new Float32Array(Wi),r=new z(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function af(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function lf(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Xl(){return`

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
	`}function ZM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===al||l===ll,u=l===Ir||l===Ur;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new sf(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new sf(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function JM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function QM(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const S=h.morphAttributes[v];for(let m=0,d=S.length;m<d;m++)e.remove(S[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const S=p[v];for(let m=0,d=S.length;m<d;m++)e.update(S[m],n.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let S=0;if(p!==null){const E=p.array;S=p.version;for(let _=0,b=E.length;_<b;_+=3){const P=E[_+0],R=E[_+1],w=E[_+2];h.push(P,R,R,w,w,P)}}else if(v!==void 0){const E=v.array;S=v.version;for(let _=0,b=E.length/3-1;_<b;_+=3){const P=_+0,R=_+1,w=_+2;h.push(P,R,R,w,w,P)}}else return;const m=new(Sd(h)?Rd:wd)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function eS(n,e,t,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function u(p,v){n.drawElements(s,v,o,p*l),t.update(v,s,1)}function f(p,v,S){if(S===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,v,o,p*l,S),t.update(v,s,S)}function h(p,v,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<S;d++)this.render(p[d]/l,v[d]);else{m.multiDrawElementsWEBGL(s,v,0,o,p,0,S);let d=0;for(let E=0;E<S;E++)d+=v[E];t.update(d,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function tS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function nS(n,e){return n[0]-e[0]}function iS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function rS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new At,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,S=v!==void 0?v.length:0;let m=s.get(u);if(m===void 0||m.count!==S){let K=function(){A.dispose(),s.delete(u),u.removeEventListener("dispose",K)};var p=K;m!==void 0&&m.texture.dispose();const d=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,_=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let w=0;d===!0&&(w=1),E===!0&&(w=2),_===!0&&(w=3);let N=u.attributes.position.count*w,V=1;N>e.maxTextureSize&&(V=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const M=new Float32Array(N*V*4*S),A=new bd(M,N,V,S);A.type=Qn,A.needsUpdate=!0;const O=w*4;for(let D=0;D<S;D++){const ne=b[D],W=P[D],ee=R[D],X=N*V*4*D;for(let ae=0;ae<ne.count;ae++){const ce=ae*O;d===!0&&(a.fromBufferAttribute(ne,ae),M[X+ce+0]=a.x,M[X+ce+1]=a.y,M[X+ce+2]=a.z,M[X+ce+3]=0),E===!0&&(a.fromBufferAttribute(W,ae),M[X+ce+4]=a.x,M[X+ce+5]=a.y,M[X+ce+6]=a.z,M[X+ce+7]=0),_===!0&&(a.fromBufferAttribute(ee,ae),M[X+ce+8]=a.x,M[X+ce+9]=a.y,M[X+ce+10]=a.z,M[X+ce+11]=ee.itemSize===4?a.w:1)}}m={count:S,texture:A,size:new je(N,V)},s.set(u,m),u.addEventListener("dispose",K)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let d=0;for(let _=0;_<h.length;_++)d+=h[_];const E=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",E),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let S=i[u.id];if(S===void 0||S.length!==v){S=[];for(let b=0;b<v;b++)S[b]=[b,0];i[u.id]=S}for(let b=0;b<v;b++){const P=S[b];P[0]=b,P[1]=h[b]}S.sort(iS);for(let b=0;b<8;b++)b<v&&S[b][1]?(o[b][0]=S[b][0],o[b][1]=S[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(nS);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let E=0;for(let b=0;b<8;b++){const P=o[b],R=P[0],w=P[1];R!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+b)!==m[R]&&u.setAttribute("morphTarget"+b,m[R]),d&&u.getAttribute("morphNormal"+b)!==d[R]&&u.setAttribute("morphNormal"+b,d[R]),r[b]=w,E+=w):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),d&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const _=u.morphTargetsRelative?1:1-E;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function sS(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Ud extends $t{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:Zi,u!==Zi&&u!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zi&&(i=xi),i===void 0&&u===Nr&&(i=Ki),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:zt,this.minFilter=l!==void 0?l:zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Nd=new $t,Od=new Ud(1,1);Od.compareFunction=Md;const Fd=new bd,Bd=new Gv,zd=new Ld,cf=[],uf=[],ff=new Float32Array(16),hf=new Float32Array(9),df=new Float32Array(4);function Br(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=cf[r];if(s===void 0&&(s=new Float32Array(r),cf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Go(n,e){let t=uf[e];t===void 0&&(t=new Int32Array(e),uf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function oS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function aS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function lS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function cS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function uS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;df.set(i),n.uniformMatrix2fv(this.addr,!1,df),Et(t,i)}}function fS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;hf.set(i),n.uniformMatrix3fv(this.addr,!1,hf),Et(t,i)}}function hS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,i))return;ff.set(i),n.uniformMatrix4fv(this.addr,!1,ff),Et(t,i)}}function dS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function pS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function mS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function gS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function _S(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function MS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function SS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?Od:Nd;t.setTexture2D(e||s,r)}function ES(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bd,r)}function yS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||zd,r)}function bS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Fd,r)}function TS(n){switch(n){case 5126:return oS;case 35664:return aS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return fS;case 35676:return hS;case 5124:case 35670:return dS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return gS;case 5125:return _S;case 36294:return vS;case 36295:return xS;case 36296:return MS;case 35678:case 36198:case 36298:case 36306:case 35682:return SS;case 35679:case 36299:case 36307:return ES;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return bS}}function AS(n,e){n.uniform1fv(this.addr,e)}function wS(n,e){const t=Br(e,this.size,2);n.uniform2fv(this.addr,t)}function RS(n,e){const t=Br(e,this.size,3);n.uniform3fv(this.addr,t)}function CS(n,e){const t=Br(e,this.size,4);n.uniform4fv(this.addr,t)}function PS(n,e){const t=Br(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function LS(n,e){const t=Br(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function DS(n,e){const t=Br(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IS(n,e){n.uniform1iv(this.addr,e)}function US(n,e){n.uniform2iv(this.addr,e)}function NS(n,e){n.uniform3iv(this.addr,e)}function OS(n,e){n.uniform4iv(this.addr,e)}function FS(n,e){n.uniform1uiv(this.addr,e)}function BS(n,e){n.uniform2uiv(this.addr,e)}function zS(n,e){n.uniform3uiv(this.addr,e)}function HS(n,e){n.uniform4uiv(this.addr,e)}function GS(n,e,t){const i=this.cache,r=e.length,s=Go(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Nd,s[a])}function kS(n,e,t){const i=this.cache,r=e.length,s=Go(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bd,s[a])}function VS(n,e,t){const i=this.cache,r=e.length,s=Go(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||zd,s[a])}function WS(n,e,t){const i=this.cache,r=e.length,s=Go(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Fd,s[a])}function XS(n){switch(n){case 5126:return AS;case 35664:return wS;case 35665:return RS;case 35666:return CS;case 35674:return PS;case 35675:return LS;case 35676:return DS;case 5124:case 35670:return IS;case 35667:case 35671:return US;case 35668:case 35672:return NS;case 35669:case 35673:return OS;case 5125:return FS;case 36294:return BS;case 36295:return zS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return GS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return WS}}class qS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=TS(t.type)}}class jS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XS(t.type)}}class YS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const za=/(\w+)(\])?(\[|\.)?/g;function pf(n,e){n.seq.push(e),n.map[e.id]=e}function $S(n,e,t){const i=n.name,r=i.length;for(za.lastIndex=0;;){const s=za.exec(i),a=za.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){pf(t,c===void 0?new qS(o,n,e):new jS(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new YS(o),pf(t,f)),t=f}}}class lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);$S(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function mf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const KS=37297;let ZS=0;function JS(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function QS(n){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(n);let i;switch(e===t?i="":e===So&&t===Mo?i="LinearDisplayP3ToLinearSRGB":e===Mo&&t===So&&(i="LinearSRGBToLinearDisplayP3"),n){case Ai:case Ho:return[i,"LinearTransferOETF"];case _n:case kl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function gf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+JS(n.getShaderSource(e),a)}else return r}function eE(n,e){const t=QS(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function tE(n,e){let t;switch(e){case uv:t="Linear";break;case fv:t="Reinhard";break;case hv:t="OptimizedCineon";break;case ud:t="ACESFilmic";break;case pv:t="AgX";break;case mv:t="Neutral";break;case dv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function nE(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Er).join(`
`)}function iE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function rE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Er(n){return n!==""}function _f(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oE=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(n){return n.replace(oE,lE)}const aE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lE(n,e){let t=ke[e];if(t===void 0){const i=aE.get(e);if(i!==void 0)t=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pl(t)}const cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xf(n){return n.replace(cE,uE)}function uE(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function fE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ld?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===B_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function hE(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ir:case Ur:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dE(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function pE(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cd:e="ENVMAP_BLENDING_MULTIPLY";break;case lv:e="ENVMAP_BLENDING_MIX";break;case cv:e="ENVMAP_BLENDING_ADD";break}return e}function mE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gE(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fE(t),c=hE(t),u=dE(t),f=pE(t),h=mE(t),p=t.isWebGL2?"":nE(t),v=iE(t),S=rE(s),m=r.createProgram();let d,E,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Er).join(`
`),d.length>0&&(d+=`
`),E=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Er).join(`
`),E.length>0&&(E+=`
`)):(d=[Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),E=[p,Mf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?ke.tonemapping_pars_fragment:"",t.toneMapping!==Si?tE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,eE("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),a=pl(a),a=_f(a,t),a=vf(a,t),o=pl(o),o=_f(o,t),o=vf(o,t),a=xf(a),o=xf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const b=_+d+a,P=_+E+o,R=mf(r,r.VERTEX_SHADER,b),w=mf(r,r.FRAGMENT_SHADER,P);r.attachShader(m,R),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function N(O){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(R).trim(),ne=r.getShaderInfoLog(w).trim();let W=!0,ee=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,R,w);else{const X=gf(r,R,"vertex"),ae=gf(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+K+`
`+X+`
`+ae)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(D===""||ne==="")&&(ee=!1);ee&&(O.diagnostics={runnable:W,programLog:K,vertexShader:{log:D,prefix:d},fragmentShader:{log:ne,prefix:E}})}r.deleteShader(R),r.deleteShader(w),V=new lo(r,m),M=sE(r,m)}let V;this.getUniforms=function(){return V===void 0&&N(this),V};let M;this.getAttributes=function(){return M===void 0&&N(this),M};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(m,KS)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZS++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=w,this}let _E=0;class vE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xE(e),t.set(e,i)),i}}class xE{constructor(e){this.id=_E++,this.code=e,this.usedTimes=0}}function ME(n,e,t,i,r,s,a){const o=new Td,l=new vE,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,A,O,K,D){const ne=K.fog,W=D.geometry,ee=M.isMeshStandardMaterial?K.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||ee),ae=X&&X.mapping===zo?X.image.height:null,ce=S[M.type];M.precision!==null&&(v=r.getMaxPrecision(M.precision),v!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",v,"instead."));const pe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Se=pe!==void 0?pe.length:0;let Ue=0;W.morphAttributes.position!==void 0&&(Ue=1),W.morphAttributes.normal!==void 0&&(Ue=2),W.morphAttributes.color!==void 0&&(Ue=3);let Z,fe,Me,H;if(ce){const st=Ln[ce];Z=st.vertexShader,fe=st.fragmentShader}else Z=M.vertexShader,fe=M.fragmentShader,l.update(M),Me=l.getVertexShaderID(M),H=l.getFragmentShaderID(M);const se=n.getRenderTarget(),te=D.isInstancedMesh===!0,ge=D.isBatchedMesh===!0,xe=!!M.map,g=!!M.matcap,C=!!X,L=!!M.aoMap,G=!!M.lightMap,k=!!M.bumpMap,q=!!M.normalMap,le=!!M.displacementMap,oe=!!M.emissiveMap,ue=!!M.metalnessMap,y=!!M.roughnessMap,x=M.anisotropy>0,I=M.clearcoat>0,F=M.iridescence>0,Q=M.sheen>0,ie=M.transmission>0,Te=x&&!!M.anisotropyMap,Ee=I&&!!M.clearcoatMap,de=I&&!!M.clearcoatNormalMap,me=I&&!!M.clearcoatRoughnessMap,Le=F&&!!M.iridescenceMap,he=F&&!!M.iridescenceThicknessMap,rt=Q&&!!M.sheenColorMap,He=Q&&!!M.sheenRoughnessMap,Re=!!M.specularMap,Ae=!!M.specularColorMap,Ce=!!M.specularIntensityMap,qe=ie&&!!M.transmissionMap,Be=ie&&!!M.thicknessMap,ut=!!M.gradientMap,U=!!M.alphaMap,ye=M.alphaTest>0,Y=!!M.alphaHash,_e=!!M.extensions;let be=Si;M.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(be=n.toneMapping);const Ye={isWebGL2:f,shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:Z,fragmentShader:fe,defines:M.defines,customVertexShaderID:Me,customFragmentShaderID:H,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:v,batching:ge,instancing:te,instancingColor:te&&D.instanceColor!==null,instancingMorph:te&&D.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Ai,alphaToCoverage:!!M.alphaToCoverage,map:xe,matcap:g,envMap:C,envMapMode:C&&X.mapping,envMapCubeUVHeight:ae,aoMap:L,lightMap:G,bumpMap:k,normalMap:q,displacementMap:p&&le,emissiveMap:oe,normalMapObjectSpace:q&&M.normalMapType===Av,normalMapTangentSpace:q&&M.normalMapType===xd,metalnessMap:ue,roughnessMap:y,anisotropy:x,anisotropyMap:Te,clearcoat:I,clearcoatMap:Ee,clearcoatNormalMap:de,clearcoatRoughnessMap:me,iridescence:F,iridescenceMap:Le,iridescenceThicknessMap:he,sheen:Q,sheenColorMap:rt,sheenRoughnessMap:He,specularMap:Re,specularColorMap:Ae,specularIntensityMap:Ce,transmission:ie,transmissionMap:qe,thicknessMap:Be,gradientMap:ut,opaque:M.transparent===!1&&M.blending===Rr&&M.alphaToCoverage===!1,alphaMap:U,alphaTest:ye,alphaHash:Y,combine:M.combine,mapUv:xe&&m(M.map.channel),aoMapUv:L&&m(M.aoMap.channel),lightMapUv:G&&m(M.lightMap.channel),bumpMapUv:k&&m(M.bumpMap.channel),normalMapUv:q&&m(M.normalMap.channel),displacementMapUv:le&&m(M.displacementMap.channel),emissiveMapUv:oe&&m(M.emissiveMap.channel),metalnessMapUv:ue&&m(M.metalnessMap.channel),roughnessMapUv:y&&m(M.roughnessMap.channel),anisotropyMapUv:Te&&m(M.anisotropyMap.channel),clearcoatMapUv:Ee&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:He&&m(M.sheenRoughnessMap.channel),specularMapUv:Re&&m(M.specularMap.channel),specularColorMapUv:Ae&&m(M.specularColorMap.channel),specularIntensityMapUv:Ce&&m(M.specularIntensityMap.channel),transmissionMapUv:qe&&m(M.transmissionMap.channel),thicknessMapUv:Be&&m(M.thicknessMap.channel),alphaMapUv:U&&m(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(q||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!W.attributes.uv&&(xe||U),fog:!!ne,useFog:M.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ue,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:be,useLegacyLights:n._useLegacyLights,decodeVideoTexture:xe&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Jn,flipSided:M.side===Yt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:_e&&M.extensions.derivatives===!0,extensionFragDepth:_e&&M.extensions.fragDepth===!0,extensionDrawBuffers:_e&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:_e&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:_e&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_e&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function E(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const O in M.defines)A.push(O),A.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(_(A,M),b(A,M),A.push(n.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function _(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function b(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.instancingMorph&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.normalMapObjectSpace&&o.enable(7),A.normalMapTangentSpace&&o.enable(8),A.clearcoat&&o.enable(9),A.iridescence&&o.enable(10),A.alphaTest&&o.enable(11),A.vertexColors&&o.enable(12),A.vertexAlphas&&o.enable(13),A.vertexUv1s&&o.enable(14),A.vertexUv2s&&o.enable(15),A.vertexUv3s&&o.enable(16),A.vertexTangents&&o.enable(17),A.anisotropy&&o.enable(18),A.alphaHash&&o.enable(19),A.batching&&o.enable(20),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),M.push(o.mask)}function P(M){const A=S[M.type];let O;if(A){const K=Ln[A];O=e0.clone(K.uniforms)}else O=M.uniforms;return O}function R(M,A){let O;for(let K=0,D=u.length;K<D;K++){const ne=u[K];if(ne.cacheKey===A){O=ne,++O.usedTimes;break}}return O===void 0&&(O=new gE(n,A,M,s),u.push(O)),O}function w(M){if(--M.usedTimes===0){const A=u.indexOf(M);u[A]=u[u.length-1],u.pop(),M.destroy()}}function N(M){l.remove(M)}function V(){l.dispose()}return{getParameters:d,getProgramCacheKey:E,getUniforms:P,acquireProgram:R,releaseProgram:w,releaseShaderCache:N,programs:u,dispose:V}}function SE(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function EE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Sf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ef(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,v,S,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:S,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function o(f,h,p,v,S,m){const d=a(f,h,p,v,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,S,m){const d=a(f,h,p,v,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||EE),i.length>1&&i.sort(h||Sf),r.length>1&&r.sort(h||Sf)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function yE(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ef,n.set(i,[a])):r>=s.length?(a=new Ef,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function bE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ke};break;case"SpotLight":t={position:new z,direction:new z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function TE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AE=0;function wE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RE(n,e){const t=new bE,i=TE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,a=new dt,o=new dt;function l(u,f){let h=0,p=0,v=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let S=0,m=0,d=0,E=0,_=0,b=0,P=0,R=0,w=0,N=0,V=0;u.sort(wE);const M=f===!0?Math.PI:1;for(let O=0,K=u.length;O<K;O++){const D=u[O],ne=D.color,W=D.intensity,ee=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=ne.r*W*M,p+=ne.g*W*M,v+=ne.b*W*M;else if(D.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(D.sh.coefficients[ae],W);V++}else if(D.isDirectionalLight){const ae=t.get(D);if(ae.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const ce=D.shadow,pe=i.get(D);pe.shadowBias=ce.bias,pe.shadowNormalBias=ce.normalBias,pe.shadowRadius=ce.radius,pe.shadowMapSize=ce.mapSize,r.directionalShadow[S]=pe,r.directionalShadowMap[S]=X,r.directionalShadowMatrix[S]=D.shadow.matrix,b++}r.directional[S]=ae,S++}else if(D.isSpotLight){const ae=t.get(D);ae.position.setFromMatrixPosition(D.matrixWorld),ae.color.copy(ne).multiplyScalar(W*M),ae.distance=ee,ae.coneCos=Math.cos(D.angle),ae.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),ae.decay=D.decay,r.spot[d]=ae;const ce=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,ce.updateMatrices(D),D.castShadow&&N++),r.spotLightMatrix[d]=ce.matrix,D.castShadow){const pe=i.get(D);pe.shadowBias=ce.bias,pe.shadowNormalBias=ce.normalBias,pe.shadowRadius=ce.radius,pe.shadowMapSize=ce.mapSize,r.spotShadow[d]=pe,r.spotShadowMap[d]=X,R++}d++}else if(D.isRectAreaLight){const ae=t.get(D);ae.color.copy(ne).multiplyScalar(W),ae.halfWidth.set(D.width*.5,0,0),ae.halfHeight.set(0,D.height*.5,0),r.rectArea[E]=ae,E++}else if(D.isPointLight){const ae=t.get(D);if(ae.color.copy(D.color).multiplyScalar(D.intensity*M),ae.distance=D.distance,ae.decay=D.decay,D.castShadow){const ce=D.shadow,pe=i.get(D);pe.shadowBias=ce.bias,pe.shadowNormalBias=ce.normalBias,pe.shadowRadius=ce.radius,pe.shadowMapSize=ce.mapSize,pe.shadowCameraNear=ce.camera.near,pe.shadowCameraFar=ce.camera.far,r.pointShadow[m]=pe,r.pointShadowMap[m]=X,r.pointShadowMatrix[m]=D.shadow.matrix,P++}r.point[m]=ae,m++}else if(D.isHemisphereLight){const ae=t.get(D);ae.skyColor.copy(D.color).multiplyScalar(W*M),ae.groundColor.copy(D.groundColor).multiplyScalar(W*M),r.hemi[_]=ae,_++}}E>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_FLOAT_1,r.rectAreaLTC2=ve.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ve.LTC_HALF_1,r.rectAreaLTC2=ve.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const A=r.hash;(A.directionalLength!==S||A.pointLength!==m||A.spotLength!==d||A.rectAreaLength!==E||A.hemiLength!==_||A.numDirectionalShadows!==b||A.numPointShadows!==P||A.numSpotShadows!==R||A.numSpotMaps!==w||A.numLightProbes!==V)&&(r.directional.length=S,r.spot.length=d,r.rectArea.length=E,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=V,A.directionalLength=S,A.pointLength=m,A.spotLength=d,A.rectAreaLength=E,A.hemiLength=_,A.numDirectionalShadows=b,A.numPointShadows=P,A.numSpotShadows=R,A.numSpotMaps=w,A.numLightProbes=V,r.version=AE++)}function c(u,f){let h=0,p=0,v=0,S=0,m=0;const d=f.matrixWorldInverse;for(let E=0,_=u.length;E<_;E++){const b=u[E];if(b.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),h++}else if(b.isSpotLight){const P=r.spot[v];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),v++}else if(b.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(b.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),S++}else if(b.isPointLight){const P=r.point[p];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const P=r.hemi[m];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function yf(n,e){const t=new RE(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function CE(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new yf(n,e),t.set(s,[l])):a>=o.length?(l=new yf(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class PE extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LE extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IE=`uniform sampler2D shadow_pass;
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
}`;function UE(n,e,t){let i=new Wl;const r=new je,s=new je,a=new At,o=new PE({depthPacking:Tv}),l=new LE,c={},u=t.maxTextureSize,f={[bi]:Yt,[Yt]:bi,[Jn]:Jn},h=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:DE,fragmentShader:IE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new dn;v.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new cn(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ld;let d=this.type;this.render=function(R,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const V=n.getRenderTarget(),M=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Mi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const K=d!==jn&&this.type===jn,D=d===jn&&this.type!==jn;for(let ne=0,W=R.length;ne<W;ne++){const ee=R[ne],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ae=X.getFrameExtents();if(r.multiply(ae),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ae.x),r.x=s.x*ae.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ae.y),r.y=s.y*ae.y,X.mapSize.y=s.y)),X.map===null||K===!0||D===!0){const pe=this.type!==jn?{minFilter:zt,magFilter:zt}:{};X.map!==null&&X.map.dispose(),X.map=new Ji(r.x,r.y,pe),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const ce=X.getViewportCount();for(let pe=0;pe<ce;pe++){const Se=X.getViewport(pe);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),O.viewport(a),X.updateMatrices(ee,pe),i=X.getFrustum(),b(w,N,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===jn&&E(X,N),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(V,M,A)};function E(R,w){const N=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ji(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,N,h,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,N,p,S,null)}function _(R,w,N,V){let M=null;const A=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)M=A;else if(M=N.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=M.uuid,K=w.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let ne=D[K];ne===void 0&&(ne=M.clone(),D[K]=ne,w.addEventListener("dispose",P)),M=ne}if(M.visible=w.visible,M.wireframe=w.wireframe,V===jn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=n.properties.get(M);O.light=N}return M}function b(R,w,N,V,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===jn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const K=e.update(R),D=R.material;if(Array.isArray(D)){const ne=K.groups;for(let W=0,ee=ne.length;W<ee;W++){const X=ne[W],ae=D[X.materialIndex];if(ae&&ae.visible){const ce=_(R,ae,V,M);R.onBeforeShadow(n,R,w,N,K,ce,X),n.renderBufferDirect(N,null,K,ce,R,X),R.onAfterShadow(n,R,w,N,K,ce,X)}}}else if(D.visible){const ne=_(R,D,V,M);R.onBeforeShadow(n,R,w,N,K,ne,null),n.renderBufferDirect(N,null,K,ne,R,null),R.onAfterShadow(n,R,w,N,K,ne,null)}}const O=R.children;for(let K=0,D=O.length;K<D;K++)b(O[K],w,N,V,M)}function P(R){R.target.removeEventListener("dispose",P);for(const N in c){const V=c[N],M=R.target.uuid;M in V&&(V[M].dispose(),delete V[M])}}}function NE(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const ye=new At;let Y=null;const _e=new At(0,0,0,0);return{setMask:function(be){Y!==be&&!U&&(n.colorMask(be,be,be,be),Y=be)},setLocked:function(be){U=be},setClear:function(be,Ye,st,Rt,tn){tn===!0&&(be*=Rt,Ye*=Rt,st*=Rt),ye.set(be,Ye,st,Rt),_e.equals(ye)===!1&&(n.clearColor(be,Ye,st,Rt),_e.copy(ye))},reset:function(){U=!1,Y=null,_e.set(-1,0,0,0)}}}function s(){let U=!1,ye=null,Y=null,_e=null;return{setTest:function(be){be?te(n.DEPTH_TEST):ge(n.DEPTH_TEST)},setMask:function(be){ye!==be&&!U&&(n.depthMask(be),ye=be)},setFunc:function(be){if(Y!==be){switch(be){case tv:n.depthFunc(n.NEVER);break;case nv:n.depthFunc(n.ALWAYS);break;case iv:n.depthFunc(n.LESS);break;case vo:n.depthFunc(n.LEQUAL);break;case rv:n.depthFunc(n.EQUAL);break;case sv:n.depthFunc(n.GEQUAL);break;case ov:n.depthFunc(n.GREATER);break;case av:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=be}},setLocked:function(be){U=be},setClear:function(be){_e!==be&&(n.clearDepth(be),_e=be)},reset:function(){U=!1,ye=null,Y=null,_e=null}}}function a(){let U=!1,ye=null,Y=null,_e=null,be=null,Ye=null,st=null,Rt=null,tn=null;return{setTest:function(ot){U||(ot?te(n.STENCIL_TEST):ge(n.STENCIL_TEST))},setMask:function(ot){ye!==ot&&!U&&(n.stencilMask(ot),ye=ot)},setFunc:function(ot,Nt,Tn){(Y!==ot||_e!==Nt||be!==Tn)&&(n.stencilFunc(ot,Nt,Tn),Y=ot,_e=Nt,be=Tn)},setOp:function(ot,Nt,Tn){(Ye!==ot||st!==Nt||Rt!==Tn)&&(n.stencilOp(ot,Nt,Tn),Ye=ot,st=Nt,Rt=Tn)},setLocked:function(ot){U=ot},setClear:function(ot){tn!==ot&&(n.clearStencil(ot),tn=ot)},reset:function(){U=!1,ye=null,Y=null,_e=null,be=null,Ye=null,st=null,Rt=null,tn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,S=[],m=null,d=!1,E=null,_=null,b=null,P=null,R=null,w=null,N=null,V=new Ke(0,0,0),M=0,A=!1,O=null,K=null,D=null,ne=null,W=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ae=0;const ce=n.getParameter(n.VERSION);ce.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ce)[1]),X=ae>=1):ce.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),X=ae>=2);let pe=null,Se={};const Ue=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),fe=new At().fromArray(Ue),Me=new At().fromArray(Z);function H(U,ye,Y,_e){const be=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(U,Ye),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<Y;st++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ye,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(ye+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Ye}const se={};se[n.TEXTURE_2D]=H(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=H(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[n.TEXTURE_2D_ARRAY]=H(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=H(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),te(n.DEPTH_TEST),l.setFunc(vo),le(!1),oe(tu),te(n.CULL_FACE),k(Mi);function te(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function ge(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function xe(U,ye){return p[U]!==ye?(n.bindFramebuffer(U,ye),p[U]=ye,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ye),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ye)),!0):!1}function g(U,ye){let Y=S,_e=!1;if(U){Y=v.get(ye),Y===void 0&&(Y=[],v.set(ye,Y));const be=U.textures;if(Y.length!==be.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,st=be.length;Ye<st;Ye++)Y[Ye]=n.COLOR_ATTACHMENT0+Ye;Y.length=be.length,_e=!0}}else Y[0]!==n.BACK&&(Y[0]=n.BACK,_e=!0);if(_e)if(t.isWebGL2)n.drawBuffers(Y);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function C(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const L={[Vi]:n.FUNC_ADD,[H_]:n.FUNC_SUBTRACT,[G_]:n.FUNC_REVERSE_SUBTRACT};if(i)L[su]=n.MIN,L[ou]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(L[su]=U.MIN_EXT,L[ou]=U.MAX_EXT)}const G={[k_]:n.ZERO,[V_]:n.ONE,[W_]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[K_]:n.SRC_ALPHA_SATURATE,[Y_]:n.DST_COLOR,[q_]:n.DST_ALPHA,[X_]:n.ONE_MINUS_SRC_COLOR,[ol]:n.ONE_MINUS_SRC_ALPHA,[$_]:n.ONE_MINUS_DST_COLOR,[j_]:n.ONE_MINUS_DST_ALPHA,[Z_]:n.CONSTANT_COLOR,[J_]:n.ONE_MINUS_CONSTANT_COLOR,[Q_]:n.CONSTANT_ALPHA,[ev]:n.ONE_MINUS_CONSTANT_ALPHA};function k(U,ye,Y,_e,be,Ye,st,Rt,tn,ot){if(U===Mi){d===!0&&(ge(n.BLEND),d=!1);return}if(d===!1&&(te(n.BLEND),d=!0),U!==z_){if(U!==E||ot!==A){if((_!==Vi||R!==Vi)&&(n.blendEquation(n.FUNC_ADD),_=Vi,R=Vi),ot)switch(U){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.ONE,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case iu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,P=null,w=null,N=null,V.set(0,0,0),M=0,E=U,A=ot}return}be=be||ye,Ye=Ye||Y,st=st||_e,(ye!==_||be!==R)&&(n.blendEquationSeparate(L[ye],L[be]),_=ye,R=be),(Y!==b||_e!==P||Ye!==w||st!==N)&&(n.blendFuncSeparate(G[Y],G[_e],G[Ye],G[st]),b=Y,P=_e,w=Ye,N=st),(Rt.equals(V)===!1||tn!==M)&&(n.blendColor(Rt.r,Rt.g,Rt.b,tn),V.copy(Rt),M=tn),E=U,A=!1}function q(U,ye){U.side===Jn?ge(n.CULL_FACE):te(n.CULL_FACE);let Y=U.side===Yt;ye&&(Y=!Y),le(Y),U.blending===Rr&&U.transparent===!1?k(Mi):k(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),o.setMask(U.colorWrite);const _e=U.stencilWrite;c.setTest(_e),_e&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),y(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):ge(n.SAMPLE_ALPHA_TO_COVERAGE)}function le(U){O!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),O=U)}function oe(U){U!==O_?(te(n.CULL_FACE),U!==K&&(U===tu?n.cullFace(n.BACK):U===F_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ge(n.CULL_FACE),K=U}function ue(U){U!==D&&(X&&n.lineWidth(U),D=U)}function y(U,ye,Y){U?(te(n.POLYGON_OFFSET_FILL),(ne!==ye||W!==Y)&&(n.polygonOffset(ye,Y),ne=ye,W=Y)):ge(n.POLYGON_OFFSET_FILL)}function x(U){U?te(n.SCISSOR_TEST):ge(n.SCISSOR_TEST)}function I(U){U===void 0&&(U=n.TEXTURE0+ee-1),pe!==U&&(n.activeTexture(U),pe=U)}function F(U,ye,Y){Y===void 0&&(pe===null?Y=n.TEXTURE0+ee-1:Y=pe);let _e=Se[Y];_e===void 0&&(_e={type:void 0,texture:void 0},Se[Y]=_e),(_e.type!==U||_e.texture!==ye)&&(pe!==Y&&(n.activeTexture(Y),pe=Y),n.bindTexture(U,ye||se[U]),_e.type=U,_e.texture=ye)}function Q(){const U=Se[pe];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function He(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(U){fe.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),fe.copy(U))}function Ce(U){Me.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Me.copy(U))}function qe(U,ye){let Y=f.get(ye);Y===void 0&&(Y=new WeakMap,f.set(ye,Y));let _e=Y.get(U);_e===void 0&&(_e=n.getUniformBlockIndex(ye,U.name),Y.set(U,_e))}function Be(U,ye){const _e=f.get(ye).get(U);u.get(ye)!==_e&&(n.uniformBlockBinding(ye,_e,U.__bindingPointIndex),u.set(ye,_e))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},pe=null,Se={},p={},v=new WeakMap,S=[],m=null,d=!1,E=null,_=null,b=null,P=null,R=null,w=null,N=null,V=new Ke(0,0,0),M=0,A=!1,O=null,K=null,D=null,ne=null,W=null,fe.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:te,disable:ge,bindFramebuffer:xe,drawBuffers:g,useProgram:C,setBlending:k,setMaterial:q,setFlipSided:le,setCullFace:oe,setLineWidth:ue,setPolygonOffset:y,setScissorTest:x,activeTexture:I,bindTexture:F,unbindTexture:Q,compressedTexImage2D:ie,compressedTexImage3D:Te,texImage2D:He,texImage3D:Re,updateUBOMapping:qe,uniformBlockBinding:Be,texStorage2D:he,texStorage3D:rt,texSubImage2D:Ee,texSubImage3D:de,compressedTexSubImage2D:me,compressedTexSubImage3D:Le,scissor:Ae,viewport:Ce,reset:ut}}function OE(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new je,f=new WeakMap;let h;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(y,x){return v?new OffscreenCanvas(y,x):yo("canvas")}function m(y,x,I,F){let Q=1;const ie=ue(y);if((ie.width>F||ie.height>F)&&(Q=F/Math.max(ie.width,ie.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const Te=x?dl:Math.floor,Ee=Te(Q*ie.width),de=Te(Q*ie.height);h===void 0&&(h=S(Ee,de));const me=I?S(Ee,de):h;return me.width=Ee,me.height=de,me.getContext("2d").drawImage(y,0,0,Ee,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Ee+"x"+de+")."),me}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),y;return y}function d(y){const x=ue(y);return Ou(x.width)&&Ou(x.height)}function E(y){return o?!1:y.wrapS!==vn||y.wrapT!==vn||y.minFilter!==zt&&y.minFilter!==qt}function _(y,x){return y.generateMipmaps&&x&&y.minFilter!==zt&&y.minFilter!==qt}function b(y){n.generateMipmap(y)}function P(y,x,I,F,Q=!1){if(o===!1)return x;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ie=x;if(x===n.RED&&(I===n.FLOAT&&(ie=n.R32F),I===n.HALF_FLOAT&&(ie=n.R16F),I===n.UNSIGNED_BYTE&&(ie=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(ie=n.R8UI),I===n.UNSIGNED_SHORT&&(ie=n.R16UI),I===n.UNSIGNED_INT&&(ie=n.R32UI),I===n.BYTE&&(ie=n.R8I),I===n.SHORT&&(ie=n.R16I),I===n.INT&&(ie=n.R32I)),x===n.RG&&(I===n.FLOAT&&(ie=n.RG32F),I===n.HALF_FLOAT&&(ie=n.RG16F),I===n.UNSIGNED_BYTE&&(ie=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(ie=n.RG8UI),I===n.UNSIGNED_SHORT&&(ie=n.RG16UI),I===n.UNSIGNED_INT&&(ie=n.RG32UI),I===n.BYTE&&(ie=n.RG8I),I===n.SHORT&&(ie=n.RG16I),I===n.INT&&(ie=n.RG32I)),x===n.RGBA){const Te=Q?xo:tt.getTransfer(F);I===n.FLOAT&&(ie=n.RGBA32F),I===n.HALF_FLOAT&&(ie=n.RGBA16F),I===n.UNSIGNED_BYTE&&(ie=Te===lt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(y,x,I){return _(y,I)===!0||y.isFramebufferTexture&&y.minFilter!==zt&&y.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function w(y){return y===zt||y===au||y===Wr?n.NEAREST:n.LINEAR}function N(y){const x=y.target;x.removeEventListener("dispose",N),M(x),x.isVideoTexture&&f.delete(x)}function V(y){const x=y.target;x.removeEventListener("dispose",V),O(x)}function M(y){const x=i.get(y);if(x.__webglInit===void 0)return;const I=y.source,F=p.get(I);if(F){const Q=F[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(y),Object.keys(F).length===0&&p.delete(I)}i.remove(y)}function A(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const I=y.source,F=p.get(I);delete F[x.__cacheKey],a.memory.textures--}function O(y){const x=i.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(x.__webglFramebuffer[F]))for(let Q=0;Q<x.__webglFramebuffer[F].length;Q++)n.deleteFramebuffer(x.__webglFramebuffer[F][Q]);else n.deleteFramebuffer(x.__webglFramebuffer[F]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[F])}else{if(Array.isArray(x.__webglFramebuffer))for(let F=0;F<x.__webglFramebuffer.length;F++)n.deleteFramebuffer(x.__webglFramebuffer[F]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let F=0;F<x.__webglColorRenderbuffer.length;F++)x.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[F]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=y.textures;for(let F=0,Q=I.length;F<Q;F++){const ie=i.get(I[F]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(I[F])}i.remove(y)}let K=0;function D(){K=0}function ne(){const y=K;return y>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+r.maxTextures),K+=1,y}function W(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function ee(y,x){const I=i.get(y);if(y.isVideoTexture&&le(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const F=y.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(I,y,x);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function X(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){Me(I,y,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function ae(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){Me(I,y,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function ce(y,x){const I=i.get(y);if(y.version>0&&I.__version!==y.version){H(I,y,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const pe={[cl]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[ul]:n.MIRRORED_REPEAT},Se={[zt]:n.NEAREST,[au]:n.NEAREST_MIPMAP_NEAREST,[Wr]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[la]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},Ue={[wv]:n.NEVER,[Iv]:n.ALWAYS,[Rv]:n.LESS,[Md]:n.LEQUAL,[Cv]:n.EQUAL,[Dv]:n.GEQUAL,[Pv]:n.GREATER,[Lv]:n.NOTEQUAL};function Z(y,x,I){if(x.type===Qn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===qt||x.magFilter===la||x.magFilter===Wr||x.magFilter===ji||x.minFilter===qt||x.minFilter===la||x.minFilter===Wr||x.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),I?(n.texParameteri(y,n.TEXTURE_WRAP_S,pe[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,pe[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,pe[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,Se[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,Se[x.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==vn||x.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,w(x.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==zt&&x.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===zt||x.minFilter!==Wr&&x.minFilter!==ji||x.type===Qn&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===ds&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function fe(y,x){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",N));const F=x.source;let Q=p.get(F);Q===void 0&&(Q={},p.set(F,Q));const ie=W(x);if(ie!==y.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Q[ie].usedTimes++;const Te=Q[y.__cacheKey];Te!==void 0&&(Q[y.__cacheKey].usedTimes--,Te.usedTimes===0&&A(x)),y.__cacheKey=ie,y.__webglTexture=Q[ie].texture}return I}function Me(y,x,I){let F=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(F=n.TEXTURE_3D);const Q=fe(y,x),ie=x.source;t.bindTexture(F,y.__webglTexture,n.TEXTURE0+I);const Te=i.get(ie);if(ie.version!==Te.__version||Q===!0){t.activeTexture(n.TEXTURE0+I);const Ee=tt.getPrimaries(tt.workingColorSpace),de=x.colorSpace===vi?null:tt.getPrimaries(x.colorSpace),me=x.colorSpace===vi||Ee===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Le=E(x)&&d(x.image)===!1;let he=m(x.image,Le,!1,r.maxTextureSize);he=oe(x,he);const rt=d(he)||o,He=s.convert(x.format,x.colorSpace);let Re=s.convert(x.type),Ae=P(x.internalFormat,He,Re,x.colorSpace,x.isVideoTexture);Z(F,x,rt);let Ce;const qe=x.mipmaps,Be=o&&x.isVideoTexture!==!0&&Ae!==vd,ut=Te.__version===void 0||Q===!0,U=ie.dataReady,ye=R(x,he,rt);if(x.isDepthTexture)Ae=n.DEPTH_COMPONENT,o?x.type===Qn?Ae=n.DEPTH_COMPONENT32F:x.type===xi?Ae=n.DEPTH_COMPONENT24:x.type===Ki?Ae=n.DEPTH24_STENCIL8:Ae=n.DEPTH_COMPONENT16:x.type===Qn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Zi&&Ae===n.DEPTH_COMPONENT&&x.type!==Gl&&x.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=xi,Re=s.convert(x.type)),x.format===Nr&&Ae===n.DEPTH_COMPONENT&&(Ae=n.DEPTH_STENCIL,x.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ki,Re=s.convert(x.type))),ut&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Ae,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,Ae,he.width,he.height,0,He,Re,null));else if(x.isDataTexture)if(qe.length>0&&rt){Be&&ut&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,qe[0].width,qe[0].height);for(let Y=0,_e=qe.length;Y<_e;Y++)Ce=qe[Y],Be?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ce.width,Ce.height,He,Re,Ce.data):t.texImage2D(n.TEXTURE_2D,Y,Ae,Ce.width,Ce.height,0,He,Re,Ce.data);x.generateMipmaps=!1}else Be?(ut&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,he.width,he.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,He,Re,he.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,he.width,he.height,0,He,Re,he.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Be&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,qe[0].width,qe[0].height,he.depth);for(let Y=0,_e=qe.length;Y<_e;Y++)Ce=qe[Y],x.format!==xn?He!==null?Be?U&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ce.width,Ce.height,he.depth,He,Ce.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Ae,Ce.width,Ce.height,he.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,Ce.width,Ce.height,he.depth,He,Re,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Ae,Ce.width,Ce.height,he.depth,0,He,Re,Ce.data)}else{Be&&ut&&t.texStorage2D(n.TEXTURE_2D,ye,Ae,qe[0].width,qe[0].height);for(let Y=0,_e=qe.length;Y<_e;Y++)Ce=qe[Y],x.format!==xn?He!==null?Be?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,Ce.width,Ce.height,He,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Ae,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ce.width,Ce.height,He,Re,Ce.data):t.texImage2D(n.TEXTURE_2D,Y,Ae,Ce.width,Ce.height,0,He,Re,Ce.data)}else if(x.isDataArrayTexture)Be?(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ae,he.width,he.height,he.depth),U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,He,Re,he.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,he.width,he.height,he.depth,0,He,Re,he.data);else if(x.isData3DTexture)Be?(ut&&t.texStorage3D(n.TEXTURE_3D,ye,Ae,he.width,he.height,he.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,He,Re,he.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,he.width,he.height,he.depth,0,He,Re,he.data);else if(x.isFramebufferTexture){if(ut)if(Be)t.texStorage2D(n.TEXTURE_2D,ye,Ae,he.width,he.height);else{let Y=he.width,_e=he.height;for(let be=0;be<ye;be++)t.texImage2D(n.TEXTURE_2D,be,Ae,Y,_e,0,He,Re,null),Y>>=1,_e>>=1}}else if(qe.length>0&&rt){if(Be&&ut){const Y=ue(qe[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ae,Y.width,Y.height)}for(let Y=0,_e=qe.length;Y<_e;Y++)Ce=qe[Y],Be?U&&t.texSubImage2D(n.TEXTURE_2D,Y,0,0,He,Re,Ce):t.texImage2D(n.TEXTURE_2D,Y,Ae,He,Re,Ce);x.generateMipmaps=!1}else if(Be){if(ut){const Y=ue(he);t.texStorage2D(n.TEXTURE_2D,ye,Ae,Y.width,Y.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,Re,he)}else t.texImage2D(n.TEXTURE_2D,0,Ae,He,Re,he);_(x,rt)&&b(F),Te.__version=ie.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function H(y,x,I){if(x.image.length!==6)return;const F=fe(y,x),Q=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const ie=i.get(Q);if(Q.version!==ie.__version||F===!0){t.activeTexture(n.TEXTURE0+I);const Te=tt.getPrimaries(tt.workingColorSpace),Ee=x.colorSpace===vi?null:tt.getPrimaries(x.colorSpace),de=x.colorSpace===vi||Te===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const me=x.isCompressedTexture||x.image[0].isCompressedTexture,Le=x.image[0]&&x.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!me&&!Le?he[Y]=m(x.image[Y],!1,!0,r.maxCubemapSize):he[Y]=Le?x.image[Y].image:x.image[Y],he[Y]=oe(x,he[Y]);const rt=he[0],He=d(rt)||o,Re=s.convert(x.format,x.colorSpace),Ae=s.convert(x.type),Ce=P(x.internalFormat,Re,Ae,x.colorSpace),qe=o&&x.isVideoTexture!==!0,Be=ie.__version===void 0||F===!0,ut=Q.dataReady;let U=R(x,rt,He);Z(n.TEXTURE_CUBE_MAP,x,He);let ye;if(me){qe&&Be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Ce,rt.width,rt.height);for(let Y=0;Y<6;Y++){ye=he[Y].mipmaps;for(let _e=0;_e<ye.length;_e++){const be=ye[_e];x.format!==xn?Re!==null?qe?ut&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,be.width,be.height,Re,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Ce,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,0,0,be.width,be.height,Re,Ae,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e,Ce,be.width,be.height,0,Re,Ae,be.data)}}}else{if(ye=x.mipmaps,qe&&Be){ye.length>0&&U++;const Y=ue(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Ce,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Le){qe?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,he[Y].width,he[Y].height,Re,Ae,he[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ce,he[Y].width,he[Y].height,0,Re,Ae,he[Y].data);for(let _e=0;_e<ye.length;_e++){const Ye=ye[_e].image[Y].image;qe?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,Ye.width,Ye.height,Re,Ae,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Ce,Ye.width,Ye.height,0,Re,Ae,Ye.data)}}else{qe?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Re,Ae,he[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ce,Re,Ae,he[Y]);for(let _e=0;_e<ye.length;_e++){const be=ye[_e];qe?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,0,0,Re,Ae,be.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_e+1,Ce,Re,Ae,be.image[Y])}}}_(x,He)&&b(n.TEXTURE_CUBE_MAP),ie.__version=Q.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function se(y,x,I,F,Q,ie){const Te=s.convert(I.format,I.colorSpace),Ee=s.convert(I.type),de=P(I.internalFormat,Te,Ee,I.colorSpace);if(!i.get(x).__hasExternalTextures){const Le=Math.max(1,x.width>>ie),he=Math.max(1,x.height>>ie);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,de,Le,he,x.depth,0,Te,Ee,null):t.texImage2D(Q,ie,de,Le,he,0,Te,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),q(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,Q,i.get(I).__webglTexture,0,k(x)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,Q,i.get(I).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(y,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer&&!x.stencilBuffer){let F=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(I||q(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Qn?F=n.DEPTH_COMPONENT32F:Q.type===xi&&(F=n.DEPTH_COMPONENT24));const ie=k(x);q(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,F,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,F,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,F,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(x.depthBuffer&&x.stencilBuffer){const F=k(x);I&&q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,F,n.DEPTH24_STENCIL8,x.width,x.height):q(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const F=x.textures;for(let Q=0;Q<F.length;Q++){const ie=F[Q],Te=s.convert(ie.format,ie.colorSpace),Ee=s.convert(ie.type),de=P(ie.internalFormat,Te,Ee,ie.colorSpace),me=k(x);I&&q(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,de,x.width,x.height):q(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,de,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,de,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ge(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ee(x.depthTexture,0);const F=i.get(x.depthTexture).__webglTexture,Q=k(x);if(x.depthTexture.format===Zi)q(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,F,0);else if(x.depthTexture.format===Nr)q(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function xe(y){const x=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ge(x.__webglFramebuffer,y)}else if(I){x.__webglDepthbuffer=[];for(let F=0;F<6;F++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[F]),x.__webglDepthbuffer[F]=n.createRenderbuffer(),te(x.__webglDepthbuffer[F],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),te(x.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function g(y,x,I){const F=i.get(y);x!==void 0&&se(F.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&xe(y)}function C(y){const x=y.texture,I=i.get(y),F=i.get(x);y.addEventListener("dispose",V);const Q=y.textures,ie=y.isWebGLCubeRenderTarget===!0,Te=Q.length>1,Ee=d(y)||o;if(Te||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=x.version,a.memory.textures++),ie){I.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[de]=[];for(let me=0;me<x.mipmaps.length;me++)I.__webglFramebuffer[de][me]=n.createFramebuffer()}else I.__webglFramebuffer[de]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)I.__webglFramebuffer[de]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(Te)if(r.drawBuffers)for(let de=0,me=Q.length;de<me;de++){const Le=i.get(Q[de]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&q(y)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let de=0;de<Q.length;de++){const me=Q[de];I.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[de]);const Le=s.convert(me.format,me.colorSpace),he=s.convert(me.type),rt=P(me.internalFormat,Le,he,me.colorSpace,y.isXRRenderTarget===!0),He=k(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,rt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,I.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),te(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),Z(n.TEXTURE_CUBE_MAP,x,Ee);for(let de=0;de<6;de++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)se(I.__webglFramebuffer[de][me],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,me);else se(I.__webglFramebuffer[de],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);_(x,Ee)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let de=0,me=Q.length;de<me;de++){const Le=Q[de],he=i.get(Le);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),Z(n.TEXTURE_2D,Le,Ee),se(I.__webglFramebuffer,y,Le,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),_(Le,Ee)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?de=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(de,F.__webglTexture),Z(de,x,Ee),o&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)se(I.__webglFramebuffer[me],y,x,n.COLOR_ATTACHMENT0,de,me);else se(I.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,de,0);_(x,Ee)&&b(de),t.unbindTexture()}y.depthBuffer&&xe(y)}function L(y){const x=d(y)||o,I=y.textures;for(let F=0,Q=I.length;F<Q;F++){const ie=I[F];if(_(ie,x)){const Te=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(ie).__webglTexture;t.bindTexture(Te,Ee),b(Te),t.unbindTexture()}}}function G(y){if(o&&y.samples>0&&q(y)===!1){const x=y.textures,I=y.width,F=y.height;let Q=n.COLOR_BUFFER_BIT;const ie=[],Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(y),de=x.length>1;if(de)for(let me=0;me<x.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<x.length;me++){ie.push(n.COLOR_ATTACHMENT0+me),y.depthBuffer&&ie.push(Te);const Le=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Le===!1&&(y.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]),Le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Te])),de){const he=i.get(x[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,he,0)}n.blitFramebuffer(0,0,I,F,0,0,I,F,Q,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let me=0;me<x.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Le=i.get(x[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function k(y){return Math.min(r.maxSamples,y.samples)}function q(y){const x=i.get(y);return o&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(y){const x=a.render.frame;f.get(y)!==x&&(f.set(y,x),y.update())}function oe(y,x){const I=y.colorSpace,F=y.format,Q=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===fl||I!==Ai&&I!==vi&&(tt.getTransfer(I)===lt?o===!1?e.has("EXT_sRGB")===!0&&F===xn?(y.format=fl,y.minFilter=qt,y.generateMipmaps=!1):x=Ed.sRGBToLinear(x):(F!==xn||Q!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function ue(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(u.width=y.naturalWidth||y.width,u.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(u.width=y.displayWidth,u.height=y.displayHeight):(u.width=y.width,u.height=y.height),u}this.allocateTextureUnit=ne,this.resetTextureUnits=D,this.setTexture2D=ee,this.setTexture2DArray=X,this.setTexture3D=ae,this.setTextureCube=ce,this.rebindTextures=g,this.setupRenderTarget=C,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=q}function FE(n,e,t){const i=t.isWebGL2;function r(s,a=vi){let o;const l=tt.getTransfer(a);if(s===Ei)return n.UNSIGNED_BYTE;if(s===dd)return n.UNSIGNED_SHORT_4_4_4_4;if(s===pd)return n.UNSIGNED_SHORT_5_5_5_1;if(s===gv)return n.BYTE;if(s===_v)return n.SHORT;if(s===Gl)return n.UNSIGNED_SHORT;if(s===hd)return n.INT;if(s===xi)return n.UNSIGNED_INT;if(s===Qn)return n.FLOAT;if(s===ds)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===vv)return n.ALPHA;if(s===xn)return n.RGBA;if(s===xv)return n.LUMINANCE;if(s===Mv)return n.LUMINANCE_ALPHA;if(s===Zi)return n.DEPTH_COMPONENT;if(s===Nr)return n.DEPTH_STENCIL;if(s===fl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Sv)return n.RED;if(s===md)return n.RED_INTEGER;if(s===Ev)return n.RG;if(s===gd)return n.RG_INTEGER;if(s===_d)return n.RGBA_INTEGER;if(s===ca||s===ua||s===fa||s===ha)if(l===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ca)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ua)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ca)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ua)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ha)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===lu||s===cu||s===uu||s===fu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===lu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===uu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===fu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===hu||s===du)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===hu)return l===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===du)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===pu||s===mu||s===gu||s===_u||s===vu||s===xu||s===Mu||s===Su||s===Eu||s===yu||s===bu||s===Tu||s===Au||s===wu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===pu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===gu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===_u)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===vu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Su)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Eu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Tu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Au)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wu)return l===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===da||s===Ru||s===Cu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===da)return l===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ru)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Cu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===yv||s===Pu||s===Lu||s===Du)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===da)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Pu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Du)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ki?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class BE extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Js extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zE={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zE)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const HE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GE=`
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

}`;class kE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new $t,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Ti({extensions:{fragDepth:!0},vertexShader:HE,fragmentShader:GE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new cn(new Ts(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class VE extends Fr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,v=null;const S=new kE,m=t.getContextAttributes();let d=null,E=null;const _=[],b=[],P=new je;let R=null;const w=new an;w.layers.enable(1),w.viewport=new At;const N=new an;N.layers.enable(2),N.viewport=new At;const V=[w,N],M=new BE;M.layers.enable(1),M.layers.enable(2);let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let fe=_[Z];return fe===void 0&&(fe=new Ha,_[Z]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(Z){let fe=_[Z];return fe===void 0&&(fe=new Ha,_[Z]=fe),fe.getGripSpace()},this.getHand=function(Z){let fe=_[Z];return fe===void 0&&(fe=new Ha,_[Z]=fe),fe.getHandSpace()};function K(Z){const fe=b.indexOf(Z.inputSource);if(fe===-1)return;const Me=_[fe];Me!==void 0&&(Me.update(Z.inputSource,Z.frame,c||a),Me.dispatchEvent({type:Z.type,data:Z.inputSource}))}function D(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",ne);for(let Z=0;Z<_.length;Z++){const fe=b[Z];fe!==null&&(b[Z]=null,_[Z].disconnect(fe))}A=null,O=null,S.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,E=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",D),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Ji(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,Me=null,H=null;m.depth&&(H=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Nr:Zi,Me=m.stencil?Ki:xi);const se={colorFormat:t.RGBA8,depthFormat:H,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new Ji(h.textureWidth,h.textureHeight,{format:xn,type:Ei,depthTexture:new Ud(h.textureWidth,h.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const te=e.properties.get(E);te.__ignoreDepthValues=h.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function ne(Z){for(let fe=0;fe<Z.removed.length;fe++){const Me=Z.removed[fe],H=b.indexOf(Me);H>=0&&(b[H]=null,_[H].disconnect(Me))}for(let fe=0;fe<Z.added.length;fe++){const Me=Z.added[fe];let H=b.indexOf(Me);if(H===-1){for(let te=0;te<_.length;te++)if(te>=b.length){b.push(Me),H=te;break}else if(b[te]===null){b[te]=Me,H=te;break}if(H===-1)break}const se=_[H];se&&se.connect(Me)}}const W=new z,ee=new z;function X(Z,fe,Me){W.setFromMatrixPosition(fe.matrixWorld),ee.setFromMatrixPosition(Me.matrixWorld);const H=W.distanceTo(ee),se=fe.projectionMatrix.elements,te=Me.projectionMatrix.elements,ge=se[14]/(se[10]-1),xe=se[14]/(se[10]+1),g=(se[9]+1)/se[5],C=(se[9]-1)/se[5],L=(se[8]-1)/se[0],G=(te[8]+1)/te[0],k=ge*L,q=ge*G,le=H/(-L+G),oe=le*-L;fe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(oe),Z.translateZ(le),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const ue=ge+le,y=xe+le,x=k-oe,I=q+(H-oe),F=g*xe/y*ue,Q=C*xe/y*ue;Z.projectionMatrix.makePerspective(x,I,F,Q,ue,y),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function ae(Z,fe){fe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(fe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;S.texture!==null&&(Z.near=S.depthNear,Z.far=S.depthFar),M.near=N.near=w.near=Z.near,M.far=N.far=w.far=Z.far,(A!==M.near||O!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,O=M.far,w.near=A,w.far=O,N.near=A,N.far=O,w.updateProjectionMatrix(),N.updateProjectionMatrix(),Z.updateProjectionMatrix());const fe=Z.parent,Me=M.cameras;ae(M,fe);for(let H=0;H<Me.length;H++)ae(Me[H],fe);Me.length===2?X(M,w,N):M.projectionMatrix.copy(w.projectionMatrix),ce(Z,M,fe)};function ce(Z,fe,Me){Me===null?Z.matrix.copy(fe.matrixWorld):(Z.matrix.copy(Me.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(fe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(fe.projectionMatrix),Z.projectionMatrixInverse.copy(fe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=hl*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Z){l=Z,h!==null&&(h.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return S.texture!==null};let pe=null;function Se(Z,fe){if(u=fe.getViewerPose(c||a),v=fe,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let H=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,H=!0);for(let te=0;te<Me.length;te++){const ge=Me[te];let xe=null;if(p!==null)xe=p.getViewport(ge);else{const C=f.getViewSubImage(h,ge);xe=C.viewport,te===0&&(e.setRenderTargetTextures(E,C.colorTexture,h.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(E))}let g=V[te];g===void 0&&(g=new an,g.layers.enable(te),g.viewport=new At,V[te]=g),g.matrix.fromArray(ge.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.projectionMatrix.fromArray(ge.projectionMatrix),g.projectionMatrixInverse.copy(g.projectionMatrix).invert(),g.viewport.set(xe.x,xe.y,xe.width,xe.height),te===0&&(M.matrix.copy(g.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),H===!0&&M.cameras.push(g)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const te=f.getDepthInformation(Me[0]);te&&te.isValid&&te.texture&&S.init(e,te,r.renderState)}}for(let Me=0;Me<_.length;Me++){const H=b[Me],se=_[Me];H!==null&&se!==void 0&&se.update(H,fe,c||a)}S.render(e,M),pe&&pe(Z,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),v=null}const Ue=new Dd;Ue.setAnimationLoop(Se),this.setAnimationLoop=function(Z){pe=Z},this.dispose=function(){}}}const Bi=new Fn,WE=new dt;function XE(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Cd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,_,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,E,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Yt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Yt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=e.get(d),_=E.envMap,b=E.envMapRotation;if(_&&(m.envMap.value=_,Bi.copy(b),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(WE.makeRotationFromEuler(Bi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*P,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Yt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const E=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qE(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,_){const b=_.program;i.uniformBlockBinding(E,b)}function c(E,_){let b=r[E.id];b===void 0&&(v(E),b=u(E),r[E.id]=b,E.addEventListener("dispose",m));const P=_.program;i.updateUBOMapping(E,P);const R=e.render.frame;s[E.id]!==R&&(h(E),s[E.id]=R)}function u(E){const _=f();E.__bindingPointIndex=_;const b=n.createBuffer(),P=E.__size,R=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,b),b}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const _=r[E.id],b=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let R=0,w=b.length;R<w;R++){const N=Array.isArray(b[R])?b[R]:[b[R]];for(let V=0,M=N.length;V<M;V++){const A=N[V];if(p(A,R,V,P)===!0){const O=A.__offset,K=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let ne=0;ne<K.length;ne++){const W=K[ne],ee=S(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,O+D,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,D),D+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(E,_,b,P){const R=E.value,w=_+"_"+b;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const N=P[w];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return P[w]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function v(E){const _=E.uniforms;let b=0;const P=16;for(let w=0,N=_.length;w<N;w++){const V=Array.isArray(_[w])?_[w]:[_[w]];for(let M=0,A=V.length;M<A;M++){const O=V[M],K=Array.isArray(O.value)?O.value:[O.value];for(let D=0,ne=K.length;D<ne;D++){const W=K[D],ee=S(W),X=b%P;X!==0&&P-X<ee.boundary&&(b+=P-X),O.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=b,b+=ee.storage}}}const R=b%P;return R>0&&(b+=P-R),E.__size=b,E.__cache={},this}function S(E){const _={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function m(E){const _=E.target;_.removeEventListener("dispose",m);const b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const E in r)n.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Hd{constructor(e={}){const{canvas:t=Nv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),v=new Int32Array(4);let S=null,m=null;const d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this._useLegacyLights=!1,this.toneMapping=Si,this.toneMappingExposure=1;const _=this;let b=!1,P=0,R=0,w=null,N=-1,V=null;const M=new At,A=new At;let O=null;const K=new Ke(0);let D=0,ne=t.width,W=t.height,ee=1,X=null,ae=null;const ce=new At(0,0,ne,W),pe=new At(0,0,ne,W);let Se=!1;const Ue=new Wl;let Z=!1,fe=!1,Me=null;const H=new dt,se=new je,te=new z,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return w===null?ee:1}let g=i;function C(T,B){for(let $=0;$<T.length;$++){const J=T[$],j=t.getContext(J,B);if(j!==null)return j}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hl}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",ye,!1),g===null){const B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),g=C(B,T),g===null)throw C(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&g instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),g.getShaderPrecisionFormat===void 0&&(g.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let L,G,k,q,le,oe,ue,y,x,I,F,Q,ie,Te,Ee,de,me,Le,he,rt,He,Re,Ae,Ce;function qe(){L=new JM(g),G=new qM(g,L,e),L.init(G),Re=new FE(g,L,G),k=new NE(g,L,G),q=new tS(g),le=new SE,oe=new OE(g,L,k,le,G,Re,q),ue=new YM(_),y=new ZM(_),x=new a0(g,G),Ae=new WM(g,L,x,G),I=new QM(g,x,q,Ae),F=new sS(g,I,x,q),he=new rS(g,G,oe),de=new jM(le),Q=new ME(_,ue,y,L,G,Ae,de),ie=new XE(_,le),Te=new yE,Ee=new CE(L,G),Le=new VM(_,ue,y,k,F,h,l),me=new UE(_,F,G),Ce=new qE(g,q,G,k),rt=new XM(g,L,q,G),He=new eS(g,L,q,G),q.programs=Q.programs,_.capabilities=G,_.extensions=L,_.properties=le,_.renderLists=Te,_.shadowMap=me,_.state=k,_.info=q}qe();const Be=new VE(_,g);this.xr=Be,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const T=L.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=L.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(ne,W,!1))},this.getSize=function(T){return T.set(ne,W)},this.setSize=function(T,B,$=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=T,W=B,t.width=Math.floor(T*ee),t.height=Math.floor(B*ee),$===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(ne*ee,W*ee).floor()},this.setDrawingBufferSize=function(T,B,$){ne=T,W=B,ee=$,t.width=Math.floor(T*$),t.height=Math.floor(B*$),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(ce)},this.setViewport=function(T,B,$,J){T.isVector4?ce.set(T.x,T.y,T.z,T.w):ce.set(T,B,$,J),k.viewport(M.copy(ce).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,B,$,J){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,B,$,J),k.scissor(A.copy(pe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){k.setScissorTest(Se=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){ae=T},this.getClearColor=function(T){return T.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(T=!0,B=!0,$=!0){let J=0;if(T){let j=!1;if(w!==null){const we=w.texture.format;j=we===_d||we===gd||we===md}if(j){const we=w.texture.type,Pe=we===Ei||we===xi||we===Gl||we===Ki||we===dd||we===pd,Ie=Le.getClearColor(),Ne=Le.getClearAlpha(),We=Ie.r,Fe=Ie.g,ze=Ie.b;Pe?(p[0]=We,p[1]=Fe,p[2]=ze,p[3]=Ne,g.clearBufferuiv(g.COLOR,0,p)):(v[0]=We,v[1]=Fe,v[2]=ze,v[3]=Ne,g.clearBufferiv(g.COLOR,0,v))}else J|=g.COLOR_BUFFER_BIT}B&&(J|=g.DEPTH_BUFFER_BIT),$&&(J|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Te.dispose(),Ee.dispose(),le.dispose(),ue.dispose(),y.dispose(),F.dispose(),Ae.dispose(),Ce.dispose(),Q.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",tn),Be.removeEventListener("sessionend",ot),Me&&(Me.dispose(),Me=null),Nt.stop()};function ut(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=q.autoReset,B=me.enabled,$=me.autoUpdate,J=me.needsUpdate,j=me.type;qe(),q.autoReset=T,me.enabled=B,me.autoUpdate=$,me.needsUpdate=J,me.type=j}function ye(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Y(T){const B=T.target;B.removeEventListener("dispose",Y),_e(B)}function _e(T){be(T),le.remove(T)}function be(T){const B=le.get(T).programs;B!==void 0&&(B.forEach(function($){Q.releaseProgram($)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,$,J,j,we){B===null&&(B=ge);const Pe=j.isMesh&&j.matrixWorld.determinant()<0,Ie=qd(T,B,$,J,j);k.setMaterial(J,Pe);let Ne=$.index,We=1;if(J.wireframe===!0){if(Ne=I.getWireframeAttribute($),Ne===void 0)return;We=2}const Fe=$.drawRange,ze=$.attributes.position;let gt=Fe.start*We,Kt=(Fe.start+Fe.count)*We;we!==null&&(gt=Math.max(gt,we.start*We),Kt=Math.min(Kt,(we.start+we.count)*We)),Ne!==null?(gt=Math.max(gt,0),Kt=Math.min(Kt,Ne.count)):ze!=null&&(gt=Math.max(gt,0),Kt=Math.min(Kt,ze.count));const yt=Kt-gt;if(yt<0||yt===1/0)return;Ae.setup(j,J,Ie,$,Ne);let Bn,ht=rt;if(Ne!==null&&(Bn=x.get(Ne),ht=He,ht.setIndex(Bn)),j.isMesh)J.wireframe===!0?(k.setLineWidth(J.wireframeLinewidth*xe()),ht.setMode(g.LINES)):ht.setMode(g.TRIANGLES);else if(j.isLine){let Ge=J.linewidth;Ge===void 0&&(Ge=1),k.setLineWidth(Ge*xe()),j.isLineSegments?ht.setMode(g.LINES):j.isLineLoop?ht.setMode(g.LINE_LOOP):ht.setMode(g.LINE_STRIP)}else j.isPoints?ht.setMode(g.POINTS):j.isSprite&&ht.setMode(g.TRIANGLES);if(j.isBatchedMesh)ht.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)ht.renderInstances(gt,yt,j.count);else if($.isInstancedBufferGeometry){const Ge=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ko=Math.min($.instanceCount,Ge);ht.renderInstances(gt,yt,ko)}else ht.render(gt,yt)};function Ye(T,B,$){T.transparent===!0&&T.side===Jn&&T.forceSinglePass===!1?(T.side=Yt,T.needsUpdate=!0,ws(T,B,$),T.side=bi,T.needsUpdate=!0,ws(T,B,$),T.side=Jn):ws(T,B,$)}this.compile=function(T,B,$=null){$===null&&($=T),m=Ee.get($),m.init(),E.push(m),$.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),T!==$&&T.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(_._useLegacyLights);const J=new Set;return T.traverse(function(j){const we=j.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){const Ie=we[Pe];Ye(Ie,$,j),J.add(Ie)}else Ye(we,$,j),J.add(we)}),E.pop(),m=null,J},this.compileAsync=function(T,B,$=null){const J=this.compile(T,B,$);return new Promise(j=>{function we(){if(J.forEach(function(Pe){le.get(Pe).currentProgram.isReady()&&J.delete(Pe)}),J.size===0){j(T);return}setTimeout(we,10)}L.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let st=null;function Rt(T){st&&st(T)}function tn(){Nt.stop()}function ot(){Nt.start()}const Nt=new Dd;Nt.setAnimationLoop(Rt),typeof self<"u"&&Nt.setContext(self),this.setAnimationLoop=function(T){st=T,Be.setAnimationLoop(T),T===null?Nt.stop():Nt.start()},Be.addEventListener("sessionstart",tn),Be.addEventListener("sessionend",ot),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(B),B=Be.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,B,w),m=Ee.get(T,E.length),m.init(),E.push(m),H.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ue.setFromProjectionMatrix(H),fe=this.localClippingEnabled,Z=de.init(this.clippingPlanes,fe),S=Te.get(T,d.length),S.init(),d.push(S),Tn(T,B,0,_.sortObjects),S.finish(),_.sortObjects===!0&&S.sort(X,ae),this.info.render.frame++,Z===!0&&de.beginShadows();const $=m.state.shadowsArray;if(me.render($,T,B),Z===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1)&&Le.render(S,T),m.setupLights(_._useLegacyLights),B.isArrayCamera){const J=B.cameras;for(let j=0,we=J.length;j<we;j++){const Pe=J[j];jl(S,T,Pe,Pe.viewport)}}else jl(S,T,B);w!==null&&(oe.updateMultisampleRenderTarget(w),oe.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,B),Ae.resetDefaultState(),N=-1,V=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function Tn(T,B,$,J){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ue.intersectsSprite(T)){J&&te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const Pe=F.update(T),Ie=T.material;Ie.visible&&S.push(T,Pe,Ie,$,te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ue.intersectsObject(T))){const Pe=F.update(T),Ie=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),te.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),te.copy(Pe.boundingSphere.center)),te.applyMatrix4(T.matrixWorld).applyMatrix4(H)),Array.isArray(Ie)){const Ne=Pe.groups;for(let We=0,Fe=Ne.length;We<Fe;We++){const ze=Ne[We],gt=Ie[ze.materialIndex];gt&&gt.visible&&S.push(T,Pe,gt,$,te.z,ze)}}else Ie.visible&&S.push(T,Pe,Ie,$,te.z,null)}}const we=T.children;for(let Pe=0,Ie=we.length;Pe<Ie;Pe++)Tn(we[Pe],B,$,J)}function jl(T,B,$,J){const j=T.opaque,we=T.transmissive,Pe=T.transparent;m.setupLightsView($),Z===!0&&de.setGlobalState(_.clippingPlanes,$),we.length>0&&Xd(j,we,B,$),J&&k.viewport(M.copy(J)),j.length>0&&As(j,B,$),we.length>0&&As(we,B,$),Pe.length>0&&As(Pe,B,$),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Xd(T,B,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const we=G.isWebGL2;Me===null&&(Me=new Ji(1,1,{generateMipmaps:!0,type:L.has("EXT_color_buffer_half_float")?ds:Ei,minFilter:ji,samples:we?4:0})),_.getDrawingBufferSize(se),we?Me.setSize(se.x,se.y):Me.setSize(dl(se.x),dl(se.y));const Pe=_.getRenderTarget();_.setRenderTarget(Me),_.getClearColor(K),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Ie=_.toneMapping;_.toneMapping=Si,As(T,$,J),oe.updateMultisampleRenderTarget(Me),oe.updateRenderTargetMipmap(Me);let Ne=!1;for(let We=0,Fe=B.length;We<Fe;We++){const ze=B[We],gt=ze.object,Kt=ze.geometry,yt=ze.material,Bn=ze.group;if(yt.side===Jn&&gt.layers.test(J.layers)){const ht=yt.side;yt.side=Yt,yt.needsUpdate=!0,Yl(gt,$,J,Kt,yt,Bn),yt.side=ht,yt.needsUpdate=!0,Ne=!0}}Ne===!0&&(oe.updateMultisampleRenderTarget(Me),oe.updateRenderTargetMipmap(Me)),_.setRenderTarget(Pe),_.setClearColor(K,D),_.toneMapping=Ie}function As(T,B,$){const J=B.isScene===!0?B.overrideMaterial:null;for(let j=0,we=T.length;j<we;j++){const Pe=T[j],Ie=Pe.object,Ne=Pe.geometry,We=J===null?Pe.material:J,Fe=Pe.group;Ie.layers.test($.layers)&&Yl(Ie,B,$,Ne,We,Fe)}}function Yl(T,B,$,J,j,we){T.onBeforeRender(_,B,$,J,j,we),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(_,B,$,J,T,we),j.transparent===!0&&j.side===Jn&&j.forceSinglePass===!1?(j.side=Yt,j.needsUpdate=!0,_.renderBufferDirect($,B,J,j,T,we),j.side=bi,j.needsUpdate=!0,_.renderBufferDirect($,B,J,j,T,we),j.side=Jn):_.renderBufferDirect($,B,J,j,T,we),T.onAfterRender(_,B,$,J,j,we)}function ws(T,B,$){B.isScene!==!0&&(B=ge);const J=le.get(T),j=m.state.lights,we=m.state.shadowsArray,Pe=j.state.version,Ie=Q.getParameters(T,j.state,we,B,$),Ne=Q.getProgramCacheKey(Ie);let We=J.programs;J.environment=T.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(T.isMeshStandardMaterial?y:ue).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,We===void 0&&(T.addEventListener("dispose",Y),We=new Map,J.programs=We);let Fe=We.get(Ne);if(Fe!==void 0){if(J.currentProgram===Fe&&J.lightsStateVersion===Pe)return Kl(T,Ie),Fe}else Ie.uniforms=Q.getUniforms(T),T.onBuild($,Ie,_),T.onBeforeCompile(Ie,_),Fe=Q.acquireProgram(Ie,Ne),We.set(Ne,Fe),J.uniforms=Ie.uniforms;const ze=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=de.uniform),Kl(T,Ie),J.needsLights=Yd(T),J.lightsStateVersion=Pe,J.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),J.currentProgram=Fe,J.uniformsList=null,Fe}function $l(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=lo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Kl(T,B){const $=le.get(T);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function qd(T,B,$,J,j){B.isScene!==!0&&(B=ge),oe.resetTextureUnits();const we=B.fog,Pe=J.isMeshStandardMaterial?B.environment:null,Ie=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ai,Ne=(J.isMeshStandardMaterial?y:ue).get(J.envMap||Pe),We=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Fe=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ze=!!$.morphAttributes.position,gt=!!$.morphAttributes.normal,Kt=!!$.morphAttributes.color;let yt=Si;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(yt=_.toneMapping);const Bn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ht=Bn!==void 0?Bn.length:0,Ge=le.get(J),ko=m.state.lights;if(Z===!0&&(fe===!0||T!==V)){const nn=T===V&&J.id===N;de.setState(J,T,nn)}let ft=!1;J.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==ko.state.version||Ge.outputColorSpace!==Ie||j.isBatchedMesh&&Ge.batching===!1||!j.isBatchedMesh&&Ge.batching===!0||j.isInstancedMesh&&Ge.instancing===!1||!j.isInstancedMesh&&Ge.instancing===!0||j.isSkinnedMesh&&Ge.skinning===!1||!j.isSkinnedMesh&&Ge.skinning===!0||j.isInstancedMesh&&Ge.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ge.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ge.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ge.instancingMorph===!1&&j.morphTexture!==null||Ge.envMap!==Ne||J.fog===!0&&Ge.fog!==we||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==de.numPlanes||Ge.numIntersection!==de.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Fe||Ge.morphTargets!==ze||Ge.morphNormals!==gt||Ge.morphColors!==Kt||Ge.toneMapping!==yt||G.isWebGL2===!0&&Ge.morphTargetsCount!==ht)&&(ft=!0):(ft=!0,Ge.__version=J.version);let wi=Ge.currentProgram;ft===!0&&(wi=ws(J,B,j));let Zl=!1,zr=!1,Vo=!1;const Ct=wi.getUniforms(),Ri=Ge.uniforms;if(k.useProgram(wi.program)&&(Zl=!0,zr=!0,Vo=!0),J.id!==N&&(N=J.id,zr=!0),Zl||V!==T){Ct.setValue(g,"projectionMatrix",T.projectionMatrix),Ct.setValue(g,"viewMatrix",T.matrixWorldInverse);const nn=Ct.map.cameraPosition;nn!==void 0&&nn.setValue(g,te.setFromMatrixPosition(T.matrixWorld)),G.logarithmicDepthBuffer&&Ct.setValue(g,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(g,"isOrthographic",T.isOrthographicCamera===!0),V!==T&&(V=T,zr=!0,Vo=!0)}if(j.isSkinnedMesh){Ct.setOptional(g,j,"bindMatrix"),Ct.setOptional(g,j,"bindMatrixInverse");const nn=j.skeleton;nn&&(G.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ct.setValue(g,"boneTexture",nn.boneTexture,oe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Ct.setOptional(g,j,"batchingTexture"),Ct.setValue(g,"batchingTexture",j._matricesTexture,oe));const Wo=$.morphAttributes;if((Wo.position!==void 0||Wo.normal!==void 0||Wo.color!==void 0&&G.isWebGL2===!0)&&he.update(j,$,wi),(zr||Ge.receiveShadow!==j.receiveShadow)&&(Ge.receiveShadow=j.receiveShadow,Ct.setValue(g,"receiveShadow",j.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ri.envMap.value=Ne,Ri.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),zr&&(Ct.setValue(g,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&jd(Ri,Vo),we&&J.fog===!0&&ie.refreshFogUniforms(Ri,we),ie.refreshMaterialUniforms(Ri,J,ee,W,Me),lo.upload(g,$l(Ge),Ri,oe)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(lo.upload(g,$l(Ge),Ri,oe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(g,"center",j.center),Ct.setValue(g,"modelViewMatrix",j.modelViewMatrix),Ct.setValue(g,"normalMatrix",j.normalMatrix),Ct.setValue(g,"modelMatrix",j.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const nn=J.uniformsGroups;for(let Xo=0,$d=nn.length;Xo<$d;Xo++)if(G.isWebGL2){const Jl=nn[Xo];Ce.update(Jl,wi),Ce.bind(Jl,wi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wi}function jd(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Yd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,B,$){le.get(T.texture).__webglTexture=B,le.get(T.depthTexture).__webglTexture=$;const J=le.get(T);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||L.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const $=le.get(T);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,$=0){w=T,P=B,R=$;let J=!0,j=null,we=!1,Pe=!1;if(T){const Ne=le.get(T);Ne.__useDefaultFramebuffer!==void 0?(k.bindFramebuffer(g.FRAMEBUFFER,null),J=!1):Ne.__webglFramebuffer===void 0?oe.setupRenderTarget(T):Ne.__hasExternalTextures&&oe.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Pe=!0);const Fe=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?j=Fe[B][$]:j=Fe[B],we=!0):G.isWebGL2&&T.samples>0&&oe.useMultisampledRTT(T)===!1?j=le.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?j=Fe[$]:j=Fe,M.copy(T.viewport),A.copy(T.scissor),O=T.scissorTest}else M.copy(ce).multiplyScalar(ee).floor(),A.copy(pe).multiplyScalar(ee).floor(),O=Se;if(k.bindFramebuffer(g.FRAMEBUFFER,j)&&G.drawBuffers&&J&&k.drawBuffers(T,j),k.viewport(M),k.scissor(A),k.setScissorTest(O),we){const Ne=le.get(T.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,$)}else if(Pe){const Ne=le.get(T.texture),We=B||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ne.__webglTexture,$||0,We)}N=-1},this.readRenderTargetPixels=function(T,B,$,J,j,we,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){k.bindFramebuffer(g.FRAMEBUFFER,Ie);try{const Ne=T.texture,We=Ne.format,Fe=Ne.type;if(We!==xn&&Re.convert(We)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Fe===ds&&(L.has("EXT_color_buffer_half_float")||G.isWebGL2&&L.has("EXT_color_buffer_float"));if(Fe!==Ei&&Re.convert(Fe)!==g.getParameter(g.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===Qn&&(G.isWebGL2||L.has("OES_texture_float")||L.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-J&&$>=0&&$<=T.height-j&&g.readPixels(B,$,J,j,Re.convert(We),Re.convert(Fe),we)}finally{const Ne=w!==null?le.get(w).__webglFramebuffer:null;k.bindFramebuffer(g.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(T,B,$=0){const J=Math.pow(2,-$),j=Math.floor(B.image.width*J),we=Math.floor(B.image.height*J);oe.setTexture2D(B,0),g.copyTexSubImage2D(g.TEXTURE_2D,$,0,0,T.x,T.y,j,we),k.unbindTexture()},this.copyTextureToTexture=function(T,B,$,J=0){const j=B.image.width,we=B.image.height,Pe=Re.convert($.format),Ie=Re.convert($.type);oe.setTexture2D($,0),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,$.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,$.unpackAlignment),B.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,J,T.x,T.y,j,we,Pe,Ie,B.image.data):B.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,J,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Pe,B.mipmaps[0].data):g.texSubImage2D(g.TEXTURE_2D,J,T.x,T.y,Pe,Ie,B.image),J===0&&$.generateMipmaps&&g.generateMipmap(g.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(T,B,$,J,j=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=Math.round(T.max.x-T.min.x),Pe=Math.round(T.max.y-T.min.y),Ie=T.max.z-T.min.z+1,Ne=Re.convert(J.format),We=Re.convert(J.type);let Fe;if(J.isData3DTexture)oe.setTexture3D(J,0),Fe=g.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)oe.setTexture2DArray(J,0),Fe=g.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,J.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,J.unpackAlignment);const ze=g.getParameter(g.UNPACK_ROW_LENGTH),gt=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Kt=g.getParameter(g.UNPACK_SKIP_PIXELS),yt=g.getParameter(g.UNPACK_SKIP_ROWS),Bn=g.getParameter(g.UNPACK_SKIP_IMAGES),ht=$.isCompressedTexture?$.mipmaps[j]:$.image;g.pixelStorei(g.UNPACK_ROW_LENGTH,ht.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ht.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,T.min.x),g.pixelStorei(g.UNPACK_SKIP_ROWS,T.min.y),g.pixelStorei(g.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?g.texSubImage3D(Fe,j,B.x,B.y,B.z,we,Pe,Ie,Ne,We,ht.data):J.isCompressedArrayTexture?g.compressedTexSubImage3D(Fe,j,B.x,B.y,B.z,we,Pe,Ie,Ne,ht.data):g.texSubImage3D(Fe,j,B.x,B.y,B.z,we,Pe,Ie,Ne,We,ht),g.pixelStorei(g.UNPACK_ROW_LENGTH,ze),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,gt),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Kt),g.pixelStorei(g.UNPACK_SKIP_ROWS,yt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,Bn),j===0&&J.generateMipmaps&&g.generateMipmap(Fe),k.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?oe.setTextureCube(T,0):T.isData3DTexture?oe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?oe.setTexture2DArray(T,0):oe.setTexture2D(T,0),k.unbindTexture()},this.resetState=function(){P=0,R=0,w=null,k.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===kl?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Ho?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jE extends Hd{}jE.prototype.isWebGL1Renderer=!0;class YE extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gd extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bf=new z,Tf=new z,Af=new dt,Ga=new Vl,Qs=new ys;class $E extends wt{constructor(e=new dn,t=new Gd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)bf.fromBufferAttribute(t,r-1),Tf.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=bf.distanceTo(Tf);e.setAttribute("lineDistance",new Sn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(r),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;Af.copy(r).invert(),Ga.copy(e.ray).applyMatrix4(Af);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new z,u=new z,f=new z,h=new z,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const d=Math.max(0,a.start),E=Math.min(v.count,a.start+a.count);for(let _=d,b=E-1;_<b;_+=p){const P=v.getX(_),R=v.getX(_+1);if(c.fromBufferAttribute(m,P),u.fromBufferAttribute(m,R),Ga.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||t.push({distance:N,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),E=Math.min(m.count,a.start+a.count);for(let _=d,b=E-1;_<b;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),Ga.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class kd extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wf=new dt,ml=new Vl,eo=new ys,to=new z;class KE extends wt{constructor(e=new dn,t=new kd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;wf.copy(r).invert(),ml.copy(e.ray).applyMatrix4(wf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,S=p;v<S;v++){const m=c.getX(v);to.fromBufferAttribute(f,m),Rf(to,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=h,S=p;v<S;v++)to.fromBufferAttribute(f,v),Rf(to,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rf(n,e,t,i,r,s,a){const o=ml.distanceSqToPoint(n);if(o<t){const l=new z;ml.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class ql extends dn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),c(i),u(),this.setAttribute("position",new Sn(s,3)),this.setAttribute("normal",new Sn(s.slice(),3)),this.setAttribute("uv",new Sn(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const _=new z,b=new z,P=new z;for(let R=0;R<t.length;R+=3)p(t[R+0],_),p(t[R+1],b),p(t[R+2],P),l(_,b,P,E)}function l(E,_,b,P){const R=P+1,w=[];for(let N=0;N<=R;N++){w[N]=[];const V=E.clone().lerp(b,N/R),M=_.clone().lerp(b,N/R),A=R-N;for(let O=0;O<=A;O++)O===0&&N===R?w[N][O]=V:w[N][O]=V.clone().lerp(M,O/A)}for(let N=0;N<R;N++)for(let V=0;V<2*(R-N)-1;V++){const M=Math.floor(V/2);V%2===0?(h(w[N][M+1]),h(w[N+1][M]),h(w[N][M])):(h(w[N][M+1]),h(w[N+1][M+1]),h(w[N+1][M]))}}function c(E){const _=new z;for(let b=0;b<s.length;b+=3)_.x=s[b+0],_.y=s[b+1],_.z=s[b+2],_.normalize().multiplyScalar(E),s[b+0]=_.x,s[b+1]=_.y,s[b+2]=_.z}function u(){const E=new z;for(let _=0;_<s.length;_+=3){E.x=s[_+0],E.y=s[_+1],E.z=s[_+2];const b=m(E)/2/Math.PI+.5,P=d(E)/Math.PI+.5;a.push(b,1-P)}v(),f()}function f(){for(let E=0;E<a.length;E+=6){const _=a[E+0],b=a[E+2],P=a[E+4],R=Math.max(_,b,P),w=Math.min(_,b,P);R>.9&&w<.1&&(_<.2&&(a[E+0]+=1),b<.2&&(a[E+2]+=1),P<.2&&(a[E+4]+=1))}}function h(E){s.push(E.x,E.y,E.z)}function p(E,_){const b=E*3;_.x=e[b+0],_.y=e[b+1],_.z=e[b+2]}function v(){const E=new z,_=new z,b=new z,P=new z,R=new je,w=new je,N=new je;for(let V=0,M=0;V<s.length;V+=9,M+=6){E.set(s[V+0],s[V+1],s[V+2]),_.set(s[V+3],s[V+4],s[V+5]),b.set(s[V+6],s[V+7],s[V+8]),R.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),N.set(a[M+4],a[M+5]),P.copy(E).add(_).add(b).divideScalar(3);const A=m(P);S(R,M+0,E,A),S(w,M+2,_,A),S(N,M+4,b,A)}}function S(E,_,b,P){P<0&&E.x===1&&(a[_]=E.x-1),b.x===0&&b.z===0&&(a[_]=P/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.vertices,e.indices,e.radius,e.details)}}class To extends ql{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new To(e.radius,e.detail)}}class ZE extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xd,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vd extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ka=new dt,Cf=new z,Pf=new z;class JE{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cf),Pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pf),t.updateMatrixWorld(),ka.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ka)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class QE extends JE{constructor(){super(new Id(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lf extends Vd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new QE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ey extends Vd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hl);const ty={__name:"ThreeScene",props:{mouse:{type:Object,required:!0}},setup(n){const e=n,t=ln(null);let i,r,s,a,o;return _s(()=>{const l=t.value;i=new Hd({canvas:l,antialias:!0,alpha:!0}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),i.outputColorSpace=_n,i.toneMapping=ud,i.toneMappingExposure=1,r=new YE,s=new an(60,window.innerWidth/window.innerHeight,.1,200),s.position.z=14;const c=new ey(16777215,.8);r.add(c);const u=new Lf(16777215,1.25);u.position.set(6,10,8),r.add(u);const f=new Lf(15122944,.8);f.position.set(-10,4,-6),r.add(f);const h=new cn(new Ts(60,60),new ZE({color:856343,transparent:!0,opacity:.25,roughness:1}));h.rotation.x=-Math.PI/2,h.position.y=-5.5,r.add(h);const p=[15122944,15221651,54910,43212,14774357,10656766],v=[];for(let A=0;A<28;A++){const O=.25+Math.random()*1.1,K=new To(O,5),D=p[Math.floor(Math.random()*p.length)],ne=!0,W=new bo({color:D,wireframe:ne,transparent:!0,reflectivity:1,opacity:.35}),ee=new cn(K,W);ee.position.set((Math.random()-.5)*26,(Math.random()-.5)*16,(Math.random()-.5)*8-2),ee.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),r.add(ee),v.push({mesh:ee,bobOffset:Math.random()*Math.PI*2,bobSpeed:.3+Math.random()*.5,bobAmt:.5+Math.random()*1.2,rotX:(Math.random()-.5)*.012,rotY:(Math.random()-.5)*.016,baseY:ee.position.y})}const S=new To(3.5,2),m=new bo({color:15122944,wireframe:!0,transparent:!0,opacity:.03}),d=new cn(S,m);r.add(d);const E=700,_=new Float32Array(E*3),b=new Float32Array(E*3),P=[[.9,.76,0],[.91,.26,.58],[0,.84,.49],[0,.66,.8],[.88,.44,.33],[.64,.61,1]];for(let A=0;A<E;A++){_[A*3]=(Math.random()-.5)*40,_[A*3+1]=(Math.random()-.5)*25,_[A*3+2]=(Math.random()-.5)*12-4;const O=P[Math.floor(Math.random()*P.length)];b[A*3]=O[0],b[A*3+1]=O[1],b[A*3+2]=O[2]}const R=new dn;R.setAttribute("position",new hn(_,3)),R.setAttribute("color",new hn(b,3)),r.add(new KE(R,new kd({size:.06,vertexColors:!0,transparent:!0,opacity:.4})));const w=[];for(let A=0;A<12;A++){const O=v[Math.floor(Math.random()*v.length)],K=v[Math.floor(Math.random()*v.length)];if(O===K)continue;const D=new dn().setFromPoints([O.mesh.position.clone(),K.mesh.position.clone()]),ne=new Gd({color:15122944,transparent:!0,opacity:.04}),W=new $E(D,ne);r.add(W),w.push({line:W,a:O,b:K})}let N=0;const V={x:0,y:0},M=()=>{var A,O;a=requestAnimationFrame(M),N+=.008,V.x+=((((A=e.mouse)==null?void 0:A.x)||0)-V.x)*.04,V.y+=((((O=e.mouse)==null?void 0:O.y)||0)-V.y)*.04,v.forEach(K=>{K.mesh.position.y=K.baseY+Math.sin(N*K.bobSpeed+K.bobOffset)*K.bobAmt,K.mesh.rotation.x+=K.rotX,K.mesh.rotation.y+=K.rotY}),d.rotation.y=N*.07,d.rotation.x=N*.04,w.forEach(({line:K,a:D,b:ne})=>{const W=K.geometry.attributes.position.array;W[0]=D.mesh.position.x,W[1]=D.mesh.position.y,W[2]=D.mesh.position.z,W[3]=ne.mesh.position.x,W[4]=ne.mesh.position.y,W[5]=ne.mesh.position.z,K.geometry.attributes.position.needsUpdate=!0}),s.position.x+=(V.x*1.5-s.position.x)*.03,s.position.y+=(V.y*.8-s.position.y)*.03,s.lookAt(0,0,0),i.render(r,s)};M(),o=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)},window.addEventListener("resize",o)}),vs(()=>{a&&cancelAnimationFrame(a),o&&window.removeEventListener("resize",o),i&&i.dispose()}),(l,c)=>(Xe(),$e("canvas",{ref_key:"canvasEl",ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}},null,512))}},ny={key:1,style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none",background:"radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(8,12,20,0.85) 100%)"}},iy={key:2,style:{position:"fixed",inset:0,zIndex:0,background:"var(--bg)",backgroundImage:`
          radial-gradient(ellipse at 15% 25%, rgba(255,229,0,0.04) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 75%, rgba(255,45,120,0.04) 0%, transparent 55%)
        `}},ry={__name:"App",setup(n){const e=ms({x:0,y:0}),t=ln(null),i=ln(null),r=ln(!1),s=ln(!1),a=ad(),o=Tt(()=>a.path==="/"),l={background:"#000000",color:"var(--text)",minHeight:"100vh",cursor:"none"};let c,u=0,f=0,h=0;const p=()=>{c||(c=requestAnimationFrame(()=>{var b;c=null;const d=t.value,E=i.value;d&&(d.style.setProperty("--cursor-x",`${u}px`),d.style.setProperty("--cursor-y",`${f}px`)),E&&(E.style.setProperty("--cursor-x",`${u}px`),E.style.setProperty("--cursor-y",`${f}px`));const _=performance.now();if(_-h>80){h=_;try{const P=document.elementFromPoint(u,f);r.value=!!((b=P==null?void 0:P.closest)!=null&&b.call(P,'a,button,input,textarea,select,label,[role="link"],.chip,.card'))}catch{r.value=!1}}}))};function v(d){d.pointerType&&d.pointerType!=="mouse"||(u=d.clientX,f=d.clientY,e.x=(u/window.innerWidth-.5)*2,e.y=-(f/window.innerHeight-.5)*2,p())}function S(){s.value=window.scrollY>500}function m(){window.scrollTo({top:0,behavior:"smooth"})}return _s(()=>{window.addEventListener("pointermove",v,{passive:!0}),window.addEventListener("scroll",S)}),vs(()=>{window.removeEventListener("pointermove",v),window.removeEventListener("scroll",S),c&&cancelAnimationFrame(c)}),(d,E)=>{const _=Uo("RouterView");return Xe(),$e("div",{style:l},[re("div",{ref_key:"cursorDotEl",ref:t,class:ni(["cursor-dot",{hovering:r.value}])},null,2),re("div",{ref_key:"cursorRingEl",ref:i,class:ni(["cursor-ring",{hovering:r.value}])},null,2),re("button",{class:ni(["back-to-top",{visible:s.value}]),onClick:m,"aria-label":"Back to top"}," ↑ ",2),o.value?(Xe(),Il(ty,{key:0,mouse:e},null,8,["mouse"])):Xi("",!0),o.value?(Xe(),$e("div",ny)):(Xe(),$e("div",iy)),nt(N_),re("main",{style:un({position:"relative",zIndex:o.value?10:5})},[nt(_)],4)])}}},Df="/assets/habit-tracker-dashboard.png",sy=["viewBox","fill","stroke","stroke-width"],oy=["innerHTML"],gl={__name:"Icon",props:{name:{type:String,required:!0},size:{type:[Number,String],default:24},color:{type:String,default:"currentColor"}},setup(n){const e=n,t={globe:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'},check:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,path:'<polyline points="20 6 9 17 4 12"/>'},github:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>'},linkedin:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>'},twitter:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'},devto:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M7.72 20.56c.36.18.76.18 1.12 0l6.92-3.98c.36-.21.58-.61.58-1.04V5.62c0-.43-.22-.83-.58-1.04L8.84 2.6c-.36-.18-.76-.18-1.12 0L.8 6.58c-.36.21-.58.61-.58 1.04v9.92c0 .43.22.83.58 1.04l6.92 3.98zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-5.67c-1.2 0-2.17.97-2.17 2.17s.97 2.17 2.17 2.17 2.17-.97 2.17-2.17-.97-2.17-2.17-2.17zM5.33 9.13c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm4.67 8.62h-3.5V8.75h1.17v6h1.17v-6h1.16v9z"/>'},instagram:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,path:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>'},email:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>'},cart:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'},brain:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 5.28.55"/><path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1-1.32 4.24 3 3 0 0 1-.34 5.58 2.5 2.5 0 0 1-5.28.55"/><path d="M12 4.5v16"/>'},clipboard:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>'},folder:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'},code:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'},arrowRight:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'},mapPin:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'},user:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'},briefcase:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'}},i=Tt(()=>t[e.name]||t.code),r=Tt(()=>({width:typeof e.size=="number"?`${e.size}px`:e.size,height:typeof e.size=="number"?`${e.size}px`:e.size,color:e.color,display:"inline-block",flexShrink:0}));return(s,a)=>(Xe(),$e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:i.value.viewBox,style:un(r.value),fill:i.value.fill,stroke:i.value.stroke,"stroke-width":i.value.strokeWidth},[re("g",{innerHTML:i.value.path},null,8,oy)],12,sy))}},ay={key:0,style:{fontSize:"var(--text-base)"}},If={__name:"FloatBadge",props:{emoji:{type:String,default:""},icon:{type:String,default:""},label:{type:String,required:!0},color:{type:String,required:!0},style:{type:Object,default:()=>({})}},setup(n){const e=n,t=Tt(()=>({display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",borderRadius:"var(--radius-sm)",background:`color-mix(in srgb, ${e.color} 8%, transparent)`,border:`1px solid color-mix(in srgb, ${e.color} 20%, transparent)`,fontFamily:"var(--mono)",fontSize:"var(--text-xs)",letterSpacing:"0.06em",color:e.color,whiteSpace:"nowrap"}));return(i,r)=>(Xe(),$e("div",{style:un([t.value,n.style])},[n.emoji?(Xe(),$e("span",ay,ct(n.emoji),1)):n.icon?(Xe(),Il(gl,{key:1,name:n.icon,size:14,color:n.color},null,8,["name","color"])):Xi("",!0),ii(" "+ct(n.label),1)],4))}},ly={ref:"rootEl",class:"home"},cy={class:"home-hero"},uy={class:"home-hero-inner"},fy={class:"hero-grid"},hy={class:"hero-copy"},dy={class:"hero-badges"},py={class:"hero-actions"},my={id:"about",class:"home-section"},gy={class:"home-inner split-section"},_y={class:"section-copy"},vy={class:"profile-list"},xy={class:"home-section home-projects"},My={class:"home-inner"},Sy={class:"section-row section-row--project"},Ey={class:"feature-project-card"},yy={class:"feature-project-copy"},by={class:"feature-list"},Ty={class:"home-section"},Ay={class:"home-inner"},wy={class:"stack-grid"},Ry={class:"u-flex u-wrap u-gap-1"},Cy={class:"home-section"},Py={class:"home-inner"},Ly={class:"highlights-grid"},Dy={id:"contact",class:"home-section home-contact"},Iy={class:"home-inner"},Uy={class:"reveal glass contact-card visible","data-id":"contact"},Ny={class:"contact-socials"},Oy=["href","aria-label"],Fy={class:"contact-social-name"},By={class:"contact-social-handle"},zy={__name:"Home",setup(n){const e=[{value:"Full-stack",label:"Frontend polish plus backend reliability."},{value:"Product-first",label:"Features shaped around clarity and user intent."},{value:"Ship-ready",label:"Responsive, deployable, maintainable builds."}],t=["Daily habit check-ins","Target tracking","Week, month, and year heatmaps","Responsive dashboard UI"],i=[{title:"Frontend",icon:"code",color:"var(--sky)",copy:"Interfaces that are responsive, fast, and easy to scan.",tech:["React","Vue.js","Vite","Tailwind CSS","Three.js"]},{title:"Backend",icon:"briefcase",color:"var(--lime)",copy:"Services built around dependable APIs and maintainable structure.",tech:["Java","Spring Boot","REST APIs","PostgreSQL","MySQL"]},{title:"Delivery",icon:"check",color:"var(--yellow)",copy:"Practical tooling for iteration, deployment, and collaboration.",tech:["Git","GitHub Pages","Vercel-style workflows","Responsive QA"]}],r=[{kicker:"01",title:"Product flow",copy:"Turns rough ideas into clear screens, states, and actions."},{kicker:"02",title:"UI craft",copy:"Keeps interfaces polished, responsive, and maintainable."},{kicker:"03",title:"Full-stack delivery",copy:"Connects frontend behavior with dependable backend APIs."}],s=[{label:"GitHub",url:"https://github.com/prabath-23",handle:"github.com/prabath-23",icon:"github",color:"var(--text-mid)"},{label:"LinkedIn",url:"https://linkedin.com/in/prabath-sai/",handle:"linkedin.com/in/prabath-sai",icon:"linkedin",color:"var(--sky)"},{label:"Instagram",url:"https://instagram.com/prabath.chowdary",handle:"@prabath.chowdary",icon:"instagram",color:"var(--pink)"}];return(a,o)=>{const l=Uo("RouterLink");return Xe(),$e("div",ly,[re("section",cy,[re("div",uy,[re("div",fy,[re("div",hy,[re("div",dy,[nt(If,{icon:"code",label:"Full-stack developer",color:"var(--lime)"}),nt(If,{icon:"briefcase",label:"Product-minded builder",color:"var(--yellow)"})]),o[3]||(o[3]=re("p",{class:"hero-kicker"},"Prabath Sai",-1)),o[4]||(o[4]=re("h1",{class:"hero-title"}," Building polished product experiences for the web. ",-1)),o[5]||(o[5]=re("p",{class:"hero-lede"}," Full-stack developer working across React, Vue, Java, and Spring Boot. I focus on clear interfaces, dependable systems, and product details that make software easier to use and maintain. ",-1)),re("div",py,[nt(l,{to:"/projects",class:"btn-yellow"},{default:ei(()=>[...o[0]||(o[0]=[ii("View Projects",-1)])]),_:1}),o[2]||(o[2]=re("a",{class:"btn-outline",href:"/Prabath-Sai-Resume.txt",download:""},"Download Resume",-1)),nt(l,{to:{path:"/",hash:"#contact"},class:"btn-ghost"},{default:ei(()=>[...o[1]||(o[1]=[ii("Contact Me",-1)])]),_:1})])]),o[6]||(o[6]=Vh('<aside class="hero-dashboard" aria-label="Momentum Habit Tracker project preview" data-v-980018b4><div class="dash-card dash-card--main" data-v-980018b4><div class="dash-eyebrow" data-v-980018b4><span data-v-980018b4>Featured build</span><span class="dash-live" data-v-980018b4>Live</span></div><h2 data-v-980018b4>Momentum Habit Tracker</h2><p data-v-980018b4> A focused habit dashboard for daily check-ins, targets, and progress heatmaps across week, month, and year views. </p><div class="dash-screenshot" data-v-980018b4><img src="'+Df+'" alt="Momentum Habit Tracker dashboard preview" data-v-980018b4></div></div><div class="dash-card dash-card--metric" data-v-980018b4><span class="dash-label" data-v-980018b4>Role</span><strong data-v-980018b4>Builder</strong><span data-v-980018b4>Product + engineering</span></div><div class="dash-card dash-card--metric" data-v-980018b4><span class="dash-label" data-v-980018b4>Stack</span><strong data-v-980018b4>React</strong><span data-v-980018b4>Vite + Tailwind</span></div><a href="https://momentum.prabath.in" class="dash-card dash-card--cta" data-v-980018b4><span data-v-980018b4>Open live app</span><strong data-v-980018b4>Launch Momentum</strong></a></aside>',1))])])]),re("section",my,[re("div",gy,[o[8]||(o[8]=re("div",null,[re("div",{class:"section-chip"},"Profile"),re("h2",{class:"section-title"},"Developer craft, product judgment.")],-1)),re("div",_y,[o[7]||(o[7]=re("p",null," Prabath Sai builds web products that feel clear, fast, and maintainable. He connects UI polish with practical backend thinking so product ideas can move from concept to usable software. ",-1)),re("ul",vy,[(Xe(),$e(mt,null,on(e,c=>re("li",{key:c.value},[re("strong",null,ct(c.value),1),re("span",null,ct(c.label),1)])),64))])])])]),re("section",xy,[re("div",My,[re("div",Sy,[o[10]||(o[10]=re("div",null,[re("div",{class:"section-chip"},"Featured Project"),re("h2",{class:"section-title"},"Momentum Habit Tracker")],-1)),nt(l,{to:"/projects",class:"section-action"},{default:ei(()=>[...o[9]||(o[9]=[ii("View case study",-1)])]),_:1})]),re("article",Ey,[re("div",yy,[o[11]||(o[11]=re("span",{class:"pill lime"},"Productivity · React",-1)),o[12]||(o[12]=re("h3",null,"Helping users keep daily progress visible and actionable.",-1)),o[13]||(o[13]=re("p",null," Momentum turns habits and tasks into a compact dashboard with daily marking, target tracking, and heatmaps that make consistency easy to scan. ",-1)),re("div",by,[(Xe(),$e(mt,null,on(t,c=>re("span",{key:c},ct(c),1)),64))]),o[14]||(o[14]=re("div",{class:"project-links"},[re("a",{href:"https://momentum.prabath.in"},"Live demo ↗"),re("a",{href:"https://github.com/prabath-23"},"GitHub ↗")],-1))]),o[15]||(o[15]=re("div",{class:"feature-project-media"},[re("img",{src:Df,alt:"Momentum Habit Tracker dashboard preview"})],-1))])])]),re("section",Ty,[re("div",Ay,[o[16]||(o[16]=re("div",{class:"section-row"},[re("div",null,[re("div",{class:"section-chip"},"Skills / Tech Stack"),re("h2",{class:"section-title"},"Tools used to ship practical products.")])],-1)),re("div",wy,[(Xe(),$e(mt,null,on(i,c=>re("div",{key:c.title,class:"stack-card",style:un({"--stack-color":c.color})},[nt(gl,{name:c.icon,size:26,color:c.color},null,8,["name","color"]),re("h3",null,ct(c.title),1),re("p",null,ct(c.copy),1),re("div",Ry,[(Xe(!0),$e(mt,null,on(c.tech,u=>(Xe(),$e("span",{key:u,class:"tag"},ct(u),1))),128))])],4)),64))])])]),re("section",Cy,[re("div",Py,[o[17]||(o[17]=re("div",{class:"section-row"},[re("div",null,[re("div",{class:"section-chip"},"Work Highlights"),re("h2",{class:"section-title"},"How Prabath creates value.")])],-1)),re("div",Ly,[(Xe(),$e(mt,null,on(r,c=>re("div",{key:c.title,class:"highlight-card"},[re("span",null,ct(c.kicker),1),re("h3",null,ct(c.title),1),re("p",null,ct(c.copy),1)])),64))])])]),re("section",Dy,[re("div",Iy,[re("div",Uy,[o[18]||(o[18]=re("div",null,[re("div",{class:"section-chip"},"Contact"),re("h2",{class:"contact-title"},"Have a product, role, or idea worth building?"),re("p",{class:"contact-copy"}," Reach out for frontend, Java backend, full-stack product work, or engineering conversations. I’m especially interested in teams that care about craft and momentum. "),re("a",{href:"mailto:hello@prabath.dev",class:"btn-yellow"},"Contact Me")],-1)),re("div",Ny,[(Xe(),$e(mt,null,on(s,c=>re("a",{key:c.label,href:c.url,class:"contact-social-link","aria-label":`Open ${c.label}`},[re("div",Fy,[nt(gl,{name:c.icon,size:18,color:c.color},null,8,["name","color"]),re("span",null,ct(c.label),1)]),re("span",By,ct(c.handle)+" ↗",1)],8,Oy)),64))])]),o[19]||(o[19]=re("div",{class:"site-footer"},[re("span",null,"© 2026 Prabath Sai"),re("div",null,[re("span",{class:"pill lime"},"Open to collaborate"),re("span",{class:"pill sky"},"Remote friendly")])],-1))])])],512)}}},Hy=zl(zy,[["__scopeId","data-v-980018b4"]]),Gy={class:"page"},ky={class:"page-header"},Vy={class:"page-inner"},Wy={class:"page-tools"},Xy={class:"chips"},qy=["onClick"],jy={class:"page-body"},Yy={class:"page-inner"},$y={key:0,style:{textAlign:"center",padding:"80px 0",fontFamily:"var(--mono)",fontSize:"var(--text-xs)",color:"var(--text-muted)",letterSpacing:"0.15em"}},Ky={key:1,style:{textAlign:"center",padding:"80px 0",fontFamily:"var(--mono)",fontSize:"var(--text-sm)",color:"var(--text-muted)"}},Zy={key:2,class:"cards-grid"},Jy={class:"project-kicker"},Qy={class:"project-badges"},eb={key:0,class:"badge featured"},tb={key:1,class:"badge live"},nb={style:{fontFamily:"var(--mono)",fontSize:"var(--text-xs)",color:"var(--text-muted)",letterSpacing:"0.12em"}},ib={class:"project-title",style:{marginBottom:"14px",color:"var(--text)"}},rb={class:"project-desc",style:{marginBottom:"22px"}},sb={class:"project-detail-grid"},ob={class:"u-flex u-wrap u-gap-1 u-mb-7"},ab={class:"project-links"},lb=["href"],cb=["href","target"],ub={__name:"Projects",setup(n){const t=ln([{id:"momentum-habit-tracker",title:"Momentum Habit Tracker",category:"Productivity · React",description:"A habit and task dashboard designed to make daily consistency visible, measurable, and easy to maintain.",problem:"Habit tools often hide progress behind too many screens. Momentum keeps today’s action, target progress, and long-term consistency in one fast dashboard.",features:["Daily habit and task check-ins","Target tracking for measurable routines","Week, month, and year progress heatmaps","Responsive interface built for quick scanning"],tech:["React","Vite","Tailwind CSS"],year:"2026",featured:!0,githubUrl:"https://github.com/prabath-23",liveUrl:"https://momentum.prabath.in",liveTarget:"_self",color:"#00d4aa"}]),i=ln(!1),r=ln("all"),s=ln(""),a=Tt(()=>{const l=t.value.map(c=>(c.category||"").split(" · ")[0].toLowerCase()).filter(Boolean);return["all",...Array.from(new Set(l))]}),o=Tt(()=>{const l=(s.value||"").toLowerCase().trim(),c=r.value==="all"?t.value:t.value.filter(u=>(u.category||"").toLowerCase().includes(r.value));return l?c.filter(u=>[u.title,u.category,u.description,Array.isArray(u.tech)?u.tech.join(" "):"",u.year].filter(Boolean).join(" ").toLowerCase().includes(l)):c});return(l,c)=>(Xe(),$e("div",Gy,[re("div",ky,[re("div",Vy,[c[1]||(c[1]=Vh('<div style="width:44px;height:1px;background:var(--teal);margin-bottom:16px;"></div><p class="section-label">Portfolio</p><div class="page-title-row"><div><h1 class="section-title">Projects</h1><p class="page-subtitle">Selected product work from Prabath Sai, focused on clear user flows, practical engineering, and polished delivery.</p></div></div>',3)),re("div",Wy,[zp(re("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),class:"input",placeholder:"Search projects…",style:{maxWidth:"320px"}},null,512),[[xg,s.value,void 0,{trim:!0}]]),re("div",Xy,[(Xe(!0),$e(mt,null,on(a.value,u=>(Xe(),$e("button",{key:u,class:ni(["chip",{active:r.value===u}]),onClick:f=>r.value=u},ct(u),11,qy))),128))])])])]),re("div",jy,[re("div",Yy,[i.value?(Xe(),$e("div",$y," Loading projects... ")):o.value.length===0?(Xe(),$e("div",Ky,' No projects in "'+ct(r.value)+'" yet. ',1)):(Xe(),$e("div",Zy,[(Xe(!0),$e(mt,null,on(o.value,(u,f)=>(Xe(),$e("article",{key:u.id||u.title,class:ni(["card project-card",{"project-card--spotlight":u.id==="momentum-habit-tracker"}]),style:un({"--accent":u.color,animation:`riseUp 0.7s cubic-bezier(0.16,1,0.3,1) ${f*.1}s both`})},[re("div",Jy,[re("div",Qy,[re("span",{class:"badge",style:un({borderColor:"rgba(255,255,255,0.10)",color:u.color})},ct(u.category),5),u.featured?(Xe(),$e("span",eb,"Featured")):Xi("",!0),u.id==="momentum-habit-tracker"?(Xe(),$e("span",tb,"Live")):Xi("",!0)]),re("span",nb,ct(u.year),1)]),re("h2",ib,ct(u.title),1),re("p",rb,ct(u.description),1),re("div",sb,[re("div",null,[c[2]||(c[2]=re("span",null,"Problem solved",-1)),re("p",null,ct(u.problem),1)]),re("div",null,[c[3]||(c[3]=re("span",null,"Key features",-1)),re("ul",null,[(Xe(!0),$e(mt,null,on(u.features,h=>(Xe(),$e("li",{key:h},ct(h),1))),128))])])]),re("div",ob,[(Xe(!0),$e(mt,null,on(u.tech,h=>(Xe(),$e("span",{key:h,class:"tag"},ct(h),1))),128))]),re("div",ab,[u.githubUrl&&u.githubUrl!=="#"?(Xe(),$e("a",{key:0,href:u.githubUrl,target:"_blank",rel:"noopener noreferrer"}," GitHub ↗ ",8,lb)):Xi("",!0),u.liveUrl&&u.liveUrl!=="#"?(Xe(),$e("a",{key:1,href:u.liveUrl,target:u.liveTarget||"_blank",rel:"noopener noreferrer"}," Live Demo ↗ ",8,cb)):Xi("",!0)])],6))),128))]))])])]))}},fb={},hb={style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"24px",textAlign:"center",padding:"0 24px",position:"relative",zIndex:10}};function db(n,e){const t=Uo("RouterLink");return Xe(),$e("div",hb,[e[1]||(e[1]=re("div",{style:{fontSize:"var(--text-7xl)"}},"🤔",-1)),e[2]||(e[2]=re("div",{class:"section-chip"},"404 — Not found",-1)),e[3]||(e[3]=re("h1",{style:{fontFamily:"var(--display)",fontSize:"var(--text-5xl)",fontWeight:800,letterSpacing:"-0.03em"}},[ii(" Lost in "),re("span",{class:"grad-yellow"},"cyberspace")],-1)),nt(t,{to:"/",class:"btn-yellow"},{default:ei(()=>[...e[0]||(e[0]=[ii("Take me home 🏠",-1)])]),_:1})])}const pb=zl(fb,[["render",db]]),mb=P_({history:l_(),routes:[{path:"/",component:Hy},{path:"/projects",component:ub},{path:"/:pathMatch(.*)*",component:pb}],scrollBehavior(n,e,t){return t||(n.hash?{el:n.hash,top:88}:{top:0})}}),Wd=Eg(ry);Wd.use(mb);Wd.mount("#app");
