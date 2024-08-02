
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../../redux/slices/userSlice"; 
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../styles/FormStyles.scss";
import Check from '../../images/svg/check.svg';
import xRed from '../../images/svg/x-red.svg';
import eye from '../../images/svg/eye.svg';
import eyeOff from '../../images/svg/eye-off.svg';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(login(values)).finally(() => setSubmitting(false));
  };

  return (
    < div className="form_container">
      <div className="auth-title">
      <h2>Log In</h2>
      <p>Welcome! Please enter your credentials to login to the platform</p>
      </div>
    
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, values, setFieldValue }) => (
          <Form className="form">
            <div className="email-container">
              <Field
                id="email"
                type="email"
                name="email"
                className={`${touched.email && errors.email ? 'invalid' : touched.email ? 'valid' : ''}`}
                autoComplete="email"
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <img src={xRed} alt="Clear" className="clear-icon" onClick={() => setFieldValue('email', '')} />
              )}
              {touched.email && !errors.email && values.email && (
                <img src={Check} alt="Check" className="check-icon" />
              )}
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="password-container">
              <Field
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                className={`${touched.password && errors.password ? 'invalid' : touched.password ? 'valid' : ''}`}
                autoComplete="current-password"
                placeholder="Password"
              />
              <img
                src={showPassword ? eye : eyeOff}
                alt="Toggle visibility"
                className="toggle-password-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
              {touched.password && !errors.password && values.password && (
                <img src={Check} alt="Check" className="check-icon" />
              )}
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button type="submit" disabled={isSubmitting} className="btnSignup">
              Log In
            </button>
            {status === "failed" && <div>{error}</div>}
            <p className="auth-text">Don't have an account? <Link to="/registration" className="auth-link">Registration</Link></p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
