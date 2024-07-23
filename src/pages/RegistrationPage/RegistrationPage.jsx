import React from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import img from "/images/cat-homepage.jpg";
import "../../styles/RegistrationPage.scss";

const RegistrationPage = () => {
  return (
    <div className="section_registration">
      <section>
        <div className="section_cat">
          <img src={img} className="img_registration" alt="registration_page" />
          <div className="section_form">
            <RegistrationForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
