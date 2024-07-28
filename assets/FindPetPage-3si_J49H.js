import{u as b,a as v,j as e,r as X,b as Y,c as q,A as ee,d as se,e as te,s as A,f as F,g as I,h as $,i as E,k as ae,l as L,m as ne}from"./index-CyJJAnCa.js";import{r as f}from"./react-vendor-BZdliVqA.js";import{P as oe}from"./PetCard-DjjBdgYK.js";import{I as M}from"./index-B9iVpkjT.js";import{A as T,m as B}from"./Modal-_oeL_hbZ.js";import{B as N}from"./Button-CtaD2ed5.js";import{S as G,R,T as le}from"./TypeSelect-BVrf-25S.js";import{I as z,P as ce}from"./Pagination-D8qv1S96.js";import"./hoist-non-react-statics.cjs-2Q9SGLSQ.js";const S="/images/star.png",_="/images/star-transparent.png",ie="/images/heard-white.png",K=({children:u,isOpen:c,onClose:i,pet:n})=>{const s=b(),p=v(r=>r.favoritePets.pets),x=n?p.some(r=>r._id===n._id):!1,o={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.5,ease:"easeInOut"}},exit:{opacity:0,scale:.8,transition:{duration:.3,ease:"easeInOut"}}},l=r=>{r.key==="Escape"&&i()},a=r=>{r.target===r.currentTarget&&i()},t=()=>{s(x?X(n):Y(n))};return f.useLayoutEffect(()=>(document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}),[]),f.useLayoutEffect(()=>{c?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[c]),e.jsx(T,{children:c&&n&&e.jsx("div",{className:"backdrop",onClick:a,children:e.jsx(B.div,{className:"modal-window",initial:"hidden",animate:"visible",exit:"exit",variants:o,children:e.jsx("div",{className:"modal-content",children:e.jsxs("div",{className:"pet-info",children:[e.jsx("button",{className:"close-btn",onClick:i,children:e.jsx(M,{size:"24px"})}),e.jsx("img",{src:n.imgURL,alt:n.title}),e.jsx("p",{className:"category_modal",children:n.category}),e.jsx("h2",{children:n.title}),e.jsxs("div",{className:"name-rating",children:[e.jsx("img",{className:"star",src:S}),e.jsx("img",{className:"star",src:S}),e.jsx("img",{className:"star",src:S}),e.jsx("img",{className:"star",src:_}),e.jsx("img",{className:"star",src:_}),e.jsx("p",{children:n.popularity})]}),e.jsxs("div",{className:"info_item",children:[e.jsxs("p",{children:[e.jsx("div",{className:"label",children:"Name:"})," ",n.name]}),e.jsxs("p",{children:[e.jsx("div",{className:"label",children:"Birthday:"})," ",n.birthday]}),e.jsxs("p",{children:[e.jsx("div",{className:"label",children:"Sex:"})," ",n.sex]}),e.jsxs("p",{children:[e.jsx("div",{className:"label",children:"Species:"})," ",n.species]})]}),e.jsx("p",{className:"comment",children:n.comment}),e.jsxs("div",{className:"buttons_modal",children:[e.jsx(N,{text:x?"Remove from favorites":"Add to favorites",className:"primary",onClick:t,children:e.jsx("img",{src:ie,alt:"Heart",className:"button-icon"})}),e.jsx(N,{text:"Contact",className:"primary"})]})]})})})})})},re="/assets/avatar-dog-BZf1xWKu.png",O=({isOpen:u,onClose:c})=>{q();const i=s=>{s.key==="Escape"&&c()},n=s=>{s.target===s.currentTarget&&c()};return f.useLayoutEffect(()=>(document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}),[]),f.useLayoutEffect(()=>{u?document.body.style.overflow="hidden":document.body.style.overflow="unset"},[u]),e.jsx(T,{children:u&&e.jsx("div",{className:"backdrop",onClick:n,children:e.jsx(B.div,{"data-aos":"fade-up","data-aos-delay":"100",className:"modal-window",children:e.jsxs("div",{className:"modal-content",children:[e.jsx("button",{className:"close-btn",onClick:c,children:e.jsx(M,{size:"24px"})}),e.jsx("img",{src:re,alt:"avatar pet"}),e.jsx("h3",{children:"Attention"}),e.jsx("p",{children:"We would like to remind you that certain functionality is available only to authorized users. If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features."}),e.jsx("div",{className:"buttons_modal",children:e.jsx(ee,{})})]})})})})},de=({pets:u,loading:c})=>{const[i,n]=f.useState(null),[s,p]=f.useState(!1),x=b(),{user:o}=v(t=>t.user),l=t=>{o?(n(t),x(se(t))):p(!0)},a=()=>{n(null),p(!1)};return e.jsxs("div",{className:"find_pets_card_wrapper",children:[e.jsx("div",{className:"find_pets_card",children:c?e.jsx("p",{children:"Loading..."}):u.map(t=>e.jsx(oe,{pet:t,openModal:l},t._id))}),i&&e.jsxs(K,{isOpen:i!==null,onClose:a,pet:i,children:[e.jsx("h2",{children:i.title}),e.jsx("button",{onClick:a,children:"Close Modal"})]}),e.jsx(O,{isOpen:s,onClose:a})]})},ue=["found","free","lost","sell"],he=({onChange:u})=>{const[c,i]=f.useState(null),n=s=>{i(s),u(s?s.value:"")};return e.jsx(G,{value:c,onChange:n,options:ue.map(s=>({value:s,label:s})),isSearchable:!0,placeholder:"Category",isClearable:!0,styles:R})},me=["female","male","multiple","unknown"],pe=({onChange:u})=>{const[c,i]=f.useState(null),n=s=>{i(s),u(s?s.value:"")};return e.jsx(G,{value:c,onChange:n,options:me.map(s=>({value:s,label:s})),isSearchable:!0,placeholder:"By gender",isClearable:!0,styles:R})},xe=({onChange:u})=>{const[c,i]=f.useState([]),[n,s]=f.useState([]);f.useEffect(()=>{(async()=>{try{const t=(await te.get("/api/locations")).data.map(r=>({value:`${r.stateEn} ${r.cityEn} ${r.countyEn}`,label:`${r.stateEn}, ${r.cityEn} (${r.countyEn})`}));i(t),s(t)}catch(a){console.error("Error fetching locations:",a)}})()},[]);const p=l=>{const a=c.filter(t=>t.label.toLowerCase().includes(l.toLowerCase()));s(a),u(l)},x=()=>{s(c),u("")},o=l=>{s([]),u(l.value)};return e.jsxs("div",{children:[e.jsx(z,{onSearch:p,onClear:x}),n.length>0&&e.jsx("ul",{className:"dropdown-menu",children:n.map((l,a)=>e.jsx("li",{onClick:()=>o(l),className:"dropdown-item",children:l.label},a))})]})},fe=({categories:u,genders:c,types:i,locations:n,onSearch:s,onClear:p,onCategoryChange:x,onGenderChange:o,onTypeChange:l,onLocationChange:a})=>{const[t,r]=f.useState(""),h=b(),g=m=>{h(A(m)),x(m)},C=m=>{h(F(m)),o(m)},y=m=>{h(I(m)),l(m)},w=m=>{h($(m)),a(m)},j=m=>{t===m?(r(""),h(E(""))):(r(m),h(E(m)))};return e.jsxs("div",{className:"search_wrapper",children:[e.jsx(z,{onSearch:s,onClear:p}),e.jsxs("div",{className:"search_field_form",children:[e.jsx(he,{onChange:g,categories:u,className:"custom-dropdown"}),e.jsx(pe,{onChange:C,genders:c,className:"custom-dropdown"}),e.jsx(le,{placeholder:"Type of",onChange:y,types:i,className:"custom-dropdown"}),e.jsx(xe,{onChange:w,locations:n,className:"custom-dropdown"})]}),e.jsxs("div",{className:"radio_button",children:[e.jsx(N,{text:"Popular",color:"white",isActive:t==="popularity",onClick:()=>j("popularity"),isClearable:t==="popularity",onClear:()=>j("popularity")}),e.jsx(N,{text:"Unpopular",color:"white",isActive:t==="unpopularity",onClick:()=>j("unpopularity"),isClearable:t==="unpopularity",onClear:()=>j("unpopularity")}),e.jsx(N,{text:"Cheap",color:"white",isActive:t==="cheap",onClick:()=>j("cheap"),isClearable:t==="cheap",onClear:()=>j("cheap")}),e.jsx(N,{text:"Expensive",color:"white",isActive:t==="expensive",onClick:()=>j("expensive"),isClearable:t==="expensive",onClear:()=>j("expensive")})]})]})},ye=(u,c,i,n,s,p,x)=>{let o=u;const l=c.toLowerCase();return c&&(o=o.filter(a=>{const{species:t,title:r,name:h,comment:g,sex:C,location:y}=a,w=`${(y==null?void 0:y.stateEn)||""} ${(y==null?void 0:y.cityEn)||""}`.toLowerCase();return t&&t.toLowerCase().includes(l)||r&&r.toLowerCase().includes(l)||h&&h.toLowerCase().includes(l)||g&&g.toLowerCase().includes(l)||C&&C.toLowerCase().includes(l)||w.includes(l)})),i&&(o=o.filter(a=>a.category===i)),n&&(o=o.filter(a=>a.sex===n)),s&&(o=o.filter(a=>a.species===s)),p&&(o=o.filter(a=>`${a.location.stateEn} ${a.location.cityEn}`.toLowerCase().includes(p.toLowerCase()))),x==="popularity"?o=o.slice().sort((a,t)=>t.popularity-a.popularity):x==="unpopularity"?o=o.slice().sort((a,t)=>a.popularity-t.popularity):x==="cheap"?o=o.slice().sort((a,t)=>a.price-t.price):x==="expensive"&&(o=o.slice().sort((a,t)=>t.price-a.price)),o},je=["found","free","lost","sell"],ge=["female","male","multiple","unknown"],Ce=["dog","cat","monkey","bird","snake","turtle","lizard","frog","fish","ants","bees","butterfly","spider","scorpion"],_e=()=>{const{locations:u}=v(d=>d.data),{pets:c,totalItems:i,loading:n,query:s,currentPage:p}=v(d=>d.search),{category:x,gender:o,type:l,location:a}=v(d=>d.filters),{sortBy:t}=v(d=>d.sort),{user:r}=v(d=>d.user),h=b(),g=6,[C,y]=f.useState(!1),[w,j]=f.useState(null);f.useEffect(()=>{h(ae({query:s}))},[h,s]);const m=d=>{h(L(d))},Q=()=>{h(L(""))},H=d=>{h(ne(d))},U=d=>{h(A(d))},V=d=>{h(F(d))},W=d=>{h(I(d))},D=d=>{h($(d))},Z=d=>{j(d),y(!0)},k=()=>{y(!1),j(null)},P=ye(c,s,x,o,l,a,t),J=P.slice((p-1)*g,p*g);return e.jsxs("div",{className:"container",children:[e.jsxs("section",{className:"find_yor_pets",children:[e.jsx("h2",{children:"Find your favorite pet"}),e.jsx("div",{className:"find_pets_container",children:e.jsx(fe,{categories:je,genders:ge,types:Ce,locations:u,onSearch:m,onClear:Q,onCategoryChange:U,onGenderChange:V,onTypeChange:W,onLocationChange:D})}),e.jsx("div",{className:"pets_section",children:e.jsx(de,{pets:J,loading:n,onPetClick:Z})}),e.jsx(ce,{totalItems:P.length,itemsPerPage:g,onPageChange:H,currentPage:p})]}),r?e.jsx(K,{isOpen:C,onClose:k,pet:w}):e.jsx(O,{isOpen:C,onClose:k})]})};export{_e as default};