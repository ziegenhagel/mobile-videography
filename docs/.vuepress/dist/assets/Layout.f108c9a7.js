var De=Object.defineProperty,Ie=Object.defineProperties;var He=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable;var pe=(l,t,e)=>t in l?De(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e,Y=(l,t)=>{for(var e in t||(t={}))Me.call(t,e)&&pe(l,e,t[e]);if(_e)for(var e of _e(t))Pe.call(t,e)&&pe(l,e,t[e]);return l},J=(l,t)=>Ie(l,He(t));import{_ as S,r as A,o,c,b as L,f as C,i as P,j as p,k as fe,h as a,F as I,l as R,a as g,t as x,m as w,n as z,p as Q,q as T,w as N,s as he,v as $,d as j,x as X,y as Ee,z as Ae,A as Re,B as Z,C as ee,D as E,E as K,G as be,H as ge,u as ke,g as D,T as $e,I as O,J as Le,K as q,L as G,M as Fe,N as Oe,O as te,P as ye,Q as we,e as ze,R as ae,S as We,U,V as ne,W as Ve,X as Ue,Y as je,Z as Ke}from"./app.0f410c2e.js";const qe={},Ge={class:"theme-default-content custom"};function Xe(l,t){const e=A("Content");return o(),c("div",Ge,[L(e)])}var Ye=S(qe,[["render",Xe],["__file","HomeContent.vue"]]);const Je={key:0,class:"features"},Qe=C({__name:"HomeFeatures",setup(l){const t=P(),e=p(()=>fe(t.value.features)?t.value.features:[]);return(i,r)=>a(e).length?(o(),c("div",Je,[(o(!0),c(I,null,R(a(e),_=>(o(),c("div",{key:_.title,class:"feature"},[g("h2",null,x(_.title),1),g("p",null,x(_.details),1)]))),128))])):w("",!0)}});var Ze=S(Qe,[["__file","HomeFeatures.vue"]]);const et=["innerHTML"],tt=["textContent"],at=C({__name:"HomeFooter",setup(l){const t=P(),e=p(()=>t.value.footer),i=p(()=>t.value.footerHtml);return(r,_)=>a(e)?(o(),c(I,{key:0},[a(i)?(o(),c("div",{key:0,class:"footer",innerHTML:a(e)},null,8,et)):(o(),c("div",{key:1,class:"footer",textContent:x(a(e))},null,8,tt))],64)):w("",!0)}});var nt=S(at,[["__file","HomeFooter.vue"]]);const ot=["href","rel","target","aria-label"],rt=C({inheritAttrs:!1}),st=C(J(Y({},rt),{__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(l){const t=l,e=z(),i=Re(),{item:r}=Q(t),_=p(()=>X(r.value.link)),m=p(()=>Ee(r.value.link)||Ae(r.value.link)),h=p(()=>{if(!m.value){if(r.value.target)return r.value.target;if(_.value)return"_blank"}}),n=p(()=>h.value==="_blank"),s=p(()=>!_.value&&!m.value&&!n.value),u=p(()=>{if(!m.value){if(r.value.rel)return r.value.rel;if(n.value)return"noopener noreferrer"}}),v=p(()=>r.value.ariaLabel||r.value.text),d=p(()=>{const y=Object.keys(i.value.locales);return y.length?!y.some(f=>f===r.value.link):r.value.link!=="/"}),b=p(()=>d.value?e.path.startsWith(r.value.link):!1),k=p(()=>s.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(e.path):b.value:!1);return(y,f)=>{const B=A("RouterLink"),H=A("AutoLinkExternalIcon");return a(s)?(o(),T(B,he({key:0,class:{"router-link-active":a(k)},to:a(r).link,"aria-label":a(v)},y.$attrs),{default:N(()=>[$(y.$slots,"before"),j(" "+x(a(r).text)+" ",1),$(y.$slots,"after")]),_:3},16,["class","to","aria-label"])):(o(),c("a",he({key:1,class:"external-link",href:a(r).link,rel:a(u),target:a(h),"aria-label":a(v)},y.$attrs),[$(y.$slots,"before"),j(" "+x(a(r).text)+" ",1),a(n)?(o(),T(H,{key:0})):w("",!0),$(y.$slots,"after")],16,ot))}}}));var M=S(st,[["__file","AutoLink.vue"]]);const lt={class:"hero"},ut={key:0,id:"main-title"},it={key:1,class:"description"},ct={key:2,class:"actions"},vt=C({__name:"HomeHero",setup(l){const t=P(),e=Z(),i=ee(),r=p(()=>i.value&&t.value.heroImageDark!==void 0?t.value.heroImageDark:t.value.heroImage),_=p(()=>t.value.heroText===null?null:t.value.heroText||e.value.title||"Hello"),m=p(()=>t.value.heroAlt||_.value||"hero"),h=p(()=>t.value.tagline===null?null:t.value.tagline||e.value.description||"Welcome to your VuePress site"),n=p(()=>fe(t.value.actions)?t.value.actions.map(({text:u,link:v,type:d="primary"})=>({text:u,link:v,type:d})):[]),s=()=>{if(!r.value)return null;const u=K("img",{src:be(r.value),alt:m.value});return t.value.heroImageDark===void 0?u:K(ge,()=>u)};return(u,v)=>(o(),c("header",lt,[L(s),a(_)?(o(),c("h1",ut,x(a(_)),1)):w("",!0),a(h)?(o(),c("p",it,x(a(h)),1)):w("",!0),a(n).length?(o(),c("p",ct,[(o(!0),c(I,null,R(a(n),d=>(o(),T(M,{key:d.text,class:E(["action-button",[d.type]]),item:d},null,8,["class","item"]))),128))])):w("",!0)]))}});var dt=S(vt,[["__file","HomeHero.vue"]]);const _t={class:"home"},pt=C({__name:"Home",setup(l){return(t,e)=>(o(),c("main",_t,[L(dt),L(Ze),L(Ye),L(nt)]))}});var ht=S(pt,[["__file","Home.vue"]]);const mt=C({__name:"NavbarBrand",setup(l){const t=ke(),e=Z(),i=D(),r=ee(),_=p(()=>i.value.home||t.value),m=p(()=>e.value.title),h=p(()=>r.value&&i.value.logoDark!==void 0?i.value.logoDark:i.value.logo),n=()=>{if(!h.value)return null;const s=K("img",{class:"logo",src:be(h.value),alt:m.value});return i.value.logoDark===void 0?s:K(ge,()=>s)};return(s,u)=>{const v=A("RouterLink");return o(),T(v,{to:a(_)},{default:N(()=>[L(n),a(m)?(o(),c("span",{key:0,class:E(["site-name",{"can-hide":a(h)}])},x(a(m)),3)):w("",!0)]),_:1},8,["to"])}}});var ft=S(mt,[["__file","NavbarBrand.vue"]]);const bt=C({__name:"DropdownTransition",setup(l){const t=i=>{i.style.height=i.scrollHeight+"px"},e=i=>{i.style.height=""};return(i,r)=>(o(),T($e,{name:"dropdown",onEnter:t,onAfterEnter:e,onBeforeLeave:t},{default:N(()=>[$(i.$slots,"default")]),_:3}))}});var Se=S(bt,[["__file","DropdownTransition.vue"]]);const gt=["aria-label"],kt={class:"title"},$t=g("span",{class:"arrow down"},null,-1),Lt=["aria-label"],yt={class:"title"},wt={class:"navbar-dropdown"},St={class:"navbar-dropdown-subtitle"},Ct={key:1},Tt={class:"navbar-dropdown-subitem-wrapper"},xt=C({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(l){const t=l,{item:e}=Q(t),i=p(()=>e.value.ariaLabel||e.value.text),r=O(!1),_=z();Le(()=>_.path,()=>{r.value=!1});const m=n=>{n.detail===0?r.value=!r.value:r.value=!1},h=(n,s)=>s[s.length-1]===n;return(n,s)=>(o(),c("div",{class:E(["navbar-dropdown-wrapper",{open:r.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":a(i),onClick:m},[g("span",kt,x(a(e).text),1),$t],8,gt),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":a(i),onClick:s[0]||(s[0]=u=>r.value=!r.value)},[g("span",yt,x(a(e).text),1),g("span",{class:E(["arrow",r.value?"down":"right"])},null,2)],8,Lt),L(Se,null,{default:N(()=>[q(g("ul",wt,[(o(!0),c(I,null,R(a(e).children,u=>(o(),c("li",{key:u.text,class:"navbar-dropdown-item"},[u.children?(o(),c(I,{key:0},[g("h4",St,[u.link?(o(),T(M,{key:0,item:u,onFocusout:v=>h(u,a(e).children)&&u.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(o(),c("span",Ct,x(u.text),1))]),g("ul",Tt,[(o(!0),c(I,null,R(u.children,v=>(o(),c("li",{key:v.link,class:"navbar-dropdown-subitem"},[L(M,{item:v,onFocusout:d=>h(v,u.children)&&h(u,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(o(),T(M,{key:1,item:u,onFocusout:v=>h(u,a(e).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[G,r.value]])]),_:1})],2))}});var Nt=S(xt,[["__file","NavbarDropdown.vue"]]);const me=l=>decodeURI(l).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Bt=(l,t)=>{if(t.hash===l)return!0;const e=me(t.path),i=me(l);return e===i},Ce=(l,t)=>l.link&&Bt(l.link,t)?!0:l.children?l.children.some(e=>Ce(e,t)):!1,Te=l=>!X(l)||/github\.com/.test(l)?"GitHub":/bitbucket\.org/.test(l)?"Bitbucket":/gitlab\.com/.test(l)?"GitLab":/gitee\.com/.test(l)?"Gitee":null,Dt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},It=({docsRepo:l,editLinkPattern:t})=>{if(t)return t;const e=Te(l);return e!==null?Dt[e]:null},Ht=({docsRepo:l,docsBranch:t,docsDir:e,filePathRelative:i,editLinkPattern:r})=>{if(!i)return null;const _=It({docsRepo:l,editLinkPattern:r});return _?_.replace(/:repo/,X(l)?l:`https://github.com/${l}`).replace(/:branch/,t).replace(/:path/,Fe(`${Oe(e)}/${i}`)):null},Mt={key:0,class:"navbar-items"},Pt=C({__name:"NavbarItems",setup(l){const t=()=>{const s=te(),u=ke(),v=Z(),d=D();return p(()=>{var B,H;const b=Object.keys(v.value.locales);if(b.length<2)return[];const k=s.currentRoute.value.path,y=s.currentRoute.value.fullPath;return[{text:(B=d.value.selectLanguageText)!=null?B:"unknown language",ariaLabel:(H=d.value.selectLanguageAriaLabel)!=null?H:"unkown language",children:b.map(F=>{var se,le,ue,ie,ce,ve;const W=(le=(se=v.value.locales)==null?void 0:se[F])!=null?le:{},oe=(ie=(ue=d.value.locales)==null?void 0:ue[F])!=null?ie:{},re=`${W.lang}`,Ne=(ce=oe.selectLanguageName)!=null?ce:re;let V;if(re===v.value.lang)V=y;else{const de=k.replace(u.value,F);s.getRoutes().some(Be=>Be.path===de)?V=de:V=(ve=oe.home)!=null?ve:F}return{text:Ne,link:V}})}]})},e=()=>{const s=D(),u=p(()=>s.value.repo),v=p(()=>u.value?Te(u.value):null),d=p(()=>u.value&&!X(u.value)?`https://github.com/${u.value}`:u.value),b=p(()=>d.value?s.value.repoLabel?s.value.repoLabel:v.value===null?"Source":v.value:null);return p(()=>!d.value||!b.value?[]:[{text:b.value,link:d.value}])},i=s=>ye(s)?we(s):s.children?J(Y({},s),{children:s.children.map(i)}):s,_=(()=>{const s=D();return p(()=>(s.value.navbar||[]).map(i))})(),m=t(),h=e(),n=p(()=>[..._.value,...m.value,...h.value]);return(s,u)=>a(n).length?(o(),c("nav",Mt,[(o(!0),c(I,null,R(a(n),v=>(o(),c("div",{key:v.text,class:"navbar-item"},[v.children?(o(),T(Nt,{key:0,item:v},null,8,["item"])):(o(),T(M,{key:1,item:v},null,8,["item"]))]))),128))])):w("",!0)}});var xe=S(Pt,[["__file","NavbarItems.vue"]]);const Et=["title"],At={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Rt=ze('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Ft=[Rt],Ot={class:"icon",focusable:"false",viewBox:"0 0 32 32"},zt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),Wt=[zt],Vt=C({__name:"ToggleDarkModeButton",setup(l){const t=D(),e=ee(),i=()=>{e.value=!e.value};return(r,_)=>(o(),c("button",{class:"toggle-dark-button",title:a(t).toggleDarkMode,onClick:i},[q((o(),c("svg",At,Ft,512)),[[G,!a(e)]]),q((o(),c("svg",Ot,Wt,512)),[[G,a(e)]])],8,Et))}});var Ut=S(Vt,[["__file","ToggleDarkModeButton.vue"]]);const jt=["title"],Kt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),qt=[Kt],Gt=C({__name:"ToggleSidebarButton",emits:["toggle"],setup(l){const t=D();return(e,i)=>(o(),c("div",{class:"toggle-sidebar-button",title:a(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:i[0]||(i[0]=r=>e.$emit("toggle"))},qt,8,jt))}});var Xt=S(Gt,[["__file","ToggleSidebarButton.vue"]]);const Yt=C({__name:"Navbar",emits:["toggle-sidebar"],setup(l){const t=D(),e=O(null),i=O(null),r=O(0),_=p(()=>r.value?{maxWidth:r.value+"px"}:{}),m=p(()=>t.value.darkMode);ae(()=>{const s=h(e.value,"paddingLeft")+h(e.value,"paddingRight"),u=()=>{var v;window.innerWidth<=719?r.value=0:r.value=e.value.offsetWidth-s-(((v=i.value)==null?void 0:v.offsetWidth)||0)};u(),window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)});function h(n,s){var d,b,k;const u=(k=(b=(d=n==null?void 0:n.ownerDocument)==null?void 0:d.defaultView)==null?void 0:b.getComputedStyle(n,null))==null?void 0:k[s],v=Number.parseInt(u,10);return Number.isNaN(v)?0:v}return(n,s)=>{const u=A("NavbarSearch");return o(),c("header",{ref_key:"navbar",ref:e,class:"navbar"},[L(Xt,{onToggle:s[0]||(s[0]=v=>n.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:i},[L(ft)],512),g("div",{class:"navbar-items-wrapper",style:We(a(_))},[$(n.$slots,"before"),L(xe,{class:"can-hide"}),$(n.$slots,"after"),a(m)?(o(),T(Ut,{key:0})):w("",!0),L(u)],4)],512)}}});var Jt=S(Yt,[["__file","Navbar.vue"]]);const Qt={class:"page-meta"},Zt={key:0,class:"meta-item edit-link"},ea={key:1,class:"meta-item last-updated"},ta={class:"meta-item-label"},aa={class:"meta-item-info"},na={key:2,class:"meta-item contributors"},oa={class:"meta-item-label"},ra={class:"meta-item-info"},sa=["title"],la=j(", "),ua=C({__name:"PageMeta",setup(l){const t=()=>{const n=D(),s=U(),u=P();return p(()=>{var H,F,W;if(!((F=(H=u.value.editLink)!=null?H:n.value.editLink)!=null?F:!0))return null;const{repo:d,docsRepo:b=d,docsBranch:k="main",docsDir:y="",editLinkText:f}=n.value;if(!b)return null;const B=Ht({docsRepo:b,docsBranch:k,docsDir:y,filePathRelative:s.value.filePathRelative,editLinkPattern:(W=u.value.editLinkPattern)!=null?W:n.value.editLinkPattern});return B?{text:f!=null?f:"Edit this page",link:B}:null})},e=()=>{const n=D(),s=U(),u=P();return p(()=>{var b,k,y,f;return!((k=(b=u.value.lastUpdated)!=null?b:n.value.lastUpdated)!=null?k:!0)||!((y=s.value.git)!=null&&y.updatedTime)?null:new Date((f=s.value.git)==null?void 0:f.updatedTime).toLocaleString()})},i=()=>{const n=D(),s=U(),u=P();return p(()=>{var d,b,k,y;return((b=(d=u.value.contributors)!=null?d:n.value.contributors)!=null?b:!0)&&(y=(k=s.value.git)==null?void 0:k.contributors)!=null?y:null})},r=D(),_=t(),m=e(),h=i();return(n,s)=>{const u=A("ClientOnly");return o(),c("footer",Qt,[a(_)?(o(),c("div",Zt,[L(M,{class:"meta-item-label",item:a(_)},null,8,["item"])])):w("",!0),a(m)?(o(),c("div",ea,[g("span",ta,x(a(r).lastUpdatedText)+": ",1),L(u,null,{default:N(()=>[g("span",aa,x(a(m)),1)]),_:1})])):w("",!0),a(h)&&a(h).length?(o(),c("div",na,[g("span",oa,x(a(r).contributorsText)+": ",1),g("span",ra,[(o(!0),c(I,null,R(a(h),(v,d)=>(o(),c(I,{key:d},[g("span",{class:"contributor",title:`email: ${v.email}`},x(v.name),9,sa),d!==a(h).length-1?(o(),c(I,{key:0},[la],64)):w("",!0)],64))),128))])])):w("",!0)])}}});var ia=S(ua,[["__file","PageMeta.vue"]]);const ca={key:0,class:"page-nav"},va={class:"inner"},da={key:0,class:"prev"},_a={key:1,class:"next"},pa=C({__name:"PageNav",setup(l){const t=n=>n===!1?null:ye(n)?we(n):Ve(n)?n:!1,e=(n,s,u)=>{const v=n.findIndex(d=>d.link===s);if(v!==-1){const d=n[v+u];return d!=null&&d.link?d:null}for(const d of n)if(d.children){const b=e(d.children,s,u);if(b)return b}return null},i=P(),r=ne(),_=z(),m=p(()=>{const n=t(i.value.prev);return n!==!1?n:e(r.value,_.path,-1)}),h=p(()=>{const n=t(i.value.next);return n!==!1?n:e(r.value,_.path,1)});return(n,s)=>a(m)||a(h)?(o(),c("nav",ca,[g("p",va,[a(m)?(o(),c("span",da,[L(M,{item:a(m)},null,8,["item"])])):w("",!0),a(h)?(o(),c("span",_a,[L(M,{item:a(h)},null,8,["item"])])):w("",!0)])])):w("",!0)}});var ha=S(pa,[["__file","PageNav.vue"]]);const ma={class:"page"},fa={class:"theme-default-content"},ba=C({__name:"Page",setup(l){return(t,e)=>{const i=A("Content");return o(),c("main",ma,[$(t.$slots,"top"),g("div",fa,[$(t.$slots,"content-top"),L(i),$(t.$slots,"content-bottom")]),L(ia),L(ha),$(t.$slots,"bottom")])}}});var ga=S(ba,[["__file","Page.vue"]]);const ka={class:"sidebar-item-children"},$a=C({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(l){const t=l,{item:e,depth:i}=Q(t),r=z(),_=te(),m=p(()=>Ce(e.value,r)),h=p(()=>({"sidebar-item":!0,"sidebar-heading":i.value===0,active:m.value,collapsible:e.value.collapsible})),n=O(!0),s=O(void 0);return e.value.collapsible&&(n.value=m.value,s.value=()=>{n.value=!n.value},_.afterEach(()=>{n.value=m.value})),(u,v)=>{var b;const d=A("SidebarItem",!0);return o(),c("li",null,[a(e).link?(o(),T(M,{key:0,class:E(a(h)),item:a(e)},null,8,["class","item"])):(o(),c("p",{key:1,tabindex:"0",class:E(a(h)),onClick:v[0]||(v[0]=(...k)=>s.value&&s.value(...k)),onKeydown:v[1]||(v[1]=Ue((...k)=>s.value&&s.value(...k),["enter"]))},[j(x(a(e).text)+" ",1),a(e).collapsible?(o(),c("span",{key:0,class:E(["arrow",n.value?"down":"right"])},null,2)):w("",!0)],34)),(b=a(e).children)!=null&&b.length?(o(),T(Se,{key:2},{default:N(()=>[q(g("ul",ka,[(o(!0),c(I,null,R(a(e).children,k=>(o(),T(d,{key:`${a(i)}${k.text}${k.link}`,item:k,depth:a(i)+1},null,8,["item","depth"]))),128))],512),[[G,n.value]])]),_:1})):w("",!0)])}}});var La=S($a,[["__file","SidebarItem.vue"]]);const ya={key:0,class:"sidebar-items"},wa=C({__name:"SidebarItems",setup(l){const t=z(),e=ne();return ae(()=>{Le(()=>t.hash,i=>{const r=document.querySelector(".sidebar");if(!r)return;const _=document.querySelector(`.sidebar a.sidebar-item[href="${t.path}${i}"]`);if(!_)return;const{top:m,height:h}=r.getBoundingClientRect(),{top:n,height:s}=_.getBoundingClientRect();n<m?_.scrollIntoView(!0):n+s>m+h&&_.scrollIntoView(!1)})}),(i,r)=>a(e).length?(o(),c("ul",ya,[(o(!0),c(I,null,R(a(e),_=>(o(),T(La,{key:_.link||_.text,item:_},null,8,["item"]))),128))])):w("",!0)}});var Sa=S(wa,[["__file","SidebarItems.vue"]]);const Ca={class:"sidebar"},Ta=C({__name:"Sidebar",setup(l){return(t,e)=>(o(),c("aside",Ca,[L(xe),$(t.$slots,"top"),L(Sa),$(t.$slots,"bottom")]))}});var xa=S(Ta,[["__file","Sidebar.vue"]]);const Na=C({__name:"Layout",setup(l){const t=U(),e=P(),i=D(),r=p(()=>e.value.navbar!==!1&&i.value.navbar!==!1),_=ne(),m=O(!1),h=f=>{m.value=typeof f=="boolean"?f:!m.value},n={x:0,y:0},s=f=>{n.x=f.changedTouches[0].clientX,n.y=f.changedTouches[0].clientY},u=f=>{const B=f.changedTouches[0].clientX-n.x,H=f.changedTouches[0].clientY-n.y;Math.abs(B)>Math.abs(H)&&Math.abs(B)>40&&(B>0&&n.x<=80?h(!0):h(!1))},v=p(()=>[{"no-navbar":!r.value,"no-sidebar":!_.value.length,"sidebar-open":m.value},e.value.pageClass]);let d;ae(()=>{d=te().afterEach(()=>{h(!1)})}),je(()=>{d()});const b=Ke(),k=b.resolve,y=b.pending;return(f,B)=>(o(),c("div",{class:E(["theme-container",a(v)]),onTouchstart:s,onTouchend:u},[$(f.$slots,"navbar",{},()=>[a(r)?(o(),T(Jt,{key:0,onToggleSidebar:h},{before:N(()=>[$(f.$slots,"navbar-before")]),after:N(()=>[$(f.$slots,"navbar-after")]),_:3})):w("",!0)]),g("div",{class:"sidebar-mask",onClick:B[0]||(B[0]=H=>h(!1))}),$(f.$slots,"sidebar",{},()=>[L(xa,null,{top:N(()=>[$(f.$slots,"sidebar-top")]),bottom:N(()=>[$(f.$slots,"sidebar-bottom")]),_:3})]),$(f.$slots,"page",{},()=>[a(e).home?(o(),T(ht,{key:0})):(o(),T($e,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:a(k),onBeforeLeave:a(y)},{default:N(()=>[(o(),T(ga,{key:a(t).path},{top:N(()=>[$(f.$slots,"page-top")]),"content-top":N(()=>[$(f.$slots,"page-content-top")]),"content-bottom":N(()=>[$(f.$slots,"page-content-bottom")]),bottom:N(()=>[$(f.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}});var Ia=S(Na,[["__file","Layout.vue"]]);export{Ia as default};
