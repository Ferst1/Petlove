import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from "../../components/LoginForm/LoginForm";
import ImgDog from "../../images/dog-register.jpg";
import ImgDogTablet from "../../images/login-tablet.png";
import "../../styles/LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [imgSrc, setImgSrc] = useState(ImgDog);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImgSrc(ImgDogTablet);
      } else {
        setImgSrc(ImgDog);
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
      <div className="login-page">
        <div className="login-img-page">
          <img className="login-img" src={imgSrc} alt="register-page" />
        </div>
        <div className="login-form-page">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
