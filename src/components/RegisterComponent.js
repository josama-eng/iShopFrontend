import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "./Button";
import { registerUser } from "../services/user.service";
import { toast } from "react-toastify";

const ValidationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  username: Yup.string().required("Username is required"),
});

const RegisterComponent = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        username: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        registerUser(values)
          .then((response) => {
            if (response.status === 220) {
              toast.success("Successfully registered.");
              navigate("/login");
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error("User with this email address already exist.");
          });
      }}
    >
      {({ error, touched }) => {
        return (
          <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-rose text-2xl py-5">Register</h2>
            <Form className="flex flex-col gap-5 justify-center items-center w-full  md:w-custom">
              <Field
                name="email"
                className="input input-bordered w-full max-w-xs"
                placeholder="Email"
              />
              <p className="text-white">
                <ErrorMessage name="email" />
              </p>

              <Field
                name="firstName"
                className="input input-bordered w-full max-w-xs"
                placeholder="First name"
              />
              <p className="text-white">
                <ErrorMessage name="firstName" />
              </p>

              <Field
                name="lastName"
                className="input input-bordered w-full max-w-xs"
                placeholder="Last name"
              />
              <p className="text-white">
                <ErrorMessage name="lastName" />
              </p>
              <Field
                name="username"
                className="input input-bordered w-full max-w-xs"
                placeholder="Username"
              />
              <p className="text-white">
                <ErrorMessage name="username" />
              </p>

              <Field
                type="password"
                name="password"
                className="input input-bordered w-full max-w-xs"
                placeholder="Password"
              />
              <p className="text-white">
                <ErrorMessage name="password" />
              </p>

              <Button title="Register" />
              <p>
                Already have an account?
                <Link to="/login" className="text-white hover:text-rose">
                  Login
                </Link>
              </p>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default RegisterComponent;
