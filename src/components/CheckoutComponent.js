import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { restoreCart } from "../redux/cart.slicer";
import { useNavigate } from "react-router-dom";
import { saveOrder } from "../services/order.service";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email().required("Email is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zipCode: Yup.number().required("Zip code is required"),
  phoneNumber: Yup.number().required("Phone number is required"),
});

const CheckoutComponent = () => {
  const cart = useSelector((store) => store.cart.cart);
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartTotal = useSelector((store) => store.cart.totalPrice);

  return (
    <div>
      {cart.length ? (
        <Formik
          initialValues={{
            firstName: user.firstName || "",
            lastName: user.lastName || "",
            email: user.email || "",
            address: "",
            city: "",
            zipCode: "",
            phoneNumber: "",
            price: cartTotal,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            saveOrder(values)
              .then((response) => {
                if (response.status === 220) {
                  dispatch(restoreCart());
                  navigate("/");
                  toast.success("You have successfully placed your order.");
                } else {
                  toast.error("Something went wrong,please try again later.");
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {({ error, touched }) => {
            return (
              <div className="w-full min-h-screen flex flex-col justify-center items-center">
                <Form className="flex flex-col gap-5 justify-center items-center w-full  md:w-custom">
                  <Field
                    name="firstName"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <p className="text-white">
                    <ErrorMessage name="firstName" />
                  </p>
                  <Field
                    name="lastName"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <p className="text-white">
                    <ErrorMessage name="lastName" />
                  </p>
                  <Field
                    name="email"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <p className="text-white">
                    <ErrorMessage name="email" />
                  </p>
                  <Field
                    name="address"
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Address"
                  />
                  <p className="text-white">
                    <ErrorMessage name="address" />
                  </p>
                  <Field
                    name="city"
                    className="input input-bordered w-full max-w-xs"
                    placeholder="City"
                  />
                  <p className="text-white">
                    <ErrorMessage name="city" />
                  </p>
                  <Field
                    name="zipCode"
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Zip Code"
                  />
                  <p className="text-white">
                    <ErrorMessage name="zipCode" />
                  </p>
                  <Field
                    name="phoneNumber"
                    className="input input-bordered w-full max-w-xs"
                    placeholder="Phone Number"
                  />
                  <p className="text-white">
                    <ErrorMessage
                      name="phoneNumber"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </p>
                  <Field
                    name="price"
                    className="input input-bordered w-full max-w-xs"
                    disabled={true}
                  />
                  <button className="btn glass text-white">Order</button>
                </Form>
                <p className="text-white pt-5">
                  Note: At this moment, the only available payment option is
                  cash on delivery.
                </p>
              </div>
            );
          }}
        </Formik>
      ) : (
        <h2>Nothing to pay.Please add products to cart.</h2>
      )}
    </div>
  );
};

export default CheckoutComponent;
