import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { login } from "../../redux/slices/userSlice"; // Используем login
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../styles/FormStyles.scss";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.user);

  React.useEffect(() => {
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
    <div className="form_container">
      <h2>Log In</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div>
              <label htmlFor="email">Email</label>
              <Field id="email" type="email" name="email" className="label" autoComplete="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field id="password" type="password" name="password" className="label" autoComplete="current-password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting} className="btnSignup">
              Log In
            </button>
            {status === "failed" && <div>{error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
