import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from "../../components/LoginForm/LoginForm";
import ImgDog from "../../images/dog-register.jpg";
import "../../styles/LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user) {
      navigate('/profile');
    }
  }, [user, navigate]);

  return (
    <div className="login-page">
      <div className="login-img-page">
        <img className="login-img-page" src={ImgDog} alt="register-page" />
      </div>
      <div className="login-form-page">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
