import{a,j as e}from"./index-CEIl8UTr.js";import{P as r}from"./PetCard-CVA8IIqO.js";const l=()=>{const t=a(s=>s.favoritePets);return!t||t.length===0?e.jsx("div",{className:"favorite-pets-page",children:e.jsx("h2",{children:"No favorite pets available"})}):e.jsxs("div",{className:"favorite-pets-page",children:[e.jsx("h2",{children:"Favorite Pets"}),e.jsx("ul",{children:t.map(s=>e.jsx("li",{children:e.jsx(r,{pet:s})},s._id))})]})};export{l as default};
