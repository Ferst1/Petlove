import React from "react";
import {  NavLink, useLocation } from "react-router-dom";

import "../../styles/Navbar.scss";

const Navbar = ({ isOpen }) => {


  const location = useLocation();
  return (
    <div className="navbar">
      <div className="center">
       
        <nav className={isOpen ? 'active' : ''}>
          <ul className="nav-links">
            <li className="special-li">
              <NavLink
               className={location.pathname === '/home' ? 'active' : ''}
              to="/home"></NavLink>
            </li>
            <li>
              <NavLink 
               className={location.pathname === '/news' ? 'active' : ''}
              to="/news">News</NavLink>
            </li>
            <li>
              <NavLink
               className={location.pathname === '/find_pet' ? 'active' : ''}
              to="/find_pet">Find pet</NavLink>
            </li>
            <li>
              <NavLink
               className={location.pathname === '/our_friends' ? 'active' : ''}
              to="/our_friends">Our friends</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

