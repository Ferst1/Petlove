import{a as r,j as e}from"./index-5zAZmief.js";import{P as a}from"./PetCard-Ba8ui7QY.js";import"./Button-DYuQyPuX.js";const n=()=>{const t=r(s=>s.favoritePets);return!t||t.length===0?e.jsx("div",{className:"favorite-pets-page",children:e.jsx("h2",{children:"No favorite pets available"})}):e.jsxs("div",{className:"favorite-pets-page",children:[e.jsx("h2",{children:"Favorite Pets"}),e.jsx("ul",{children:t.map(s=>e.jsx("li",{children:e.jsx(a,{pet:s})},s._id))})]})};export{n as default};
