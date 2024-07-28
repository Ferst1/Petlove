
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../../styles/Navbar.scss";

const Navbar = ({ isOpen }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="navbar">
      <div className="center">
        <nav className={isOpen ? 'active' : ''}>
          <ul className={`nav-links ${isHomePage ? 'home-nav' : ''}`}>
            <li className={`special-li ${isHomePage ? 'home-link' : ''}`}>
              <NavLink
                className={location.pathname === '/' ? 'active' : ''}
                to="/">Home</NavLink>
            </li>
            <li className={isHomePage ? 'home-link' : ''}>
              <NavLink
                className={location.pathname === '/news' ? 'active' : ''}
                to="/news">News</NavLink>
            </li>
            <li className={isHomePage ? 'home-link' : ''}>
              <NavLink
                className={location.pathname === '/find_pet' ? 'active' : ''}
                to="/find_pet">Find pet</NavLink>
            </li>
            <li className={isHomePage ? 'home-link' : ''}>
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
