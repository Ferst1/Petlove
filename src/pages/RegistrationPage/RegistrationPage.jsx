import React, { useEffect, useState } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Img from "../../images/cat-homepage.jpg";
import ImgTablet from "../../images/registration-tablet.jpg";
import "../../styles/PageStyles.scss";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [imgSrc, setImgSrc] = useState(Img);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setImgSrc(Img);
      } else if (window.innerWidth <= 768) {
        setImgSrc(ImgTablet);
      } else {
        setImgSrc(Img);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  return (
    <div className="container">
      <div className="page-container">
        <img src={imgSrc} className="page-image" alt="registration-page" />
        <div className="form-wrapper">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
