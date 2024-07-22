import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import ImgDog from "../../assets/images/dog-register.jpg";
import "../../styles/LoginPage.scss";

const LoginPage = () => {
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
