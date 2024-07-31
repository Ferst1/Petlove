
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signup } from "../../redux/slices/userSlice";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import Check from '../../images/svg/check.svg';
import xRed from '../../images/svg/x-red.svg';
import eye from '../../images/svg/eye.svg';
import eyeOff from '../../images/svg/eye-off.svg';
import "../../styles/FormStyles.scss";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Enter a valid Email").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(signup(values)).finally(() => setSubmitting(false));
  };

  return (
    <div className="form_container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, touched, errors, values, setFieldValue }) => (
          <Form className="form">
            <div>
              <Field
                id="name"
                type="text"
                name="name"
                className={`${touched.name && errors.name ? 'invalid' : touched.name ? 'valid' : ''}`}
                autoComplete="name"
                placeholder="Name"
              />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
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
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="password-container">
              <Field
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                className={`${touched.password && errors.password ? 'invalid' : touched.password ? 'valid' : ''}`}
                autoComplete="new-password"
                placeholder="Password"
              />
              <img
                src={showPassword ? eye : eyeOff}
                alt="Toggle visibility"
                className="toggle-password-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
              {values.password && !errors.password && (
                <img src={Check} alt="Check" className="check-icon" />
              )}
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <div className="password-container">
              <Field
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className={`${touched.confirmPassword && errors.confirmPassword ? 'invalid' : touched.confirmPassword ? 'valid' : ''}`}
                autoComplete="new-password"
                placeholder="Confirm password"
              />
              <img
                src={showConfirmPassword ? eye : eyeOff}
                alt="Toggle visibility"
                className="toggle-password-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
              {values.confirmPassword && !errors.confirmPassword && values.confirmPassword === values.password && (
                <img src={Check} alt="Check" className="check-icon" />
              )}
              <ErrorMessage name="confirmPassword" component="div" className="error-message" />
            </div>
            {values.password && !errors.password && values.confirmPassword === values.password && (
              <div className="password-secure">Password is secure</div>
            )}
            <button type="submit" disabled={isSubmitting} className="btnSignup">
              Sign Up
            </button>
            {status === "failed" && <div>{error}</div>}
            <p className="auth-text">Already have an account? <Link to="/login" className="auth-link">Login</Link></p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
