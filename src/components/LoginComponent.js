import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "./Button";
import { toast } from "react-toastify";
import { logUser } from "../services/user.service";
import { useDispatch } from "react-redux";
import { saveUser } from "../redux/user.slicer";
import { setToken } from "../redux/user.slicer";

const ValidationSchema = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Please enter your password.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {
        console.log(values);
        logUser(values)
          .then((response) => {
            console.log(response);
            if (response.status === 217) {
              toast.success("Successfully loged.");
              dispatch(saveUser(response.data.user));
              dispatch(setToken(response.data.token));
              navigate("/");
            } else if (response.status === 215) {
              toast.error(
                "Warning: Only registered users can log in. Please register to access your account."
              );
              navigate("/register");
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error("Wrong email or password");
          });
      }}
    >
      {({ error, touched }) => {
        return (
          <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-rose text-2xl py-5">Login</h2>
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
                Don't have an account?
                <Link to="/register" className="text-white hover:text-rose">
                  Register
                </Link>
              </p>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default LoginComponent;
