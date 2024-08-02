
import { NavLink, useLocation } from 'react-router-dom';
import '../../styles/MobileMenu.scss';
import X from '../../images/svg/x.svg';
import XWhite from '../../images/svg/x-white.svg';
import '../../styles/ButtonAuth.scss';

import ButtonAuth from '../UI/Button/ButtonAuth';

const MobileMenu = ({ isMenuOpen, handleToggleMenu }) => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/login' || location.pathname === '/registration';

  return (
    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''} ${isAuthPage ? 'auth-page' : ''}`}>
      <img 
        src={isAuthPage ? XWhite : X} 
        className="x-menu" 
        alt="x-menu" 
        onClick={handleToggleMenu} 
      />
      <div className="menu-links">
        <NavLink to="/news" onClick={handleToggleMenu} activeClassName="active">
          News
        </NavLink>
        <NavLink to="/find_pet" onClick={handleToggleMenu} activeClassName="active">
          Find pet
        </NavLink>
        <NavLink to="/our_friends" onClick={handleToggleMenu} activeClassName="active">
          Our friends
        </NavLink>
      </div>
      <div className="auth-bar">
        <ButtonAuth text="Log In" to="/login" className="login" onClick={handleToggleMenu} />
        <ButtonAuth text="Registration" to="/registration" className="registration" onClick={handleToggleMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
