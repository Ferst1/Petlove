import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "../../styles/Header.scss";
import Logo from "/images/logohome.svg";
import LogoToo from "/images/logo.svg";
import BurgerMenuImg from "/images/burger_menu.svg";
import { AuthNav } from "../AuthNav/AuthNav";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = ({ isHomePage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={isHomePage ? "header homePageHeader" : "header"}>
      <div className="center">
        <div className="logo">
          {isHomePage ? (
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          ) : (
            <Link to="/">
              <img src={LogoToo} alt="logo" />
            </Link>
          )}
        </div>
        <Navbar />
        <AuthNav />
      </div>

      <img
        className="burger-menu"
        src={BurgerMenuImg}
        alt="burger-menu"
        onClick={handleToggleMenu}
      />

      <MobileMenu isMenuOpen={isMenuOpen} handleToggleMenu={handleToggleMenu} />
    </header>
  );
};

export default Header;
