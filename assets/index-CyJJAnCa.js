const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-DoRwN9ZN.js","assets/react-vendor-BZdliVqA.js","assets/HomePage-CF332L6t.css","assets/FindPetPage-3si_J49H.js","assets/PetCard-DjjBdgYK.js","assets/Button-CtaD2ed5.js","assets/Button-RocT_6tk.css","assets/PetCard--jFTHO0m.css","assets/index-B9iVpkjT.js","assets/Modal-_oeL_hbZ.js","assets/Modal-BwEYHK1L.css","assets/TypeSelect-BVrf-25S.js","assets/hoist-non-react-statics.cjs-2Q9SGLSQ.js","assets/Pagination-D8qv1S96.js","assets/Pagination-DHEnBd_M.css","assets/FindPetPage-DlmK-Lxw.css","assets/NewsPage-DioFokih.js","assets/NewsPage-CoSWXhUq.css","assets/RegistrationPage-8AyNtFCX.js","assets/formik.esm-BnD3OTKN.js","assets/index.esm-Be4xhWZr.js","assets/RegistrationPage-BRlV410G.css","assets/FormStyles-Drf0VMZL.css","assets/LoginPage-DgBOg-OS.js","assets/LoginPage-BBybFpJ-.css","assets/ProfilePage-DoTPbKiS.js","assets/UploadInput-CUb9rNYY.js","assets/UploadInput-C4rHBcxb.css","assets/ProfilePage-DjJm69Vm.css","assets/OurFriendsPage-C9IaaroZ.js","assets/OurFriendsPage-DDwwkCDk.css","assets/FavoritePetsPage-BLTnbENa.js","assets/AddPetPage-xKd8T0q2.js","assets/AddPetPage-Df7WEMlb.css"])))=>i.map(i=>d[i]);
var iy=Object.defineProperty;var sy=(n,e,t)=>e in n?iy(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Oa=(n,e,t)=>sy(n,typeof e!="symbol"?e+"":e,t);import{r as j,a as oy,R as cc,b as ay,e as Ot,g as qd,c as cy}from"./react-vendor-BZdliVqA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Hd={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly=j,uy=Symbol.for("react.element"),hy=Symbol.for("react.fragment"),dy=Object.prototype.hasOwnProperty,fy=ly.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,py={key:!0,ref:!0,__self:!0,__source:!0};function Wd(n,e,t){var r,i={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)dy.call(e,r)&&!py.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:uy,type:n,key:s,ref:o,props:i,_owner:fy.current}}zo.Fragment=hy;zo.jsx=Wd;zo.jsxs=Wd;Hd.exports=zo;var $=Hd.exports,Kd,Mu=oy;Kd=Mu.createRoot,Mu.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ve(){return Ve=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ve.apply(this,arguments)}var We;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(We||(We={}));const Vu="popstate";function my(n){n===void 0&&(n={});function e(r,i){let{pathname:s,search:o,hash:c}=r.location;return Xi("",{pathname:s,search:o,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:wr(i)}return yy(e,t,null,n)}function le(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Zr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gy(){return Math.random().toString(36).substr(2,8)}function Fu(n,e){return{usr:n.state,key:n.key,idx:e}}function Xi(n,e,t,r){return t===void 0&&(t=null),Ve({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?tr(e):e,{state:t,key:e&&e.key||r||gy()})}function wr(n){let{pathname:e="/",search:t="",hash:r=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function tr(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let r=n.indexOf("?");r>=0&&(e.search=n.substr(r),n=n.substr(0,r)),n&&(e.pathname=n)}return e}function yy(n,e,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,c=We.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(Ve({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function f(){c=We.Pop;let C=d(),F=C==null?null:C-u;u=C,l&&l({action:c,location:R.location,delta:F})}function m(C,F){c=We.Push;let M=Xi(R.location,C,F);u=d()+1;let L=Fu(M,u),V=R.createHref(M);try{o.pushState(L,"",V)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;i.location.assign(V)}s&&l&&l({action:c,location:R.location,delta:1})}function E(C,F){c=We.Replace;let M=Xi(R.location,C,F);u=d();let L=Fu(M,u),V=R.createHref(M);o.replaceState(L,"",V),s&&l&&l({action:c,location:R.location,delta:0})}function w(C){let F=i.location.origin!=="null"?i.location.origin:i.location.href,M=typeof C=="string"?C:wr(C);return M=M.replace(/ $/,"%20"),le(F,"No window.location.(origin|href) available to create URL for href: "+M),new URL(M,F)}let R={get action(){return c},get location(){return n(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Vu,f),l=C,()=>{i.removeEventListener(Vu,f),l=null}},createHref(C){return e(i,C)},createURL:w,encodeLocation(C){let F=w(C);return{pathname:F.pathname,search:F.search,hash:F.hash}},push:m,replace:E,go(C){return o.go(C)}};return R}var Pe;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Pe||(Pe={}));const _y=new Set(["lazy","caseSensitive","path","id","index","children"]);function vy(n){return n.index===!0}function Zi(n,e,t,r){return t===void 0&&(t=[]),r===void 0&&(r={}),n.map((i,s)=>{let o=[...t,String(s)],c=typeof i.id=="string"?i.id:o.join("-");if(le(i.index!==!0||!i.children,"Cannot specify children on an index route"),le(!r[c],'Found a route id collision on id "'+c+`".  Route id's must be globally unique within Data Router usages`),vy(i)){let l=Ve({},i,e(i),{id:c});return r[c]=l,l}else{let l=Ve({},i,e(i),{id:c,children:void 0});return r[c]=l,i.children&&(l.children=Zi(i.children,e,o,r)),l}})}function pr(n,e,t){return t===void 0&&(t="/"),Zs(n,e,t,!1)}function Zs(n,e,t,r){let i=typeof e=="string"?tr(e):e,s=Tn(i.pathname||"/",t);if(s==null)return null;let o=Gd(n);Ey(o);let c=null;for(let l=0;c==null&&l<o.length;++l){let u=Dy(s);c=ky(o[l],u,r)}return c}function wy(n,e){let{route:t,pathname:r,params:i}=n;return{id:t.id,pathname:r,params:i,data:e[t.id],handle:t.handle}}function Gd(n,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(s,o,c)=>{let l={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(le(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=vn([r,l.relativePath]),d=t.concat(l);s.children&&s.children.length>0&&(le(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gd(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Py(u,s.index),routesMeta:d})};return n.forEach((s,o)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,o);else for(let l of Qd(s.path))i(s,o,l)}),e}function Qd(n){let e=n.split("/");if(e.length===0)return[];let[t,...r]=e,i=t.endsWith("?"),s=t.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Qd(r.join("/")),c=[];return c.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&c.push(...o),c.map(l=>n.startsWith("/")&&l===""?"/":l)}function Ey(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:Cy(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Ty=/^:[\w-]+$/,by=3,Iy=2,Sy=1,Ry=10,Ay=-2,Uu=n=>n==="*";function Py(n,e){let t=n.split("/"),r=t.length;return t.some(Uu)&&(r+=Ay),e&&(r+=Iy),t.filter(i=>!Uu(i)).reduce((i,s)=>i+(Ty.test(s)?by:s===""?Sy:Ry),r)}function Cy(n,e){return n.length===e.length&&n.slice(0,-1).every((r,i)=>r===e[i])?n[n.length-1]-e[e.length-1]:0}function ky(n,e,t){t===void 0&&(t=!1);let{routesMeta:r}=n,i={},s="/",o=[];for(let c=0;c<r.length;++c){let l=r[c],u=c===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",f=go({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),m=l.route;if(!f&&u&&t&&!r[r.length-1].route.index&&(f=go({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:vn([s,f.pathname]),pathnameBase:Ly(vn([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=vn([s,f.pathnameBase]))}return o}function go(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,r]=Oy(n.path,n.caseSensitive,n.end),i=e.match(t);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:m,isOptional:E}=d;if(m==="*"){let R=c[f]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const w=c[f];return E&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:n}}function Oy(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Zr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let r=[],i="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(r.push({paramName:"*"}),i+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":n!==""&&n!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Dy(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Zr(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Tn(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=n.charAt(t);return r&&r!=="/"?null:n.slice(t)||"/"}function xy(n,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:i=""}=typeof n=="string"?tr(n):n;return{pathname:t?t.startsWith("/")?t:Ny(t,e):e,search:My(r),hash:Vy(i)}}function Ny(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function Da(n,e,t,r){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jd(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function $o(n,e){let t=Jd(n);return e?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function qo(n,e,t,r){r===void 0&&(r=!1);let i;typeof n=="string"?i=tr(n):(i=Ve({},n),le(!i.pathname||!i.pathname.includes("?"),Da("?","pathname","search",i)),le(!i.pathname||!i.pathname.includes("#"),Da("#","pathname","hash",i)),le(!i.search||!i.search.includes("#"),Da("#","search","hash",i)));let s=n===""||i.pathname==="",o=s?"/":i.pathname,c;if(o==null)c=t;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}c=f>=0?e[f]:"/"}let l=xy(i,c),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const vn=n=>n.join("/").replace(/\/\/+/g,"/"),Ly=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),My=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Vy=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;class Xc{constructor(e,t,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=t||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ho(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Yd=["post","put","patch","delete"],Fy=new Set(Yd),Uy=["get",...Yd],jy=new Set(Uy),By=new Set([301,302,303,307,308]),zy=new Set([307,308]),xa={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},$y={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Li={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Zc=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qy=n=>({hasErrorBoundary:!!n.hasErrorBoundary}),Xd="remix-router-transitions";function Hy(n){const e=n.window?n.window:typeof window<"u"?window:void 0,t=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!t;le(n.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(n.mapRouteProperties)i=n.mapRouteProperties;else if(n.detectErrorBoundary){let A=n.detectErrorBoundary;i=k=>({hasErrorBoundary:A(k)})}else i=qy;let s={},o=Zi(n.routes,i,void 0,s),c,l=n.basename||"/",u=n.unstable_dataStrategy||Jy,d=n.unstable_patchRoutesOnMiss,f=Ve({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},n.future),m=null,E=new Set,w=null,R=null,C=null,F=n.hydrationData!=null,M=pr(o,n.history.location,l),L=null;if(M==null&&!d){let A=Tt(404,{pathname:n.history.location.pathname}),{matches:k,route:D}=Qu(o);M=k,L={[D.id]:A}}M&&d&&!n.hydrationData&&un(M,o,n.history.location.pathname).active&&(M=null);let V;if(!M)V=!1,M=[];else if(M.some(A=>A.route.lazy))V=!1;else if(!M.some(A=>A.route.loader))V=!0;else if(f.v7_partialHydration){let A=n.hydrationData?n.hydrationData.loaderData:null,k=n.hydrationData?n.hydrationData.errors:null,D=U=>U.route.loader?typeof U.route.loader=="function"&&U.route.loader.hydrate===!0?!1:A&&A[U.route.id]!==void 0||k&&k[U.route.id]!==void 0:!0;if(k){let U=M.findIndex(K=>k[K.route.id]!==void 0);V=M.slice(0,U+1).every(D)}else V=M.every(D)}else V=n.hydrationData!=null;let G,P={historyAction:n.history.action,location:n.history.location,matches:M,initialized:V,navigation:xa,restoreScrollPosition:n.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:n.hydrationData&&n.hydrationData.loaderData||{},actionData:n.hydrationData&&n.hydrationData.actionData||null,errors:n.hydrationData&&n.hydrationData.errors||L,fetchers:new Map,blockers:new Map},S=We.Pop,g=!1,_,I=!1,T=new Map,b=null,v=!1,W=!1,Ee=[],Ze=[],de=new Map,et=0,nt=-1,bt=new Map,vt=new Set,Be=new Map,_e=new Map,xe=new Set,Ne=new Map,$e=new Map,Le=new Map,ke=!1;function rt(){if(m=n.history.listen(A=>{let{action:k,location:D,delta:U}=A;if(ke){ke=!1;return}Zr($e.size===0||U!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let K=bi({currentLocation:P.location,nextLocation:D,historyAction:k});if(K&&U!=null){ke=!0,n.history.go(U*-1),ar(K,{state:"blocked",location:D,proceed(){ar(K,{state:"proceeding",proceed:void 0,reset:void 0,location:D}),n.history.go(U)},reset(){let J=new Map(P.blockers);J.set(K,Li),Ie({blockers:J})}});return}return Ge(k,D)}),t){l_(e,T);let A=()=>u_(e,T);e.addEventListener("pagehide",A),b=()=>e.removeEventListener("pagehide",A)}return P.initialized||Ge(We.Pop,P.location,{initialHydration:!0}),G}function wt(){m&&m(),b&&b(),E.clear(),_&&_.abort(),P.fetchers.forEach((A,k)=>Lr(k)),P.blockers.forEach((A,k)=>Vr(k))}function Et(A){return E.add(A),()=>E.delete(A)}function Ie(A,k){k===void 0&&(k={}),P=Ve({},P,A);let D=[],U=[];f.v7_fetcherPersist&&P.fetchers.forEach((K,J)=>{K.state==="idle"&&(xe.has(J)?U.push(J):D.push(J))}),[...E].forEach(K=>K(P,{deletedFetchers:U,unstable_viewTransitionOpts:k.viewTransitionOpts,unstable_flushSync:k.flushSync===!0})),f.v7_fetcherPersist&&(D.forEach(K=>P.fetchers.delete(K)),U.forEach(K=>Lr(K)))}function me(A,k,D){var U,K;let{flushSync:J}=D===void 0?{}:D,te=P.actionData!=null&&P.navigation.formMethod!=null&&qt(P.navigation.formMethod)&&P.navigation.state==="loading"&&((U=A.state)==null?void 0:U._isRedirect)!==!0,q;k.actionData?Object.keys(k.actionData).length>0?q=k.actionData:q=null:te?q=P.actionData:q=null;let ie=k.loaderData?Ku(P.loaderData,k.loaderData,k.matches||[],k.errors):P.loaderData,Y=P.blockers;Y.size>0&&(Y=new Map(Y),Y.forEach((ve,be)=>Y.set(be,Li)));let X=g===!0||P.navigation.formMethod!=null&&qt(P.navigation.formMethod)&&((K=A.state)==null?void 0:K._isRedirect)!==!0;c&&(o=c,c=void 0),v||S===We.Pop||(S===We.Push?n.history.push(A,A.state):S===We.Replace&&n.history.replace(A,A.state));let ue;if(S===We.Pop){let ve=T.get(P.location.pathname);ve&&ve.has(A.pathname)?ue={currentLocation:P.location,nextLocation:A}:T.has(A.pathname)&&(ue={currentLocation:A,nextLocation:P.location})}else if(I){let ve=T.get(P.location.pathname);ve?ve.add(A.pathname):(ve=new Set([A.pathname]),T.set(P.location.pathname,ve)),ue={currentLocation:P.location,nextLocation:A}}Ie(Ve({},k,{actionData:q,loaderData:ie,historyAction:S,location:A,initialized:!0,navigation:xa,revalidation:"idle",restoreScrollPosition:Si(A,k.matches||P.matches),preventScrollReset:X,blockers:Y}),{viewTransitionOpts:ue,flushSync:J===!0}),S=We.Pop,g=!1,I=!1,v=!1,W=!1,Ee=[],Ze=[]}async function fe(A,k){if(typeof A=="number"){n.history.go(A);return}let D=lc(P.location,P.matches,l,f.v7_prependBasename,A,f.v7_relativeSplatPath,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:U,submission:K,error:J}=ju(f.v7_normalizeFormMethod,!1,D,k),te=P.location,q=Xi(P.location,U,k&&k.state);q=Ve({},q,n.history.encodeLocation(q));let ie=k&&k.replace!=null?k.replace:void 0,Y=We.Push;ie===!0?Y=We.Replace:ie===!1||K!=null&&qt(K.formMethod)&&K.formAction===P.location.pathname+P.location.search&&(Y=We.Replace);let X=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,ue=(k&&k.unstable_flushSync)===!0,ve=bi({currentLocation:te,nextLocation:q,historyAction:Y});if(ve){ar(ve,{state:"blocked",location:q,proceed(){ar(ve,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),fe(A,k)},reset(){let be=new Map(P.blockers);be.set(ve,Li),Ie({blockers:be})}});return}return await Ge(Y,q,{submission:K,pendingError:J,preventScrollReset:X,replace:k&&k.replace,enableViewTransition:k&&k.unstable_viewTransition,flushSync:ue})}function qe(){if(Je(),Ie({revalidation:"loading"}),P.navigation.state!=="submitting"){if(P.navigation.state==="idle"){Ge(P.historyAction,P.location,{startUninterruptedRevalidation:!0});return}Ge(S||P.historyAction,P.navigation.location,{overrideNavigation:P.navigation})}}async function Ge(A,k,D){_&&_.abort(),_=null,S=A,v=(D&&D.startUninterruptedRevalidation)===!0,Fr(P.location,P.matches),g=(D&&D.preventScrollReset)===!0,I=(D&&D.enableViewTransition)===!0;let U=c||o,K=D&&D.overrideNavigation,J=pr(U,k,l),te=(D&&D.flushSync)===!0,q=un(J,U,k.pathname);if(q.active&&q.matches&&(J=q.matches),!J){let{error:ge,notFoundMatches:ze,route:Me}=cn(k.pathname);me(k,{matches:ze,loaderData:{},errors:{[Me.id]:ge}},{flushSync:te});return}if(P.initialized&&!W&&n_(P.location,k)&&!(D&&D.submission&&qt(D.submission.formMethod))){me(k,{matches:J},{flushSync:te});return}_=new AbortController;let ie=$r(n.history,k,_.signal,D&&D.submission),Y;if(D&&D.pendingError)Y=[Kr(J).route.id,{type:Pe.error,error:D.pendingError}];else if(D&&D.submission&&qt(D.submission.formMethod)){let ge=await Nr(ie,k,D.submission,J,q.active,{replace:D.replace,flushSync:te});if(ge.shortCircuited)return;if(ge.pendingActionResult){let[ze,Me]=ge.pendingActionResult;if(Dt(Me)&&Ho(Me.error)&&Me.error.status===404){_=null,me(k,{matches:ge.matches,loaderData:{},errors:{[ze]:Me.error}});return}}J=ge.matches||J,Y=ge.pendingActionResult,K=Na(k,D.submission),te=!1,q.active=!1,ie=$r(n.history,ie.url,ie.signal)}let{shortCircuited:X,matches:ue,loaderData:ve,errors:be}=await ba(ie,k,J,q.active,K,D&&D.submission,D&&D.fetcherSubmission,D&&D.replace,D&&D.initialHydration===!0,te,Y);X||(_=null,me(k,Ve({matches:ue||J},Gu(Y),{loaderData:ve,errors:be})))}async function Nr(A,k,D,U,K,J){J===void 0&&(J={}),Je();let te=a_(k,D);if(Ie({navigation:te},{flushSync:J.flushSync===!0}),K){let Y=await lr(U,k.pathname,A.signal);if(Y.type==="aborted")return{shortCircuited:!0};if(Y.type==="error"){let{boundaryId:X,error:ue}=xn(k.pathname,Y);return{matches:Y.partialMatches,pendingActionResult:[X,{type:Pe.error,error:ue}]}}else if(Y.matches)U=Y.matches;else{let{notFoundMatches:X,error:ue,route:ve}=cn(k.pathname);return{matches:X,pendingActionResult:[ve.id,{type:Pe.error,error:ue}]}}}let q,ie=ji(U,k);if(!ie.route.action&&!ie.route.lazy)q={type:Pe.error,error:Tt(405,{method:A.method,pathname:k.pathname,routeId:ie.route.id})};else if(q=(await Dn("action",A,[ie],U))[0],A.signal.aborted)return{shortCircuited:!0};if(gr(q)){let Y;return J&&J.replace!=null?Y=J.replace:Y=qu(q.response.headers.get("Location"),new URL(A.url),l)===P.location.pathname+P.location.search,await an(A,q,{submission:D,replace:Y}),{shortCircuited:!0}}if(mr(q))throw Tt(400,{type:"defer-action"});if(Dt(q)){let Y=Kr(U,ie.route.id);return(J&&J.replace)!==!0&&(S=We.Push),{matches:U,pendingActionResult:[Y.route.id,q]}}return{matches:U,pendingActionResult:[ie.route.id,q]}}async function ba(A,k,D,U,K,J,te,q,ie,Y,X){let ue=K||Na(k,J),ve=J||te||Xu(ue),be=!v&&(!f.v7_partialHydration||!ie);if(U){if(be){let Oe=_i(X);Ie(Ve({navigation:ue},Oe!==void 0?{actionData:Oe}:{}),{flushSync:Y})}let oe=await lr(D,k.pathname,A.signal);if(oe.type==="aborted")return{shortCircuited:!0};if(oe.type==="error"){let{boundaryId:Oe,error:dt}=xn(k.pathname,oe);return{matches:oe.partialMatches,loaderData:{},errors:{[Oe]:dt}}}else if(oe.matches)D=oe.matches;else{let{error:Oe,notFoundMatches:dt,route:Se}=cn(k.pathname);return{matches:dt,loaderData:{},errors:{[Se.id]:Oe}}}}let ge=c||o,[ze,Me]=Bu(n.history,P,D,ve,k,f.v7_partialHydration&&ie===!0,f.v7_skipActionErrorRevalidation,W,Ee,Ze,xe,Be,vt,ge,l,X);if(cr(oe=>!(D&&D.some(Oe=>Oe.route.id===oe))||ze&&ze.some(Oe=>Oe.route.id===oe)),nt=++et,ze.length===0&&Me.length===0){let oe=Mr();return me(k,Ve({matches:D,loaderData:{},errors:X&&Dt(X[1])?{[X[0]]:X[1].error}:null},Gu(X),oe?{fetchers:new Map(P.fetchers)}:{}),{flushSync:Y}),{shortCircuited:!0}}if(be){let oe={};if(!U){oe.navigation=ue;let Oe=_i(X);Oe!==void 0&&(oe.actionData=Oe)}Me.length>0&&(oe.fetchers=vi(Me)),Ie(oe,{flushSync:Y})}Me.forEach(oe=>{de.has(oe.key)&&Bt(oe.key),oe.controller&&de.set(oe.key,oe.controller)});let Nn=()=>Me.forEach(oe=>Bt(oe.key));_&&_.signal.addEventListener("abort",Nn);let{loaderResults:Jt,fetcherResults:zt}=await Qe(P.matches,D,ze,Me,A);if(A.signal.aborted)return{shortCircuited:!0};_&&_.signal.removeEventListener("abort",Nn),Me.forEach(oe=>de.delete(oe.key));let hn=Ju([...Jt,...zt]);if(hn){if(hn.idx>=ze.length){let oe=Me[hn.idx-ze.length].key;vt.add(oe)}return await an(A,hn.result,{replace:q}),{shortCircuited:!0}}let{loaderData:Yt,errors:ht}=Wu(P,D,ze,Jt,X,Me,zt,Ne);Ne.forEach((oe,Oe)=>{oe.subscribe(dt=>{(dt||oe.done)&&Ne.delete(Oe)})}),f.v7_partialHydration&&ie&&P.errors&&Object.entries(P.errors).filter(oe=>{let[Oe]=oe;return!ze.some(dt=>dt.route.id===Oe)}).forEach(oe=>{let[Oe,dt]=oe;ht=Object.assign(ht||{},{[Oe]:dt})});let Ut=Mr(),Ln=Os(nt),Ur=Ut||Ln||Me.length>0;return Ve({matches:D,loaderData:Yt,errors:ht},Ur?{fetchers:new Map(P.fetchers)}:{})}function _i(A){if(A&&!Dt(A[1]))return{[A[0]]:A[1].data};if(P.actionData)return Object.keys(P.actionData).length===0?null:P.actionData}function vi(A){return A.forEach(k=>{let D=P.fetchers.get(k.key),U=Mi(void 0,D?D.data:void 0);P.fetchers.set(k.key,U)}),new Map(P.fetchers)}function ks(A,k,D,U){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");de.has(A)&&Bt(A);let K=(U&&U.unstable_flushSync)===!0,J=c||o,te=lc(P.location,P.matches,l,f.v7_prependBasename,D,f.v7_relativeSplatPath,k,U==null?void 0:U.relative),q=pr(J,te,l),ie=un(q,J,te);if(ie.active&&ie.matches&&(q=ie.matches),!q){Ft(A,k,Tt(404,{pathname:te}),{flushSync:K});return}let{path:Y,submission:X,error:ue}=ju(f.v7_normalizeFormMethod,!0,te,U);if(ue){Ft(A,k,ue,{flushSync:K});return}let ve=ji(q,Y);if(g=(U&&U.preventScrollReset)===!0,X&&qt(X.formMethod)){Ia(A,k,Y,ve,q,ie.active,K,X);return}Be.set(A,{routeId:k,path:Y}),wi(A,k,Y,ve,q,ie.active,K,X)}async function Ia(A,k,D,U,K,J,te,q){Je(),Be.delete(A);function ie(Se){if(!Se.route.action&&!Se.route.lazy){let Ct=Tt(405,{method:q.formMethod,pathname:D,routeId:k});return Ft(A,k,Ct,{flushSync:te}),!0}return!1}if(!J&&ie(U))return;let Y=P.fetchers.get(A);Pt(A,c_(q,Y),{flushSync:te});let X=new AbortController,ue=$r(n.history,D,X.signal,q);if(J){let Se=await lr(K,D,ue.signal);if(Se.type==="aborted")return;if(Se.type==="error"){let{error:Ct}=xn(D,Se);Ft(A,k,Ct,{flushSync:te});return}else if(Se.matches){if(K=Se.matches,U=ji(K,D),ie(U))return}else{Ft(A,k,Tt(404,{pathname:D}),{flushSync:te});return}}de.set(A,X);let ve=et,ge=(await Dn("action",ue,[U],K))[0];if(ue.signal.aborted){de.get(A)===X&&de.delete(A);return}if(f.v7_fetcherPersist&&xe.has(A)){if(gr(ge)||Dt(ge)){Pt(A,jn(void 0));return}}else{if(gr(ge))if(de.delete(A),nt>ve){Pt(A,jn(void 0));return}else return vt.add(A),Pt(A,Mi(q)),an(ue,ge,{fetcherSubmission:q});if(Dt(ge)){Ft(A,k,ge.error);return}}if(mr(ge))throw Tt(400,{type:"defer-action"});let ze=P.navigation.location||P.location,Me=$r(n.history,ze,X.signal),Nn=c||o,Jt=P.navigation.state!=="idle"?pr(Nn,P.navigation.location,l):P.matches;le(Jt,"Didn't find any matches after fetcher action");let zt=++et;bt.set(A,zt);let hn=Mi(q,ge.data);P.fetchers.set(A,hn);let[Yt,ht]=Bu(n.history,P,Jt,q,ze,!1,f.v7_skipActionErrorRevalidation,W,Ee,Ze,xe,Be,vt,Nn,l,[U.route.id,ge]);ht.filter(Se=>Se.key!==A).forEach(Se=>{let Ct=Se.key,Ri=P.fetchers.get(Ct),xs=Mi(void 0,Ri?Ri.data:void 0);P.fetchers.set(Ct,xs),de.has(Ct)&&Bt(Ct),Se.controller&&de.set(Ct,Se.controller)}),Ie({fetchers:new Map(P.fetchers)});let Ut=()=>ht.forEach(Se=>Bt(Se.key));X.signal.addEventListener("abort",Ut);let{loaderResults:Ln,fetcherResults:Ur}=await Qe(P.matches,Jt,Yt,ht,Me);if(X.signal.aborted)return;X.signal.removeEventListener("abort",Ut),bt.delete(A),de.delete(A),ht.forEach(Se=>de.delete(Se.key));let oe=Ju([...Ln,...Ur]);if(oe){if(oe.idx>=Yt.length){let Se=ht[oe.idx-Yt.length].key;vt.add(Se)}return an(Me,oe.result)}let{loaderData:Oe,errors:dt}=Wu(P,P.matches,Yt,Ln,void 0,ht,Ur,Ne);if(P.fetchers.has(A)){let Se=jn(ge.data);P.fetchers.set(A,Se)}Os(zt),P.navigation.state==="loading"&&zt>nt?(le(S,"Expected pending action"),_&&_.abort(),me(P.navigation.location,{matches:Jt,loaderData:Oe,errors:dt,fetchers:new Map(P.fetchers)})):(Ie({errors:dt,loaderData:Ku(P.loaderData,Oe,Jt,dt),fetchers:new Map(P.fetchers)}),W=!1)}async function wi(A,k,D,U,K,J,te,q){let ie=P.fetchers.get(A);Pt(A,Mi(q,ie?ie.data:void 0),{flushSync:te});let Y=new AbortController,X=$r(n.history,D,Y.signal);if(J){let ge=await lr(K,D,X.signal);if(ge.type==="aborted")return;if(ge.type==="error"){let{error:ze}=xn(D,ge);Ft(A,k,ze,{flushSync:te});return}else if(ge.matches)K=ge.matches,U=ji(K,D);else{Ft(A,k,Tt(404,{pathname:D}),{flushSync:te});return}}de.set(A,Y);let ue=et,be=(await Dn("loader",X,[U],K))[0];if(mr(be)&&(be=await rf(be,X.signal,!0)||be),de.get(A)===Y&&de.delete(A),!X.signal.aborted){if(xe.has(A)){Pt(A,jn(void 0));return}if(gr(be))if(nt>ue){Pt(A,jn(void 0));return}else{vt.add(A),await an(X,be);return}if(Dt(be)){Ft(A,k,be.error);return}le(!mr(be),"Unhandled fetcher deferred data"),Pt(A,jn(be.data))}}async function an(A,k,D){let{submission:U,fetcherSubmission:K,replace:J}=D===void 0?{}:D;k.response.headers.has("X-Remix-Revalidate")&&(W=!0);let te=k.response.headers.get("Location");le(te,"Expected a Location header on the redirect Response"),te=qu(te,new URL(A.url),l);let q=Xi(P.location,te,{_isRedirect:!0});if(t){let be=!1;if(k.response.headers.has("X-Remix-Reload-Document"))be=!0;else if(Zc.test(te)){const ge=n.history.createURL(te);be=ge.origin!==e.location.origin||Tn(ge.pathname,l)==null}if(be){J?e.location.replace(te):e.location.assign(te);return}}_=null;let ie=J===!0?We.Replace:We.Push,{formMethod:Y,formAction:X,formEncType:ue}=P.navigation;!U&&!K&&Y&&X&&ue&&(U=Xu(P.navigation));let ve=U||K;if(zy.has(k.response.status)&&ve&&qt(ve.formMethod))await Ge(ie,q,{submission:Ve({},ve,{formAction:te}),preventScrollReset:g});else{let be=Na(q,U);await Ge(ie,q,{overrideNavigation:be,fetcherSubmission:K,preventScrollReset:g})}}async function Dn(A,k,D,U){try{let K=await Yy(u,A,k,D,U,s,i);return await Promise.all(K.map((J,te)=>{if(i_(J)){let q=J.result;return{type:Pe.redirect,response:e_(q,k,D[te].route.id,U,l,f.v7_relativeSplatPath)}}return Zy(J)}))}catch(K){return D.map(()=>({type:Pe.error,error:K}))}}async function Qe(A,k,D,U,K){let[J,...te]=await Promise.all([D.length?Dn("loader",K,D,k):[],...U.map(q=>{if(q.matches&&q.match&&q.controller){let ie=$r(n.history,q.path,q.controller.signal);return Dn("loader",ie,[q.match],q.matches).then(Y=>Y[0])}else return Promise.resolve({type:Pe.error,error:Tt(404,{pathname:q.path})})})]);return await Promise.all([Yu(A,D,J,J.map(()=>K.signal),!1,P.loaderData),Yu(A,U.map(q=>q.match),te,U.map(q=>q.controller?q.controller.signal:null),!0)]),{loaderResults:J,fetcherResults:te}}function Je(){W=!0,Ee.push(...cr()),Be.forEach((A,k)=>{de.has(k)&&(Ze.push(k),Bt(k))})}function Pt(A,k,D){D===void 0&&(D={}),P.fetchers.set(A,k),Ie({fetchers:new Map(P.fetchers)},{flushSync:(D&&D.flushSync)===!0})}function Ft(A,k,D,U){U===void 0&&(U={});let K=Kr(P.matches,k);Lr(A),Ie({errors:{[K.route.id]:D},fetchers:new Map(P.fetchers)},{flushSync:(U&&U.flushSync)===!0})}function Ei(A){return f.v7_fetcherPersist&&(_e.set(A,(_e.get(A)||0)+1),xe.has(A)&&xe.delete(A)),P.fetchers.get(A)||$y}function Lr(A){let k=P.fetchers.get(A);de.has(A)&&!(k&&k.state==="loading"&&bt.has(A))&&Bt(A),Be.delete(A),bt.delete(A),vt.delete(A),xe.delete(A),P.fetchers.delete(A)}function or(A){if(f.v7_fetcherPersist){let k=(_e.get(A)||0)-1;k<=0?(_e.delete(A),xe.add(A)):_e.set(A,k)}else Lr(A);Ie({fetchers:new Map(P.fetchers)})}function Bt(A){let k=de.get(A);le(k,"Expected fetch controller: "+A),k.abort(),de.delete(A)}function Ti(A){for(let k of A){let D=Ei(k),U=jn(D.data);P.fetchers.set(k,U)}}function Mr(){let A=[],k=!1;for(let D of vt){let U=P.fetchers.get(D);le(U,"Expected fetcher: "+D),U.state==="loading"&&(vt.delete(D),A.push(D),k=!0)}return Ti(A),k}function Os(A){let k=[];for(let[D,U]of bt)if(U<A){let K=P.fetchers.get(D);le(K,"Expected fetcher: "+D),K.state==="loading"&&(Bt(D),bt.delete(D),k.push(D))}return Ti(k),k.length>0}function Sa(A,k){let D=P.blockers.get(A)||Li;return $e.get(A)!==k&&$e.set(A,k),D}function Vr(A){P.blockers.delete(A),$e.delete(A)}function ar(A,k){let D=P.blockers.get(A)||Li;le(D.state==="unblocked"&&k.state==="blocked"||D.state==="blocked"&&k.state==="blocked"||D.state==="blocked"&&k.state==="proceeding"||D.state==="blocked"&&k.state==="unblocked"||D.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+D.state+" -> "+k.state);let U=new Map(P.blockers);U.set(A,k),Ie({blockers:U})}function bi(A){let{currentLocation:k,nextLocation:D,historyAction:U}=A;if($e.size===0)return;$e.size>1&&Zr(!1,"A router only supports one blocker at a time");let K=Array.from($e.entries()),[J,te]=K[K.length-1],q=P.blockers.get(J);if(!(q&&q.state==="proceeding")&&te({currentLocation:k,nextLocation:D,historyAction:U}))return J}function cn(A){let k=Tt(404,{pathname:A}),D=c||o,{matches:U,route:K}=Qu(D);return cr(),{notFoundMatches:U,route:K,error:k}}function xn(A,k){return{boundaryId:Kr(k.partialMatches).route.id,error:Tt(400,{type:"route-discovery",pathname:A,message:k.error!=null&&"message"in k.error?k.error:String(k.error)})}}function cr(A){let k=[];return Ne.forEach((D,U)=>{(!A||A(U))&&(D.cancel(),k.push(U),Ne.delete(U))}),k}function ln(A,k,D){if(w=A,C=k,R=D||null,!F&&P.navigation===xa){F=!0;let U=Si(P.location,P.matches);U!=null&&Ie({restoreScrollPosition:U})}return()=>{w=null,C=null,R=null}}function Ii(A,k){return R&&R(A,k.map(U=>wy(U,P.loaderData)))||A.key}function Fr(A,k){if(w&&C){let D=Ii(A,k);w[D]=C()}}function Si(A,k){if(w){let D=Ii(A,k),U=w[D];if(typeof U=="number")return U}return null}function un(A,k,D){if(d)if(A){let U=A[A.length-1].route;if(U.path&&(U.path==="*"||U.path.endsWith("/*")))return{active:!0,matches:Zs(k,D,l,!0)}}else return{active:!0,matches:Zs(k,D,l,!0)||[]};return{active:!1,matches:null}}async function lr(A,k,D){let U=A,K=U.length>0?U[U.length-1].route:null;for(;;){let J=c==null,te=c||o;try{await Qy(d,k,U,te,s,i,Le,D)}catch(X){return{type:"error",error:X,partialMatches:U}}finally{J&&(o=[...o])}if(D.aborted)return{type:"aborted"};let q=pr(te,k,l),ie=!1;if(q){let X=q[q.length-1].route;if(X.index)return{type:"success",matches:q};if(X.path&&X.path.length>0)if(X.path==="*")ie=!0;else return{type:"success",matches:q}}let Y=Zs(te,k,l,!0);if(!Y||U.map(X=>X.route.id).join("-")===Y.map(X=>X.route.id).join("-"))return{type:"success",matches:ie?q:null};if(U=Y,K=U[U.length-1].route,K.path==="*")return{type:"success",matches:U}}}function it(A){s={},c=Zi(A,i,void 0,s)}function Ds(A,k){let D=c==null;ef(A,k,c||o,s,i),D&&(o=[...o],Ie({}))}return G={get basename(){return l},get future(){return f},get state(){return P},get routes(){return o},get window(){return e},initialize:rt,subscribe:Et,enableScrollRestoration:ln,navigate:fe,fetch:ks,revalidate:qe,createHref:A=>n.history.createHref(A),encodeLocation:A=>n.history.encodeLocation(A),getFetcher:Ei,deleteFetcher:or,dispose:wt,getBlocker:Sa,deleteBlocker:Vr,patchRoutes:Ds,_internalFetchControllers:de,_internalActiveDeferreds:Ne,_internalSetRoutes:it},G}function Wy(n){return n!=null&&("formData"in n&&n.formData!=null||"body"in n&&n.body!==void 0)}function lc(n,e,t,r,i,s,o,c){let l,u;if(o){l=[];for(let f of e)if(l.push(f),f.route.id===o){u=f;break}}else l=e,u=e[e.length-1];let d=qo(i||".",$o(l,s),Tn(n.pathname,t)||n.pathname,c==="path");return i==null&&(d.search=n.search,d.hash=n.hash),(i==null||i===""||i===".")&&u&&u.route.index&&!el(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&t!=="/"&&(d.pathname=d.pathname==="/"?t:vn([t,d.pathname])),wr(d)}function ju(n,e,t,r){if(!r||!Wy(r))return{path:t};if(r.formMethod&&!o_(r.formMethod))return{path:t,error:Tt(405,{method:r.formMethod})};let i=()=>({path:t,error:Tt(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=n?s.toUpperCase():s.toLowerCase(),c=tf(t);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!qt(o))return i();let m=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((E,w)=>{let[R,C]=w;return""+E+R+"="+C+`
`},""):String(r.body);return{path:t,submission:{formMethod:o,formAction:c,formEncType:r.formEncType,formData:void 0,json:void 0,text:m}}}else if(r.formEncType==="application/json"){if(!qt(o))return i();try{let m=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:t,submission:{formMethod:o,formAction:c,formEncType:r.formEncType,formData:void 0,json:m,text:void 0}}}catch{return i()}}}le(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=uc(r.formData),u=r.formData;else if(r.body instanceof FormData)l=uc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=Hu(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=Hu(l)}catch{return i()}let d={formMethod:o,formAction:c,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(qt(d.formMethod))return{path:t,submission:d};let f=tr(t);return e&&f.search&&el(f.search)&&l.append("index",""),f.search="?"+l,{path:wr(f),submission:d}}function Ky(n,e){let t=n;if(e){let r=n.findIndex(i=>i.route.id===e);r>=0&&(t=n.slice(0,r))}return t}function Bu(n,e,t,r,i,s,o,c,l,u,d,f,m,E,w,R){let C=R?Dt(R[1])?R[1].error:R[1].data:void 0,F=n.createURL(e.location),M=n.createURL(i),L=R&&Dt(R[1])?R[0]:void 0,V=L?Ky(t,L):t,G=R?R[1].statusCode:void 0,P=o&&G&&G>=400,S=V.filter((_,I)=>{let{route:T}=_;if(T.lazy)return!0;if(T.loader==null)return!1;if(s)return typeof T.loader!="function"||T.loader.hydrate?!0:e.loaderData[T.id]===void 0&&(!e.errors||e.errors[T.id]===void 0);if(Gy(e.loaderData,e.matches[I],_)||l.some(W=>W===_.route.id))return!0;let b=e.matches[I],v=_;return zu(_,Ve({currentUrl:F,currentParams:b.params,nextUrl:M,nextParams:v.params},r,{actionResult:C,actionStatus:G,defaultShouldRevalidate:P?!1:c||F.pathname+F.search===M.pathname+M.search||F.search!==M.search||Zd(b,v)}))}),g=[];return f.forEach((_,I)=>{if(s||!t.some(Ee=>Ee.route.id===_.routeId)||d.has(I))return;let T=pr(E,_.path,w);if(!T){g.push({key:I,routeId:_.routeId,path:_.path,matches:null,match:null,controller:null});return}let b=e.fetchers.get(I),v=ji(T,_.path),W=!1;m.has(I)?W=!1:u.includes(I)?W=!0:b&&b.state!=="idle"&&b.data===void 0?W=c:W=zu(v,Ve({currentUrl:F,currentParams:e.matches[e.matches.length-1].params,nextUrl:M,nextParams:t[t.length-1].params},r,{actionResult:C,actionStatus:G,defaultShouldRevalidate:P?!1:c})),W&&g.push({key:I,routeId:_.routeId,path:_.path,matches:T,match:v,controller:new AbortController})}),[S,g]}function Gy(n,e,t){let r=!e||t.route.id!==e.route.id,i=n[t.route.id]===void 0;return r||i}function Zd(n,e){let t=n.route.path;return n.pathname!==e.pathname||t!=null&&t.endsWith("*")&&n.params["*"]!==e.params["*"]}function zu(n,e){if(n.route.shouldRevalidate){let t=n.route.shouldRevalidate(e);if(typeof t=="boolean")return t}return e.defaultShouldRevalidate}async function Qy(n,e,t,r,i,s,o,c){let l=[e,...t.map(u=>u.route.id)].join("-");try{let u=o.get(l);u||(u=n({path:e,matches:t,patch:(d,f)=>{c.aborted||ef(d,f,r,i,s)}}),o.set(l,u)),u&&r_(u)&&await u}finally{o.delete(l)}}function ef(n,e,t,r,i){if(n){var s;let o=r[n];le(o,"No route found to patch children into: routeId = "+n);let c=Zi(e,i,[n,"patch",String(((s=o.children)==null?void 0:s.length)||"0")],r);o.children?o.children.push(...c):o.children=c}else{let o=Zi(e,i,["patch",String(t.length||"0")],r);t.push(...o)}}async function $u(n,e,t){if(!n.lazy)return;let r=await n.lazy();if(!n.lazy)return;let i=t[n.id];le(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";Zr(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!_y.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Ve({},e(i),{lazy:void 0}))}function Jy(n){return Promise.all(n.matches.map(e=>e.resolve()))}async function Yy(n,e,t,r,i,s,o,c){let l=r.reduce((f,m)=>f.add(m.route.id),new Set),u=new Set,d=await n({matches:i.map(f=>{let m=l.has(f.route.id);return Ve({},f,{shouldLoad:m,resolve:w=>(u.add(f.route.id),m?Xy(e,t,f,s,o,w,c):Promise.resolve({type:Pe.data,result:void 0}))})}),request:t,params:i[0].params,context:c});return i.forEach(f=>le(u.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,m)=>l.has(i[m].route.id))}async function Xy(n,e,t,r,i,s,o){let c,l,u=d=>{let f,m=new Promise((R,C)=>f=C);l=()=>f(),e.signal.addEventListener("abort",l);let E=R=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+n+'" [routeId: '+t.route.id+"]"))):d({request:e,params:t.params,context:o},...R!==void 0?[R]:[]),w;return s?w=s(R=>E(R)):w=(async()=>{try{return{type:"data",result:await E()}}catch(R){return{type:"error",result:R}}})(),Promise.race([w,m])};try{let d=t.route[n];if(t.route.lazy)if(d){let f,[m]=await Promise.all([u(d).catch(E=>{f=E}),$u(t.route,i,r)]);if(f!==void 0)throw f;c=m}else if(await $u(t.route,i,r),d=t.route[n],d)c=await u(d);else if(n==="action"){let f=new URL(e.url),m=f.pathname+f.search;throw Tt(405,{method:e.method,pathname:m,routeId:t.route.id})}else return{type:Pe.data,result:void 0};else if(d)c=await u(d);else{let f=new URL(e.url),m=f.pathname+f.search;throw Tt(404,{pathname:m})}le(c.result!==void 0,"You defined "+(n==="action"?"an action":"a loader")+" for route "+('"'+t.route.id+"\" but didn't return anything from your `"+n+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:Pe.error,result:d}}finally{l&&e.signal.removeEventListener("abort",l)}return c}async function Zy(n){let{result:e,type:t,status:r}=n;if(nf(e)){let o;try{let c=e.headers.get("Content-Type");c&&/\bapplication\/json\b/.test(c)?e.body==null?o=null:o=await e.json():o=await e.text()}catch(c){return{type:Pe.error,error:c}}return t===Pe.error?{type:Pe.error,error:new Xc(e.status,e.statusText,o),statusCode:e.status,headers:e.headers}:{type:Pe.data,data:o,statusCode:e.status,headers:e.headers}}if(t===Pe.error)return{type:Pe.error,error:e,statusCode:Ho(e)?e.status:r};if(s_(e)){var i,s;return{type:Pe.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:Pe.data,data:e,statusCode:r}}function e_(n,e,t,r,i,s){let o=n.headers.get("Location");if(le(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!Zc.test(o)){let c=r.slice(0,r.findIndex(l=>l.route.id===t)+1);o=lc(new URL(e.url),c,i,!0,o,s),n.headers.set("Location",o)}return n}function qu(n,e,t){if(Zc.test(n)){let r=n,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Tn(i.pathname,t)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return n}function $r(n,e,t,r){let i=n.createURL(tf(e)).toString(),s={signal:t};if(r&&qt(r.formMethod)){let{formMethod:o,formEncType:c}=r;s.method=o.toUpperCase(),c==="application/json"?(s.headers=new Headers({"Content-Type":c}),s.body=JSON.stringify(r.json)):c==="text/plain"?s.body=r.text:c==="application/x-www-form-urlencoded"&&r.formData?s.body=uc(r.formData):s.body=r.formData}return new Request(i,s)}function uc(n){let e=new URLSearchParams;for(let[t,r]of n.entries())e.append(t,typeof r=="string"?r:r.name);return e}function Hu(n){let e=new FormData;for(let[t,r]of n.entries())e.append(t,r);return e}function t_(n,e,t,r,i,s){let o={},c=null,l,u=!1,d={},f=r&&Dt(r[1])?r[1].error:void 0;return t.forEach((m,E)=>{let w=e[E].route.id;if(le(!gr(m),"Cannot handle redirect results in processLoaderData"),Dt(m)){let R=m.error;f!==void 0&&(R=f,f=void 0),c=c||{};{let C=Kr(n,w);c[C.route.id]==null&&(c[C.route.id]=R)}o[w]=void 0,u||(u=!0,l=Ho(m.error)?m.error.status:500),m.headers&&(d[w]=m.headers)}else mr(m)?(i.set(w,m.deferredData),o[w]=m.deferredData.data,m.statusCode!=null&&m.statusCode!==200&&!u&&(l=m.statusCode),m.headers&&(d[w]=m.headers)):(o[w]=m.data,m.statusCode&&m.statusCode!==200&&!u&&(l=m.statusCode),m.headers&&(d[w]=m.headers))}),f!==void 0&&r&&(c={[r[0]]:f},o[r[0]]=void 0),{loaderData:o,errors:c,statusCode:l||200,loaderHeaders:d}}function Wu(n,e,t,r,i,s,o,c){let{loaderData:l,errors:u}=t_(e,t,r,i,c);for(let d=0;d<s.length;d++){let{key:f,match:m,controller:E}=s[d];le(o!==void 0&&o[d]!==void 0,"Did not find corresponding fetcher result");let w=o[d];if(!(E&&E.signal.aborted))if(Dt(w)){let R=Kr(n.matches,m==null?void 0:m.route.id);u&&u[R.route.id]||(u=Ve({},u,{[R.route.id]:w.error})),n.fetchers.delete(f)}else if(gr(w))le(!1,"Unhandled fetcher revalidation redirect");else if(mr(w))le(!1,"Unhandled fetcher deferred data");else{let R=jn(w.data);n.fetchers.set(f,R)}}return{loaderData:l,errors:u}}function Ku(n,e,t,r){let i=Ve({},e);for(let s of t){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):n[o]!==void 0&&s.route.loader&&(i[o]=n[o]),r&&r.hasOwnProperty(o))break}return i}function Gu(n){return n?Dt(n[1])?{actionData:{}}:{actionData:{[n[0]]:n[1].data}}:{}}function Kr(n,e){return(e?n.slice(0,n.findIndex(r=>r.route.id===e)+1):[...n]).reverse().find(r=>r.route.hasErrorBoundary===!0)||n[0]}function Qu(n){let e=n.length===1?n[0]:n.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Tt(n,e){let{pathname:t,routeId:r,method:i,type:s,message:o}=e===void 0?{}:e,c="Unknown Server Error",l="Unknown @remix-run/router error";return n===400?(c="Bad Request",s==="route-discovery"?l='Unable to match URL "'+t+'" - the `unstable_patchRoutesOnMiss()` '+(`function threw the following error:
`+o):i&&t&&r?l="You made a "+i+' request to "'+t+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?l="defer() is not supported in actions":s==="invalid-body"&&(l="Unable to encode submission body")):n===403?(c="Forbidden",l='Route "'+r+'" does not match URL "'+t+'"'):n===404?(c="Not Found",l='No route matches URL "'+t+'"'):n===405&&(c="Method Not Allowed",i&&t&&r?l="You made a "+i.toUpperCase()+' request to "'+t+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(l='Invalid request method "'+i.toUpperCase()+'"')),new Xc(n||500,c,new Error(l),!0)}function Ju(n){for(let e=n.length-1;e>=0;e--){let t=n[e];if(gr(t))return{result:t,idx:e}}}function tf(n){let e=typeof n=="string"?tr(n):n;return wr(Ve({},e,{hash:""}))}function n_(n,e){return n.pathname!==e.pathname||n.search!==e.search?!1:n.hash===""?e.hash!=="":n.hash===e.hash?!0:e.hash!==""}function r_(n){return typeof n=="object"&&n!=null&&"then"in n}function i_(n){return nf(n.result)&&By.has(n.result.status)}function mr(n){return n.type===Pe.deferred}function Dt(n){return n.type===Pe.error}function gr(n){return(n&&n.type)===Pe.redirect}function s_(n){let e=n;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function nf(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.headers=="object"&&typeof n.body<"u"}function o_(n){return jy.has(n.toLowerCase())}function qt(n){return Fy.has(n.toLowerCase())}async function Yu(n,e,t,r,i,s){for(let o=0;o<t.length;o++){let c=t[o],l=e[o];if(!l)continue;let u=n.find(f=>f.route.id===l.route.id),d=u!=null&&!Zd(u,l)&&(s&&s[l.route.id])!==void 0;if(mr(c)&&(i||d)){let f=r[o];le(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await rf(c,f,i).then(m=>{m&&(t[o]=m||t[o])})}}}async function rf(n,e,t){if(t===void 0&&(t=!1),!await n.deferredData.resolveData(e)){if(t)try{return{type:Pe.data,data:n.deferredData.unwrappedData}}catch(i){return{type:Pe.error,error:i}}return{type:Pe.data,data:n.deferredData.data}}}function el(n){return new URLSearchParams(n).getAll("index").some(e=>e==="")}function ji(n,e){let t=typeof e=="string"?tr(e).search:e.search;if(n[n.length-1].route.index&&el(t||""))return n[n.length-1];let r=Jd(n);return r[r.length-1]}function Xu(n){let{formMethod:e,formAction:t,formEncType:r,text:i,formData:s,json:o}=n;if(!(!e||!t||!r)){if(i!=null)return{formMethod:e,formAction:t,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:t,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:t,formEncType:r,formData:void 0,json:o,text:void 0}}}function Na(n,e){return e?{state:"loading",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:n,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function a_(n,e){return{state:"submitting",location:n,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Mi(n,e){return n?{state:"loading",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function c_(n,e){return{state:"submitting",formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text,data:e?e.data:void 0}}function jn(n){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function l_(n,e){try{let t=n.sessionStorage.getItem(Xd);if(t){let r=JSON.parse(t);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function u_(n,e){if(e.size>0){let t={};for(let[r,i]of e)t[r]=[...i];try{n.sessionStorage.setItem(Xd,JSON.stringify(t))}catch(r){Zr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yo(){return yo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},yo.apply(this,arguments)}const ps=j.createContext(null),tl=j.createContext(null),An=j.createContext(null),nl=j.createContext(null),Pn=j.createContext({outlet:null,matches:[],isDataRoute:!1}),sf=j.createContext(null);function h_(n,e){let{relative:t}=e===void 0?{}:e;ui()||le(!1);let{basename:r,navigator:i}=j.useContext(An),{hash:s,pathname:o,search:c}=Wo(n,{relative:t}),l=o;return r!=="/"&&(l=o==="/"?r:vn([r,o])),i.createHref({pathname:l,search:c,hash:s})}function ui(){return j.useContext(nl)!=null}function nr(){return ui()||le(!1),j.useContext(nl).location}function of(n){j.useContext(An).static||j.useLayoutEffect(n)}function af(){let{isDataRoute:n}=j.useContext(Pn);return n?S_():d_()}function d_(){ui()||le(!1);let n=j.useContext(ps),{basename:e,future:t,navigator:r}=j.useContext(An),{matches:i}=j.useContext(Pn),{pathname:s}=nr(),o=JSON.stringify($o(i,t.v7_relativeSplatPath)),c=j.useRef(!1);return of(()=>{c.current=!0}),j.useCallback(function(u,d){if(d===void 0&&(d={}),!c.current)return;if(typeof u=="number"){r.go(u);return}let f=qo(u,JSON.parse(o),s,d.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:vn([e,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[e,r,o,s,n])}const f_=j.createContext(null);function p_(n){let e=j.useContext(Pn).outlet;return e&&j.createElement(f_.Provider,{value:n},e)}function Wo(n,e){let{relative:t}=e===void 0?{}:e,{future:r}=j.useContext(An),{matches:i}=j.useContext(Pn),{pathname:s}=nr(),o=JSON.stringify($o(i,r.v7_relativeSplatPath));return j.useMemo(()=>qo(n,JSON.parse(o),s,t==="path"),[n,o,s,t])}function m_(n,e,t,r){ui()||le(!1);let{navigator:i}=j.useContext(An),{matches:s}=j.useContext(Pn),o=s[s.length-1],c=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=nr(),d;d=u;let f=d.pathname||"/",m=f;if(l!=="/"){let R=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(R.length).join("/")}let E=pr(n,{pathname:m});return w_(E&&E.map(R=>Object.assign({},R,{params:Object.assign({},c,R.params),pathname:vn([l,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?l:vn([l,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,t,r)}function g_(){let n=I_(),e=Ho(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),t?j.createElement("pre",{style:i},t):null,null)}const y_=j.createElement(g_,null);class __ extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?j.createElement(Pn.Provider,{value:this.props.routeContext},j.createElement(sf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function v_(n){let{routeContext:e,match:t,children:r}=n,i=j.useContext(ps);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),j.createElement(Pn.Provider,{value:e},r)}function w_(n,e,t,r){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),n==null){var s;if((s=t)!=null&&s.errors)n=t.matches;else return null}let o=n,c=(i=t)==null?void 0:i.errors;if(c!=null){let d=o.findIndex(f=>f.route.id&&(c==null?void 0:c[f.route.id])!==void 0);d>=0||le(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let f=o[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:m,errors:E}=t,w=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||w){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,f,m)=>{let E,w=!1,R=null,C=null;t&&(E=c&&f.route.id?c[f.route.id]:void 0,R=f.route.errorElement||y_,l&&(u<0&&m===0?(w=!0,C=null):u===m&&(w=!0,C=f.route.hydrateFallbackElement||null)));let F=e.concat(o.slice(0,m+1)),M=()=>{let L;return E?L=R:w?L=C:f.route.Component?L=j.createElement(f.route.Component,null):f.route.element?L=f.route.element:L=d,j.createElement(v_,{match:f,routeContext:{outlet:d,matches:F,isDataRoute:t!=null},children:L})};return t&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(__,{location:t.location,revalidation:t.revalidation,component:R,error:E,children:M(),routeContext:{outlet:null,matches:F,isDataRoute:!0}}):M()},null)}var cf=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(cf||{}),_o=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(_o||{});function E_(n){let e=j.useContext(ps);return e||le(!1),e}function T_(n){let e=j.useContext(tl);return e||le(!1),e}function b_(n){let e=j.useContext(Pn);return e||le(!1),e}function lf(n){let e=b_(),t=e.matches[e.matches.length-1];return t.route.id||le(!1),t.route.id}function I_(){var n;let e=j.useContext(sf),t=T_(_o.UseRouteError),r=lf(_o.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function S_(){let{router:n}=E_(cf.UseNavigateStable),e=lf(_o.UseNavigateStable),t=j.useRef(!1);return of(()=>{t.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),t.current&&(typeof i=="number"?n.navigate(i):n.navigate(i,yo({fromRouteId:e},s)))},[n,e])}function R_(n){let{to:e,replace:t,state:r,relative:i}=n;ui()||le(!1);let{future:s,static:o}=j.useContext(An),{matches:c}=j.useContext(Pn),{pathname:l}=nr(),u=af(),d=qo(e,$o(c,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return j.useEffect(()=>u(JSON.parse(f),{replace:t,state:r,relative:i}),[u,f,i,t,r]),null}function A_(n){return p_(n.context)}function P_(n){let{basename:e="/",children:t=null,location:r,navigationType:i=We.Pop,navigator:s,static:o=!1,future:c}=n;ui()&&le(!1);let l=e.replace(/^\/*/,"/"),u=j.useMemo(()=>({basename:l,navigator:s,static:o,future:yo({v7_relativeSplatPath:!1},c)}),[l,c,s,o]);typeof r=="string"&&(r=tr(r));let{pathname:d="/",search:f="",hash:m="",state:E=null,key:w="default"}=r,R=j.useMemo(()=>{let C=Tn(d,l);return C==null?null:{location:{pathname:C,search:f,hash:m,state:E,key:w},navigationType:i}},[l,d,f,m,E,w,i]);return R==null?null:j.createElement(An.Provider,{value:u},j.createElement(nl.Provider,{children:t,value:R}))}new Promise(()=>{});function C_(n){let e={hasErrorBoundary:n.ErrorBoundary!=null||n.errorElement!=null};return n.Component&&Object.assign(e,{element:j.createElement(n.Component),Component:void 0}),n.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:j.createElement(n.HydrateFallback),HydrateFallback:void 0}),n.ErrorBoundary&&Object.assign(e,{errorElement:j.createElement(n.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.25.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},ei.apply(this,arguments)}function uf(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function k_(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function O_(n,e){return n.button===0&&(!e||e==="_self")&&!k_(n)}const D_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],x_=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],N_="6";try{window.__reactRouterVersion=N_}catch{}function L_(n,e){return Hy({basename:void 0,future:ei({},void 0,{v7_prependBasename:!0}),history:my({window:void 0}),hydrationData:M_(),routes:n,mapRouteProperties:C_,unstable_dataStrategy:void 0,unstable_patchRoutesOnMiss:void 0,window:void 0}).initialize()}function M_(){var n;let e=(n=window)==null?void 0:n.__staticRouterHydrationData;return e&&e.errors&&(e=ei({},e,{errors:V_(e.errors)})),e}function V_(n){if(!n)return null;let e=Object.entries(n),t={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")t[r]=new Xc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",t[r]=o}catch{}}if(t[r]==null){let s=new Error(i.message);s.stack="",t[r]=s}}else t[r]=i;return t}const hf=j.createContext({isTransitioning:!1}),F_=j.createContext(new Map),U_="startTransition",Zu=cc[U_],j_="flushSync",eh=ay[j_];function B_(n){Zu?Zu(n):n()}function Vi(n){eh?eh(n):n()}let z_=class{constructor(){this.status="pending",this.promise=new Promise((e,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}};function $_(n){let{fallbackElement:e,router:t,future:r}=n,[i,s]=j.useState(t.state),[o,c]=j.useState(),[l,u]=j.useState({isTransitioning:!1}),[d,f]=j.useState(),[m,E]=j.useState(),[w,R]=j.useState(),C=j.useRef(new Map),{v7_startTransition:F}=r||{},M=j.useCallback(g=>{F?B_(g):g()},[F]),L=j.useCallback((g,_)=>{let{deletedFetchers:I,unstable_flushSync:T,unstable_viewTransitionOpts:b}=_;I.forEach(W=>C.current.delete(W)),g.fetchers.forEach((W,Ee)=>{W.data!==void 0&&C.current.set(Ee,W.data)});let v=t.window==null||t.window.document==null||typeof t.window.document.startViewTransition!="function";if(!b||v){T?Vi(()=>s(g)):M(()=>s(g));return}if(T){Vi(()=>{m&&(d&&d.resolve(),m.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:b.currentLocation,nextLocation:b.nextLocation})});let W=t.window.document.startViewTransition(()=>{Vi(()=>s(g))});W.finished.finally(()=>{Vi(()=>{f(void 0),E(void 0),c(void 0),u({isTransitioning:!1})})}),Vi(()=>E(W));return}m?(d&&d.resolve(),m.skipTransition(),R({state:g,currentLocation:b.currentLocation,nextLocation:b.nextLocation})):(c(g),u({isTransitioning:!0,flushSync:!1,currentLocation:b.currentLocation,nextLocation:b.nextLocation}))},[t.window,m,d,C,M]);j.useLayoutEffect(()=>t.subscribe(L),[t,L]),j.useEffect(()=>{l.isTransitioning&&!l.flushSync&&f(new z_)},[l]),j.useEffect(()=>{if(d&&o&&t.window){let g=o,_=d.promise,I=t.window.document.startViewTransition(async()=>{M(()=>s(g)),await _});I.finished.finally(()=>{f(void 0),E(void 0),c(void 0),u({isTransitioning:!1})}),E(I)}},[M,o,d,t.window]),j.useEffect(()=>{d&&o&&i.location.key===o.location.key&&d.resolve()},[d,m,i.location,o]),j.useEffect(()=>{!l.isTransitioning&&w&&(c(w.state),u({isTransitioning:!0,flushSync:!1,currentLocation:w.currentLocation,nextLocation:w.nextLocation}),R(void 0))},[l.isTransitioning,w]),j.useEffect(()=>{},[]);let V=j.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:g=>t.navigate(g),push:(g,_,I)=>t.navigate(g,{state:_,preventScrollReset:I==null?void 0:I.preventScrollReset}),replace:(g,_,I)=>t.navigate(g,{replace:!0,state:_,preventScrollReset:I==null?void 0:I.preventScrollReset})}),[t]),G=t.basename||"/",P=j.useMemo(()=>({router:t,navigator:V,static:!1,basename:G}),[t,V,G]),S=j.useMemo(()=>({v7_relativeSplatPath:t.future.v7_relativeSplatPath}),[t.future.v7_relativeSplatPath]);return j.createElement(j.Fragment,null,j.createElement(ps.Provider,{value:P},j.createElement(tl.Provider,{value:i},j.createElement(F_.Provider,{value:C.current},j.createElement(hf.Provider,{value:l},j.createElement(P_,{basename:G,location:i.location,navigationType:i.historyAction,navigator:V,future:S},i.initialized||t.future.v7_partialHydration?j.createElement(q_,{routes:t.routes,future:t.future,state:i}):e))))),null)}const q_=j.memo(H_);function H_(n){let{routes:e,future:t,state:r}=n;return m_(e,void 0,r,t)}const W_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",K_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,hc=j.forwardRef(function(e,t){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:c,target:l,to:u,preventScrollReset:d,unstable_viewTransition:f}=e,m=uf(e,D_),{basename:E}=j.useContext(An),w,R=!1;if(typeof u=="string"&&K_.test(u)&&(w=u,W_))try{let L=new URL(window.location.href),V=u.startsWith("//")?new URL(L.protocol+u):new URL(u),G=Tn(V.pathname,E);V.origin===L.origin&&G!=null?u=G+V.search+V.hash:R=!0}catch{}let C=h_(u,{relative:i}),F=Q_(u,{replace:o,state:c,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:f});function M(L){r&&r(L),L.defaultPrevented||F(L)}return j.createElement("a",ei({},m,{href:w||C,onClick:R||s?r:M,ref:t,target:l}))}),mn=j.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:c,to:l,unstable_viewTransition:u,children:d}=e,f=uf(e,x_),m=Wo(l,{relative:f.relative}),E=nr(),w=j.useContext(tl),{navigator:R,basename:C}=j.useContext(An),F=w!=null&&J_(m)&&u===!0,M=R.encodeLocation?R.encodeLocation(m).pathname:m.pathname,L=E.pathname,V=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(L=L.toLowerCase(),V=V?V.toLowerCase():null,M=M.toLowerCase()),V&&C&&(V=Tn(V,C)||V);const G=M!=="/"&&M.endsWith("/")?M.length-1:M.length;let P=L===M||!o&&L.startsWith(M)&&L.charAt(G)==="/",S=V!=null&&(V===M||!o&&V.startsWith(M)&&V.charAt(M.length)==="/"),g={isActive:P,isPending:S,isTransitioning:F},_=P?r:void 0,I;typeof s=="function"?I=s(g):I=[s,P?"active":null,S?"pending":null,F?"transitioning":null].filter(Boolean).join(" ");let T=typeof c=="function"?c(g):c;return j.createElement(hc,ei({},f,{"aria-current":_,className:I,ref:t,style:T,to:l,unstable_viewTransition:u}),typeof d=="function"?d(g):d)});var dc;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(dc||(dc={}));var th;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(th||(th={}));function G_(n){let e=j.useContext(ps);return e||le(!1),e}function Q_(n,e){let{target:t,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:c}=e===void 0?{}:e,l=af(),u=nr(),d=Wo(n,{relative:o});return j.useCallback(f=>{if(O_(f,t)){f.preventDefault();let m=r!==void 0?r:wr(u)===wr(d);l(n,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:c})}},[u,l,d,r,i,t,n,s,o,c])}function J_(n,e){e===void 0&&(e={});let t=j.useContext(hf);t==null&&le(!1);let{basename:r}=G_(dc.useViewTransitionState),i=Wo(n,{relative:e.relative});if(!t.isTransitioning)return!1;let s=Tn(t.currentLocation.pathname,r)||t.currentLocation.pathname,o=Tn(t.nextLocation.pathname,r)||t.nextLocation.pathname;return go(i.pathname,o)!=null||go(i.pathname,s)!=null}const Y_="modulepreload",X_=function(n){return"/"+n},nh={},Cn=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(t.map(c=>{if(c=X_(c),c in nh)return;nh[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Y_,l||(d.as="script",d.crossOrigin=""),d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),l)return new Promise((f,m)=>{d.addEventListener("load",f),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}return i.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Z_=({isOpen:n})=>{const e=nr(),t=e.pathname==="/";return $.jsx("div",{className:"navbar",children:$.jsx("div",{className:"center",children:$.jsx("nav",{className:n?"active":"",children:$.jsxs("ul",{className:`nav-links ${t?"home-nav":""}`,children:[$.jsx("li",{className:`special-li ${t?"home-link":""}`,children:$.jsx(mn,{className:e.pathname==="/"?"active":"",to:"/",children:"Home"})}),$.jsx("li",{className:t?"home-link":"",children:$.jsx(mn,{className:e.pathname==="/news"?"active":"",to:"/news",children:"News"})}),$.jsx("li",{className:t?"home-link":"",children:$.jsx(mn,{className:e.pathname==="/find_pet"?"active":"",to:"/find_pet",children:"Find pet"})}),$.jsx("li",{className:t?"home-link":"",children:$.jsx(mn,{className:e.pathname==="/our_friends"?"active":"",to:"/our_friends",children:"Our friends"})})]})})})})},ev="/assets/logohome-NXIjq11m.svg",tv="/assets/logo-DqiJri78.svg",nv="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2016H28'%20stroke='%23262626'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%208H28'%20stroke='%23262626'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4%2024H28'%20stroke='%23262626'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";var df={exports:{}},ff={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ms=j;function rv(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var iv=typeof Object.is=="function"?Object.is:rv,sv=ms.useSyncExternalStore,ov=ms.useRef,av=ms.useEffect,cv=ms.useMemo,lv=ms.useDebugValue;ff.useSyncExternalStoreWithSelector=function(n,e,t,r,i){var s=ov(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=cv(function(){function l(E){if(!u){if(u=!0,d=E,E=r(E),i!==void 0&&o.hasValue){var w=o.value;if(i(w,E))return f=w}return f=E}if(w=f,iv(d,E))return w;var R=r(E);return i!==void 0&&i(w,R)?w:(d=E,f=R)}var u=!1,d,f,m=t===void 0?null:t;return[function(){return l(e())},m===null?void 0:function(){return l(m())}]},[e,t,r,i]);var c=sv(n,s[0],s[1]);return av(function(){o.hasValue=!0,o.value=c},[c]),lv(c),c};df.exports=ff;var uv=df.exports,xt="default"in cc?Ot:cc,rh=Symbol.for("react-redux-context"),ih=typeof globalThis<"u"?globalThis:{};function hv(){if(!xt.createContext)return{};const n=ih[rh]??(ih[rh]=new Map);let e=n.get(xt.createContext);return e||(e=xt.createContext(null),n.set(xt.createContext,e)),e}var Jn=hv(),dv=()=>{throw new Error("uSES not initialized!")};function rl(n=Jn){return function(){return xt.useContext(n)}}var pf=rl(),mf=dv,fv=n=>{mf=n},pv=(n,e)=>n===e;function mv(n=Jn){const e=n===Jn?pf:rl(n),t=(r,i={})=>{const{equalityFn:s=pv,devModeChecks:o={}}=typeof i=="function"?{equalityFn:i}:i,{store:c,subscription:l,getServerState:u,stabilityCheck:d,identityFunctionCheck:f}=e();xt.useRef(!0);const m=xt.useCallback({[r.name](w){return r(w)}}[r.name],[r,d,o.stabilityCheck]),E=mf(l.addNestedSub,c.getState,u||c.getState,m,s);return xt.useDebugValue(E),E};return Object.assign(t,{withTypes:()=>t}),t}var il=mv();function gv(n){n()}function yv(){let n=null,e=null;return{clear(){n=null,e=null},notify(){gv(()=>{let t=n;for(;t;)t.callback(),t=t.next})},get(){const t=[];let r=n;for(;r;)t.push(r),r=r.next;return t},subscribe(t){let r=!0;const i=e={callback:t,next:null,prev:e};return i.prev?i.prev.next=i:n=i,function(){!r||n===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:n=i.next)}}}}var sh={notify(){},get:()=>[]};function _v(n,e){let t,r=sh,i=0,s=!1;function o(R){d();const C=r.subscribe(R);let F=!1;return()=>{F||(F=!0,C(),f())}}function c(){r.notify()}function l(){w.onStateChange&&w.onStateChange()}function u(){return s}function d(){i++,t||(t=n.subscribe(l),r=yv())}function f(){i--,t&&i===0&&(t(),t=void 0,r.clear(),r=sh)}function m(){s||(s=!0,d())}function E(){s&&(s=!1,f())}const w={addNestedSub:o,notifyNestedSubs:c,handleChangeWrapper:l,isSubscribed:u,trySubscribe:m,tryUnsubscribe:E,getListeners:()=>r};return w}var vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wv=typeof navigator<"u"&&navigator.product==="ReactNative",Ev=vv||wv?xt.useLayoutEffect:xt.useEffect;function Tv({store:n,context:e,children:t,serverState:r,stabilityCheck:i="once",identityFunctionCheck:s="once"}){const o=xt.useMemo(()=>{const u=_v(n);return{store:n,subscription:u,getServerState:r?()=>r:void 0,stabilityCheck:i,identityFunctionCheck:s}},[n,r,i,s]),c=xt.useMemo(()=>n.getState(),[n]);Ev(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),c!==n.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,c]);const l=e||Jn;return xt.createElement(l.Provider,{value:o},t)}var bv=Tv;function gf(n=Jn){const e=n===Jn?pf:rl(n),t=()=>{const{store:r}=e();return r};return Object.assign(t,{withTypes:()=>t}),t}var Iv=gf();function Sv(n=Jn){const e=n===Jn?Iv:gf(n),t=()=>e().dispatch;return Object.assign(t,{withTypes:()=>t}),t}var yf=Sv();fv(uv.useSyncExternalStoreWithSelector);function ot(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var Rv=typeof Symbol=="function"&&Symbol.observable||"@@observable",oh=Rv,La=()=>Math.random().toString(36).substring(7).split("").join("."),Av={INIT:`@@redux/INIT${La()}`,REPLACE:`@@redux/REPLACE${La()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${La()}`},vo=Av;function sl(n){if(typeof n!="object"||n===null)return!1;let e=n;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(n)===e||Object.getPrototypeOf(n)===null}function ol(n,e,t){if(typeof n!="function")throw new Error(ot(2));if(typeof e=="function"&&typeof t=="function"||typeof t=="function"&&typeof arguments[3]=="function")throw new Error(ot(0));if(typeof e=="function"&&typeof t>"u"&&(t=e,e=void 0),typeof t<"u"){if(typeof t!="function")throw new Error(ot(1));return t(ol)(n,e)}let r=n,i=e,s=new Map,o=s,c=0,l=!1;function u(){o===s&&(o=new Map,s.forEach((C,F)=>{o.set(F,C)}))}function d(){if(l)throw new Error(ot(3));return i}function f(C){if(typeof C!="function")throw new Error(ot(4));if(l)throw new Error(ot(5));let F=!0;u();const M=c++;return o.set(M,C),function(){if(F){if(l)throw new Error(ot(6));F=!1,u(),o.delete(M),s=null}}}function m(C){if(!sl(C))throw new Error(ot(7));if(typeof C.type>"u")throw new Error(ot(8));if(typeof C.type!="string")throw new Error(ot(17));if(l)throw new Error(ot(9));try{l=!0,i=r(i,C)}finally{l=!1}return(s=o).forEach(M=>{M()}),C}function E(C){if(typeof C!="function")throw new Error(ot(10));r=C,m({type:vo.REPLACE})}function w(){const C=f;return{subscribe(F){if(typeof F!="object"||F===null)throw new Error(ot(11));function M(){const V=F;V.next&&V.next(d())}return M(),{unsubscribe:C(M)}},[oh](){return this}}}return m({type:vo.INIT}),{dispatch:m,subscribe:f,getState:d,replaceReducer:E,[oh]:w}}function Pv(n){Object.keys(n).forEach(e=>{const t=n[e];if(typeof t(void 0,{type:vo.INIT})>"u")throw new Error(ot(12));if(typeof t(void 0,{type:vo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ot(13))})}function _f(n){const e=Object.keys(n),t={};for(let s=0;s<e.length;s++){const o=e[s];typeof n[o]=="function"&&(t[o]=n[o])}const r=Object.keys(t);let i;try{Pv(t)}catch(s){i=s}return function(o={},c){if(i)throw i;let l=!1;const u={};for(let d=0;d<r.length;d++){const f=r[d],m=t[f],E=o[f],w=m(E,c);if(typeof w>"u")throw c&&c.type,new Error(ot(14));u[f]=w,l=l||w!==E}return l=l||r.length!==Object.keys(o).length,l?u:o}}function wo(...n){return n.length===0?e=>e:n.length===1?n[0]:n.reduce((e,t)=>(...r)=>e(t(...r)))}function Cv(...n){return e=>(t,r)=>{const i=e(t,r);let s=()=>{throw new Error(ot(15))};const o={getState:i.getState,dispatch:(l,...u)=>s(l,...u)},c=n.map(l=>l(o));return s=wo(...c)(i.dispatch),{...i,dispatch:s}}}function kv(n){return sl(n)&&"type"in n&&typeof n.type=="string"}var vf=Symbol.for("immer-nothing"),ah=Symbol.for("immer-draftable"),Mt=Symbol.for("immer-state");function Ht(n,...e){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var ti=Object.getPrototypeOf;function Yn(n){return!!n&&!!n[Mt]}function bn(n){var e;return n?wf(n)||Array.isArray(n)||!!n[ah]||!!((e=n.constructor)!=null&&e[ah])||Go(n)||Qo(n):!1}var Ov=Object.prototype.constructor.toString();function wf(n){if(!n||typeof n!="object")return!1;const e=ti(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===Ov}function Eo(n,e){Ko(n)===0?Reflect.ownKeys(n).forEach(t=>{e(t,n[t],n)}):n.forEach((t,r)=>e(r,t,n))}function Ko(n){const e=n[Mt];return e?e.type_:Array.isArray(n)?1:Go(n)?2:Qo(n)?3:0}function fc(n,e){return Ko(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function Ef(n,e,t){const r=Ko(n);r===2?n.set(e,t):r===3?n.add(t):n[e]=t}function Dv(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function Go(n){return n instanceof Map}function Qo(n){return n instanceof Set}function dr(n){return n.copy_||n.base_}function pc(n,e){if(Go(n))return new Map(n);if(Qo(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=wf(n);if(e===!0||e==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(n);delete r[Mt];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],c=r[o];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[o]={configurable:!0,writable:!0,enumerable:c.enumerable,value:n[o]})}return Object.create(ti(n),r)}else{const r=ti(n);if(r!==null&&t)return{...n};const i=Object.create(r);return Object.assign(i,n)}}function al(n,e=!1){return Jo(n)||Yn(n)||!bn(n)||(Ko(n)>1&&(n.set=n.add=n.clear=n.delete=xv),Object.freeze(n),e&&Object.entries(n).forEach(([t,r])=>al(r,!0))),n}function xv(){Ht(2)}function Jo(n){return Object.isFrozen(n)}var Nv={};function Er(n){const e=Nv[n];return e||Ht(0,n),e}var es;function Tf(){return es}function Lv(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ch(n,e){e&&(Er("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function mc(n){gc(n),n.drafts_.forEach(Mv),n.drafts_=null}function gc(n){n===es&&(es=n.parent_)}function lh(n){return es=Lv(es,n)}function Mv(n){const e=n[Mt];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function uh(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[Mt].modified_&&(mc(e),Ht(4)),bn(n)&&(n=To(e,n),e.parent_||bo(e,n)),e.patches_&&Er("Patches").generateReplacementPatches_(t[Mt].base_,n,e.patches_,e.inversePatches_)):n=To(e,t,[]),mc(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==vf?n:void 0}function To(n,e,t){if(Jo(e))return e;const r=e[Mt];if(!r)return Eo(e,(i,s)=>hh(n,r,e,i,s,t)),e;if(r.scope_!==n)return e;if(!r.modified_)return bo(n,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let s=i,o=!1;r.type_===3&&(s=new Set(i),i.clear(),o=!0),Eo(s,(c,l)=>hh(n,r,i,c,l,t,o)),bo(n,i,!1),t&&n.patches_&&Er("Patches").generatePatches_(r,t,n.patches_,n.inversePatches_)}return r.copy_}function hh(n,e,t,r,i,s,o){if(Yn(i)){const c=s&&e&&e.type_!==3&&!fc(e.assigned_,r)?s.concat(r):void 0,l=To(n,i,c);if(Ef(t,r,l),Yn(l))n.canAutoFreeze_=!1;else return}else o&&t.add(i);if(bn(i)&&!Jo(i)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;To(n,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&bo(n,i)}}function bo(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&al(e,t)}function Vv(n,e){const t=Array.isArray(n),r={type_:t?1:0,scope_:e?e.scope_:Tf(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,s=cl;t&&(i=[r],s=ts);const{revoke:o,proxy:c}=Proxy.revocable(i,s);return r.draft_=c,r.revoke_=o,c}var cl={get(n,e){if(e===Mt)return n;const t=dr(n);if(!fc(t,e))return Fv(n,t,e);const r=t[e];return n.finalized_||!bn(r)?r:r===Ma(n.base_,e)?(Va(n),n.copy_[e]=_c(r,n)):r},has(n,e){return e in dr(n)},ownKeys(n){return Reflect.ownKeys(dr(n))},set(n,e,t){const r=bf(dr(n),e);if(r!=null&&r.set)return r.set.call(n.draft_,t),!0;if(!n.modified_){const i=Ma(dr(n),e),s=i==null?void 0:i[Mt];if(s&&s.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(Dv(t,i)&&(t!==void 0||fc(n.base_,e)))return!0;Va(n),yc(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return Ma(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,Va(n),yc(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=dr(n),r=Reflect.getOwnPropertyDescriptor(t,e);return r&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:r.enumerable,value:t[e]}},defineProperty(){Ht(11)},getPrototypeOf(n){return ti(n.base_)},setPrototypeOf(){Ht(12)}},ts={};Eo(cl,(n,e)=>{ts[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ts.deleteProperty=function(n,e){return ts.set.call(this,n,e,void 0)};ts.set=function(n,e,t){return cl.set.call(this,n[0],e,t,n[0])};function Ma(n,e){const t=n[Mt];return(t?dr(t):n)[e]}function Fv(n,e,t){var i;const r=bf(e,t);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(n.draft_):void 0}function bf(n,e){if(!(e in n))return;let t=ti(n);for(;t;){const r=Object.getOwnPropertyDescriptor(t,e);if(r)return r;t=ti(t)}}function yc(n){n.modified_||(n.modified_=!0,n.parent_&&yc(n.parent_))}function Va(n){n.copy_||(n.copy_=pc(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var Uv=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if(typeof e=="function"&&typeof t!="function"){const s=t;t=e;const o=this;return function(l=s,...u){return o.produce(l,d=>t.call(this,d,...u))}}typeof t!="function"&&Ht(6),r!==void 0&&typeof r!="function"&&Ht(7);let i;if(bn(e)){const s=lh(this),o=_c(e,void 0);let c=!0;try{i=t(o),c=!1}finally{c?mc(s):gc(s)}return ch(s,r),uh(i,s)}else if(!e||typeof e!="object"){if(i=t(e),i===void 0&&(i=e),i===vf&&(i=void 0),this.autoFreeze_&&al(i,!0),r){const s=[],o=[];Er("Patches").generateReplacementPatches_(e,i,s,o),r(s,o)}return i}else Ht(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(o,...c)=>this.produceWithPatches(o,l=>e(l,...c));let r,i;return[this.produce(e,t,(o,c)=>{r=o,i=c}),r,i]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){bn(n)||Ht(8),Yn(n)&&(n=If(n));const e=lh(this),t=_c(n,void 0);return t[Mt].isManual_=!0,gc(e),t}finishDraft(n,e){const t=n&&n[Mt];(!t||!t.isManual_)&&Ht(9);const{scope_:r}=t;return ch(r,e),uh(void 0,r)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const i=e[t];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}t>-1&&(e=e.slice(t+1));const r=Er("Patches").applyPatches_;return Yn(n)?r(n,e):this.produce(n,i=>r(i,e))}};function _c(n,e){const t=Go(n)?Er("MapSet").proxyMap_(n,e):Qo(n)?Er("MapSet").proxySet_(n,e):Vv(n,e);return(e?e.scope_:Tf()).drafts_.push(t),t}function If(n){return Yn(n)||Ht(10,n),Sf(n)}function Sf(n){if(!bn(n)||Jo(n))return n;const e=n[Mt];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=pc(n,e.scope_.immer_.useStrictShallowCopy_)}else t=pc(n,!0);return Eo(t,(r,i)=>{Ef(t,r,Sf(i))}),e&&(e.finalized_=!1),t}var Vt=new Uv,Rf=Vt.produce;Vt.produceWithPatches.bind(Vt);Vt.setAutoFreeze.bind(Vt);Vt.setUseStrictShallowCopy.bind(Vt);Vt.applyPatches.bind(Vt);Vt.createDraft.bind(Vt);Vt.finishDraft.bind(Vt);function jv(n,e=`expected a function, instead received ${typeof n}`){if(typeof n!="function")throw new TypeError(e)}function Bv(n,e=`expected an object, instead received ${typeof n}`){if(typeof n!="object")throw new TypeError(e)}function zv(n,e="expected all items to be functions, instead received the following types: "){if(!n.every(t=>typeof t=="function")){const t=n.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${e}[${t}]`)}}var dh=n=>Array.isArray(n)?n:[n];function $v(n){const e=Array.isArray(n[0])?n[0]:n;return zv(e,"createSelector expects all input-selectors to be functions, but received the following types: "),e}function qv(n,e){const t=[],{length:r}=n;for(let i=0;i<r;i++)t.push(n[i].apply(null,e));return t}var Hv=class{constructor(n){this.value=n}deref(){return this.value}},Wv=typeof WeakRef<"u"?WeakRef:Hv,Kv=0,fh=1;function qs(){return{s:Kv,v:void 0,o:null,p:null}}function ll(n,e={}){let t=qs();const{resultEqualityCheck:r}=e;let i,s=0;function o(){var f;let c=t;const{length:l}=arguments;for(let m=0,E=l;m<E;m++){const w=arguments[m];if(typeof w=="function"||typeof w=="object"&&w!==null){let R=c.o;R===null&&(c.o=R=new WeakMap);const C=R.get(w);C===void 0?(c=qs(),R.set(w,c)):c=C}else{let R=c.p;R===null&&(c.p=R=new Map);const C=R.get(w);C===void 0?(c=qs(),R.set(w,c)):c=C}}const u=c;let d;if(c.s===fh)d=c.v;else if(d=n.apply(null,arguments),s++,r){const m=((f=i==null?void 0:i.deref)==null?void 0:f.call(i))??i;m!=null&&r(m,d)&&(d=m,s!==0&&s--),i=typeof d=="object"&&d!==null||typeof d=="function"?new Wv(d):d}return u.s=fh,u.v=d,d}return o.clearCache=()=>{t=qs(),o.resetResultsCount()},o.resultsCount=()=>s,o.resetResultsCount=()=>{s=0},o}function Af(n,...e){const t=typeof n=="function"?{memoize:n,memoizeOptions:e}:n,r=(...i)=>{let s=0,o=0,c,l={},u=i.pop();typeof u=="object"&&(l=u,u=i.pop()),jv(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const d={...t,...l},{memoize:f,memoizeOptions:m=[],argsMemoize:E=ll,argsMemoizeOptions:w=[],devModeChecks:R={}}=d,C=dh(m),F=dh(w),M=$v(i),L=f(function(){return s++,u.apply(null,arguments)},...C),V=E(function(){o++;const P=qv(M,arguments);return c=L.apply(null,P),c},...F);return Object.assign(V,{resultFunc:u,memoizedResultFunc:L,dependencies:M,dependencyRecomputations:()=>o,resetDependencyRecomputations:()=>{o=0},lastResult:()=>c,recomputations:()=>s,resetRecomputations:()=>{s=0},memoize:f,argsMemoize:E})};return Object.assign(r,{withTypes:()=>r}),r}var Gv=Af(ll),Qv=Object.assign((n,e=Gv)=>{Bv(n,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof n}`);const t=Object.keys(n),r=t.map(s=>n[s]);return e(r,(...s)=>s.reduce((o,c,l)=>(o[t[l]]=c,o),{}))},{withTypes:()=>Qv});function Pf(n){return({dispatch:t,getState:r})=>i=>s=>typeof s=="function"?s(t,r,n):i(s)}var Jv=Pf(),Yv=Pf,Xv=(...n)=>{const e=Af(...n),t=Object.assign((...r)=>{const i=e(...r),s=(o,...c)=>i(Yn(o)?If(o):o,...c);return Object.assign(s,i),s},{withTypes:()=>t});return t};Xv(ll);var Zv=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?wo:wo.apply(null,arguments)},ew=n=>n&&typeof n.match=="function";function wn(n,e){function t(...r){if(e){let i=e(...r);if(!i)throw new Error(St(0));return{type:n,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:n,payload:r[0]}}return t.toString=()=>`${n}`,t.type=n,t.match=r=>kv(r)&&r.type===n,t}var Cf=class Bi extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Bi.prototype)}static get[Symbol.species](){return Bi}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Bi(...e[0].concat(this)):new Bi(...e.concat(this))}};function ph(n){return bn(n)?Rf(n,()=>{}):n}function mh(n,e,t){if(n.has(e)){let i=n.get(e);return t.update&&(i=t.update(i,e,n),n.set(e,i)),i}if(!t.insert)throw new Error(St(10));const r=t.insert(e,n);return n.set(e,r),r}function tw(n){return typeof n=="boolean"}var nw=()=>function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new Cf;return t&&(tw(t)?o.push(Jv):o.push(Yv(t.extraArgument))),o},rw="RTK_autoBatch",kf=n=>e=>{setTimeout(e,n)},iw=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:kf(10),sw=(n={type:"raf"})=>e=>(...t)=>{const r=e(...t);let i=!0,s=!1,o=!1;const c=new Set,l=n.type==="tick"?queueMicrotask:n.type==="raf"?iw:n.type==="callback"?n.queueNotification:kf(n.timeout),u=()=>{o=!1,s&&(s=!1,c.forEach(d=>d()))};return Object.assign({},r,{subscribe(d){const f=()=>i&&d(),m=r.subscribe(f);return c.add(d),()=>{m(),c.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[rw]),s=!i,s&&(o||(o=!0,l(u))),r.dispatch(d)}finally{i=!0}}})},ow=n=>function(t){const{autoBatch:r=!0}=t??{};let i=new Cf(n);return r&&i.push(sw(typeof r=="object"?r:void 0)),i},aw=!0;function cw(n){const e=nw(),{reducer:t=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=n||{};let c;if(typeof t=="function")c=t;else if(sl(t))c=_f(t);else throw new Error(St(1));let l;typeof r=="function"?l=r(e):l=e();let u=wo;i&&(u=Zv({trace:!aw,...typeof i=="object"&&i}));const d=Cv(...l),f=ow(d);let m=typeof o=="function"?o(f):f();const E=u(...m);return ol(c,s,E)}function Of(n){const e={},t=[];let r;const i={addCase(s,o){const c=typeof s=="string"?s:s.type;if(!c)throw new Error(St(28));if(c in e)throw new Error(St(29));return e[c]=o,i},addMatcher(s,o){return t.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return n(i),[e,t,r]}function lw(n){return typeof n=="function"}function uw(n,e){let[t,r,i]=Of(e),s;if(lw(n))s=()=>ph(n());else{const c=ph(n);s=()=>c}function o(c=s(),l){let u=[t[l.type],...r.filter(({matcher:d})=>d(l)).map(({reducer:d})=>d)];return u.filter(d=>!!d).length===0&&(u=[i]),u.reduce((d,f)=>{if(f)if(Yn(d)){const E=f(d,l);return E===void 0?d:E}else{if(bn(d))return Rf(d,m=>f(m,l));{const m=f(d,l);if(m===void 0){if(d===null)return d;throw new Error(St(9))}return m}}return d},c)}return o.getInitialState=s,o}var hw="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Df=(n=21)=>{let e="",t=n;for(;t--;)e+=hw[Math.random()*64|0];return e},dw=(n,e)=>ew(n)?n.match(e):n(e);function fw(...n){return e=>n.some(t=>dw(t,e))}var pw=["name","message","stack","code"],Fa=class{constructor(n,e){Oa(this,"_type");this.payload=n,this.meta=e}},gh=class{constructor(n,e){Oa(this,"_type");this.payload=n,this.meta=e}},mw=n=>{if(typeof n=="object"&&n!==null){const e={};for(const t of pw)typeof n[t]=="string"&&(e[t]=n[t]);return e}return{message:String(n)}},kn=(()=>{function n(e,t,r){const i=wn(e+"/fulfilled",(l,u,d,f)=>({payload:l,meta:{...f||{},arg:d,requestId:u,requestStatus:"fulfilled"}})),s=wn(e+"/pending",(l,u,d)=>({payload:void 0,meta:{...d||{},arg:u,requestId:l,requestStatus:"pending"}})),o=wn(e+"/rejected",(l,u,d,f,m)=>({payload:f,error:(r&&r.serializeError||mw)(l||"Rejected"),meta:{...m||{},arg:d,requestId:u,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function c(l){return(u,d,f)=>{const m=r!=null&&r.idGenerator?r.idGenerator(l):Df(),E=new AbortController;let w,R;function C(M){R=M,E.abort()}const F=async function(){var V,G;let M;try{let P=(V=r==null?void 0:r.condition)==null?void 0:V.call(r,l,{getState:d,extra:f});if(yw(P)&&(P=await P),P===!1||E.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const S=new Promise((g,_)=>{w=()=>{_({name:"AbortError",message:R||"Aborted"})},E.signal.addEventListener("abort",w)});u(s(m,l,(G=r==null?void 0:r.getPendingMeta)==null?void 0:G.call(r,{requestId:m,arg:l},{getState:d,extra:f}))),M=await Promise.race([S,Promise.resolve(t(l,{dispatch:u,getState:d,extra:f,requestId:m,signal:E.signal,abort:C,rejectWithValue:(g,_)=>new Fa(g,_),fulfillWithValue:(g,_)=>new gh(g,_)})).then(g=>{if(g instanceof Fa)throw g;return g instanceof gh?i(g.payload,m,l,g.meta):i(g,m,l)})])}catch(P){M=P instanceof Fa?o(null,m,l,P.payload,P.meta):o(P,m,l)}finally{w&&E.signal.removeEventListener("abort",w)}return r&&!r.dispatchConditionRejection&&o.match(M)&&M.meta.condition||u(M),M}();return Object.assign(F,{abort:C,requestId:m,arg:l,unwrap(){return F.then(gw)}})}}return Object.assign(c,{pending:s,rejected:o,fulfilled:i,settled:fw(o,i),typePrefix:e})}return n.withTypes=()=>n,n})();function gw(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}function yw(n){return n!==null&&typeof n=="object"&&typeof n.then=="function"}var _w=Symbol.for("rtk-slice-createasyncthunk");function vw(n,e){return`${n}/${e}`}function ww({creators:n}={}){var t;const e=(t=n==null?void 0:n.asyncThunk)==null?void 0:t[_w];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(St(11));typeof process<"u";const c=(typeof i.reducers=="function"?i.reducers(Tw()):i.reducers)||{},l=Object.keys(c),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(L,V){const G=typeof L=="string"?L:L.type;if(!G)throw new Error(St(12));if(G in u.sliceCaseReducersByType)throw new Error(St(13));return u.sliceCaseReducersByType[G]=V,d},addMatcher(L,V){return u.sliceMatchers.push({matcher:L,reducer:V}),d},exposeAction(L,V){return u.actionCreators[L]=V,d},exposeCaseReducer(L,V){return u.sliceCaseReducersByName[L]=V,d}};l.forEach(L=>{const V=c[L],G={reducerName:L,type:vw(s,L),createNotation:typeof i.reducers=="function"};Iw(V)?Rw(G,V,d,e):bw(G,V,d)});function f(){const[L={},V=[],G=void 0]=typeof i.extraReducers=="function"?Of(i.extraReducers):[i.extraReducers],P={...L,...u.sliceCaseReducersByType};return uw(i.initialState,S=>{for(let g in P)S.addCase(g,P[g]);for(let g of u.sliceMatchers)S.addMatcher(g.matcher,g.reducer);for(let g of V)S.addMatcher(g.matcher,g.reducer);G&&S.addDefaultCase(G)})}const m=L=>L,E=new Map;let w;function R(L,V){return w||(w=f()),w(L,V)}function C(){return w||(w=f()),w.getInitialState()}function F(L,V=!1){function G(S){let g=S[L];return typeof g>"u"&&V&&(g=C()),g}function P(S=m){const g=mh(E,V,{insert:()=>new WeakMap});return mh(g,S,{insert:()=>{const _={};for(const[I,T]of Object.entries(i.selectors??{}))_[I]=Ew(T,S,C,V);return _}})}return{reducerPath:L,getSelectors:P,get selectors(){return P(G)},selectSlice:G}}const M={name:s,reducer:R,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:C,...F(o),injectInto(L,{reducerPath:V,...G}={}){const P=V??o;return L.inject({reducerPath:P,reducer:R},G),{...M,...F(P,!0)}}};return M}}function Ew(n,e,t,r){function i(s,...o){let c=e(s);return typeof c>"u"&&r&&(c=t()),n(c,...o)}return i.unwrapped=n,i}var Gt=ww();function Tw(){function n(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return n.withTypes=()=>n,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,t){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}},asyncThunk:n}}function bw({type:n,reducerName:e,createNotation:t},r,i){let s,o;if("reducer"in r){if(t&&!Sw(r))throw new Error(St(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(n,s).exposeCaseReducer(e,s).exposeAction(e,o?wn(n,o):wn(n))}function Iw(n){return n._reducerDefinitionType==="asyncThunk"}function Sw(n){return n._reducerDefinitionType==="reducerWithPrepare"}function Rw({type:n,reducerName:e},t,r,i){if(!i)throw new Error(St(18));const{payloadCreator:s,fulfilled:o,pending:c,rejected:l,settled:u,options:d}=t,f=i(n,s,d);r.exposeAction(e,f),o&&r.addCase(f.fulfilled,o),c&&r.addCase(f.pending,c),l&&r.addCase(f.rejected,l),u&&r.addMatcher(f.settled,u),r.exposeCaseReducer(e,{fulfilled:o||Hs,pending:c||Hs,rejected:l||Hs,settled:u||Hs})}function Hs(){}var Aw=(n,e)=>{if(typeof n!="function")throw new Error(St(32))},ul="listenerMiddleware",Pw=n=>{let{type:e,actionCreator:t,matcher:r,predicate:i,effect:s}=n;if(e)i=wn(e).match;else if(t)e=t.type,i=t.match;else if(r)i=r;else if(!i)throw new Error(St(21));return Aw(s),{predicate:i,type:e,effect:s}},Cw=Object.assign(n=>{const{type:e,predicate:t,effect:r}=Pw(n);return{id:Df(),effect:r,type:e,predicate:t,pending:new Set,unsubscribe:()=>{throw new Error(St(22))}}},{withTypes:()=>Cw}),kw=Object.assign(wn(`${ul}/add`),{withTypes:()=>kw});wn(`${ul}/removeAll`);var Ow=Object.assign(wn(`${ul}/remove`),{withTypes:()=>Ow});function St(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var yh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Dw=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],c=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,c=o?n[i+1]:0,l=i+2<n.length,u=l?n[i+2]:0,d=s>>2,f=(s&3)<<4|c>>4;let m=(c&15)<<2|u>>6,E=u&63;l||(E=64,o||(m=64)),r.push(t[d],t[f],t[m],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dw(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const u=i<n.length?t[n.charAt(i)]:64;++i;const f=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||c==null||u==null||f==null)throw new xw;const m=s<<2|c>>4;if(r.push(m),u!==64){const E=c<<4&240|u>>2;if(r.push(E),f!==64){const w=u<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nw=function(n){const e=xf(n);return Nf.encodeByteArray(e,!0)},Io=function(n){return Nw(n).replace(/\./g,"")},Lf=function(n){try{return Nf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mw=()=>Lw().__FIREBASE_DEFAULTS__,Vw=()=>{if(typeof process>"u"||typeof yh>"u")return;const n=yh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fw=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Lf(n[1]);return e&&JSON.parse(e)},Yo=()=>{try{return Mw()||Vw()||Fw()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mf=n=>{var e,t;return(t=(e=Yo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Uw=n=>{const e=Mf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Vf=()=>{var n;return(n=Yo())===null||n===void 0?void 0:n.config},Ff=n=>{var e;return(e=Yo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Bw(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Io(JSON.stringify(t)),Io(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function $w(){var n;const e=(n=Yo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function qw(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ww(){const n=ut();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Kw(){return!$w()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Gw(){try{return typeof indexedDB=="object"}catch{return!1}}function Qw(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="FirebaseError";class On extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Jw,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gs.prototype.create)}}class gs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Yw(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new On(i,c,r)}}function Yw(n,e){return n.replace(Xw,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Xw=/\{\$([^}]+)}/g;function Zw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function So(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(_h(s)&&_h(o)){if(!So(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function _h(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $i(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function eE(n,e){const t=new tE(n,e);return t.subscribe.bind(t)}class tE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");nE(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ua),i.error===void 0&&(i.error=Ua),i.complete===void 0&&(i.complete=Ua);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ua(){}/**
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
 */function At(n){return n&&n._delegate?n._delegate:n}class Tr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class rE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new jw;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sE(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iE(n){return n===fr?void 0:n}function sE(n){return n.instantiationMode==="EAGER"}/**
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
 */class oE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pe||(pe={}));const aE={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},cE=pe.INFO,lE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},uE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=lE[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=cE,this._logHandler=uE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const hE=(n,e)=>e.some(t=>n instanceof t);let vh,wh;function dE(){return vh||(vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fE(){return wh||(wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uf=new WeakMap,vc=new WeakMap,jf=new WeakMap,ja=new WeakMap,dl=new WeakMap;function pE(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Wn(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Uf.set(t,n)}).catch(()=>{}),dl.set(e,n),e}function mE(n){if(vc.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});vc.set(n,e)}let wc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gE(n){wc=n(wc)}function yE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ba(this),e,...t);return jf.set(r,e.sort?e.sort():[e]),Wn(r)}:fE().includes(n)?function(...e){return n.apply(Ba(this),e),Wn(Uf.get(this))}:function(...e){return Wn(n.apply(Ba(this),e))}}function _E(n){return typeof n=="function"?yE(n):(n instanceof IDBTransaction&&mE(n),hE(n,dE())?new Proxy(n,wc):n)}function Wn(n){if(n instanceof IDBRequest)return pE(n);if(ja.has(n))return ja.get(n);const e=_E(n);return e!==n&&(ja.set(n,e),dl.set(e,n)),e}const Ba=n=>dl.get(n);function vE(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),c=Wn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wn(o.result),l.oldVersion,l.newVersion,Wn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const wE=["get","getKey","getAll","getAllKeys","count"],EE=["put","add","delete","clear"],za=new Map;function Eh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(za.get(e))return za.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=EE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wE.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),i&&l.done]))[0]};return za.set(e,s),s}gE(n=>({...n,get:(e,t,r)=>Eh(e,t)||n.get(e,t,r),has:(e,t)=>!!Eh(e,t)||n.has(e,t)}));/**
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
 */class TE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function bE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",Th="0.10.7";/**
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
 */const br=new hl("@firebase/app"),IE="@firebase/app-compat",SE="@firebase/analytics-compat",RE="@firebase/analytics",AE="@firebase/app-check-compat",PE="@firebase/app-check",CE="@firebase/auth",kE="@firebase/auth-compat",OE="@firebase/database",DE="@firebase/database-compat",xE="@firebase/functions",NE="@firebase/functions-compat",LE="@firebase/installations",ME="@firebase/installations-compat",VE="@firebase/messaging",FE="@firebase/messaging-compat",UE="@firebase/performance",jE="@firebase/performance-compat",BE="@firebase/remote-config",zE="@firebase/remote-config-compat",$E="@firebase/storage",qE="@firebase/storage-compat",HE="@firebase/firestore",WE="@firebase/vertexai-preview",KE="@firebase/firestore-compat",GE="firebase",QE="10.12.4";/**
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
 */const Tc="[DEFAULT]",JE={[Ec]:"fire-core",[IE]:"fire-core-compat",[RE]:"fire-analytics",[SE]:"fire-analytics-compat",[PE]:"fire-app-check",[AE]:"fire-app-check-compat",[CE]:"fire-auth",[kE]:"fire-auth-compat",[OE]:"fire-rtdb",[DE]:"fire-rtdb-compat",[xE]:"fire-fn",[NE]:"fire-fn-compat",[LE]:"fire-iid",[ME]:"fire-iid-compat",[VE]:"fire-fcm",[FE]:"fire-fcm-compat",[UE]:"fire-perf",[jE]:"fire-perf-compat",[BE]:"fire-rc",[zE]:"fire-rc-compat",[$E]:"fire-gcs",[qE]:"fire-gcs-compat",[HE]:"fire-fst",[KE]:"fire-fst-compat",[WE]:"fire-vertex","fire-js":"fire-js",[GE]:"fire-js-all"};/**
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
 */const Ro=new Map,YE=new Map,bc=new Map;function bh(n,e){try{n.container.addComponent(e)}catch(t){br.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ni(n){const e=n.name;if(bc.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;bc.set(e,n);for(const t of Ro.values())bh(t,n);for(const t of YE.values())bh(t,n);return!0}function fl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xt(n){return n.settings!==void 0}/**
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
 */const XE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kn=new gs("app","Firebase",XE);/**
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
 */class ZE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kn.create("app-deleted",{appName:this._name})}}/**
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
 */const hi=QE;function Bf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Kn.create("bad-app-name",{appName:String(i)});if(t||(t=Vf()),!t)throw Kn.create("no-options");const s=Ro.get(i);if(s){if(So(t,s.options)&&So(r,s.config))return s;throw Kn.create("duplicate-app",{appName:i})}const o=new oE(i);for(const l of bc.values())o.addComponent(l);const c=new ZE(t,r,o);return Ro.set(i,c),c}function zf(n=Tc){const e=Ro.get(n);if(!e&&n===Tc&&Vf())return Bf();if(!e)throw Kn.create("no-app",{appName:n});return e}function Gn(n,e,t){var r;let i=(r=JE[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(c.join(" "));return}ni(new Tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const eT="firebase-heartbeat-database",tT=1,ns="firebase-heartbeat-store";let $a=null;function $f(){return $a||($a=vE(eT,tT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ns)}catch(t){console.warn(t)}}}}).catch(n=>{throw Kn.create("idb-open",{originalErrorMessage:n.message})})),$a}async function nT(n){try{const t=(await $f()).transaction(ns),r=await t.objectStore(ns).get(qf(n));return await t.done,r}catch(e){if(e instanceof On)br.warn(e.message);else{const t=Kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(t.message)}}}async function Ih(n,e){try{const r=(await $f()).transaction(ns,"readwrite");await r.objectStore(ns).put(e,qf(n)),await r.done}catch(t){if(t instanceof On)br.warn(t.message);else{const r=Kn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});br.warn(r.message)}}}function qf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rT=1024,iT=30*24*60*60*1e3;class sT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new aT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=iT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Sh(),{heartbeatsToSend:r,unsentEntries:i}=oT(this._heartbeatsCache.heartbeats),s=Io(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Sh(){return new Date().toISOString().substring(0,10)}function oT(n,e=rT){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Rh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Rh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class aT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gw()?Qw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ih(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ih(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Rh(n){return Io(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function cT(n){ni(new Tr("platform-logger",e=>new TE(e),"PRIVATE")),ni(new Tr("heartbeat",e=>new sT(e),"PRIVATE")),Gn(Ec,Th,n),Gn(Ec,Th,"esm2017"),Gn("fire-js","")}cT("");var lT="firebase",uT="10.12.4";/**
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
 */Gn(lT,uT,"app");function pl(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Hf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hT=Hf,Wf=new gs("auth","Firebase",Hf());/**
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
 */const Ao=new hl("@firebase/auth");function dT(n,...e){Ao.logLevel<=pe.WARN&&Ao.warn(`Auth (${hi}): ${n}`,...e)}function eo(n,...e){Ao.logLevel<=pe.ERROR&&Ao.error(`Auth (${hi}): ${n}`,...e)}/**
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
 */function Kt(n,...e){throw ml(n,...e)}function Zt(n,...e){return ml(n,...e)}function Kf(n,e,t){const r=Object.assign(Object.assign({},hT()),{[e]:t});return new gs("auth","Firebase",r).create(e,{appName:n.name})}function En(n){return Kf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ml(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Wf.create(n,...e)}function ne(n,e,...t){if(!n)throw ml(e,...t)}function gn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw eo(e),new Error(e)}function In(n,e){n||gn(e)}/**
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
 */function Ic(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fT(){return Ah()==="http:"||Ah()==="https:"}function Ah(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function pT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fT()||qw()||"connection"in navigator)?navigator.onLine:!0}function mT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class _s{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=zw()||Hw()}get(){return pT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gl(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Gf{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const gT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yT=new _s(3e4,6e4);function rr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ir(n,e,t,r,i={}){return Qf(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=ys(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Gf.fetch()(Jf(n,n.config.apiHost,t,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Qf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},gT),e);try{const i=new vT(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ws(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ws(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ws(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ws(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Kf(n,d,u);Kt(n,d)}}catch(i){if(i instanceof On)throw i;Kt(n,"network-request-failed",{message:String(i)})}}async function vs(n,e,t,r,i={}){const s=await ir(n,e,t,r,i);return"mfaPendingCredential"in s&&Kt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Jf(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?gl(n.config,i):`${n.config.apiScheme}://${i}`}function _T(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),yT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ws(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Zt(n,e,r);return i.customData._tokenResponse=t,i}function Ph(n){return n!==void 0&&n.enterprise!==void 0}class wT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return _T(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ET(n,e){return ir(n,"GET","/v2/recaptchaConfig",rr(n,e))}/**
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
 */async function TT(n,e){return ir(n,"POST","/v1/accounts:delete",e)}async function Yf(n,e){return ir(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ki(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bT(n,e=!1){const t=At(n),r=await t.getIdToken(e),i=yl(r);ne(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ki(qa(i.auth_time)),issuedAtTime:Ki(qa(i.iat)),expirationTime:Ki(qa(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qa(n){return Number(n)*1e3}function yl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Lf(t);return i?JSON.parse(i):(eo("Failed to decode base64 JWT payload"),null)}catch(i){return eo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ch(n){const e=yl(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function rs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof On&&IT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function IT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ST{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Po(n){var e;const t=n.auth,r=await n.getIdToken(),i=await rs(n,Yf(t,{idToken:r}));ne(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Xf(s.providerUserInfo):[],c=AT(n.providerData,o),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Sc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,f)}async function RT(n){const e=At(n);await Po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AT(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Xf(n){return n.map(e=>{var{providerId:t}=e,r=pl(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function PT(n,e){const t=await Qf(n,{},async()=>{const r=ys({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Jf(n,i,"/v1/token",`key=${s}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Gf.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function CT(n,e){return ir(n,"POST","/v2/accounts:revokeToken",rr(n,e))}/**
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
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ch(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Ch(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await PT(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Qr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ne(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Fn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=pl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ST(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await rs(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return bT(this,e)}reload(){return RT(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await rs(this,TT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,c,l,u,d;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(i=t.email)!==null&&i!==void 0?i:void 0,E=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,F=(u=t.createdAt)!==null&&u!==void 0?u:void 0,M=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:L,emailVerified:V,isAnonymous:G,providerData:P,stsTokenManager:S}=t;ne(L&&S,e,"internal-error");const g=Qr.fromJSON(this.name,S);ne(typeof L=="string",e,"internal-error"),Fn(f,e.name),Fn(m,e.name),ne(typeof V=="boolean",e,"internal-error"),ne(typeof G=="boolean",e,"internal-error"),Fn(E,e.name),Fn(w,e.name),Fn(R,e.name),Fn(C,e.name),Fn(F,e.name),Fn(M,e.name);const _=new yn({uid:L,auth:e,email:m,emailVerified:V,displayName:f,isAnonymous:G,photoURL:w,phoneNumber:E,tenantId:R,stsTokenManager:g,createdAt:F,lastLoginAt:M});return P&&Array.isArray(P)&&(_.providerData=P.map(I=>Object.assign({},I))),C&&(_._redirectEventId=C),_}static async _fromIdTokenResponse(e,t,r=!1){const i=new Qr;i.updateFromServerResponse(t);const s=new yn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Po(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ne(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Xf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Qr;c.updateFromIdToken(r);const l=new yn({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const kh=new Map;function _n(n){In(n instanceof Function,"Expected a class definition");let e=kh.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kh.set(n,e),e)}/**
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
 */class Zf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Zf.type="NONE";const Oh=Zf;/**
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
 */function to(n,e,t){return`firebase:${n}:${e}:${t}`}class Jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=to(this.userKey,i.apiKey,s),this.fullPersistenceKey=to("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Jr(_n(Oh),e,r);const i=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||_n(Oh);const o=to(r,e.config.apiKey,e.name);let c=null;for(const u of t)try{const d=await u._get(o);if(d){const f=yn._fromJSON(e,d);u!==s&&(c=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Jr(s,e,r):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Jr(s,e,r))}}/**
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
 */function Dh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(np(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ep(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ip(e))return"Blackberry";if(sp(e))return"Webos";if(_l(e))return"Safari";if((e.includes("chrome/")||tp(e))&&!e.includes("edge/"))return"Chrome";if(rp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ep(n=ut()){return/firefox\//i.test(n)}function _l(n=ut()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tp(n=ut()){return/crios\//i.test(n)}function np(n=ut()){return/iemobile/i.test(n)}function rp(n=ut()){return/android/i.test(n)}function ip(n=ut()){return/blackberry/i.test(n)}function sp(n=ut()){return/webos/i.test(n)}function Xo(n=ut()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kT(n=ut()){var e;return Xo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OT(){return Ww()&&document.documentMode===10}function op(n=ut()){return Xo(n)||rp(n)||sp(n)||ip(n)||/windows phone/i.test(n)||np(n)}function DT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ap(n,e=[]){let t;switch(n){case"Browser":t=Dh(ut());break;case"Worker":t=`${Dh(ut())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hi}/${r}`}/**
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
 */class xT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function NT(n,e={}){return ir(n,"GET","/v2/passwordPolicy",rr(n,e))}/**
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
 */const LT=6;class MT{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:LT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class VT{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xh(this),this.idTokenSubscription=new xh(this),this.beforeStateQueue=new xT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Yf(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Po(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(En(this));const t=e?At(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await NT(this),t=new MT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await CT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Jr.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ap(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&dT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Or(n){return At(n)}class xh{constructor(e){this.auth=e,this.observer=null,this.addObserver=eE(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FT(n){Zo=n}function cp(n){return Zo.loadJS(n)}function UT(){return Zo.recaptchaEnterpriseScript}function jT(){return Zo.gapiScript}function BT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const zT="recaptcha-enterprise",$T="NO_RECAPTCHA";class qT{constructor(e){this.type=zT,this.auth=Or(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{ET(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new wT(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){const l=window.grecaptcha;Ph(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o($T)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(c=>{if(!t&&Ph(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=UT();l.length!==0&&(l+=c),cp(l).then(()=>{i(c,s,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Nh(n,e,t,r=!1){const i=new qT(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rc(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Nh(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Nh(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
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
 */function HT(n,e){const t=fl(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(So(s,e??{}))return i;Kt(i,"already-initialized")}return t.initialize({options:e})}function WT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_n);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function KT(n,e,t){const r=Or(n);ne(r._canInitEmulator,r,"emulator-config-failed"),ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lp(e),{host:o,port:c}=GT(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),QT()}function lp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function GT(n){const e=lp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lh(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Lh(o)}}}function Lh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function QT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class vl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,t){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function JT(n,e){return ir(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function YT(n,e){return vs(n,"POST","/v1/accounts:signInWithPassword",rr(n,e))}/**
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
 */async function XT(n,e){return vs(n,"POST","/v1/accounts:signInWithEmailLink",rr(n,e))}async function ZT(n,e){return vs(n,"POST","/v1/accounts:signInWithEmailLink",rr(n,e))}/**
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
 */class is extends vl{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new is(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new is(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,t,"signInWithPassword",YT);case"emailLink":return XT(e,{email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rc(e,r,"signUpPassword",JT);case"emailLink":return ZT(e,{idToken:t,email:this._email,oobCode:this._password});default:Kt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Yr(n,e){return vs(n,"POST","/v1/accounts:signInWithIdp",rr(n,e))}/**
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
 */const e0="http://localhost";class Ir extends vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Kt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=pl(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Yr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Yr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yr(e,t)}buildRequest(){const e={requestUri:e0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ys(t)}return e}}/**
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
 */function t0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n0(n){const e=zi($i(n)).link,t=e?zi($i(e)).deep_link_id:null,r=zi($i(n)).deep_link_id;return(r?zi($i(r)).link:null)||r||t||e||n}class wl{constructor(e){var t,r,i,s,o,c;const l=zi($i(e)),u=(t=l.apiKey)!==null&&t!==void 0?t:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=t0((i=l.mode)!==null&&i!==void 0?i:null);ne(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=n0(e);try{return new wl(t)}catch{return null}}}/**
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
 */class di{constructor(){this.providerId=di.PROVIDER_ID}static credential(e,t){return is._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=wl.parseLink(t);return ne(r,"argument-error"),is._fromEmailAndCode(e,r.code,r.tenantId)}}di.PROVIDER_ID="password";di.EMAIL_PASSWORD_SIGN_IN_METHOD="password";di.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class up{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ws extends up{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bn extends ws{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bn.PROVIDER_ID="facebook.com";/**
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
 */class zn extends ws{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ir._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return zn.credential(t,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
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
 */class $n extends ws{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
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
 */class qn extends ws{constructor(){super("twitter.com")}static credential(e,t){return Ir._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return qn.credential(t,r)}catch{return null}}}qn.TWITTER_SIGN_IN_METHOD="twitter.com";qn.PROVIDER_ID="twitter.com";/**
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
 */async function r0(n,e){return vs(n,"POST","/v1/accounts:signUp",rr(n,e))}/**
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
 */class Sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await yn._fromIdTokenResponse(e,r,i),o=Mh(r);return new Sr({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Mh(r);return new Sr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Mh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Co extends On{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Co(e,t,r,i)}}function hp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(n,s,e,r):s})}async function i0(n,e,t=!1){const r=await rs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Sr._forOperation(n,"link",r)}/**
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
 */async function s0(n,e,t=!1){const{auth:r}=n;if(Xt(r.app))return Promise.reject(En(r));const i="reauthenticate";try{const s=await rs(n,hp(r,i,e,n),t);ne(s.idToken,r,"internal-error");const o=yl(s.idToken);ne(o,r,"internal-error");const{sub:c}=o;return ne(n.uid===c,r,"user-mismatch"),Sr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Kt(r,"user-mismatch"),s}}/**
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
 */async function dp(n,e,t=!1){if(Xt(n.app))return Promise.reject(En(n));const r="signIn",i=await hp(n,r,e),s=await Sr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function o0(n,e){return dp(Or(n),e)}/**
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
 */async function fp(n){const e=Or(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function a0(n,e,t){if(Xt(n.app))return Promise.reject(En(n));const r=Or(n),o=await Rc(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",r0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&fp(n),l}),c=await Sr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function c0(n,e,t){return Xt(n.app)?Promise.reject(En(n)):o0(At(n),di.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fp(n),r})}function l0(n,e,t,r){return At(n).onIdTokenChanged(e,t,r)}function u0(n,e,t){return At(n).beforeAuthStateChanged(e,t)}const ko="__sak";/**
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
 */class pp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ko,"1"),this.storage.removeItem(ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function h0(){const n=ut();return _l(n)||Xo(n)}const d0=1e3,f0=10;class mp extends pp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=h0()&&DT(),this.fallbackToPolling=op(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);OT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,f0):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},d0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mp.type="LOCAL";const p0=mp;/**
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
 */class gp extends pp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gp.type="SESSION";const yp=gp;/**
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
 */function m0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new ea(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async u=>u(t.origin,s)),l=await m0(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];/**
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
 */function El(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class g0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const u=El("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(m.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function y0(n){en().location.href=n}/**
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
 */function _p(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function _0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function v0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function w0(){return _p()?self:null}/**
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
 */const vp="firebaseLocalStorageDb",E0=1,Oo="firebaseLocalStorage",wp="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ta(n,e){return n.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function T0(){const n=indexedDB.deleteDatabase(vp);return new Es(n).toPromise()}function Ac(){const n=indexedDB.open(vp,E0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Oo,{keyPath:wp})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Oo)?e(r):(r.close(),await T0(),e(await Ac()))})})}async function Vh(n,e,t){const r=ta(n,!0).put({[wp]:e,value:t});return new Es(r).toPromise()}async function b0(n,e){const t=ta(n,!1).get(e),r=await new Es(t).toPromise();return r===void 0?null:r.value}function Fh(n,e){const t=ta(n,!0).delete(e);return new Es(t).toPromise()}const I0=800,S0=3;class Ep{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ac(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>S0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _p()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(w0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _0(),!this.activeServiceWorker)return;this.sender=new g0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||v0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ac();return await Vh(e,ko,"1"),await Fh(e,ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Vh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>b0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ta(i,!1).getAll();return new Es(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),I0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ep.type="LOCAL";const R0=Ep;new _s(3e4,6e4);/**
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
 */function A0(n,e){return e?_n(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Tl extends vl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function P0(n){return dp(n.auth,new Tl(n),n.bypassAuthState)}function C0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),s0(t,new Tl(n),n.bypassAuthState)}async function k0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),i0(t,new Tl(n),n.bypassAuthState)}/**
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
 */class Tp{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P0;case"linkViaPopup":case"linkViaRedirect":return k0;case"reauthViaPopup":case"reauthViaRedirect":return C0;default:Kt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const O0=new _s(2e3,1e4);class Gr extends Tp{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=El();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O0.get())};e()}}Gr.currentPopupAction=null;/**
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
 */const D0="pendingRedirect",no=new Map;class x0 extends Tp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await N0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function N0(n,e){const t=V0(e),r=M0(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function L0(n,e){no.set(n._key(),e)}function M0(n){return _n(n._redirectPersistence)}function V0(n){return to(D0,n.config.apiKey,n.name)}async function F0(n,e,t=!1){if(Xt(n.app))return Promise.reject(En(n));const r=Or(n),i=A0(r,e),o=await new x0(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const U0=10*60*1e3;class j0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!bp(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Zt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uh(e))}saveEventToCache(e){this.cachedEventUids.add(Uh(e)),this.lastProcessedEventTime=Date.now()}}function Uh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function bp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bp(n);default:return!1}}/**
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
 */async function z0(n,e={}){return ir(n,"GET","/v1/projects",e)}/**
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
 */const $0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q0=/^https?/;async function H0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await z0(n);for(const t of e)try{if(W0(t))return}catch{}Kt(n,"unauthorized-domain")}function W0(n){const e=Ic(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!q0.test(t))return!1;if($0.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const K0=new _s(3e4,6e4);function jh(){const n=en().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function G0(n){return new Promise((e,t)=>{var r,i,s;function o(){jh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jh(),t(Zt(n,"network-request-failed"))},timeout:K0.get()})}if(!((i=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=en().gapi)===null||s===void 0)&&s.load)o();else{const c=BT("iframefcb");return en()[c]=()=>{gapi.load?o():t(Zt(n,"network-request-failed"))},cp(`${jT()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw ro=null,e})}let ro=null;function Q0(n){return ro=ro||G0(n),ro}/**
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
 */const J0=new _s(5e3,15e3),Y0="__/auth/iframe",X0="emulator/auth/iframe",Z0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tb(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gl(e,X0):`https://${n.config.authDomain}/${Y0}`,r={apiKey:e.apiKey,appName:n.name,v:hi},i=eb.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ys(r).slice(1)}`}async function nb(n){const e=await Q0(n),t=en().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:tb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z0,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Zt(n,"network-request-failed"),c=en().setTimeout(()=>{s(o)},J0.get());function l(){en().clearTimeout(c),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const rb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ib=500,sb=600,ob="_blank",ab="http://localhost";class Bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cb(n,e,t,r=ib,i=sb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},rb),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();t&&(c=tp(u)?ob:t),ep(u)&&(e=e||ab,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[E,w])=>`${m}${E}=${w},`,"");if(kT(u)&&c!=="_self")return lb(e||"",c),new Bh(null);const f=window.open(e||"",c,d);ne(f,n,"popup-blocked");try{f.focus()}catch{}return new Bh(f)}function lb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ub="__/auth/handler",hb="emulator/auth/handler",db=encodeURIComponent("fac");async function zh(n,e,t,r,i,s){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:hi,eventId:i};if(e instanceof up){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Zw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof ws){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),u=l?`#${db}=${encodeURIComponent(l)}`:"";return`${fb(n)}?${ys(c).slice(1)}${u}`}function fb({config:n}){return n.emulator?gl(n,hb):`https://${n.authDomain}/${ub}`}/**
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
 */const Ha="webStorageSupport";class pb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yp,this._completeRedirectFn=F0,this._overrideRedirectResult=L0}async _openPopup(e,t,r,i){var s;In((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await zh(e,t,r,Ic(),i);return cb(e,o,El())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await zh(e,t,r,Ic(),i);return y0(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(In(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await nb(e),r=new j0(e);return t.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ha,{type:Ha},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ha];o!==void 0&&t(!!o),Kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=H0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return op()||_l()||Xo()}}const mb=pb;var $h="@firebase/auth",qh="1.7.5";/**
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
 */class gb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _b(n){ni(new Tr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ap(n)},u=new VT(r,i,s,l);return WT(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ni(new Tr("auth-internal",e=>{const t=Or(e.getProvider("auth").getImmediate());return(r=>new gb(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn($h,qh,yb(n)),Gn($h,qh,"esm2017")}/**
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
 */const vb=5*60,wb=Ff("authIdTokenMaxAge")||vb;let Hh=null;const Eb=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>wb)return;const i=t==null?void 0:t.token;Hh!==i&&(Hh=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Tb(n=zf()){const e=fl(n,"auth");if(e.isInitialized())return e.getImmediate();const t=HT(n,{popupRedirectResolver:mb,persistence:[R0,p0,yp]}),r=Ff("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Eb(s.toString());u0(t,o,()=>o(t.currentUser)),l0(t,c=>o(c))}}const i=Mf("auth");return i&&KT(t,`http://${i}`),t}function bb(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}FT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Zt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",bb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_b("Browser");var Wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _r,Ip;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,g){function _(){}_.prototype=g.prototype,S.D=g.prototype,S.prototype=new _,S.prototype.constructor=S,S.C=function(I,T,b){for(var v=Array(arguments.length-2),W=2;W<arguments.length;W++)v[W-2]=arguments[W];return g.prototype[T].apply(I,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,g,_){_||(_=0);var I=Array(16);if(typeof g=="string")for(var T=0;16>T;++T)I[T]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(T=0;16>T;++T)I[T]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=S.g[0],_=S.g[1],T=S.g[2];var b=S.g[3],v=g+(b^_&(T^b))+I[0]+3614090360&4294967295;g=_+(v<<7&4294967295|v>>>25),v=b+(T^g&(_^T))+I[1]+3905402710&4294967295,b=g+(v<<12&4294967295|v>>>20),v=T+(_^b&(g^_))+I[2]+606105819&4294967295,T=b+(v<<17&4294967295|v>>>15),v=_+(g^T&(b^g))+I[3]+3250441966&4294967295,_=T+(v<<22&4294967295|v>>>10),v=g+(b^_&(T^b))+I[4]+4118548399&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(T^g&(_^T))+I[5]+1200080426&4294967295,b=g+(v<<12&4294967295|v>>>20),v=T+(_^b&(g^_))+I[6]+2821735955&4294967295,T=b+(v<<17&4294967295|v>>>15),v=_+(g^T&(b^g))+I[7]+4249261313&4294967295,_=T+(v<<22&4294967295|v>>>10),v=g+(b^_&(T^b))+I[8]+1770035416&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(T^g&(_^T))+I[9]+2336552879&4294967295,b=g+(v<<12&4294967295|v>>>20),v=T+(_^b&(g^_))+I[10]+4294925233&4294967295,T=b+(v<<17&4294967295|v>>>15),v=_+(g^T&(b^g))+I[11]+2304563134&4294967295,_=T+(v<<22&4294967295|v>>>10),v=g+(b^_&(T^b))+I[12]+1804603682&4294967295,g=_+(v<<7&4294967295|v>>>25),v=b+(T^g&(_^T))+I[13]+4254626195&4294967295,b=g+(v<<12&4294967295|v>>>20),v=T+(_^b&(g^_))+I[14]+2792965006&4294967295,T=b+(v<<17&4294967295|v>>>15),v=_+(g^T&(b^g))+I[15]+1236535329&4294967295,_=T+(v<<22&4294967295|v>>>10),v=g+(T^b&(_^T))+I[1]+4129170786&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^T&(g^_))+I[6]+3225465664&4294967295,b=g+(v<<9&4294967295|v>>>23),v=T+(g^_&(b^g))+I[11]+643717713&4294967295,T=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(T^b))+I[0]+3921069994&4294967295,_=T+(v<<20&4294967295|v>>>12),v=g+(T^b&(_^T))+I[5]+3593408605&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^T&(g^_))+I[10]+38016083&4294967295,b=g+(v<<9&4294967295|v>>>23),v=T+(g^_&(b^g))+I[15]+3634488961&4294967295,T=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(T^b))+I[4]+3889429448&4294967295,_=T+(v<<20&4294967295|v>>>12),v=g+(T^b&(_^T))+I[9]+568446438&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^T&(g^_))+I[14]+3275163606&4294967295,b=g+(v<<9&4294967295|v>>>23),v=T+(g^_&(b^g))+I[3]+4107603335&4294967295,T=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(T^b))+I[8]+1163531501&4294967295,_=T+(v<<20&4294967295|v>>>12),v=g+(T^b&(_^T))+I[13]+2850285829&4294967295,g=_+(v<<5&4294967295|v>>>27),v=b+(_^T&(g^_))+I[2]+4243563512&4294967295,b=g+(v<<9&4294967295|v>>>23),v=T+(g^_&(b^g))+I[7]+1735328473&4294967295,T=b+(v<<14&4294967295|v>>>18),v=_+(b^g&(T^b))+I[12]+2368359562&4294967295,_=T+(v<<20&4294967295|v>>>12),v=g+(_^T^b)+I[5]+4294588738&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^T)+I[8]+2272392833&4294967295,b=g+(v<<11&4294967295|v>>>21),v=T+(b^g^_)+I[11]+1839030562&4294967295,T=b+(v<<16&4294967295|v>>>16),v=_+(T^b^g)+I[14]+4259657740&4294967295,_=T+(v<<23&4294967295|v>>>9),v=g+(_^T^b)+I[1]+2763975236&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^T)+I[4]+1272893353&4294967295,b=g+(v<<11&4294967295|v>>>21),v=T+(b^g^_)+I[7]+4139469664&4294967295,T=b+(v<<16&4294967295|v>>>16),v=_+(T^b^g)+I[10]+3200236656&4294967295,_=T+(v<<23&4294967295|v>>>9),v=g+(_^T^b)+I[13]+681279174&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^T)+I[0]+3936430074&4294967295,b=g+(v<<11&4294967295|v>>>21),v=T+(b^g^_)+I[3]+3572445317&4294967295,T=b+(v<<16&4294967295|v>>>16),v=_+(T^b^g)+I[6]+76029189&4294967295,_=T+(v<<23&4294967295|v>>>9),v=g+(_^T^b)+I[9]+3654602809&4294967295,g=_+(v<<4&4294967295|v>>>28),v=b+(g^_^T)+I[12]+3873151461&4294967295,b=g+(v<<11&4294967295|v>>>21),v=T+(b^g^_)+I[15]+530742520&4294967295,T=b+(v<<16&4294967295|v>>>16),v=_+(T^b^g)+I[2]+3299628645&4294967295,_=T+(v<<23&4294967295|v>>>9),v=g+(T^(_|~b))+I[0]+4096336452&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~T))+I[7]+1126891415&4294967295,b=g+(v<<10&4294967295|v>>>22),v=T+(g^(b|~_))+I[14]+2878612391&4294967295,T=b+(v<<15&4294967295|v>>>17),v=_+(b^(T|~g))+I[5]+4237533241&4294967295,_=T+(v<<21&4294967295|v>>>11),v=g+(T^(_|~b))+I[12]+1700485571&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~T))+I[3]+2399980690&4294967295,b=g+(v<<10&4294967295|v>>>22),v=T+(g^(b|~_))+I[10]+4293915773&4294967295,T=b+(v<<15&4294967295|v>>>17),v=_+(b^(T|~g))+I[1]+2240044497&4294967295,_=T+(v<<21&4294967295|v>>>11),v=g+(T^(_|~b))+I[8]+1873313359&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~T))+I[15]+4264355552&4294967295,b=g+(v<<10&4294967295|v>>>22),v=T+(g^(b|~_))+I[6]+2734768916&4294967295,T=b+(v<<15&4294967295|v>>>17),v=_+(b^(T|~g))+I[13]+1309151649&4294967295,_=T+(v<<21&4294967295|v>>>11),v=g+(T^(_|~b))+I[4]+4149444226&4294967295,g=_+(v<<6&4294967295|v>>>26),v=b+(_^(g|~T))+I[11]+3174756917&4294967295,b=g+(v<<10&4294967295|v>>>22),v=T+(g^(b|~_))+I[2]+718787259&4294967295,T=b+(v<<15&4294967295|v>>>17),v=_+(b^(T|~g))+I[9]+3951481745&4294967295,S.g[0]=S.g[0]+g&4294967295,S.g[1]=S.g[1]+(T+(v<<21&4294967295|v>>>11))&4294967295,S.g[2]=S.g[2]+T&4294967295,S.g[3]=S.g[3]+b&4294967295}r.prototype.u=function(S,g){g===void 0&&(g=S.length);for(var _=g-this.blockSize,I=this.B,T=this.h,b=0;b<g;){if(T==0)for(;b<=_;)i(this,S,b),b+=this.blockSize;if(typeof S=="string"){for(;b<g;)if(I[T++]=S.charCodeAt(b++),T==this.blockSize){i(this,I),T=0;break}}else for(;b<g;)if(I[T++]=S[b++],T==this.blockSize){i(this,I),T=0;break}}this.h=T,this.o+=g},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var g=1;g<S.length-8;++g)S[g]=0;var _=8*this.o;for(g=S.length-8;g<S.length;++g)S[g]=_&255,_/=256;for(this.u(S),S=Array(16),g=_=0;4>g;++g)for(var I=0;32>I;I+=8)S[_++]=this.g[g]>>>I&255;return S};function s(S,g){var _=c;return Object.prototype.hasOwnProperty.call(_,S)?_[S]:_[S]=g(S)}function o(S,g){this.h=g;for(var _=[],I=!0,T=S.length-1;0<=T;T--){var b=S[T]|0;I&&b==g||(_[T]=b,I=!1)}this.g=_}var c={};function l(S){return-128<=S&&128>S?s(S,function(g){return new o([g|0],0>g?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return C(u(-S));for(var g=[],_=1,I=0;S>=_;I++)g[I]=S/_|0,_*=4294967296;return new o(g,0)}function d(S,g){if(S.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(S.charAt(0)=="-")return C(d(S.substring(1),g));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(g,8)),I=f,T=0;T<S.length;T+=8){var b=Math.min(8,S.length-T),v=parseInt(S.substring(T,T+b),g);8>b?(b=u(Math.pow(g,b)),I=I.j(b).add(u(v))):(I=I.j(_),I=I.add(u(v)))}return I}var f=l(0),m=l(1),E=l(16777216);n=o.prototype,n.m=function(){if(R(this))return-C(this).m();for(var S=0,g=1,_=0;_<this.g.length;_++){var I=this.i(_);S+=(0<=I?I:4294967296+I)*g,g*=4294967296}return S},n.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(w(this))return"0";if(R(this))return"-"+C(this).toString(S);for(var g=u(Math.pow(S,6)),_=this,I="";;){var T=V(_,g).g;_=F(_,T.j(g));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(S);if(_=T,w(_))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},n.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function w(S){if(S.h!=0)return!1;for(var g=0;g<S.g.length;g++)if(S.g[g]!=0)return!1;return!0}function R(S){return S.h==-1}n.l=function(S){return S=F(this,S),R(S)?-1:w(S)?0:1};function C(S){for(var g=S.g.length,_=[],I=0;I<g;I++)_[I]=~S.g[I];return new o(_,~S.h).add(m)}n.abs=function(){return R(this)?C(this):this},n.add=function(S){for(var g=Math.max(this.g.length,S.g.length),_=[],I=0,T=0;T<=g;T++){var b=I+(this.i(T)&65535)+(S.i(T)&65535),v=(b>>>16)+(this.i(T)>>>16)+(S.i(T)>>>16);I=v>>>16,b&=65535,v&=65535,_[T]=v<<16|b}return new o(_,_[_.length-1]&-2147483648?-1:0)};function F(S,g){return S.add(C(g))}n.j=function(S){if(w(this)||w(S))return f;if(R(this))return R(S)?C(this).j(C(S)):C(C(this).j(S));if(R(S))return C(this.j(C(S)));if(0>this.l(E)&&0>S.l(E))return u(this.m()*S.m());for(var g=this.g.length+S.g.length,_=[],I=0;I<2*g;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var T=0;T<S.g.length;T++){var b=this.i(I)>>>16,v=this.i(I)&65535,W=S.i(T)>>>16,Ee=S.i(T)&65535;_[2*I+2*T]+=v*Ee,M(_,2*I+2*T),_[2*I+2*T+1]+=b*Ee,M(_,2*I+2*T+1),_[2*I+2*T+1]+=v*W,M(_,2*I+2*T+1),_[2*I+2*T+2]+=b*W,M(_,2*I+2*T+2)}for(I=0;I<g;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=g;I<2*g;I++)_[I]=0;return new o(_,0)};function M(S,g){for(;(S[g]&65535)!=S[g];)S[g+1]+=S[g]>>>16,S[g]&=65535,g++}function L(S,g){this.g=S,this.h=g}function V(S,g){if(w(g))throw Error("division by zero");if(w(S))return new L(f,f);if(R(S))return g=V(C(S),g),new L(C(g.g),C(g.h));if(R(g))return g=V(S,C(g)),new L(C(g.g),g.h);if(30<S.g.length){if(R(S)||R(g))throw Error("slowDivide_ only works with positive integers.");for(var _=m,I=g;0>=I.l(S);)_=G(_),I=G(I);var T=P(_,1),b=P(I,1);for(I=P(I,2),_=P(_,2);!w(I);){var v=b.add(I);0>=v.l(S)&&(T=T.add(_),b=v),I=P(I,1),_=P(_,1)}return g=F(S,T.j(g)),new L(T,g)}for(T=f;0<=S.l(g);){for(_=Math.max(1,Math.floor(S.m()/g.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=u(_),v=b.j(g);R(v)||0<v.l(S);)_-=I,b=u(_),v=b.j(g);w(b)&&(b=m),T=T.add(b),S=F(S,v)}return new L(T,S)}n.A=function(S){return V(this,S).h},n.and=function(S){for(var g=Math.max(this.g.length,S.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)&S.i(I);return new o(_,this.h&S.h)},n.or=function(S){for(var g=Math.max(this.g.length,S.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)|S.i(I);return new o(_,this.h|S.h)},n.xor=function(S){for(var g=Math.max(this.g.length,S.g.length),_=[],I=0;I<g;I++)_[I]=this.i(I)^S.i(I);return new o(_,this.h^S.h)};function G(S){for(var g=S.g.length+1,_=[],I=0;I<g;I++)_[I]=S.i(I)<<1|S.i(I-1)>>>31;return new o(_,S.h)}function P(S,g){var _=g>>5;g%=32;for(var I=S.g.length-_,T=[],b=0;b<I;b++)T[b]=0<g?S.i(b+_)>>>g|S.i(b+_+1)<<32-g:S.i(b+_);return new o(T,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ip=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,_r=o}).apply(typeof Wh<"u"?Wh:typeof self<"u"?self:typeof window<"u"?window:{});var Ks=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sp,Rp,qi,Ap,io,Pc,Pp,Cp,kp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ks=="object"&&Ks];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function i(a,h){if(h)e:{var p=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var O=a[y];if(!(O in p))break e;p=p[O]}a=a[a.length-1],y=p[a],h=h(y),h!=y&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var p=0,y=!1,O={next:function(){if(!y&&p<a.length){var x=p++;return{value:h(x,a[x]),done:!1}}return y=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,p){return a.call.apply(a.bind,arguments)}function f(a,h,p){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,y),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,m.apply(null,arguments)}function E(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function w(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(y,O,x){for(var H=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)H[Re-2]=arguments[Re];return h.prototype[O].apply(y,H)}}function R(a){const h=a.length;if(0<h){const p=Array(h);for(let y=0;y<h;y++)p[y]=a[y];return p}return[]}function C(a,h){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(l(y)){const O=a.length||0,x=y.length||0;a.length=O+x;for(let H=0;H<x;H++)a[O+H]=y[H]}else a.push(y)}}class F{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function L(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var G=L().indexOf("Gecko")!=-1&&!(L().toLowerCase().indexOf("webkit")!=-1&&L().indexOf("Edge")==-1)&&!(L().indexOf("Trident")!=-1||L().indexOf("MSIE")!=-1)&&L().indexOf("Edge")==-1;function P(a,h,p){for(const y in a)h.call(p,a[y],y,a)}function S(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function g(a){const h={};for(const p in a)h[p]=a[p];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let p,y;for(let O=1;O<arguments.length;O++){y=arguments[O];for(p in y)a[p]=y[p];for(let x=0;x<_.length;x++)p=_[x],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function T(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function b(a){c.setTimeout(()=>{throw a},0)}function v(){var a=nt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class W{constructor(){this.h=this.g=null}add(h,p){const y=Ee.get();y.set(h,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Ee=new F(()=>new Ze,a=>a.reset());class Ze{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let de,et=!1,nt=new W,bt=()=>{const a=c.Promise.resolve(void 0);de=()=>{a.then(vt)}};var vt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(p){b(p)}var h=Ee;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}et=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var xe=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,h),c.removeEventListener("test",p,h)}catch{}return a}();function Ne(a,h){if(_e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(G){e:{try{V(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:$e[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ne.aa.h.call(this)}}w(Ne,_e);var $e={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),ke=0;function rt(a,h,p,y,O){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!y,this.ha=O,this.key=++ke,this.da=this.fa=!1}function wt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Et(a){this.src=a,this.g={},this.h=0}Et.prototype.add=function(a,h,p,y,O){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var H=me(a,h,y,O);return-1<H?(h=a[H],p||(h.fa=!1)):(h=new rt(h,this.src,x,!!y,O),h.fa=p,a.push(h)),h};function Ie(a,h){var p=h.type;if(p in a.g){var y=a.g[p],O=Array.prototype.indexOf.call(y,h,void 0),x;(x=0<=O)&&Array.prototype.splice.call(y,O,1),x&&(wt(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function me(a,h,p,y){for(var O=0;O<a.length;++O){var x=a[O];if(!x.da&&x.listener==h&&x.capture==!!p&&x.ha==y)return O}return-1}var fe="closure_lm_"+(1e6*Math.random()|0),qe={};function Ge(a,h,p,y,O){if(Array.isArray(h)){for(var x=0;x<h.length;x++)Ge(a,h[x],p,y,O);return null}return p=Dn(p),a&&a[Le]?a.K(h,p,u(y)?!!y.capture:!!y,O):Nr(a,h,p,!1,y,O)}function Nr(a,h,p,y,O,x){if(!h)throw Error("Invalid event type");var H=u(O)?!!O.capture:!!O,Re=wi(a);if(Re||(a[fe]=Re=new Et(a)),p=Re.add(h,p,y,H,x),p.proxy)return p;if(y=ba(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)xe||(O=H),O===void 0&&(O=!1),a.addEventListener(h.toString(),y,O);else if(a.attachEvent)a.attachEvent(ks(h.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function ba(){function a(p){return h.call(a.src,a.listener,p)}const h=Ia;return a}function _i(a,h,p,y,O){if(Array.isArray(h))for(var x=0;x<h.length;x++)_i(a,h[x],p,y,O);else y=u(y)?!!y.capture:!!y,p=Dn(p),a&&a[Le]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],p=me(x,p,y,O),-1<p&&(wt(x[p]),Array.prototype.splice.call(x,p,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=wi(a))&&(h=a.g[h.toString()],a=-1,h&&(a=me(h,p,y,O)),(p=-1<a?h[a]:null)&&vi(p))}function vi(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Le])Ie(h.i,a);else{var p=a.type,y=a.proxy;h.removeEventListener?h.removeEventListener(p,y,a.capture):h.detachEvent?h.detachEvent(ks(p),y):h.addListener&&h.removeListener&&h.removeListener(y),(p=wi(h))?(Ie(p,a),p.h==0&&(p.src=null,h[fe]=null)):wt(a)}}}function ks(a){return a in qe?qe[a]:qe[a]="on"+a}function Ia(a,h){if(a.da)a=!0;else{h=new Ne(h,this);var p=a.listener,y=a.ha||a.src;a.fa&&vi(a),a=p.call(y,h)}return a}function wi(a){return a=a[fe],a instanceof Et?a:null}var an="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dn(a){return typeof a=="function"?a:(a[an]||(a[an]=function(h){return a.handleEvent(h)}),a[an])}function Qe(){Be.call(this),this.i=new Et(this),this.M=this,this.F=null}w(Qe,Be),Qe.prototype[Le]=!0,Qe.prototype.removeEventListener=function(a,h,p,y){_i(this,a,h,p,y)};function Je(a,h){var p,y=a.F;if(y)for(p=[];y;y=y.F)p.push(y);if(a=a.M,y=h.type||h,typeof h=="string")h=new _e(h,a);else if(h instanceof _e)h.target=h.target||a;else{var O=h;h=new _e(y,a),I(h,O)}if(O=!0,p)for(var x=p.length-1;0<=x;x--){var H=h.g=p[x];O=Pt(H,y,!0,h)&&O}if(H=h.g=a,O=Pt(H,y,!0,h)&&O,O=Pt(H,y,!1,h)&&O,p)for(x=0;x<p.length;x++)H=h.g=p[x],O=Pt(H,y,!1,h)&&O}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],y=0;y<p.length;y++)wt(p[y]);delete a.g[h],a.h--}}this.F=null},Qe.prototype.K=function(a,h,p,y){return this.i.add(String(a),h,!1,p,y)},Qe.prototype.L=function(a,h,p,y){return this.i.add(String(a),h,!0,p,y)};function Pt(a,h,p,y){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,x=0;x<h.length;++x){var H=h[x];if(H&&!H.da&&H.capture==p){var Re=H.listener,st=H.ha||H.src;H.fa&&Ie(a.i,H),O=Re.call(st,y)!==!1&&O}}return O&&!y.defaultPrevented}function Ft(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Ei(a){a.g=Ft(()=>{a.g=null,a.i&&(a.i=!1,Ei(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Lr extends Be{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ei(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function or(a){Be.call(this),this.h=a,this.g={}}w(or,Be);var Bt=[];function Ti(a){P(a.g,function(h,p){this.g.hasOwnProperty(p)&&vi(h)},a),a.g={}}or.prototype.N=function(){or.aa.N.call(this),Ti(this)},or.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mr=c.JSON.stringify,Os=c.JSON.parse,Sa=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Vr(){}Vr.prototype.h=null;function ar(a){return a.h||(a.h=a.i())}function bi(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xn(){_e.call(this,"d")}w(xn,_e);function cr(){_e.call(this,"c")}w(cr,_e);var ln={},Ii=null;function Fr(){return Ii=Ii||new Qe}ln.La="serverreachability";function Si(a){_e.call(this,ln.La,a)}w(Si,_e);function un(a){const h=Fr();Je(h,new Si(h))}ln.STAT_EVENT="statevent";function lr(a,h){_e.call(this,ln.STAT_EVENT,a),this.stat=h}w(lr,_e);function it(a){const h=Fr();Je(h,new lr(h,a))}ln.Ma="timingevent";function Ds(a,h){_e.call(this,ln.Ma,a),this.size=h}w(Ds,_e);function A(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function k(){this.g=!0}k.prototype.xa=function(){this.g=!1};function D(a,h,p,y,O,x){a.info(function(){if(a.g)if(x)for(var H="",Re=x.split("&"),st=0;st<Re.length;st++){var we=Re[st].split("=");if(1<we.length){var ft=we[0];we=we[1];var pt=ft.split("_");H=2<=pt.length&&pt[1]=="type"?H+(ft+"="+we+"&"):H+(ft+"=redacted&")}}else H=null;else H=x;return"XMLHTTP REQ ("+y+") [attempt "+O+"]: "+h+`
`+p+`
`+H})}function U(a,h,p,y,O,x,H){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+O+"]: "+h+`
`+p+`
`+x+" "+H})}function K(a,h,p,y){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+te(a,p)+(y?" "+y:"")})}function J(a,h){a.info(function(){return"TIMEOUT: "+h})}k.prototype.info=function(){};function te(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var y=p[a];if(!(2>y.length)){var O=y[1];if(Array.isArray(O)&&!(1>O.length)){var x=O[0];if(x!="noop"&&x!="stop"&&x!="close")for(var H=1;H<O.length;H++)O[H]=""}}}}return Mr(p)}catch{return h}}var q={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ie={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Y;function X(){}w(X,Vr),X.prototype.g=function(){return new XMLHttpRequest},X.prototype.i=function(){return{}},Y=new X;function ue(a,h,p,y){this.j=a,this.i=h,this.l=p,this.R=y||1,this.U=new or(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ve}function ve(){this.i=null,this.g="",this.h=!1}var be={},ge={};function ze(a,h,p){a.L=1,a.v=Ms(dn(h)),a.m=p,a.P=!0,Me(a,null)}function Me(a,h){a.F=Date.now(),zt(a),a.A=dn(a.v);var p=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),pu(p.i,"t",y),a.C=0,p=a.j.J,a.h=new ve,a.g=Du(a.j,p?h:null,!a.m),0<a.O&&(a.M=new Lr(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,y=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Bt[0]=O.toString()),O=Bt);for(var x=0;x<O.length;x++){var H=Ge(p,O[x],y||h.handleEvent,!1,h.h||h);if(!H)break;h.g[H.key]=H}h=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),un(),D(a.i,a.u,a.A,a.l,a.R,a.m)}ue.prototype.ca=function(a){a=a.target;const h=this.M;h&&fn(a)==3?h.j():this.Y(a)},ue.prototype.Y=function(a){try{if(a==this.g)e:{const pt=fn(this.g);var h=this.g.Ba();const zr=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Eu(this.g)))){this.J||pt!=4||h==7||(h==8||0>=zr?un(3):un(2)),Yt(this);var p=this.g.Z();this.X=p;t:if(Nn(this)){var y=Eu(this.g);a="";var O=y.length,x=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),ht(this);var H="";break t}this.h.i=new c.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(y[h],{stream:!(x&&h==O-1)});y.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=p==200,U(this.i,this.u,this.A,this.l,this.R,pt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Re,st=this.g;if((Re=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Re)){var we=Re;break t}}we=null}if(p=we)K(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ln(this,p);else{this.o=!1,this.s=3,it(12),Ut(this),ht(this);break e}}if(this.P){p=!0;let $t;for(;!this.J&&this.C<H.length;)if($t=Jt(this,H),$t==ge){pt==4&&(this.s=4,it(14),p=!1),K(this.i,this.l,null,"[Incomplete Response]");break}else if($t==be){this.s=4,it(15),K(this.i,this.l,H,"[Invalid Chunk]"),p=!1;break}else K(this.i,this.l,$t,null),Ln(this,$t);if(Nn(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||H.length!=0||this.h.h||(this.s=1,it(16),p=!1),this.o=this.o&&p,!p)K(this.i,this.l,H,"[Invalid Chunked Response]"),Ut(this),ht(this);else if(0<H.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Ca(ft),ft.M=!0,it(11))}}else K(this.i,this.l,H,null),Ln(this,H);pt==4&&Ut(this),this.o&&!this.J&&(pt==4?Pu(this.j,this):(this.o=!1,zt(this)))}else ny(this.g),p==400&&0<H.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Ut(this),ht(this)}}}catch{}finally{}};function Nn(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jt(a,h){var p=a.C,y=h.indexOf(`
`,p);return y==-1?ge:(p=Number(h.substring(p,y)),isNaN(p)?be:(y+=1,y+p>h.length?ge:(h=h.slice(y,y+p),a.C=y+p,h)))}ue.prototype.cancel=function(){this.J=!0,Ut(this)};function zt(a){a.S=Date.now()+a.I,hn(a,a.I)}function hn(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=A(m(a.ba,a),h)}function Yt(a){a.B&&(c.clearTimeout(a.B),a.B=null)}ue.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(J(this.i,this.A),this.L!=2&&(un(),it(17)),Ut(this),this.s=2,ht(this)):hn(this,this.S-a)};function ht(a){a.j.G==0||a.J||Pu(a.j,a)}function Ut(a){Yt(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Ti(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Ln(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Se(p.h,a))){if(!a.K&&Se(p.h,a)&&p.G==3){try{var y=p.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var O=y;if(O[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Bs(p),Us(p);else break e;Pa(p),it(18)}}else p.za=O[1],0<p.za-p.T&&37500>O[2]&&p.F&&p.v==0&&!p.C&&(p.C=A(m(p.Za,p),6e3));if(1>=dt(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else hr(p,11)}else if((a.K||p.g==a)&&Bs(p),!M(h))for(O=p.Da.g.parse(h),h=0;h<O.length;h++){let we=O[h];if(p.T=we[0],we=we[1],p.G==2)if(we[0]=="c"){p.K=we[1],p.ia=we[2];const ft=we[3];ft!=null&&(p.la=ft,p.j.info("VER="+p.la));const pt=we[4];pt!=null&&(p.Aa=pt,p.j.info("SVER="+p.Aa));const zr=we[5];zr!=null&&typeof zr=="number"&&0<zr&&(y=1.5*zr,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const $t=a.g;if($t){const $s=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($s){var x=y.h;x.g||$s.indexOf("spdy")==-1&&$s.indexOf("quic")==-1&&$s.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ct(x,x.h),x.h=null))}if(y.D){const ka=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;ka&&(y.ya=ka,De(y.I,y.D,ka))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var H=a;if(y.qa=Ou(y,y.J?y.ia:null,y.W),H.K){Ri(y.h,H);var Re=H,st=y.L;st&&(Re.I=st),Re.B&&(Yt(Re),zt(Re)),y.g=H}else Ru(y);0<p.i.length&&js(p)}else we[0]!="stop"&&we[0]!="close"||hr(p,7);else p.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?hr(p,7):Aa(p):we[0]!="noop"&&p.l&&p.l.ta(we),p.v=0)}}un(4)}catch{}}var Ur=class{constructor(a,h){this.g=a,this.map=h}};function oe(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Oe(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function dt(a){return a.h?1:a.g?a.g.size:0}function Se(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ct(a,h){a.g?a.g.add(h):a.h=h}function Ri(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}oe.prototype.cancel=function(){if(this.i=xs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xs(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return R(a.i)}function Bg(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],p=a.length,y=0;y<p;y++)h.push(a[y]);return h}h=[],p=0;for(y in a)h[p++]=a[y];return h}function zg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const y in a)h[p++]=y;return h}}}function cu(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=zg(a),y=Bg(a),O=y.length,x=0;x<O;x++)h.call(void 0,y[x],p&&p[x],a)}var lu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $g(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var y=a[p].indexOf("="),O=null;if(0<=y){var x=a[p].substring(0,y);O=a[p].substring(y+1)}else x=a[p];h(x,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function ur(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof ur){this.h=a.h,Ns(this,a.j),this.o=a.o,this.g=a.g,Ls(this,a.s),this.l=a.l;var h=a.i,p=new Ci;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),uu(this,p),this.m=a.m}else a&&(h=String(a).match(lu))?(this.h=!1,Ns(this,h[1]||"",!0),this.o=Ai(h[2]||""),this.g=Ai(h[3]||"",!0),Ls(this,h[4]),this.l=Ai(h[5]||"",!0),uu(this,h[6]||"",!0),this.m=Ai(h[7]||"")):(this.h=!1,this.i=new Ci(null,this.h))}ur.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Pi(h,hu,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Pi(h,hu,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Pi(p,p.charAt(0)=="/"?Wg:Hg,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Pi(p,Gg)),a.join("")};function dn(a){return new ur(a)}function Ns(a,h,p){a.j=p?Ai(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ls(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function uu(a,h,p){h instanceof Ci?(a.i=h,Qg(a.i,a.h)):(p||(h=Pi(h,Kg)),a.i=new Ci(h,a.h))}function De(a,h,p){a.i.set(h,p)}function Ms(a){return De(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ai(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Pi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,qg),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var hu=/[#\/\?@]/g,Hg=/[#\?:]/g,Wg=/[#\?]/g,Kg=/[#\?@]/g,Gg=/#/g;function Ci(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&$g(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}n=Ci.prototype,n.add=function(a,h){Mn(this),this.i=null,a=jr(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function du(a,h){Mn(a),h=jr(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function fu(a,h){return Mn(a),h=jr(a,h),a.g.has(h)}n.forEach=function(a,h){Mn(this),this.g.forEach(function(p,y){p.forEach(function(O){a.call(h,O,y,this)},this)},this)},n.na=function(){Mn(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let y=0;y<h.length;y++){const O=a[y];for(let x=0;x<O.length;x++)p.push(h[y])}return p},n.V=function(a){Mn(this);let h=[];if(typeof a=="string")fu(this,a)&&(h=h.concat(this.g.get(jr(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},n.set=function(a,h){return Mn(this),this.i=null,a=jr(this,a),fu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},n.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function pu(a,h,p){du(a,h),0<p.length&&(a.i=null,a.g.set(jr(a,h),R(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var y=h[p];const x=encodeURIComponent(String(y)),H=this.V(y);for(y=0;y<H.length;y++){var O=x;H[y]!==""&&(O+="="+encodeURIComponent(String(H[y]))),a.push(O)}}return this.i=a.join("&")};function jr(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Qg(a,h){h&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(p,y){var O=y.toLowerCase();y!=O&&(du(this,y),pu(this,O,p))},a)),a.j=h}function Jg(a,h){const p=new k;if(c.Image){const y=new Image;y.onload=E(Vn,p,"TestLoadImage: loaded",!0,h,y),y.onerror=E(Vn,p,"TestLoadImage: error",!1,h,y),y.onabort=E(Vn,p,"TestLoadImage: abort",!1,h,y),y.ontimeout=E(Vn,p,"TestLoadImage: timeout",!1,h,y),c.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else h(!1)}function Yg(a,h){const p=new k,y=new AbortController,O=setTimeout(()=>{y.abort(),Vn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:y.signal}).then(x=>{clearTimeout(O),x.ok?Vn(p,"TestPingServer: ok",!0,h):Vn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),Vn(p,"TestPingServer: error",!1,h)})}function Vn(a,h,p,y,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),y(p)}catch{}}function Xg(){this.g=new Sa}function Zg(a,h,p){const y=p||"";try{cu(a,function(O,x){let H=O;u(O)&&(H=Mr(O)),h.push(y+x+"="+encodeURIComponent(H))})}catch(O){throw h.push(y+"type="+encodeURIComponent("_badmap")),O}}function ki(a){this.l=a.Ub||null,this.j=a.eb||!1}w(ki,Vr),ki.prototype.g=function(){return new Vs(this.l,this.j)},ki.prototype.i=function(a){return function(){return a}}({});function Vs(a,h){Qe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Vs,Qe),n=Vs.prototype,n.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Di(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;mu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function mu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Oi(this):Di(this),this.readyState==3&&mu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Oi(this))},n.Qa=function(a){this.g&&(this.response=a,Oi(this))},n.ga=function(){this.g&&Oi(this)};function Oi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Di(a)}n.setRequestHeader=function(a,h){this.u.append(a,h)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Di(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gu(a){let h="";return P(a,function(p,y){h+=y,h+=":",h+=p,h+=`\r
`}),h}function Ra(a,h,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=gu(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):De(a,h,p))}function Ue(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Ue,Qe);var ey=/^https?$/i,ty=["POST","PUT"];n=Ue.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,h,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Y.g(),this.v=this.o?ar(this.o):ar(Y),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){yu(this,x);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var O in y)p.set(O,y[O]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())p.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),O=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ty,h,void 0))||y||O||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,H]of p)this.g.setRequestHeader(x,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wu(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){yu(this,x)}};function yu(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,_u(a),Fs(a)}function _u(a){a.A||(a.A=!0,Je(a,"complete"),Je(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Je(this,"complete"),Je(this,"abort"),Fs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fs(this,!0)),Ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?vu(this):this.bb())},n.bb=function(){vu(this)};function vu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||fn(a)!=4||a.Z()!=2)){if(a.u&&fn(a)==4)Ft(a.Ea,0,a);else if(Je(a,"readystatechange"),fn(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var y;if(y=H===0){var O=String(a.D).match(lu)[1]||null;!O&&c.self&&c.self.location&&(O=c.self.location.protocol.slice(0,-1)),y=!ey.test(O?O.toLowerCase():"")}p=y}if(p)Je(a,"complete"),Je(a,"success");else{a.m=6;try{var x=2<fn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",_u(a)}}finally{Fs(a)}}}}function Fs(a,h){if(a.g){wu(a);const p=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Je(a,"ready");try{p.onreadystatechange=y}catch{}}}function wu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Os(h)}};function Eu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ny(a){const h={};a=(a.g&&2<=fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(M(a[y]))continue;var p=T(a[y]);const O=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=h[O]||[];h[O]=x,x.push(p)}S(h,function(y){return y.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Tu(a){this.Aa=0,this.i=[],this.j=new k,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xi("baseRetryDelayMs",5e3,a),this.cb=xi("retryDelaySeedMs",1e4,a),this.Wa=xi("forwardChannelMaxRetries",2,a),this.wa=xi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new oe(a&&a.concurrentRequestLimit),this.Da=new Xg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Tu.prototype,n.la=8,n.G=1,n.connect=function(a,h,p,y){it(0),this.W=a,this.H=h||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Ou(this,null,this.W),js(this)};function Aa(a){if(bu(a),a.G==3){var h=a.U++,p=dn(a.I);if(De(p,"SID",a.K),De(p,"RID",h),De(p,"TYPE","terminate"),Ni(a,p),h=new ue(a,a.j,h),h.L=2,h.v=Ms(dn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=h.v,p=!0),p||(h.g=Du(h.j,null),h.g.ea(h.v)),h.F=Date.now(),zt(h)}ku(a)}function Us(a){a.g&&(Ca(a),a.g.cancel(),a.g=null)}function bu(a){Us(a),a.u&&(c.clearTimeout(a.u),a.u=null),Bs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function js(a){if(!Oe(a.h)&&!a.s){a.s=!0;var h=a.Ga;de||bt(),et||(de(),et=!0),nt.add(h,a),a.B=0}}function ry(a,h){return dt(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=A(m(a.Ga,a,h),Cu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new ue(this,this.j,a);let x=this.o;if(this.S&&(x?(x=g(x),I(x,this.S)):x=this.S),this.m!==null||this.O||(O.H=x,x=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Su(this,O,h),p=dn(this.I),De(p,"RID",a),De(p,"CVER",22),this.D&&De(p,"X-HTTP-Session-Id",this.D),Ni(this,p),x&&(this.O?h="headers="+encodeURIComponent(String(gu(x)))+"&"+h:this.m&&Ra(p,this.m,x)),Ct(this.h,O),this.Ua&&De(p,"TYPE","init"),this.P?(De(p,"$req",h),De(p,"SID","null"),O.T=!0,ze(O,p,null)):ze(O,p,h),this.G=2}}else this.G==3&&(a?Iu(this,a):this.i.length==0||Oe(this.h)||Iu(this))};function Iu(a,h){var p;h?p=h.l:p=a.U++;const y=dn(a.I);De(y,"SID",a.K),De(y,"RID",p),De(y,"AID",a.T),Ni(a,y),a.m&&a.o&&Ra(y,a.m,a.o),p=new ue(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Su(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ct(a.h,p),ze(p,y,h)}function Ni(a,h){a.H&&P(a.H,function(p,y){De(h,y,p)}),a.l&&cu({},function(p,y){De(h,y,p)})}function Su(a,h,p){p=Math.min(a.i.length,p);var y=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let x=-1;for(;;){const H=["count="+p];x==-1?0<p?(x=O[0].g,H.push("ofs="+x)):x=0:H.push("ofs="+x);let Re=!0;for(let st=0;st<p;st++){let we=O[st].g;const ft=O[st].map;if(we-=x,0>we)x=Math.max(0,O[st].g-100),Re=!1;else try{Zg(ft,H,"req"+we+"_")}catch{y&&y(ft)}}if(Re){y=H.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,y}function Ru(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;de||bt(),et||(de(),et=!0),nt.add(h,a),a.v=0}}function Pa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=A(m(a.Fa,a),Cu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Au(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=A(m(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Us(this),Au(this))};function Ca(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Au(a){a.g=new ue(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=dn(a.qa);De(h,"RID","rpc"),De(h,"SID",a.K),De(h,"AID",a.T),De(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&De(h,"TO",a.ja),De(h,"TYPE","xmlhttp"),Ni(a,h),a.m&&a.o&&Ra(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ms(dn(h)),p.m=null,p.P=!0,Me(p,a)}n.Za=function(){this.C!=null&&(this.C=null,Us(this),Pa(this),it(19))};function Bs(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Pu(a,h){var p=null;if(a.g==h){Bs(a),Ca(a),a.g=null;var y=2}else if(Se(a.h,h))p=h.D,Ri(a.h,h),y=1;else return;if(a.G!=0){if(h.o)if(y==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;y=Fr(),Je(y,new Ds(y,p)),js(a)}else Ru(a);else if(O=h.s,O==3||O==0&&0<h.X||!(y==1&&ry(a,h)||y==2&&Pa(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),O){case 1:hr(a,5);break;case 4:hr(a,10);break;case 3:hr(a,6);break;default:hr(a,2)}}}function Cu(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function hr(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),y=a.Xa;const O=!y;y=new ur(y||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ns(y,"https"),Ms(y),O?Jg(y.toString(),p):Yg(y.toString(),p)}else it(2);a.G=0,a.l&&a.l.sa(h),ku(a),bu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function ku(a){if(a.G=0,a.ka=[],a.l){const h=xs(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Ou(a,h,p){var y=p instanceof ur?dn(p):new ur(p);if(y.g!="")h&&(y.g=h+"."+y.g),Ls(y,y.s);else{var O=c.location;y=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var x=new ur(null);y&&Ns(x,y),h&&(x.g=h),O&&Ls(x,O),p&&(x.l=p),y=x}return p=a.D,h=a.ya,p&&h&&De(y,p,h),De(y,"VER",a.la),Ni(a,y),y}function Du(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ue(new ki({eb:p})):new Ue(a.pa),h.Ha(a.J),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function xu(){}n=xu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zs(){}zs.prototype.g=function(a,h){return new kt(a,h)};function kt(a,h){Qe.call(this),this.g=new Tu(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Br(this)}w(kt,Qe),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Aa(this.g)},kt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Mr(a),a=p);h.i.push(new Ur(h.Ya++,a)),h.G==3&&js(h)},kt.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,kt.aa.N.call(this)};function Nu(a){xn.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}w(Nu,xn);function Lu(){cr.call(this),this.status=1}w(Lu,cr);function Br(a){this.g=a}w(Br,xu),Br.prototype.ua=function(){Je(this.g,"a")},Br.prototype.ta=function(a){Je(this.g,new Nu(a))},Br.prototype.sa=function(a){Je(this.g,new Lu)},Br.prototype.ra=function(){Je(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,kp=function(){return new zs},Cp=function(){return Fr()},Pp=ln,Pc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},q.NO_ERROR=0,q.TIMEOUT=8,q.HTTP_ERROR=6,io=q,ie.COMPLETE="complete",Ap=ie,bi.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,qi=bi,Rp=ki,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,Sp=Ue}).apply(typeof Ks<"u"?Ks:typeof self<"u"?self:typeof window<"u"?window:{});const Kh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new hl("@firebase/firestore");function Fi(){return Rr.logLevel}function Q(n,...e){if(Rr.logLevel<=pe.DEBUG){const t=e.map(bl);Rr.debug(`Firestore (${fi}): ${n}`,...t)}}function Sn(n,...e){if(Rr.logLevel<=pe.ERROR){const t=e.map(bl);Rr.error(`Firestore (${fi}): ${n}`,...t)}}function ri(n,...e){if(Rr.logLevel<=pe.WARN){const t=e.map(bl);Rr.warn(`Firestore (${fi}): ${n}`,...t)}}function bl(n){if(typeof n=="string")return n;try{/**
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
 */function re(n="Unexpected state"){const e=`FIRESTORE (${fi}) INTERNAL ASSERTION FAILED: `+n;throw Sn(e),new Error(e)}function Ce(n,e){n||re()}function ae(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends On{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ib{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(gt.UNAUTHENTICATED))}shutdown(){}}class Sb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Rb{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{Q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Q("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qn)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(Q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string"),new Op(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string"),new gt(e)}}class Ab{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Pb{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Ab(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(gt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Cb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&Q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ce(typeof t.token=="string"),this.R=t.token,new Cb(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Ob(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ob(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(n,e){return n<e?-1:n>e?1:0}function ii(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Z(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Xe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.timestamp=e}static fromTimestamp(e){return new se(e)}static min(){return new se(new Xe(0,0))}static max(){return new se(new Xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(),r===void 0?r=e.length-t:r>e.length-t&&re(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ss.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ss?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class je extends ss{construct(e,t,r){return new je(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new je(t)}static emptyPath(){return new je([])}}const Db=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends ss{construct(e,t,r){return new ct(e,t,r)}static isValidIdentifier(e){return Db.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new Z(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new Z(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ct(t)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.path=e}static fromPath(e){return new ee(je.fromString(e))}static fromName(e){return new ee(je.fromString(e).popFirst(5))}static empty(){return new ee(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return je.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ee(new je(e.slice()))}}function xb(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=se.fromTimestamp(r===1e9?new Xe(t+1,0):new Xe(t,r));return new Xn(i,ee.empty(),e)}function Nb(n){return new Xn(n.readTime,n.key,-1)}class Xn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Xn(se.min(),ee.empty(),-1)}static max(){return new Xn(se.max(),ee.empty(),-1)}}function Lb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ee.comparator(n.documentKey,e.documentKey),t!==0?t:Te(n.largestBatchId,e.largestBatchId))}/**
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
 */const Mb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(n){if(n.code!==z.FAILED_PRECONDITION||n.message!==Mb)throw n;Q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new B((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof B?t:B.resolve(t)}catch(t){return B.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):B.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):B.reject(t)}static resolve(e){return new B((t,r)=>{t(e)})}static reject(e){return new B((t,r)=>{r(e)})}static waitFor(e){return new B((t,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},l=>r(l))}),o=!0,s===i&&t()})}static or(e){let t=B.resolve(!1);for(const r of e)t=t.next(i=>i?B.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new B((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next(d=>{o[u]=d,++c,c===s&&r(o)},d=>i(d))}})}static doWhile(e,t){return new B((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Fb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function bs(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Il{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Il.oe=-1;function na(n){return n==null}function Do(n){return n===0&&1/n==-1/0}function Ub(n){return typeof n=="number"&&Number.isInteger(n)&&!Do(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Dr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.comparator=e,this.root=t||at.EMPTY}insert(e,t){return new Fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gs(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gs(this.root,e,this.comparator,!0)}}class Gs{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??at.RED,this.left=i??at.EMPTY,this.right=s??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new at(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return at.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,t,r,i,s){return this}insert(e,t,r){return new at(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qh(this.data.getIterator())}getIteratorFrom(e){return new Qh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof lt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new lt(this.comparator);return t.data=e,t}}class Qh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(ct.comparator)}static empty(){return new Nt([])}unionWith(e){let t=new lt(ct.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Nt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ii(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Np extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Np("Invalid base64 string: "+s):s}}(e);return new _t(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new _t(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const jb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(n){if(Ce(!!n),typeof n=="string"){let e=0;const t=jb.exec(n);if(Ce(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(n.seconds),nanos:Ke(n.nanos)}}function Ke(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ar(n){return typeof n=="string"?_t.fromBase64String(n):_t.fromUint8Array(n)}/**
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
 */function Sl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Rl(n){const e=n.mapValue.fields.__previous_value__;return Sl(e)?Rl(e):e}function os(n){const e=Zn(n.mapValue.fields.__local_write_time__.timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e,t,r,i,s,o,c,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u}}class as{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new as("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof as&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Qs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sl(n)?4:zb(n)?9007199254740991:10:re()}function sn(n,e){if(n===e)return!0;const t=Pr(n);if(t!==Pr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return os(n).isEqual(os(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Zn(i.timestampValue),c=Zn(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Ar(i.bytesValue).isEqual(Ar(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return Ke(i.geoPointValue.latitude)===Ke(s.geoPointValue.latitude)&&Ke(i.geoPointValue.longitude)===Ke(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ke(i.integerValue)===Ke(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ke(i.doubleValue),c=Ke(s.doubleValue);return o===c?Do(o)===Do(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return ii(n.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Gh(o)!==Gh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!sn(o[l],c[l])))return!1;return!0}(n,e);default:return re()}}function cs(n,e){return(n.values||[]).find(t=>sn(t,e))!==void 0}function si(n,e){if(n===e)return 0;const t=Pr(n),r=Pr(e);if(t!==r)return Te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Te(n.booleanValue,e.booleanValue);case 2:return function(s,o){const c=Ke(s.integerValue||s.doubleValue),l=Ke(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Jh(n.timestampValue,e.timestampValue);case 4:return Jh(os(n),os(e));case 5:return Te(n.stringValue,e.stringValue);case 6:return function(s,o){const c=Ar(s),l=Ar(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=Te(c[u],l[u]);if(d!==0)return d}return Te(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const c=Te(Ke(s.latitude),Ke(o.latitude));return c!==0?c:Te(Ke(s.longitude),Ke(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const c=s.values||[],l=o.values||[];for(let u=0;u<c.length&&u<l.length;++u){const d=si(c[u],l[u]);if(d)return d}return Te(c.length,l.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Qs.mapValue&&o===Qs.mapValue)return 0;if(s===Qs.mapValue)return 1;if(o===Qs.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let f=0;f<l.length&&f<d.length;++f){const m=Te(l[f],d[f]);if(m!==0)return m;const E=si(c[l[f]],u[d[f]]);if(E!==0)return E}return Te(l.length,d.length)}(n.mapValue,e.mapValue);default:throw re()}}function Jh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Te(n,e);const t=Zn(n),r=Zn(e),i=Te(t.seconds,r.seconds);return i!==0?i:Te(t.nanos,r.nanos)}function oi(n){return Cc(n)}function Cc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Zn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ar(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Cc(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Cc(t.fields[o])}`;return i+"}"}(n.mapValue):re()}function kc(n){return!!n&&"integerValue"in n}function Al(n){return!!n&&"arrayValue"in n}function Yh(n){return!!n&&"nullValue"in n}function Xh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function so(n){return!!n&&"mapValue"in n}function Gi(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Dr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Gi(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gi(n.arrayValue.values[t]);return e}return Object.assign({},n)}function zb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!so(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(t)}setAll(e){let t=ct.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=c.popLast()}o?r[c.lastSegment()]=Gi(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());so(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];so(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Dr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It(Gi(this.value))}}function Lp(n){const e=[];return Dr(n.fields,(t,r)=>{const i=new ct([t]);if(so(r)){const s=Lp(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,t,r,i,s,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new yt(e,0,se.min(),se.min(),se.min(),It.empty(),0)}static newFoundDocument(e,t,r,i){return new yt(e,1,t,se.min(),r,i,0)}static newNoDocument(e,t){return new yt(e,2,t,se.min(),se.min(),It.empty(),0)}static newUnknownDocument(e,t){return new yt(e,3,t,se.min(),se.min(),It.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xo{constructor(e,t){this.position=e,this.inclusive=t}}function Zh(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=ee.comparator(ee.fromName(o.referenceValue),t.key):r=si(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ed(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!sn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class No{constructor(e,t="asc"){this.field=e,this.dir=t}}function $b(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Mp{}class Ye extends Mp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Hb(e,t,r):t==="array-contains"?new Gb(e,r):t==="in"?new Qb(e,r):t==="not-in"?new Jb(e,r):t==="array-contains-any"?new Yb(e,r):new Ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Wb(e,r):new Kb(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(si(t,this.value)):t!==null&&Pr(this.value)===Pr(t)&&this.matchesComparison(si(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends Mp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new on(e,t)}matches(e){return Vp(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Vp(n){return n.op==="and"}function Fp(n){return qb(n)&&Vp(n)}function qb(n){for(const e of n.filters)if(e instanceof on)return!1;return!0}function Oc(n){if(n instanceof Ye)return n.field.canonicalString()+n.op.toString()+oi(n.value);if(Fp(n))return n.filters.map(e=>Oc(e)).join(",");{const e=n.filters.map(t=>Oc(t)).join(",");return`${n.op}(${e})`}}function Up(n,e){return n instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)}(n,e):n instanceof on?function(r,i){return i instanceof on&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&Up(o,i.filters[c]),!0):!1}(n,e):void re()}function jp(n){return n instanceof Ye?function(t){return`${t.field.canonicalString()} ${t.op} ${oi(t.value)}`}(n):n instanceof on?function(t){return t.op.toString()+" {"+t.getFilters().map(jp).join(" ,")+"}"}(n):"Filter"}class Hb extends Ye{constructor(e,t,r){super(e,t,r),this.key=ee.fromName(r.referenceValue)}matches(e){const t=ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class Wb extends Ye{constructor(e,t){super(e,"in",t),this.keys=Bp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Kb extends Ye{constructor(e,t){super(e,"not-in",t),this.keys=Bp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bp(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>ee.fromName(r.referenceValue))}class Gb extends Ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Al(t)&&cs(t.arrayValue,this.value)}}class Qb extends Ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cs(this.value.arrayValue,t)}}class Jb extends Ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!cs(this.value.arrayValue,t)}}class Yb extends Ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Al(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>cs(this.value.arrayValue,r))}}/**
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
 */class Xb{constructor(e,t=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}}function td(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Xb(n,e,t,r,i,s,o)}function Pl(n){const e=ae(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Oc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),na(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>oi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>oi(r)).join(",")),e.ue=t}return e.ue}function Cl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$b(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Up(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ed(n.startAt,e.startAt)&&ed(n.endAt,e.endAt)}function Dc(n){return ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t=null,r=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Zb(n,e,t,r,i,s,o,c){return new ra(n,e,t,r,i,s,o,c)}function kl(n){return new ra(n)}function nd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function eI(n){return n.collectionGroup!==null}function Qi(n){const e=ae(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new lt(ct.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new No(s,r))}),t.has(ct.keyField().canonicalString())||e.ce.push(new No(ct.keyField(),r))}return e.ce}function tn(n){const e=ae(n);return e.le||(e.le=tI(e,Qi(n))),e.le}function tI(n,e){if(n.limitType==="F")return td(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new No(i.field,s)});const t=n.endAt?new xo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new xo(n.startAt.position,n.startAt.inclusive):null;return td(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xc(n,e,t){return new ra(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ia(n,e){return Cl(tn(n),tn(e))&&n.limitType===e.limitType}function zp(n){return`${Pl(tn(n))}|lt:${n.limitType}`}function qr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>jp(i)).join(", ")}]`),na(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>oi(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>oi(i)).join(",")),`Target(${r})`}(tn(n))}; limitType=${n.limitType})`}function sa(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ee.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Qi(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,c,l){const u=Zh(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,Qi(r),i)||r.endAt&&!function(o,c,l){const u=Zh(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,Qi(r),i))}(n,e)}function nI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $p(n){return(e,t)=>{let r=!1;for(const i of Qi(n)){const s=rI(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function rI(n,e,t){const r=n.field.isKeyField()?ee.comparator(e.key,t.key):function(s,o,c){const l=o.data.field(s),u=c.data.field(s);return l!==null&&u!==null?si(l,u):re()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return xp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI=new Fe(ee.comparator);function Rn(){return iI}const qp=new Fe(ee.comparator);function Hi(...n){let e=qp;for(const t of n)e=e.insert(t.key,t);return e}function Hp(n){let e=qp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function yr(){return Ji()}function Wp(){return Ji()}function Ji(){return new pi(n=>n.toString(),(n,e)=>n.isEqual(e))}const sI=new Fe(ee.comparator),oI=new lt(ee.comparator);function he(...n){let e=oI;for(const t of n)e=e.add(t);return e}const aI=new lt(Te);function cI(){return aI}/**
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
 */function Kp(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Do(e)?"-0":e}}function Gp(n){return{integerValue:""+n}}function lI(n,e){return Ub(e)?Gp(e):Kp(n,e)}/**
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
 */class oa{constructor(){this._=void 0}}function uI(n,e,t){return n instanceof Lo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Sl(s)&&(s=Rl(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof ls?Jp(n,e):n instanceof us?Yp(n,e):function(i,s){const o=Qp(i,s),c=rd(o)+rd(i.Pe);return kc(o)&&kc(i.Pe)?Gp(c):Kp(i.serializer,c)}(n,e)}function hI(n,e,t){return n instanceof ls?Jp(n,e):n instanceof us?Yp(n,e):t}function Qp(n,e){return n instanceof Mo?function(r){return kc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Lo extends oa{}class ls extends oa{constructor(e){super(),this.elements=e}}function Jp(n,e){const t=Xp(e);for(const r of n.elements)t.some(i=>sn(i,r))||t.push(r);return{arrayValue:{values:t}}}class us extends oa{constructor(e){super(),this.elements=e}}function Yp(n,e){let t=Xp(e);for(const r of n.elements)t=t.filter(i=>!sn(i,r));return{arrayValue:{values:t}}}class Mo extends oa{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function rd(n){return Ke(n.integerValue||n.doubleValue)}function Xp(n){return Al(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function dI(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof ls&&i instanceof ls||r instanceof us&&i instanceof us?ii(r.elements,i.elements,sn):r instanceof Mo&&i instanceof Mo?sn(r.Pe,i.Pe):r instanceof Lo&&i instanceof Lo}(n.transform,e.transform)}class fI{constructor(e,t){this.version=e,this.transformResults=t}}class nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class aa{}function Zp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new tm(n.key,nn.none()):new Is(n.key,n.data,nn.none());{const t=n.data,r=It.empty();let i=new lt(ct.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new sr(n.key,r,new Nt(i.toArray()),nn.none())}}function pI(n,e,t){n instanceof Is?function(i,s,o){const c=i.value.clone(),l=sd(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof sr?function(i,s,o){if(!oo(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=sd(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(em(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Yi(n,e,t,r){return n instanceof Is?function(s,o,c,l){if(!oo(s.precondition,o))return c;const u=s.value.clone(),d=od(s.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof sr?function(s,o,c,l){if(!oo(s.precondition,o))return c;const u=od(s.fieldTransforms,l,o),d=o.data;return d.setAll(em(s)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(n,e,t,r):function(s,o,c){return oo(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function mI(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Qp(r.transform,i||null);s!=null&&(t===null&&(t=It.empty()),t.set(r.field,s))}return t||null}function id(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ii(r,i,(s,o)=>dI(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Is extends aa{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sr extends aa{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function em(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function sd(n,e,t){const r=new Map;Ce(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,hI(o,c,t[i]))}return r}function od(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,uI(s,o,e))}return r}class tm extends aa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gI extends aa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&pI(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Yi(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Yi(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Wp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const l=Zp(o,c);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(se.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),he())}isEqual(e){return this.batchId===e.batchId&&ii(this.mutations,e.mutations,(t,r)=>id(t,r))&&ii(this.baseMutations,e.baseMutations,(t,r)=>id(t,r))}}class Ol{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ce(e.mutations.length===r.length);let i=function(){return sI}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ol(e,t,r,i)}}/**
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
 */class _I{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class vI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ye;function wI(n){switch(n){default:return re();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function nm(n){if(n===void 0)return Sn("GRPC error has no .code"),z.UNKNOWN;switch(n){case He.OK:return z.OK;case He.CANCELLED:return z.CANCELLED;case He.UNKNOWN:return z.UNKNOWN;case He.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case He.INTERNAL:return z.INTERNAL;case He.UNAVAILABLE:return z.UNAVAILABLE;case He.UNAUTHENTICATED:return z.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case He.NOT_FOUND:return z.NOT_FOUND;case He.ALREADY_EXISTS:return z.ALREADY_EXISTS;case He.PERMISSION_DENIED:return z.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case He.ABORTED:return z.ABORTED;case He.OUT_OF_RANGE:return z.OUT_OF_RANGE;case He.UNIMPLEMENTED:return z.UNIMPLEMENTED;case He.DATA_LOSS:return z.DATA_LOSS;default:return re()}}(ye=He||(He={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function EI(){return new TextEncoder}/**
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
 */const TI=new _r([4294967295,4294967295],0);function ad(n){const e=EI().encode(n),t=new Ip;return t.update(e),new Uint8Array(t.digest())}function cd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new _r([t,r],0),new _r([i,s],0)]}class Dl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wi(`Invalid padding: ${t}`);if(r<0)throw new Wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wi(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wi(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=_r.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(_r.fromNumber(r)));return i.compare(TI)===1&&(i=new _r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=ad(e),[r,i]=cd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dl(s,i,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=ad(e),[r,i]=cd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Ss.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ca(se.min(),i,new Fe(Te),Rn(),he())}}class Ss{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ss(r,t,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class rm{constructor(e,t){this.targetId=e,this.me=t}}class im{constructor(e,t,r=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ld{constructor(){this.fe=0,this.ge=hd(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=he(),t=he(),r=he();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:re()}}),new Ss(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=hd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ce(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class bI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rn(),this.qe=ud(),this.Qe=new Fe(Te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:re()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Dc(s))if(r===0){const o=new ee(s.path);this.Ue(t,o,yt.newNoDocument(o,se.min()))}else Ce(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,u)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=Ar(r).toUint8Array()}catch(l){if(l instanceof Np)return ri("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Dl(o,i,s)}catch(l){return ri(l instanceof Wi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const c=this.Je(o);if(c){if(s.current&&Dc(c.target)){const l=new ee(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,yt.newNoDocument(l,e))}s.be&&(t.set(o,s.Ce()),s.ve())}});let r=he();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new ca(e,t,this.Qe,this.ke,r);return this.ke=Rn(),this.qe=ud(),this.Qe=new Fe(Te),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ld,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new lt(Te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||Q("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ld),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ud(){return new Fe(ee.comparator)}function hd(){return new Fe(ee.comparator)}const II={asc:"ASCENDING",desc:"DESCENDING"},SI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RI={and:"AND",or:"OR"};class AI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nc(n,e){return n.useProto3Json||na(e)?e:{value:e}}function Vo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function PI(n,e){return Vo(n,e.toTimestamp())}function rn(n){return Ce(!!n),se.fromTimestamp(function(t){const r=Zn(t);return new Xe(r.seconds,r.nanos)}(n))}function xl(n,e){return Lc(n,e).canonicalString()}function Lc(n,e){const t=function(i){return new je(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function om(n){const e=je.fromString(n);return Ce(hm(e)),e}function Mc(n,e){return xl(n.databaseId,e.path)}function Wa(n,e){const t=om(e);if(t.get(1)!==n.databaseId.projectId)throw new Z(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ee(cm(t))}function am(n,e){return xl(n.databaseId,e)}function CI(n){const e=om(n);return e.length===4?je.emptyPath():cm(e)}function Vc(n){return new je(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cm(n){return Ce(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function dd(n,e,t){return{name:Mc(n,e),fields:t.value.mapValue.fields}}function kI(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,d){return u.useProto3Json?(Ce(d===void 0||typeof d=="string"),_t.fromBase64String(d||"")):(Ce(d===void 0||d instanceof Buffer||d instanceof Uint8Array),_t.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const d=u.code===void 0?z.UNKNOWN:nm(u.code);return new Z(d,u.message||"")}(o);t=new im(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wa(n,r.document.name),s=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):se.min(),c=new It({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(i,s,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];t=new ao(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wa(n,r.document),s=r.readTime?rn(r.readTime):se.min(),o=yt.newNoDocument(i,s),c=r.removedTargetIds||[];t=new ao([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wa(n,r.document),s=r.removedTargetIds||[];t=new ao([],s,i,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new vI(i,s),c=r.targetId;t=new rm(c,o)}}return t}function OI(n,e){let t;if(e instanceof Is)t={update:dd(n,e.key,e.value)};else if(e instanceof tm)t={delete:Mc(n,e.key)};else if(e instanceof sr)t={update:dd(n,e.key,e.data),updateMask:jI(e.fieldMask)};else{if(!(e instanceof gI))return re();t={verify:Mc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof Lo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ls)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof us)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Mo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw re()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:PI(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:re()}(n,e.precondition)),t}function DI(n,e){return n&&n.length>0?(Ce(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?rn(i.updateTime):rn(s);return o.isEqual(se.min())&&(o=rn(s)),new fI(o,i.transformResults||[])}(t,e))):[]}function xI(n,e){return{documents:[am(n,e.path)]}}function NI(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=am(n,i);const s=function(u){if(u.length!==0)return um(on.create(u,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:Hr(m.field),direction:VI(m.dir)}}(d))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Nc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:t,parent:i}}function LI(n){let e=CI(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ce(r===1);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=function(f){const m=lm(f);return m instanceof on&&Fp(m)?m.getFilters():[m]}(t.where));let o=[];t.orderBy&&(o=function(f){return f.map(m=>function(w){return new No(Wr(w.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(t.orderBy));let c=null;t.limit&&(c=function(f){let m;return m=typeof f=="object"?f.value:f,na(m)?null:m}(t.limit));let l=null;t.startAt&&(l=function(f){const m=!!f.before,E=f.values||[];return new xo(E,m)}(t.startAt));let u=null;return t.endAt&&(u=function(f){const m=!f.before,E=f.values||[];return new xo(E,m)}(t.endAt)),Zb(e,i,o,s,c,"F",l,u)}function MI(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function lm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Wr(t.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Wr(t.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Wr(t.unaryFilter.field);return Ye.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Wr(t.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(n):n.fieldFilter!==void 0?function(t){return Ye.create(Wr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return on.create(t.compositeFilter.filters.map(r=>lm(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return re()}}(t.compositeFilter.op))}(n):re()}function VI(n){return II[n]}function FI(n){return SI[n]}function UI(n){return RI[n]}function Hr(n){return{fieldPath:n.canonicalString()}}function Wr(n){return ct.fromServerFormat(n.fieldPath)}function um(n){return n instanceof Ye?function(t){if(t.op==="=="){if(Xh(t.value))return{unaryFilter:{field:Hr(t.field),op:"IS_NAN"}};if(Yh(t.value))return{unaryFilter:{field:Hr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xh(t.value))return{unaryFilter:{field:Hr(t.field),op:"IS_NOT_NAN"}};if(Yh(t.value))return{unaryFilter:{field:Hr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(t.field),op:FI(t.op),value:t.value}}}(n):n instanceof on?function(t){const r=t.getFilters().map(i=>um(i));return r.length===1?r[0]:{compositeFilter:{op:UI(t.op),filters:r}}}(n):re()}function jI(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function hm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t,r,i,s=se.min(),o=se.min(),c=_t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.ct=e}}function zI(n){const e=LI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?xc(e,e.limit,"L"):e}/**
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
 */class $I{constructor(){this._n=new qI}addToCollectionParentIndex(e,t){return this._n.add(t),B.resolve()}getCollectionParents(e,t){return B.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return B.resolve()}deleteFieldIndex(e,t){return B.resolve()}deleteAllFieldIndexes(e){return B.resolve()}createTargetIndexes(e,t){return B.resolve()}getDocumentsMatchingTarget(e,t){return B.resolve(null)}getIndexType(e,t){return B.resolve(0)}getFieldIndexes(e,t){return B.resolve([])}getNextCollectionGroupToUpdate(e){return B.resolve(null)}getMinOffset(e,t){return B.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,t){return B.resolve(Xn.min())}updateCollectionGroup(e,t,r){return B.resolve()}updateIndexEntries(e,t){return B.resolve()}}class qI{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new lt(je.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new lt(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ai(0)}static Ln(){return new ai(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(){this.changes=new pi(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?B.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Yi(r.mutation,i,Nt.empty(),Xe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,t,r=he()){const i=yr();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Hi();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=yr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,he()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,i){let s=Rn();const o=Ji(),c=function(){return Ji()}();return t.forEach((l,u)=>{const d=r.get(u.key);i.has(u.key)&&(d===void 0||d.mutation instanceof sr)?s=s.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),Yi(d.mutation,u,d.mutation.getFieldMask(),Xe.now())):o.set(u.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,d)=>o.set(u,d)),t.forEach((u,d)=>{var f;return c.set(u,new WI(d,(f=o.get(u))!==null&&f!==void 0?f:null))}),c))}recalculateAndSaveOverlays(e,t){const r=Ji();let i=new Fe((o,c)=>o-c),s=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let d=r.get(l)||Nt.empty();d=c.applyToLocalView(u,d),r.set(l,d);const f=(i.get(c.batchId)||he()).add(l);i=i.insert(c.batchId,f)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,f=Wp();d.forEach(m=>{if(!s.has(m)){const E=Zp(t.get(m),r.get(m));E!==null&&f.set(m,E),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return B.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return ee.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):B.resolve(yr());let c=-1,l=s;return o.next(u=>B.forEach(u,(d,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),s.get(d)?B.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{l=l.insert(d,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,he())).next(d=>({batchId:c,changes:Hp(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ee(t)).next(r=>{let i=Hi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Hi();return this.indexManager.getCollectionParents(e,s).next(c=>B.forEach(c,l=>{const u=function(f,m){return new ra(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(d=>{d.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,yt.newInvalidDocument(d)))});let c=Hi();return o.forEach((l,u)=>{const d=s.get(l);d!==void 0&&Yi(d.mutation,u,Nt.empty(),Xe.now()),sa(t,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class GI{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return B.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:rn(i.createTime)}}(t)),B.resolve()}getNamedQuery(e,t){return B.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,function(i){return{name:i.name,query:zI(i.bundledQuery),readTime:rn(i.readTime)}}(t)),B.resolve()}}/**
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
 */class QI{constructor(){this.overlays=new Fe(ee.comparator),this.hr=new Map}getOverlay(e,t){return B.resolve(this.overlays.get(t))}getOverlays(e,t){const r=yr();return B.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),B.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),B.resolve()}getOverlaysForCollection(e,t,r){const i=yr(),s=t.length+1,o=new ee(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return B.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new Fe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let d=s.get(u.largestBatchId);d===null&&(d=yr(),s=s.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=yr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,d)=>c.set(u,d)),!(c.size()>=i)););return B.resolve(c)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _I(t,r));let s=this.hr.get(t);s===void 0&&(s=he(),this.hr.set(t,s)),this.hr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.Pr=new lt(tt.Ir),this.Tr=new lt(tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const r=new tt(e,t);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ar(new tt(e,t))}Rr(e,t){e.forEach(r=>this.removeReference(r,t))}Vr(e){const t=new ee(new je([])),r=new tt(t,e),i=new tt(t,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new ee(new je([])),r=new tt(t,e),i=new tt(t,e+1);let s=he();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new tt(e,0),r=this.Pr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return ee.comparator(e.key,t.key)||Te(e.pr,t.pr)}static Er(e,t){return Te(e.pr,t.pr)||ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new lt(tt.Ir)}checkEmpty(e){return B.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yI(s,t,r,i);this.mutationQueue.push(o);for(const c of i)this.wr=this.wr.add(new tt(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return B.resolve(o)}lookupMutationBatch(e,t){return B.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.br(r),s=i<0?0:i;return B.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return B.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return B.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new tt(t,0),i=new tt(t,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const c=this.Sr(o.pr);s.push(c)}),B.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new lt(Te);return t.forEach(i=>{const s=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],c=>{r=r.add(c.pr)})}),B.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;ee.isDocumentKey(s)||(s=s.child(""));const o=new tt(new ee(s),0);let c=new lt(Te);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(c=c.add(l.pr)),!0)},o),B.resolve(this.Dr(c))}Dr(e){const t=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){Ce(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return B.forEach(t.mutations,i=>{const s=new tt(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,t){const r=new tt(t,0),i=this.wr.firstAfterOrEqual(r);return B.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,B.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.vr=e,this.docs=function(){return new Fe(ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return B.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(t))}getEntries(e,t){let r=Rn();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():yt.newInvalidDocument(i))}),B.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Rn();const o=t.path,c=new ee(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Lb(Nb(d),r)<=0||(i.has(d.key)||sa(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return B.resolve(s)}getAllFromCollectionGroup(e,t,r,i){re()}Fr(e,t){return B.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new XI(this)}getSize(e){return B.resolve(this.size)}}class XI extends HI{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),B.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.persistence=e,this.Mr=new pi(t=>Pl(t),Cl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Nl,this.targetCount=0,this.Lr=ai.Nn()}forEachTarget(e,t){return this.Mr.forEach((r,i)=>t(i)),B.resolve()}getLastRemoteSnapshotVersion(e){return B.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return B.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),B.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Or&&(this.Or=t),B.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new ai(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,B.resolve()}updateTargetData(e,t){return this.qn(t),B.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,B.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),B.waitFor(s).next(()=>i)}getTargetCount(e){return B.resolve(this.targetCount)}getTargetData(e,t){const r=this.Mr.get(t)||null;return B.resolve(r)}addMatchingKeys(e,t,r){return this.Nr.dr(t,r),B.resolve()}removeMatchingKeys(e,t,r){this.Nr.Rr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),B.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),B.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Nr.gr(t);return B.resolve(r)}containsKey(e,t){return B.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e,t){this.Br={},this.overlays={},this.kr=new Il(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new ZI(this),this.indexManager=new $I,this.remoteDocumentCache=function(i){return new YI(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new BI(t),this.$r=new GI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new QI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new JI(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,r){Q("MemoryPersistence","Starting transaction:",e);const i=new tS(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,t){return B.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class tS extends Vb{constructor(e){super(),this.currentSequenceNumber=e}}class Ll{constructor(e){this.persistence=e,this.zr=new Nl,this.jr=null}static Hr(e){return new Ll(e)}get Jr(){if(this.jr)return this.jr;throw re()}addReference(e,t,r){return this.zr.addReference(r,t),this.Jr.delete(r.toString()),B.resolve()}removeReference(e,t,r){return this.zr.removeReference(r,t),this.Jr.add(r.toString()),B.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),B.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return B.forEach(this.Jr,r=>{const i=ee.fromPath(r);return this.Yr(e,i).next(s=>{s||t.removeEntry(i,se.min())})}).next(()=>(this.jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Yr(e,t).next(r=>{r?this.Jr.delete(t.toString()):this.Jr.add(t.toString())})}Kr(e){return 0}Yr(e,t){return B.or([()=>B.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.qi=r,this.Qi=i}static Ki(e,t){let r=he(),i=he();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ml(e,t.fromCache,r,i)}}/**
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
 */class nS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rS{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Kw()?8:Fb(ut())>0?6:4}()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ji(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new nS;return this.Ji(e,t,o).next(c=>{if(s.result=c,this.Ui)return this.Yi(e,t,o,c.size)})}).next(()=>s.result)}Yi(e,t,r,i){return r.documentReadCount<this.Wi?(Fi()<=pe.DEBUG&&Q("QueryEngine","SDK will not create cache indexes for query:",qr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),B.resolve()):(Fi()<=pe.DEBUG&&Q("QueryEngine","Query:",qr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Fi()<=pe.DEBUG&&Q("QueryEngine","The SDK decides to create cache indexes for query:",qr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(t))):B.resolve())}ji(e,t){if(nd(t))return B.resolve(null);let r=tn(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=xc(t,null,"F"),r=tn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=he(...s);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(t,c);return this.Xi(t,u,o,l.readTime)?this.ji(e,xc(t,null,"F")):this.es(e,u,t,l)}))})))}Hi(e,t,r,i){return nd(t)||i.isEqual(se.min())?B.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(t,s);return this.Xi(t,o,r,i)?B.resolve(null):(Fi()<=pe.DEBUG&&Q("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qr(t)),this.es(e,o,t,xb(i,-1)).next(c=>c))})}Zi(e,t){let r=new lt($p(e));return t.forEach((i,s)=>{sa(e,s)&&(r=r.add(s))}),r}Xi(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,t,r){return Fi()<=pe.DEBUG&&Q("QueryEngine","Using full collection scan to execute query:",qr(t)),this.zi.getDocumentsMatchingQuery(e,t,Xn.min(),r)}es(e,t,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class iS{constructor(e,t,r,i){this.persistence=e,this.ts=t,this.serializer=i,this.ns=new Fe(Te),this.rs=new pi(s=>Pl(s),Cl),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KI(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ns))}}function sS(n,e,t,r){return new iS(n,e,t,r)}async function dm(n,e){const t=ae(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t._s(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let l=he();for(const u of i){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of s){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:c}))})})}function oS(n,e){const t=ae(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.os.newChangeBuffer({trackRemovals:!0});return function(c,l,u,d){const f=u.batch,m=f.keys();let E=B.resolve();return m.forEach(w=>{E=E.next(()=>d.getEntry(l,w)).next(R=>{const C=u.docVersions.get(w);Ce(C!==null),R.version.compareTo(C)<0&&(f.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),d.addEntry(R)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=he();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function fm(n){const e=ae(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Qr.getLastRemoteSnapshotVersion(t))}function aS(n,e){const t=ae(n),r=e.snapshotVersion;let i=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.os.newChangeBuffer({trackRemovals:!0});i=t.ns;const c=[];e.targetChanges.forEach((d,f)=>{const m=i.get(f);if(!m)return;c.push(t.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>t.Qr.addMatchingKeys(s,d.addedDocuments,f)));let E=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?E=E.withResumeToken(_t.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(d.resumeToken,r)),i=i.insert(f,E),function(R,C,F){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(m,E,d)&&c.push(t.Qr.updateTargetData(s,E))});let l=Rn(),u=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))}),c.push(cS(s,o,e.documentUpdates).next(d=>{l=d.cs,u=d.ls})),!r.isEqual(se.min())){const d=t.Qr.getLastRemoteSnapshotVersion(s).next(f=>t.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(d)}return B.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(t.ns=i,s))}function cS(n,e,t){let r=he(),i=he();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=Rn();return t.forEach((c,l)=>{const u=s.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Q("LocalStore","Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function lS(n,e){const t=ae(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function uS(n,e){const t=ae(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Qr.getTargetData(r,e).next(s=>s?(i=s,B.resolve(i)):t.Qr.allocateTargetId(r).next(o=>(i=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ns=t.ns.insert(r.targetId,r),t.rs.set(e,r.targetId)),r})}async function Fc(n,e,t){const r=ae(n),i=r.ns.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!bs(o))throw o;Q("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function fd(n,e,t){const r=ae(n);let i=se.min(),s=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,d){const f=ae(l),m=f.rs.get(d);return m!==void 0?B.resolve(f.ns.get(m)):f.Qr.getTargetData(u,d)}(r,o,tn(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,t?i:se.min(),t?s:he())).next(c=>(hS(r,nI(e),c),{documents:c,hs:s})))}function hS(n,e,t){let r=n.ss.get(e)||se.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(e,r)}class pd{constructor(){this.activeTargetIds=cI()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dS{constructor(){this.no=new pd,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,r){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new pd,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class fS{io(e){}shutdown(){}}/**
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
 */class md{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Q("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Q("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Js=null;function Ka(){return Js===null?Js=function(){return 268435456+Math.round(2147483648*Math.random())}():Js++,"0x"+Js.toString(16)}/**
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
 */const pS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class gS extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+t.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(t,r,i,s,o){const c=Ka(),l=this.vo(t,r.toUriEncodedString());Q("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,s,o),this.Mo(t,l,u,i).then(d=>(Q("RestConnection",`Received RPC '${t}' ${c}: `,d),d),d=>{throw ri("RestConnection",`RPC '${t}' ${c} failed with error: `,d,"url: ",l,"request:",i),d})}xo(t,r,i,s,o,c){return this.Co(t,r,i,s,o)}Fo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fi}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}vo(t,r){const i=pS[t];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,r,i){const s=Ka();return new Promise((o,c)=>{const l=new Sp;l.setWithCredentials(!0),l.listenOnce(Ap.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case io.NO_ERROR:const d=l.getResponseJson();Q(mt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case io.TIMEOUT:Q(mt,`RPC '${e}' ${s} timed out`),c(new Z(z.DEADLINE_EXCEEDED,"Request time out"));break;case io.HTTP_ERROR:const f=l.getStatus();if(Q(mt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const w=function(C){const F=C.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(F)>=0?F:z.UNKNOWN}(E.status);c(new Z(w,E.message))}else c(new Z(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Z(z.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{Q(mt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);Q(mt,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",u,r,15)})}Oo(e,t,r){const i=Ka(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=kp(),c=Cp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new Rp({})),this.Fo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=s.join("");Q(mt,`Creating RPC '${e}' stream ${i}: ${d}`,l);const f=o.createWebChannel(d,l);let m=!1,E=!1;const w=new mS({lo:C=>{E?Q(mt,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(Q(mt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),Q(mt,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},ho:()=>f.close()}),R=(C,F,M)=>{C.listen(F,L=>{try{M(L)}catch(V){setTimeout(()=>{throw V},0)}})};return R(f,qi.EventType.OPEN,()=>{E||(Q(mt,`RPC '${e}' stream ${i} transport opened.`),w.mo())}),R(f,qi.EventType.CLOSE,()=>{E||(E=!0,Q(mt,`RPC '${e}' stream ${i} transport closed`),w.po())}),R(f,qi.EventType.ERROR,C=>{E||(E=!0,ri(mt,`RPC '${e}' stream ${i} transport errored:`,C),w.po(new Z(z.UNAVAILABLE,"The operation could not be completed")))}),R(f,qi.EventType.MESSAGE,C=>{var F;if(!E){const M=C.data[0];Ce(!!M);const L=M,V=L.error||((F=L[0])===null||F===void 0?void 0:F.error);if(V){Q(mt,`RPC '${e}' stream ${i} received error:`,V);const G=V.status;let P=function(_){const I=He[_];if(I!==void 0)return nm(I)}(G),S=V.message;P===void 0&&(P=z.INTERNAL,S="Unknown error status: "+G+" with message "+V.message),E=!0,w.po(new Z(P,S)),f.close()}else Q(mt,`RPC '${e}' stream ${i} received:`,M),w.yo(M)}}),R(c,Pp.STAT_EVENT,C=>{C.stat===Pc.PROXY?Q(mt,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Pc.NOPROXY&&Q(mt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function Ga(){return typeof document<"u"?document:null}/**
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
 */function la(n){return new AI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e,t,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=t,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,t-r);i>0&&Q("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,r,i,s,o,c,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new pm(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===z.RESOURCE_EXHAUSTED?(Sn(t.toString()),Sn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===t&&this.u_(r,i)},r=>{e(()=>{const i=new Z(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,t){const r=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Q("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget(()=>this.jo===e?t():(Q("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yS extends mm{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=kI(this.serializer,e),r=function(s){if(!("targetChange"in s))return se.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?se.min():o.readTime?rn(o.readTime):se.min()}(e);return this.listener.h_(t,r)}P_(e){const t={};t.database=Vc(this.serializer),t.addTarget=function(s,o){let c;const l=o.target;if(c=Dc(l)?{documents:xI(s,l)}:{query:NI(s,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=sm(s,o.resumeToken);const u=Nc(s,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(se.min())>0){c.readTime=Vo(s,o.snapshotVersion.toTimestamp());const u=Nc(s,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=MI(this.serializer,e);r&&(t.labels=r),this.i_(t)}I_(e){const t={};t.database=Vc(this.serializer),t.removeTarget=e,this.i_(t)}}class _S extends mm{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(Ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=DI(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.A_(r,t)}return Ce(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Vc(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>OI(this.serializer,r))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Z(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,Lc(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z(z.UNKNOWN,s.toString())})}xo(e,t,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,Lc(t,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class wS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Sn(t),this.y_=!1):Q("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{xr(this)&&(Q("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ae(l);u.M_.add(4),await Rs(u),u.N_.set("Unknown"),u.M_.delete(4),await ua(u)}(this))})}),this.N_=new wS(r,i)}}async function ua(n){if(xr(n))for(const e of n.x_)await e(!0)}async function Rs(n){for(const e of n.x_)await e(!1)}function gm(n,e){const t=ae(n);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),jl(t)?Ul(t):mi(t).Xo()&&Fl(t,e))}function Vl(n,e){const t=ae(n),r=mi(t);t.F_.delete(e),r.Xo()&&ym(t,e),t.F_.size===0&&(r.Xo()?r.n_():xr(t)&&t.N_.set("Unknown"))}function Fl(n,e){if(n.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}mi(n).P_(e)}function ym(n,e){n.L_.xe(e),mi(n).I_(e)}function Ul(n){n.L_=new bI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.F_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),mi(n).start(),n.N_.w_()}function jl(n){return xr(n)&&!mi(n).Zo()&&n.F_.size>0}function xr(n){return ae(n).M_.size===0}function _m(n){n.L_=void 0}async function TS(n){n.N_.set("Online")}async function bS(n){n.F_.forEach((e,t)=>{Fl(n,e)})}async function IS(n,e){_m(n),jl(n)?(n.N_.D_(e),Ul(n)):n.N_.set("Unknown")}async function SS(n,e,t){if(n.N_.set("Online"),e instanceof im&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.F_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.F_.delete(c),i.L_.removeTarget(c))}(n,e)}catch(r){Q("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fo(n,r)}else if(e instanceof ao?n.L_.Ke(e):e instanceof rm?n.L_.He(e):n.L_.We(e),!t.isEqual(se.min()))try{const r=await fm(n.localStore);t.compareTo(r)>=0&&await function(s,o){const c=s.L_.rt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.F_.get(u);d&&s.F_.set(u,d.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const d=s.F_.get(l);if(!d)return;s.F_.set(l,d.withResumeToken(_t.EMPTY_BYTE_STRING,d.snapshotVersion)),ym(s,l);const f=new Hn(d.target,l,u,d.sequenceNumber);Fl(s,f)}),s.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){Q("RemoteStore","Failed to raise snapshot:",r),await Fo(n,r)}}async function Fo(n,e,t){if(!bs(e))throw e;n.M_.add(1),await Rs(n),n.N_.set("Offline"),t||(t=()=>fm(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{Q("RemoteStore","Retrying IndexedDB access"),await t(),n.M_.delete(1),await ua(n)})}function vm(n,e){return e().catch(t=>Fo(n,t,e))}async function ha(n){const e=ae(n),t=er(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;RS(e);)try{const i=await lS(e.localStore,r);if(i===null){e.v_.length===0&&t.n_();break}r=i.batchId,AS(e,i)}catch(i){await Fo(e,i)}wm(e)&&Em(e)}function RS(n){return xr(n)&&n.v_.length<10}function AS(n,e){n.v_.push(e);const t=er(n);t.Xo()&&t.E_&&t.d_(e.mutations)}function wm(n){return xr(n)&&!er(n).Zo()&&n.v_.length>0}function Em(n){er(n).start()}async function PS(n){er(n).V_()}async function CS(n){const e=er(n);for(const t of n.v_)e.d_(t.mutations)}async function kS(n,e,t){const r=n.v_.shift(),i=Ol.from(r,e,t);await vm(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ha(n)}async function OS(n,e){e&&er(n).E_&&await async function(r,i){if(function(o){return wI(o)&&o!==z.ABORTED}(i.code)){const s=r.v_.shift();er(r).t_(),await vm(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ha(r)}}(n,e),wm(n)&&Em(n)}async function gd(n,e){const t=ae(n);t.asyncQueue.verifyOperationInProgress(),Q("RemoteStore","RemoteStore received new credentials");const r=xr(t);t.M_.add(3),await Rs(t),r&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await ua(t)}async function DS(n,e){const t=ae(n);e?(t.M_.delete(2),await ua(t)):e||(t.M_.add(2),await Rs(t),t.N_.set("Unknown"))}function mi(n){return n.B_||(n.B_=function(t,r,i){const s=ae(t);return s.f_(),new yS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:TS.bind(null,n),To:bS.bind(null,n),Ao:IS.bind(null,n),h_:SS.bind(null,n)}),n.x_.push(async e=>{e?(n.B_.t_(),jl(n)?Ul(n):n.N_.set("Unknown")):(await n.B_.stop(),_m(n))})),n.B_}function er(n){return n.k_||(n.k_=function(t,r,i){const s=ae(t);return s.f_(),new _S(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:PS.bind(null,n),Ao:OS.bind(null,n),R_:CS.bind(null,n),A_:kS.bind(null,n)}),n.x_.push(async e=>{e?(n.k_.t_(),await ha(n)):(await n.k_.stop(),n.v_.length>0&&(Q("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,c=new Bl(e,t,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(n,e){if(Sn("AsyncQueue",`${e}: ${n}`),bs(n))return new Z(z.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||ee.comparator(t.key,r.key):(t,r)=>ee.comparator(t.key,r.key),this.keyedMap=Hi(),this.sortedSet=new Fe(this.comparator)}static emptySet(e){return new Xr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Xr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Xr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.q_=new Fe(ee.comparator)}track(e){const t=e.doc.key,r=this.q_.get(t);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(t,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(t):e.type===1&&r.type===2?this.q_=this.q_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):re():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ci{constructor(e,t,r,i,s,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new ci(e,t,Xr.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class NS{constructor(){this.queries=new pi(e=>zp(e),ia),this.onlineState="Unknown",this.z_=new Set}}async function LS(n,e){const t=ae(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new xS,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await t.onListen(i,!0);break;case 1:s.K_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=zl(o,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.U_.push(e),e.j_(t.onlineState),s.K_&&e.H_(s.K_)&&$l(t)}async function MS(n,e){const t=ae(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function VS(n,e){const t=ae(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.U_)c.H_(i)&&(r=!0);o.K_=i}}r&&$l(t)}function FS(n,e,t){const r=ae(n),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(t);r.queries.delete(e)}function $l(n){n.z_.forEach(e=>{e.next()})}var Uc,_d;(_d=Uc||(Uc={})).J_="default",_d.Cache="cache";class US{constructor(e,t,r){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ci(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const r=t!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Uc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.key=e}}class bm{constructor(e){this.key=e}}class jS{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=he(),this.mutatedKeys=he(),this.Ia=$p(e),this.Ta=new Xr(this.Ia)}get Ea(){return this.la}da(e,t){const r=t?t.Aa:new yd,i=t?t.Ta:this.Ta;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,f)=>{const m=i.get(d),E=sa(this.query,f)?f:null,w=!!m&&this.mutatedKeys.has(m.key),R=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let C=!1;m&&E?m.data.isEqual(E.data)?w!==R&&(r.track({type:3,doc:E}),C=!0):this.Ra(m,E)||(r.track({type:2,doc:E}),C=!0,(l&&this.Ia(E,l)>0||u&&this.Ia(E,u)<0)&&(c=!0)):!m&&E?(r.track({type:0,doc:E}),C=!0):m&&!E&&(r.track({type:1,doc:m}),C=!0,(l||u)&&(c=!0)),C&&(E?(o=o.add(E),s=R?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:s}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((d,f)=>function(E,w){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return R(E)-R(w)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(r),i=i!=null&&i;const c=t&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new ci(this.query,e.Ta,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new yd,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(t=>this.la=this.la.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.la=this.la.delete(t)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=he(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const t=[];return e.forEach(r=>{this.Pa.has(r)||t.push(new bm(r))}),this.Pa.forEach(r=>{e.has(r)||t.push(new Tm(r))}),t}pa(e){this.la=e.hs,this.Pa=he();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return ci.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class BS{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zS{constructor(e){this.key=e,this.wa=!1}}class $S{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new pi(c=>zp(c),ia),this.Da=new Map,this.Ca=new Set,this.va=new Fe(ee.comparator),this.Fa=new Map,this.Ma=new Nl,this.xa={},this.Oa=new Map,this.Na=ai.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function qS(n,e,t=!0){const r=Cm(n);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Im(r,e,t,!0),i}async function HS(n,e){const t=Cm(n);await Im(t,e,!0,!1)}async function Im(n,e,t,r){const i=await uS(n.localStore,tn(e)),s=i.targetId,o=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let c;return r&&(c=await WS(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&gm(n.remoteStore,i),c}async function WS(n,e,t,r,i){n.Ba=(f,m,E)=>async function(R,C,F,M){let L=C.view.da(F);L.Xi&&(L=await fd(R.localStore,C.query,!1).then(({documents:S})=>C.view.da(S,L)));const V=M&&M.targetChanges.get(C.targetId),G=M&&M.targetMismatches.get(C.targetId)!=null,P=C.view.applyChanges(L,R.isPrimaryClient,V,G);return wd(R,C.targetId,P.fa),P.snapshot}(n,f,m,E);const s=await fd(n.localStore,e,!0),o=new jS(e,s.hs),c=o.da(s.documents),l=Ss.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),u=o.applyChanges(c,n.isPrimaryClient,l);wd(n,t,u.fa);const d=new BS(e,t,o);return n.ba.set(e,d),n.Da.has(t)?n.Da.get(t).push(e):n.Da.set(t,[e]),u.snapshot}async function KS(n,e,t){const r=ae(n),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!ia(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Vl(r.remoteStore,i.targetId),jc(r,i.targetId)}).catch(Ts)):(jc(r,i.targetId),await Fc(r.localStore,i.targetId,!0))}async function GS(n,e){const t=ae(n),r=t.ba.get(e),i=t.Da.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Vl(t.remoteStore,r.targetId))}async function QS(n,e,t){const r=nR(n);try{const i=await function(o,c){const l=ae(o),u=Xe.now(),d=c.reduce((E,w)=>E.add(w.key),he());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let w=Rn(),R=he();return l.os.getEntries(E,d).next(C=>{w=C,w.forEach((F,M)=>{M.isValidDocument()||(R=R.add(F))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,w)).next(C=>{f=C;const F=[];for(const M of c){const L=mI(M,f.get(M.key).overlayedDocument);L!=null&&F.push(new sr(M.key,L,Lp(L.value.mapValue),nn.exists(!0)))}return l.mutationQueue.addMutationBatch(E,u,F,c)}).next(C=>{m=C;const F=C.applyToLocalDocumentSet(f,R);return l.documentOverlayCache.saveOverlays(E,C.batchId,F)})}).then(()=>({batchId:m.batchId,changes:Hp(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let u=o.xa[o.currentUser.toKey()];u||(u=new Fe(Te)),u=u.insert(c,l),o.xa[o.currentUser.toKey()]=u}(r,i.batchId,t),await As(r,i.changes),await ha(r.remoteStore)}catch(i){const s=zl(i,"Failed to persist write");t.reject(s)}}async function Sm(n,e){const t=ae(n);try{const r=await aS(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Fa.get(s);o&&(Ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Ce(o.wa):i.removedDocuments.size>0&&(Ce(o.wa),o.wa=!1))}),await As(t,r,e)}catch(r){await Ts(r)}}function vd(n,e,t){const r=ae(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.ba.forEach((s,o)=>{const c=o.view.j_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const l=ae(o);l.onlineState=c;let u=!1;l.queries.forEach((d,f)=>{for(const m of f.U_)m.j_(c)&&(u=!0)}),u&&$l(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JS(n,e,t){const r=ae(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Fe(ee.comparator);o=o.insert(s,yt.newNoDocument(s,se.min()));const c=he().add(s),l=new ca(se.min(),new Map,new Fe(Te),o,c);await Sm(r,l),r.va=r.va.remove(s),r.Fa.delete(e),ql(r)}else await Fc(r.localStore,e,!1).then(()=>jc(r,e,t)).catch(Ts)}async function YS(n,e){const t=ae(n),r=e.batch.batchId;try{const i=await oS(t.localStore,e);Am(t,r,null),Rm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await As(t,i)}catch(i){await Ts(i)}}async function XS(n,e,t){const r=ae(n);try{const i=await function(o,c){const l=ae(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next(f=>(Ce(f!==null),d=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>l.localDocuments.getDocuments(u,d))})}(r.localStore,e);Am(r,e,t),Rm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await As(r,i)}catch(i){await Ts(i)}}function Rm(n,e){(n.Oa.get(e)||[]).forEach(t=>{t.resolve()}),n.Oa.delete(e)}function Am(n,e,t){const r=ae(n);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function jc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Da.get(e))n.ba.delete(r),t&&n.Sa.ka(r,t);n.Da.delete(e),n.isPrimaryClient&&n.Ma.Vr(e).forEach(r=>{n.Ma.containsKey(r)||Pm(n,r)})}function Pm(n,e){n.Ca.delete(e.path.canonicalString());const t=n.va.get(e);t!==null&&(Vl(n.remoteStore,t),n.va=n.va.remove(e),n.Fa.delete(t),ql(n))}function wd(n,e,t){for(const r of t)r instanceof Tm?(n.Ma.addReference(r.key,e),ZS(n,r)):r instanceof bm?(Q("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,e),n.Ma.containsKey(r.key)||Pm(n,r.key)):re()}function ZS(n,e){const t=e.key,r=t.path.canonicalString();n.va.get(t)||n.Ca.has(r)||(Q("SyncEngine","New document in limbo: "+t),n.Ca.add(r),ql(n))}function ql(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const e=n.Ca.values().next().value;n.Ca.delete(e);const t=new ee(je.fromString(e)),r=n.Na.next();n.Fa.set(r,new zS(t)),n.va=n.va.insert(t,r),gm(n.remoteStore,new Hn(tn(kl(t.path)),r,"TargetPurposeLimboResolution",Il.oe))}}async function As(n,e,t){const r=ae(n),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,t).then(u=>{var d;if((u||t)&&r.isPrimaryClient){const f=u?!u.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){i.push(u);const f=Ml.Ki(l.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,u){const d=ae(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>B.forEach(u,m=>B.forEach(m.qi,E=>d.persistence.referenceDelegate.addReference(f,m.targetId,E)).next(()=>B.forEach(m.Qi,E=>d.persistence.referenceDelegate.removeReference(f,m.targetId,E)))))}catch(f){if(!bs(f))throw f;Q("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const E=d.ns.get(m),w=E.snapshotVersion,R=E.withLastLimboFreeSnapshotVersion(w);d.ns=d.ns.insert(m,R)}}}(r.localStore,s))}async function eR(n,e){const t=ae(n);if(!t.currentUser.isEqual(e)){Q("SyncEngine","User change. New user:",e.toKey());const r=await dm(t.localStore,e);t.currentUser=e,function(s,o){s.Oa.forEach(c=>{c.forEach(l=>{l.reject(new Z(z.CANCELLED,o))})}),s.Oa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await As(t,r.us)}}function tR(n,e){const t=ae(n),r=t.Fa.get(e);if(r&&r.wa)return he().add(r.key);{let i=he();const s=t.Da.get(e);if(!s)return i;for(const o of s){const c=t.ba.get(o);i=i.unionWith(c.view.Ea)}return i}}function Cm(n){const e=ae(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JS.bind(null,e),e.Sa.h_=VS.bind(null,e.eventManager),e.Sa.ka=FS.bind(null,e.eventManager),e}function nR(n){const e=ae(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XS.bind(null,e),e}class Ed{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=la(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return sS(this.persistence,new rS,e.initialUser,this.serializer)}createPersistence(e){return new eS(Ll.Hr,this.serializer)}createSharedClientState(e){return new dS}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class rR{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eR.bind(null,this.syncEngine),await DS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NS}()}createDatastore(e){const t=la(e.databaseInfo.databaseId),r=function(s){return new gS(s)}(e.databaseInfo);return function(s,o,c,l){return new vS(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,c){return new ES(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>vd(this.syncEngine,t,0),function(){return md.D()?new md:new fS}())}createSyncEngine(e,t){return function(i,s,o,c,l,u,d){const f=new $S(i,s,o,c,l,u);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await async function(r){const i=ae(r);Q("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Rs(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class iR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Sn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=gt.UNAUTHENTICATED,this.clientId=Dp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Q("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Q("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=zl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qa(n,e){n.asyncQueue.verifyOperationInProgress(),Q("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await dm(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Td(n,e){n.asyncQueue.verifyOperationInProgress();const t=await aR(n);Q("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>gd(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>gd(e.remoteStore,i)),n._onlineComponents=e}function oR(n){return n.name==="FirebaseError"?n.code===z.FAILED_PRECONDITION||n.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function aR(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){Q("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!oR(t))throw t;ri("Error using user provided cache. Falling back to memory cache: "+t),await Qa(n,new Ed)}}else Q("FirestoreClient","Using default OfflineComponentProvider"),await Qa(n,new Ed);return n._offlineComponents}async function km(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(Q("FirestoreClient","Using user provided OnlineComponentProvider"),await Td(n,n._uninitializedComponentsProvider._online)):(Q("FirestoreClient","Using default OnlineComponentProvider"),await Td(n,new rR))),n._onlineComponents}function cR(n){return km(n).then(e=>e.syncEngine)}async function lR(n){const e=await km(n),t=e.eventManager;return t.onListen=qS.bind(null,e.syncEngine),t.onUnlisten=KS.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=HS.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=GS.bind(null,e.syncEngine),t}function uR(n,e,t={}){const r=new Qn;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,u){const d=new iR({next:m=>{o.enqueueAndForget(()=>MS(s,f));const E=m.docs.has(c);!E&&m.fromCache?u.reject(new Z(z.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&l&&l.source==="server"?u.reject(new Z(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),f=new US(kl(c.path),d,{includeMetadataChanges:!0,ra:!0});return LS(s,f)}(await lR(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Om(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const bd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(n,e,t){if(!t)throw new Z(z.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function dR(n,e,t,r){if(e===!0&&r===!0)throw new Z(z.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Id(n){if(!ee.isDocumentKey(n))throw new Z(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re()}function Cr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hl(n);throw new Z(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */class Sd{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Om((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wl{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ib;switch(r.type){case"firstParty":return new Pb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=bd.get(t);r&&(Q("ComponentProvider","Removing Datastore"),bd.delete(t),r.terminate())}(this),Promise.resolve()}}function fR(n,e,t,r={}){var i;const s=(n=Cr(n,Wl))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=gt.MOCK_USER;else{c=Bw(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Z(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new gt(u)}n._authCredentials=new Sb(new Op(c,l))}}/**
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
 */class Kl{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kl(this.firestore,e,this._query)}}class Lt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}}class hs extends Kl{constructor(e,t,r){super(e,t,kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new ee(e))}withConverter(e){return new hs(this.firestore,e,this._path)}}function da(n,e,...t){if(n=At(n),arguments.length===1&&(e=Dp.newId()),hR("doc","path",e),n instanceof Wl){const r=je.fromString(e,...t);return Id(r),new Lt(n,null,new ee(r))}{if(!(n instanceof Lt||n instanceof hs))throw new Z(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(je.fromString(e,...t));return Id(r),new Lt(n.firestore,n instanceof hs?n.converter:null,new ee(r))}}/**
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
 */class pR{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new pm(this,"async_queue_retry"),this.hu=()=>{const t=Ga();t&&Q("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=Ga();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=Ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const t=new Qn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!bs(e))throw e;Q("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const t=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Sn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=t,t}enqueueAfterDelay(e,t,r){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const i=Bl.createAndSchedule(this,e,t,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&re()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}class fa extends Wl{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new pR}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xm(this),this._firestoreClient.terminate()}}function mR(n,e){const t=typeof n=="object"?n:zf(),r=typeof n=="string"?n:"(default)",i=fl(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Uw("firestore");s&&fR(i,...s)}return i}function Dm(n){return n._firestoreClient||xm(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function xm(n){var e,t,r;const i=n._freezeSettings(),s=function(c,l,u,d){return new Bb(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Om(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new sR(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new li(_t.fromBase64String(e))}catch(t){throw new Z(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new li(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class pa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Gl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=/^__.*__$/;class yR{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Is(e,this.data,t,this.fieldTransforms)}}class Nm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new sr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Lm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Jl{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Jl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Uo(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Lm(this.fu)&&gR.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class _R{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||la(e)}Fu(e,t,r,i=!1){return new Jl({fu:e,methodName:t,vu:r,path:ct.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mm(n){const e=n._freezeSettings(),t=la(n._databaseId);return new _R(n._databaseId,!!e.ignoreUndefinedProperties,t)}function vR(n,e,t,r,i,s={}){const o=n.Fu(s.merge||s.mergeFields?2:0,e,t,i);Yl("Data must be an object, but it was:",o,r);const c=Vm(r,o);let l,u;if(s.merge)l=new Nt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const m=Bc(e,f,t);if(!o.contains(m))throw new Z(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Um(d,m)||d.push(m)}l=new Nt(d),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new yR(new It(c),l,u)}class ma extends Gl{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ma}}function wR(n,e,t,r){const i=n.Fu(1,e,t);Yl("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Dr(r,(l,u)=>{const d=Xl(e,l,t);u=At(u);const f=i.Su(d);if(u instanceof ma)s.push(d);else{const m=ga(u,f);m!=null&&(s.push(d),o.set(d,m))}});const c=new Nt(s);return new Nm(o,c,i.fieldTransforms)}function ER(n,e,t,r,i,s){const o=n.Fu(1,e,t),c=[Bc(e,r,t)],l=[i];if(s.length%2!=0)throw new Z(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)c.push(Bc(e,s[m])),l.push(s[m+1]);const u=[],d=It.empty();for(let m=c.length-1;m>=0;--m)if(!Um(u,c[m])){const E=c[m];let w=l[m];w=At(w);const R=o.Su(E);if(w instanceof ma)u.push(E);else{const C=ga(w,R);C!=null&&(u.push(E),d.set(E,C))}}const f=new Nt(u);return new Nm(d,f,o.fieldTransforms)}function ga(n,e){if(Fm(n=At(n)))return Yl("Unsupported field value:",e,n),Vm(n,e);if(n instanceof Gl)return function(r,i){if(!Lm(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let l=ga(c,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=At(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Xe.fromDate(r);return{timestampValue:Vo(i.serializer,s)}}if(r instanceof Xe){const s=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vo(i.serializer,s)}}if(r instanceof Ql)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof li)return{bytesValue:sm(i.serializer,r._byteString)};if(r instanceof Lt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:xl(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Hl(r)}`)}(n,e)}function Vm(n,e){const t={};return xp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(n,(r,i)=>{const s=ga(i,e.pu(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Fm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Xe||n instanceof Ql||n instanceof li||n instanceof Lt||n instanceof Gl)}function Yl(n,e,t){if(!Fm(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Hl(t);throw r==="an object"?e.Du(n+" a custom object"):e.Du(n+" "+r)}}function Bc(n,e,t){if((e=At(e))instanceof pa)return e._internalPath;if(typeof e=="string")return Xl(n,e);throw Uo("Field path arguments must be of type string or ",n,!1,void 0,t)}const TR=new RegExp("[~\\*/\\[\\]]");function Xl(n,e,t){if(e.search(TR)>=0)throw Uo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new pa(...e.split("."))._internalPath}catch{throw Uo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Uo(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Z(z.INVALID_ARGUMENT,c+n+l)}function Um(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class jm{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bR extends jm{data(){return super.data()}}function Bm(n,e){return typeof e=="string"?Xl(n,e):e instanceof pa?e._internalPath:e._delegate._internalPath}class IR{convertValue(e,t="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw re()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Dr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ql(Ke(e.latitude),Ke(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Rl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(os(e));default:return null}}convertTimestamp(e){const t=Zn(e);return new Xe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=je.fromString(e);Ce(hm(r));const i=new as(r.get(1),r.get(3)),s=new ee(r.popFirst(5));return i.isEqual(t)||Sn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function SR(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
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
 */class RR{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zm extends jm{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new AR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Bm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class AR extends zm{data(e={}){return super.data(e)}}/**
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
 */function PR(n){n=Cr(n,Lt);const e=Cr(n.firestore,fa);return uR(Dm(e),n._key).then(t=>OR(e,n,t))}class CR extends IR{constructor(e){super(),this.firestore=e}convertBytes(e){return new li(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,t)}}function $m(n,e,t){n=Cr(n,Lt);const r=Cr(n.firestore,fa),i=SR(n.converter,e,t);return qm(r,[vR(Mm(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,nn.none())])}function kR(n,e,t,...r){n=Cr(n,Lt);const i=Cr(n.firestore,fa),s=Mm(i);let o;return o=typeof(e=At(e))=="string"||e instanceof pa?ER(s,"updateDoc",n._key,e,t,r):wR(s,"updateDoc",n._key,e),qm(i,[o.toMutation(n._key,nn.exists(!0))])}function qm(n,e){return function(r,i){const s=new Qn;return r.asyncQueue.enqueueAndForget(async()=>QS(await cR(r),i,s)),s.promise}(Dm(n),e)}function OR(n,e,t){const r=t.docs.get(e._key),i=new CR(n);return new zm(n,i,e._key,r,new RR(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){fi=i})(hi),ni(new Tr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new fa(new Rb(r.getProvider("auth-internal")),new kb(r.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new as(u.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Gn(Kh,"4.6.4",e),Gn(Kh,"4.6.4","esm2017")})();const DR={apiKey:"AIzaSyANabuvzOXSvnpwPRnFWPiUXqjbSjN_NTo",authDomain:"petlove-4aff4.firebaseapp.com",projectId:"petlove-4aff4",storageBucket:"petlove-4aff4.appspot.com",messagingSenderId:"441810433275",appId:"1:441810433275:web:e151c8aca04ef9aba8ac5e",measurementId:"G-6X5HZ6W70P"},Hm=Bf(DR),Wm=Tb(Hm),ya=mR(Hm),xR=async(n,e,t)=>{const i=(await a0(Wm,e,t)).user;return await $m(da(ya,"users",i.uid),{name:n,email:e,avatar:""}),{uid:i.uid,name:n,email:e,avatar:""}},NR=async(n,e)=>{const r=(await c0(Wm,n,e)).user,i=await PR(da(ya,"users",r.uid));if(i.exists())return{uid:r.uid,...i.data()};throw new Error("No such user!")},LR=async n=>{const e=da(ya,"users",n.uid);return await $m(e,n,{merge:!0}),n},MR=async(n,e)=>{const t=da(ya,"users",n);return await kR(t,{avatar:e}),{avatar:e}},VR=kn("user/signup",async({name:n,email:e,password:t})=>await xR(n,e,t)),FR=kn("user/login",async({email:n,password:e})=>await NR(n,e)),UR=kn("user/updateUser",async n=>await LR(n)),jR=kn("user/updateAvatar",async({uid:n,avatar:e})=>{const t=await MR(n,e);return{uid:n,avatar:t.avatar}}),Km=Gt({name:"user",initialState:{user:null,token:null,status:"idle",error:null},reducers:{logout:n=>{n.user=null,n.token=null}},extraReducers:n=>{n.addCase(VR.fulfilled,(e,t)=>{e.user=t.payload,e.token=t.payload.token,e.status="succeeded"}).addCase(FR.fulfilled,(e,t)=>{e.user=t.payload,e.token=t.payload.token,e.status="succeeded"}).addCase(UR.fulfilled,(e,t)=>{e.user=t.payload,e.status="succeeded"}).addCase(jR.fulfilled,(e,t)=>{e.user&&(e.user.avatar=t.payload.avatar),e.status="succeeded"}).addMatcher(e=>e.type.endsWith("/pending"),e=>{e.status="loading"}).addMatcher(e=>e.type.endsWith("/rejected"),(e,t)=>{e.status="failed",e.error=t.error.message})}}),{logout:Gm}=Km.actions,BR=Km.reducer;var Qm={exports:{}},zR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$R=zR,qR=$R;function Jm(){}function Ym(){}Ym.resetWarningCache=Jm;var HR=function(){function n(r,i,s,o,c,l){if(l!==qR){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}n.isRequired=n;function e(){return n}var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Ym,resetWarningCache:Jm};return t.PropTypes=t,t};Qm.exports=HR();var WR=Qm.exports;const Ys=qd(WR),ds=({text:n,to:e,className:t,onClick:r})=>$.jsx("button",{className:`button-auth ${t}`,onClick:r,children:e?$.jsx(mn,{to:e,children:n}):n});ds.propTypes={text:Ys.string.isRequired,to:Ys.string,className:Ys.string,onClick:Ys.func};ds.defaultProps={to:null,className:"",onClick:null};const KR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFzSURBVHgB3ZRBTsJAFIbfK9RJRRN6gx5B9xjLyrDkBHIEbyCewHAC6wlYEleMCTEuvYG9ASw0pJaZ54xYROq00ygL+VbNzOv758+8+QH+O2hT9DI66TlI56o8XK4QlyRvDzoPUdm/hQLTYdhk3mL41TgHT+a1rt/lM1MPBwpg++KyoLkmdD9qzBgdTEdhwFA8gwXKhW9yYXTgggjBEpelPdOeUQCBArAEEZuVBQjJeHG5WpBxZYGUuRFYUgPJoaqA3+YzCTSAEqSkgdd5jCsLaFJW76sx48YCgvtGUu9DAfYvGaCnqk+zxhJEZPOSt05pVLheqk6P6uR4pJaCz61Y2Yh1HqXqgv2COzAKvN61dExcIIFxxjMxNdJR42xyZSWwjIjFTUkG/dTqKaG37qYbzDeXY6jwijeIVS4dr+fStzHdc8T1L5prAuaJ4frCysF81AoJcQx/gCBqH3YmXH87sGVWAp5StImGIghhpqMjO/1u8A7AwYq1mK9QdQAAAABJRU5ErkJggg==",GR=n=>n.charAt(0).toUpperCase()+n.slice(1),QR=()=>{const n=yf(),e=il(r=>r.user.user),t=()=>{n(Gm())};return $.jsxs("div",{className:"user-bar",children:[$.jsxs(mn,{to:"/profile",className:"user_info",children:[$.jsx("img",{src:(e==null?void 0:e.avatar)||KR,alt:`${e==null?void 0:e.name}'s avatar`,className:"user-avatar"}),$.jsx("span",{className:"user-name",children:e?GR(e.name):""})]}),$.jsx(ds,{text:"Logout",to:"#",className:"logout",onClick:t})]})},JR=()=>{const n=il(r=>r.user.user),e=yf(),t=()=>{e(Gm())};return $.jsx("div",{className:"auth_nav",children:n?$.jsx(QR,{avatar:n.avatar,name:n.name,onLogout:t}):$.jsxs($.Fragment,{children:[$.jsx(ds,{text:"Log In",to:"/login",className:"login"}),$.jsx(ds,{text:"Registration",to:"/registration",className:"registration"})]})})},YR="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27%209L9%2027'%20stroke='%23262626'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M9%209L27%2027'%20stroke='%23262626'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",XR=({isMenuOpen:n,handleToggleMenu:e})=>$.jsxs("div",{className:`mobile-menu ${n?"open":""}`,children:[$.jsx("img",{src:YR,className:"x-menu",alt:"x-menu",onClick:e}),$.jsx(mn,{to:"/news",onClick:e,children:"News"}),$.jsx(mn,{to:"/find_pet",onClick:e,children:"Find pet"}),$.jsx(mn,{to:"/our_friends",onClick:e,children:"Our friends"})]}),ZR=({isHomePage:n})=>{const[e,t]=Ot.useState(!1),r=()=>{t(!e)};return $.jsxs("header",{className:n?"header homePageHeader":"header",children:[$.jsxs("div",{className:"center",children:[$.jsx("div",{className:"logo",children:n?$.jsx(hc,{to:"/",children:$.jsx("img",{src:ev,alt:"logo"})}):$.jsx(hc,{to:"/",children:$.jsx("img",{src:tv,alt:"logo"})})}),$.jsx(Z_,{}),$.jsx(JR,{})]}),$.jsx("img",{className:"burger-menu",src:nv,alt:"burger-menu",onClick:r}),$.jsx(XR,{isMenuOpen:e,handleToggleMenu:r})]})};function Ja(n,e,t,r){if(typeof t!==r)throw new TypeError(`Invalid prop '${e}' of type '${typeof t}' supplied to '${n}', expected '${r}'.`)}function eA(n,e){e===void 0&&(e={});var t=e.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var tA="Jelly-module_container__LB5dG",nA="Jelly-module_svg__Ae81n";function rA(n){let{size:e=50,color:t="black",speed:r=.9}=n;return Ja("Jelly","size",e,"number"),Ja("Jelly","color",t,"string"),Ja("Jelly","speed",r,"number"),Ot.createElement(Ot.Fragment,null,Ot.createElement("div",{className:tA,style:{"--uib-size":e+"px","--uib-color":t,"--uib-speed":r+"s"}}),Ot.createElement("svg",{width:"0",height:"0",className:nA},Ot.createElement("defs",null,Ot.createElement("filter",{id:"uib-jelly-ooze"},Ot.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:e/8,result:"blur"}),Ot.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7",result:"ooze"}),Ot.createElement("feBlend",{in:"SourceGraphic",in2:"ooze"})))))}eA('.Jelly-module_container__LB5dG{animation:Jelly-module_rotate__gDXQZ calc(var(--uib-speed)*2) linear infinite;filter:url(#uib-jelly-ooze);height:calc(var(--uib-size)/2);position:relative;width:var(--uib-size);will-change:transform}.Jelly-module_container__LB5dG:after,.Jelly-module_container__LB5dG:before{background:var(--uib-color);border-radius:100%;content:"";height:100%;left:25%;position:absolute;top:0;width:50%;will-change:transform}.Jelly-module_container__LB5dG:before{animation:Jelly-module_shift-left__20PCG var(--uib-speed) ease infinite}.Jelly-module_container__LB5dG:after{animation:Jelly-module_shift-right__WCf3m var(--uib-speed) ease infinite}.Jelly-module_svg__Ae81n{height:0;position:absolute;width:0}@keyframes Jelly-module_rotate__gDXQZ{0%,49.999%,to{transform:none}50%,99.999%{transform:rotate(90deg)}}@keyframes Jelly-module_shift-left__20PCG{0%,to{transform:translateX(0)}50%{transform:scale(.65) translateX(-75%)}}@keyframes Jelly-module_shift-right__WCf3m{0%,to{transform:translateX(0)}50%{transform:scale(.65) translateX(75%)}}');function Xm(){return $.jsx("div",{className:"backdrop",children:$.jsx(rA,{size:180,speed:.8,color:"54ADFF"})})}const iA=()=>{const e=nr().pathname==="/";return $.jsxs("div",{children:[$.jsx(ZR,{isHomePage:e}),$.jsx(j.Suspense,{fallback:$.jsx(Xm,{}),children:$.jsx(A_,{})})]})},Ya=({children:n})=>il(t=>t.user.user)?n:$.jsx(R_,{to:"/login",replace:!0}),sA="/assets/errorpage-CBX1VmoW.png",oA=()=>$.jsxs("div",{children:[$.jsx("h1",{children:"Page Not Found"}),$.jsx("section",{className:"notfound",children:$.jsx("img",{src:sA})})]}),aA=j.lazy(()=>Cn(()=>import("./HomePage-DoRwN9ZN.js"),__vite__mapDeps([0,1,2]))),cA=j.lazy(()=>Cn(()=>import("./FindPetPage-3si_J49H.js"),__vite__mapDeps([3,1,4,5,6,7,8,9,10,11,12,13,14,15]))),lA=j.lazy(()=>Cn(()=>import("./NewsPage-DioFokih.js"),__vite__mapDeps([16,1,13,8,14,17]))),uA=j.lazy(()=>Cn(()=>import("./RegistrationPage-8AyNtFCX.js"),__vite__mapDeps([18,1,19,12,20,21,22]))),hA=j.lazy(()=>Cn(()=>import("./LoginPage-DgBOg-OS.js"),__vite__mapDeps([23,1,19,12,20,24,22]))),dA=j.lazy(()=>Cn(()=>import("./ProfilePage-DoTPbKiS.js"),__vite__mapDeps([25,1,19,12,5,6,8,9,10,26,27,4,7,28]))),fA=j.lazy(()=>Cn(()=>import("./OurFriendsPage-C9IaaroZ.js"),__vite__mapDeps([29,1,30]))),pA=j.lazy(()=>Cn(()=>import("./FavoritePetsPage-BLTnbENa.js"),__vite__mapDeps([31,1,4,5,6,7]))),mA=j.lazy(()=>Cn(()=>import("./AddPetPage-xKd8T0q2.js"),__vite__mapDeps([32,1,20,26,5,6,27,11,12,33]))),gA=L_([{element:$.jsx(iA,{}),children:[{path:"/",index:!0,element:$.jsx(j.Suspense,{fallback:$.jsx("div",{children:"Loading..."}),children:$.jsx(aA,{})})},{path:"/news",element:$.jsx(j.Suspense,{fallback:$.jsx("div",{children:"Loading..."}),children:$.jsx(lA,{})})},{path:"/find_pet",element:$.jsx(j.Suspense,{fallback:$.jsx("div",{children:"Loading..."}),children:$.jsx(cA,{})})},{path:"/our_friends",element:$.jsx(j.Suspense,{fallback:$.jsx("div",{children:"Loading..."}),children:$.jsx(fA,{})})},{path:"/registration",element:$.jsx(j.Suspense,{fallback:$.jsx("div",{children:"Loading..."}),children:$.jsx(uA,{})})},{path:"/login",element:$.jsx(j.Suspense,{fallback:$.jsx("div",{children:"Loading..."}),children:$.jsx(hA,{})})},{path:"/profile",element:$.jsx(Ya,{children:$.jsx(j.Suspense,{fallback:$.jsx("div",{children:"Loading..."}),children:$.jsx(dA,{})})})},{path:"/favorites",element:$.jsx(Ya,{children:$.jsx(j.Suspense,{fallback:$.jsx("div",{children:"Loading..."}),children:$.jsx(pA,{})})})},{path:"/add_pet",element:$.jsx(Ya,{children:$.jsx(j.Suspense,{fallback:$.jsx("div",{children:"Loading..."}),children:$.jsx(mA,{})})})},{path:"*",element:$.jsx(oA,{})}]}]);var Zm={exports:{}};(function(n,e){(function(t,r){n.exports=r()})(cy,function(){return function(t){function r(s){if(i[s])return i[s].exports;var o=i[s]={exports:{},id:s,loaded:!1};return t[s].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var i={};return r.m=t,r.c=i,r.p="dist/",r(0)}([function(t,r,i){function s(W){return W&&W.__esModule?W:{default:W}}var o=Object.assign||function(W){for(var Ee=1;Ee<arguments.length;Ee++){var Ze=arguments[Ee];for(var de in Ze)Object.prototype.hasOwnProperty.call(Ze,de)&&(W[de]=Ze[de])}return W},c=i(1),l=(s(c),i(6)),u=s(l),d=i(7),f=s(d),m=i(8),E=s(m),w=i(9),R=s(w),C=i(10),F=s(C),M=i(11),L=s(M),V=i(14),G=s(V),P=[],S=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},_=function(){var W=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(W&&(S=!0),S)return P=(0,L.default)(P,g),(0,F.default)(P,g.once),P},I=function(){P=(0,G.default)(),_()},T=function(){P.forEach(function(W,Ee){W.node.removeAttribute("data-aos"),W.node.removeAttribute("data-aos-easing"),W.node.removeAttribute("data-aos-duration"),W.node.removeAttribute("data-aos-delay")})},b=function(W){return W===!0||W==="mobile"&&R.default.mobile()||W==="phone"&&R.default.phone()||W==="tablet"&&R.default.tablet()||typeof W=="function"&&W()===!0},v=function(W){g=o(g,W),P=(0,G.default)();var Ee=document.all&&!window.atob;return b(g.disable)||Ee?T():(g.disableMutationObserver||E.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?_(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){_(!0)}):document.addEventListener(g.startEvent,function(){_(!0)}),window.addEventListener("resize",(0,f.default)(_,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(_,g.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,F.default)(P,g.once)},g.throttleDelay)),g.disableMutationObserver||E.default.ready("[data-aos]",I),P)};t.exports={init:v,refresh:_,refreshHard:I}},function(t,r){},,,,,function(t,r){(function(i){function s(b,v,W){function Ee(fe){var qe=xe,Ge=Ne;return xe=Ne=void 0,wt=fe,Le=b.apply(Ge,qe)}function Ze(fe){return wt=fe,ke=setTimeout(nt,v),Et?Ee(fe):Le}function de(fe){var qe=fe-rt,Ge=fe-wt,Nr=v-qe;return Ie?I(Nr,$e-Ge):Nr}function et(fe){var qe=fe-rt,Ge=fe-wt;return rt===void 0||qe>=v||qe<0||Ie&&Ge>=$e}function nt(){var fe=T();return et(fe)?bt(fe):void(ke=setTimeout(nt,de(fe)))}function bt(fe){return ke=void 0,me&&xe?Ee(fe):(xe=Ne=void 0,Le)}function vt(){ke!==void 0&&clearTimeout(ke),wt=0,xe=rt=Ne=ke=void 0}function Be(){return ke===void 0?Le:bt(T())}function _e(){var fe=T(),qe=et(fe);if(xe=arguments,Ne=this,rt=fe,qe){if(ke===void 0)return Ze(rt);if(Ie)return ke=setTimeout(nt,v),Ee(rt)}return ke===void 0&&(ke=setTimeout(nt,v)),Le}var xe,Ne,$e,Le,ke,rt,wt=0,Et=!1,Ie=!1,me=!0;if(typeof b!="function")throw new TypeError(m);return v=d(v)||0,c(W)&&(Et=!!W.leading,Ie="maxWait"in W,$e=Ie?_(d(W.maxWait)||0,v):$e,me="trailing"in W?!!W.trailing:me),_e.cancel=vt,_e.flush=Be,_e}function o(b,v,W){var Ee=!0,Ze=!0;if(typeof b!="function")throw new TypeError(m);return c(W)&&(Ee="leading"in W?!!W.leading:Ee,Ze="trailing"in W?!!W.trailing:Ze),s(b,v,{leading:Ee,maxWait:v,trailing:Ze})}function c(b){var v=typeof b>"u"?"undefined":f(b);return!!b&&(v=="object"||v=="function")}function l(b){return!!b&&(typeof b>"u"?"undefined":f(b))=="object"}function u(b){return(typeof b>"u"?"undefined":f(b))=="symbol"||l(b)&&g.call(b)==w}function d(b){if(typeof b=="number")return b;if(u(b))return E;if(c(b)){var v=typeof b.valueOf=="function"?b.valueOf():b;b=c(v)?v+"":v}if(typeof b!="string")return b===0?b:+b;b=b.replace(R,"");var W=F.test(b);return W||M.test(b)?L(b.slice(2),W?2:8):C.test(b)?E:+b}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},m="Expected a function",E=NaN,w="[object Symbol]",R=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,M=/^0o[0-7]+$/i,L=parseInt,V=(typeof i>"u"?"undefined":f(i))=="object"&&i&&i.Object===Object&&i,G=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,P=V||G||Function("return this")(),S=Object.prototype,g=S.toString,_=Math.max,I=Math.min,T=function(){return P.Date.now()};t.exports=o}).call(r,function(){return this}())},function(t,r){(function(i){function s(T,b,v){function W(me){var fe=_e,qe=xe;return _e=xe=void 0,rt=me,$e=T.apply(qe,fe)}function Ee(me){return rt=me,Le=setTimeout(et,b),wt?W(me):$e}function Ze(me){var fe=me-ke,qe=me-rt,Ge=b-fe;return Et?_(Ge,Ne-qe):Ge}function de(me){var fe=me-ke,qe=me-rt;return ke===void 0||fe>=b||fe<0||Et&&qe>=Ne}function et(){var me=I();return de(me)?nt(me):void(Le=setTimeout(et,Ze(me)))}function nt(me){return Le=void 0,Ie&&_e?W(me):(_e=xe=void 0,$e)}function bt(){Le!==void 0&&clearTimeout(Le),rt=0,_e=ke=xe=Le=void 0}function vt(){return Le===void 0?$e:nt(I())}function Be(){var me=I(),fe=de(me);if(_e=arguments,xe=this,ke=me,fe){if(Le===void 0)return Ee(ke);if(Et)return Le=setTimeout(et,b),W(ke)}return Le===void 0&&(Le=setTimeout(et,b)),$e}var _e,xe,Ne,$e,Le,ke,rt=0,wt=!1,Et=!1,Ie=!0;if(typeof T!="function")throw new TypeError(f);return b=u(b)||0,o(v)&&(wt=!!v.leading,Et="maxWait"in v,Ne=Et?g(u(v.maxWait)||0,b):Ne,Ie="trailing"in v?!!v.trailing:Ie),Be.cancel=bt,Be.flush=vt,Be}function o(T){var b=typeof T>"u"?"undefined":d(T);return!!T&&(b=="object"||b=="function")}function c(T){return!!T&&(typeof T>"u"?"undefined":d(T))=="object"}function l(T){return(typeof T>"u"?"undefined":d(T))=="symbol"||c(T)&&S.call(T)==E}function u(T){if(typeof T=="number")return T;if(l(T))return m;if(o(T)){var b=typeof T.valueOf=="function"?T.valueOf():T;T=o(b)?b+"":b}if(typeof T!="string")return T===0?T:+T;T=T.replace(w,"");var v=C.test(T);return v||F.test(T)?M(T.slice(2),v?2:8):R.test(T)?m:+T}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(T){return typeof T}:function(T){return T&&typeof Symbol=="function"&&T.constructor===Symbol&&T!==Symbol.prototype?"symbol":typeof T},f="Expected a function",m=NaN,E="[object Symbol]",w=/^\s+|\s+$/g,R=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,F=/^0o[0-7]+$/i,M=parseInt,L=(typeof i>"u"?"undefined":d(i))=="object"&&i&&i.Object===Object&&i,V=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,G=L||V||Function("return this")(),P=Object.prototype,S=P.toString,g=Math.max,_=Math.min,I=function(){return G.Date.now()};t.exports=s}).call(r,function(){return this}())},function(t,r){function i(d){var f=void 0,m=void 0;for(f=0;f<d.length;f+=1)if(m=d[f],m.dataset&&m.dataset.aos||m.children&&i(m.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function c(d,f){var m=window.document,E=s(),w=new E(l);u=f,w.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(d){d&&d.forEach(function(f){var m=Array.prototype.slice.call(f.addedNodes),E=Array.prototype.slice.call(f.removedNodes),w=m.concat(E);if(i(w))return u()})}Object.defineProperty(r,"__esModule",{value:!0});var u=function(){};r.default={isSupported:o,ready:c}},function(t,r){function i(m,E){if(!(m instanceof E))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function m(E,w){for(var R=0;R<w.length;R++){var C=w[R];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(E,C.key,C)}}return function(E,w,R){return w&&m(E.prototype,w),R&&m(E,R),E}}(),c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,d=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function m(){i(this,m)}return o(m,[{key:"phone",value:function(){var E=s();return!(!c.test(E)&&!l.test(E.substr(0,4)))}},{key:"mobile",value:function(){var E=s();return!(!u.test(E)&&!d.test(E.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();r.default=new f},function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(o,c,l){var u=o.node.getAttribute("data-aos-once");c>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,c){var l=window.pageYOffset,u=window.innerHeight;o.forEach(function(d,f){i(d,u+l,c)})};r.default=s},function(t,r,i){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(12),c=s(o),l=function(u,d){return u.forEach(function(f,m){f.node.classList.add("aos-init"),f.position=(0,c.default)(f.node,d.offset)}),u};r.default=l},function(t,r,i){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(r,"__esModule",{value:!0});var o=i(13),c=s(o),l=function(u,d){var f=0,m=0,E=window.innerHeight,w={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(w.offset&&!isNaN(w.offset)&&(m=parseInt(w.offset)),w.anchor&&document.querySelectorAll(w.anchor)&&(u=document.querySelectorAll(w.anchor)[0]),f=(0,c.default)(u).top,w.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=u.offsetHeight/2;break;case"bottom-bottom":f+=u.offsetHeight;break;case"top-center":f+=E/2;break;case"bottom-center":f+=E/2+u.offsetHeight;break;case"center-center":f+=E/2+u.offsetHeight/2;break;case"top-top":f+=E;break;case"bottom-top":f+=u.offsetHeight+E;break;case"center-top":f+=u.offsetHeight/2+E}return w.anchorPlacement||w.offset||isNaN(d)||(m=d),f+m};r.default=l},function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(s){for(var o=0,c=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),c+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:c,left:o}};r.default=i},function(t,r){Object.defineProperty(r,"__esModule",{value:!0});var i=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};r.default=i}])})})(Zm);var yA=Zm.exports;const Rd=qd(yA);function _A(){return Ot.useEffect(()=>{Rd.init({duration:800,easing:"ease-in-sine",delay:100,offset:100}),Rd.refresh()},[]),$.jsx(Ot.Suspense,{fallback:$.jsx(Xm,{}),children:$.jsx($_,{router:gA})})}var Zl="persist:",eg="persist/FLUSH",eu="persist/REHYDRATE",tg="persist/PAUSE",ng="persist/PERSIST",rg="persist/PURGE",ig="persist/REGISTER",vA=-1;function co(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?co=function(t){return typeof t}:co=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},co(n)}function Ad(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function wA(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Ad(t,!0).forEach(function(r){EA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Ad(t).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function EA(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function TA(n,e,t,r){r.debug;var i=wA({},t);return n&&co(n)==="object"&&Object.keys(n).forEach(function(s){s!=="_persist"&&e[s]===t[s]&&(i[s]=n[s])}),i}function bA(n){var e=n.blacklist||null,t=n.whitelist||null,r=n.transforms||[],i=n.throttle||0,s="".concat(n.keyPrefix!==void 0?n.keyPrefix:Zl).concat(n.key),o=n.storage,c;n.serialize===!1?c=function(G){return G}:typeof n.serialize=="function"?c=n.serialize:c=IA;var l=n.writeFailHandler||null,u={},d={},f=[],m=null,E=null,w=function(G){Object.keys(G).forEach(function(P){F(P)&&u[P]!==G[P]&&f.indexOf(P)===-1&&f.push(P)}),Object.keys(u).forEach(function(P){G[P]===void 0&&F(P)&&f.indexOf(P)===-1&&u[P]!==void 0&&f.push(P)}),m===null&&(m=setInterval(R,i)),u=G};function R(){if(f.length===0){m&&clearInterval(m),m=null;return}var V=f.shift(),G=r.reduce(function(P,S){return S.in(P,V,u)},u[V]);if(G!==void 0)try{d[V]=c(G)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete d[V];f.length===0&&C()}function C(){Object.keys(d).forEach(function(V){u[V]===void 0&&delete d[V]}),E=o.setItem(s,c(d)).catch(M)}function F(V){return!(t&&t.indexOf(V)===-1&&V!=="_persist"||e&&e.indexOf(V)!==-1)}function M(V){l&&l(V)}var L=function(){for(;f.length!==0;)R();return E||Promise.resolve()};return{update:w,flush:L}}function IA(n){return JSON.stringify(n)}function SA(n){var e=n.transforms||[],t="".concat(n.keyPrefix!==void 0?n.keyPrefix:Zl).concat(n.key),r=n.storage;n.debug;var i;return n.deserialize===!1?i=function(o){return o}:typeof n.deserialize=="function"?i=n.deserialize:i=RA,r.getItem(t).then(function(s){if(s)try{var o={},c=i(s);return Object.keys(c).forEach(function(l){o[l]=e.reduceRight(function(u,d){return d.out(u,l,c)},i(c[l]))}),o}catch(l){throw l}else return})}function RA(n){return JSON.parse(n)}function AA(n){var e=n.storage,t="".concat(n.keyPrefix!==void 0?n.keyPrefix:Zl).concat(n.key);return e.removeItem(t,PA)}function PA(n){}function Pd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function pn(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Pd(t,!0).forEach(function(r){CA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Pd(t).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function CA(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function kA(n,e){if(n==null)return{};var t=OA(n,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function OA(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}var DA=5e3;function xA(n,e){var t=n.version!==void 0?n.version:vA;n.debug;var r=n.stateReconciler===void 0?TA:n.stateReconciler,i=n.getStoredState||SA,s=n.timeout!==void 0?n.timeout:DA,o=null,c=!1,l=!0,u=function(f){return f._persist.rehydrated&&o&&!l&&o.update(f),f};return function(d,f){var m=d||{},E=m._persist,w=kA(m,["_persist"]),R=w;if(f.type===ng){var C=!1,F=function(g,_){C||(f.rehydrate(n.key,g,_),C=!0)};if(s&&setTimeout(function(){!C&&F(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(n.key,'"')))},s),l=!1,o||(o=bA(n)),E)return pn({},e(R,f),{_persist:E});if(typeof f.rehydrate!="function"||typeof f.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return f.register(n.key),i(n).then(function(S){var g=n.migrate||function(_,I){return Promise.resolve(_)};g(S,t).then(function(_){F(_)},function(_){F(void 0,_)})},function(S){F(void 0,S)}),pn({},e(R,f),{_persist:{version:t,rehydrated:!1}})}else{if(f.type===rg)return c=!0,f.result(AA(n)),pn({},e(R,f),{_persist:E});if(f.type===eg)return f.result(o&&o.flush()),pn({},e(R,f),{_persist:E});if(f.type===tg)l=!0;else if(f.type===eu){if(c)return pn({},R,{_persist:pn({},E,{rehydrated:!0})});if(f.key===n.key){var M=e(R,f),L=f.payload,V=r!==!1&&L!==void 0?r(L,d,M,n):M,G=pn({},V,{_persist:pn({},E,{rehydrated:!0})});return u(G)}}}if(!E)return e(d,f);var P=e(R,f);return P===R?d:u(pn({},P,{_persist:E}))}}function Cd(n){return MA(n)||LA(n)||NA()}function NA(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function LA(n){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]")return Array.from(n)}function MA(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}function kd(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function zc(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?kd(t,!0).forEach(function(r){VA(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):kd(t).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function VA(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var sg={registry:[],bootstrapped:!1},FA=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:sg,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ig:return zc({},e,{registry:[].concat(Cd(e.registry),[t.key])});case eu:var r=e.registry.indexOf(t.key),i=Cd(e.registry);return i.splice(r,1),zc({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function UA(n,e,t){var r=ol(FA,sg,void 0),i=function(l){r.dispatch({type:ig,key:l})},s=function(l,u,d){var f={type:eu,payload:u,err:d,key:l};n.dispatch(f),r.dispatch(f)},o=zc({},r,{purge:function(){var l=[];return n.dispatch({type:rg,result:function(d){l.push(d)}}),Promise.all(l)},flush:function(){var l=[];return n.dispatch({type:eg,result:function(d){l.push(d)}}),Promise.all(l)},pause:function(){n.dispatch({type:tg})},persist:function(){n.dispatch({type:ng,register:i,rehydrate:s})}});return o.persist(),o}var tu={},nu={};nu.__esModule=!0;nu.default=zA;function lo(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?lo=function(t){return typeof t}:lo=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lo(n)}function Xa(){}var jA={getItem:Xa,setItem:Xa,removeItem:Xa};function BA(n){if((typeof self>"u"?"undefined":lo(self))!=="object"||!(n in self))return!1;try{var e=self[n],t="redux-persist ".concat(n," test");e.setItem(t,"test"),e.getItem(t),e.removeItem(t)}catch{return!1}return!0}function zA(n){var e="".concat(n,"Storage");return BA(e)?self[e]:jA}tu.__esModule=!0;tu.default=HA;var $A=qA(nu);function qA(n){return n&&n.__esModule?n:{default:n}}function HA(n){var e=(0,$A.default)(n);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var og=void 0,WA=KA(tu);function KA(n){return n&&n.__esModule?n:{default:n}}var GA=(0,WA.default)("local");og=GA;const QA={filters:{category:[],gender:[],type:[],location:[]}},ag=Gt({name:"notices",initialState:QA,reducers:{setCategoryFilter:(n,e)=>{n.filters.category=e.payload?[e.payload]:[]},setGenderFilter:(n,e)=>{n.filters.gender=e.payload?[e.payload]:[]},setTypeFilter:(n,e)=>{n.filters.type=e.payload?[e.payload]:[]},setLocationFilter:(n,e)=>{n.filters.location=e.payload?[e.payload]:[]}}});ag.actions;const JA=ag.reducer;function cg(n,e){return function(){return n.apply(e,arguments)}}const{toString:YA}=Object.prototype,{getPrototypeOf:ru}=Object,_a=(n=>e=>{const t=YA.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Qt=n=>(n=n.toLowerCase(),e=>_a(e)===n),va=n=>e=>typeof e===n,{isArray:gi}=Array,fs=va("undefined");function XA(n){return n!==null&&!fs(n)&&n.constructor!==null&&!fs(n.constructor)&&jt(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const lg=Qt("ArrayBuffer");function ZA(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&lg(n.buffer),e}const eP=va("string"),jt=va("function"),ug=va("number"),wa=n=>n!==null&&typeof n=="object",tP=n=>n===!0||n===!1,uo=n=>{if(_a(n)!=="object")return!1;const e=ru(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},nP=Qt("Date"),rP=Qt("File"),iP=Qt("Blob"),sP=Qt("FileList"),oP=n=>wa(n)&&jt(n.pipe),aP=n=>{let e;return n&&(typeof FormData=="function"&&n instanceof FormData||jt(n.append)&&((e=_a(n))==="formdata"||e==="object"&&jt(n.toString)&&n.toString()==="[object FormData]"))},cP=Qt("URLSearchParams"),[lP,uP,hP,dP]=["ReadableStream","Request","Response","Headers"].map(Qt),fP=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ps(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let r,i;if(typeof n!="object"&&(n=[n]),gi(n))for(r=0,i=n.length;r<i;r++)e.call(null,n[r],r,n);else{const s=t?Object.getOwnPropertyNames(n):Object.keys(n),o=s.length;let c;for(r=0;r<o;r++)c=s[r],e.call(null,n[c],c,n)}}function hg(n,e){e=e.toLowerCase();const t=Object.keys(n);let r=t.length,i;for(;r-- >0;)if(i=t[r],e===i.toLowerCase())return i;return null}const dg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,fg=n=>!fs(n)&&n!==dg;function $c(){const{caseless:n}=fg(this)&&this||{},e={},t=(r,i)=>{const s=n&&hg(e,i)||i;uo(e[s])&&uo(r)?e[s]=$c(e[s],r):uo(r)?e[s]=$c({},r):gi(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ps(arguments[r],t);return e}const pP=(n,e,t,{allOwnKeys:r}={})=>(Ps(e,(i,s)=>{t&&jt(i)?n[s]=cg(i,t):n[s]=i},{allOwnKeys:r}),n),mP=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),gP=(n,e,t,r)=>{n.prototype=Object.create(e.prototype,r),n.prototype.constructor=n,Object.defineProperty(n,"super",{value:e.prototype}),t&&Object.assign(n.prototype,t)},yP=(n,e,t,r)=>{let i,s,o;const c={};if(e=e||{},n==null)return e;do{for(i=Object.getOwnPropertyNames(n),s=i.length;s-- >0;)o=i[s],(!r||r(o,n,e))&&!c[o]&&(e[o]=n[o],c[o]=!0);n=t!==!1&&ru(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},_P=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const r=n.indexOf(e,t);return r!==-1&&r===t},vP=n=>{if(!n)return null;if(gi(n))return n;let e=n.length;if(!ug(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},wP=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&ru(Uint8Array)),EP=(n,e)=>{const r=(n&&n[Symbol.iterator]).call(n);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(n,s[0],s[1])}},TP=(n,e)=>{let t;const r=[];for(;(t=n.exec(e))!==null;)r.push(t);return r},bP=Qt("HTMLFormElement"),IP=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,i){return r.toUpperCase()+i}),Od=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),SP=Qt("RegExp"),pg=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),r={};Ps(t,(i,s)=>{let o;(o=e(i,s,n))!==!1&&(r[s]=o||i)}),Object.defineProperties(n,r)},RP=n=>{pg(n,(e,t)=>{if(jt(n)&&["arguments","caller","callee"].indexOf(t)!==-1)return!1;const r=n[t];if(jt(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},AP=(n,e)=>{const t={},r=i=>{i.forEach(s=>{t[s]=!0})};return gi(n)?r(n):r(String(n).split(e)),t},PP=()=>{},CP=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e,Za="abcdefghijklmnopqrstuvwxyz",Dd="0123456789",mg={DIGIT:Dd,ALPHA:Za,ALPHA_DIGIT:Za+Za.toUpperCase()+Dd},kP=(n=16,e=mg.ALPHA_DIGIT)=>{let t="";const{length:r}=e;for(;n--;)t+=e[Math.random()*r|0];return t};function OP(n){return!!(n&&jt(n.append)&&n[Symbol.toStringTag]==="FormData"&&n[Symbol.iterator])}const DP=n=>{const e=new Array(10),t=(r,i)=>{if(wa(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=gi(r)?[]:{};return Ps(r,(o,c)=>{const l=t(o,i+1);!fs(l)&&(s[c]=l)}),e[i]=void 0,s}}return r};return t(n,0)},xP=Qt("AsyncFunction"),NP=n=>n&&(wa(n)||jt(n))&&jt(n.then)&&jt(n.catch),N={isArray:gi,isArrayBuffer:lg,isBuffer:XA,isFormData:aP,isArrayBufferView:ZA,isString:eP,isNumber:ug,isBoolean:tP,isObject:wa,isPlainObject:uo,isReadableStream:lP,isRequest:uP,isResponse:hP,isHeaders:dP,isUndefined:fs,isDate:nP,isFile:rP,isBlob:iP,isRegExp:SP,isFunction:jt,isStream:oP,isURLSearchParams:cP,isTypedArray:wP,isFileList:sP,forEach:Ps,merge:$c,extend:pP,trim:fP,stripBOM:mP,inherits:gP,toFlatObject:yP,kindOf:_a,kindOfTest:Qt,endsWith:_P,toArray:vP,forEachEntry:EP,matchAll:TP,isHTMLForm:bP,hasOwnProperty:Od,hasOwnProp:Od,reduceDescriptors:pg,freezeMethods:RP,toObjectSet:AP,toCamelCase:IP,noop:PP,toFiniteNumber:CP,findKey:hg,global:dg,isContextDefined:fg,ALPHABET:mg,generateString:kP,isSpecCompliantForm:OP,toJSONObject:DP,isAsyncFn:xP,isThenable:NP};function ce(n,e,t,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=n,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),r&&(this.request=r),i&&(this.response=i)}N.inherits(ce,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const gg=ce.prototype,yg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(n=>{yg[n]={value:n}});Object.defineProperties(ce,yg);Object.defineProperty(gg,"isAxiosError",{value:!0});ce.from=(n,e,t,r,i,s)=>{const o=Object.create(gg);return N.toFlatObject(n,o,function(l){return l!==Error.prototype},c=>c!=="isAxiosError"),ce.call(o,n.message,e,t,r,i),o.cause=n,o.name=n.name,s&&Object.assign(o,s),o};const LP=null;function qc(n){return N.isPlainObject(n)||N.isArray(n)}function _g(n){return N.endsWith(n,"[]")?n.slice(0,-2):n}function xd(n,e,t){return n?n.concat(e).map(function(i,s){return i=_g(i),!t&&s?"["+i+"]":i}).join(t?".":""):e}function MP(n){return N.isArray(n)&&!n.some(qc)}const VP=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function Ea(n,e,t){if(!N.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=N.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,C){return!N.isUndefined(C[R])});const r=t.metaTokens,i=t.visitor||d,s=t.dots,o=t.indexes,l=(t.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(e);if(!N.isFunction(i))throw new TypeError("visitor must be a function");function u(w){if(w===null)return"";if(N.isDate(w))return w.toISOString();if(!l&&N.isBlob(w))throw new ce("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(w)||N.isTypedArray(w)?l&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function d(w,R,C){let F=w;if(w&&!C&&typeof w=="object"){if(N.endsWith(R,"{}"))R=r?R:R.slice(0,-2),w=JSON.stringify(w);else if(N.isArray(w)&&MP(w)||(N.isFileList(w)||N.endsWith(R,"[]"))&&(F=N.toArray(w)))return R=_g(R),F.forEach(function(L,V){!(N.isUndefined(L)||L===null)&&e.append(o===!0?xd([R],V,s):o===null?R:R+"[]",u(L))}),!1}return qc(w)?!0:(e.append(xd(C,R,s),u(w)),!1)}const f=[],m=Object.assign(VP,{defaultVisitor:d,convertValue:u,isVisitable:qc});function E(w,R){if(!N.isUndefined(w)){if(f.indexOf(w)!==-1)throw Error("Circular reference detected in "+R.join("."));f.push(w),N.forEach(w,function(F,M){(!(N.isUndefined(F)||F===null)&&i.call(e,F,N.isString(M)?M.trim():M,R,m))===!0&&E(F,R?R.concat(M):[M])}),f.pop()}}if(!N.isObject(n))throw new TypeError("data must be an object");return E(n),e}function Nd(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(n).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function iu(n,e){this._pairs=[],n&&Ea(n,this,e)}const vg=iu.prototype;vg.append=function(e,t){this._pairs.push([e,t])};vg.toString=function(e){const t=e?function(r){return e.call(this,r,Nd)}:Nd;return this._pairs.map(function(i){return t(i[0])+"="+t(i[1])},"").join("&")};function FP(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function wg(n,e,t){if(!e)return n;const r=t&&t.encode||FP,i=t&&t.serialize;let s;if(i?s=i(e,t):s=N.isURLSearchParams(e)?e.toString():new iu(e,t).toString(r),s){const o=n.indexOf("#");o!==-1&&(n=n.slice(0,o)),n+=(n.indexOf("?")===-1?"?":"&")+s}return n}class Ld{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Eg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},UP=typeof URLSearchParams<"u"?URLSearchParams:iu,jP=typeof FormData<"u"?FormData:null,BP=typeof Blob<"u"?Blob:null,zP={isBrowser:!0,classes:{URLSearchParams:UP,FormData:jP,Blob:BP},protocols:["http","https","file","blob","url","data"]},su=typeof window<"u"&&typeof document<"u",$P=(n=>su&&["ReactNative","NativeScript","NS"].indexOf(n)<0)(typeof navigator<"u"&&navigator.product),qP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",HP=su&&window.location.href||"http://localhost",WP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:su,hasStandardBrowserEnv:$P,hasStandardBrowserWebWorkerEnv:qP,origin:HP},Symbol.toStringTag,{value:"Module"})),Wt={...WP,...zP};function KP(n,e){return Ea(n,new Wt.classes.URLSearchParams,Object.assign({visitor:function(t,r,i,s){return Wt.isNode&&N.isBuffer(t)?(this.append(r,t.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function GP(n){return N.matchAll(/\w+|\[(\w*)]/g,n).map(e=>e[0]==="[]"?"":e[1]||e[0])}function QP(n){const e={},t=Object.keys(n);let r;const i=t.length;let s;for(r=0;r<i;r++)s=t[r],e[s]=n[s];return e}function Tg(n){function e(t,r,i,s){let o=t[s++];if(o==="__proto__")return!0;const c=Number.isFinite(+o),l=s>=t.length;return o=!o&&N.isArray(i)?i.length:o,l?(N.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!c):((!i[o]||!N.isObject(i[o]))&&(i[o]=[]),e(t,r,i[o],s)&&N.isArray(i[o])&&(i[o]=QP(i[o])),!c)}if(N.isFormData(n)&&N.isFunction(n.entries)){const t={};return N.forEachEntry(n,(r,i)=>{e(GP(r),i,t,0)}),t}return null}function JP(n,e,t){if(N.isString(n))try{return(e||JSON.parse)(n),N.trim(n)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(n)}const Cs={transitional:Eg,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",i=r.indexOf("application/json")>-1,s=N.isObject(e);if(s&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return i?JSON.stringify(Tg(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let c;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return KP(e,this.formSerializer).toString();if((c=N.isFileList(e))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Ea(c?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||i?(t.setContentType("application/json",!1),JP(e)):e}],transformResponse:[function(e){const t=this.transitional||Cs.transitional,r=t&&t.forcedJSONParsing,i=this.responseType==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(r&&!this.responseType||i)){const o=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(c){if(o)throw c.name==="SyntaxError"?ce.from(c,ce.ERR_BAD_RESPONSE,this,null,this.response):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Wt.classes.FormData,Blob:Wt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],n=>{Cs.headers[n]={}});const YP=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),XP=n=>{const e={};let t,r,i;return n&&n.split(`
`).forEach(function(o){i=o.indexOf(":"),t=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!t||e[t]&&YP[t])&&(t==="set-cookie"?e[t]?e[t].push(r):e[t]=[r]:e[t]=e[t]?e[t]+", "+r:r)}),e},Md=Symbol("internals");function Ui(n){return n&&String(n).trim().toLowerCase()}function ho(n){return n===!1||n==null?n:N.isArray(n)?n.map(ho):String(n)}function ZP(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(n);)e[r[1]]=r[2];return e}const eC=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function ec(n,e,t,r,i){if(N.isFunction(r))return r.call(this,e,t);if(i&&(e=t),!!N.isString(e)){if(N.isString(r))return e.indexOf(r)!==-1;if(N.isRegExp(r))return r.test(e)}}function tC(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function nC(n,e){const t=N.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(n,r+t,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class Rt{constructor(e){e&&this.set(e)}set(e,t,r){const i=this;function s(c,l,u){const d=Ui(l);if(!d)throw new Error("header name must be a non-empty string");const f=N.findKey(i,d);(!f||i[f]===void 0||u===!0||u===void 0&&i[f]!==!1)&&(i[f||l]=ho(c))}const o=(c,l)=>N.forEach(c,(u,d)=>s(u,d,l));if(N.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(N.isString(e)&&(e=e.trim())&&!eC(e))o(XP(e),t);else if(N.isHeaders(e))for(const[c,l]of e.entries())s(l,c,r);else e!=null&&s(t,e,r);return this}get(e,t){if(e=Ui(e),e){const r=N.findKey(this,e);if(r){const i=this[r];if(!t)return i;if(t===!0)return ZP(i);if(N.isFunction(t))return t.call(this,i,r);if(N.isRegExp(t))return t.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Ui(e),e){const r=N.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||ec(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let i=!1;function s(o){if(o=Ui(o),o){const c=N.findKey(r,o);c&&(!t||ec(r,r[c],c,t))&&(delete r[c],i=!0)}}return N.isArray(e)?e.forEach(s):s(e),i}clear(e){const t=Object.keys(this);let r=t.length,i=!1;for(;r--;){const s=t[r];(!e||ec(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const t=this,r={};return N.forEach(this,(i,s)=>{const o=N.findKey(r,s);if(o){t[o]=ho(i),delete t[s];return}const c=e?tC(s):String(s).trim();c!==s&&delete t[s],t[c]=ho(i),r[c]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return N.forEach(this,(r,i)=>{r!=null&&r!==!1&&(t[i]=e&&N.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Md]=this[Md]={accessors:{}}).accessors,i=this.prototype;function s(o){const c=Ui(o);r[c]||(nC(i,o),r[c]=!0)}return N.isArray(e)?e.forEach(s):s(e),this}}Rt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Rt.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(r){this[t]=r}}});N.freezeMethods(Rt);function tc(n,e){const t=this||Cs,r=e||t,i=Rt.from(r.headers);let s=r.data;return N.forEach(n,function(c){s=c.call(t,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function bg(n){return!!(n&&n.__CANCEL__)}function yi(n,e,t){ce.call(this,n??"canceled",ce.ERR_CANCELED,e,t),this.name="CanceledError"}N.inherits(yi,ce,{__CANCEL__:!0});function Ig(n,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?n(t):e(new ce("Request failed with status code "+t.status,[ce.ERR_BAD_REQUEST,ce.ERR_BAD_RESPONSE][Math.floor(t.status/100)-4],t.config,t.request,t))}function rC(n){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(n);return e&&e[1]||""}function iC(n,e){n=n||10;const t=new Array(n),r=new Array(n);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),d=r[s];o||(o=u),t[i]=l,r[i]=u;let f=s,m=0;for(;f!==i;)m+=t[f++],f=f%n;if(i=(i+1)%n,i===s&&(s=(s+1)%n),u-o<e)return;const E=d&&u-d;return E?Math.round(m*1e3/E):void 0}}function sC(n,e){let t=0;const r=1e3/e;let i=null;return function(){const o=this===!0,c=Date.now();if(o||c-t>r)return i&&(clearTimeout(i),i=null),t=c,n.apply(null,arguments);i||(i=setTimeout(()=>(i=null,t=Date.now(),n.apply(null,arguments)),r-(c-t)))}}const jo=(n,e,t=3)=>{let r=0;const i=iC(50,250);return sC(s=>{const o=s.loaded,c=s.lengthComputable?s.total:void 0,l=o-r,u=i(l),d=o<=c;r=o;const f={loaded:o,total:c,progress:c?o/c:void 0,bytes:l,rate:u||void 0,estimated:u&&c&&d?(c-o)/u:void 0,event:s,lengthComputable:c!=null};f[e?"download":"upload"]=!0,n(f)},t)},oC=Wt.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let r;function i(s){let o=s;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return r=i(window.location.href),function(o){const c=N.isString(o)?i(o):o;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),aC=Wt.hasStandardBrowserEnv?{write(n,e,t,r,i,s){const o=[n+"="+encodeURIComponent(e)];N.isNumber(t)&&o.push("expires="+new Date(t).toGMTString()),N.isString(r)&&o.push("path="+r),N.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(n){const e=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(n){this.write(n,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function cC(n){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function lC(n,e){return e?n.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):n}function Sg(n,e){return n&&!cC(e)?lC(n,e):e}const Vd=n=>n instanceof Rt?{...n}:n;function kr(n,e){e=e||{};const t={};function r(u,d,f){return N.isPlainObject(u)&&N.isPlainObject(d)?N.merge.call({caseless:f},u,d):N.isPlainObject(d)?N.merge({},d):N.isArray(d)?d.slice():d}function i(u,d,f){if(N.isUndefined(d)){if(!N.isUndefined(u))return r(void 0,u,f)}else return r(u,d,f)}function s(u,d){if(!N.isUndefined(d))return r(void 0,d)}function o(u,d){if(N.isUndefined(d)){if(!N.isUndefined(u))return r(void 0,u)}else return r(void 0,d)}function c(u,d,f){if(f in e)return r(u,d);if(f in n)return r(void 0,u)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c,headers:(u,d)=>i(Vd(u),Vd(d),!0)};return N.forEach(Object.keys(Object.assign({},n,e)),function(d){const f=l[d]||i,m=f(n[d],e[d],d);N.isUndefined(m)&&f!==c||(t[d]=m)}),t}const Rg=n=>{const e=kr({},n);let{data:t,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:s,headers:o,auth:c}=e;e.headers=o=Rt.from(o),e.url=wg(Sg(e.baseURL,e.url),n.params,n.paramsSerializer),c&&o.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let l;if(N.isFormData(t)){if(Wt.hasStandardBrowserEnv||Wt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...d]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...d].join("; "))}}if(Wt.hasStandardBrowserEnv&&(r&&N.isFunction(r)&&(r=r(e)),r||r!==!1&&oC(e.url))){const u=i&&s&&aC.read(s);u&&o.set(i,u)}return e},uC=typeof XMLHttpRequest<"u",hC=uC&&function(n){return new Promise(function(t,r){const i=Rg(n);let s=i.data;const o=Rt.from(i.headers).normalize();let{responseType:c}=i,l;function u(){i.cancelToken&&i.cancelToken.unsubscribe(l),i.signal&&i.signal.removeEventListener("abort",l)}let d=new XMLHttpRequest;d.open(i.method.toUpperCase(),i.url,!0),d.timeout=i.timeout;function f(){if(!d)return;const E=Rt.from("getAllResponseHeaders"in d&&d.getAllResponseHeaders()),R={data:!c||c==="text"||c==="json"?d.responseText:d.response,status:d.status,statusText:d.statusText,headers:E,config:n,request:d};Ig(function(F){t(F),u()},function(F){r(F),u()},R),d=null}"onloadend"in d?d.onloadend=f:d.onreadystatechange=function(){!d||d.readyState!==4||d.status===0&&!(d.responseURL&&d.responseURL.indexOf("file:")===0)||setTimeout(f)},d.onabort=function(){d&&(r(new ce("Request aborted",ce.ECONNABORTED,i,d)),d=null)},d.onerror=function(){r(new ce("Network Error",ce.ERR_NETWORK,i,d)),d=null},d.ontimeout=function(){let w=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const R=i.transitional||Eg;i.timeoutErrorMessage&&(w=i.timeoutErrorMessage),r(new ce(w,R.clarifyTimeoutError?ce.ETIMEDOUT:ce.ECONNABORTED,i,d)),d=null},s===void 0&&o.setContentType(null),"setRequestHeader"in d&&N.forEach(o.toJSON(),function(w,R){d.setRequestHeader(R,w)}),N.isUndefined(i.withCredentials)||(d.withCredentials=!!i.withCredentials),c&&c!=="json"&&(d.responseType=i.responseType),typeof i.onDownloadProgress=="function"&&d.addEventListener("progress",jo(i.onDownloadProgress,!0)),typeof i.onUploadProgress=="function"&&d.upload&&d.upload.addEventListener("progress",jo(i.onUploadProgress)),(i.cancelToken||i.signal)&&(l=E=>{d&&(r(!E||E.type?new yi(null,n,d):E),d.abort(),d=null)},i.cancelToken&&i.cancelToken.subscribe(l),i.signal&&(i.signal.aborted?l():i.signal.addEventListener("abort",l)));const m=rC(i.url);if(m&&Wt.protocols.indexOf(m)===-1){r(new ce("Unsupported protocol "+m+":",ce.ERR_BAD_REQUEST,n));return}d.send(s||null)})},dC=(n,e)=>{let t=new AbortController,r;const i=function(l){if(!r){r=!0,o();const u=l instanceof Error?l:this.reason;t.abort(u instanceof ce?u:new yi(u instanceof Error?u.message:u))}};let s=e&&setTimeout(()=>{i(new ce(`timeout ${e} of ms exceeded`,ce.ETIMEDOUT))},e);const o=()=>{n&&(s&&clearTimeout(s),s=null,n.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",i):l.unsubscribe(i))}),n=null)};n.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",i));const{signal:c}=t;return c.unsubscribe=o,[c,()=>{s&&clearTimeout(s),s=null}]},fC=function*(n,e){let t=n.byteLength;if(!e||t<e){yield n;return}let r=0,i;for(;r<t;)i=r+e,yield n.slice(r,i),r=i},pC=async function*(n,e,t){for await(const r of n)yield*fC(ArrayBuffer.isView(r)?r:await t(String(r)),e)},Fd=(n,e,t,r,i)=>{const s=pC(n,e,i);let o=0;return new ReadableStream({type:"bytes",async pull(c){const{done:l,value:u}=await s.next();if(l){c.close(),r();return}let d=u.byteLength;t&&t(o+=d),c.enqueue(new Uint8Array(u))},cancel(c){return r(c),s.return()}},{highWaterMark:2})},Ud=(n,e)=>{const t=n!=null;return r=>setTimeout(()=>e({lengthComputable:t,total:n,loaded:r}))},Ta=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ag=Ta&&typeof ReadableStream=="function",Hc=Ta&&(typeof TextEncoder=="function"?(n=>e=>n.encode(e))(new TextEncoder):async n=>new Uint8Array(await new Response(n).arrayBuffer())),mC=Ag&&(()=>{let n=!1;const e=new Request(Wt.origin,{body:new ReadableStream,method:"POST",get duplex(){return n=!0,"half"}}).headers.has("Content-Type");return n&&!e})(),jd=64*1024,Wc=Ag&&!!(()=>{try{return N.isReadableStream(new Response("").body)}catch{}})(),Bo={stream:Wc&&(n=>n.body)};Ta&&(n=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!Bo[e]&&(Bo[e]=N.isFunction(n[e])?t=>t[e]():(t,r)=>{throw new ce(`Response type '${e}' is not supported`,ce.ERR_NOT_SUPPORT,r)})})})(new Response);const gC=async n=>{if(n==null)return 0;if(N.isBlob(n))return n.size;if(N.isSpecCompliantForm(n))return(await new Request(n).arrayBuffer()).byteLength;if(N.isArrayBufferView(n))return n.byteLength;if(N.isURLSearchParams(n)&&(n=n+""),N.isString(n))return(await Hc(n)).byteLength},yC=async(n,e)=>{const t=N.toFiniteNumber(n.getContentLength());return t??gC(e)},_C=Ta&&(async n=>{let{url:e,method:t,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:c,onUploadProgress:l,responseType:u,headers:d,withCredentials:f="same-origin",fetchOptions:m}=Rg(n);u=u?(u+"").toLowerCase():"text";let[E,w]=i||s||o?dC([i,s],o):[],R,C;const F=()=>{!R&&setTimeout(()=>{E&&E.unsubscribe()}),R=!0};let M;try{if(l&&mC&&t!=="get"&&t!=="head"&&(M=await yC(d,r))!==0){let P=new Request(e,{method:"POST",body:r,duplex:"half"}),S;N.isFormData(r)&&(S=P.headers.get("content-type"))&&d.setContentType(S),P.body&&(r=Fd(P.body,jd,Ud(M,jo(l)),null,Hc))}N.isString(f)||(f=f?"cors":"omit"),C=new Request(e,{...m,signal:E,method:t.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let L=await fetch(C);const V=Wc&&(u==="stream"||u==="response");if(Wc&&(c||V)){const P={};["status","statusText","headers"].forEach(g=>{P[g]=L[g]});const S=N.toFiniteNumber(L.headers.get("content-length"));L=new Response(Fd(L.body,jd,c&&Ud(S,jo(c,!0)),V&&F,Hc),P)}u=u||"text";let G=await Bo[N.findKey(Bo,u)||"text"](L,n);return!V&&F(),w&&w(),await new Promise((P,S)=>{Ig(P,S,{data:G,headers:Rt.from(L.headers),status:L.status,statusText:L.statusText,config:n,request:C})})}catch(L){throw F(),L&&L.name==="TypeError"&&/fetch/i.test(L.message)?Object.assign(new ce("Network Error",ce.ERR_NETWORK,n,C),{cause:L.cause||L}):ce.from(L,L&&L.code,n,C)}}),Kc={http:LP,xhr:hC,fetch:_C};N.forEach(Kc,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{value:e})}catch{}Object.defineProperty(n,"adapterName",{value:e})}});const Bd=n=>`- ${n}`,vC=n=>N.isFunction(n)||n===null||n===!1,Pg={getAdapter:n=>{n=N.isArray(n)?n:[n];const{length:e}=n;let t,r;const i={};for(let s=0;s<e;s++){t=n[s];let o;if(r=t,!vC(t)&&(r=Kc[(o=String(t)).toLowerCase()],r===void 0))throw new ce(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([c,l])=>`adapter ${c} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Bd).join(`
`):" "+Bd(s[0]):"as no adapter specified";throw new ce("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Kc};function nc(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new yi(null,n)}function zd(n){return nc(n),n.headers=Rt.from(n.headers),n.data=tc.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),Pg.getAdapter(n.adapter||Cs.adapter)(n).then(function(r){return nc(n),r.data=tc.call(n,n.transformResponse,r),r.headers=Rt.from(r.headers),r},function(r){return bg(r)||(nc(n),r&&r.response&&(r.response.data=tc.call(n,n.transformResponse,r.response),r.response.headers=Rt.from(r.response.headers))),Promise.reject(r)})}const Cg="1.7.2",ou={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{ou[n]=function(r){return typeof r===n||"a"+(e<1?"n ":" ")+n}});const $d={};ou.transitional=function(e,t,r){function i(s,o){return"[Axios v"+Cg+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,c)=>{if(e===!1)throw new ce(i(o," has been removed"+(t?" in "+t:"")),ce.ERR_DEPRECATED);return t&&!$d[o]&&($d[o]=!0,console.warn(i(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,o,c):!0}};function wC(n,e,t){if(typeof n!="object")throw new ce("options must be an object",ce.ERR_BAD_OPTION_VALUE);const r=Object.keys(n);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const c=n[s],l=c===void 0||o(c,s,n);if(l!==!0)throw new ce("option "+s+" must be "+l,ce.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new ce("Unknown option "+s,ce.ERR_BAD_OPTION)}}const Gc={assertOptions:wC,validators:ou},Un=Gc.validators;class vr{constructor(e){this.defaults=e,this.interceptors={request:new Ld,response:new Ld}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=kr(this.defaults,t);const{transitional:r,paramsSerializer:i,headers:s}=t;r!==void 0&&Gc.assertOptions(r,{silentJSONParsing:Un.transitional(Un.boolean),forcedJSONParsing:Un.transitional(Un.boolean),clarifyTimeoutError:Un.transitional(Un.boolean)},!1),i!=null&&(N.isFunction(i)?t.paramsSerializer={serialize:i}:Gc.assertOptions(i,{encode:Un.function,serialize:Un.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=s&&N.merge(s.common,s[t.method]);s&&N.forEach(["delete","get","head","post","put","patch","common"],w=>{delete s[w]}),t.headers=Rt.concat(o,s);const c=[];let l=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(t)===!1||(l=l&&R.synchronous,c.unshift(R.fulfilled,R.rejected))});const u=[];this.interceptors.response.forEach(function(R){u.push(R.fulfilled,R.rejected)});let d,f=0,m;if(!l){const w=[zd.bind(this),void 0];for(w.unshift.apply(w,c),w.push.apply(w,u),m=w.length,d=Promise.resolve(t);f<m;)d=d.then(w[f++],w[f++]);return d}m=c.length;let E=t;for(f=0;f<m;){const w=c[f++],R=c[f++];try{E=w(E)}catch(C){R.call(this,C);break}}try{d=zd.call(this,E)}catch(w){return Promise.reject(w)}for(f=0,m=u.length;f<m;)d=d.then(u[f++],u[f++]);return d}getUri(e){e=kr(this.defaults,e);const t=Sg(e.baseURL,e.url);return wg(t,e.params,e.paramsSerializer)}}N.forEach(["delete","get","head","options"],function(e){vr.prototype[e]=function(t,r){return this.request(kr(r||{},{method:e,url:t,data:(r||{}).data}))}});N.forEach(["post","put","patch"],function(e){function t(r){return function(s,o,c){return this.request(kr(c||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}vr.prototype[e]=t(),vr.prototype[e+"Form"]=t(!0)});class au{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(s){t=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(c=>{r.subscribe(c),s=c}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,c){r.reason||(r.reason=new yi(s,o,c),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}static source(){let e;return{token:new au(function(i){e=i}),cancel:e}}}function EC(n){return function(t){return n.apply(null,t)}}function TC(n){return N.isObject(n)&&n.isAxiosError===!0}const Qc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Qc).forEach(([n,e])=>{Qc[e]=n});function kg(n){const e=new vr(n),t=cg(vr.prototype.request,e);return N.extend(t,vr.prototype,e,{allOwnKeys:!0}),N.extend(t,e,null,{allOwnKeys:!0}),t.create=function(i){return kg(kr(n,i))},t}const Ae=kg(Cs);Ae.Axios=vr;Ae.CanceledError=yi;Ae.CancelToken=au;Ae.isCancel=bg;Ae.VERSION=Cg;Ae.toFormData=Ea;Ae.AxiosError=ce;Ae.Cancel=Ae.CanceledError;Ae.all=function(e){return Promise.all(e)};Ae.spread=EC;Ae.isAxiosError=TC;Ae.mergeConfig=kr;Ae.AxiosHeaders=Rt;Ae.formToJSON=n=>Tg(N.isHTMLForm(n)?new FormData(n):n);Ae.getAdapter=Pg.getAdapter;Ae.HttpStatusCode=Qc;Ae.default=Ae;const rc=kn("location/fetchLocations",async(n,{rejectWithValue:e})=>{try{return(await Ae.get("https://petlove.b.goit.study/api/cities")).data}catch(t){return e(t.response.data)}}),Og=Gt({name:"location",initialState:{searchValue:"",locations:[],status:"idle",error:null},reducers:{setSearchValue(n,e){n.searchValue=e.payload},clearSearchValue(n){n.searchValue=""}},extraReducers:n=>{n.addCase(rc.pending,e=>{e.status="loading"}).addCase(rc.fulfilled,(e,t)=>{e.status="succeeded",e.locations=t.payload}).addCase(rc.rejected,(e,t)=>{e.status="failed",e.error=t.payload})}});Og.actions;const bC=Og.reducer,IC={isOpen:!1,modalContent:""},Dg=Gt({name:"modal",initialState:IC,reducers:{openModal:(n,e)=>{n.isOpen=!0,n.modalContent=e.payload},closeModal:n=>{n.isOpen=!1,n.modalContent=""}}});Dg.actions;const SC=Dg.reducer,xg=Gt({name:"favoritePets",initialState:{pets:[],showFavorites:!1},reducers:{addFavoritePet:(n,e)=>{n.pets.find(r=>r._id===e.payload._id)||n.pets.push(e.payload)},removeFavoritePet:(n,e)=>{n.pets=n.pets.filter(t=>t._id!==e.payload._id)},setShowFavorites:(n,e)=>{n.showFavorites=e.payload}}}),{addFavoritePet:ZC,removeFavoritePet:ek,setShowFavorites:tk}=xg.actions,RC=xg.reducer,Xs="https://petlove.b.goit.study/api",ic=kn("data/fetchData",async()=>{const n=await Ae.get(`${Xs}/notices/categories`),e=await Ae.get(`${Xs}/notices/sex`),t=await Ae.get(`${Xs}/notices/species`),r=await Ae.get(`${Xs}/notices`);return{categories:n.data,genders:e.data,types:t.data,locations:r.data.results.map(i=>i.location)}}),AC=Gt({name:"data",initialState:{categories:[],genders:[],types:[],locations:[],loading:!1,error:null},reducers:{},extraReducers:n=>{n.addCase(ic.pending,e=>{e.loading=!0}).addCase(ic.fulfilled,(e,t)=>{e.loading=!1,e.categories=t.payload.categories,e.genders=t.payload.genders,e.types=t.payload.types,e.locations=t.payload.locations}).addCase(ic.rejected,(e,t)=>{e.loading=!1,e.error=t.error.message})}}),PC=AC.reducer,CC={category:"",gender:"",type:"",location:""},Ng=Gt({name:"filters",initialState:CC,reducers:{setCategoryFilter(n,e){n.category=e.payload},setGenderFilter(n,e){n.gender=e.payload},setTypeFilter(n,e){n.type=e.payload},setLocationFilter(n,e){n.location=e.payload},clearFilters(n){n.category="",n.gender="",n.type="",n.location=""}}}),{setCategoryFilter:nk,setGenderFilter:rk,setTypeFilter:ik,setLocationFilter:sk,clearFilters:ok}=Ng.actions,kC=Ng.reducer,OC={viewedPets:[]},Lg=Gt({name:"viewedPets",initialState:OC,reducers:{addViewedPet(n,e){n.viewedPets.find(t=>t._id===e.payload._id)||n.viewedPets.push(e.payload)}}}),{addViewedPet:ak}=Lg.actions,DC=Lg.reducer,xC="https://petlove.b.goit.study/api",sc=kn("search/fetchAllPetsByQuery",async({query:n})=>{console.log(`Fetching all pets for query: ${n}`);const e=async s=>(await Ae.get(`${xC}/notices`,{params:{page:s,perPage:6,query:n}})).data;let t=1;const r=new Map;let i=1;do{const s=await e(t);s.results.forEach(o=>{r.set(o._id,o)}),i=s.totalPages,t+=1}while(t<=i);return console.log("Fetched all pets:",Array.from(r.values())),Array.from(r.values())}),Mg=Gt({name:"search",initialState:{pets:[],totalItems:0,loading:!1,error:null,query:"",currentPage:1},reducers:{setQuery(n,e){console.log(`Setting query: ${e.payload}`),n.query=e.payload,n.currentPage=1},setPage(n,e){console.log(`Setting page: ${e.payload}`),n.currentPage=e.payload}},extraReducers:n=>{n.addCase(sc.pending,e=>{e.loading=!0}).addCase(sc.fulfilled,(e,t)=>{e.loading=!1,e.pets=t.payload,e.totalItems=t.payload.length,console.log("Fetched all pets:",e.pets)}).addCase(sc.rejected,(e,t)=>{e.loading=!1,e.error=t.error.message})}}),{setQuery:ck,setPage:lk}=Mg.actions,NC=Mg.reducer,Vg=Gt({name:"sort",initialState:{sortBy:"none"},reducers:{setSortBy(n,e){n.sortBy=e.payload}}}),{setSortBy:uk}=Vg.actions,LC=Vg.reducer,Fg="https://petlove.b.goit.study/api",oc=kn("pets/addNotice",async({token:n,...e},t)=>{try{const r={headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"}};return(await Ae.post(`${Fg}/notices`,e,r)).data}catch(r){return console.error("Error from API:",r.response.data),t.rejectWithValue(r.response.data)}}),ac=kn("pets/fetchPets",async(n,e)=>{try{return(await Ae.get(`${Fg}/notices`)).data.results}catch(t){return e.rejectWithValue(t.message)}}),MC=Gt({name:"pets",initialState:{pets:[],status:"idle",error:null},reducers:{},extraReducers:n=>{n.addCase(ac.pending,e=>{e.status="loading"}).addCase(ac.fulfilled,(e,t)=>{e.status="succeeded",e.pets=t.payload}).addCase(ac.rejected,(e,t)=>{e.status="failed",e.error=t.payload}).addCase(oc.pending,e=>{e.status="loading"}).addCase(oc.fulfilled,(e,t)=>{e.status="succeeded",e.pets.push(t.payload)}).addCase(oc.rejected,(e,t)=>{e.status="failed",e.error=t.payload})}}),VC=MC.reducer,FC=_f({user:BR,notices:JA,modal:SC,location:bC,favoritePets:RC,data:PC,filters:kC,viewedPets:DC,search:NC,sort:LC,pets:VC}),UC={key:"root",storage:og,whitelist:["user","notices","location","favoritePets","viewedPets"]},jC=xA(UC,FC),Ug=cw({reducer:jC,middleware:n=>n({serializableCheck:{ignoredActions:["persist/PERSIST","persist/REHYDRATE","persist/PAUSE","persist/FLUSH","persist/PURGE","persist/REGISTER"]}})}),BC=UA(Ug);function fo(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?fo=function(t){return typeof t}:fo=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fo(n)}function zC(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function $C(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function qC(n,e,t){return e&&$C(n.prototype,e),n}function HC(n,e){return e&&(fo(e)==="object"||typeof e=="function")?e:po(n)}function Jc(n){return Jc=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Jc(n)}function po(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function WC(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&Yc(n,e)}function Yc(n,e){return Yc=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Yc(n,e)}function mo(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var jg=function(n){WC(e,n);function e(){var t,r;zC(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=HC(this,(t=Jc(e)).call.apply(t,[this].concat(s))),mo(po(r),"state",{bootstrapped:!1}),mo(po(r),"_unsubscribe",void 0),mo(po(r),"handlePersistorState",function(){var c=r.props.persistor,l=c.getState(),u=l.bootstrapped;u&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return qC(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(j.PureComponent);mo(jg,"defaultProps",{children:null,loading:null});Kd(document.getElementById("root")).render($.jsx(bv,{store:Ug,children:$.jsx(jg,{loading:null,persistor:BC,children:$.jsx(_A,{})})}));export{JR as A,ds as B,hc as L,Ys as P,il as a,ZC as b,af as c,ak as d,Ae as e,rk as f,ik as g,sk as h,uk as i,$ as j,sc as k,ck as l,lk as m,VR as n,FR as o,UR as p,jR as q,ek as r,nk as s,tk as t,yf as u,Gm as v,oc as w};
