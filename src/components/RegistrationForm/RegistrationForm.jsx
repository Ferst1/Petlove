import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { userSignup } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../styles/FormStyles.scss";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().min(6, "Must be at least 6 characters").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
  });

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(userSignup({ name: values.name, email: values.email, password: values.password })).finally(() => setSubmitting(false));
  };

  return (
    <div className="form_container">
      <h2>Registration</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <div>
              <label htmlFor="name">Name</label>
              <Field type="text" name="name" className="label" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" name="email" className="label" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" name="password" className="label" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <Field type="password" name="confirmPassword" className="label" />
              <ErrorMessage name="confirmPassword" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting} className="btnSignup">
              Register
            </button>
            {status === "failed" && <div>{error}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;

