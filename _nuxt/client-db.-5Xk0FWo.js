import{a7 as D,ad as L,l as x,a5 as R,j as E}from"./entry.4CEYzNrl.js";import{p as O,c as N,m as q}from"./slugify.YXDfRyGl.js";import{g as K,a as v,b as y,o as T,c as F,d as _,f as b,h as A,i as B}from"./query.4mAxjKfx.js";import{u as P}from"./preview.h8CehpnJ.js";function M(s={}){const o=Q(t,s.operators);function t(e,i){return typeof i!="object"||i instanceof RegExp?o.$eq(e,i):Object.keys(i||{}).every(r=>{const n=i[r];if(r.startsWith("$")&&o[r]){const a=o[r];return typeof a=="function"?a(e,n):!1}return t(K(e,r),n)})}return t}function Q(s,o={}){return{$match:(t,e)=>s(t,e),$eq:(t,e)=>e instanceof RegExp?e.test(t):t===e,$ne:(t,e)=>e instanceof RegExp?!e.test(t):t!==e,$not:(t,e)=>!s(t,e),$and:(t,e)=>(v(e,"$and requires an array as condition"),e.every(i=>s(t,i))),$or:(t,e)=>(v(e,"$or requires an array as condition"),e.some(i=>s(t,i))),$in:(t,e)=>y(e).some(i=>Array.isArray(t)?s(t,{$contains:i}):s(t,i)),$contains:(t,e)=>(t=Array.isArray(t)?t:String(t),y(e).every(i=>t.includes(i))),$icontains:(t,e)=>{if(typeof e!="string")throw new TypeError("$icontains requires a string, use $contains instead");return t=String(t).toLocaleLowerCase(),y(e).every(i=>t.includes(i.toLocaleLowerCase()))},$containsAny:(t,e)=>(v(e,"$containsAny requires an array as condition"),t=Array.isArray(t)?t:String(t),e.some(i=>t.includes(i))),$exists:(t,e)=>e?typeof t<"u":typeof t>"u",$type:(t,e)=>typeof t===String(e),$regex:(t,e)=>{if(!(e instanceof RegExp)){const i=String(e).match(/\/(.*)\/([dgimsuy]*)$/);e=i?new RegExp(i[1],i[2]||""):new RegExp(e)}return e.test(String(t||""))},$lt:(t,e)=>t<e,$lte:(t,e)=>t<=e,$gt:(t,e)=>t>e,$gte:(t,e)=>t>=e,...o||{}}}function U(s){const o=M(),t=(r,{query:n,before:a,after:c})=>{const f=typeof n=="string"?{_path:n}:n,l=r.findIndex(g=>o(g,f));a=a??1,c=c??1;const p=new Array(a+c).fill(null,0);return l===-1?p:p.map((g,u)=>r[l-a+u+ +(u>=a)]||null)},e=[(r,n)=>{const a=r.result.filter(c=>y(n.where).every(f=>o(c,f)));return{...r,result:a,total:a.length}},(r,n)=>y(n.sort).forEach(a=>F(r.result,a)),function(n,a,c){var f;if(a.surround){let l=t(((f=n.result)==null?void 0:f.length)===1?c:n.result,a.surround);l=_(b(a.without))(l),l=_(A(a.only))(l),n.surround=l}return n}],i=[(r,n)=>{if(n.skip)return{...r,result:r.result.slice(n.skip),skip:n.skip}},(r,n)=>{if(n.limit)return{...r,result:r.result.slice(0,n.limit),limit:n.limit}},function(n,a,c){var f,l,p;if(a.dirConfig){const g=((f=n.result[0])==null?void 0:f._path)||((p=(l=a.where)==null?void 0:l.find(u=>u._path))==null?void 0:p._path);if(typeof g=="string"){const u=c.find(h=>h._path===D(g,"_dir"));u&&(n.dirConfig={_path:u._path,...b(["_"])(u)})}}return n},(r,n)=>({...r,result:_(b(n.without))(r.result)}),(r,n)=>({...r,result:_(A(n.only))(r.result)})];return async r=>{const n=await s(),a=r.params(),c={result:n,limit:0,skip:0,total:n.length},f=e.reduce((p,g)=>g(p,a,n)||p,c);if(a.count)return{result:f.result.length};const l=i.reduce((p,g)=>g(p,a,n)||p,f);return a.first?{...T(["skip","limit","total"])(l),result:l.result[0]}:l}}function I(s){const o=U(s);return async t=>{var r;const e=t.params(),i=await o(t);return e.surround?i==null?void 0:i.surround:(i!=null&&i.dirConfig&&(i.result={_path:(r=i.dirConfig)==null?void 0:r._path,...i.result,_dir:i.dirConfig}),i==null?void 0:i.result)}}const W=s=>s.split(/[\s-]/g).map(L).join(" ");function H(s,o){const{navigation:t}=x().public.content;if(t===!1)return[];const e=r=>({...G(["title",...t.fields])(r),...J(r==null?void 0:r.navigation)?r.navigation:{}}),i=s.sort((r,n)=>r._path.localeCompare(n._path)).reduce((r,n)=>{const a=n._path.substring(1).split("/"),c=n._id.split(":").slice(1),f=!!c[c.length-1].match(/([1-9][0-9]*\.)?index.md/g),l=u=>({title:u.title,_path:u._path,_file:u._file,children:[],...e(u),...u._draft?{_draft:!0}:{}}),p=l(n);if(f){const u=o[p._path];if(typeof(u==null?void 0:u.navigation)<"u"&&!(u!=null&&u.navigation))return r;if(n._path!=="/"){const h=l(n);p.children.push(h)}Object.assign(p,e(u))}return a.length===1?(r.push(p),r):(a.slice(0,-1).reduce((u,h,j)=>{const $="/"+a.slice(0,j+1).join("/"),d=o[$];if(typeof(d==null?void 0:d.navigation)<"u"&&!d.navigation)return[];let w=u.find(k=>k._path===$);return w||(w={title:W(h),_path:$,_file:n._file,children:[],...e(d)},u.push(w)),w.children},r).push(p),r)},[]);return S(i)}const z=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"});function S(s){var t;const o=s.sort((e,i)=>z.compare(e._file,i._file));for(const e of o)(t=e.children)!=null&&t.length?S(e.children):delete e.children,delete e._file;return s}function G(s){return o=>(o=o||{},s&&s.length?s.filter(t=>typeof o[t]<"u").reduce((t,e)=>Object.assign(t,{[e]:o[e]}),{}):o)}function J(s){return Object.prototype.toString.call(s)==="[object Object]"}const V=s=>R(s,x().public.content.api.baseURL),X=O(N({driver:q()}),"@content");function Y(s){async function o(){const t=new Set(await s.getKeys("cache:")),e=P().getPreviewToken();if(e){const r=await s.getItem(`${e}$`).then(c=>c||{});if(Array.isArray(r.ignoreSources)){const c=r.ignoreSources.map(f=>`cache:${f.trim()}:`);for(const f of t)c.some(l=>f.startsWith(l))&&t.delete(f)}const n=await s.getKeys(`${e}:`),a=await Promise.all(n.map(c=>s.getItem(c)));for(const c of a)t.delete(`cache:${c._id}`),c.__deleted||t.add(`${e}:${c._id}`)}return await Promise.all(Array.from(t).map(r=>s.getItem(r)))}return{storage:s,fetch:I(o),query:t=>B(I(o),{initialParams:t,legacy:!0})}}let C=null,m=null;async function Z(){return m?await m:C||(m=tt(),C=await m),C}async function tt(){const s=E(),{content:o}=x().public,t=Y(X),e=await t.storage.getItem("integrity");if(o.integrity!==+(e||0)){const{contents:i,navigation:r}=await $fetch(V(o.integrity?`cache.${o.integrity}.json`:"cache.json"));await Promise.all(i.map(n=>t.storage.setItem(`cache:${n._id}`,n))),await t.storage.setItem("navigation",r),await t.storage.setItem("integrity",o.integrity)}return await s.callHook("content:storage",t.storage),t}async function st(s){const o=await Z();if(!P().getPreviewToken()&&Object.keys(s||{}).length===0)return o.storage.getItem("navigation");const t=await o.query(s).where({_partial:!1,navigation:{$ne:!1}}).find(),i=(await o.query().where({_path:/\/_dir$/i,_partial:!0}).find()).reduce((r,n)=>{var c;((c=n.title)==null?void 0:c.toLowerCase())==="dir"&&(n.title=void 0);const a=n._path.split("/").slice(0,-1).join("/")||"/";return r[a]={...n,...n.body},r},{});return H(t,i)}export{X as contentStorage,Y as createDB,st as generateNavigation,Z as useContentDatabase};
