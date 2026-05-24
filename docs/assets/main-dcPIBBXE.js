(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const st={},Er=[],Nn=()=>{},qf=()=>!1,wo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),yl=n=>n.startsWith("onUpdate:"),St=Object.assign,El=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ap=Object.prototype.hasOwnProperty,et=(n,e)=>ap.call(n,e),Ie=Array.isArray,br=n=>vs(n)==="[object Map]",jf=n=>vs(n)==="[object Set]",uc=n=>vs(n)==="[object Date]",Fe=n=>typeof n=="function",vt=n=>typeof n=="string",Bn=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",Yf=n=>(tt(n)||Fe(n))&&Fe(n.then)&&Fe(n.catch),$f=Object.prototype.toString,vs=n=>$f.call(n),lp=n=>vs(n).slice(8,-1),Kf=n=>vs(n)==="[object Object]",bl=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ts=Sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ro=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},cp=/-\w/g,qt=Ro(n=>n.replace(cp,e=>e.slice(1).toUpperCase())),up=/\B([A-Z])/g,Qi=Ro(n=>n.replace(up,"-$1").toLowerCase()),Co=Ro(n=>n.charAt(0).toUpperCase()+n.slice(1)),Yo=Ro(n=>n?`on${Co(n)}`:""),Dn=(n,e)=>!Object.is(n,e),io=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Zf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Tl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},fp=n=>{const e=vt(n)?Number(n):NaN;return isNaN(e)?n:e};let fc;const Po=()=>fc||(fc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nt(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?mp(i):Nt(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(n)||tt(n))return n}const hp=/;(?![^(]*\))/g,dp=/:([^]+)/,pp=/\/\*[^]*?\*\//g;function mp(n){const e={};return n.replace(pp,"").split(hp).forEach(t=>{if(t){const i=t.split(dp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function On(n){let e="";if(vt(n))e=n;else if(Ie(n))for(let t=0;t<n.length;t++){const i=On(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_p=Sl(gp);function Jf(n){return!!n||n===""}function vp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Al(n[i],e[i]);return t}function Al(n,e){if(n===e)return!0;let t=uc(n),i=uc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Bn(n),i=Bn(e),t||i)return n===e;if(t=Ie(n),i=Ie(e),t||i)return t&&i?vp(n,e):!1;if(t=tt(n),i=tt(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const a in n){const o=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(o&&!l||!o&&l||!Al(n[a],e[a]))return!1}}return String(n)===String(e)}const Qf=n=>!!(n&&n.__v_isRef===!0),Ze=n=>vt(n)?n:n==null?"":Ie(n)||tt(n)&&(n.toString===$f||!Fe(n.toString))?Qf(n)?Ze(n.value):JSON.stringify(n,eh,2):String(n),eh=(n,e)=>Qf(e)?eh(n,e.value):br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[$o(i,s)+" =>"]=r,t),{})}:jf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>$o(t))}:Bn(e)?$o(e):tt(e)&&!Ie(e)&&!Kf(e)?String(e):e,$o=(n,e="")=>{var t;return Bn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class xp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){++this._on===1&&(this.prevScope=$t,$t=this)}off(){this._on>0&&--this._on===0&&($t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Mp(){return $t}let ct;const Ko=new WeakSet;class th{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ko.has(this)&&(Ko.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ih(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hc(this),rh(this);const e=ct,t=Sn;ct=this,Sn=!0;try{return this.fn()}finally{sh(this),ct=e,Sn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cl(e);this.deps=this.depsTail=void 0,hc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ko.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ja(this)&&this.run()}get dirty(){return ja(this)}}let nh=0,ns,is;function ih(n,e=!1){if(n.flags|=8,e){n.next=is,is=n;return}n.next=ns,ns=n}function wl(){nh++}function Rl(){if(--nh>0)return;if(is){let e=is;for(is=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ns;){let e=ns;for(ns=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function rh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sh(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Cl(i),Sp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(oh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function oh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===cs)||(n.globalVersion=cs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ja(n))))return;n.flags|=2;const e=n.dep,t=ct,i=Sn;ct=n,Sn=!0;try{rh(n);const r=n.fn(n._value);(e.version===0||Dn(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ct=t,Sn=i,sh(n),n.flags&=-3}}function Cl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Cl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Sp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Sn=!0;const ah=[];function ri(){ah.push(Sn),Sn=!1}function si(){const n=ah.pop();Sn=n===void 0?!0:n}function hc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ct;ct=void 0;try{e()}finally{ct=t}}}let cs=0;class yp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ct||!Sn||ct===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ct)t=this.activeLink=new yp(ct,this),ct.deps?(t.prevDep=ct.depsTail,ct.depsTail.nextDep=t,ct.depsTail=t):ct.deps=ct.depsTail=t,lh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ct.depsTail,t.nextDep=void 0,ct.depsTail.nextDep=t,ct.depsTail=t,ct.deps===t&&(ct.deps=i)}return t}trigger(e){this.version++,cs++,this.notify(e)}notify(e){wl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Rl()}}}function lh(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)lh(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ya=new WeakMap,Yi=Symbol(""),$a=Symbol(""),us=Symbol("");function Ut(n,e,t){if(Sn&&ct){let i=Ya.get(n);i||Ya.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Pl),r.map=i,r.key=t),r.track()}}function Jn(n,e,t,i,r,s){const a=Ya.get(n);if(!a){cs++;return}const o=l=>{l&&l.trigger()};if(wl(),e==="clear")a.forEach(o);else{const l=Ie(n),u=l&&bl(t);if(l&&t==="length"){const c=Number(i);a.forEach((f,h)=>{(h==="length"||h===us||!Bn(h)&&h>=c)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),u&&o(a.get(us)),e){case"add":l?u&&o(a.get("length")):(o(a.get(Yi)),br(n)&&o(a.get($a)));break;case"delete":l||(o(a.get(Yi)),br(n)&&o(a.get($a)));break;case"set":br(n)&&o(a.get(Yi));break}}Rl()}function tr(n){const e=Je(n);return e===n?e:(Ut(e,"iterate",us),dn(n)?e:e.map(yn))}function Lo(n){return Ut(n=Je(n),"iterate",us),n}function Cn(n,e){return oi(n)?Pr($i(n)?yn(e):e):yn(e)}const Ep={__proto__:null,[Symbol.iterator](){return Zo(this,Symbol.iterator,n=>Cn(this,n))},concat(...n){return tr(this).concat(...n.map(e=>Ie(e)?tr(e):e))},entries(){return Zo(this,"entries",n=>(n[1]=Cn(this,n[1]),n))},every(n,e){return Gn(this,"every",n,e,void 0,arguments)},filter(n,e){return Gn(this,"filter",n,e,t=>t.map(i=>Cn(this,i)),arguments)},find(n,e){return Gn(this,"find",n,e,t=>Cn(this,t),arguments)},findIndex(n,e){return Gn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Gn(this,"findLast",n,e,t=>Cn(this,t),arguments)},findLastIndex(n,e){return Gn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Gn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jo(this,"includes",n)},indexOf(...n){return Jo(this,"indexOf",n)},join(n){return tr(this).join(n)},lastIndexOf(...n){return Jo(this,"lastIndexOf",n)},map(n,e){return Gn(this,"map",n,e,void 0,arguments)},pop(){return Vr(this,"pop")},push(...n){return Vr(this,"push",n)},reduce(n,...e){return dc(this,"reduce",n,e)},reduceRight(n,...e){return dc(this,"reduceRight",n,e)},shift(){return Vr(this,"shift")},some(n,e){return Gn(this,"some",n,e,void 0,arguments)},splice(...n){return Vr(this,"splice",n)},toReversed(){return tr(this).toReversed()},toSorted(n){return tr(this).toSorted(n)},toSpliced(...n){return tr(this).toSpliced(...n)},unshift(...n){return Vr(this,"unshift",n)},values(){return Zo(this,"values",n=>Cn(this,n))}};function Zo(n,e,t){const i=Lo(n),r=i[e]();return i!==n&&!dn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const bp=Array.prototype;function Gn(n,e,t,i,r,s){const a=Lo(n),o=a!==n&&!dn(n),l=a[e];if(l!==bp[e]){const f=l.apply(n,s);return o?yn(f):f}let u=t;a!==n&&(o?u=function(f,h){return t.call(this,Cn(n,f),h,n)}:t.length>2&&(u=function(f,h){return t.call(this,f,h,n)}));const c=l.call(a,u,i);return o&&r?r(c):c}function dc(n,e,t,i){const r=Lo(n),s=r!==n&&!dn(n);let a=t,o=!1;r!==n&&(s?(o=i.length===0,a=function(u,c,f){return o&&(o=!1,u=Cn(n,u)),t.call(this,u,Cn(n,c),f,n)}):t.length>3&&(a=function(u,c,f){return t.call(this,u,c,f,n)}));const l=r[e](a,...i);return o?Cn(n,l):l}function Jo(n,e,t){const i=Je(n);Ut(i,"iterate",us);const r=i[e](...t);return(r===-1||r===!1)&&Il(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function Vr(n,e,t=[]){ri(),wl();const i=Je(n)[e].apply(n,t);return Rl(),si(),i}const Tp=Sl("__proto__,__v_isRef,__isVue"),ch=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Bn));function Ap(n){Bn(n)||(n=String(n));const e=Je(this);return Ut(e,"has",n),e.hasOwnProperty(n)}class uh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Op:ph:s?dh:hh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ie(e);if(!r){let l;if(a&&(l=Ep[t]))return l;if(t==="hasOwnProperty")return Ap}const o=Reflect.get(e,t,Bt(e)?e:i);if((Bn(t)?ch.has(t):Tp(t))||(r||Ut(e,"get",t),s))return o;if(Bt(o)){const l=a&&bl(t)?o:o.value;return r&&tt(l)?Za(l):l}return tt(o)?r?Za(o):xs(o):o}}class fh extends uh{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Ie(e)&&bl(t);if(!this._isShallow){const u=oi(s);if(!dn(i)&&!oi(i)&&(s=Je(s),i=Je(i)),!a&&Bt(s)&&!Bt(i))return u||(s.value=i),!0}const o=a?Number(t)<e.length:et(e,t),l=Reflect.set(e,t,i,Bt(e)?e:r);return e===Je(r)&&(o?Dn(i,s)&&Jn(e,"set",t,i):Jn(e,"add",t,i)),l}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Jn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Bn(t)||!ch.has(t))&&Ut(e,"has",t),i}ownKeys(e){return Ut(e,"iterate",Ie(e)?"length":Yi),Reflect.ownKeys(e)}}class wp extends uh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Rp=new fh,Cp=new wp,Pp=new fh(!0);const Ka=n=>n,Cs=n=>Reflect.getPrototypeOf(n);function Lp(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),a=br(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,u=r[n](...i),c=t?Ka:e?Pr:yn;return!e&&Ut(s,"iterate",l?$a:Yi),St(Object.create(u),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:o?[c(f[0]),c(f[1])]:c(f),done:h}}})}}function Ps(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Dp(n,e){const t={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);n||(Dn(r,o)&&Ut(a,"get",r),Ut(a,"get",o));const{has:l}=Cs(a),u=e?Ka:n?Pr:yn;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Ut(Je(r),"iterate",Yi),r.size},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return n||(Dn(r,o)&&Ut(a,"has",r),Ut(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),u=e?Ka:n?Pr:yn;return!n&&Ut(l,"iterate",Yi),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return St(t,n?{add:Ps("add"),set:Ps("set"),delete:Ps("delete"),clear:Ps("clear")}:{add(r){const s=Je(this),a=Cs(s),o=Je(r),l=!e&&!dn(r)&&!oi(r)?o:r;return a.has.call(s,l)||Dn(r,l)&&a.has.call(s,r)||Dn(o,l)&&a.has.call(s,o)||(s.add(l),Jn(s,"add",l,l)),this},set(r,s){!e&&!dn(s)&&!oi(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=Cs(a);let u=o.call(a,r);u||(r=Je(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?Dn(s,c)&&Jn(a,"set",r,s):Jn(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=Cs(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&Jn(s,"delete",r,void 0),u},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&Jn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Lp(r,n,e)}),t}function Ll(n,e){const t=Dp(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const Ip={get:Ll(!1,!1)},Up={get:Ll(!1,!0)},Np={get:Ll(!0,!1)};const hh=new WeakMap,dh=new WeakMap,ph=new WeakMap,Op=new WeakMap;function Fp(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bp(n){return n.__v_skip||!Object.isExtensible(n)?0:Fp(lp(n))}function xs(n){return oi(n)?n:Dl(n,!1,Rp,Ip,hh)}function mh(n){return Dl(n,!1,Pp,Up,dh)}function Za(n){return Dl(n,!0,Cp,Np,ph)}function Dl(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Bp(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function $i(n){return oi(n)?$i(n.__v_raw):!!(n&&n.__v_isReactive)}function oi(n){return!!(n&&n.__v_isReadonly)}function dn(n){return!!(n&&n.__v_isShallow)}function Il(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function zp(n){return!et(n,"__v_skip")&&Object.isExtensible(n)&&Zf(n,"__v_skip",!0),n}const yn=n=>tt(n)?xs(n):n,Pr=n=>tt(n)?Za(n):n;function Bt(n){return n?n.__v_isRef===!0:!1}function Ft(n){return gh(n,!1)}function Hp(n){return gh(n,!0)}function gh(n,e){return Bt(n)?n:new Gp(n,e)}class Gp{constructor(e,t){this.dep=new Pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:yn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||dn(e)||oi(e);e=i?e:Je(e),Dn(e,t)&&(this._rawValue=e,this._value=i?e:yn(e),this.dep.trigger())}}function Tr(n){return Bt(n)?n.value:n}const kp={get:(n,e,t)=>e==="__v_raw"?n:Tr(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Bt(r)&&!Bt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function _h(n){return $i(n)?n:new Proxy(n,kp)}class Vp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ct!==this)return ih(this,!0),!0}get value(){const e=this.dep.track();return oh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Wp(n,e,t=!1){let i,r;return Fe(n)?i=n:(i=n.get,r=n.set),new Vp(i,r,t)}const Ls={},uo=new WeakMap;let Hi;function Xp(n,e=!1,t=Hi){if(t){let i=uo.get(t);i||uo.set(t,i=[]),i.push(n)}}function qp(n,e,t=st){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,u=b=>r?b:dn(b)||r===!1||r===0?Qn(b,1):Qn(b);let c,f,h,p,_=!1,S=!1;if(Bt(n)?(f=()=>n.value,_=dn(n)):$i(n)?(f=()=>u(n),_=!0):Ie(n)?(S=!0,_=n.some(b=>$i(b)||dn(b)),f=()=>n.map(b=>{if(Bt(b))return b.value;if($i(b))return u(b);if(Fe(b))return l?l(b,2):b()})):Fe(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){ri();try{h()}finally{si()}}const b=Hi;Hi=c;try{return l?l(n,3,[p]):n(p)}finally{Hi=b}}:f=Nn,e&&r){const b=f,P=r===!0?1/0:r;f=()=>Qn(b(),P)}const m=Mp(),d=()=>{c.stop(),m&&m.active&&El(m.effects,c)};if(s&&e){const b=e;e=(...P)=>{b(...P),d()}}let y=S?new Array(n.length).fill(Ls):Ls;const g=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(e){const P=c.run();if(r||_||(S?P.some((R,w)=>Dn(R,y[w])):Dn(P,y))){h&&h();const R=Hi;Hi=c;try{const w=[P,y===Ls?void 0:S&&y[0]===Ls?[]:y,p];y=P,l?l(e,3,w):e(...w)}finally{Hi=R}}}else c.run()};return o&&o(g),c=new th(f),c.scheduler=a?()=>a(g,!1):g,p=b=>Xp(b,!1,c),h=c.onStop=()=>{const b=uo.get(c);if(b){if(l)l(b,4);else for(const P of b)P();uo.delete(c)}},e?i?g(!0):y=c.run():a?a(g.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Qn(n,e=1/0,t){if(e<=0||!tt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Bt(n))Qn(n.value,e,t);else if(Ie(n))for(let i=0;i<n.length;i++)Qn(n[i],e,t);else if(jf(n)||br(n))n.forEach(i=>{Qn(i,e,t)});else if(Kf(n)){for(const i in n)Qn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Qn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ms(n,e,t,i){try{return i?n(...i):n()}catch(r){Do(r,e,t)}}function En(n,e,t,i){if(Fe(n)){const r=Ms(n,e,t,i);return r&&Yf(r)&&r.catch(s=>{Do(s,e,t)}),r}if(Ie(n)){const r=[];for(let s=0;s<n.length;s++)r.push(En(n[s],e,t,i));return r}}function Do(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||st;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](n,l,u)===!1)return}o=o.parent}if(s){ri(),Ms(s,null,10,[n,l,u]),si();return}}jp(n,t,r,i,a)}function jp(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Wt=[];let wn=-1;const Ar=[];let gi=null,vr=0;const vh=Promise.resolve();let fo=null;function xh(n){const e=fo||vh;return n?e.then(this?n.bind(this):n):e}function Yp(n){let e=wn+1,t=Wt.length;for(;e<t;){const i=e+t>>>1,r=Wt[i],s=fs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ul(n){if(!(n.flags&1)){const e=fs(n),t=Wt[Wt.length-1];!t||!(n.flags&2)&&e>=fs(t)?Wt.push(n):Wt.splice(Yp(e),0,n),n.flags|=1,Mh()}}function Mh(){fo||(fo=vh.then(yh))}function $p(n){Ie(n)?Ar.push(...n):gi&&n.id===-1?gi.splice(vr+1,0,n):n.flags&1||(Ar.push(n),n.flags|=1),Mh()}function pc(n,e,t=wn+1){for(;t<Wt.length;t++){const i=Wt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Wt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Sh(n){if(Ar.length){const e=[...new Set(Ar)].sort((t,i)=>fs(t)-fs(i));if(Ar.length=0,gi){gi.push(...e);return}for(gi=e,vr=0;vr<gi.length;vr++){const t=gi[vr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}gi=null,vr=0}}const fs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function yh(n){try{for(wn=0;wn<Wt.length;wn++){const e=Wt[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ms(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<Wt.length;wn++){const e=Wt[wn];e&&(e.flags&=-2)}wn=-1,Wt.length=0,Sh(),fo=null,(Wt.length||Ar.length)&&yh()}}let on=null,Eh=null;function ho(n){const e=on;return on=n,Eh=n&&n.type.__scopeId||null,e}function ni(n,e=on,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&go(-1);const s=ho(e);let a;try{a=n(...r)}finally{ho(s),i._d&&go(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Kp(n,e){if(on===null)return n;const t=Bo(on),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=st]=e[r];s&&(Fe(s)&&(s={mounted:s,updated:s}),s.deep&&Qn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function Pi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ri(),En(l,t,8,[n.el,o,n,e]),si())}}function ro(n,e){if(Ot){let t=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===t&&(t=Ot.provides=Object.create(i)),t[n]=e}}function Fn(n,e,t=!1){const i=nd();if(i||wr){let r=wr?wr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i&&i.proxy):e}}const Zp=Symbol.for("v-scx"),Jp=()=>Fn(Zp);function so(n,e,t){return bh(n,e,t)}function bh(n,e,t=st){const{immediate:i,deep:r,flush:s,once:a}=t,o=St({},t),l=e&&i||!e&&s!=="post";let u;if(ps){if(s==="sync"){const p=Jp();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Nn,p.resume=Nn,p.pause=Nn,p}}const c=Ot;o.call=(p,_,S)=>En(p,c,_,S);let f=!1;s==="post"?o.scheduler=p=>{Yt(p,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():Ul(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const h=qp(n,e,o);return ps&&(u?u.push(h):l&&h()),h}function Qp(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?Th(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const a=Ss(this),o=bh(r,s.bind(i),t);return a(),o}function Th(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const em=Symbol("_vte"),Ah=n=>n.__isTeleport,Rn=Symbol("_leaveCb"),Wr=Symbol("_enterCb");function tm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Fr(()=>{n.isMounted=!0}),Br(()=>{n.isUnmounting=!0}),n}const fn=[Function,Array],wh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fn,onEnter:fn,onAfterEnter:fn,onEnterCancelled:fn,onBeforeLeave:fn,onLeave:fn,onAfterLeave:fn,onLeaveCancelled:fn,onBeforeAppear:fn,onAppear:fn,onAfterAppear:fn,onAppearCancelled:fn},Rh=n=>{const e=n.subTree;return e.component?Rh(e.component):e},nm={name:"BaseTransition",props:wh,setup(n,{slots:e}){const t=nd(),i=tm();return()=>{const r=e.default&&Lh(e.default(),!0);if(!r||!r.length)return;const s=Ch(r),a=Je(n),{mode:o}=a;if(i.isLeaving)return Qo(s);const l=mc(s);if(!l)return Qo(s);let u=Ja(l,a,i,t,f=>u=f);l.type!==Xt&&hs(l,u);let c=t.subTree&&mc(t.subTree);if(c&&c.type!==Xt&&!Vi(c,l)&&Rh(t).type!==Xt){let f=Ja(c,a,i,t);if(hs(c,f),o==="out-in"&&l.type!==Xt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,c=void 0},Qo(s);o==="in-out"&&l.type!==Xt?f.delayLeave=(h,p,_)=>{const S=Ph(i,c);S[String(c.key)]=c,h[Rn]=()=>{p(),h[Rn]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Ch(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Xt){e=t;break}}return e}const im=nm;function Ph(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Ja(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:S,onBeforeAppear:m,onAppear:d,onAfterAppear:y,onAppearCancelled:g}=e,b=String(n.key),P=Ph(t,n),R=(C,M)=>{C&&En(C,i,9,M)},w=(C,M)=>{const T=M[1];R(C,M),Ie(C)?C.every(H=>H.length<=1)&&T():C.length<=1&&T()},N={mode:a,persisted:o,beforeEnter(C){let M=l;if(!t.isMounted)if(s)M=m||l;else return;C[Rn]&&C[Rn](!0);const T=P[b];T&&Vi(n,T)&&T.el[Rn]&&T.el[Rn](),R(M,[C])},enter(C){if(P[b]===n)return;let M=u,T=c,H=f;if(!t.isMounted)if(s)M=d||u,T=y||c,H=g||f;else return;let te=!1;C[Wr]=J=>{te||(te=!0,J?R(H,[C]):R(T,[C]),N.delayedLeave&&N.delayedLeave(),C[Wr]=void 0)};const I=C[Wr].bind(null,!1);M?w(M,[C,I]):I()},leave(C,M){const T=String(n.key);if(C[Wr]&&C[Wr](!0),t.isUnmounting)return M();R(h,[C]);let H=!1;C[Rn]=I=>{H||(H=!0,M(),I?R(S,[C]):R(_,[C]),C[Rn]=void 0,P[T]===n&&delete P[T])};const te=C[Rn].bind(null,!1);P[T]=n,p?w(p,[C,te]):te()},clone(C){const M=Ja(C,e,t,i,r);return r&&r(M),M}};return N}function Qo(n){if(Io(n))return n=bi(n),n.children=null,n}function mc(n){if(!Io(n))return Ah(n.type)&&n.children?Ch(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Fe(t.default))return t.default()}}function hs(n,e){n.shapeFlag&6&&n.component?(n.transition=e,hs(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Lh(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===rt?(a.patchFlag&128&&r++,i=i.concat(Lh(a.children,e,o))):(e||a.type!==Xt)&&i.push(o!=null?bi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Dh(n,e){return Fe(n)?St({name:n.name},e,{setup:n}):n}function Ih(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function gc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const po=new WeakMap;function rs(n,e,t,i,r=!1){if(Ie(n)){n.forEach((S,m)=>rs(S,e&&(Ie(e)?e[m]:e),t,i,r));return}if(ss(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&rs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Bo(i.component):i.el,a=r?null:s,{i:o,r:l}=n,u=e&&e.r,c=o.refs===st?o.refs={}:o.refs,f=o.setupState,h=Je(f),p=f===st?qf:S=>gc(c,S)?!1:et(h,S),_=(S,m)=>!(m&&gc(c,m));if(u!=null&&u!==l){if(_c(e),vt(u))c[u]=null,p(u)&&(f[u]=null);else if(Bt(u)){const S=e;_(u,S.k)&&(u.value=null),S.k&&(c[S.k]=null)}}if(Fe(l))Ms(l,o,12,[a,c]);else{const S=vt(l),m=Bt(l);if(S||m){const d=()=>{if(n.f){const y=S?p(l)?f[l]:c[l]:_()||!n.k?l.value:c[n.k];if(r)Ie(y)&&El(y,s);else if(Ie(y))y.includes(s)||y.push(s);else if(S)c[l]=[s],p(l)&&(f[l]=c[l]);else{const g=[s];_(l,n.k)&&(l.value=g),n.k&&(c[n.k]=g)}}else S?(c[l]=a,p(l)&&(f[l]=a)):m&&(_(l,n.k)&&(l.value=a),n.k&&(c[n.k]=a))};if(a){const y=()=>{d(),po.delete(n)};y.id=-1,po.set(n,y),Yt(y,t)}else _c(n),d()}}}function _c(n){const e=po.get(n);e&&(e.flags|=8,po.delete(n))}Po().requestIdleCallback;Po().cancelIdleCallback;const ss=n=>!!n.type.__asyncLoader,Io=n=>n.type.__isKeepAlive;function rm(n,e){Uh(n,"a",e)}function sm(n,e){Uh(n,"da",e)}function Uh(n,e,t=Ot){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Uo(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Io(r.parent.vnode)&&om(i,e,t,r),r=r.parent}}function om(n,e,t,i){const r=Uo(e,n,i,!0);Nh(()=>{El(i[e],r)},t)}function Uo(n,e,t=Ot,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{ri();const o=Ss(t),l=En(e,t,n,a);return o(),si(),l});return i?r.unshift(s):r.push(s),s}}const ai=n=>(e,t=Ot)=>{(!ps||n==="sp")&&Uo(n,(...i)=>e(...i),t)},am=ai("bm"),Fr=ai("m"),lm=ai("bu"),cm=ai("u"),Br=ai("bum"),Nh=ai("um"),um=ai("sp"),fm=ai("rtg"),hm=ai("rtc");function dm(n,e=Ot){Uo("ec",n,e)}const pm="components";function No(n,e){return gm(pm,n,!0,e)||n}const mm=Symbol.for("v-ndc");function gm(n,e,t=!0,i=!1){const r=on||Ot;if(r){const s=r.type;{const o=eg(s,!1);if(o&&(o===e||o===qt(e)||o===Co(qt(e))))return s}const a=vc(r[n]||s[n],e)||vc(r.appContext[n],e);return!a&&i?s:a}}function vc(n,e){return n&&(n[e]||n[qt(e)]||n[Co(qt(e))])}function Ct(n,e,t,i){let r;const s=t,a=Ie(n);if(a||vt(n)){const o=a&&$i(n);let l=!1,u=!1;o&&(l=!dn(n),u=oi(n),n=Lo(n)),r=new Array(n.length);for(let c=0,f=n.length;c<f;c++)r[c]=e(l?u?Pr(yn(n[c])):yn(n[c]):n[c],c,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s)}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=e(n[c],c,l,s)}}else r=[];return r}const Qa=n=>n?id(n)?Bo(n):Qa(n.parent):null,os=St(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qa(n.parent),$root:n=>Qa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fh(n),$forceUpdate:n=>n.f||(n.f=()=>{Ul(n.update)}),$nextTick:n=>n.n||(n.n=xh.bind(n.proxy)),$watch:n=>Qp.bind(n)}),ea=(n,e)=>n!==st&&!n.__isScriptSetup&&et(n,e),_m={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ea(i,e))return a[e]=1,i[e];if(r!==st&&et(r,e))return a[e]=2,r[e];if(et(s,e))return a[e]=3,s[e];if(t!==st&&et(t,e))return a[e]=4,t[e];el&&(a[e]=0)}}const u=os[e];let c,f;if(u)return e==="$attrs"&&Ut(n.attrs,"get",""),u(n);if((c=o.__cssModules)&&(c=c[e]))return c;if(t!==st&&et(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,et(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ea(r,e)?(r[e]=t,!0):i!==st&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==st&&o[0]!=="$"&&et(n,o)||ea(e,o)||et(s,o)||et(i,o)||et(os,o)||et(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xc(n){return Ie(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let el=!0;function vm(n){const e=Fh(n),t=n.proxy,i=n.ctx;el=!1,e.beforeCreate&&Mc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:y,destroyed:g,unmounted:b,render:P,renderTracked:R,renderTriggered:w,errorCaptured:N,serverPrefetch:C,expose:M,inheritAttrs:T,components:H,directives:te,filters:I}=e;if(u&&xm(u,i,null),a)for(const re in a){const O=a[re];Fe(O)&&(i[re]=O.bind(t))}if(r){const re=r.call(t,t);tt(re)&&(n.data=xs(re))}if(el=!0,s)for(const re in s){const O=s[re],ne=Fe(O)?O.bind(t,t):Fe(O.get)?O.get.bind(t,t):Nn,oe=!Fe(O)&&Fe(O.set)?O.set.bind(t):Nn,he=At({get:ne,set:oe});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>he.value,set:me=>he.value=me})}if(o)for(const re in o)Oh(o[re],i,t,re);if(l){const re=Fe(l)?l.call(t):l;Reflect.ownKeys(re).forEach(O=>{ro(O,re[O])})}c&&Mc(c,n,"c");function q(re,O){Ie(O)?O.forEach(ne=>re(ne.bind(t))):O&&re(O.bind(t))}if(q(am,f),q(Fr,h),q(lm,p),q(cm,_),q(rm,S),q(sm,m),q(dm,N),q(hm,R),q(fm,w),q(Br,y),q(Nh,b),q(um,C),Ie(M))if(M.length){const re=n.exposed||(n.exposed={});M.forEach(O=>{Object.defineProperty(re,O,{get:()=>t[O],set:ne=>t[O]=ne,enumerable:!0})})}else n.exposed||(n.exposed={});P&&n.render===Nn&&(n.render=P),T!=null&&(n.inheritAttrs=T),H&&(n.components=H),te&&(n.directives=te),C&&Ih(n)}function xm(n,e,t=Nn){Ie(n)&&(n=tl(n));for(const i in n){const r=n[i];let s;tt(r)?"default"in r?s=Fn(r.from||i,r.default,!0):s=Fn(r.from||i):s=Fn(r),Bt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Mc(n,e,t){En(Ie(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Oh(n,e,t,i){let r=i.includes(".")?Th(t,i):()=>t[i];if(vt(n)){const s=e[n];Fe(s)&&so(r,s)}else if(Fe(n))so(r,n.bind(t));else if(tt(n))if(Ie(n))n.forEach(s=>Oh(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&so(r,s,n)}}function Fh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(u=>mo(l,u,a,!0)),mo(l,e,a)),tt(e)&&s.set(e,l),l}function mo(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&mo(n,s,t,!0),r&&r.forEach(a=>mo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Mm[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Mm={data:Sc,props:yc,emits:yc,methods:es,computed:es,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:es,directives:es,watch:ym,provide:Sc,inject:Sm};function Sc(n,e){return e?n?function(){return St(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function Sm(n,e){return es(tl(n),tl(e))}function tl(n){if(Ie(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ht(n,e){return n?[...new Set([].concat(n,e))]:e}function es(n,e){return n?St(Object.create(null),n,e):e}function yc(n,e){return n?Ie(n)&&Ie(e)?[...new Set([...n,...e])]:St(Object.create(null),xc(n),xc(e??{})):e}function ym(n,e){if(!n)return e;if(!e)return n;const t=St(Object.create(null),n);for(const i in e)t[i]=Ht(n[i],e[i]);return t}function Bh(){return{app:null,config:{isNativeTag:qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Em=0;function bm(n,e){return function(i,r=null){Fe(i)||(i=St({},i)),r!=null&&!tt(r)&&(r=null);const s=Bh(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:Em++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ng,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&Fe(c.install)?(a.add(c),c.install(u,...f)):Fe(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,h){if(!l){const p=u._ceVNode||it(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,c,h),l=!0,u._container=c,c.__vue_app__=u,Bo(p.component)}},onUnmount(c){o.push(c)},unmount(){l&&(En(o,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=wr;wr=u;try{return c()}finally{wr=f}}};return u}}let wr=null;const Tm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${qt(e)}Modifiers`]||n[`${Qi(e)}Modifiers`];function Am(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||st;let r=t;const s=e.startsWith("update:"),a=s&&Tm(i,e.slice(7));a&&(a.trim&&(r=t.map(c=>vt(c)?c.trim():c)),a.number&&(r=t.map(Tl)));let o,l=i[o=Yo(e)]||i[o=Yo(qt(e))];!l&&s&&(l=i[o=Yo(Qi(e))]),l&&En(l,n,6,r);const u=i[o+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,En(u,n,6,r)}}const wm=new WeakMap;function zh(n,e,t=!1){const i=t?wm:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Fe(n)){const l=u=>{const c=zh(u,e,!0);c&&(o=!0,St(a,c))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(tt(n)&&i.set(n,null),null):(Ie(s)?s.forEach(l=>a[l]=null):St(a,s),tt(n)&&i.set(n,a),a)}function Oo(n,e){return!n||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,Qi(e))||et(n,e))}function Ec(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:h,setupState:p,ctx:_,inheritAttrs:S}=n,m=ho(n);let d,y;try{if(t.shapeFlag&4){const b=r||i,P=b;d=Pn(u.call(P,b,c,f,p,h,_)),y=o}else{const b=e;d=Pn(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),y=e.props?o:Rm(o)}}catch(b){as.length=0,Do(b,n,1),d=it(Xt)}let g=d;if(y&&S!==!1){const b=Object.keys(y),{shapeFlag:P}=g;b.length&&P&7&&(s&&b.some(yl)&&(y=Cm(y,s)),g=bi(g,y,!1,!0))}return t.dirs&&(g=bi(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(t.dirs):t.dirs),t.transition&&hs(g,t.transition),d=g,ho(m),d}const Rm=n=>{let e;for(const t in n)(t==="class"||t==="style"||wo(t))&&((e||(e={}))[t]=n[t]);return e},Cm=(n,e)=>{const t={};for(const i in n)(!yl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Pm(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?bc(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(Hh(a,i,h)&&!Oo(u,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?bc(i,a,u):!0:!!a;return!1}function bc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(Hh(e,n,s)&&!Oo(t,s))return!0}return!1}function Hh(n,e,t){const i=n[t],r=e[t];return t==="style"&&tt(i)&&tt(r)?!Al(i,r):i!==r}function Lm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Gh={},kh=()=>Object.create(Gh),Vh=n=>Object.getPrototypeOf(n)===Gh;function Dm(n,e,t,i=!1){const r={},s=kh();n.propsDefaults=Object.create(null),Wh(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:mh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Im(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Je(r),[l]=n.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=n.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Oo(n.emitsOptions,h))continue;const p=e[h];if(l)if(et(s,h))p!==s[h]&&(s[h]=p,u=!0);else{const _=qt(h);r[_]=nl(l,o,_,p,n,!1)}else p!==s[h]&&(s[h]=p,u=!0)}}}else{Wh(n,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!et(e,f)&&((c=Qi(f))===f||!et(e,c)))&&(l?t&&(t[f]!==void 0||t[c]!==void 0)&&(r[f]=nl(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!et(e,f))&&(delete s[f],u=!0)}u&&Jn(n.attrs,"set","")}function Wh(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(ts(l))continue;const u=e[l];let c;r&&et(r,c=qt(l))?!s||!s.includes(c)?t[c]=u:(o||(o={}))[c]=u:Oo(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=Je(t),u=o||st;for(let c=0;c<s.length;c++){const f=s[c];t[f]=nl(r,l,f,u[f],n,!et(u,f))}}return a}function nl(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=et(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Fe(l)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const c=Ss(r);i=u[t]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Qi(t))&&(i=!0))}return i}const Um=new WeakMap;function Xh(n,e,t=!1){const i=t?Um:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Fe(n)){const c=f=>{l=!0;const[h,p]=Xh(f,e,!0);St(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!s&&!l)return tt(n)&&i.set(n,Er),Er;if(Ie(s))for(let c=0;c<s.length;c++){const f=qt(s[c]);Tc(f)&&(a[f]=st)}else if(s)for(const c in s){const f=qt(c);if(Tc(f)){const h=s[c],p=a[f]=Ie(h)||Fe(h)?{type:h}:St({},h),_=p.type;let S=!1,m=!0;if(Ie(_))for(let d=0;d<_.length;++d){const y=_[d],g=Fe(y)&&y.name;if(g==="Boolean"){S=!0;break}else g==="String"&&(m=!1)}else S=Fe(_)&&_.name==="Boolean";p[0]=S,p[1]=m,(S||et(p,"default"))&&o.push(f)}}const u=[a,o];return tt(n)&&i.set(n,u),u}function Tc(n){return n[0]!=="$"&&!ts(n)}const Nl=n=>n==="_"||n==="_ctx"||n==="$stable",Ol=n=>Ie(n)?n.map(Pn):[Pn(n)],Nm=(n,e,t)=>{if(e._n)return e;const i=ni((...r)=>Ol(e(...r)),t);return i._c=!1,i},qh=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Nl(r))continue;const s=n[r];if(Fe(s))e[r]=Nm(r,s,i);else if(s!=null){const a=Ol(s);e[r]=()=>a}}},jh=(n,e)=>{const t=Ol(e);n.slots.default=()=>t},Yh=(n,e,t)=>{for(const i in e)(t||!Nl(i))&&(n[i]=e[i])},Om=(n,e,t)=>{const i=n.slots=kh();if(n.vnode.shapeFlag&32){const r=e._;r?(Yh(i,e,t),t&&Zf(i,"_",r,!0)):qh(e,i)}else e&&jh(n,e)},Fm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=st;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Yh(r,e,t):(s=!e.$stable,qh(e,r)),a=e}else e&&(jh(n,e),a={default:1});if(s)for(const o in r)!Nl(o)&&a[o]==null&&delete r[o]},Yt=km;function Bm(n){return zm(n)}function zm(n,e){const t=Po();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:p=Nn,insertStaticContent:_}=n,S=(v,L,D,W=null,X=null,j=null,ue=void 0,le=null,fe=!!L.dynamicChildren)=>{if(v===L)return;v&&!Vi(v,L)&&(W=V(v),me(v,X,j,!0),v=null),L.patchFlag===-2&&(fe=!1,L.dynamicChildren=null);const{type:E,ref:x,shapeFlag:U}=L;switch(E){case Fo:m(v,L,D,W);break;case Xt:d(v,L,D,W);break;case oo:v==null&&y(L,D,W,ue);break;case rt:H(v,L,D,W,X,j,ue,le,fe);break;default:U&1?P(v,L,D,W,X,j,ue,le,fe):U&6?te(v,L,D,W,X,j,ue,le,fe):(U&64||U&128)&&E.process(v,L,D,W,X,j,ue,le,fe,xe)}x!=null&&X?rs(x,v&&v.ref,j,L||v,!L):x==null&&v&&v.ref!=null&&rs(v.ref,null,j,v,!0)},m=(v,L,D,W)=>{if(v==null)i(L.el=o(L.children),D,W);else{const X=L.el=v.el;L.children!==v.children&&u(X,L.children)}},d=(v,L,D,W)=>{v==null?i(L.el=l(L.children||""),D,W):L.el=v.el},y=(v,L,D,W)=>{[v.el,v.anchor]=_(v.children,L,D,W,v.el,v.anchor)},g=({el:v,anchor:L},D,W)=>{let X;for(;v&&v!==L;)X=h(v),i(v,D,W),v=X;i(L,D,W)},b=({el:v,anchor:L})=>{let D;for(;v&&v!==L;)D=h(v),r(v),v=D;r(L)},P=(v,L,D,W,X,j,ue,le,fe)=>{if(L.type==="svg"?ue="svg":L.type==="math"&&(ue="mathml"),v==null)R(L,D,W,X,j,ue,le,fe);else{const E=v.el&&v.el._isVueCE?v.el:null;try{E&&E._beginPatch(),C(v,L,X,j,ue,le,fe)}finally{E&&E._endPatch()}}},R=(v,L,D,W,X,j,ue,le)=>{let fe,E;const{props:x,shapeFlag:U,transition:G,dirs:ee}=v;if(fe=v.el=a(v.type,j,x&&x.is,x),U&8?c(fe,v.children):U&16&&N(v.children,fe,null,W,X,ta(v,j),ue,le),ee&&Pi(v,null,W,"created"),w(fe,v,v.scopeId,ue,W),x){for(const Ae in x)Ae!=="value"&&!ts(Ae)&&s(fe,Ae,null,x[Ae],j,W);"value"in x&&s(fe,"value",null,x.value,j),(E=x.onVnodeBeforeMount)&&An(E,W,v)}ee&&Pi(v,null,W,"beforeMount");const se=Hm(X,G);se&&G.beforeEnter(fe),i(fe,L,D),((E=x&&x.onVnodeMounted)||se||ee)&&Yt(()=>{E&&An(E,W,v),se&&G.enter(fe),ee&&Pi(v,null,W,"mounted")},X)},w=(v,L,D,W,X)=>{if(D&&p(v,D),W)for(let j=0;j<W.length;j++)p(v,W[j]);if(X){let j=X.subTree;if(L===j||Jh(j.type)&&(j.ssContent===L||j.ssFallback===L)){const ue=X.vnode;w(v,ue,ue.scopeId,ue.slotScopeIds,X.parent)}}},N=(v,L,D,W,X,j,ue,le,fe=0)=>{for(let E=fe;E<v.length;E++){const x=v[E]=le?Zn(v[E]):Pn(v[E]);S(null,x,L,D,W,X,j,ue,le)}},C=(v,L,D,W,X,j,ue)=>{const le=L.el=v.el;let{patchFlag:fe,dynamicChildren:E,dirs:x}=L;fe|=v.patchFlag&16;const U=v.props||st,G=L.props||st;let ee;if(D&&Li(D,!1),(ee=G.onVnodeBeforeUpdate)&&An(ee,D,L,v),x&&Pi(L,v,D,"beforeUpdate"),D&&Li(D,!0),(U.innerHTML&&G.innerHTML==null||U.textContent&&G.textContent==null)&&c(le,""),E?M(v.dynamicChildren,E,le,D,W,ta(L,X),j):ue||O(v,L,le,null,D,W,ta(L,X),j,!1),fe>0){if(fe&16)T(le,U,G,D,X);else if(fe&2&&U.class!==G.class&&s(le,"class",null,G.class,X),fe&4&&s(le,"style",U.style,G.style,X),fe&8){const se=L.dynamicProps;for(let Ae=0;Ae<se.length;Ae++){const Ee=se[Ae],pe=U[Ee],ve=G[Ee];(ve!==pe||Ee==="value")&&s(le,Ee,pe,ve,X,D)}}fe&1&&v.children!==L.children&&c(le,L.children)}else!ue&&E==null&&T(le,U,G,D,X);((ee=G.onVnodeUpdated)||x)&&Yt(()=>{ee&&An(ee,D,L,v),x&&Pi(L,v,D,"updated")},W)},M=(v,L,D,W,X,j,ue)=>{for(let le=0;le<L.length;le++){const fe=v[le],E=L[le],x=fe.el&&(fe.type===rt||!Vi(fe,E)||fe.shapeFlag&198)?f(fe.el):D;S(fe,E,x,null,W,X,j,ue,!0)}},T=(v,L,D,W,X)=>{if(L!==D){if(L!==st)for(const j in L)!ts(j)&&!(j in D)&&s(v,j,L[j],null,X,W);for(const j in D){if(ts(j))continue;const ue=D[j],le=L[j];ue!==le&&j!=="value"&&s(v,j,le,ue,X,W)}"value"in D&&s(v,"value",L.value,D.value,X)}},H=(v,L,D,W,X,j,ue,le,fe)=>{const E=L.el=v?v.el:o(""),x=L.anchor=v?v.anchor:o("");let{patchFlag:U,dynamicChildren:G,slotScopeIds:ee}=L;ee&&(le=le?le.concat(ee):ee),v==null?(i(E,D,W),i(x,D,W),N(L.children||[],D,x,X,j,ue,le,fe)):U>0&&U&64&&G&&v.dynamicChildren&&v.dynamicChildren.length===G.length?(M(v.dynamicChildren,G,D,X,j,ue,le),(L.key!=null||X&&L===X.subTree)&&$h(v,L,!0)):O(v,L,D,x,X,j,ue,le,fe)},te=(v,L,D,W,X,j,ue,le,fe)=>{L.slotScopeIds=le,v==null?L.shapeFlag&512?X.ctx.activate(L,D,W,ue,fe):I(L,D,W,X,j,ue,fe):J(v,L,fe)},I=(v,L,D,W,X,j,ue)=>{const le=v.component=$m(v,W,X);if(Io(v)&&(le.ctx.renderer=xe),Km(le,!1,ue),le.asyncDep){if(X&&X.registerDep(le,q,ue),!v.el){const fe=le.subTree=it(Xt);d(null,fe,L,D),v.placeholder=fe.el}}else q(le,v,L,D,X,j,ue)},J=(v,L,D)=>{const W=L.component=v.component;if(Pm(v,L,D))if(W.asyncDep&&!W.asyncResolved){re(W,L,D);return}else W.next=L,W.update();else L.el=v.el,W.vnode=L},q=(v,L,D,W,X,j,ue)=>{const le=()=>{if(v.isMounted){let{next:U,bu:G,u:ee,parent:se,vnode:Ae}=v;{const de=Kh(v);if(de){U&&(U.el=Ae.el,re(v,U,ue)),de.asyncDep.then(()=>{Yt(()=>{v.isUnmounted||E()},X)});return}}let Ee=U,pe;Li(v,!1),U?(U.el=Ae.el,re(v,U,ue)):U=Ae,G&&io(G),(pe=U.props&&U.props.onVnodeBeforeUpdate)&&An(pe,se,U,Ae),Li(v,!0);const ve=Ec(v),De=v.subTree;v.subTree=ve,S(De,ve,f(De.el),V(De),v,X,j),U.el=ve.el,Ee===null&&Lm(v,ve.el),ee&&Yt(ee,X),(pe=U.props&&U.props.onVnodeUpdated)&&Yt(()=>An(pe,se,U,Ae),X)}else{let U;const{el:G,props:ee}=L,{bm:se,m:Ae,parent:Ee,root:pe,type:ve}=v,De=ss(L);Li(v,!1),se&&io(se),!De&&(U=ee&&ee.onVnodeBeforeMount)&&An(U,Ee,L),Li(v,!0);{pe.ce&&pe.ce._hasShadowRoot()&&pe.ce._injectChildStyle(ve,v.parent?v.parent.type:void 0);const de=v.subTree=Ec(v);S(null,de,D,W,v,X,j),L.el=de.el}if(Ae&&Yt(Ae,X),!De&&(U=ee&&ee.onVnodeMounted)){const de=L;Yt(()=>An(U,Ee,de),X)}(L.shapeFlag&256||Ee&&ss(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&v.a&&Yt(v.a,X),v.isMounted=!0,L=D=W=null}};v.scope.on();const fe=v.effect=new th(le);v.scope.off();const E=v.update=fe.run.bind(fe),x=v.job=fe.runIfDirty.bind(fe);x.i=v,x.id=v.uid,fe.scheduler=()=>Ul(x),Li(v,!0),E()},re=(v,L,D)=>{L.component=v;const W=v.vnode.props;v.vnode=L,v.next=null,Im(v,L.props,W,D),Fm(v,L.children,D),ri(),pc(v),si()},O=(v,L,D,W,X,j,ue,le,fe=!1)=>{const E=v&&v.children,x=v?v.shapeFlag:0,U=L.children,{patchFlag:G,shapeFlag:ee}=L;if(G>0){if(G&128){oe(E,U,D,W,X,j,ue,le,fe);return}else if(G&256){ne(E,U,D,W,X,j,ue,le,fe);return}}ee&8?(x&16&&_e(E,X,j),U!==E&&c(D,U)):x&16?ee&16?oe(E,U,D,W,X,j,ue,le,fe):_e(E,X,j,!0):(x&8&&c(D,""),ee&16&&N(U,D,W,X,j,ue,le,fe))},ne=(v,L,D,W,X,j,ue,le,fe)=>{v=v||Er,L=L||Er;const E=v.length,x=L.length,U=Math.min(E,x);let G;for(G=0;G<U;G++){const ee=L[G]=fe?Zn(L[G]):Pn(L[G]);S(v[G],ee,D,null,X,j,ue,le,fe)}E>x?_e(v,X,j,!0,!1,U):N(L,D,W,X,j,ue,le,fe,U)},oe=(v,L,D,W,X,j,ue,le,fe)=>{let E=0;const x=L.length;let U=v.length-1,G=x-1;for(;E<=U&&E<=G;){const ee=v[E],se=L[E]=fe?Zn(L[E]):Pn(L[E]);if(Vi(ee,se))S(ee,se,D,null,X,j,ue,le,fe);else break;E++}for(;E<=U&&E<=G;){const ee=v[U],se=L[G]=fe?Zn(L[G]):Pn(L[G]);if(Vi(ee,se))S(ee,se,D,null,X,j,ue,le,fe);else break;U--,G--}if(E>U){if(E<=G){const ee=G+1,se=ee<x?L[ee].el:W;for(;E<=G;)S(null,L[E]=fe?Zn(L[E]):Pn(L[E]),D,se,X,j,ue,le,fe),E++}}else if(E>G)for(;E<=U;)me(v[E],X,j,!0),E++;else{const ee=E,se=E,Ae=new Map;for(E=se;E<=G;E++){const Ce=L[E]=fe?Zn(L[E]):Pn(L[E]);Ce.key!=null&&Ae.set(Ce.key,E)}let Ee,pe=0;const ve=G-se+1;let De=!1,de=0;const ot=new Array(ve);for(E=0;E<ve;E++)ot[E]=0;for(E=ee;E<=U;E++){const Ce=v[E];if(pe>=ve){me(Ce,X,j,!0);continue}let we;if(Ce.key!=null)we=Ae.get(Ce.key);else for(Ee=se;Ee<=G;Ee++)if(ot[Ee-se]===0&&Vi(Ce,L[Ee])){we=Ee;break}we===void 0?me(Ce,X,j,!0):(ot[we-se]=E+1,we>=de?de=we:De=!0,S(Ce,L[we],D,null,X,j,ue,le,fe),pe++)}const ke=De?Gm(ot):Er;for(Ee=ke.length-1,E=ve-1;E>=0;E--){const Ce=se+E,we=L[Ce],Pe=L[Ce+1],Ye=Ce+1<x?Pe.el||Zh(Pe):W;ot[E]===0?S(null,we,D,Ye,X,j,ue,le,fe):De&&(Ee<0||E!==ke[Ee]?he(we,D,Ye,2):Ee--)}}},he=(v,L,D,W,X=null)=>{const{el:j,type:ue,transition:le,children:fe,shapeFlag:E}=v;if(E&6){he(v.component.subTree,L,D,W);return}if(E&128){v.suspense.move(L,D,W);return}if(E&64){ue.move(v,L,D,xe);return}if(ue===rt){i(j,L,D);for(let U=0;U<fe.length;U++)he(fe[U],L,D,W);i(v.anchor,L,D);return}if(ue===oo){g(v,L,D);return}if(W!==2&&E&1&&le)if(W===0)le.beforeEnter(j),i(j,L,D),Yt(()=>le.enter(j),X);else{const{leave:U,delayLeave:G,afterLeave:ee}=le,se=()=>{v.ctx.isUnmounted?r(j):i(j,L,D)},Ae=()=>{j._isLeaving&&j[Rn](!0),U(j,()=>{se(),ee&&ee()})};G?G(j,se,Ae):Ae()}else i(j,L,D)},me=(v,L,D,W=!1,X=!1)=>{const{type:j,props:ue,ref:le,children:fe,dynamicChildren:E,shapeFlag:x,patchFlag:U,dirs:G,cacheIndex:ee}=v;if(U===-2&&(X=!1),le!=null&&(ri(),rs(le,null,D,v,!0),si()),ee!=null&&(L.renderCache[ee]=void 0),x&256){L.ctx.deactivate(v);return}const se=x&1&&G,Ae=!ss(v);let Ee;if(Ae&&(Ee=ue&&ue.onVnodeBeforeUnmount)&&An(Ee,L,v),x&6)ce(v.component,D,W);else{if(x&128){v.suspense.unmount(D,W);return}se&&Pi(v,null,L,"beforeUnmount"),x&64?v.type.remove(v,L,D,xe,W):E&&!E.hasOnce&&(j!==rt||U>0&&U&64)?_e(E,L,D,!1,!0):(j===rt&&U&384||!X&&x&16)&&_e(fe,L,D),W&&ge(v)}(Ae&&(Ee=ue&&ue.onVnodeUnmounted)||se)&&Yt(()=>{Ee&&An(Ee,L,v),se&&Pi(v,null,L,"unmounted")},D)},ge=v=>{const{type:L,el:D,anchor:W,transition:X}=v;if(L===rt){Y(D,W);return}if(L===oo){b(v);return}const j=()=>{r(D),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(v.shapeFlag&1&&X&&!X.persisted){const{leave:ue,delayLeave:le}=X,fe=()=>ue(D,j);le?le(v.el,j,fe):fe()}else j()},Y=(v,L)=>{let D;for(;v!==L;)D=h(v),r(v),v=D;r(L)},ce=(v,L,D)=>{const{bum:W,scope:X,job:j,subTree:ue,um:le,m:fe,a:E}=v;Ac(fe),Ac(E),W&&io(W),X.stop(),j&&(j.flags|=8,me(ue,v,L,D)),le&&Yt(le,L),Yt(()=>{v.isUnmounted=!0},L)},_e=(v,L,D,W=!1,X=!1,j=0)=>{for(let ue=j;ue<v.length;ue++)me(v[ue],L,D,W,X)},V=v=>{if(v.shapeFlag&6)return V(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const L=h(v.anchor||v.el),D=L&&L[em];return D?h(D):L};let ae=!1;const ie=(v,L,D)=>{let W;v==null?L._vnode&&(me(L._vnode,null,null,!0),W=L._vnode.component):S(L._vnode||null,v,L,null,null,null,D),L._vnode=v,ae||(ae=!0,pc(W),Sh(),ae=!1)},xe={p:S,um:me,m:he,r:ge,mt:I,mc:N,pc:O,pbc:M,n:V,o:n};return{render:ie,hydrate:void 0,createApp:bm(ie)}}function ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Li({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Hm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function $h(n,e,t=!1){const i=n.children,r=e.children;if(Ie(i)&&Ie(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Zn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&$h(a,o)),o.type===Fo&&(o.patchFlag===-1&&(o=r[s]=Zn(o)),o.el=a.el),o.type===Xt&&!o.el&&(o.el=a.el)}}function Gm(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<u?s=o+1:a=o;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function Kh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kh(e)}function Ac(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Zh(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Zh(e.subTree):null}const Jh=n=>n.__isSuspense;function km(n,e){e&&e.pendingBranch?Ie(n)?e.effects.push(...n):e.effects.push(n):$p(n)}const rt=Symbol.for("v-fgt"),Fo=Symbol.for("v-txt"),Xt=Symbol.for("v-cmt"),oo=Symbol.for("v-stc"),as=[];let an=null;function Oe(n=!1){as.push(an=n?null:[])}function Vm(){as.pop(),an=as[as.length-1]||null}let ds=1;function go(n,e=!1){ds+=n,n<0&&an&&e&&(an.hasOnce=!0)}function Qh(n){return n.dynamicChildren=ds>0?an||Er:null,Vm(),ds>0&&an&&an.push(n),n}function ze(n,e,t,i,r,s){return Qh(z(n,e,t,i,r,s,!0))}function Fl(n,e,t,i,r){return Qh(it(n,e,t,i,r,!0))}function _o(n){return n?n.__v_isVNode===!0:!1}function Vi(n,e){return n.type===e.type&&n.key===e.key}const ed=({key:n})=>n??null,ao=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Bt(n)||Fe(n)?{i:on,r:n,k:e,f:!!t}:n:null);function z(n,e=null,t=null,i=0,r=null,s=n===rt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ed(e),ref:e&&ao(e),scopeId:Eh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:on};return o?(Bl(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),ds>0&&!a&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const it=Wm;function Wm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===mm)&&(n=Xt),_o(n)){const o=bi(n,e,!0);return t&&Bl(o,t),ds>0&&!s&&an&&(o.shapeFlag&6?an[an.indexOf(n)]=o:an.push(o)),o.patchFlag=-2,o}if(tg(n)&&(n=n.__vccOpts),e){e=Xm(e);let{class:o,style:l}=e;o&&!vt(o)&&(e.class=On(o)),tt(l)&&(Il(l)&&!Ie(l)&&(l=St({},l)),e.style=Nt(l))}const a=vt(n)?1:Jh(n)?128:Ah(n)?64:tt(n)?4:Fe(n)?2:0;return z(n,e,t,i,r,a,s,!0)}function Xm(n){return n?Il(n)||Vh(n)?St({},n):n:null}function bi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,u=e?qm(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&ed(u),ref:e&&e.ref?t&&s?Ie(s)?s.concat(ao(e)):[s,ao(e)]:ao(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&bi(n.ssContent),ssFallback:n.ssFallback&&bi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&hs(c,l.clone(c)),c}function Un(n=" ",e=0){return it(Fo,null,n,e)}function td(n,e){const t=it(oo,null,n);return t.staticCount=e,t}function vi(n="",e=!1){return e?(Oe(),Fl(Xt,null,n)):it(Xt,null,n)}function Pn(n){return n==null||typeof n=="boolean"?it(Xt):Ie(n)?it(rt,null,n.slice()):_o(n)?Zn(n):it(Fo,null,String(n))}function Zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:bi(n)}function Bl(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ie(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Bl(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Vh(e)?e._ctx=on:r===3&&on&&(on.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:on},t=32):(e=String(e),i&64?(t=16,e=[Un(e)]):t=8);n.children=e,n.shapeFlag|=t}function qm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=On([e.class,i.class]));else if(r==="style")e.style=Nt([e.style,i.style]);else if(wo(r)){const s=e[r],a=i[r];a&&s!==a&&!(Ie(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function An(n,e,t,i=null){En(n,e,7,[t,i])}const jm=Bh();let Ym=0;function $m(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||jm,s={uid:Ym++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xh(i,r),emitsOptions:zh(i,r),emit:null,emitted:null,propsDefaults:st,inheritAttrs:i.inheritAttrs,ctx:st,data:st,props:st,attrs:st,slots:st,refs:st,setupState:st,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Am.bind(null,s),n.ce&&n.ce(s),s}let Ot=null;const nd=()=>Ot||on;let vo,il;{const n=Po(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};vo=e("__VUE_INSTANCE_SETTERS__",t=>Ot=t),il=e("__VUE_SSR_SETTERS__",t=>ps=t)}const Ss=n=>{const e=Ot;return vo(n),n.scope.on(),()=>{n.scope.off(),vo(e)}},wc=()=>{Ot&&Ot.scope.off(),vo(null)};function id(n){return n.vnode.shapeFlag&4}let ps=!1;function Km(n,e=!1,t=!1){e&&il(e);const{props:i,children:r}=n.vnode,s=id(n);Dm(n,i,s,e),Om(n,r,t||e);const a=s?Zm(n,e):void 0;return e&&il(!1),a}function Zm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,_m);const{setup:i}=t;if(i){ri();const r=n.setupContext=i.length>1?Qm(n):null,s=Ss(n),a=Ms(i,n,0,[n.props,r]),o=Yf(a);if(si(),s(),(o||n.sp)&&!ss(n)&&Ih(n),o){if(a.then(wc,wc),e)return a.then(l=>{Rc(n,l)}).catch(l=>{Do(l,n,0)});n.asyncDep=a}else Rc(n,a)}else rd(n)}function Rc(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=_h(e)),rd(n)}function rd(n,e,t){const i=n.type;n.render||(n.render=i.render||Nn);{const r=Ss(n);ri();try{vm(n)}finally{si(),r()}}}const Jm={get(n,e){return Ut(n,"get",""),n[e]}};function Qm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Jm),slots:n.slots,emit:n.emit,expose:e}}function Bo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(_h(zp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in os)return os[t](n)},has(e,t){return t in e||t in os}})):n.proxy}function eg(n,e=!0){return Fe(n)?n.displayName||n.name:n.name||e&&n.__name}function tg(n){return Fe(n)&&"__vccOpts"in n}const At=(n,e)=>Wp(n,e,ps);function zl(n,e,t){try{go(-1);const i=arguments.length;return i===2?tt(e)&&!Ie(e)?_o(e)?it(n,null,[e]):it(n,e):it(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&_o(t)&&(t=[t]),it(n,e,t))}finally{go(1)}}const ng="3.5.30";/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rl;const Cc=typeof window<"u"&&window.trustedTypes;if(Cc)try{rl=Cc.createPolicy("vue",{createHTML:n=>n})}catch{}const sd=rl?n=>rl.createHTML(n):n=>n,ig="http://www.w3.org/2000/svg",rg="http://www.w3.org/1998/Math/MathML",Kn=typeof document<"u"?document:null,Pc=Kn&&Kn.createElement("template"),sg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Kn.createElementNS(ig,n):e==="mathml"?Kn.createElementNS(rg,n):t?Kn.createElement(n,{is:t}):Kn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Kn.createTextNode(n),createComment:n=>Kn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Kn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Pc.innerHTML=sd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Pc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},li="transition",Xr="animation",ms=Symbol("_vtc"),od={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},og=St({},wh,od),ag=n=>(n.displayName="Transition",n.props=og,n),lg=ag((n,{slots:e})=>zl(im,cg(n),e)),Di=(n,e=[])=>{Ie(n)?n.forEach(t=>t(...e)):n&&n(...e)},Lc=n=>n?Ie(n)?n.some(e=>e.length>1):n.length>1:!1;function cg(n){const e={};for(const H in n)H in od||(e[H]=n[H]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,_=ug(r),S=_&&_[0],m=_&&_[1],{onBeforeEnter:d,onEnter:y,onEnterCancelled:g,onLeave:b,onLeaveCancelled:P,onBeforeAppear:R=d,onAppear:w=y,onAppearCancelled:N=g}=e,C=(H,te,I,J)=>{H._enterCancelled=J,Ii(H,te?c:o),Ii(H,te?u:a),I&&I()},M=(H,te)=>{H._isLeaving=!1,Ii(H,f),Ii(H,p),Ii(H,h),te&&te()},T=H=>(te,I)=>{const J=H?w:y,q=()=>C(te,H,I);Di(J,[te,q]),Dc(()=>{Ii(te,H?l:s),kn(te,H?c:o),Lc(J)||Ic(te,i,S,q)})};return St(e,{onBeforeEnter(H){Di(d,[H]),kn(H,s),kn(H,a)},onBeforeAppear(H){Di(R,[H]),kn(H,l),kn(H,u)},onEnter:T(!1),onAppear:T(!0),onLeave(H,te){H._isLeaving=!0;const I=()=>M(H,te);kn(H,f),H._enterCancelled?(kn(H,h),Oc(H)):(Oc(H),kn(H,h)),Dc(()=>{H._isLeaving&&(Ii(H,f),kn(H,p),Lc(b)||Ic(H,i,m,I))}),Di(b,[H,I])},onEnterCancelled(H){C(H,!1,void 0,!0),Di(g,[H])},onAppearCancelled(H){C(H,!0,void 0,!0),Di(N,[H])},onLeaveCancelled(H){M(H),Di(P,[H])}})}function ug(n){if(n==null)return null;if(tt(n))return[na(n.enter),na(n.leave)];{const e=na(n);return[e,e]}}function na(n){return fp(n)}function kn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[ms]||(n[ms]=new Set)).add(e)}function Ii(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[ms];t&&(t.delete(e),t.size||(n[ms]=void 0))}function Dc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let fg=0;function Ic(n,e,t,i){const r=n._endId=++fg,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=hg(n,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{n.removeEventListener(u,h),s()},h=p=>{p.target===n&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),n.addEventListener(u,h)}function hg(n,e){const t=window.getComputedStyle(n),i=_=>(t[_]||"").split(", "),r=i(`${li}Delay`),s=i(`${li}Duration`),a=Uc(r,s),o=i(`${Xr}Delay`),l=i(`${Xr}Duration`),u=Uc(o,l);let c=null,f=0,h=0;e===li?a>0&&(c=li,f=a,h=s.length):e===Xr?u>0&&(c=Xr,f=u,h=l.length):(f=Math.max(a,u),c=f>0?a>u?li:Xr:null,h=c?c===li?s.length:l.length:0);const p=c===li&&/\b(?:transform|all)(?:,|$)/.test(i(`${li}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:p}}function Uc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Nc(t)+Nc(n[i])))}function Nc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Oc(n){return(n?n.ownerDocument:document).body.offsetHeight}function dg(n,e,t){const i=n[ms];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Fc=Symbol("_vod"),pg=Symbol("_vsh"),mg=Symbol(""),gg=/(?:^|;)\s*display\s*:/;function _g(n,e,t){const i=n.style,r=vt(t);let s=!1;if(t&&!r){if(e)if(vt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&lo(i,o,"")}else for(const a in e)t[a]==null&&lo(i,a,"");for(const a in t)a==="display"&&(s=!0),lo(i,a,t[a])}else if(r){if(e!==t){const a=i[mg];a&&(t+=";"+a),i.cssText=t,s=gg.test(t)}}else e&&n.removeAttribute("style");Fc in n&&(n[Fc]=s?i.display:"",n[pg]&&(i.display="none"))}const Bc=/\s*!important$/;function lo(n,e,t){if(Ie(t))t.forEach(i=>lo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=vg(n,e);Bc.test(t)?n.setProperty(Qi(i),t.replace(Bc,""),"important"):n[i]=t}}const zc=["Webkit","Moz","ms"],ia={};function vg(n,e){const t=ia[e];if(t)return t;let i=qt(e);if(i!=="filter"&&i in n)return ia[e]=i;i=Co(i);for(let r=0;r<zc.length;r++){const s=zc[r]+i;if(s in n)return ia[e]=s}return e}const Hc="http://www.w3.org/1999/xlink";function Gc(n,e,t,i,r,s=_p(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hc,e.slice(6,e.length)):n.setAttributeNS(Hc,e,t):t==null||s&&!Jf(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Bn(t)?String(t):t)}function kc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?sd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Jf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function xr(n,e,t,i){n.addEventListener(e,t,i)}function xg(n,e,t,i){n.removeEventListener(e,t,i)}const Vc=Symbol("_vei");function Mg(n,e,t,i,r=null){const s=n[Vc]||(n[Vc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Sg(e);if(i){const u=s[e]=bg(i,r);xr(n,o,u,l)}else a&&(xg(n,o,a,l),s[e]=void 0)}}const Wc=/(?:Once|Passive|Capture)$/;function Sg(n){let e;if(Wc.test(n)){e={};let i;for(;i=n.match(Wc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Qi(n.slice(2)),e]}let ra=0;const yg=Promise.resolve(),Eg=()=>ra||(yg.then(()=>ra=0),ra=Date.now());function bg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(Tg(i,t.value),e,5,[i])};return t.value=n,t.attached=Eg(),t}function Tg(n,e){if(Ie(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ag=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?dg(n,i,a):e==="style"?_g(n,t,i):wo(e)?yl(e)||Mg(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):wg(n,e,i,a))?(kc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Gc(n,e,i,a,s,e!=="value")):n._isVueCE&&(Rg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!vt(i)))?kc(n,qt(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Gc(n,e,i,a))};function wg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Xc(e)&&Fe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xc(e)&&vt(t)?!1:e in n}function Rg(n,e){const t=n._def.props;if(!t)return!1;const i=qt(e);return Array.isArray(t)?t.some(r=>qt(r)===i):Object.keys(t).some(r=>qt(r)===i)}const qc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Ie(e)?t=>io(e,t):e};function Cg(n){n.target.composing=!0}function jc(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sa=Symbol("_assign");function Yc(n,e,t){return e&&(n=n.trim()),t&&(n=Tl(n)),n}const Pg={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[sa]=qc(r);const s=i||r.props&&r.props.type==="number";xr(n,e?"change":"input",a=>{a.target.composing||n[sa](Yc(n.value,t,s))}),(t||s)&&xr(n,"change",()=>{n.value=Yc(n.value,t,s)}),e||(xr(n,"compositionstart",Cg),xr(n,"compositionend",jc),xr(n,"change",jc))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},a){if(n[sa]=qc(a),n.composing)return;const o=(s||n.type==="number")&&!/^0\d/.test(n.value)?Tl(n.value):n.value,l=e??"";o!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===l)||(n.value=l))}},Lg=St({patchProp:Ag},sg);let $c;function Dg(){return $c||($c=Bm(Lg))}const Ig=(...n)=>{const e=Dg().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Ng(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Ug(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Ug(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Ng(n){return vt(n)?document.querySelector(n):n}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Mr=typeof document<"u";function ad(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Og(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&ad(n.default)}const Qe=Object.assign;function oa(n,e){const t={};for(const i in e){const r=e[i];t[i]=bn(r)?r.map(n):n(r)}return t}const ls=()=>{},bn=Array.isArray;function Kc(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}const ld=/#/g,Fg=/&/g,Bg=/\//g,zg=/=/g,Hg=/\?/g,cd=/\+/g,Gg=/%5B/g,kg=/%5D/g,ud=/%5E/g,Vg=/%60/g,fd=/%7B/g,Wg=/%7C/g,hd=/%7D/g,Xg=/%20/g;function Hl(n){return n==null?"":encodeURI(""+n).replace(Wg,"|").replace(Gg,"[").replace(kg,"]")}function qg(n){return Hl(n).replace(fd,"{").replace(hd,"}").replace(ud,"^")}function sl(n){return Hl(n).replace(cd,"%2B").replace(Xg,"+").replace(ld,"%23").replace(Fg,"%26").replace(Vg,"`").replace(fd,"{").replace(hd,"}").replace(ud,"^")}function jg(n){return sl(n).replace(zg,"%3D")}function Yg(n){return Hl(n).replace(ld,"%23").replace(Hg,"%3F")}function $g(n){return Yg(n).replace(Bg,"%2F")}function gs(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const Kg=/\/$/,Zg=n=>n.replace(Kg,"");function aa(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=n(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=t_(i??e,t),{fullPath:i+s+a,path:i,query:r,hash:gs(a)}}function Jg(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Zc(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function Qg(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&Lr(e.matched[i],t.matched[r])&&dd(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Lr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function dd(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!e_(n[t],e[t]))return!1;return!0}function e_(n,e){return bn(n)?Jc(n,e):bn(e)?Jc(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function Jc(n,e){return bn(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function t_(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const ci={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let ol=function(n){return n.pop="pop",n.push="push",n}({}),la=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function n_(n){if(!n)if(Mr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Zg(n)}const i_=/^[^#]+#/;function r_(n,e){return n.replace(i_,"#")+e}function s_(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const zo=()=>({left:window.scrollX,top:window.scrollY});function o_(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=s_(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Qc(n,e){return(history.state?history.state.position-e:-1)+n}const al=new Map;function a_(n,e){al.set(n,e)}function l_(n){const e=al.get(n);return al.delete(n),e}function c_(n){return typeof n=="string"||n&&typeof n=="object"}function pd(n){return typeof n=="string"||typeof n=="symbol"}let gt=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const md=Symbol("");gt.MATCHER_NOT_FOUND+"",gt.NAVIGATION_GUARD_REDIRECT+"",gt.NAVIGATION_ABORTED+"",gt.NAVIGATION_CANCELLED+"",gt.NAVIGATION_DUPLICATED+"";function Dr(n,e){return Qe(new Error,{type:n,[md]:!0},e)}function Vn(n,e){return n instanceof Error&&md in n&&(e==null||!!(n.type&e))}const u_=["params","query","hash"];function f_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of u_)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function h_(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<t.length;++i){const r=t[i].replace(cd," "),s=r.indexOf("="),a=gs(s<0?r:r.slice(0,s)),o=s<0?null:gs(r.slice(s+1));if(a in e){let l=e[a];bn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function eu(n){let e="";for(let t in n){const i=n[t];if(t=jg(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(bn(i)?i.map(r=>r&&sl(r)):[i&&sl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function d_(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=bn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const p_=Symbol(""),tu=Symbol(""),Gl=Symbol(""),kl=Symbol(""),ll=Symbol("");function qr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function _i(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const u=h=>{h===!1?l(Dr(gt.NAVIGATION_ABORTED,{from:t,to:e})):h instanceof Error?l(h):c_(h)?l(Dr(gt.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},c=s(()=>n.call(i&&i.instances[r],e,t,u));let f=Promise.resolve(c);n.length<3&&(f=f.then(u)),f.catch(h=>l(h))})}function ca(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(ad(l)){const u=(l.__vccOpts||l)[e];u&&s.push(_i(u,t,i,a,o,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=Og(c)?c.default:c;a.mods[o]=c,a.components[o]=f;const h=(f.__vccOpts||f)[e];return h&&_i(h,t,i,a,o,r)()}))}}return s}function m_(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(u=>Lr(u,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(u=>Lr(u,l))||r.push(l))}return[t,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let g_=()=>location.protocol+"//"+location.host;function gd(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let a=r.includes(n.slice(s))?n.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),Zc(o,"")}return Zc(t,n)+i+r}function __(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=gd(n,location),_=t.value,S=e.value;let m=0;if(h){if(t.value=p,e.value=h,a&&a===_){a=null;return}m=S?h.position-S.position:0}else i(p);r.forEach(d=>{d(t.value,_,{delta:m,type:ol.pop,direction:m?m>0?la.forward:la.back:la.unknown})})};function l(){a=t.value}function u(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(Qe({},h.state,{scroll:zo()}),"")}}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:f}}function nu(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?zo():null}}function v_(n){const{history:e,location:t}=window,i={value:gd(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:g_()+n+l;try{e[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(p){console.error(p),t[c?"replace":"assign"](h)}}function a(l,u){s(l,Qe({},e.state,nu(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),i.value=l}function o(l,u){const c=Qe({},r.value,e.state,{forward:l,scroll:zo()});s(c.current,c,!0),s(l,Qe({},nu(i.value,l,null),{position:c.position+1},u),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function x_(n){n=n_(n);const e=v_(n),t=__(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Qe({location:"",base:n,go:i,createHref:r_.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let qi=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Mt=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Mt||{});const M_={type:qi.Static,value:""},S_=/[a-zA-Z0-9_]/;function y_(n){if(!n)return[[]];if(n==="/")return[[M_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${u}": ${p}`)}let t=Mt.Static,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,u="",c="";function f(){u&&(t===Mt.Static?s.push({type:qi.Static,value:u}):t===Mt.Param||t===Mt.ParamRegExp||t===Mt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:qi.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==Mt.ParamRegExp){i=t,t=Mt.EscapeNext;continue}switch(t){case Mt.Static:l==="/"?(u&&f(),a()):l===":"?(f(),t=Mt.Param):h();break;case Mt.EscapeNext:h(),t=i;break;case Mt.Param:l==="("?t=Mt.ParamRegExp:S_.test(l)?h():(f(),t=Mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Mt.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:t=Mt.ParamRegExpEnd:c+=l;break;case Mt.ParamRegExpEnd:f(),t=Mt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:e("Unknown state");break}}return t===Mt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),f(),a(),r}const iu="[^/]+?",E_={sensitive:!1,strict:!1,start:!0,end:!0};var kt=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(kt||{});const b_=/[.+*?^${}()[\]/\\]/g;function T_(n,e){const t=Qe({},E_,e),i=[];let r=t.start?"^":"";const s=[];for(const u of n){const c=u.length?[]:[kt.Root];t.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let p=kt.Segment+(t.sensitive?kt.BonusCaseSensitive:0);if(h.type===qi.Static)f||(r+="/"),r+=h.value.replace(b_,"\\$&"),p+=kt.Static;else if(h.type===qi.Param){const{value:_,repeatable:S,optional:m,regexp:d}=h;s.push({name:_,repeatable:S,optional:m});const y=d||iu;if(y!==iu){p+=kt.BonusCustomRegExp;try{`${y}`}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+b.message)}}let g=S?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(g=m&&u.length<2?`(?:/${g})`:"/"+g),m&&(g+="?"),r+=g,p+=kt.Dynamic,m&&(p+=kt.BonusOptional),S&&(p+=kt.BonusRepeatable),y===".*"&&(p+=kt.BonusWildcard)}c.push(p)}i.push(c)}if(t.strict&&t.end){const u=i.length-1;i[u][i[u].length-1]+=kt.BonusStrict}t.strict||(r+="/?"),t.end?r+="$":t.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(u){const c=u.match(a),f={};if(!c)return null;for(let h=1;h<c.length;h++){const p=c[h]||"",_=s[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(u){let c="",f=!1;for(const h of n){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const p of h)if(p.type===qi.Static)c+=p.value;else if(p.type===qi.Param){const{value:_,repeatable:S,optional:m}=p,d=_ in u?u[_]:"";if(bn(d)&&!S)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=bn(d)?d.join("/"):d;if(!y)if(m)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);c+=y}}return c||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function A_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===kt.Static+kt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===kt.Static+kt.Segment?1:-1:0}function _d(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=A_(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(ru(i))return 1;if(ru(r))return-1}return r.length-i.length}function ru(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const w_={strict:!1,end:!0,sensitive:!1};function R_(n,e,t){const i=T_(y_(n.path),t),r=Qe(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function C_(n,e){const t=[],i=new Map;e=Kc(w_,e);function r(f){return i.get(f)}function s(f,h,p){const _=!p,S=ou(f);S.aliasOf=p&&p.record;const m=Kc(e,f),d=[S];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of b)d.push(ou(Qe({},S,{components:p?p.record.components:S.components,path:P,aliasOf:p?p.record:S})))}let y,g;for(const b of d){const{path:P}=b;if(h&&P[0]!=="/"){const R=h.record.path,w=R[R.length-1]==="/"?"":"/";b.path=h.record.path+(P&&w+P)}if(y=R_(b,h,m),p?p.alias.push(y):(g=g||y,g!==y&&g.alias.push(y),_&&f.name&&!au(y)&&a(f.name)),vd(y)&&l(y),S.children){const R=S.children;for(let w=0;w<R.length;w++)s(R[w],y,p&&p.children[w])}p=p||y}return g?()=>{a(g)}:ls}function a(f){if(pd(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=D_(f,t);t.splice(h,0,f),f.record.name&&!au(f)&&i.set(f.record.name,f)}function u(f,h){let p,_={},S,m;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw Dr(gt.MATCHER_NOT_FOUND,{location:f});m=p.record.name,_=Qe(su(h.params,p.keys.filter(g=>!g.optional).concat(p.parent?p.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),f.params&&su(f.params,p.keys.map(g=>g.name))),S=p.stringify(_)}else if(f.path!=null)S=f.path,p=t.find(g=>g.re.test(S)),p&&(_=p.parse(S),m=p.record.name);else{if(p=h.name?i.get(h.name):t.find(g=>g.re.test(h.path)),!p)throw Dr(gt.MATCHER_NOT_FOUND,{location:f,currentLocation:h});m=p.record.name,_=Qe({},h.params,f.params),S=p.stringify(_)}const d=[];let y=p;for(;y;)d.unshift(y.record),y=y.parent;return{name:m,path:S,params:_,matched:d,meta:L_(d)}}n.forEach(f=>s(f));function c(){t.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:o,getRecordMatcher:r}}function su(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function ou(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:P_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function P_(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function au(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function L_(n){return n.reduce((e,t)=>Qe(e,t.meta),{})}function D_(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;_d(n,e[s])<0?i=s:t=s+1}const r=I_(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function I_(n){let e=n;for(;e=e.parent;)if(vd(e)&&_d(n,e)===0)return e}function vd({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function lu(n){const e=Fn(Gl),t=Fn(kl),i=At(()=>{const l=Tr(n.to);return e.resolve(l)}),r=At(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=t.matched;if(!c||!f.length)return-1;const h=f.findIndex(Lr.bind(null,c));if(h>-1)return h;const p=cu(l[u-2]);return u>1&&cu(c)===p&&f[f.length-1].path!==p?f.findIndex(Lr.bind(null,l[u-2])):h}),s=At(()=>r.value>-1&&B_(t.params,i.value.params)),a=At(()=>r.value>-1&&r.value===t.matched.length-1&&dd(t.params,i.value.params));function o(l={}){if(F_(l)){const u=e[Tr(n.replace)?"replace":"push"](Tr(n.to)).catch(ls);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:At(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function U_(n){return n.length===1?n[0]:n}const N_=Dh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:lu,setup(n,{slots:e}){const t=xs(lu(n)),{options:i}=Fn(Gl),r=At(()=>({[uu(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[uu(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&U_(e.default(t));return n.custom?s:zl("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),O_=N_;function F_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function B_(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!bn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function cu(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const uu=(n,e,t)=>n??e??t,z_=Dh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Fn(ll),r=At(()=>n.route||i.value),s=Fn(tu,0),a=At(()=>{let u=Tr(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),o=At(()=>r.value.matched[a.value]);ro(tu,At(()=>a.value+1)),ro(p_,o),ro(ll,r);const l=Ft();return so(()=>[l.value,o.value,n.name],([u,c,f],[h,p,_])=>{c&&(c.instances[f]=u,p&&p!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=p.leaveGuards),c.updateGuards.size||(c.updateGuards=p.updateGuards))),u&&c&&(!p||!Lr(c,p)||!h)&&(c.enterCallbacks[f]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=r.value,c=n.name,f=o.value,h=f&&f.components[c];if(!h)return fu(t.default,{Component:h,route:u});const p=f.props[c],_=p?p===!0?u.params:typeof p=="function"?p(u):p:null,m=zl(h,Qe({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return fu(t.default,{Component:m,route:u})||m}}});function fu(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const H_=z_;function G_(n){const e=C_(n.routes,n),t=n.parseQuery||h_,i=n.stringifyQuery||eu,r=n.history,s=qr(),a=qr(),o=qr(),l=Hp(ci);let u=ci;Mr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=oa.bind(null,V=>""+V),f=oa.bind(null,$g),h=oa.bind(null,gs);function p(V,ae){let ie,xe;return pd(V)?(ie=e.getRecordMatcher(V),xe=ae):xe=V,e.addRoute(xe,ie)}function _(V){const ae=e.getRecordMatcher(V);ae&&e.removeRoute(ae)}function S(){return e.getRoutes().map(V=>V.record)}function m(V){return!!e.getRecordMatcher(V)}function d(V,ae){if(ae=Qe({},ae||l.value),typeof V=="string"){const D=aa(t,V,ae.path),W=e.resolve({path:D.path},ae),X=r.createHref(D.fullPath);return Qe(D,W,{params:h(W.params),hash:gs(D.hash),redirectedFrom:void 0,href:X})}let ie;if(V.path!=null)ie=Qe({},V,{path:aa(t,V.path,ae.path).path});else{const D=Qe({},V.params);for(const W in D)D[W]==null&&delete D[W];ie=Qe({},V,{params:f(D)}),ae.params=f(ae.params)}const xe=e.resolve(ie,ae),ye=V.hash||"";xe.params=c(h(xe.params));const v=Jg(i,Qe({},V,{hash:qg(ye),path:xe.path})),L=r.createHref(v);return Qe({fullPath:v,hash:ye,query:i===eu?d_(V.query):V.query||{}},xe,{redirectedFrom:void 0,href:L})}function y(V){return typeof V=="string"?aa(t,V,l.value.path):Qe({},V)}function g(V,ae){if(u!==V)return Dr(gt.NAVIGATION_CANCELLED,{from:ae,to:V})}function b(V){return w(V)}function P(V){return b(Qe(y(V),{replace:!0}))}function R(V,ae){const ie=V.matched[V.matched.length-1];if(ie&&ie.redirect){const{redirect:xe}=ie;let ye=typeof xe=="function"?xe(V,ae):xe;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=y(ye):{path:ye},ye.params={}),Qe({query:V.query,hash:V.hash,params:ye.path!=null?{}:V.params},ye)}}function w(V,ae){const ie=u=d(V),xe=l.value,ye=V.state,v=V.force,L=V.replace===!0,D=R(ie,xe);if(D)return w(Qe(y(D),{state:typeof D=="object"?Qe({},ye,D.state):ye,force:v,replace:L}),ae||ie);const W=ie;W.redirectedFrom=ae;let X;return!v&&Qg(i,xe,ie)&&(X=Dr(gt.NAVIGATION_DUPLICATED,{to:W,from:xe}),he(xe,xe,!0,!1)),(X?Promise.resolve(X):M(W,xe)).catch(j=>Vn(j)?Vn(j,gt.NAVIGATION_GUARD_REDIRECT)?j:oe(j):O(j,W,xe)).then(j=>{if(j){if(Vn(j,gt.NAVIGATION_GUARD_REDIRECT))return w(Qe({replace:L},y(j.to),{state:typeof j.to=="object"?Qe({},ye,j.to.state):ye,force:v}),ae||W)}else j=H(W,xe,!0,L,ye);return T(W,xe,j),j})}function N(V,ae){const ie=g(V,ae);return ie?Promise.reject(ie):Promise.resolve()}function C(V){const ae=Y.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(V):V()}function M(V,ae){let ie;const[xe,ye,v]=m_(V,ae);ie=ca(xe.reverse(),"beforeRouteLeave",V,ae);for(const D of xe)D.leaveGuards.forEach(W=>{ie.push(_i(W,V,ae))});const L=N.bind(null,V,ae);return ie.push(L),_e(ie).then(()=>{ie=[];for(const D of s.list())ie.push(_i(D,V,ae));return ie.push(L),_e(ie)}).then(()=>{ie=ca(ye,"beforeRouteUpdate",V,ae);for(const D of ye)D.updateGuards.forEach(W=>{ie.push(_i(W,V,ae))});return ie.push(L),_e(ie)}).then(()=>{ie=[];for(const D of v)if(D.beforeEnter)if(bn(D.beforeEnter))for(const W of D.beforeEnter)ie.push(_i(W,V,ae));else ie.push(_i(D.beforeEnter,V,ae));return ie.push(L),_e(ie)}).then(()=>(V.matched.forEach(D=>D.enterCallbacks={}),ie=ca(v,"beforeRouteEnter",V,ae,C),ie.push(L),_e(ie))).then(()=>{ie=[];for(const D of a.list())ie.push(_i(D,V,ae));return ie.push(L),_e(ie)}).catch(D=>Vn(D,gt.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function T(V,ae,ie){o.list().forEach(xe=>C(()=>xe(V,ae,ie)))}function H(V,ae,ie,xe,ye){const v=g(V,ae);if(v)return v;const L=ae===ci,D=Mr?history.state:{};ie&&(xe||L?r.replace(V.fullPath,Qe({scroll:L&&D&&D.scroll},ye)):r.push(V.fullPath,ye)),l.value=V,he(V,ae,ie,L),oe()}let te;function I(){te||(te=r.listen((V,ae,ie)=>{if(!ce.listening)return;const xe=d(V),ye=R(xe,ce.currentRoute.value);if(ye){w(Qe(ye,{replace:!0,force:!0}),xe).catch(ls);return}u=xe;const v=l.value;Mr&&a_(Qc(v.fullPath,ie.delta),zo()),M(xe,v).catch(L=>Vn(L,gt.NAVIGATION_ABORTED|gt.NAVIGATION_CANCELLED)?L:Vn(L,gt.NAVIGATION_GUARD_REDIRECT)?(w(Qe(y(L.to),{force:!0}),xe).then(D=>{Vn(D,gt.NAVIGATION_ABORTED|gt.NAVIGATION_DUPLICATED)&&!ie.delta&&ie.type===ol.pop&&r.go(-1,!1)}).catch(ls),Promise.reject()):(ie.delta&&r.go(-ie.delta,!1),O(L,xe,v))).then(L=>{L=L||H(xe,v,!1),L&&(ie.delta&&!Vn(L,gt.NAVIGATION_CANCELLED)?r.go(-ie.delta,!1):ie.type===ol.pop&&Vn(L,gt.NAVIGATION_ABORTED|gt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),T(xe,v,L)}).catch(ls)}))}let J=qr(),q=qr(),re;function O(V,ae,ie){oe(V);const xe=q.list();return xe.length?xe.forEach(ye=>ye(V,ae,ie)):console.error(V),Promise.reject(V)}function ne(){return re&&l.value!==ci?Promise.resolve():new Promise((V,ae)=>{J.add([V,ae])})}function oe(V){return re||(re=!V,I(),J.list().forEach(([ae,ie])=>V?ie(V):ae()),J.reset()),V}function he(V,ae,ie,xe){const{scrollBehavior:ye}=n;if(!Mr||!ye)return Promise.resolve();const v=!ie&&l_(Qc(V.fullPath,0))||(xe||!ie)&&history.state&&history.state.scroll||null;return xh().then(()=>ye(V,ae,v)).then(L=>L&&o_(L)).catch(L=>O(L,V,ae))}const me=V=>r.go(V);let ge;const Y=new Set,ce={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:S,resolve:d,options:n,push:b,replace:P,go:me,back:()=>me(-1),forward:()=>me(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:q.add,isReady:ne,install(V){V.component("RouterLink",O_),V.component("RouterView",H_),V.config.globalProperties.$router=ce,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>Tr(l)}),Mr&&!ge&&l.value===ci&&(ge=!0,b(r.location).catch(xe=>{}));const ae={};for(const xe in ci)Object.defineProperty(ae,xe,{get:()=>l.value[xe],enumerable:!0});V.provide(Gl,ce),V.provide(kl,mh(ae)),V.provide(ll,l);const ie=V.unmount;Y.add(V),V.unmount=function(){Y.delete(V),Y.size<1&&(u=ci,te&&te(),te=null,l.value=ci,ge=!1,re=!1),ie()}}};function _e(V){return V.reduce((ae,ie)=>ae.then(()=>C(ie)),Promise.resolve())}return ce}function xd(n){return Fn(kl)}const k_="/logo.svg",Vl=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},V_={class:"nav-links hide-mobile u-flex u-gap-36"},W_=["aria-label","aria-expanded"],X_={__name:"Nav",setup(n){const e=xd(),t=Ft(!1),i=Ft(!1),r=[{label:"Projects",to:"/projects"},{label:"About",to:{path:"/",hash:"#about"}},{label:"Contact",to:{path:"/",hash:"#contact"}}];function s(){t.value=window.scrollY>50}function a(y){var g;return typeof y.to=="string"?e.path===y.to:(g=y.to)!=null&&g.hash?e.path===(y.to.path||"/")&&e.hash===y.to.hash:!1}function o(y){y.currentTarget.style.transform="rotate(-8deg) scale(1.1)"}function l(y){y.currentTarget.style.transform="rotate(0deg) scale(1)"}Fr(()=>{s(),window.addEventListener("scroll",s)}),Br(()=>{window.removeEventListener("scroll",s)});const u=At(()=>({position:"fixed",top:0,left:0,right:0,zIndex:200,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 52px",background:t.value?"rgba(10,14,20,0.85)":"transparent",backdropFilter:t.value?"blur(20px)":"none",borderBottom:t.value?"1px solid rgba(255,255,255,0.07)":"1px solid transparent",transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)"})),c={display:"flex",alignItems:"center",gap:"10px",cursor:"none"},f={width:"36px",height:"36px",borderRadius:"10px",transition:"transform 0.2s"},h={fontFamily:"var(--display)",fontWeight:700,fontSize:"var(--text-lg)",color:"var(--text)",letterSpacing:"-0.02em"},p={display:"flex",alignItems:"center",gap:"8px",padding:"8px 18px",borderRadius:"var(--radius-pill)",background:"rgba(74,255,145,0.1)",border:"1px solid rgba(74,255,145,0.25)"},_={width:"7px",height:"7px",borderRadius:"50%",background:"var(--lime)",opacity:.9},S={fontFamily:"var(--mono)",fontSize:"var(--text-xs)",letterSpacing:"0.1em",color:"var(--lime)",textTransform:"uppercase"},m={position:"fixed",top:"76px",left:0,right:0,bottom:0,background:"var(--bg)",padding:"32px",display:"flex",flexDirection:"column",gap:"24px",zIndex:199};function d(y){const g={width:"24px",height:"2px",background:"var(--text)",position:"relative",transition:"all 0.3s"};return y?{...g,background:"transparent"}:g}return(y,g)=>{const b=No("RouterLink");return Oe(),ze("nav",{style:Nt(u.value)},[it(b,{to:"/",style:c},{default:ni(()=>[z("img",{src:k_,alt:"Logo",style:f,onMouseenter:o,onMouseleave:l},null,32),z("span",{style:h},"Prabath")]),_:1}),z("div",V_,[(Oe(),ze(rt,null,Ct(r,P=>it(b,{key:P.label,to:P.to,class:On(["nav-link",{active:a(P)}])},{default:ni(()=>[Un(Ze(P.label),1)]),_:2},1032,["to","class"])),64))]),z("button",{class:"mobile-menu-btn hide-desktop",onClick:g[0]||(g[0]=P=>i.value=!i.value),"aria-label":i.value?"Close menu":"Open menu","aria-expanded":i.value.toString()},[z("span",{style:Nt(d(i.value))},null,4)],8,W_),it(lg,{name:"mobile-menu"},{default:ni(()=>[i.value?(Oe(),ze("div",{key:0,class:"mobile-menu",style:m},[(Oe(),ze(rt,null,Ct(r,P=>it(b,{key:P.label,to:P.to,class:"mobile-nav-link",onClick:g[1]||(g[1]=R=>i.value=!1)},{default:ni(()=>[Un(Ze(P.label),1)]),_:2},1032,["to"])),64)),z("div",{style:Nt([p,{"margin-top":"24px"}])},[z("div",{style:_}),z("span",{style:S},"Online")])])):vi("",!0)]),_:1}),z("div",{class:"hide-mobile",style:p},[z("div",{style:_}),z("span",{style:S},"Online")])],4)}}},q_=Vl(X_,[["__scopeId","data-v-6cd13377"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wl="162",j_=0,hu=1,Y_=2,Md=1,$_=2,$n=3,Ti=0,Jt=1,ei=2,Si=0,Rr=1,du=2,pu=3,mu=4,K_=5,Wi=100,Z_=101,J_=102,gu=103,_u=104,Q_=200,ev=201,tv=202,nv=203,cl=204,ul=205,iv=206,rv=207,sv=208,ov=209,av=210,lv=211,cv=212,uv=213,fv=214,hv=0,dv=1,pv=2,xo=3,mv=4,gv=5,_v=6,vv=7,Xl=0,xv=1,Mv=2,yi=0,Sv=1,yv=2,Ev=3,Sd=4,bv=5,Tv=6,Av=7,yd=300,Ir=301,Ur=302,fl=303,hl=304,Ho=306,dl=1e3,xn=1001,pl=1002,Vt=1003,vu=1004,jr=1005,Kt=1006,ua=1007,ji=1008,Ei=1009,wv=1010,Rv=1011,ql=1012,Ed=1013,Mi=1014,ti=1015,_s=1016,bd=1017,Td=1018,Ki=1020,Cv=1021,Mn=1023,Pv=1024,Lv=1025,Zi=1026,Nr=1027,Dv=1028,Ad=1029,Iv=1030,wd=1031,Rd=1033,fa=33776,ha=33777,da=33778,pa=33779,xu=35840,Mu=35841,Su=35842,yu=35843,Cd=36196,Eu=37492,bu=37496,Tu=37808,Au=37809,wu=37810,Ru=37811,Cu=37812,Pu=37813,Lu=37814,Du=37815,Iu=37816,Uu=37817,Nu=37818,Ou=37819,Fu=37820,Bu=37821,ma=36492,zu=36494,Hu=36495,Uv=36283,Gu=36284,ku=36285,Vu=36286,Nv=3200,Ov=3201,Pd=0,Fv=1,xi="",vn="srgb",wi="srgb-linear",jl="display-p3",Go="display-p3-linear",Mo="linear",ut="srgb",So="rec709",yo="p3",nr=7680,Wu=519,Bv=512,zv=513,Hv=514,Ld=515,Gv=516,kv=517,Vv=518,Wv=519,Xu=35044,qu="300 es",ml=1035,ii=2e3,Eo=2001;class zr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ga=Math.PI/180,gl=180/Math.PI;function ys(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]).toLowerCase()}function Zt(n,e,t){return Math.max(e,Math.min(t,n))}function Xv(n,e){return(n%e+e)%e}function _a(n,e,t){return(1-t)*n+t*e}function ju(n){return(n&n-1)===0&&n!==0}function _l(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,l,u){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u)}set(e,t,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],_=i[8],S=r[0],m=r[3],d=r[6],y=r[1],g=r[4],b=r[7],P=r[2],R=r[5],w=r[8];return s[0]=a*S+o*y+l*P,s[3]=a*m+o*g+l*R,s[6]=a*d+o*b+l*w,s[1]=u*S+c*y+f*P,s[4]=u*m+c*g+f*R,s[7]=u*d+c*b+f*w,s[2]=h*S+p*y+_*P,s[5]=h*m+p*g+_*R,s[8]=h*d+p*b+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*a*c-t*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,h=o*l-c*s,p=u*s-a*l,_=t*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/_;return e[0]=f*S,e[1]=(r*u-c*i)*S,e[2]=(o*i-r*a)*S,e[3]=h*S,e[4]=(c*t-r*l)*S,e[5]=(r*s-o*t)*S,e[6]=p*S,e[7]=(i*l-u*t)*S,e[8]=(a*t-i*s)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(va.makeScale(e,t)),this}rotate(e){return this.premultiply(va.makeRotation(-e)),this}translate(e,t){return this.premultiply(va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const va=new Xe;function Dd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qv(){const n=bo("canvas");return n.style.display="block",n}const Yu={};function jv(n){n in Yu||(Yu[n]=!0,console.warn(n))}const $u=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ku=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ds={[wi]:{transfer:Mo,primaries:So,toReference:n=>n,fromReference:n=>n},[vn]:{transfer:ut,primaries:So,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Go]:{transfer:Mo,primaries:yo,toReference:n=>n.applyMatrix3(Ku),fromReference:n=>n.applyMatrix3($u)},[jl]:{transfer:ut,primaries:yo,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ku),fromReference:n=>n.applyMatrix3($u).convertLinearToSRGB()}},Yv=new Set([wi,Go]),nt={enabled:!0,_workingColorSpace:wi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Yv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ds[e].toReference,r=Ds[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ds[n].primaries},getTransfer:function(n){return n===xi?Mo:Ds[n].transfer}};function Cr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class Id{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=bo("canvas")),ir.width=e.width,ir.height=e.height;const i=ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Cr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cr(t[i]/255)*255):t[i]=Cr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $v=0;class Ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=ys(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ma(r[a].image)):s.push(Ma(r[a]))}else s=Ma(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ma(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Id.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;class Qt extends zr{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,i=xn,r=xn,s=Kt,a=ji,o=Mn,l=Ei,u=Qt.DEFAULT_ANISOTROPY,c=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=ys(),this.name="",this.source=new Ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dl:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dl:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=yd;Qt.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,i=0,r=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],_=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-S)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+S)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(u+1)/2,b=(p+1)/2,P=(d+1)/2,R=(c+h)/4,w=(f+S)/4,N=(_+m)/4;return g>b&&g>P?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=w/i):b>P?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=N/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=N/s),this.set(i,r,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-S)*(f-S)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-S)/y,this.z=(h-c)/y,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zv extends zr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ud(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends Zv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nd extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jv extends Qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Es{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],_=s[a+2],S=s[a+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=S;return}if(f!==S||l!==h||u!==p||c!==_){let m=1-o;const d=l*h+u*p+c*_+f*S,y=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const P=Math.sqrt(g),R=Math.atan2(P,d*y);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const b=o*y;if(l=l*m+h*b,u=u*m+p*b,c=c*m+_*b,f=f*m+S*b,m===1-o){const P=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=P,u*=P,c*=P,f*=P}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+c*f+l*p-u*h,e[t+1]=l*_+c*h+u*f-o*p,e[t+2]=u*_+c*p+o*h-l*f,e[t+3]=c*_-o*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"YXZ":this._x=h*c*f+u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"ZXY":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f-h*p*_;break;case"ZYX":this._x=h*c*f-u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f+h*p*_;break;case"YZX":this._x=h*c*f+u*p*_,this._y=u*p*f+h*c*_,this._z=u*c*_-h*p*f,this._w=u*c*f-h*p*_;break;case"XZY":this._x=h*c*f-u*p*_,this._y=u*p*f-h*c*_,this._z=u*c*_+h*p*f,this._w=u*c*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sa.copy(this).projectOnVector(e),this.sub(Sa)}reflect(e){return this.sub(Sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sa=new B,Zu=new Es;class bs{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Us.subVectors(this.max,$r),rr.subVectors(e.a,$r),sr.subVectors(e.b,$r),or.subVectors(e.c,$r),ui.subVectors(sr,rr),fi.subVectors(or,sr),Ui.subVectors(rr,or);let t=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ui.z,Ui.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ui.z,0,-Ui.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ui.y,Ui.x,0];return!ya(t,rr,sr,or,Us)||(t=[1,0,0,0,1,0,0,0,1],!ya(t,rr,sr,or,Us))?!1:(Ns.crossVectors(ui,fi),t=[Ns.x,Ns.y,Ns.z],ya(t,rr,sr,or,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wn=[new B,new B,new B,new B,new B,new B,new B,new B],mn=new B,Is=new bs,rr=new B,sr=new B,or=new B,ui=new B,fi=new B,Ui=new B,$r=new B,Us=new B,Ns=new B,Ni=new B;function ya(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ni.fromArray(n,s);const o=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=e.dot(Ni),u=t.dot(Ni),c=i.dot(Ni);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Qv=new bs,Kr=new B,Ea=new B;class Ts{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);const t=Kr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Ea)),this.expandByPoint(Kr.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xn=new B,ba=new B,Os=new B,hi=new B,Ta=new B,Fs=new B,Aa=new B;class Yl{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ba.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),hi.copy(this.origin).sub(ba);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Os),o=hi.dot(this.direction),l=-hi.dot(Os),u=hi.lengthSq(),c=Math.abs(1-a*a);let f,h,p,_;if(c>0)if(f=a*l-o,h=a*o-l,_=s*c,f>=0)if(h>=-_)if(h<=_){const S=1/c;f*=S,h*=S,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+u}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ba).addScaledVector(Os,h),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const i=Xn.dot(this.direction),r=Xn.dot(Xn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,i,r,s){Ta.subVectors(t,e),Fs.subVectors(i,e),Aa.crossVectors(Ta,Fs);let a=this.direction.dot(Aa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hi.subVectors(this.origin,e);const l=o*this.direction.dot(Fs.crossVectors(hi,Fs));if(l<0)return null;const u=o*this.direction.dot(Ta.cross(hi));if(u<0||l+u>a)return null;const c=-o*hi.dot(Aa);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,t,i,r,s,a,o,l,u,c,f,h,p,_,S,m){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,u,c,f,h,p,_,S,m)}set(e,t,i,r,s,a,o,l,u,c,f,h,p,_,S,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),s=1/ar.setFromMatrixColumn(e,1).length(),a=1/ar.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*c,p=a*f,_=o*c,S=o*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=h-S*u,t[9]=-o*l,t[2]=S-h*u,t[6]=_+p*u,t[10]=a*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,_=u*c,S=u*f;t[0]=h+S*o,t[4]=_*o-p,t[8]=a*u,t[1]=a*f,t[5]=a*c,t[9]=-o,t[2]=p*o-_,t[6]=S+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,_=u*c,S=u*f;t[0]=h-S*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*c,t[9]=S-h*o,t[2]=-a*u,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*c,p=a*f,_=o*c,S=o*f;t[0]=l*c,t[4]=_*u-p,t[8]=h*u+S,t[1]=l*f,t[5]=S*u+h,t[9]=p*u-_,t[2]=-u,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*u,_=o*l,S=o*u;t[0]=l*c,t[4]=S-h*f,t[8]=_*f+p,t[1]=f,t[5]=a*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*f+_,t[10]=h-S*f}else if(e.order==="XZY"){const h=a*l,p=a*u,_=o*l,S=o*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+S,t[5]=a*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*c,t[10]=S*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e0,e,t0)}lookAt(e,t,i){const r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),di.crossVectors(i,nn),di.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),di.crossVectors(i,nn)),di.normalize(),Bs.crossVectors(nn,di),r[0]=di.x,r[4]=Bs.x,r[8]=nn.x,r[1]=di.y,r[5]=Bs.y,r[9]=nn.y,r[2]=di.z,r[6]=Bs.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],_=i[2],S=i[6],m=i[10],d=i[14],y=i[3],g=i[7],b=i[11],P=i[15],R=r[0],w=r[4],N=r[8],C=r[12],M=r[1],T=r[5],H=r[9],te=r[13],I=r[2],J=r[6],q=r[10],re=r[14],O=r[3],ne=r[7],oe=r[11],he=r[15];return s[0]=a*R+o*M+l*I+u*O,s[4]=a*w+o*T+l*J+u*ne,s[8]=a*N+o*H+l*q+u*oe,s[12]=a*C+o*te+l*re+u*he,s[1]=c*R+f*M+h*I+p*O,s[5]=c*w+f*T+h*J+p*ne,s[9]=c*N+f*H+h*q+p*oe,s[13]=c*C+f*te+h*re+p*he,s[2]=_*R+S*M+m*I+d*O,s[6]=_*w+S*T+m*J+d*ne,s[10]=_*N+S*H+m*q+d*oe,s[14]=_*C+S*te+m*re+d*he,s[3]=y*R+g*M+b*I+P*O,s[7]=y*w+g*T+b*J+P*ne,s[11]=y*N+g*H+b*q+P*oe,s[15]=y*C+g*te+b*re+P*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],_=e[3],S=e[7],m=e[11],d=e[15];return _*(+s*l*f-r*u*f-s*o*h+i*u*h+r*o*p-i*l*p)+S*(+t*l*p-t*u*h+s*a*h-r*a*p+r*u*c-s*l*c)+m*(+t*u*f-t*o*p-s*a*f+i*a*p+s*o*c-i*u*c)+d*(-r*o*c-t*l*f+t*o*h+r*a*f-i*a*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],_=e[12],S=e[13],m=e[14],d=e[15],y=f*m*u-S*h*u+S*l*p-o*m*p-f*l*d+o*h*d,g=_*h*u-c*m*u-_*l*p+a*m*p+c*l*d-a*h*d,b=c*S*u-_*f*u+_*o*p-a*S*p-c*o*d+a*f*d,P=_*f*l-c*S*l-_*o*h+a*S*h+c*o*m-a*f*m,R=t*y+i*g+r*b+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=y*w,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(o*m*s-S*l*s+S*r*u-i*m*u-o*r*d+i*l*d)*w,e[3]=(f*l*s-o*h*s-f*r*u+i*h*u+o*r*p-i*l*p)*w,e[4]=g*w,e[5]=(c*m*s-_*h*s+_*r*p-t*m*p-c*r*d+t*h*d)*w,e[6]=(_*l*s-a*m*s-_*r*u+t*m*u+a*r*d-t*l*d)*w,e[7]=(a*h*s-c*l*s+c*r*u-t*h*u-a*r*p+t*l*p)*w,e[8]=b*w,e[9]=(_*f*s-c*S*s-_*i*p+t*S*p+c*i*d-t*f*d)*w,e[10]=(a*S*s-_*o*s+_*i*u-t*S*u-a*i*d+t*o*d)*w,e[11]=(c*o*s-a*f*s-c*i*u+t*f*u+a*i*p-t*o*p)*w,e[12]=P*w,e[13]=(c*S*r-_*f*r+_*i*h-t*S*h-c*i*m+t*f*m)*w,e[14]=(_*o*r-a*S*r-_*i*l+t*S*l+a*i*m-t*o*m)*w,e[15]=(a*f*r-c*o*r+c*i*l-t*f*l-a*i*h+t*o*h)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,u=s+s,c=a+a,f=o+o,h=s*u,p=s*c,_=s*f,S=a*c,m=a*f,d=o*f,y=l*u,g=l*c,b=l*f,P=i.x,R=i.y,w=i.z;return r[0]=(1-(S+d))*P,r[1]=(p+b)*P,r[2]=(_-g)*P,r[3]=0,r[4]=(p-b)*R,r[5]=(1-(h+d))*R,r[6]=(m+y)*R,r[7]=0,r[8]=(_+g)*w,r[9]=(m-y)*w,r[10]=(1-(h+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ar.set(r[0],r[1],r[2]).length();const a=ar.set(r[4],r[5],r[6]).length(),o=ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const u=1/s,c=1/a,f=1/o;return gn.elements[0]*=u,gn.elements[1]*=u,gn.elements[2]*=u,gn.elements[4]*=c,gn.elements[5]*=c,gn.elements[6]*=c,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ii){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,_;if(o===ii)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Eo)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ii){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(a-s),h=(t+e)*u,p=(i+r)*c;let _,S;if(o===ii)_=(a+s)*f,S=-2*f;else if(o===Eo)_=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ar=new B,gn=new pt,e0=new B(0,0,0),t0=new B(1,1,1),di=new B,Bs=new B,nn=new B,Ju=new pt,Qu=new Es;class zn{constructor(e=0,t=0,i=0,r=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qu.setFromEuler(this),this.setFromQuaternion(Qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Od{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n0=0;const ef=new B,lr=new Es,qn=new pt,zs=new B,Zr=new B,i0=new B,r0=new Es,tf=new B(1,0,0),nf=new B(0,1,0),rf=new B(0,0,1),s0={type:"added"},o0={type:"removed"},wa={type:"childadded",child:null},Ra={type:"childremoved",child:null};class wt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ys(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new B,t=new zn,i=new Es,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Xe}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Od,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(rf,e)}translateOnAxis(e,t){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?zs.copy(e):zs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Zr,zs,this.up):qn.lookAt(zs,Zr,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),lr.setFromRotationMatrix(qn),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(s0),wa.child=e,this.dispatchEvent(wa),wa.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(o0),Ra.child=e,this.dispatchEvent(Ra),Ra.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,i0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}wt.DEFAULT_UP=new B(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new B,jn=new B,Ca=new B,Yn=new B,cr=new B,ur=new B,sf=new B,Pa=new B,La=new B,Da=new B;class In{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),jn.subVectors(i,t),Ca.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(jn),l=_n.dot(Ca),u=jn.dot(jn),c=jn.dot(Ca),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-o*c)*h,_=(a*c-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),jn.subVectors(e,t),_n.cross(jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),_n.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;cr.subVectors(r,i),ur.subVectors(s,i),Pa.subVectors(e,i);const l=cr.dot(Pa),u=ur.dot(Pa);if(l<=0&&u<=0)return t.copy(i);La.subVectors(e,r);const c=cr.dot(La),f=ur.dot(La);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(cr,a);Da.subVectors(e,s);const p=cr.dot(Da),_=ur.dot(Da);if(_>=0&&p<=_)return t.copy(s);const S=p*u-l*_;if(S<=0&&u>=0&&_<=0)return o=u/(u-_),t.copy(i).addScaledVector(ur,o);const m=c*_-p*f;if(m<=0&&f-c>=0&&p-_>=0)return sf.subVectors(s,r),o=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(sf,o);const d=1/(m+S+h);return a=S*d,o=h*d,t.copy(i).addScaledVector(cr,a).addScaledVector(ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function Ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Xv(e,1),t=Zt(t,0,1),i=Zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Ia(a,s,e+1/3),this.g=Ia(a,s,e),this.b=Ia(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){const i=Fd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return nt.fromWorkingColorSpace(It.copy(this),e),Math.round(Zt(It.r*255,0,255))*65536+Math.round(Zt(It.g*255,0,255))*256+Math.round(Zt(It.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(It.copy(this),t);const i=It.r,r=It.g,s=It.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=vn){nt.fromWorkingColorSpace(It.copy(this),e);const t=It.r,i=It.g,r=It.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(Hs);const i=_a(pi.h,Hs.h,t),r=_a(pi.s,Hs.s,t),s=_a(pi.l,Hs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Ke;Ke.NAMES=Fd;let a0=0;class er extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=ys(),this.name="",this.type="Material",this.blending=Rr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cl,this.blendDst=ul,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cl&&(i.blendSrc=this.blendSrc),this.blendDst!==ul&&(i.blendDst=this.blendDst),this.blendEquation!==Wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class To extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new B,Gs=new je;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return jv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Yr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=jt(t,this.array),i=jt(i,this.array),r=jt(r,this.array),s=jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xu&&(e.usage=this.usage),e}}class Bd extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zd extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pt extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let l0=0;const hn=new pt,Ua=new wt,fr=new B,rn=new bs,Jr=new bs,Tt=new B;class en extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=ys(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dd(e)?zd:Bd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,i){return hn.makeTranslation(e,t,i),this.applyMatrix4(hn),this}scale(e,t,i){return hn.makeScale(e,t,i),this.applyMatrix4(hn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(rn.min,Jr.min),rn.expandByPoint(Tt),Tt.addVectors(rn.max,Jr.max),rn.expandByPoint(Tt)):(rn.expandByPoint(Jr.min),rn.expandByPoint(Jr.max))}rn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Tt.fromBufferAttribute(o,u),l&&(fr.fromBufferAttribute(e,u),Tt.add(fr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new B,l[N]=new B;const u=new B,c=new B,f=new B,h=new je,p=new je,_=new je,S=new B,m=new B;function d(N,C,M){u.fromBufferAttribute(i,N),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,C),_.fromBufferAttribute(s,M),c.sub(u),f.sub(u),p.sub(h),_.sub(h);const T=1/(p.x*_.y-_.x*p.y);isFinite(T)&&(S.copy(c).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(T),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(T),o[N].add(S),o[C].add(S),o[M].add(S),l[N].add(m),l[C].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let N=0,C=y.length;N<C;++N){const M=y[N],T=M.start,H=M.count;for(let te=T,I=T+H;te<I;te+=3)d(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const g=new B,b=new B,P=new B,R=new B;function w(N){P.fromBufferAttribute(r,N),R.copy(P);const C=o[N];g.copy(C),g.sub(P.multiplyScalar(P.dot(C))).normalize(),b.crossVectors(R,C);const T=b.dot(l[N])<0?-1:1;a.setXYZW(N,g.x,g.y,g.z,T)}for(let N=0,C=y.length;N<C;++N){const M=y[N],T=M.start,H=M.count;for(let te=T,I=T+H;te<I;te+=3)w(e.getX(te+0)),w(e.getX(te+1)),w(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,u=new B,c=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,S),a.fromBufferAttribute(t,m),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,m),o.add(c),l.add(c),u.add(c),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,h=new u.constructor(l.length*c);let p=0,_=0;for(let S=0,m=l.length;S<m;S++){o.isInterleavedBufferAttribute?p=l[S]*o.data.stride+o.offset:p=l[S]*c;for(let d=0;d<c;d++)h[_++]=u[p++]}return new pn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);t.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const of=new pt,Oi=new Yl,ks=new Ts,af=new B,hr=new B,dr=new B,pr=new B,Na=new B,Vs=new B,Ws=new je,Xs=new je,qs=new je,lf=new B,cf=new B,uf=new B,js=new B,Ys=new B;class ln extends wt{constructor(e=new en,t=new To){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Vs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(Na.fromBufferAttribute(f,e),a?Vs.addScaledVector(Na,c):Vs.addScaledVector(Na.sub(t),c))}t.add(Vs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ks.copy(i.boundingSphere),ks.applyMatrix4(s),Oi.copy(e.ray).recast(e.near),!(ks.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(ks,af)===null||Oi.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(of.copy(s).invert(),Oi.copy(e.ray).applyMatrix4(of),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=a[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,P=g;b<P;b+=3){const R=o.getX(b),w=o.getX(b+1),N=o.getX(b+2);r=$s(this,d,e,i,u,c,f,R,w,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(o.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const y=o.getX(m),g=o.getX(m+1),b=o.getX(m+2);r=$s(this,a,e,i,u,c,f,y,g,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,S=h.length;_<S;_++){const m=h[_],d=a[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=y,P=g;b<P;b+=3){const R=b,w=b+1,N=b+2;r=$s(this,d,e,i,u,c,f,R,w,N),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=_,d=S;m<d;m+=3){const y=m,g=m+1,b=m+2;r=$s(this,a,e,i,u,c,f,y,g,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function c0(n,e,t,i,r,s,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ti,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ys);return u<t.near||u>t.far?null:{distance:u,point:Ys.clone(),object:n}}function $s(n,e,t,i,r,s,a,o,l,u){n.getVertexPosition(o,hr),n.getVertexPosition(l,dr),n.getVertexPosition(u,pr);const c=c0(n,e,t,i,hr,dr,pr,js);if(c){r&&(Ws.fromBufferAttribute(r,o),Xs.fromBufferAttribute(r,l),qs.fromBufferAttribute(r,u),c.uv=In.getInterpolation(js,hr,dr,pr,Ws,Xs,qs,new je)),s&&(Ws.fromBufferAttribute(s,o),Xs.fromBufferAttribute(s,l),qs.fromBufferAttribute(s,u),c.uv1=In.getInterpolation(js,hr,dr,pr,Ws,Xs,qs,new je)),a&&(lf.fromBufferAttribute(a,o),cf.fromBufferAttribute(a,l),uf.fromBufferAttribute(a,u),c.normal=In.getInterpolation(js,hr,dr,pr,lf,cf,uf,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new B,materialIndex:0};In.getNormal(hr,dr,pr,f.normal),c.face=f}return c}class As extends en{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(u,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(f,2));function _(S,m,d,y,g,b,P,R,w,N,C){const M=b/w,T=P/N,H=b/2,te=P/2,I=R/2,J=w+1,q=N+1;let re=0,O=0;const ne=new B;for(let oe=0;oe<q;oe++){const he=oe*T-te;for(let me=0;me<J;me++){const ge=me*M-H;ne[S]=ge*y,ne[m]=he*g,ne[d]=I,u.push(ne.x,ne.y,ne.z),ne[S]=0,ne[m]=0,ne[d]=R>0?1:-1,c.push(ne.x,ne.y,ne.z),f.push(me/w),f.push(1-oe/N),re+=1}}for(let oe=0;oe<N;oe++)for(let he=0;he<w;he++){const me=h+he+J*oe,ge=h+he+J*(oe+1),Y=h+(he+1)+J*(oe+1),ce=h+(he+1)+J*oe;l.push(me,ge,ce),l.push(ge,Y,ce),O+=6}o.addGroup(p,O,C),p+=O,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Gt(n){const e={};for(let t=0;t<n.length;t++){const i=Or(n[t]);for(const r in i)e[r]=i[r]}return e}function u0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hd(n){return n.getRenderTarget()===null?n.outputColorSpace:nt.workingColorSpace}const f0={clone:Or,merge:Gt};var h0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=h0,this.fragmentShader=d0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Or(e.uniforms),this.uniformsGroups=u0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Gd extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new B,ff=new je,hf=new je;class sn extends Gd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gl*2*Math.atan(Math.tan(ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,ff,hf),t.subVectors(hf,ff)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ga*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,gr=1;class p0 extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(mr,gr,e,t);r.layers=this.layers,this.add(r);const s=new sn(mr,gr,e,t);s.layers=this.layers,this.add(s);const a=new sn(mr,gr,e,t);a.layers=this.layers,this.add(a);const o=new sn(mr,gr,e,t);o.layers=this.layers,this.add(o);const l=new sn(mr,gr,e,t);l.layers=this.layers,this.add(l);const u=new sn(mr,gr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const u of t)this.remove(u);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Eo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class kd extends Qt{constructor(e,t,i,r,s,a,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m0 extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new kd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new As(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:Or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Si});s.uniforms.tEquirect.value=t;const a=new ln(r,s),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=Kt),new p0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Oa=new B,g0=new B,_0=new Xe;class Gi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Oa.subVectors(i,t).cross(g0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Oa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_0.getNormalMatrix(e),r=this.coplanarPoint(Oa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Ts,Ks=new B;class $l{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,s=new Gi,a=new Gi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],_=r[9],S=r[10],m=r[11],d=r[12],y=r[13],g=r[14],b=r[15];if(i[0].setComponents(l-s,h-u,m-p,b-d).normalize(),i[1].setComponents(l+s,h+u,m+p,b+d).normalize(),i[2].setComponents(l+a,h+c,m+_,b+y).normalize(),i[3].setComponents(l-a,h-c,m-_,b-y).normalize(),i[4].setComponents(l-o,h-f,m-S,b-g).normalize(),t===ii)i[5].setComponents(l+o,h+f,m+S,b+g).normalize();else if(t===Eo)i[5].setComponents(o,f,S,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ks.x=r.normal.x>0?e.max.x:e.min.x,Ks.y=r.normal.y>0?e.max.y:e.min.y,Ks.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function v0(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,_=n.createBuffer();n.bindBuffer(c,_),n.bufferData(c,f,h),u.onUploadCallback();let S;if(f instanceof Float32Array)S=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)S=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=n.SHORT;else if(f instanceof Uint32Array)S=n.UNSIGNED_INT;else if(f instanceof Int32Array)S=n.INT;else if(f instanceof Int8Array)S=n.BYTE;else if(f instanceof Uint8Array)S=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const h=c.array,p=c._updateRange,_=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&_.length===0&&n.bufferSubData(f,0,h),_.length!==0){for(let S=0,m=_.length;S<m;S++){const d=_[S];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:a,remove:o,update:l}}class ko extends en{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,h=t/l,p=[],_=[],S=[],m=[];for(let d=0;d<c;d++){const y=d*h-a;for(let g=0;g<u;g++){const b=g*f-s;_.push(b,-y,0),S.push(0,0,1),m.push(g/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const g=y+u*d,b=y+u*(d+1),P=y+1+u*(d+1),R=y+1+u*d;p.push(g,b,R),p.push(b,P,R)}this.setIndex(p),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(S,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var x0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,M0=`#ifdef USE_ALPHAHASH
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
#endif`,S0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,w0=`#ifdef USE_BATCHING
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
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,D0=`#ifdef USE_IRIDESCENCE
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
#endif`,I0=`#ifdef USE_BUMPMAP
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,H0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,G0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,k0=`#define PI 3.141592653589793
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
} // validated`,V0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,W0=`vec3 transformedNormal = objectNormal;
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
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`
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
}`,Z0=`#ifdef USE_ENVMAP
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
#endif`,J0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q0=`#ifdef USE_ENVMAP
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
#endif`,ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
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
#endif`,nx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fx=`uniform bool receiveShadow;
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
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
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
#endif`,vx=`struct PhysicalMaterial {
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
}`,xx=`
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
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ex=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ix=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ux=`#ifdef USE_MORPHNORMALS
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
#endif`,Nx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ox=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rM=`float getShadowMask() {
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
}`,sM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oM=`#ifdef USE_SKINNING
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
#endif`,aM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lM=`#ifdef USE_SKINNING
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
#endif`,cM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dM=`#ifdef USE_TRANSMISSION
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
#endif`,pM=`#ifdef USE_TRANSMISSION
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
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MM=`uniform sampler2D t2D;
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`#include <common>
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
}`,AM=`#if DEPTH_PACKING == 3200
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
}`,wM=`#define DISTANCE
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
}`,RM=`#define DISTANCE
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
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LM=`uniform float scale;
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
}`,DM=`uniform vec3 diffuse;
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
}`,IM=`#include <common>
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
}`,UM=`uniform vec3 diffuse;
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
}`,NM=`#define LAMBERT
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
}`,OM=`#define LAMBERT
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
}`,FM=`#define MATCAP
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
}`,BM=`#define MATCAP
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
}`,zM=`#define NORMAL
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
}`,HM=`#define NORMAL
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
}`,GM=`#define PHONG
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
}`,kM=`#define PHONG
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
}`,VM=`#define STANDARD
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
}`,WM=`#define STANDARD
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
}`,XM=`#define TOON
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
}`,qM=`#define TOON
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
}`,jM=`uniform float size;
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
}`,YM=`uniform vec3 diffuse;
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
}`,$M=`#include <common>
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
}`,KM=`uniform vec3 color;
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
}`,ZM=`uniform float rotation;
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
}`,JM=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:x0,alphahash_pars_fragment:M0,alphamap_fragment:S0,alphamap_pars_fragment:y0,alphatest_fragment:E0,alphatest_pars_fragment:b0,aomap_fragment:T0,aomap_pars_fragment:A0,batching_pars_vertex:w0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:L0,iridescence_fragment:D0,bumpmap_pars_fragment:I0,clipping_planes_fragment:U0,clipping_planes_pars_fragment:N0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:F0,color_fragment:B0,color_pars_fragment:z0,color_pars_vertex:H0,color_vertex:G0,common:k0,cube_uv_reflection_fragment:V0,defaultnormal_vertex:W0,displacementmap_pars_vertex:X0,displacementmap_vertex:q0,emissivemap_fragment:j0,emissivemap_pars_fragment:Y0,colorspace_fragment:$0,colorspace_pars_fragment:K0,envmap_fragment:Z0,envmap_common_pars_fragment:J0,envmap_pars_fragment:Q0,envmap_pars_vertex:ex,envmap_physical_pars_fragment:hx,envmap_vertex:tx,fog_vertex:nx,fog_pars_vertex:ix,fog_fragment:rx,fog_pars_fragment:sx,gradientmap_pars_fragment:ox,lightmap_fragment:ax,lightmap_pars_fragment:lx,lights_lambert_fragment:cx,lights_lambert_pars_fragment:ux,lights_pars_begin:fx,lights_toon_fragment:dx,lights_toon_pars_fragment:px,lights_phong_fragment:mx,lights_phong_pars_fragment:gx,lights_physical_fragment:_x,lights_physical_pars_fragment:vx,lights_fragment_begin:xx,lights_fragment_maps:Mx,lights_fragment_end:Sx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Ex,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:Tx,map_fragment:Ax,map_pars_fragment:wx,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Lx,morphinstance_vertex:Dx,morphcolor_vertex:Ix,morphnormal_vertex:Ux,morphtarget_pars_vertex:Nx,morphtarget_vertex:Ox,normal_fragment_begin:Fx,normal_fragment_maps:Bx,normal_pars_fragment:zx,normal_pars_vertex:Hx,normal_vertex:Gx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:qx,opaque_fragment:jx,packing:Yx,premultiplied_alpha_fragment:$x,project_vertex:Kx,dithering_fragment:Zx,dithering_pars_fragment:Jx,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:eM,shadowmap_pars_fragment:tM,shadowmap_pars_vertex:nM,shadowmap_vertex:iM,shadowmask_pars_fragment:rM,skinbase_vertex:sM,skinning_pars_vertex:oM,skinning_vertex:aM,skinnormal_vertex:lM,specularmap_fragment:cM,specularmap_pars_fragment:uM,tonemapping_fragment:fM,tonemapping_pars_fragment:hM,transmission_fragment:dM,transmission_pars_fragment:pM,uv_pars_fragment:mM,uv_pars_vertex:gM,uv_vertex:_M,worldpos_vertex:vM,background_vert:xM,background_frag:MM,backgroundCube_vert:SM,backgroundCube_frag:yM,cube_vert:EM,cube_frag:bM,depth_vert:TM,depth_frag:AM,distanceRGBA_vert:wM,distanceRGBA_frag:RM,equirect_vert:CM,equirect_frag:PM,linedashed_vert:LM,linedashed_frag:DM,meshbasic_vert:IM,meshbasic_frag:UM,meshlambert_vert:NM,meshlambert_frag:OM,meshmatcap_vert:FM,meshmatcap_frag:BM,meshnormal_vert:zM,meshnormal_frag:HM,meshphong_vert:GM,meshphong_frag:kM,meshphysical_vert:VM,meshphysical_frag:WM,meshtoon_vert:XM,meshtoon_frag:qM,points_vert:jM,points_frag:YM,shadow_vert:$M,shadow_frag:KM,sprite_vert:ZM,sprite_frag:JM},Se={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Ln={basic:{uniforms:Gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Gt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Gt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Gt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Gt([Se.points,Se.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Gt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Gt([Se.common,Se.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Gt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Gt([Se.sprite,Se.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Gt([Se.common,Se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Gt([Se.lights,Se.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};Ln.physical={uniforms:Gt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Zs={r:0,b:0,g:0},Bi=new zn,QM=new pt;function eS(n,e,t,i,r,s,a){const o=new Ke(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function _(m,d){let y=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?t:e).get(g)),g===null?S(o,l):g&&g.isColor&&(S(g,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ho)?(c===void 0&&(c=new ln(new As(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Or(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Bi.copy(d.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(QM.makeRotationFromEuler(Bi)),c.material.toneMapped=nt.getTransfer(g.colorSpace)!==ut,(f!==g||h!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new ln(new ko(2,2),new Ai({name:"BackgroundMaterial",uniforms:Or(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=nt.getTransfer(g.colorSpace)!==ut,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function S(m,d){m.getRGB(Zs,Hd(n)),i.buffers.color.setClear(Zs.r,Zs.g,Zs.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,S(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(o,l)},render:_}}function tS(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let u=l,c=!1;function f(I,J,q,re,O){let ne=!1;if(a){const oe=S(re,q,J);u!==oe&&(u=oe,p(u.object)),ne=d(I,re,q,O),ne&&y(I,re,q,O)}else{const oe=J.wireframe===!0;(u.geometry!==re.id||u.program!==q.id||u.wireframe!==oe)&&(u.geometry=re.id,u.program=q.id,u.wireframe=oe,ne=!0)}O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,N(I,J,q,re),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function S(I,J,q){const re=q.wireframe===!0;let O=o[I.id];O===void 0&&(O={},o[I.id]=O);let ne=O[J.id];ne===void 0&&(ne={},O[J.id]=ne);let oe=ne[re];return oe===void 0&&(oe=m(h()),ne[re]=oe),oe}function m(I){const J=[],q=[],re=[];for(let O=0;O<r;O++)J[O]=0,q[O]=0,re[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:q,attributeDivisors:re,object:I,attributes:{},index:null}}function d(I,J,q,re){const O=u.attributes,ne=J.attributes;let oe=0;const he=q.getAttributes();for(const me in he)if(he[me].location>=0){const Y=O[me];let ce=ne[me];if(ce===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&(ce=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&(ce=I.instanceColor)),Y===void 0||Y.attribute!==ce||ce&&Y.data!==ce.data)return!0;oe++}return u.attributesNum!==oe||u.index!==re}function y(I,J,q,re){const O={},ne=J.attributes;let oe=0;const he=q.getAttributes();for(const me in he)if(he[me].location>=0){let Y=ne[me];Y===void 0&&(me==="instanceMatrix"&&I.instanceMatrix&&(Y=I.instanceMatrix),me==="instanceColor"&&I.instanceColor&&(Y=I.instanceColor));const ce={};ce.attribute=Y,Y&&Y.data&&(ce.data=Y.data),O[me]=ce,oe++}u.attributes=O,u.attributesNum=oe,u.index=re}function g(){const I=u.newAttributes;for(let J=0,q=I.length;J<q;J++)I[J]=0}function b(I){P(I,0)}function P(I,J){const q=u.newAttributes,re=u.enabledAttributes,O=u.attributeDivisors;q[I]=1,re[I]===0&&(n.enableVertexAttribArray(I),re[I]=1),O[I]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,J),O[I]=J)}function R(){const I=u.newAttributes,J=u.enabledAttributes;for(let q=0,re=J.length;q<re;q++)J[q]!==I[q]&&(n.disableVertexAttribArray(q),J[q]=0)}function w(I,J,q,re,O,ne,oe){oe===!0?n.vertexAttribIPointer(I,J,q,O,ne):n.vertexAttribPointer(I,J,q,re,O,ne)}function N(I,J,q,re){if(i.isWebGL2===!1&&(I.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const O=re.attributes,ne=q.getAttributes(),oe=J.defaultAttributeValues;for(const he in ne){const me=ne[he];if(me.location>=0){let ge=O[he];if(ge===void 0&&(he==="instanceMatrix"&&I.instanceMatrix&&(ge=I.instanceMatrix),he==="instanceColor"&&I.instanceColor&&(ge=I.instanceColor)),ge!==void 0){const Y=ge.normalized,ce=ge.itemSize,_e=t.get(ge);if(_e===void 0)continue;const V=_e.buffer,ae=_e.type,ie=_e.bytesPerElement,xe=i.isWebGL2===!0&&(ae===n.INT||ae===n.UNSIGNED_INT||ge.gpuType===Ed);if(ge.isInterleavedBufferAttribute){const ye=ge.data,v=ye.stride,L=ge.offset;if(ye.isInstancedInterleavedBuffer){for(let D=0;D<me.locationSize;D++)P(me.location+D,ye.meshPerAttribute);I.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let D=0;D<me.locationSize;D++)b(me.location+D);n.bindBuffer(n.ARRAY_BUFFER,V);for(let D=0;D<me.locationSize;D++)w(me.location+D,ce/me.locationSize,ae,Y,v*ie,(L+ce/me.locationSize*D)*ie,xe)}else{if(ge.isInstancedBufferAttribute){for(let ye=0;ye<me.locationSize;ye++)P(me.location+ye,ge.meshPerAttribute);I.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ye=0;ye<me.locationSize;ye++)b(me.location+ye);n.bindBuffer(n.ARRAY_BUFFER,V);for(let ye=0;ye<me.locationSize;ye++)w(me.location+ye,ce/me.locationSize,ae,Y,ce*ie,ce/me.locationSize*ye*ie,xe)}}else if(oe!==void 0){const Y=oe[he];if(Y!==void 0)switch(Y.length){case 2:n.vertexAttrib2fv(me.location,Y);break;case 3:n.vertexAttrib3fv(me.location,Y);break;case 4:n.vertexAttrib4fv(me.location,Y);break;default:n.vertexAttrib1fv(me.location,Y)}}}}R()}function C(){H();for(const I in o){const J=o[I];for(const q in J){const re=J[q];for(const O in re)_(re[O].object),delete re[O];delete J[q]}delete o[I]}}function M(I){if(o[I.id]===void 0)return;const J=o[I.id];for(const q in J){const re=J[q];for(const O in re)_(re[O].object),delete re[O];delete J[q]}delete o[I.id]}function T(I){for(const J in o){const q=o[J];if(q[I.id]===void 0)continue;const re=q[I.id];for(const O in re)_(re[O].object),delete re[O];delete q[I.id]}}function H(){te(),c=!0,u!==l&&(u=l,p(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:H,resetDefaultState:te,dispose:C,releaseStatesOfGeometry:M,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:b,disableUnusedAttributes:R}}function nS(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let p,_;if(r)p=n,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(c[_],f[_]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,h);let _=0;for(let S=0;S<h;S++)_+=f[S];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function iS(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,b=a||e.has("OES_texture_float"),P=g&&b,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:b,floatVertexTextures:P,maxSamples:R}}function rS(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Gi,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const y=s?0:i,g=y*4;let b=d.clippingState||null;l.value=b,b=c(_,h,g,p);for(let P=0;P!==g;++P)b[P]=t[P];d.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,_){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,_!==!0||m===null){const d=p+S*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,b=p;g!==S;++g,b+=4)a.copy(f[g]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function sS(n){let e=new WeakMap;function t(a,o){return o===fl?a.mapping=Ir:o===hl&&(a.mapping=Ur),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===fl||o===hl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new m0(l.height);return u.fromEquirectangularTexture(n,a),e.set(a,u),a.addEventListener("dispose",r),t(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Wd extends Gd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Sr=4,df=[.125,.215,.35,.446,.526,.582],Xi=20,Fa=new Wd,pf=new Ke;let Ba=null,za=0,Ha=0;const ki=(1+Math.sqrt(5))/2,_r=1/ki,mf=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,ki,_r),new B(0,ki,-_r),new B(_r,0,ki),new B(-_r,0,ki),new B(ki,_r,0),new B(-ki,_r,0)];class gf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ba,za,Ha),e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ba=this._renderer.getRenderTarget(),za=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:_s,format:Mn,colorSpace:wi,depthBuffer:!1},r=_f(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oS(s)),this._blurMaterial=aS(s,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,r){const o=new sn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(pf),c.toneMapping=yi,c.autoClear=!1;const p=new To({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),_=new ln(new As,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(pf),S=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const g=this._cubeSize;Js(r,y*g,d>2?g:0,g,g),c.setRenderTarget(r),S&&c.render(_,o),c.render(e,o)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ir||e.mapping===Ur;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ln(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Js(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Fa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mf[(r-1)%mf.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new ln(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),S=s/_,m=isFinite(s)?1+Math.floor(c*S):Xi;m>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const d=[];let y=0;for(let w=0;w<Xi;++w){const N=w/S,C=Math.exp(-N*N/2);d.push(C),w===0?y+=C:w<m&&(y+=2*C)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const b=this._sizeLods[r],P=3*b*(r>g-Sr?r-g+Sr:0),R=4*(this._cubeSize-b);Js(t,P,R,3*b,2*b),l.setRenderTarget(t),l.render(f,Fa)}}function oS(n){const e=[],t=[],i=[];let r=n;const s=n-Sr+1+df.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Sr?l=df[a-n+Sr-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,S=3,m=2,d=1,y=new Float32Array(S*_*p),g=new Float32Array(m*_*p),b=new Float32Array(d*_*p);for(let R=0;R<p;R++){const w=R%3*2/3-1,N=R>2?0:-1,C=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];y.set(C,S*_*R),g.set(h,m*_*R);const M=[R,R,R,R,R,R];b.set(M,d*_*R)}const P=new en;P.setAttribute("position",new pn(y,S)),P.setAttribute("uv",new pn(g,m)),P.setAttribute("faceIndex",new pn(b,d)),e.push(P),r>Sr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _f(n,e,t){const i=new Ji(n,e,t);return i.texture.mapping=Ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Js(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function aS(n,e,t){const i=new Float32Array(Xi),r=new B(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function vf(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kl(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function xf(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Kl(){return`

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
	`}function lS(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===fl||l===hl,c=l===Ir||l===Ur;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new gf(n)),f=u?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new gf(n));const h=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function cS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uS(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const S=h.morphAttributes[_];for(let m=0,d=S.length;m<d;m++)e.remove(S[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const S=p[_];for(let m=0,d=S.length;m<d;m++)e.update(S[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,_=f.attributes.position;let S=0;if(p!==null){const y=p.array;S=p.version;for(let g=0,b=y.length;g<b;g+=3){const P=y[g+0],R=y[g+1],w=y[g+2];h.push(P,R,R,w,w,P)}}else if(_!==void 0){const y=_.array;S=_.version;for(let g=0,b=y.length/3-1;g<b;g+=3){const P=g+0,R=g+1,w=g+2;h.push(P,R,R,w,w,P)}}else return;const m=new(Dd(h)?zd:Bd)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function fS(n,e,t,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,l;function u(p){o=p.type,l=p.bytesPerElement}function c(p,_){n.drawElements(s,_,o,p*l),t.update(_,s,1)}function f(p,_,S){if(S===0)return;let m,d;if(r)m=n,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,_,o,p*l,S),t.update(_,s,S)}function h(p,_,S){if(S===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<S;d++)this.render(p[d]/l,_[d]);else{m.multiDrawElementsWEBGL(s,_,0,o,p,0,S);let d=0;for(let y=0;y<S;y++)d+=_[y];t.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function hS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dS(n,e){return n[0]-e[0]}function pS(n,e){return Math.abs(e[1])-Math.abs(n[1])}function mS(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new dt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,S=_!==void 0?_.length:0;let m=s.get(c);if(m===void 0||m.count!==S){let te=function(){T.dispose(),s.delete(c),c.removeEventListener("dispose",te)};var p=te;m!==void 0&&m.texture.dispose();const d=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,g=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],P=c.morphAttributes.normal||[],R=c.morphAttributes.color||[];let w=0;d===!0&&(w=1),y===!0&&(w=2),g===!0&&(w=3);let N=c.attributes.position.count*w,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const M=new Float32Array(N*C*4*S),T=new Nd(M,N,C,S);T.type=ti,T.needsUpdate=!0;const H=w*4;for(let I=0;I<S;I++){const J=b[I],q=P[I],re=R[I],O=N*C*4*I;for(let ne=0;ne<J.count;ne++){const oe=ne*H;d===!0&&(a.fromBufferAttribute(J,ne),M[O+oe+0]=a.x,M[O+oe+1]=a.y,M[O+oe+2]=a.z,M[O+oe+3]=0),y===!0&&(a.fromBufferAttribute(q,ne),M[O+oe+4]=a.x,M[O+oe+5]=a.y,M[O+oe+6]=a.z,M[O+oe+7]=0),g===!0&&(a.fromBufferAttribute(re,ne),M[O+oe+8]=a.x,M[O+oe+9]=a.y,M[O+oe+10]=a.z,M[O+oe+11]=re.itemSize===4?a.w:1)}}m={count:S,texture:T,size:new je(N,C)},s.set(c,m),c.addEventListener("dispose",te)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let d=0;for(let g=0;g<h.length;g++)d+=h[g];const y=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",h)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let S=i[c.id];if(S===void 0||S.length!==_){S=[];for(let b=0;b<_;b++)S[b]=[b,0];i[c.id]=S}for(let b=0;b<_;b++){const P=S[b];P[0]=b,P[1]=h[b]}S.sort(pS);for(let b=0;b<8;b++)b<_&&S[b][1]?(o[b][0]=S[b][0],o[b][1]=S[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(dS);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let y=0;for(let b=0;b<8;b++){const P=o[b],R=P[0],w=P[1];R!==Number.MAX_SAFE_INTEGER&&w?(m&&c.getAttribute("morphTarget"+b)!==m[R]&&c.setAttribute("morphTarget"+b,m[R]),d&&c.getAttribute("morphNormal"+b)!==d[R]&&c.setAttribute("morphNormal"+b,d[R]),r[b]=w,y+=w):(m&&c.hasAttribute("morphTarget"+b)===!0&&c.deleteAttribute("morphTarget"+b),d&&c.hasAttribute("morphNormal"+b)===!0&&c.deleteAttribute("morphNormal"+b),r[b]=0)}const g=c.morphTargetsRelative?1:1-y;f.getUniforms().setValue(n,"morphTargetBaseInfluence",g),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function gS(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:a}}class Xd extends Qt{constructor(e,t,i,r,s,a,o,l,u,c){if(c=c!==void 0?c:Zi,c!==Zi&&c!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Zi&&(i=Mi),i===void 0&&c===Nr&&(i=Ki),super(null,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const qd=new Qt,jd=new Xd(1,1);jd.compareFunction=Ld;const Yd=new Nd,$d=new Jv,Kd=new kd,Mf=[],Sf=[],yf=new Float32Array(16),Ef=new Float32Array(9),bf=new Float32Array(4);function Hr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Mf[r];if(s===void 0&&(s=new Float32Array(r),Mf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function yt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Et(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Vo(n,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _S(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2fv(this.addr,e),Et(t,e)}}function xS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;n.uniform3fv(this.addr,e),Et(t,e)}}function MS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4fv(this.addr,e),Et(t,e)}}function SS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;bf.set(i),n.uniformMatrix2fv(this.addr,!1,bf),Et(t,i)}}function yS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;Ef.set(i),n.uniformMatrix3fv(this.addr,!1,Ef),Et(t,i)}}function ES(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(yt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(yt(t,i))return;yf.set(i),n.uniformMatrix4fv(this.addr,!1,yf),Et(t,i)}}function bS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2iv(this.addr,e),Et(t,e)}}function AS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3iv(this.addr,e),Et(t,e)}}function wS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4iv(this.addr,e),Et(t,e)}}function RS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;n.uniform2uiv(this.addr,e),Et(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;n.uniform3uiv(this.addr,e),Et(t,e)}}function LS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;n.uniform4uiv(this.addr,e),Et(t,e)}}function DS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?jd:qd;t.setTexture2D(e||s,r)}function IS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||$d,r)}function US(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Kd,r)}function NS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Yd,r)}function OS(n){switch(n){case 5126:return _S;case 35664:return vS;case 35665:return xS;case 35666:return MS;case 35674:return SS;case 35675:return yS;case 35676:return ES;case 5124:case 35670:return bS;case 35667:case 35671:return TS;case 35668:case 35672:return AS;case 35669:case 35673:return wS;case 5125:return RS;case 36294:return CS;case 36295:return PS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return DS;case 35679:case 36299:case 36307:return IS;case 35680:case 36300:case 36308:case 36293:return US;case 36289:case 36303:case 36311:case 36292:return NS}}function FS(n,e){n.uniform1fv(this.addr,e)}function BS(n,e){const t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function zS(n,e){const t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function HS(n,e){const t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function GS(n,e){const t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function kS(n,e){const t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VS(n,e){const t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function WS(n,e){n.uniform1iv(this.addr,e)}function XS(n,e){n.uniform2iv(this.addr,e)}function qS(n,e){n.uniform3iv(this.addr,e)}function jS(n,e){n.uniform4iv(this.addr,e)}function YS(n,e){n.uniform1uiv(this.addr,e)}function $S(n,e){n.uniform2uiv(this.addr,e)}function KS(n,e){n.uniform3uiv(this.addr,e)}function ZS(n,e){n.uniform4uiv(this.addr,e)}function JS(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||qd,s[a])}function QS(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||$d,s[a])}function ey(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Kd,s[a])}function ty(n,e,t){const i=this.cache,r=e.length,s=Vo(t,r);yt(i,s)||(n.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Yd,s[a])}function ny(n){switch(n){case 5126:return FS;case 35664:return BS;case 35665:return zS;case 35666:return HS;case 35674:return GS;case 35675:return kS;case 35676:return VS;case 5124:case 35670:return WS;case 35667:case 35671:return XS;case 35668:case 35672:return qS;case 35669:case 35673:return jS;case 5125:return YS;case 36294:return $S;case 36295:return KS;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return QS;case 35680:case 36300:case 36308:case 36293:return ey;case 36289:case 36303:case 36311:case 36292:return ty}}class iy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=OS(t.type)}}class ry{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ny(t.type)}}class sy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Tf(n,e){n.seq.push(e),n.map[e.id]=e}function oy(n,e,t){const i=n.name,r=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),a=Ga.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Tf(t,u===void 0?new iy(o,n,e):new ry(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new sy(o),Tf(t,f)),t=f}}}class co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);oy(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Af(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ay=37297;let ly=0;function cy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function uy(n){const e=nt.getPrimaries(nt.workingColorSpace),t=nt.getPrimaries(n);let i;switch(e===t?i="":e===yo&&t===So?i="LinearDisplayP3ToLinearSRGB":e===So&&t===yo&&(i="LinearSRGBToLinearDisplayP3"),n){case wi:case Go:return[i,"LinearTransferOETF"];case vn:case jl:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function wf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+cy(n.getShaderSource(e),a)}else return r}function fy(n,e){const t=uy(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function hy(n,e){let t;switch(e){case Sv:t="Linear";break;case yv:t="Reinhard";break;case Ev:t="OptimizedCineon";break;case Sd:t="ACESFilmic";break;case Tv:t="AgX";break;case Av:t="Neutral";break;case bv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function dy(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yr).join(`
`)}function py(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function my(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gy(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function yr(n){return n!==""}function Rf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function vl(n){return n.replace(_y,xy)}const vy=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function xy(n,e){let t=We[e];if(t===void 0){const i=vy.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vl(t)}const My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pf(n){return n.replace(My,Sy)}function Sy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function yy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Md?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===$_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function Ey(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ir:case Ur:e="ENVMAP_TYPE_CUBE";break;case Ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function by(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ur:e="ENVMAP_MODE_REFRACTION";break}return e}function Ty(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case xv:e="ENVMAP_BLENDING_MIX";break;case Mv:e="ENVMAP_BLENDING_ADD";break}return e}function Ay(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wy(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yy(t),u=Ey(t),c=by(t),f=Ty(t),h=Ay(t),p=t.isWebGL2?"":dy(t),_=py(t),S=my(s),m=r.createProgram();let d,y,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(yr).join(`
`),d.length>0&&(d+=`
`),y=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(yr).join(`
`),y.length>0&&(y+=`
`)):(d=[Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),y=[p,Lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?We.tonemapping_pars_fragment:"",t.toneMapping!==yi?hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,fy("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=vl(a),a=Rf(a,t),a=Cf(a,t),o=vl(o),o=Rf(o,t),o=Cf(o,t),a=Pf(a),o=Pf(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=g+d+a,P=g+y+o,R=Af(r,r.VERTEX_SHADER,b),w=Af(r,r.FRAGMENT_SHADER,P);r.attachShader(m,R),r.attachShader(m,w),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function N(H){if(n.debug.checkShaderErrors){const te=r.getProgramInfoLog(m).trim(),I=r.getShaderInfoLog(R).trim(),J=r.getShaderInfoLog(w).trim();let q=!0,re=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,R,w);else{const O=wf(r,R,"vertex"),ne=wf(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+te+`
`+O+`
`+ne)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(I===""||J==="")&&(re=!1);re&&(H.diagnostics={runnable:q,programLog:te,vertexShader:{log:I,prefix:d},fragmentShader:{log:J,prefix:y}})}r.deleteShader(R),r.deleteShader(w),C=new co(r,m),M=gy(r,m)}let C;this.getUniforms=function(){return C===void 0&&N(this),C};let M;this.getAttributes=function(){return M===void 0&&N(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(m,ay)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=w,this}let Ry=0;class Cy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Py(e),t.set(e,i)),i}}class Py{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}}function Ly(n,e,t,i,r,s,a){const o=new Od,l=new Cy,u=new Set,c=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return u.add(M),M===0?"uv":`uv${M}`}function d(M,T,H,te,I){const J=te.fog,q=I.geometry,re=M.isMeshStandardMaterial?te.environment:null,O=(M.isMeshStandardMaterial?t:e).get(M.envMap||re),ne=O&&O.mapping===Ho?O.image.height:null,oe=S[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const he=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=he!==void 0?he.length:0;let ge=0;q.morphAttributes.position!==void 0&&(ge=1),q.morphAttributes.normal!==void 0&&(ge=2),q.morphAttributes.color!==void 0&&(ge=3);let Y,ce,_e,V;if(oe){const at=Ln[oe];Y=at.vertexShader,ce=at.fragmentShader}else Y=M.vertexShader,ce=M.fragmentShader,l.update(M),_e=l.getVertexShaderID(M),V=l.getFragmentShaderID(M);const ae=n.getRenderTarget(),ie=I.isInstancedMesh===!0,xe=I.isBatchedMesh===!0,ye=!!M.map,v=!!M.matcap,L=!!O,D=!!M.aoMap,W=!!M.lightMap,X=!!M.bumpMap,j=!!M.normalMap,ue=!!M.displacementMap,le=!!M.emissiveMap,fe=!!M.metalnessMap,E=!!M.roughnessMap,x=M.anisotropy>0,U=M.clearcoat>0,G=M.iridescence>0,ee=M.sheen>0,se=M.transmission>0,Ae=x&&!!M.anisotropyMap,Ee=U&&!!M.clearcoatMap,pe=U&&!!M.clearcoatNormalMap,ve=U&&!!M.clearcoatRoughnessMap,De=G&&!!M.iridescenceMap,de=G&&!!M.iridescenceThicknessMap,ot=ee&&!!M.sheenColorMap,ke=ee&&!!M.sheenRoughnessMap,Ce=!!M.specularMap,we=!!M.specularColorMap,Pe=!!M.specularIntensityMap,Ye=se&&!!M.transmissionMap,He=se&&!!M.thicknessMap,ft=!!M.gradientMap,F=!!M.alphaMap,be=M.alphaTest>0,K=!!M.alphaHash,Me=!!M.extensions;let Te=yi;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Te=n.toneMapping);const $e={isWebGL2:f,shaderID:oe,shaderType:M.type,shaderName:M.name,vertexShader:Y,fragmentShader:ce,defines:M.defines,customVertexShaderID:_e,customFragmentShaderID:V,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:xe,instancing:ie,instancingColor:ie&&I.instanceColor!==null,instancingMorph:ie&&I.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:wi,alphaToCoverage:!!M.alphaToCoverage,map:ye,matcap:v,envMap:L,envMapMode:L&&O.mapping,envMapCubeUVHeight:ne,aoMap:D,lightMap:W,bumpMap:X,normalMap:j,displacementMap:p&&ue,emissiveMap:le,normalMapObjectSpace:j&&M.normalMapType===Fv,normalMapTangentSpace:j&&M.normalMapType===Pd,metalnessMap:fe,roughnessMap:E,anisotropy:x,anisotropyMap:Ae,clearcoat:U,clearcoatMap:Ee,clearcoatNormalMap:pe,clearcoatRoughnessMap:ve,iridescence:G,iridescenceMap:De,iridescenceThicknessMap:de,sheen:ee,sheenColorMap:ot,sheenRoughnessMap:ke,specularMap:Ce,specularColorMap:we,specularIntensityMap:Pe,transmission:se,transmissionMap:Ye,thicknessMap:He,gradientMap:ft,opaque:M.transparent===!1&&M.blending===Rr&&M.alphaToCoverage===!1,alphaMap:F,alphaTest:be,alphaHash:K,combine:M.combine,mapUv:ye&&m(M.map.channel),aoMapUv:D&&m(M.aoMap.channel),lightMapUv:W&&m(M.lightMap.channel),bumpMapUv:X&&m(M.bumpMap.channel),normalMapUv:j&&m(M.normalMap.channel),displacementMapUv:ue&&m(M.displacementMap.channel),emissiveMapUv:le&&m(M.emissiveMap.channel),metalnessMapUv:fe&&m(M.metalnessMap.channel),roughnessMapUv:E&&m(M.roughnessMap.channel),anisotropyMapUv:Ae&&m(M.anisotropyMap.channel),clearcoatMapUv:Ee&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(M.sheenRoughnessMap.channel),specularMapUv:Ce&&m(M.specularMap.channel),specularColorMapUv:we&&m(M.specularColorMap.channel),specularIntensityMapUv:Pe&&m(M.specularIntensityMap.channel),transmissionMapUv:Ye&&m(M.transmissionMap.channel),thicknessMapUv:He&&m(M.thicknessMap.channel),alphaMapUv:F&&m(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(j||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(ye||F),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&nt.getTransfer(M.map.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ei,flipSided:M.side===Jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Me&&M.extensions.derivatives===!0,extensionFragDepth:Me&&M.extensions.fragDepth===!0,extensionDrawBuffers:Me&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Me&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Me&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Me&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=u.has(1),$e.vertexUv2s=u.has(2),$e.vertexUv3s=u.has(3),u.clear(),$e}function y(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const H in M.defines)T.push(H),T.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(g(T,M),b(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function g(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function b(M,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.instancingMorph&&o.enable(4),T.matcap&&o.enable(5),T.envMap&&o.enable(6),T.normalMapObjectSpace&&o.enable(7),T.normalMapTangentSpace&&o.enable(8),T.clearcoat&&o.enable(9),T.iridescence&&o.enable(10),T.alphaTest&&o.enable(11),T.vertexColors&&o.enable(12),T.vertexAlphas&&o.enable(13),T.vertexUv1s&&o.enable(14),T.vertexUv2s&&o.enable(15),T.vertexUv3s&&o.enable(16),T.vertexTangents&&o.enable(17),T.anisotropy&&o.enable(18),T.alphaHash&&o.enable(19),T.batching&&o.enable(20),M.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),M.push(o.mask)}function P(M){const T=S[M.type];let H;if(T){const te=Ln[T];H=f0.clone(te.uniforms)}else H=M.uniforms;return H}function R(M,T){let H;for(let te=0,I=c.length;te<I;te++){const J=c[te];if(J.cacheKey===T){H=J,++H.usedTimes;break}}return H===void 0&&(H=new wy(n,T,M,s),c.push(H)),H}function w(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function N(M){l.remove(M)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:w,releaseShaderCache:N,programs:c,dispose:C}}function Dy(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Iy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Df(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function If(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,_,S,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:S,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function o(f,h,p,_,S,m){const d=a(f,h,p,_,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,_,S,m){const d=a(f,h,p,_,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||Iy),i.length>1&&i.sort(h||Df),r.length>1&&r.sort(h||Df)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function Uy(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new If,n.set(i,[a])):r>=s.length?(a=new If,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ny(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ke};break;case"SpotLight":t={position:new B,direction:new B,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Oy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fy=0;function By(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function zy(n,e){const t=new Ny,i=Oy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new B);const s=new B,a=new pt,o=new pt;function l(c,f){let h=0,p=0,_=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let S=0,m=0,d=0,y=0,g=0,b=0,P=0,R=0,w=0,N=0,C=0;c.sort(By);const M=f===!0?Math.PI:1;for(let H=0,te=c.length;H<te;H++){const I=c[H],J=I.color,q=I.intensity,re=I.distance,O=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=J.r*q*M,p+=J.g*q*M,_+=J.b*q*M;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(I.sh.coefficients[ne],q);C++}else if(I.isDirectionalLight){const ne=t.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*M),I.castShadow){const oe=I.shadow,he=i.get(I);he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,r.directionalShadow[S]=he,r.directionalShadowMap[S]=O,r.directionalShadowMatrix[S]=I.shadow.matrix,b++}r.directional[S]=ne,S++}else if(I.isSpotLight){const ne=t.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(J).multiplyScalar(q*M),ne.distance=re,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,r.spot[d]=ne;const oe=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,oe.updateMatrices(I),I.castShadow&&N++),r.spotLightMatrix[d]=oe.matrix,I.castShadow){const he=i.get(I);he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,r.spotShadow[d]=he,r.spotShadowMap[d]=O,R++}d++}else if(I.isRectAreaLight){const ne=t.get(I);ne.color.copy(J).multiplyScalar(q),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),r.rectArea[y]=ne,y++}else if(I.isPointLight){const ne=t.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity*M),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const oe=I.shadow,he=i.get(I);he.shadowBias=oe.bias,he.shadowNormalBias=oe.normalBias,he.shadowRadius=oe.radius,he.shadowMapSize=oe.mapSize,he.shadowCameraNear=oe.camera.near,he.shadowCameraFar=oe.camera.far,r.pointShadow[m]=he,r.pointShadowMap[m]=O,r.pointShadowMatrix[m]=I.shadow.matrix,P++}r.point[m]=ne,m++}else if(I.isHemisphereLight){const ne=t.get(I);ne.skyColor.copy(I.color).multiplyScalar(q*M),ne.groundColor.copy(I.groundColor).multiplyScalar(q*M),r.hemi[g]=ne,g++}}y>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_FLOAT_1,r.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Se.LTC_HALF_1,r.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==S||T.pointLength!==m||T.spotLength!==d||T.rectAreaLength!==y||T.hemiLength!==g||T.numDirectionalShadows!==b||T.numPointShadows!==P||T.numSpotShadows!==R||T.numSpotMaps!==w||T.numLightProbes!==C)&&(r.directional.length=S,r.spot.length=d,r.rectArea.length=y,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=C,T.directionalLength=S,T.pointLength=m,T.spotLength=d,T.rectAreaLength=y,T.hemiLength=g,T.numDirectionalShadows=b,T.numPointShadows=P,T.numSpotShadows=R,T.numSpotMaps=w,T.numLightProbes=C,r.version=Fy++)}function u(c,f){let h=0,p=0,_=0,S=0,m=0;const d=f.matrixWorldInverse;for(let y=0,g=c.length;y<g;y++){const b=c[y];if(b.isDirectionalLight){const P=r.directional[h];P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),h++}else if(b.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),P.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(d),_++}else if(b.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),o.identity(),a.copy(b.matrixWorld),a.premultiply(d),o.extractRotation(a),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),S++}else if(b.isPointLight){const P=r.point[p];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(d),p++}else if(b.isHemisphereLight){const P=r.hemi[m];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function Uf(n,e){const t=new zy(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function Hy(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Uf(n,e),t.set(s,[l])):a>=o.length?(l=new Uf(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Gy extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ky extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
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
}`;function Xy(n,e,t){let i=new $l;const r=new je,s=new je,a=new dt,o=new Gy({depthPacking:Ov}),l=new ky,u={},c=t.maxTextureSize,f={[Ti]:Jt,[Jt]:Ti,[ei]:ei},h=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Vy,fragmentShader:Wy}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ln(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md;let d=this.type;this.render=function(R,w,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const C=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Si),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const te=d!==$n&&this.type===$n,I=d===$n&&this.type!==$n;for(let J=0,q=R.length;J<q;J++){const re=R[J],O=re.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const ne=O.getFrameExtents();if(r.multiply(ne),s.copy(O.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ne.x),r.x=s.x*ne.x,O.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ne.y),r.y=s.y*ne.y,O.mapSize.y=s.y)),O.map===null||te===!0||I===!0){const he=this.type!==$n?{minFilter:Vt,magFilter:Vt}:{};O.map!==null&&O.map.dispose(),O.map=new Ji(r.x,r.y,he),O.map.texture.name=re.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const oe=O.getViewportCount();for(let he=0;he<oe;he++){const me=O.getViewport(he);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),H.viewport(a),O.updateMatrices(re,he),i=O.getFrustum(),b(w,N,O.camera,re,this.type)}O.isPointLightShadow!==!0&&this.type===$n&&y(O,N),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(C,M,T)};function y(R,w){const N=e.update(S);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ji(r.x,r.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,N,h,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,N,p,S,null)}function g(R,w,N,C){let M=null;const T=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(T!==void 0)M=T;else if(M=N.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=M.uuid,te=w.uuid;let I=u[H];I===void 0&&(I={},u[H]=I);let J=I[te];J===void 0&&(J=M.clone(),I[te]=J,w.addEventListener("dispose",P)),M=J}if(M.visible=w.visible,M.wireframe=w.wireframe,C===$n?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=n.properties.get(M);H.light=N}return M}function b(R,w,N,C,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===$n)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const te=e.update(R),I=R.material;if(Array.isArray(I)){const J=te.groups;for(let q=0,re=J.length;q<re;q++){const O=J[q],ne=I[O.materialIndex];if(ne&&ne.visible){const oe=g(R,ne,C,M);R.onBeforeShadow(n,R,w,N,te,oe,O),n.renderBufferDirect(N,null,te,oe,R,O),R.onAfterShadow(n,R,w,N,te,oe,O)}}}else if(I.visible){const J=g(R,I,C,M);R.onBeforeShadow(n,R,w,N,te,J,null),n.renderBufferDirect(N,null,te,J,R,null),R.onAfterShadow(n,R,w,N,te,J,null)}}const H=R.children;for(let te=0,I=H.length;te<I;te++)b(H[te],w,N,C,M)}function P(R){R.target.removeEventListener("dispose",P);for(const N in u){const C=u[N],M=R.target.uuid;M in C&&(C[M].dispose(),delete C[M])}}}function qy(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const be=new dt;let K=null;const Me=new dt(0,0,0,0);return{setMask:function(Te){K!==Te&&!F&&(n.colorMask(Te,Te,Te,Te),K=Te)},setLocked:function(Te){F=Te},setClear:function(Te,$e,at,Rt,cn){cn===!0&&(Te*=Rt,$e*=Rt,at*=Rt),be.set(Te,$e,at,Rt),Me.equals(be)===!1&&(n.clearColor(Te,$e,at,Rt),Me.copy(be))},reset:function(){F=!1,K=null,Me.set(-1,0,0,0)}}}function s(){let F=!1,be=null,K=null,Me=null;return{setTest:function(Te){Te?ie(n.DEPTH_TEST):xe(n.DEPTH_TEST)},setMask:function(Te){be!==Te&&!F&&(n.depthMask(Te),be=Te)},setFunc:function(Te){if(K!==Te){switch(Te){case hv:n.depthFunc(n.NEVER);break;case dv:n.depthFunc(n.ALWAYS);break;case pv:n.depthFunc(n.LESS);break;case xo:n.depthFunc(n.LEQUAL);break;case mv:n.depthFunc(n.EQUAL);break;case gv:n.depthFunc(n.GEQUAL);break;case _v:n.depthFunc(n.GREATER);break;case vv:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}K=Te}},setLocked:function(Te){F=Te},setClear:function(Te){Me!==Te&&(n.clearDepth(Te),Me=Te)},reset:function(){F=!1,be=null,K=null,Me=null}}}function a(){let F=!1,be=null,K=null,Me=null,Te=null,$e=null,at=null,Rt=null,cn=null;return{setTest:function(lt){F||(lt?ie(n.STENCIL_TEST):xe(n.STENCIL_TEST))},setMask:function(lt){be!==lt&&!F&&(n.stencilMask(lt),be=lt)},setFunc:function(lt,zt,Tn){(K!==lt||Me!==zt||Te!==Tn)&&(n.stencilFunc(lt,zt,Tn),K=lt,Me=zt,Te=Tn)},setOp:function(lt,zt,Tn){($e!==lt||at!==zt||Rt!==Tn)&&(n.stencilOp(lt,zt,Tn),$e=lt,at=zt,Rt=Tn)},setLocked:function(lt){F=lt},setClear:function(lt){cn!==lt&&(n.clearStencil(lt),cn=lt)},reset:function(){F=!1,be=null,K=null,Me=null,Te=null,$e=null,at=null,Rt=null,cn=null}}}const o=new r,l=new s,u=new a,c=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,S=[],m=null,d=!1,y=null,g=null,b=null,P=null,R=null,w=null,N=null,C=new Ke(0,0,0),M=0,T=!1,H=null,te=null,I=null,J=null,q=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,ne=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(oe)[1]),O=ne>=1):oe.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),O=ne>=2);let he=null,me={};const ge=n.getParameter(n.SCISSOR_BOX),Y=n.getParameter(n.VIEWPORT),ce=new dt().fromArray(ge),_e=new dt().fromArray(Y);function V(F,be,K,Me){const Te=new Uint8Array(4),$e=n.createTexture();n.bindTexture(F,$e),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<K;at++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(be,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,Te):n.texImage2D(be+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Te);return $e}const ae={};ae[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ae[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),ie(n.DEPTH_TEST),l.setFunc(xo),ue(!1),le(hu),ie(n.CULL_FACE),X(Si);function ie(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function xe(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function ye(F,be){return p[F]!==be?(n.bindFramebuffer(F,be),p[F]=be,i&&(F===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=be),F===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=be)),!0):!1}function v(F,be){let K=S,Me=!1;if(F){K=_.get(be),K===void 0&&(K=[],_.set(be,K));const Te=F.textures;if(K.length!==Te.length||K[0]!==n.COLOR_ATTACHMENT0){for(let $e=0,at=Te.length;$e<at;$e++)K[$e]=n.COLOR_ATTACHMENT0+$e;K.length=Te.length,Me=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,Me=!0);if(Me)if(t.isWebGL2)n.drawBuffers(K);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(K);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function L(F){return m!==F?(n.useProgram(F),m=F,!0):!1}const D={[Wi]:n.FUNC_ADD,[Z_]:n.FUNC_SUBTRACT,[J_]:n.FUNC_REVERSE_SUBTRACT};if(i)D[gu]=n.MIN,D[_u]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(D[gu]=F.MIN_EXT,D[_u]=F.MAX_EXT)}const W={[Q_]:n.ZERO,[ev]:n.ONE,[tv]:n.SRC_COLOR,[cl]:n.SRC_ALPHA,[av]:n.SRC_ALPHA_SATURATE,[sv]:n.DST_COLOR,[iv]:n.DST_ALPHA,[nv]:n.ONE_MINUS_SRC_COLOR,[ul]:n.ONE_MINUS_SRC_ALPHA,[ov]:n.ONE_MINUS_DST_COLOR,[rv]:n.ONE_MINUS_DST_ALPHA,[lv]:n.CONSTANT_COLOR,[cv]:n.ONE_MINUS_CONSTANT_COLOR,[uv]:n.CONSTANT_ALPHA,[fv]:n.ONE_MINUS_CONSTANT_ALPHA};function X(F,be,K,Me,Te,$e,at,Rt,cn,lt){if(F===Si){d===!0&&(xe(n.BLEND),d=!1);return}if(d===!1&&(ie(n.BLEND),d=!0),F!==K_){if(F!==y||lt!==T){if((g!==Wi||R!==Wi)&&(n.blendEquation(n.FUNC_ADD),g=Wi,R=Wi),lt)switch(F){case Rr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case du:n.blendFunc(n.ONE,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mu:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Rr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case du:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case pu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mu:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,P=null,w=null,N=null,C.set(0,0,0),M=0,y=F,T=lt}return}Te=Te||be,$e=$e||K,at=at||Me,(be!==g||Te!==R)&&(n.blendEquationSeparate(D[be],D[Te]),g=be,R=Te),(K!==b||Me!==P||$e!==w||at!==N)&&(n.blendFuncSeparate(W[K],W[Me],W[$e],W[at]),b=K,P=Me,w=$e,N=at),(Rt.equals(C)===!1||cn!==M)&&(n.blendColor(Rt.r,Rt.g,Rt.b,cn),C.copy(Rt),M=cn),y=F,T=!1}function j(F,be){F.side===ei?xe(n.CULL_FACE):ie(n.CULL_FACE);let K=F.side===Jt;be&&(K=!K),ue(K),F.blending===Rr&&F.transparent===!1?X(Si):X(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const Me=F.stencilWrite;u.setTest(Me),Me&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),E(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ue(F){H!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),H=F)}function le(F){F!==j_?(ie(n.CULL_FACE),F!==te&&(F===hu?n.cullFace(n.BACK):F===Y_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):xe(n.CULL_FACE),te=F}function fe(F){F!==I&&(O&&n.lineWidth(F),I=F)}function E(F,be,K){F?(ie(n.POLYGON_OFFSET_FILL),(J!==be||q!==K)&&(n.polygonOffset(be,K),J=be,q=K)):xe(n.POLYGON_OFFSET_FILL)}function x(F){F?ie(n.SCISSOR_TEST):xe(n.SCISSOR_TEST)}function U(F){F===void 0&&(F=n.TEXTURE0+re-1),he!==F&&(n.activeTexture(F),he=F)}function G(F,be,K){K===void 0&&(he===null?K=n.TEXTURE0+re-1:K=he);let Me=me[K];Me===void 0&&(Me={type:void 0,texture:void 0},me[K]=Me),(Me.type!==F||Me.texture!==be)&&(he!==K&&(n.activeTexture(K),he=K),n.bindTexture(F,be||ae[F]),Me.type=F,Me.texture=be)}function ee(){const F=me[he];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(F){ce.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),ce.copy(F))}function Pe(F){_e.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),_e.copy(F))}function Ye(F,be){let K=f.get(be);K===void 0&&(K=new WeakMap,f.set(be,K));let Me=K.get(F);Me===void 0&&(Me=n.getUniformBlockIndex(be,F.name),K.set(F,Me))}function He(F,be){const Me=f.get(be).get(F);c.get(be)!==Me&&(n.uniformBlockBinding(be,Me,F.__bindingPointIndex),c.set(be,Me))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},he=null,me={},p={},_=new WeakMap,S=[],m=null,d=!1,y=null,g=null,b=null,P=null,R=null,w=null,N=null,C=new Ke(0,0,0),M=0,T=!1,H=null,te=null,I=null,J=null,q=null,ce.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:ie,disable:xe,bindFramebuffer:ye,drawBuffers:v,useProgram:L,setBlending:X,setMaterial:j,setFlipSided:ue,setCullFace:le,setLineWidth:fe,setPolygonOffset:E,setScissorTest:x,activeTexture:U,bindTexture:G,unbindTexture:ee,compressedTexImage2D:se,compressedTexImage3D:Ae,texImage2D:ke,texImage3D:Ce,updateUBOMapping:Ye,uniformBlockBinding:He,texStorage2D:de,texStorage3D:ot,texSubImage2D:Ee,texSubImage3D:pe,compressedTexSubImage2D:ve,compressedTexSubImage3D:De,scissor:we,viewport:Pe,reset:ft}}function jy(n,e,t,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,f=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(E,x){return _?new OffscreenCanvas(E,x):bo("canvas")}function m(E,x,U,G){let ee=1;const se=fe(E);if((se.width>G||se.height>G)&&(ee=G/Math.max(se.width,se.height)),ee<1||x===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Ae=x?_l:Math.floor,Ee=Ae(ee*se.width),pe=Ae(ee*se.height);h===void 0&&(h=S(Ee,pe));const ve=U?S(Ee,pe):h;return ve.width=Ee,ve.height=pe,ve.getContext("2d").drawImage(E,0,0,Ee,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Ee+"x"+pe+")."),ve}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function d(E){const x=fe(E);return ju(x.width)&&ju(x.height)}function y(E){return o?!1:E.wrapS!==xn||E.wrapT!==xn||E.minFilter!==Vt&&E.minFilter!==Kt}function g(E,x){return E.generateMipmaps&&x&&E.minFilter!==Vt&&E.minFilter!==Kt}function b(E){n.generateMipmap(E)}function P(E,x,U,G,ee=!1){if(o===!1)return x;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let se=x;if(x===n.RED&&(U===n.FLOAT&&(se=n.R32F),U===n.HALF_FLOAT&&(se=n.R16F),U===n.UNSIGNED_BYTE&&(se=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(se=n.R8UI),U===n.UNSIGNED_SHORT&&(se=n.R16UI),U===n.UNSIGNED_INT&&(se=n.R32UI),U===n.BYTE&&(se=n.R8I),U===n.SHORT&&(se=n.R16I),U===n.INT&&(se=n.R32I)),x===n.RG&&(U===n.FLOAT&&(se=n.RG32F),U===n.HALF_FLOAT&&(se=n.RG16F),U===n.UNSIGNED_BYTE&&(se=n.RG8)),x===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(se=n.RG8UI),U===n.UNSIGNED_SHORT&&(se=n.RG16UI),U===n.UNSIGNED_INT&&(se=n.RG32UI),U===n.BYTE&&(se=n.RG8I),U===n.SHORT&&(se=n.RG16I),U===n.INT&&(se=n.RG32I)),x===n.RGBA){const Ae=ee?Mo:nt.getTransfer(G);U===n.FLOAT&&(se=n.RGBA32F),U===n.HALF_FLOAT&&(se=n.RGBA16F),U===n.UNSIGNED_BYTE&&(se=Ae===ut?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(se=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(se=n.RGB5_A1)}return(se===n.R16F||se===n.R32F||se===n.RG16F||se===n.RG32F||se===n.RGBA16F||se===n.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function R(E,x,U){return g(E,U)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function w(E){return E===Vt||E===vu||E===jr?n.NEAREST:n.LINEAR}function N(E){const x=E.target;x.removeEventListener("dispose",N),M(x),x.isVideoTexture&&f.delete(x)}function C(E){const x=E.target;x.removeEventListener("dispose",C),H(x)}function M(E){const x=i.get(E);if(x.__webglInit===void 0)return;const U=E.source,G=p.get(U);if(G){const ee=G[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&T(E),Object.keys(G).length===0&&p.delete(U)}i.remove(E)}function T(E){const x=i.get(E);n.deleteTexture(x.__webglTexture);const U=E.source,G=p.get(U);delete G[x.__cacheKey],a.memory.textures--}function H(E){const x=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(x.__webglFramebuffer[G]))for(let ee=0;ee<x.__webglFramebuffer[G].length;ee++)n.deleteFramebuffer(x.__webglFramebuffer[G][ee]);else n.deleteFramebuffer(x.__webglFramebuffer[G]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[G])}else{if(Array.isArray(x.__webglFramebuffer))for(let G=0;G<x.__webglFramebuffer.length;G++)n.deleteFramebuffer(x.__webglFramebuffer[G]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let G=0;G<x.__webglColorRenderbuffer.length;G++)x.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[G]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=E.textures;for(let G=0,ee=U.length;G<ee;G++){const se=i.get(U[G]);se.__webglTexture&&(n.deleteTexture(se.__webglTexture),a.memory.textures--),i.remove(U[G])}i.remove(E)}let te=0;function I(){te=0}function J(){const E=te;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),te+=1,E}function q(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function re(E,x){const U=i.get(E);if(E.isVideoTexture&&ue(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const G=E.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(U,E,x);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function O(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){_e(U,E,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function ne(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){_e(U,E,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function oe(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){V(U,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const he={[dl]:n.REPEAT,[xn]:n.CLAMP_TO_EDGE,[pl]:n.MIRRORED_REPEAT},me={[Vt]:n.NEAREST,[vu]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[Kt]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[ji]:n.LINEAR_MIPMAP_LINEAR},ge={[Bv]:n.NEVER,[Wv]:n.ALWAYS,[zv]:n.LESS,[Ld]:n.LEQUAL,[Hv]:n.EQUAL,[Vv]:n.GEQUAL,[Gv]:n.GREATER,[kv]:n.NOTEQUAL};function Y(E,x,U){if(x.type===ti&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kt||x.magFilter===ua||x.magFilter===jr||x.magFilter===ji||x.minFilter===Kt||x.minFilter===ua||x.minFilter===jr||x.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),U?(n.texParameteri(E,n.TEXTURE_WRAP_S,he[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,he[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,he[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,me[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,me[x.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==xn||x.wrapT!==xn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,w(x.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==Vt&&x.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ge[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Vt||x.minFilter!==jr&&x.minFilter!==ji||x.type===ti&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===_s&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ce(E,x){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",N));const G=x.source;let ee=p.get(G);ee===void 0&&(ee={},p.set(G,ee));const se=q(x);if(se!==E.__cacheKey){ee[se]===void 0&&(ee[se]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ee[se].usedTimes++;const Ae=ee[E.__cacheKey];Ae!==void 0&&(ee[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(x)),E.__cacheKey=se,E.__webglTexture=ee[se].texture}return U}function _e(E,x,U){let G=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=n.TEXTURE_3D);const ee=ce(E,x),se=x.source;t.bindTexture(G,E.__webglTexture,n.TEXTURE0+U);const Ae=i.get(se);if(se.version!==Ae.__version||ee===!0){t.activeTexture(n.TEXTURE0+U);const Ee=nt.getPrimaries(nt.workingColorSpace),pe=x.colorSpace===xi?null:nt.getPrimaries(x.colorSpace),ve=x.colorSpace===xi||Ee===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const De=y(x)&&d(x.image)===!1;let de=m(x.image,De,!1,r.maxTextureSize);de=le(x,de);const ot=d(de)||o,ke=s.convert(x.format,x.colorSpace);let Ce=s.convert(x.type),we=P(x.internalFormat,ke,Ce,x.colorSpace,x.isVideoTexture);Y(G,x,ot);let Pe;const Ye=x.mipmaps,He=o&&x.isVideoTexture!==!0&&we!==Cd,ft=Ae.__version===void 0||ee===!0,F=se.dataReady,be=R(x,de,ot);if(x.isDepthTexture)we=n.DEPTH_COMPONENT,o?x.type===ti?we=n.DEPTH_COMPONENT32F:x.type===Mi?we=n.DEPTH_COMPONENT24:x.type===Ki?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:x.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Zi&&we===n.DEPTH_COMPONENT&&x.type!==ql&&x.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Mi,Ce=s.convert(x.type)),x.format===Nr&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,x.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ki,Ce=s.convert(x.type))),ft&&(He?t.texStorage2D(n.TEXTURE_2D,1,we,de.width,de.height):t.texImage2D(n.TEXTURE_2D,0,we,de.width,de.height,0,ke,Ce,null));else if(x.isDataTexture)if(Ye.length>0&&ot){He&&ft&&t.texStorage2D(n.TEXTURE_2D,be,we,Ye[0].width,Ye[0].height);for(let K=0,Me=Ye.length;K<Me;K++)Pe=Ye[K],He?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Pe.width,Pe.height,ke,Ce,Pe.data):t.texImage2D(n.TEXTURE_2D,K,we,Pe.width,Pe.height,0,ke,Ce,Pe.data);x.generateMipmaps=!1}else He?(ft&&t.texStorage2D(n.TEXTURE_2D,be,we,de.width,de.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de.width,de.height,ke,Ce,de.data)):t.texImage2D(n.TEXTURE_2D,0,we,de.width,de.height,0,ke,Ce,de.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){He&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,we,Ye[0].width,Ye[0].height,de.depth);for(let K=0,Me=Ye.length;K<Me;K++)Pe=Ye[K],x.format!==Mn?ke!==null?He?F&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,de.depth,ke,Pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,we,Pe.width,Pe.height,de.depth,0,Pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,de.depth,ke,Ce,Pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,we,Pe.width,Pe.height,de.depth,0,ke,Ce,Pe.data)}else{He&&ft&&t.texStorage2D(n.TEXTURE_2D,be,we,Ye[0].width,Ye[0].height);for(let K=0,Me=Ye.length;K<Me;K++)Pe=Ye[K],x.format!==Mn?ke!==null?He?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Pe.width,Pe.height,ke,Pe.data):t.compressedTexImage2D(n.TEXTURE_2D,K,we,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,Pe.width,Pe.height,ke,Ce,Pe.data):t.texImage2D(n.TEXTURE_2D,K,we,Pe.width,Pe.height,0,ke,Ce,Pe.data)}else if(x.isDataArrayTexture)He?(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,be,we,de.width,de.height,de.depth),F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ke,Ce,de.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,de.width,de.height,de.depth,0,ke,Ce,de.data);else if(x.isData3DTexture)He?(ft&&t.texStorage3D(n.TEXTURE_3D,be,we,de.width,de.height,de.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ke,Ce,de.data)):t.texImage3D(n.TEXTURE_3D,0,we,de.width,de.height,de.depth,0,ke,Ce,de.data);else if(x.isFramebufferTexture){if(ft)if(He)t.texStorage2D(n.TEXTURE_2D,be,we,de.width,de.height);else{let K=de.width,Me=de.height;for(let Te=0;Te<be;Te++)t.texImage2D(n.TEXTURE_2D,Te,we,K,Me,0,ke,Ce,null),K>>=1,Me>>=1}}else if(Ye.length>0&&ot){if(He&&ft){const K=fe(Ye[0]);t.texStorage2D(n.TEXTURE_2D,be,we,K.width,K.height)}for(let K=0,Me=Ye.length;K<Me;K++)Pe=Ye[K],He?F&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ke,Ce,Pe):t.texImage2D(n.TEXTURE_2D,K,we,ke,Ce,Pe);x.generateMipmaps=!1}else if(He){if(ft){const K=fe(de);t.texStorage2D(n.TEXTURE_2D,be,we,K.width,K.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ke,Ce,de)}else t.texImage2D(n.TEXTURE_2D,0,we,ke,Ce,de);g(x,ot)&&b(G),Ae.__version=se.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function V(E,x,U){if(x.image.length!==6)return;const G=ce(E,x),ee=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+U);const se=i.get(ee);if(ee.version!==se.__version||G===!0){t.activeTexture(n.TEXTURE0+U);const Ae=nt.getPrimaries(nt.workingColorSpace),Ee=x.colorSpace===xi?null:nt.getPrimaries(x.colorSpace),pe=x.colorSpace===xi||Ae===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const ve=x.isCompressedTexture||x.image[0].isCompressedTexture,De=x.image[0]&&x.image[0].isDataTexture,de=[];for(let K=0;K<6;K++)!ve&&!De?de[K]=m(x.image[K],!1,!0,r.maxCubemapSize):de[K]=De?x.image[K].image:x.image[K],de[K]=le(x,de[K]);const ot=de[0],ke=d(ot)||o,Ce=s.convert(x.format,x.colorSpace),we=s.convert(x.type),Pe=P(x.internalFormat,Ce,we,x.colorSpace),Ye=o&&x.isVideoTexture!==!0,He=se.__version===void 0||G===!0,ft=ee.dataReady;let F=R(x,ot,ke);Y(n.TEXTURE_CUBE_MAP,x,ke);let be;if(ve){Ye&&He&&t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Pe,ot.width,ot.height);for(let K=0;K<6;K++){be=de[K].mipmaps;for(let Me=0;Me<be.length;Me++){const Te=be[Me];x.format!==Mn?Ce!==null?Ye?ft&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,Pe,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Te.width,Te.height,Ce,we,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,Pe,Te.width,Te.height,0,Ce,we,Te.data)}}}else{if(be=x.mipmaps,Ye&&He){be.length>0&&F++;const K=fe(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,F,Pe,K.width,K.height)}for(let K=0;K<6;K++)if(De){Ye?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,de[K].width,de[K].height,Ce,we,de[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Pe,de[K].width,de[K].height,0,Ce,we,de[K].data);for(let Me=0;Me<be.length;Me++){const $e=be[Me].image[K].image;Ye?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,$e.width,$e.height,Ce,we,$e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,Pe,$e.width,$e.height,0,Ce,we,$e.data)}}else{Ye?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ce,we,de[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Pe,Ce,we,de[K]);for(let Me=0;Me<be.length;Me++){const Te=be[Me];Ye?ft&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,Ce,we,Te.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,Pe,Ce,we,Te.image[K])}}}g(x,ke)&&b(n.TEXTURE_CUBE_MAP),se.__version=ee.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function ae(E,x,U,G,ee,se){const Ae=s.convert(U.format,U.colorSpace),Ee=s.convert(U.type),pe=P(U.internalFormat,Ae,Ee,U.colorSpace);if(!i.get(x).__hasExternalTextures){const De=Math.max(1,x.width>>se),de=Math.max(1,x.height>>se);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,se,pe,De,de,x.depth,0,Ae,Ee,null):t.texImage2D(ee,se,pe,De,de,0,Ae,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),j(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,G,ee,i.get(U).__webglTexture,0,X(x)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,G,ee,i.get(U).__webglTexture,se),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ie(E,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer&&!x.stencilBuffer){let G=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||j(x)){const ee=x.depthTexture;ee&&ee.isDepthTexture&&(ee.type===ti?G=n.DEPTH_COMPONENT32F:ee.type===Mi&&(G=n.DEPTH_COMPONENT24));const se=X(x);j(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,se,G,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,se,G,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,G,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(x.depthBuffer&&x.stencilBuffer){const G=X(x);U&&j(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,G,n.DEPTH24_STENCIL8,x.width,x.height):j(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const G=x.textures;for(let ee=0;ee<G.length;ee++){const se=G[ee],Ae=s.convert(se.format,se.colorSpace),Ee=s.convert(se.type),pe=P(se.internalFormat,Ae,Ee,se.colorSpace),ve=X(x);U&&j(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,pe,x.width,x.height):j(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,pe,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,pe,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function xe(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),re(x.depthTexture,0);const G=i.get(x.depthTexture).__webglTexture,ee=X(x);if(x.depthTexture.format===Zi)j(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(x.depthTexture.format===Nr)j(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function ye(E){const x=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");xe(x.__webglFramebuffer,E)}else if(U){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]=n.createRenderbuffer(),ie(x.__webglDepthbuffer[G],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ie(x.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function v(E,x,U){const G=i.get(E);x!==void 0&&ae(G.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&ye(E)}function L(E){const x=E.texture,U=i.get(E),G=i.get(x);E.addEventListener("dispose",C);const ee=E.textures,se=E.isWebGLCubeRenderTarget===!0,Ae=ee.length>1,Ee=d(E)||o;if(Ae||(G.__webglTexture===void 0&&(G.__webglTexture=n.createTexture()),G.__version=x.version,a.memory.textures++),se){U.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(o&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[pe]=[];for(let ve=0;ve<x.mipmaps.length;ve++)U.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else U.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)U.__webglFramebuffer[pe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Ae)if(r.drawBuffers)for(let pe=0,ve=ee.length;pe<ve;pe++){const De=i.get(ee[pe]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&j(E)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let pe=0;pe<ee.length;pe++){const ve=ee[pe];U.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[pe]);const De=s.convert(ve.format,ve.colorSpace),de=s.convert(ve.type),ot=P(ve.internalFormat,De,de,ve.colorSpace,E.isXRRenderTarget===!0),ke=X(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,ke,ot,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,U.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ie(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(se){t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture),Y(n.TEXTURE_CUBE_MAP,x,Ee);for(let pe=0;pe<6;pe++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)ae(U.__webglFramebuffer[pe][ve],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else ae(U.__webglFramebuffer[pe],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(x,Ee)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let pe=0,ve=ee.length;pe<ve;pe++){const De=ee[pe],de=i.get(De);t.bindTexture(n.TEXTURE_2D,de.__webglTexture),Y(n.TEXTURE_2D,De,Ee),ae(U.__webglFramebuffer,E,De,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),g(De,Ee)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?pe=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(pe,G.__webglTexture),Y(pe,x,Ee),o&&x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)ae(U.__webglFramebuffer[ve],E,x,n.COLOR_ATTACHMENT0,pe,ve);else ae(U.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,pe,0);g(x,Ee)&&b(pe),t.unbindTexture()}E.depthBuffer&&ye(E)}function D(E){const x=d(E)||o,U=E.textures;for(let G=0,ee=U.length;G<ee;G++){const se=U[G];if(g(se,x)){const Ae=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(se).__webglTexture;t.bindTexture(Ae,Ee),b(Ae),t.unbindTexture()}}}function W(E){if(o&&E.samples>0&&j(E)===!1){const x=E.textures,U=E.width,G=E.height;let ee=n.COLOR_BUFFER_BIT;const se=[],Ae=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(E),pe=x.length>1;if(pe)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){se.push(n.COLOR_ATTACHMENT0+ve),E.depthBuffer&&se.push(Ae);const De=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(De===!1&&(E.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]),De===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ae])),pe){const de=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,U,G,0,0,U,G,ee,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);const De=i.get(x[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,De,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function X(E){return Math.min(r.maxSamples,E.samples)}function j(E){const x=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ue(E){const x=a.render.frame;f.get(E)!==x&&(f.set(E,x),E.update())}function le(E,x){const U=E.colorSpace,G=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===ml||U!==wi&&U!==xi&&(nt.getTransfer(U)===ut?o===!1?e.has("EXT_sRGB")===!0&&G===Mn?(E.format=ml,E.minFilter=Kt,E.generateMipmaps=!1):x=Id.sRGBToLinear(x):(G!==Mn||ee!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function fe(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=J,this.resetTextureUnits=I,this.setTexture2D=re,this.setTexture2DArray=O,this.setTexture3D=ne,this.setTextureCube=oe,this.rebindTextures=v,this.setupRenderTarget=L,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=j}function Yy(n,e,t){const i=t.isWebGL2;function r(s,a=xi){let o;const l=nt.getTransfer(a);if(s===Ei)return n.UNSIGNED_BYTE;if(s===bd)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Td)return n.UNSIGNED_SHORT_5_5_5_1;if(s===wv)return n.BYTE;if(s===Rv)return n.SHORT;if(s===ql)return n.UNSIGNED_SHORT;if(s===Ed)return n.INT;if(s===Mi)return n.UNSIGNED_INT;if(s===ti)return n.FLOAT;if(s===_s)return i?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Cv)return n.ALPHA;if(s===Mn)return n.RGBA;if(s===Pv)return n.LUMINANCE;if(s===Lv)return n.LUMINANCE_ALPHA;if(s===Zi)return n.DEPTH_COMPONENT;if(s===Nr)return n.DEPTH_STENCIL;if(s===ml)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Dv)return n.RED;if(s===Ad)return n.RED_INTEGER;if(s===Iv)return n.RG;if(s===wd)return n.RG_INTEGER;if(s===Rd)return n.RGBA_INTEGER;if(s===fa||s===ha||s===da||s===pa)if(l===ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===fa)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ha)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===fa)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ha)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===da)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===pa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xu||s===Mu||s===Su||s===yu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===xu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Mu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Su)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Cd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Eu||s===bu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Eu)return l===ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===bu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Tu||s===Au||s===wu||s===Ru||s===Cu||s===Pu||s===Lu||s===Du||s===Iu||s===Uu||s===Nu||s===Ou||s===Fu||s===Bu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Tu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Au)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ru)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Du)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Iu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ou)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bu)return l===ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ma||s===zu||s===Hu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===ma)return l===ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Uv||s===Gu||s===ku||s===Vu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===ma)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Gu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ku)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ki?i?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class $y extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qs extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ky={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const m=t.getJointPose(S,i),d=this._getHandJoint(u,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&h>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Zy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jy=`
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

}`;class Qy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Ai({extensions:{fragDepth:!0},vertexShader:Zy,fragmentShader:Jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ln(new ko(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class eE extends zr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,_=null;const S=new Qy,m=t.getContextAttributes();let d=null,y=null;const g=[],b=[],P=new je;let R=null;const w=new sn;w.layers.enable(1),w.viewport=new dt;const N=new sn;N.layers.enable(2),N.viewport=new dt;const C=[w,N],M=new $y;M.layers.enable(1),M.layers.enable(2);let T=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ce=g[Y];return ce===void 0&&(ce=new ka,g[Y]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Y){let ce=g[Y];return ce===void 0&&(ce=new ka,g[Y]=ce),ce.getGripSpace()},this.getHand=function(Y){let ce=g[Y];return ce===void 0&&(ce=new ka,g[Y]=ce),ce.getHandSpace()};function te(Y){const ce=b.indexOf(Y.inputSource);if(ce===-1)return;const _e=g[ce];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,u||a),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function I(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",J);for(let Y=0;Y<g.length;Y++){const ce=b[Y];ce!==null&&(b[Y]=null,g[Y].disconnect(ce))}T=null,H=null,S.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,y=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",I),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Ji(p.framebufferWidth,p.framebufferHeight,{format:Mn,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ce=null,_e=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=m.stencil?Nr:Zi,_e=m.stencil?Ki:Mi);const ae={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ji(h.textureWidth,h.textureHeight,{format:Mn,type:Ei,depthTexture:new Xd(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const ie=e.properties.get(y);ie.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(Y){for(let ce=0;ce<Y.removed.length;ce++){const _e=Y.removed[ce],V=b.indexOf(_e);V>=0&&(b[V]=null,g[V].disconnect(_e))}for(let ce=0;ce<Y.added.length;ce++){const _e=Y.added[ce];let V=b.indexOf(_e);if(V===-1){for(let ie=0;ie<g.length;ie++)if(ie>=b.length){b.push(_e),V=ie;break}else if(b[ie]===null){b[ie]=_e,V=ie;break}if(V===-1)break}const ae=g[V];ae&&ae.connect(_e)}}const q=new B,re=new B;function O(Y,ce,_e){q.setFromMatrixPosition(ce.matrixWorld),re.setFromMatrixPosition(_e.matrixWorld);const V=q.distanceTo(re),ae=ce.projectionMatrix.elements,ie=_e.projectionMatrix.elements,xe=ae[14]/(ae[10]-1),ye=ae[14]/(ae[10]+1),v=(ae[9]+1)/ae[5],L=(ae[9]-1)/ae[5],D=(ae[8]-1)/ae[0],W=(ie[8]+1)/ie[0],X=xe*D,j=xe*W,ue=V/(-D+W),le=ue*-D;ce.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(le),Y.translateZ(ue),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const fe=xe+ue,E=ye+ue,x=X-le,U=j+(V-le),G=v*ye/E*fe,ee=L*ye/E*fe;Y.projectionMatrix.makePerspective(x,U,G,ee,fe,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ne(Y,ce){ce===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ce.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;S.texture!==null&&(Y.near=S.depthNear,Y.far=S.depthFar),M.near=N.near=w.near=Y.near,M.far=N.far=w.far=Y.far,(T!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,H=M.far,w.near=T,w.far=H,N.near=T,N.far=H,w.updateProjectionMatrix(),N.updateProjectionMatrix(),Y.updateProjectionMatrix());const ce=Y.parent,_e=M.cameras;ne(M,ce);for(let V=0;V<_e.length;V++)ne(_e[V],ce);_e.length===2?O(M,w,N):M.projectionMatrix.copy(w.projectionMatrix),oe(Y,M,ce)};function oe(Y,ce,_e){_e===null?Y.matrix.copy(ce.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ce.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ce.projectionMatrix),Y.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=gl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return S.texture!==null};let he=null;function me(Y,ce){if(c=ce.getViewerPose(u||a),_=ce,c!==null){const _e=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let V=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,V=!0);for(let ie=0;ie<_e.length;ie++){const xe=_e[ie];let ye=null;if(p!==null)ye=p.getViewport(xe);else{const L=f.getViewSubImage(h,xe);ye=L.viewport,ie===0&&(e.setRenderTargetTextures(y,L.colorTexture,h.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(y))}let v=C[ie];v===void 0&&(v=new sn,v.layers.enable(ie),v.viewport=new dt,C[ie]=v),v.matrix.fromArray(xe.transform.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale),v.projectionMatrix.fromArray(xe.projectionMatrix),v.projectionMatrixInverse.copy(v.projectionMatrix).invert(),v.viewport.set(ye.x,ye.y,ye.width,ye.height),ie===0&&(M.matrix.copy(v.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),V===!0&&M.cameras.push(v)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")){const ie=f.getDepthInformation(_e[0]);ie&&ie.isValid&&ie.texture&&S.init(e,ie,r.renderState)}}for(let _e=0;_e<g.length;_e++){const V=b[_e],ae=g[_e];V!==null&&ae!==void 0&&ae.update(V,ce,u||a)}S.render(e,M),he&&he(Y,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const ge=new Vd;ge.setAnimationLoop(me),this.setAnimationLoop=function(Y){he=Y},this.dispose=function(){}}}const zi=new zn,tE=new pt;function nE(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Hd(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,y,g,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,g):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Jt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Jt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const y=e.get(d),g=y.envMap,b=y.envMapRotation;if(g&&(m.envMap.value=g,zi.copy(b),zi.x*=-1,zi.y*=-1,zi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(tE.makeRotationFromEuler(zi)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*P,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=g*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Jt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function iE(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,g){const b=g.program;i.uniformBlockBinding(y,b)}function u(y,g){let b=r[y.id];b===void 0&&(_(y),b=c(y),r[y.id]=b,y.addEventListener("dispose",m));const P=g.program;i.updateUBOMapping(y,P);const R=e.render.frame;s[y.id]!==R&&(h(y),s[y.id]=R)}function c(y){const g=f();y.__bindingPointIndex=g;const b=n.createBuffer(),P=y.__size,R=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const g=r[y.id],b=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let R=0,w=b.length;R<w;R++){const N=Array.isArray(b[R])?b[R]:[b[R]];for(let C=0,M=N.length;C<M;C++){const T=N[C];if(p(T,R,C,P)===!0){const H=T.__offset,te=Array.isArray(T.value)?T.value:[T.value];let I=0;for(let J=0;J<te.length;J++){const q=te[J],re=S(q);typeof q=="number"||typeof q=="boolean"?(T.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,H+I,T.__data)):q.isMatrix3?(T.__data[0]=q.elements[0],T.__data[1]=q.elements[1],T.__data[2]=q.elements[2],T.__data[3]=0,T.__data[4]=q.elements[3],T.__data[5]=q.elements[4],T.__data[6]=q.elements[5],T.__data[7]=0,T.__data[8]=q.elements[6],T.__data[9]=q.elements[7],T.__data[10]=q.elements[8],T.__data[11]=0):(q.toArray(T.__data,I),I+=re.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(y,g,b,P){const R=y.value,w=g+"_"+b;if(P[w]===void 0)return typeof R=="number"||typeof R=="boolean"?P[w]=R:P[w]=R.clone(),!0;{const N=P[w];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return P[w]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function _(y){const g=y.uniforms;let b=0;const P=16;for(let w=0,N=g.length;w<N;w++){const C=Array.isArray(g[w])?g[w]:[g[w]];for(let M=0,T=C.length;M<T;M++){const H=C[M],te=Array.isArray(H.value)?H.value:[H.value];for(let I=0,J=te.length;I<J;I++){const q=te[I],re=S(q),O=b%P;O!==0&&P-O<re.boundary&&(b+=P-O),H.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=re.storage}}}const R=b%P;return R>0&&(b+=P-R),y.__size=b,y.__cache={},this}function S(y){const g={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function m(y){const g=y.target;g.removeEventListener("dispose",m);const b=a.indexOf(g.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const y in r)n.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Zd{constructor(e={}){const{canvas:t=qv(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),_=new Int32Array(4);let S=null,m=null;const d=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this._useLegacyLights=!1,this.toneMapping=yi,this.toneMappingExposure=1;const g=this;let b=!1,P=0,R=0,w=null,N=-1,C=null;const M=new dt,T=new dt;let H=null;const te=new Ke(0);let I=0,J=t.width,q=t.height,re=1,O=null,ne=null;const oe=new dt(0,0,J,q),he=new dt(0,0,J,q);let me=!1;const ge=new $l;let Y=!1,ce=!1,_e=null;const V=new pt,ae=new je,ie=new B,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return w===null?re:1}let v=i;function L(A,k){for(let Z=0;Z<A.length;Z++){const Q=A[Z],$=t.getContext(Q,k);if($!==null)return $}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wl}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",be,!1),v===null){const k=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&k.shift(),v=L(k,A),v===null)throw L(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&v instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),v.getShaderPrecisionFormat===void 0&&(v.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let D,W,X,j,ue,le,fe,E,x,U,G,ee,se,Ae,Ee,pe,ve,De,de,ot,ke,Ce,we,Pe;function Ye(){D=new cS(v),W=new iS(v,D,e),D.init(W),Ce=new Yy(v,D,W),X=new qy(v,D,W),j=new hS(v),ue=new Dy,le=new jy(v,D,X,ue,W,Ce,j),fe=new sS(g),E=new lS(g),x=new v0(v,W),we=new tS(v,D,x,W),U=new uS(v,x,j,we),G=new gS(v,U,x,j),de=new mS(v,W,le),pe=new rS(ue),ee=new Ly(g,fe,E,D,W,we,pe),se=new nE(g,ue),Ae=new Uy,Ee=new Hy(D,W),De=new eS(g,fe,E,X,G,h,l),ve=new Xy(g,G,W),Pe=new iE(v,j,W,X),ot=new nS(v,D,j,W),ke=new fS(v,D,j,W),j.programs=ee.programs,g.capabilities=W,g.extensions=D,g.properties=ue,g.renderLists=Ae,g.shadowMap=ve,g.state=X,g.info=j}Ye();const He=new eE(g,v);this.xr=He,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const A=D.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=D.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(J,q,!1))},this.getSize=function(A){return A.set(J,q)},this.setSize=function(A,k,Z=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,q=k,t.width=Math.floor(A*re),t.height=Math.floor(k*re),Z===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(J*re,q*re).floor()},this.setDrawingBufferSize=function(A,k,Z){J=A,q=k,re=Z,t.width=Math.floor(A*Z),t.height=Math.floor(k*Z),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(oe)},this.setViewport=function(A,k,Z,Q){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,k,Z,Q),X.viewport(M.copy(oe).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,k,Z,Q){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,k,Z,Q),X.scissor(T.copy(he).multiplyScalar(re).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){X.setScissorTest(me=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){ne=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(A=!0,k=!0,Z=!0){let Q=0;if(A){let $=!1;if(w!==null){const Re=w.texture.format;$=Re===Rd||Re===wd||Re===Ad}if($){const Re=w.texture.type,Le=Re===Ei||Re===Mi||Re===ql||Re===Ki||Re===bd||Re===Td,Ue=De.getClearColor(),Ne=De.getClearAlpha(),qe=Ue.r,Be=Ue.g,Ge=Ue.b;Le?(p[0]=qe,p[1]=Be,p[2]=Ge,p[3]=Ne,v.clearBufferuiv(v.COLOR,0,p)):(_[0]=qe,_[1]=Be,_[2]=Ge,_[3]=Ne,v.clearBufferiv(v.COLOR,0,_))}else Q|=v.COLOR_BUFFER_BIT}k&&(Q|=v.DEPTH_BUFFER_BIT),Z&&(Q|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ae.dispose(),Ee.dispose(),ue.dispose(),fe.dispose(),E.dispose(),G.dispose(),we.dispose(),Pe.dispose(),ee.dispose(),He.dispose(),He.removeEventListener("sessionstart",cn),He.removeEventListener("sessionend",lt),_e&&(_e.dispose(),_e=null),zt.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=j.autoReset,k=ve.enabled,Z=ve.autoUpdate,Q=ve.needsUpdate,$=ve.type;Ye(),j.autoReset=A,ve.enabled=k,ve.autoUpdate=Z,ve.needsUpdate=Q,ve.type=$}function be(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function K(A){const k=A.target;k.removeEventListener("dispose",K),Me(k)}function Me(A){Te(A),ue.remove(A)}function Te(A){const k=ue.get(A).programs;k!==void 0&&(k.forEach(function(Z){ee.releaseProgram(Z)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Z,Q,$,Re){k===null&&(k=xe);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Ue=ip(A,k,Z,Q,$);X.setMaterial(Q,Le);let Ne=Z.index,qe=1;if(Q.wireframe===!0){if(Ne=U.getWireframeAttribute(Z),Ne===void 0)return;qe=2}const Be=Z.drawRange,Ge=Z.attributes.position;let _t=Be.start*qe,tn=(Be.start+Be.count)*qe;Re!==null&&(_t=Math.max(_t,Re.start*qe),tn=Math.min(tn,(Re.start+Re.count)*qe)),Ne!==null?(_t=Math.max(_t,0),tn=Math.min(tn,Ne.count)):Ge!=null&&(_t=Math.max(_t,0),tn=Math.min(tn,Ge.count));const bt=tn-_t;if(bt<0||bt===1/0)return;we.setup($,Q,Ue,Z,Ne);let Hn,mt=ot;if(Ne!==null&&(Hn=x.get(Ne),mt=ke,mt.setIndex(Hn)),$.isMesh)Q.wireframe===!0?(X.setLineWidth(Q.wireframeLinewidth*ye()),mt.setMode(v.LINES)):mt.setMode(v.TRIANGLES);else if($.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),X.setLineWidth(Ve*ye()),$.isLineSegments?mt.setMode(v.LINES):$.isLineLoop?mt.setMode(v.LINE_LOOP):mt.setMode(v.LINE_STRIP)}else $.isPoints?mt.setMode(v.POINTS):$.isSprite&&mt.setMode(v.TRIANGLES);if($.isBatchedMesh)mt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else if($.isInstancedMesh)mt.renderInstances(_t,bt,$.count);else if(Z.isInstancedBufferGeometry){const Ve=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Wo=Math.min(Z.instanceCount,Ve);mt.renderInstances(_t,bt,Wo)}else mt.render(_t,bt)};function $e(A,k,Z){A.transparent===!0&&A.side===ei&&A.forceSinglePass===!1?(A.side=Jt,A.needsUpdate=!0,Rs(A,k,Z),A.side=Ti,A.needsUpdate=!0,Rs(A,k,Z),A.side=ei):Rs(A,k,Z)}this.compile=function(A,k,Z=null){Z===null&&(Z=A),m=Ee.get(Z),m.init(),y.push(m),Z.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),A!==Z&&A.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights(g._useLegacyLights);const Q=new Set;return A.traverse(function($){const Re=$.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const Ue=Re[Le];$e(Ue,Z,$),Q.add(Ue)}else $e(Re,Z,$),Q.add(Re)}),y.pop(),m=null,Q},this.compileAsync=function(A,k,Z=null){const Q=this.compile(A,k,Z);return new Promise($=>{function Re(){if(Q.forEach(function(Le){ue.get(Le).currentProgram.isReady()&&Q.delete(Le)}),Q.size===0){$(A);return}setTimeout(Re,10)}D.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let at=null;function Rt(A){at&&at(A)}function cn(){zt.stop()}function lt(){zt.start()}const zt=new Vd;zt.setAnimationLoop(Rt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(A){at=A,He.setAnimationLoop(A),A===null?zt.stop():zt.start()},He.addEventListener("sessionstart",cn),He.addEventListener("sessionend",lt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(k),k=He.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,k,w),m=Ee.get(A,y.length),m.init(),y.push(m),V.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ge.setFromProjectionMatrix(V),ce=this.localClippingEnabled,Y=pe.init(this.clippingPlanes,ce),S=Ae.get(A,d.length),S.init(),d.push(S),Tn(A,k,0,g.sortObjects),S.finish(),g.sortObjects===!0&&S.sort(O,ne),this.info.render.frame++,Y===!0&&pe.beginShadows();const Z=m.state.shadowsArray;if(ve.render(Z,A,k),Y===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1)&&De.render(S,A),m.setupLights(g._useLegacyLights),k.isArrayCamera){const Q=k.cameras;for(let $=0,Re=Q.length;$<Re;$++){const Le=Q[$];rc(S,A,Le,Le.viewport)}}else rc(S,A,k);w!==null&&(le.updateMultisampleRenderTarget(w),le.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(g,A,k),we.resetDefaultState(),N=-1,C=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function Tn(A,k,Z,Q){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ge.intersectsSprite(A)){Q&&ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(V);const Le=G.update(A),Ue=A.material;Ue.visible&&S.push(A,Le,Ue,Z,ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ge.intersectsObject(A))){const Le=G.update(A),Ue=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ie.copy(A.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),ie.copy(Le.boundingSphere.center)),ie.applyMatrix4(A.matrixWorld).applyMatrix4(V)),Array.isArray(Ue)){const Ne=Le.groups;for(let qe=0,Be=Ne.length;qe<Be;qe++){const Ge=Ne[qe],_t=Ue[Ge.materialIndex];_t&&_t.visible&&S.push(A,Le,_t,Z,ie.z,Ge)}}else Ue.visible&&S.push(A,Le,Ue,Z,ie.z,null)}}const Re=A.children;for(let Le=0,Ue=Re.length;Le<Ue;Le++)Tn(Re[Le],k,Z,Q)}function rc(A,k,Z,Q){const $=A.opaque,Re=A.transmissive,Le=A.transparent;m.setupLightsView(Z),Y===!0&&pe.setGlobalState(g.clippingPlanes,Z),Re.length>0&&np($,Re,k,Z),Q&&X.viewport(M.copy(Q)),$.length>0&&ws($,k,Z),Re.length>0&&ws(Re,k,Z),Le.length>0&&ws(Le,k,Z),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function np(A,k,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Re=W.isWebGL2;_e===null&&(_e=new Ji(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")?_s:Ei,minFilter:ji,samples:Re?4:0})),g.getDrawingBufferSize(ae),Re?_e.setSize(ae.x,ae.y):_e.setSize(_l(ae.x),_l(ae.y));const Le=g.getRenderTarget();g.setRenderTarget(_e),g.getClearColor(te),I=g.getClearAlpha(),I<1&&g.setClearColor(16777215,.5),g.clear();const Ue=g.toneMapping;g.toneMapping=yi,ws(A,Z,Q),le.updateMultisampleRenderTarget(_e),le.updateRenderTargetMipmap(_e);let Ne=!1;for(let qe=0,Be=k.length;qe<Be;qe++){const Ge=k[qe],_t=Ge.object,tn=Ge.geometry,bt=Ge.material,Hn=Ge.group;if(bt.side===ei&&_t.layers.test(Q.layers)){const mt=bt.side;bt.side=Jt,bt.needsUpdate=!0,sc(_t,Z,Q,tn,bt,Hn),bt.side=mt,bt.needsUpdate=!0,Ne=!0}}Ne===!0&&(le.updateMultisampleRenderTarget(_e),le.updateRenderTargetMipmap(_e)),g.setRenderTarget(Le),g.setClearColor(te,I),g.toneMapping=Ue}function ws(A,k,Z){const Q=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Re=A.length;$<Re;$++){const Le=A[$],Ue=Le.object,Ne=Le.geometry,qe=Q===null?Le.material:Q,Be=Le.group;Ue.layers.test(Z.layers)&&sc(Ue,k,Z,Ne,qe,Be)}}function sc(A,k,Z,Q,$,Re){A.onBeforeRender(g,k,Z,Q,$,Re),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(g,k,Z,Q,A,Re),$.transparent===!0&&$.side===ei&&$.forceSinglePass===!1?($.side=Jt,$.needsUpdate=!0,g.renderBufferDirect(Z,k,Q,$,A,Re),$.side=Ti,$.needsUpdate=!0,g.renderBufferDirect(Z,k,Q,$,A,Re),$.side=ei):g.renderBufferDirect(Z,k,Q,$,A,Re),A.onAfterRender(g,k,Z,Q,$,Re)}function Rs(A,k,Z){k.isScene!==!0&&(k=xe);const Q=ue.get(A),$=m.state.lights,Re=m.state.shadowsArray,Le=$.state.version,Ue=ee.getParameters(A,$.state,Re,k,Z),Ne=ee.getProgramCacheKey(Ue);let qe=Q.programs;Q.environment=A.isMeshStandardMaterial?k.environment:null,Q.fog=k.fog,Q.envMap=(A.isMeshStandardMaterial?E:fe).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",K),qe=new Map,Q.programs=qe);let Be=qe.get(Ne);if(Be!==void 0){if(Q.currentProgram===Be&&Q.lightsStateVersion===Le)return ac(A,Ue),Be}else Ue.uniforms=ee.getUniforms(A),A.onBuild(Z,Ue,g),A.onBeforeCompile(Ue,g),Be=ee.acquireProgram(Ue,Ne),qe.set(Ne,Be),Q.uniforms=Ue.uniforms;const Ge=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ge.clippingPlanes=pe.uniform),ac(A,Ue),Q.needsLights=sp(A),Q.lightsStateVersion=Le,Q.needsLights&&(Ge.ambientLightColor.value=$.state.ambient,Ge.lightProbe.value=$.state.probe,Ge.directionalLights.value=$.state.directional,Ge.directionalLightShadows.value=$.state.directionalShadow,Ge.spotLights.value=$.state.spot,Ge.spotLightShadows.value=$.state.spotShadow,Ge.rectAreaLights.value=$.state.rectArea,Ge.ltc_1.value=$.state.rectAreaLTC1,Ge.ltc_2.value=$.state.rectAreaLTC2,Ge.pointLights.value=$.state.point,Ge.pointLightShadows.value=$.state.pointShadow,Ge.hemisphereLights.value=$.state.hemi,Ge.directionalShadowMap.value=$.state.directionalShadowMap,Ge.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ge.spotShadowMap.value=$.state.spotShadowMap,Ge.spotLightMatrix.value=$.state.spotLightMatrix,Ge.spotLightMap.value=$.state.spotLightMap,Ge.pointShadowMap.value=$.state.pointShadowMap,Ge.pointShadowMatrix.value=$.state.pointShadowMatrix),Q.currentProgram=Be,Q.uniformsList=null,Be}function oc(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=co.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function ac(A,k){const Z=ue.get(A);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function ip(A,k,Z,Q,$){k.isScene!==!0&&(k=xe),le.resetTextureUnits();const Re=k.fog,Le=Q.isMeshStandardMaterial?k.environment:null,Ue=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:wi,Ne=(Q.isMeshStandardMaterial?E:fe).get(Q.envMap||Le),qe=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Be=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ge=!!Z.morphAttributes.position,_t=!!Z.morphAttributes.normal,tn=!!Z.morphAttributes.color;let bt=yi;Q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(bt=g.toneMapping);const Hn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mt=Hn!==void 0?Hn.length:0,Ve=ue.get(Q),Wo=m.state.lights;if(Y===!0&&(ce===!0||A!==C)){const un=A===C&&Q.id===N;pe.setState(Q,A,un)}let ht=!1;Q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Wo.state.version||Ve.outputColorSpace!==Ue||$.isBatchedMesh&&Ve.batching===!1||!$.isBatchedMesh&&Ve.batching===!0||$.isInstancedMesh&&Ve.instancing===!1||!$.isInstancedMesh&&Ve.instancing===!0||$.isSkinnedMesh&&Ve.skinning===!1||!$.isSkinnedMesh&&Ve.skinning===!0||$.isInstancedMesh&&Ve.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ve.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ve.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ve.instancingMorph===!1&&$.morphTexture!==null||Ve.envMap!==Ne||Q.fog===!0&&Ve.fog!==Re||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==pe.numPlanes||Ve.numIntersection!==pe.numIntersection)||Ve.vertexAlphas!==qe||Ve.vertexTangents!==Be||Ve.morphTargets!==Ge||Ve.morphNormals!==_t||Ve.morphColors!==tn||Ve.toneMapping!==bt||W.isWebGL2===!0&&Ve.morphTargetsCount!==mt)&&(ht=!0):(ht=!0,Ve.__version=Q.version);let Ri=Ve.currentProgram;ht===!0&&(Ri=Rs(Q,k,$));let lc=!1,kr=!1,Xo=!1;const Lt=Ri.getUniforms(),Ci=Ve.uniforms;if(X.useProgram(Ri.program)&&(lc=!0,kr=!0,Xo=!0),Q.id!==N&&(N=Q.id,kr=!0),lc||C!==A){Lt.setValue(v,"projectionMatrix",A.projectionMatrix),Lt.setValue(v,"viewMatrix",A.matrixWorldInverse);const un=Lt.map.cameraPosition;un!==void 0&&un.setValue(v,ie.setFromMatrixPosition(A.matrixWorld)),W.logarithmicDepthBuffer&&Lt.setValue(v,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Lt.setValue(v,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,kr=!0,Xo=!0)}if($.isSkinnedMesh){Lt.setOptional(v,$,"bindMatrix"),Lt.setOptional(v,$,"bindMatrixInverse");const un=$.skeleton;un&&(W.floatVertexTextures?(un.boneTexture===null&&un.computeBoneTexture(),Lt.setValue(v,"boneTexture",un.boneTexture,le)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}$.isBatchedMesh&&(Lt.setOptional(v,$,"batchingTexture"),Lt.setValue(v,"batchingTexture",$._matricesTexture,le));const qo=Z.morphAttributes;if((qo.position!==void 0||qo.normal!==void 0||qo.color!==void 0&&W.isWebGL2===!0)&&de.update($,Z,Ri),(kr||Ve.receiveShadow!==$.receiveShadow)&&(Ve.receiveShadow=$.receiveShadow,Lt.setValue(v,"receiveShadow",$.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ci.envMap.value=Ne,Ci.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),kr&&(Lt.setValue(v,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&rp(Ci,Xo),Re&&Q.fog===!0&&se.refreshFogUniforms(Ci,Re),se.refreshMaterialUniforms(Ci,Q,re,q,_e),co.upload(v,oc(Ve),Ci,le)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(co.upload(v,oc(Ve),Ci,le),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Lt.setValue(v,"center",$.center),Lt.setValue(v,"modelViewMatrix",$.modelViewMatrix),Lt.setValue(v,"normalMatrix",$.normalMatrix),Lt.setValue(v,"modelMatrix",$.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const un=Q.uniformsGroups;for(let jo=0,op=un.length;jo<op;jo++)if(W.isWebGL2){const cc=un[jo];Pe.update(cc,Ri),Pe.bind(cc,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function rp(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function sp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,k,Z){ue.get(A.texture).__webglTexture=k,ue.get(A.depthTexture).__webglTexture=Z;const Q=ue.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const Z=ue.get(A);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,Z=0){w=A,P=k,R=Z;let Q=!0,$=null,Re=!1,Le=!1;if(A){const Ne=ue.get(A);Ne.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(v.FRAMEBUFFER,null),Q=!1):Ne.__webglFramebuffer===void 0?le.setupRenderTarget(A):Ne.__hasExternalTextures&&le.rebindTextures(A,ue.get(A.texture).__webglTexture,ue.get(A.depthTexture).__webglTexture);const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Be=ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?$=Be[k][Z]:$=Be[k],Re=!0):W.isWebGL2&&A.samples>0&&le.useMultisampledRTT(A)===!1?$=ue.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?$=Be[Z]:$=Be,M.copy(A.viewport),T.copy(A.scissor),H=A.scissorTest}else M.copy(oe).multiplyScalar(re).floor(),T.copy(he).multiplyScalar(re).floor(),H=me;if(X.bindFramebuffer(v.FRAMEBUFFER,$)&&W.drawBuffers&&Q&&X.drawBuffers(A,$),X.viewport(M),X.scissor(T),X.setScissorTest(H),Re){const Ne=ue.get(A.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,Z)}else if(Le){const Ne=ue.get(A.texture),qe=k||0;v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,Ne.__webglTexture,Z||0,qe)}N=-1},this.readRenderTargetPixels=function(A,k,Z,Q,$,Re,Le){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){X.bindFramebuffer(v.FRAMEBUFFER,Ue);try{const Ne=A.texture,qe=Ne.format,Be=Ne.type;if(qe!==Mn&&Ce.convert(qe)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Be===_s&&(D.has("EXT_color_buffer_half_float")||W.isWebGL2&&D.has("EXT_color_buffer_float"));if(Be!==Ei&&Ce.convert(Be)!==v.getParameter(v.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===ti&&(W.isWebGL2||D.has("OES_texture_float")||D.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Q&&Z>=0&&Z<=A.height-$&&v.readPixels(k,Z,Q,$,Ce.convert(qe),Ce.convert(Be),Re)}finally{const Ne=w!==null?ue.get(w).__webglFramebuffer:null;X.bindFramebuffer(v.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(A,k,Z=0){const Q=Math.pow(2,-Z),$=Math.floor(k.image.width*Q),Re=Math.floor(k.image.height*Q);le.setTexture2D(k,0),v.copyTexSubImage2D(v.TEXTURE_2D,Z,0,0,A.x,A.y,$,Re),X.unbindTexture()},this.copyTextureToTexture=function(A,k,Z,Q=0){const $=k.image.width,Re=k.image.height,Le=Ce.convert(Z.format),Ue=Ce.convert(Z.type);le.setTexture2D(Z,0),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,Z.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,Z.unpackAlignment),k.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,Q,A.x,A.y,$,Re,Le,Ue,k.image.data):k.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,Q,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,Le,k.mipmaps[0].data):v.texSubImage2D(v.TEXTURE_2D,Q,A.x,A.y,Le,Ue,k.image),Q===0&&Z.generateMipmaps&&v.generateMipmap(v.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(A,k,Z,Q,$=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=Math.round(A.max.x-A.min.x),Le=Math.round(A.max.y-A.min.y),Ue=A.max.z-A.min.z+1,Ne=Ce.convert(Q.format),qe=Ce.convert(Q.type);let Be;if(Q.isData3DTexture)le.setTexture3D(Q,0),Be=v.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)le.setTexture2DArray(Q,0),Be=v.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,Q.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ge=v.getParameter(v.UNPACK_ROW_LENGTH),_t=v.getParameter(v.UNPACK_IMAGE_HEIGHT),tn=v.getParameter(v.UNPACK_SKIP_PIXELS),bt=v.getParameter(v.UNPACK_SKIP_ROWS),Hn=v.getParameter(v.UNPACK_SKIP_IMAGES),mt=Z.isCompressedTexture?Z.mipmaps[$]:Z.image;v.pixelStorei(v.UNPACK_ROW_LENGTH,mt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,mt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,A.min.x),v.pixelStorei(v.UNPACK_SKIP_ROWS,A.min.y),v.pixelStorei(v.UNPACK_SKIP_IMAGES,A.min.z),Z.isDataTexture||Z.isData3DTexture?v.texSubImage3D(Be,$,k.x,k.y,k.z,Re,Le,Ue,Ne,qe,mt.data):Q.isCompressedArrayTexture?v.compressedTexSubImage3D(Be,$,k.x,k.y,k.z,Re,Le,Ue,Ne,mt.data):v.texSubImage3D(Be,$,k.x,k.y,k.z,Re,Le,Ue,Ne,qe,mt),v.pixelStorei(v.UNPACK_ROW_LENGTH,Ge),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,_t),v.pixelStorei(v.UNPACK_SKIP_PIXELS,tn),v.pixelStorei(v.UNPACK_SKIP_ROWS,bt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Hn),$===0&&Q.generateMipmaps&&v.generateMipmap(Be),X.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?le.setTextureCube(A,0):A.isData3DTexture?le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?le.setTexture2DArray(A,0):le.setTexture2D(A,0),X.unbindTexture()},this.resetState=function(){P=0,R=0,w=null,X.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===jl?"display-p3":"srgb",t.unpackColorSpace=nt.workingColorSpace===Go?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rE extends Zd{}rE.prototype.isWebGL1Renderer=!0;class Zl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new Zl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sE extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jd extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nf=new B,Of=new B,Ff=new pt,Va=new Yl,eo=new Ts;class oE extends wt{constructor(e=new en,t=new Jd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Nf.fromBufferAttribute(t,r-1),Of.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Nf.distanceTo(Of);e.setAttribute("lineDistance",new Pt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),eo.radius+=s,e.ray.intersectsSphere(eo)===!1)return;Ff.copy(r).invert(),Va.copy(e.ray).applyMatrix4(Ff);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new B,c=new B,f=new B,h=new B,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const d=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let g=d,b=y-1;g<b;g+=p){const P=_.getX(g),R=_.getX(g+1);if(u.fromBufferAttribute(m,P),c.fromBufferAttribute(m,R),Va.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(h);N<e.near||N>e.far||t.push({distance:N,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let g=d,b=y-1;g<b;g+=p){if(u.fromBufferAttribute(m,g),c.fromBufferAttribute(m,g+1),Va.distanceSqToSegment(u,c,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(h);R<e.near||R>e.far||t.push({distance:R,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class Qd extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bf=new pt,xl=new Yl,to=new Ts,no=new B;class aE extends wt{constructor(e=new en,t=new Qd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),to.radius+=s,e.ray.intersectsSphere(to)===!1)return;Bf.copy(r).invert(),xl.copy(e.ray).applyMatrix4(Bf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=h,S=p;_<S;_++){const m=u.getX(_);no.fromBufferAttribute(f,m),zf(no,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=h,S=p;_<S;_++)no.fromBufferAttribute(f,_),zf(no,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zf(n,e,t,i,r,s,a){const o=xl.distanceSqToPoint(n);if(o<t){const l=new B;xl.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Gr extends en{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),u(i),c(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const g=new B,b=new B,P=new B;for(let R=0;R<t.length;R+=3)p(t[R+0],g),p(t[R+1],b),p(t[R+2],P),l(g,b,P,y)}function l(y,g,b,P){const R=P+1,w=[];for(let N=0;N<=R;N++){w[N]=[];const C=y.clone().lerp(b,N/R),M=g.clone().lerp(b,N/R),T=R-N;for(let H=0;H<=T;H++)H===0&&N===R?w[N][H]=C:w[N][H]=C.clone().lerp(M,H/T)}for(let N=0;N<R;N++)for(let C=0;C<2*(R-N)-1;C++){const M=Math.floor(C/2);C%2===0?(h(w[N][M+1]),h(w[N+1][M]),h(w[N][M])):(h(w[N][M+1]),h(w[N+1][M+1]),h(w[N+1][M]))}}function u(y){const g=new B;for(let b=0;b<s.length;b+=3)g.x=s[b+0],g.y=s[b+1],g.z=s[b+2],g.normalize().multiplyScalar(y),s[b+0]=g.x,s[b+1]=g.y,s[b+2]=g.z}function c(){const y=new B;for(let g=0;g<s.length;g+=3){y.x=s[g+0],y.y=s[g+1],y.z=s[g+2];const b=m(y)/2/Math.PI+.5,P=d(y)/Math.PI+.5;a.push(b,1-P)}_(),f()}function f(){for(let y=0;y<a.length;y+=6){const g=a[y+0],b=a[y+2],P=a[y+4],R=Math.max(g,b,P),w=Math.min(g,b,P);R>.9&&w<.1&&(g<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function p(y,g){const b=y*3;g.x=e[b+0],g.y=e[b+1],g.z=e[b+2]}function _(){const y=new B,g=new B,b=new B,P=new B,R=new je,w=new je,N=new je;for(let C=0,M=0;C<s.length;C+=9,M+=6){y.set(s[C+0],s[C+1],s[C+2]),g.set(s[C+3],s[C+4],s[C+5]),b.set(s[C+6],s[C+7],s[C+8]),R.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),N.set(a[M+4],a[M+5]),P.copy(y).add(g).add(b).divideScalar(3);const T=m(P);S(R,M+0,y,T),S(w,M+2,g,T),S(N,M+4,b,T)}}function S(y,g,b,P){P<0&&y.x===1&&(a[g]=y.x-1),b.x===0&&b.z===0&&(a[g]=P/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.vertices,e.indices,e.radius,e.details)}}class Jl extends Gr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Jl(e.radius,e.detail)}}class Ql extends Gr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ql(e.radius,e.detail)}}class ec extends Gr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ec(e.radius,e.detail)}}class tc extends Gr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new tc(e.radius,e.detail)}}class Ao extends en{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],u=[],c=new B,f=new B,h=new B;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const S=_/r*s,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(S),f.y=(e+t*Math.cos(m))*Math.sin(S),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),c.x=e*Math.cos(S),c.y=e*Math.sin(S),h.subVectors(f,c).normalize(),l.push(h.x,h.y,h.z),u.push(_/r),u.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const S=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,d=(r+1)*(p-1)+_,y=(r+1)*p+_;a.push(S,m,y),a.push(m,d,y)}this.setIndex(a),this.setAttribute("position",new Pt(o,3)),this.setAttribute("normal",new Pt(l,3)),this.setAttribute("uv",new Pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class nc extends en{constructor(e=1,t=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const o=[],l=[],u=[],c=[],f=new B,h=new B,p=new B,_=new B,S=new B,m=new B,d=new B;for(let g=0;g<=i;++g){const b=g/i*s*Math.PI*2;y(b,s,a,e,p),y(b+.01,s,a,e,_),m.subVectors(_,p),d.addVectors(_,p),S.crossVectors(m,d),d.crossVectors(S,m),S.normalize(),d.normalize();for(let P=0;P<=r;++P){const R=P/r*Math.PI*2,w=-t*Math.cos(R),N=t*Math.sin(R);f.x=p.x+(w*d.x+N*S.x),f.y=p.y+(w*d.y+N*S.y),f.z=p.z+(w*d.z+N*S.z),l.push(f.x,f.y,f.z),h.subVectors(f,p).normalize(),u.push(h.x,h.y,h.z),c.push(g/i),c.push(P/r)}}for(let g=1;g<=i;g++)for(let b=1;b<=r;b++){const P=(r+1)*(g-1)+(b-1),R=(r+1)*g+(b-1),w=(r+1)*g+b,N=(r+1)*(g-1)+b;o.push(P,R,N),o.push(R,w,N)}this.setIndex(o),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(c,2));function y(g,b,P,R,w){const N=Math.cos(g),C=Math.sin(g),M=P/b*g,T=Math.cos(M);w.x=R*(2+T)*.5*N,w.y=R*(2+T)*C*.5,w.z=R*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Hf extends er{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pd,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ic extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Wa=new pt,Gf=new B,kf=new B;class ep{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $l,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gf),kf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kf),t.updateMatrixWorld(),Wa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vf=new pt,Qr=new B,Xa=new B;class lE extends ep{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new je(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qr),Xa.copy(i.position),Xa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Xa),i.updateMatrixWorld(),r.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Vf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vf)}}class cE extends ic{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new lE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uE extends ep{constructor(){super(new Wd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qa extends ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new uE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class fE extends ic{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wl);const hE={__name:"ThreeScene",props:{mouse:{type:Object,required:!0}},setup(n){const e=n,t=Ft(null);let i,r,s,a,o;return Fr(()=>{const l=t.value;i=new Zd({canvas:l,antialias:!0,alpha:!0}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),i.outputColorSpace=vn,i.toneMapping=Sd,i.toneMappingExposure=1.3,r=new sE,r.fog=new Zl(0,.016),s=new sn(60,window.innerWidth/window.innerHeight,.1,200),s.position.z=16;const u=new fE(1118515,2);r.add(u);const c=new qa(16772829,2.2);c.position.set(8,14,10),r.add(c);const f=new qa(15122944,1.4);f.position.set(-12,5,-8),r.add(f);const h=new qa(43212,.8);h.position.set(0,-8,6),r.add(h);const p=[15122944,15221651,54910,43212,14774357,10656766],_=p.slice(0,4).map((O,ne)=>{const oe=new cE(O,4,22);return oe.position.set(Math.cos(ne*Math.PI*.5)*9,Math.sin(ne*1.3)*5,Math.sin(ne*Math.PI*.5)*7-2),r.add(oe),{light:oe,baseAngle:ne*Math.PI*.5}}),S=new nc(1.9,.5,160,18),m=new Hf({color:15122944,emissive:4864512,specular:16777215,shininess:60,wireframe:!0,transparent:!0,opacity:.16}),d=new ln(S,m);d.position.set(0,0,-2),r.add(d);const y=new Ao(4.5,.06,8,80),g=new To({color:43212,transparent:!0,opacity:.1}),b=new ln(y,g);b.rotation.x=Math.PI*.3,r.add(b);const P=[],R=[O=>new Ql(O,1),O=>new ec(O),O=>new Jl(O),O=>new tc(O*1.1)];for(let O=0;O<36;O++){const ne=.25+Math.random()*.9,oe=R[Math.floor(Math.random()*R.length)],he=oe(ne),me=p[Math.floor(Math.random()*p.length)],ge=Math.random()>.4,Y=new Hf({color:me,emissive:me,emissiveIntensity:ge?0:.06,specular:16777215,shininess:ge?0:100,wireframe:ge,transparent:!0,opacity:ge?.3:.13}),ce=new ln(he,Y);ce.position.set((Math.random()-.5)*30,(Math.random()-.5)*20,(Math.random()-.5)*12-2),ce.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),r.add(ce),P.push({mesh:ce,bobOffset:Math.random()*Math.PI*2,bobSpeed:.2+Math.random()*.5,bobAmt:.4+Math.random()*1.1,rotX:(Math.random()-.5)*.011,rotY:(Math.random()-.5)*.015,rotZ:(Math.random()-.5)*.007,baseY:ce.position.y})}for(let O=0;O<8;O++){const ne=p[Math.floor(Math.random()*p.length)],oe=new Ao(.5+Math.random()*1,.035,8,40),he=new To({color:ne,transparent:!0,opacity:.22+Math.random()*.15}),me=new ln(oe,he);me.position.set((Math.random()-.5)*24,(Math.random()-.5)*16,(Math.random()-.5)*10-3),me.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,0),r.add(me),P.push({mesh:me,bobOffset:Math.random()*Math.PI*2,bobSpeed:.12+Math.random()*.28,bobAmt:.3+Math.random()*.9,rotX:(Math.random()-.5)*.009,rotY:(Math.random()-.5)*.013,rotZ:(Math.random()-.5)*.006,baseY:me.position.y})}const w=1200,N=new Float32Array(w*3),C=new Float32Array(w*3),M=new Float32Array(w*3),T=[[.9,.76,0],[.91,.26,.58],[0,.84,.49],[0,.66,.8],[.88,.44,.33],[.64,.61,1]];for(let O=0;O<w;O++){N[O*3]=(Math.random()-.5)*52,N[O*3+1]=(Math.random()-.5)*32,N[O*3+2]=(Math.random()-.5)*18-4;const ne=T[Math.floor(Math.random()*T.length)];C[O*3]=ne[0],C[O*3+1]=ne[1],C[O*3+2]=ne[2],M[O*3]=(Math.random()-.5)*.0018,M[O*3+1]=(Math.random()-.5)*.0018+4e-4,M[O*3+2]=(Math.random()-.5)*.001}const H=new en;H.setAttribute("position",new pn(N,3)),H.setAttribute("color",new pn(C,3));const te=new aE(H,new Qd({size:.058,vertexColors:!0,transparent:!0,opacity:.42}));r.add(te);const I=[];for(let O=0;O<22;O++){const ne=P[Math.floor(Math.random()*P.length)],oe=P[Math.floor(Math.random()*P.length)];if(ne===oe)continue;const he=p[Math.floor(Math.random()*p.length)],me=new en().setFromPoints([ne.mesh.position.clone(),oe.mesh.position.clone()]),ge=new Jd({color:he,transparent:!0,opacity:.055}),Y=new oE(me,ge);r.add(Y),I.push({line:Y,a:ne,b:oe})}let J=0;const q={x:0,y:0},re=()=>{var he,me;a=requestAnimationFrame(re),J+=.007,q.x+=((((he=e.mouse)==null?void 0:he.x)||0)-q.x)*.032,q.y+=((((me=e.mouse)==null?void 0:me.y)||0)-q.y)*.032,P.forEach(ge=>{ge.mesh.position.y=ge.baseY+Math.sin(J*ge.bobSpeed+ge.bobOffset)*ge.bobAmt,ge.mesh.rotation.x+=ge.rotX,ge.mesh.rotation.y+=ge.rotY,ge.mesh.rotation.z+=ge.rotZ}),d.rotation.x=J*.055,d.rotation.y=J*.085,d.rotation.z=J*.038,b.rotation.z=J*.025,b.rotation.y=J*.015,_.forEach(({light:ge,baseAngle:Y},ce)=>{const _e=Y+J*(.16+ce*.04),V=10+Math.sin(J*.28+ce)*3.5;ge.position.x=Math.cos(_e)*V,ge.position.z=Math.sin(_e)*V*.6-2,ge.position.y=Math.sin(J*.38+ce*1.9)*6});const O=H.attributes.position.array;for(let ge=0;ge<w;ge++)O[ge*3]+=M[ge*3],O[ge*3+1]+=M[ge*3+1],O[ge*3+2]+=M[ge*3+2],O[ge*3]>26&&(O[ge*3]=-26),O[ge*3]<-26&&(O[ge*3]=26),O[ge*3+1]>16&&(O[ge*3+1]=-16),O[ge*3+1]<-16&&(O[ge*3+1]=16);H.attributes.position.needsUpdate=!0,I.forEach(({line:ge,a:Y,b:ce})=>{const _e=ge.geometry.attributes.position.array;_e[0]=Y.mesh.position.x,_e[1]=Y.mesh.position.y,_e[2]=Y.mesh.position.z,_e[3]=ce.mesh.position.x,_e[4]=ce.mesh.position.y,_e[5]=ce.mesh.position.z,ge.geometry.attributes.position.needsUpdate=!0});const ne=q.x*1.9+Math.sin(J*.1)*.55,oe=q.y*1.1+Math.cos(J*.08)*.35;s.position.x+=(ne-s.position.x)*.022,s.position.y+=(oe-s.position.y)*.022,s.lookAt(0,0,0),i.render(r,s)};re(),o=()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)},window.addEventListener("resize",o)}),Br(()=>{a&&cancelAnimationFrame(a),o&&window.removeEventListener("resize",o),i&&i.dispose()}),(l,u)=>(Oe(),ze("canvas",{ref_key:"canvasEl",ref:t,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none"}},null,512))}},dE={key:1,style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none",background:"radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(8,12,20,0.85) 100%)"}},pE={key:2,style:{position:"fixed",inset:0,zIndex:0,background:"var(--bg)",backgroundImage:`
          radial-gradient(ellipse at 15% 25%, rgba(255,229,0,0.04) 0%, transparent 55%),
          radial-gradient(ellipse at 85% 75%, rgba(255,45,120,0.04) 0%, transparent 55%)
        `}},mE={__name:"App",setup(n){const e=xs({x:0,y:0}),t=Ft(null),i=Ft(null),r=Ft(!1),s=Ft(!1),a=xd(),o=At(()=>a.path==="/"),l={background:"#000000",color:"var(--text)",minHeight:"100vh",cursor:"none"};let u,c=0,f=0,h=0;const p=()=>{u||(u=requestAnimationFrame(()=>{var b;u=null;const d=t.value,y=i.value;d&&(d.style.setProperty("--cursor-x",`${c}px`),d.style.setProperty("--cursor-y",`${f}px`)),y&&(y.style.setProperty("--cursor-x",`${c}px`),y.style.setProperty("--cursor-y",`${f}px`));const g=performance.now();if(g-h>80){h=g;try{const P=document.elementFromPoint(c,f);r.value=!!((b=P==null?void 0:P.closest)!=null&&b.call(P,'a,button,input,textarea,select,label,[role="link"],.chip,.card'))}catch{r.value=!1}}}))};function _(d){d.pointerType&&d.pointerType!=="mouse"||(c=d.clientX,f=d.clientY,e.x=(c/window.innerWidth-.5)*2,e.y=-(f/window.innerHeight-.5)*2,p())}function S(){s.value=window.scrollY>500}function m(){window.scrollTo({top:0,behavior:"smooth"})}return Fr(()=>{window.addEventListener("pointermove",_,{passive:!0}),window.addEventListener("scroll",S)}),Br(()=>{window.removeEventListener("pointermove",_),window.removeEventListener("scroll",S),u&&cancelAnimationFrame(u)}),(d,y)=>{const g=No("RouterView");return Oe(),ze("div",{style:l},[z("div",{ref_key:"cursorDotEl",ref:t,class:On(["cursor-dot",{hovering:r.value}])},null,2),z("div",{ref_key:"cursorRingEl",ref:i,class:On(["cursor-ring",{hovering:r.value}])},null,2),z("button",{class:On(["back-to-top",{visible:s.value}]),onClick:m,"aria-label":"Back to top"}," ↑ ",2),o.value?(Oe(),Fl(hE,{key:0,mouse:e},null,8,["mouse"])):vi("",!0),o.value?(Oe(),ze("div",dE)):(Oe(),ze("div",pE)),it(q_),z("main",{style:Nt({position:"relative",zIndex:o.value?10:5})},[it(g)],4)])}}},Wf="/assets/habit-tracker-dashboard.png",gE=["viewBox","fill","stroke","stroke-width"],_E=["innerHTML"],Ml={__name:"Icon",props:{name:{type:String,required:!0},size:{type:[Number,String],default:24},color:{type:String,default:"currentColor"}},setup(n){const e=n,t={globe:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'},check:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,path:'<polyline points="20 6 9 17 4 12"/>'},github:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>'},linkedin:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>'},twitter:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'},devto:{viewBox:"0 0 24 24",fill:"currentColor",stroke:"none",strokeWidth:0,path:'<path d="M7.72 20.56c.36.18.76.18 1.12 0l6.92-3.98c.36-.21.58-.61.58-1.04V5.62c0-.43-.22-.83-.58-1.04L8.84 2.6c-.36-.18-.76-.18-1.12 0L.8 6.58c-.36.21-.58.61-.58 1.04v9.92c0 .43.22.83.58 1.04l6.92 3.98zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm0-5.67c-1.2 0-2.17.97-2.17 2.17s.97 2.17 2.17 2.17 2.17-.97 2.17-2.17-.97-2.17-2.17-2.17zM5.33 9.13c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25zm4.67 8.62h-3.5V8.75h1.17v6h1.17v-6h1.16v9z"/>'},instagram:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,path:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>'},email:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>'},cart:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>'},brain:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0 1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 5.28.55"/><path d="M12 4.5a2.5 2.5 0 0 1 4.96-.46 2.5 2.5 0 0 1 1.98 3 2.5 2.5 0 0 1-1.32 4.24 3 3 0 0 1-.34 5.58 2.5 2.5 0 0 1-5.28.55"/><path d="M12 4.5v16"/>'},clipboard:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>'},folder:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'},code:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'},arrowRight:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'},mapPin:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'},user:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'},briefcase:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.5,path:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'}},i=At(()=>t[e.name]||t.code),r=At(()=>({width:typeof e.size=="number"?`${e.size}px`:e.size,height:typeof e.size=="number"?`${e.size}px`:e.size,color:e.color,display:"inline-block",flexShrink:0}));return(s,a)=>(Oe(),ze("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:i.value.viewBox,style:Nt(r.value),fill:i.value.fill,stroke:i.value.stroke,"stroke-width":i.value.strokeWidth},[z("g",{innerHTML:i.value.path},null,8,_E)],12,gE))}},vE={key:0,style:{fontSize:"var(--text-base)"}},Xf={__name:"FloatBadge",props:{emoji:{type:String,default:""},icon:{type:String,default:""},label:{type:String,required:!0},color:{type:String,required:!0},style:{type:Object,default:()=>({})}},setup(n){const e=n,t=At(()=>({display:"inline-flex",alignItems:"center",gap:"6px",padding:"8px 14px",borderRadius:"var(--radius-sm)",background:`color-mix(in srgb, ${e.color} 8%, transparent)`,border:`1px solid color-mix(in srgb, ${e.color} 20%, transparent)`,fontFamily:"var(--mono)",fontSize:"var(--text-xs)",letterSpacing:"0.06em",color:e.color,whiteSpace:"nowrap"}));return(i,r)=>(Oe(),ze("div",{style:Nt([t.value,n.style])},[n.emoji?(Oe(),ze("span",vE,Ze(n.emoji),1)):n.icon?(Oe(),Fl(Ml,{key:1,name:n.icon,size:14,color:n.color},null,8,["name","color"])):vi("",!0),Un(" "+Ze(n.label),1)],4))}},xE={class:"home-hero-inner"},ME={class:"hero-grid"},SE={class:"hero-copy"},yE={class:"hero-badges"},EE={class:"hero-actions"},bE={class:"hero-dashboard","aria-label":"Featured projects preview"},TE={id:"about",class:"home-section reveal-section"},AE={class:"home-inner split-section"},wE={class:"section-copy reveal-child",style:{"--reveal-delay":"0.15s"}},RE={class:"profile-list"},CE={class:"home-section home-projects reveal-section"},PE={class:"home-inner"},LE={class:"section-row section-row--project reveal-child"},DE={class:"feature-project-copy"},IE={class:"feature-list"},UE={class:"home-section home-projects reveal-section"},NE={class:"home-inner"},OE={class:"feature-project-copy"},FE={class:"feature-list feature-list--orange"},BE={class:"nexperf-tech-row"},zE={class:"feature-project-nexperf-visual"},HE={class:"nexperf-dashboard"},GE={class:"nexperf-metrics-grid"},kE={class:"nexperf-metric-label"},VE={class:"nexperf-chart"},WE={class:"nexperf-bars"},XE={class:"nexperf-endpoints"},qE={class:"nexperf-ep-path"},jE={class:"nexperf-ep-ms"},YE={class:"home-section reveal-section"},$E={class:"home-inner"},KE={class:"stack-grid"},ZE=["onMousemove","onMouseleave"],JE={class:"u-flex u-wrap u-gap-1"},QE={class:"home-section reveal-section"},eb={class:"home-inner"},tb={class:"highlights-grid"},nb=["onMousemove","onMouseleave"],ib={id:"contact",class:"home-section home-contact reveal-section"},rb={class:"home-inner"},sb={class:"reveal glass contact-card reveal-child visible","data-id":"contact"},ob={class:"contact-socials"},ab=["href","aria-label"],lb={class:"contact-social-name"},cb={class:"contact-social-handle"},ub={__name:"Home",setup(n){const e=[{value:"Full-stack",label:"Frontend polish plus backend reliability."},{value:"Product-first",label:"Features shaped around clarity and user intent."},{value:"Ship-ready",label:"Responsive, deployable, maintainable builds."}],t=["Daily habit check-ins","Target tracking","Week, month, and year heatmaps","Responsive dashboard UI"],i=["Real-time API latency with p50 / p95 / p99 percentiles","Throughput and error rate monitoring dashboards","Core Web Vitals integration for frontend observability","Performance regression alerts with baseline comparison"],r=["React","Java","Spring Boot","WebSockets","PostgreSQL","Redis"],s=[{label:"Avg Latency",value:"42ms",delta:"8%",up:!1,color:"var(--lime)"},{label:"p95 Latency",value:"118ms",delta:"3%",up:!1,color:"var(--sky)"},{label:"Error Rate",value:"0.12%",delta:"0.04%",up:!1,color:"var(--lime)"},{label:"Req / sec",value:"2.4k",delta:"12%",up:!0,color:"var(--yellow)"}],a=[28,35,32,48,40,55,38,62,45,72,58,80,65,48,55,42,38,50,44,36,52,46,40,34],o=[{method:"GET",path:"/api/users",ms:12,color:"var(--lime)"},{method:"POST",path:"/api/events",ms:38,color:"var(--sky)"},{method:"GET",path:"/api/metrics",ms:64,color:"var(--yellow)"},{method:"DELETE",path:"/api/cache",ms:98,color:"var(--orange)"}],l=[{title:"Frontend",icon:"code",color:"var(--sky)",copy:"Interfaces that are responsive, fast, and easy to scan.",tech:["React","Vue.js","Vite","Tailwind CSS","Three.js"]},{title:"Backend",icon:"briefcase",color:"var(--lime)",copy:"Services built around dependable APIs and maintainable structure.",tech:["Java","Spring Boot","REST APIs","PostgreSQL","MySQL"]},{title:"Delivery",icon:"check",color:"var(--yellow)",copy:"Practical tooling for iteration, deployment, and collaboration.",tech:["Git","GitHub Pages","Vercel-style workflows","Responsive QA"]}],u=[{kicker:"01",title:"Product flow",copy:"Turns rough ideas into clear screens, states, and actions."},{kicker:"02",title:"UI craft",copy:"Keeps interfaces polished, responsive, and maintainable."},{kicker:"03",title:"Full-stack delivery",copy:"Connects frontend behavior with dependable backend APIs."}],c=[{label:"GitHub",url:"https://github.com/prabath-23",handle:"github.com/prabath-23",icon:"github",color:"var(--text-mid)"},{label:"LinkedIn",url:"https://linkedin.com/in/prabath-sai/",handle:"linkedin.com/in/prabath-sai",icon:"linkedin",color:"var(--sky)"},{label:"Instagram",url:"https://instagram.com/prabath.chowdary",handle:"@prabath.chowdary",icon:"instagram",color:"var(--pink)"}],f=Ft(null),h=Ft(null),p=Ft(null),_=Ft(null),S={};function m(N,C){const M=N.currentTarget,T=M.getBoundingClientRect(),H=T.left+T.width/2,te=T.top+T.height/2,I=(N.clientX-H)/(T.width/2),q=-((N.clientY-te)/(T.height/2))*8,re=I*8;M.style.transform=`perspective(800px) rotateX(${q}deg) rotateY(${re}deg) translateZ(6px)`,M.style.transition="transform 0.08s ease",S[C]=M}function d(N){const C=S[N];C&&(C.style.transform="perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)",C.style.transition="transform 0.45s cubic-bezier(0.16,1,0.3,1)")}let y=null,g=0;function b(){const N=g;p.value&&(p.value.style.transform=`translateY(${N*.28}px)`),_.value&&(_.value.style.transform=`translateY(${N*.14}px)`),y=null}function P(){g=window.scrollY,y||(y=requestAnimationFrame(b))}let R=null;function w(){const N=document.querySelectorAll(".reveal-section");R=new IntersectionObserver(C=>{C.forEach(M=>{if(!M.isIntersecting)return;M.target.querySelectorAll(".reveal-child").forEach((H,te)=>{const I=H.style.getPropertyValue("--reveal-delay")||`${te*.1}s`;H.style.transitionDelay=I,H.classList.add("revealed")}),R.unobserve(M.target)})},{threshold:.08,rootMargin:"0px 0px -60px 0px"}),N.forEach(C=>R.observe(C))}return Fr(()=>{window.addEventListener("scroll",P,{passive:!0}),w()}),Br(()=>{window.removeEventListener("scroll",P),y&&cancelAnimationFrame(y),R&&R.disconnect()}),(N,C)=>{const M=No("RouterLink");return Oe(),ze("div",{ref_key:"rootEl",ref:f,class:"home"},[z("section",{class:"home-hero",ref_key:"heroEl",ref:h},[z("div",{class:"hero-parallax-layer hero-parallax-layer--far",ref_key:"parallaxFar",ref:p},null,512),z("div",{class:"hero-parallax-layer hero-parallax-layer--mid",ref_key:"parallaxMid",ref:_},null,512),z("div",xE,[z("div",ME,[z("div",SE,[z("div",yE,[it(Xf,{icon:"code",label:"Full-stack developer",color:"var(--lime)"}),it(Xf,{icon:"briefcase",label:"Product-minded builder",color:"var(--yellow)"})]),C[15]||(C[15]=z("p",{class:"hero-kicker"},"Prabath Sai",-1)),C[16]||(C[16]=z("h1",{class:"hero-title"}," Building polished product experiences for the web. ",-1)),C[17]||(C[17]=z("p",{class:"hero-lede"}," Full-stack developer working across React, Vue, Java, and Spring Boot. I focus on clear interfaces, dependable systems, and product details that make software easier to use and maintain. ",-1)),z("div",EE,[it(M,{to:"/projects",class:"btn-yellow"},{default:ni(()=>[...C[12]||(C[12]=[Un("View Projects",-1)])]),_:1}),C[14]||(C[14]=z("a",{class:"btn-outline",href:"/Prabath-Sai-Resume.txt",download:""},"Download Resume",-1)),it(M,{to:{path:"/",hash:"#contact"},class:"btn-ghost"},{default:ni(()=>[...C[13]||(C[13]=[Un("Contact Me",-1)])]),_:1})])]),z("aside",bE,[z("div",{class:"dash-card dash-card--main tilt-card",ref:"tiltCard1",onMousemove:C[0]||(C[0]=T=>m(T,"tilt1")),onMouseleave:C[1]||(C[1]=T=>d("tilt1"))},[...C[18]||(C[18]=[td('<div class="dash-card-glow dash-card-glow--teal" data-v-4a3c0bf2></div><div class="dash-eyebrow" data-v-4a3c0bf2><span data-v-4a3c0bf2>Featured build</span><span class="dash-live" data-v-4a3c0bf2>Live</span></div><h2 data-v-4a3c0bf2>Momentum Habit Tracker</h2><p data-v-4a3c0bf2> A focused habit dashboard for daily check-ins, targets, and progress heatmaps across week, month, and year views. </p><div class="dash-screenshot" data-v-4a3c0bf2><img src="'+Wf+'" alt="Momentum Habit Tracker dashboard preview" data-v-4a3c0bf2></div>',5)])],544),z("div",{class:"dash-card dash-card--metric tilt-card",onMousemove:C[2]||(C[2]=T=>m(T,"tilt2")),onMouseleave:C[3]||(C[3]=T=>d("tilt2"))},[...C[19]||(C[19]=[z("span",{class:"dash-label"},"Role",-1),z("strong",null,"Builder",-1),z("span",null,"Product + engineering",-1)])],32),z("div",{class:"dash-card dash-card--metric tilt-card",onMousemove:C[4]||(C[4]=T=>m(T,"tilt3")),onMouseleave:C[5]||(C[5]=T=>d("tilt3"))},[...C[20]||(C[20]=[z("span",{class:"dash-label"},"Stack",-1),z("strong",null,"React",-1),z("span",null,"Vite + Tailwind",-1)])],32),z("a",{href:"https://momentum.prabath.in",class:"dash-card dash-card--cta tilt-card",onMousemove:C[6]||(C[6]=T=>m(T,"tilt4")),onMouseleave:C[7]||(C[7]=T=>d("tilt4"))},[...C[21]||(C[21]=[z("span",null,"Open live app",-1),z("strong",null,"Launch Momentum ↗",-1)])],32)])])])],512),z("section",TE,[z("div",AE,[C[23]||(C[23]=z("div",{class:"reveal-child"},[z("div",{class:"section-chip"},"Profile"),z("h2",{class:"section-title"},"Developer craft, product judgment.")],-1)),z("div",wE,[C[22]||(C[22]=z("p",null," Prabath Sai builds web products that feel clear, fast, and maintainable. He connects UI polish with practical backend thinking so product ideas can move from concept to usable software. ",-1)),z("ul",RE,[(Oe(),ze(rt,null,Ct(e,T=>z("li",{key:T.value},[z("strong",null,Ze(T.value),1),z("span",null,Ze(T.label),1)])),64))])])])]),z("section",CE,[z("div",PE,[z("div",LE,[C[25]||(C[25]=z("div",null,[z("div",{class:"section-chip"},"Featured Project"),z("h2",{class:"section-title"},"Momentum Habit Tracker")],-1)),it(M,{to:"/projects",class:"section-action"},{default:ni(()=>[...C[24]||(C[24]=[Un("View all projects",-1)])]),_:1})]),z("article",{class:"feature-project-card reveal-child tilt-card",style:{"--reveal-delay":"0.1s"},onMousemove:C[8]||(C[8]=T=>m(T,"feat1")),onMouseleave:C[9]||(C[9]=T=>d("feat1"))},[z("div",DE,[C[26]||(C[26]=z("span",{class:"pill lime"},"Productivity · React",-1)),C[27]||(C[27]=z("h3",null,"Helping users keep daily progress visible and actionable.",-1)),C[28]||(C[28]=z("p",null," Momentum turns habits and tasks into a compact dashboard with daily marking, target tracking, and heatmaps that make consistency easy to scan. ",-1)),z("div",IE,[(Oe(),ze(rt,null,Ct(t,T=>z("span",{key:T},Ze(T),1)),64))]),C[29]||(C[29]=z("div",{class:"project-links"},[z("a",{href:"https://momentum.prabath.in",target:"_blank",rel:"noopener"},"Live demo ↗"),z("a",{href:"https://github.com/prabath-23",target:"_blank",rel:"noopener"},"GitHub ↗")],-1))]),C[30]||(C[30]=z("div",{class:"feature-project-media"},[z("img",{src:Wf,alt:"Momentum Habit Tracker dashboard preview"})],-1))],32)])]),z("section",UE,[z("div",NE,[C[38]||(C[38]=z("div",{class:"section-row section-row--project reveal-child"},[z("div",null,[z("div",{class:"section-chip section-chip--orange"},"Latest Product"),z("h2",{class:"section-title"},"NexPerf")]),z("span",{class:"badge-new"},"New ✦")],-1)),z("article",{class:"feature-project-card feature-project-card--nexperf reveal-child tilt-card",style:{"--reveal-delay":"0.1s"},onMousemove:C[10]||(C[10]=T=>m(T,"feat2")),onMouseleave:C[11]||(C[11]=T=>d("feat2"))},[z("div",OE,[C[31]||(C[31]=z("span",{class:"pill orange"},"DevTools · Spring Boot",-1)),C[32]||(C[32]=z("h3",null,"API performance intelligence for modern engineering teams.",-1)),C[33]||(C[33]=z("p",null," NexPerf is a full-stack observability platform that tracks real-time API latency, throughput, error rates, and Core Web Vitals — giving engineers instant visibility into performance regressions before they reach users. ",-1)),z("div",FE,[(Oe(),ze(rt,null,Ct(i,T=>z("span",{key:T},Ze(T),1)),64))]),z("div",BE,[(Oe(),ze(rt,null,Ct(r,T=>z("span",{key:T,class:"tag tag--orange"},Ze(T),1)),64))]),C[34]||(C[34]=z("div",{class:"project-links project-links--orange"},[z("a",{href:"https://github.com/prabath-23",target:"_blank",rel:"noopener"},"GitHub ↗")],-1))]),z("div",zE,[z("div",HE,[C[37]||(C[37]=z("div",{class:"nexperf-topbar"},[z("span",{class:"nexperf-brand"},"NexPerf"),z("div",{class:"nexperf-status"},[z("span",{class:"nexperf-dot"}),Un("Live")])],-1)),z("div",GE,[(Oe(),ze(rt,null,Ct(s,T=>z("div",{key:T.label,class:"nexperf-metric"},[z("span",kE,Ze(T.label),1),z("strong",{class:"nexperf-metric-value",style:Nt({color:T.color})},Ze(T.value),5),z("span",{class:On(["nexperf-metric-delta",T.up?"up":"down"])},Ze(T.up?"↑":"↓")+" "+Ze(T.delta),3)])),64))]),z("div",VE,[C[35]||(C[35]=z("div",{class:"nexperf-chart-label"},"API Latency p95 — last 24h",-1)),z("div",WE,[(Oe(),ze(rt,null,Ct(a,(T,H)=>z("div",{key:H,class:"nexperf-bar",style:Nt({height:T+"%","--bar-color":T>75?"var(--orange)":"var(--lime)"})},null,4)),64))])]),z("div",XE,[C[36]||(C[36]=z("div",{class:"nexperf-ep-label"},"Top endpoints",-1)),(Oe(),ze(rt,null,Ct(o,T=>z("div",{key:T.path,class:"nexperf-endpoint"},[z("span",{class:"nexperf-ep-method",style:Nt({color:T.color})},Ze(T.method),5),z("span",qE,Ze(T.path),1),z("span",jE,Ze(T.ms)+"ms",1)])),64))])])])],32)])]),z("section",YE,[z("div",$E,[C[40]||(C[40]=z("div",{class:"section-row reveal-child"},[z("div",null,[z("div",{class:"section-chip"},"Skills / Tech Stack"),z("h2",{class:"section-title"},"Tools used to ship practical products.")])],-1)),z("div",KE,[(Oe(),ze(rt,null,Ct(l,(T,H)=>z("div",{key:T.title,class:"stack-card tilt-card reveal-child",style:Nt({"--stack-color":T.color,"--reveal-delay":`${H*.1}s`}),onMousemove:te=>m(te,`stack${H}`),onMouseleave:te=>d(`stack${H}`)},[C[39]||(C[39]=z("div",{class:"stack-card-glow"},null,-1)),it(Ml,{name:T.icon,size:26,color:T.color},null,8,["name","color"]),z("h3",null,Ze(T.title),1),z("p",null,Ze(T.copy),1),z("div",JE,[(Oe(!0),ze(rt,null,Ct(T.tech,te=>(Oe(),ze("span",{key:te,class:"tag"},Ze(te),1))),128))])],44,ZE)),64))])])]),z("section",QE,[z("div",eb,[C[41]||(C[41]=z("div",{class:"section-row reveal-child"},[z("div",null,[z("div",{class:"section-chip"},"Work Highlights"),z("h2",{class:"section-title"},"How Prabath creates value.")])],-1)),z("div",tb,[(Oe(),ze(rt,null,Ct(u,(T,H)=>z("div",{key:T.title,class:"highlight-card tilt-card reveal-child",style:Nt({"--reveal-delay":`${H*.12}s`}),onMousemove:te=>m(te,`hl${H}`),onMouseleave:te=>d(`hl${H}`)},[z("span",null,Ze(T.kicker),1),z("h3",null,Ze(T.title),1),z("p",null,Ze(T.copy),1)],44,nb)),64))])])]),z("section",ib,[z("div",rb,[z("div",sb,[C[42]||(C[42]=z("div",null,[z("div",{class:"section-chip"},"Contact"),z("h2",{class:"contact-title"},"Have a product, role, or idea worth building?"),z("p",{class:"contact-copy"}," Reach out for frontend, Java backend, full-stack product work, or engineering conversations. I'm especially interested in teams that care about craft and momentum. "),z("a",{href:"mailto:hello@prabath.dev",class:"btn-yellow"},"Contact Me")],-1)),z("div",ob,[(Oe(),ze(rt,null,Ct(c,T=>z("a",{key:T.label,href:T.url,class:"contact-social-link","aria-label":`Open ${T.label}`},[z("div",lb,[it(Ml,{name:T.icon,size:18,color:T.color},null,8,["name","color"]),z("span",null,Ze(T.label),1)]),z("span",cb,Ze(T.handle)+" ↗",1)],8,ab)),64))])]),C[43]||(C[43]=z("div",{class:"site-footer"},[z("span",null,"© 2026 Prabath Sai"),z("div",null,[z("span",{class:"pill lime"},"Open to collaborate"),z("span",{class:"pill sky"},"Remote friendly")])],-1))])])],512)}}},fb=Vl(ub,[["__scopeId","data-v-4a3c0bf2"]]),hb={class:"page"},db={class:"page-header"},pb={class:"page-inner"},mb={class:"page-tools"},gb={class:"chips"},_b=["onClick"],vb={class:"page-body"},xb={class:"page-inner"},Mb={key:0,style:{textAlign:"center",padding:"80px 0",fontFamily:"var(--mono)",fontSize:"var(--text-xs)",color:"var(--text-muted)",letterSpacing:"0.15em"}},Sb={key:1,style:{textAlign:"center",padding:"80px 0",fontFamily:"var(--mono)",fontSize:"var(--text-sm)",color:"var(--text-muted)"}},yb={key:2,class:"cards-grid"},Eb={class:"project-kicker"},bb={class:"project-badges"},Tb={key:0,class:"badge featured"},Ab={key:1,class:"badge live"},wb={key:2,class:"badge new-badge"},Rb={style:{fontFamily:"var(--mono)",fontSize:"var(--text-xs)",color:"var(--text-muted)",letterSpacing:"0.12em"}},Cb={class:"project-title",style:{marginBottom:"14px",color:"var(--text)"}},Pb={class:"project-desc",style:{marginBottom:"22px"}},Lb={class:"project-detail-grid"},Db={class:"u-flex u-wrap u-gap-1 u-mb-7"},Ib={class:"project-links"},Ub=["href"],Nb=["href","target"],Ob={__name:"Projects",setup(n){const i=Ft([{id:"nexperf",title:"NexPerf",category:"DevTools · Spring Boot",description:"A full-stack API performance intelligence platform for monitoring, benchmarking, and optimizing backend services in real time.",problem:"Engineers lack visibility into API latency patterns and regression points without heavy infrastructure. NexPerf provides a lightweight performance dashboard that plugs into any Spring Boot service.",features:["Real-time API latency with p50 / p95 / p99 percentiles","Throughput and error rate monitoring dashboards","Core Web Vitals integration for frontend observability","Performance regression alerts with baseline comparison"],tech:["React","Java","Spring Boot","WebSockets","PostgreSQL","Redis"],year:"2026",featured:!0,githubUrl:"https://github.com/prabath-23",liveUrl:null,color:"#e17055"},{id:"momentum-habit-tracker",title:"Momentum Habit Tracker",category:"Productivity · React",description:"A habit and task dashboard designed to make daily consistency visible, measurable, and easy to maintain.",problem:"Habit tools often hide progress behind too many screens. Momentum keeps today’s action, target progress, and long-term consistency in one fast dashboard.",features:["Daily habit and task check-ins","Target tracking for measurable routines","Week, month, and year progress heatmaps","Responsive interface built for quick scanning"],tech:["React","Vite","Tailwind CSS"],year:"2026",featured:!0,githubUrl:"https://github.com/prabath-23",liveUrl:"https://momentum.prabath.in",liveTarget:"_self",color:"#00d4aa"}]),r=Ft(!1),s=Ft("all"),a=Ft(""),o=At(()=>{const u=i.value.map(c=>(c.category||"").split(" · ")[0].toLowerCase()).filter(Boolean);return["all",...Array.from(new Set(u))]}),l=At(()=>{const u=(a.value||"").toLowerCase().trim(),c=s.value==="all"?i.value:i.value.filter(f=>(f.category||"").toLowerCase().includes(s.value));return u?c.filter(f=>[f.title,f.category,f.description,Array.isArray(f.tech)?f.tech.join(" "):"",f.year].filter(Boolean).join(" ").toLowerCase().includes(u)):c});return(u,c)=>(Oe(),ze("div",hb,[z("div",db,[z("div",pb,[c[1]||(c[1]=td('<div style="width:44px;height:1px;background:var(--teal);margin-bottom:16px;"></div><p class="section-label">Portfolio</p><div class="page-title-row"><div><h1 class="section-title">Projects</h1><p class="page-subtitle">Selected product work from Prabath Sai, focused on clear user flows, practical engineering, and polished delivery.</p></div></div>',3)),z("div",mb,[Kp(z("input",{"onUpdate:modelValue":c[0]||(c[0]=f=>a.value=f),class:"input",placeholder:"Search projects…",style:{maxWidth:"320px"}},null,512),[[Pg,a.value,void 0,{trim:!0}]]),z("div",gb,[(Oe(!0),ze(rt,null,Ct(o.value,f=>(Oe(),ze("button",{key:f,class:On(["chip",{active:s.value===f}]),onClick:h=>s.value=f},Ze(f),11,_b))),128))])])])]),z("div",vb,[z("div",xb,[r.value?(Oe(),ze("div",Mb," Loading projects... ")):l.value.length===0?(Oe(),ze("div",Sb,' No projects in "'+Ze(s.value)+'" yet. ',1)):(Oe(),ze("div",yb,[(Oe(!0),ze(rt,null,Ct(l.value,(f,h)=>(Oe(),ze("article",{key:f.id||f.title,class:On(["card project-card",{"project-card--spotlight":f.id==="momentum-habit-tracker","project-card--nexperf":f.id==="nexperf"}]),style:Nt({"--accent":f.color,animation:`riseUp 0.7s cubic-bezier(0.16,1,0.3,1) ${h*.1}s both`})},[z("div",Eb,[z("div",bb,[z("span",{class:"badge",style:Nt({borderColor:"rgba(255,255,255,0.10)",color:f.color})},Ze(f.category),5),f.featured?(Oe(),ze("span",Tb,"Featured")):vi("",!0),f.id==="momentum-habit-tracker"?(Oe(),ze("span",Ab,"Live")):vi("",!0),f.id==="nexperf"?(Oe(),ze("span",wb,"New ✦")):vi("",!0)]),z("span",Rb,Ze(f.year),1)]),z("h2",Cb,Ze(f.title),1),z("p",Pb,Ze(f.description),1),z("div",Lb,[z("div",null,[c[2]||(c[2]=z("span",null,"Problem solved",-1)),z("p",null,Ze(f.problem),1)]),z("div",null,[c[3]||(c[3]=z("span",null,"Key features",-1)),z("ul",null,[(Oe(!0),ze(rt,null,Ct(f.features,p=>(Oe(),ze("li",{key:p},Ze(p),1))),128))])])]),z("div",Db,[(Oe(!0),ze(rt,null,Ct(f.tech,p=>(Oe(),ze("span",{key:p,class:"tag"},Ze(p),1))),128))]),z("div",Ib,[f.githubUrl&&f.githubUrl!=="#"?(Oe(),ze("a",{key:0,href:f.githubUrl,target:"_blank",rel:"noopener noreferrer"}," GitHub ↗ ",8,Ub)):vi("",!0),f.liveUrl&&f.liveUrl!=="#"?(Oe(),ze("a",{key:1,href:f.liveUrl,target:f.liveTarget||"_blank",rel:"noopener noreferrer"}," Live Demo ↗ ",8,Nb)):vi("",!0)])],6))),128))]))])])]))}},Fb={},Bb={style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"24px",textAlign:"center",padding:"0 24px",position:"relative",zIndex:10}};function zb(n,e){const t=No("RouterLink");return Oe(),ze("div",Bb,[e[1]||(e[1]=z("div",{style:{fontSize:"var(--text-7xl)"}},"🤔",-1)),e[2]||(e[2]=z("div",{class:"section-chip"},"404 — Not found",-1)),e[3]||(e[3]=z("h1",{style:{fontFamily:"var(--display)",fontSize:"var(--text-5xl)",fontWeight:800,letterSpacing:"-0.03em"}},[Un(" Lost in "),z("span",{class:"grad-yellow"},"cyberspace")],-1)),it(t,{to:"/",class:"btn-yellow"},{default:ni(()=>[...e[0]||(e[0]=[Un("Take me home 🏠",-1)])]),_:1})])}const Hb=Vl(Fb,[["render",zb]]),Gb=G_({history:x_(),routes:[{path:"/",component:fb},{path:"/projects",component:Ob},{path:"/:pathMatch(.*)*",component:Hb}],scrollBehavior(n,e,t){return t||(n.hash?{el:n.hash,top:88}:{top:0})}}),tp=Ig(mE);tp.use(Gb);tp.mount("#app");
