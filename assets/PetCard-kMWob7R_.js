import{u as v,a as j,r as c,j as e,B as g,b as p,c as u}from"./index-CA_sneuw.js";const f="/Petlove/images/favorite.svg",N="/Petlove/images/user-profile/heard-hover.png",S="/Petlove/images/user-profile/crash.png";function P(s){const a=new Date(s),t=String(a.getDate()).padStart(2,"0"),i=String(a.getMonth()+1).padStart(2,"0"),r=a.getFullYear();return`${t}.${i}.${r}`}const y="/Petlove/images/star.png",C=({pet:s,openModal:a})=>{const t=v(),i=j(n=>n.favoritePets.pets),[r,o]=c.useState(!1),[d,l]=c.useState(!1);c.useEffect(()=>{l(i.some(n=>n._id===s._id))},[i,s._id]);const h=()=>{t(d?p(s):u(s))},m=()=>{o(!0)},x=()=>{o(!1)};return e.jsxs("div",{className:"pets_item aos-animate",children:[e.jsx("img",{src:s.imgURL,alt:s.title}),e.jsxs("div",{className:"name-rating",children:[e.jsx("h3",{children:s.title}),e.jsxs("div",{className:"rating",children:[e.jsx("img",{src:y}),e.jsx("p",{children:s.popularity})]})]}),e.jsxs("div",{className:"pets-data",children:[e.jsxs("div",{className:"data-item",children:[e.jsx("p",{children:"Name"}),e.jsx("p",{children:s.name})]}),e.jsxs("div",{className:"data-item",children:[e.jsx("p",{children:"Birthday"}),e.jsx("p",{children:P(s.birthday)})]}),e.jsxs("div",{className:"data-item",children:[e.jsx("p",{children:"Sex"}),e.jsx("p",{children:s.sex})]}),e.jsxs("div",{className:"data-item",children:[e.jsx("p",{children:"Species"}),e.jsx("p",{children:s.species})]}),e.jsxs("div",{className:"data-item",children:[e.jsx("p",{children:"Category"}),e.jsx("p",{children:s.category})]})]}),e.jsx("div",{children:e.jsx("p",{children:s.comment})}),e.jsxs("div",{className:"favorite_button",children:[e.jsx(g,{text:"Learn more",color:"primary",onClick:()=>a(s)}),e.jsx("img",{className:"favorit",src:d?S:r?N:f,alt:"favorit",onClick:h,onMouseEnter:m,onMouseLeave:x,style:{width:"48px",height:"48px"}})]})]})};export{C as P,y as S};