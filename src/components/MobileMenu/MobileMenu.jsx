
import { NavLink } from 'react-router-dom';
import '../../styles/MobileMenu.scss';
import X from '/images/x.svg';

const MobileMenu = ({ isMenuOpen, handleToggleMenu }) => {
  return (
    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
      <img src={X} 
      className="x-menu" alt="x-menu" onClick={handleToggleMenu}/>
      <NavLink to="/news" onClick={handleToggleMenu}>
        News
      </NavLink>
      <NavLink to="/find_pet" onClick={handleToggleMenu}>
        Find pet
      </NavLink>
      <NavLink to="/our_friends" onClick={handleToggleMenu}>
        Our friends
      </NavLink>
    </div>
  );
};

export default MobileMenu;

