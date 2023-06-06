import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";
// import { translateAi } from "../services/translate.service";

const ValidationSchema = Yup.object({
  text: Yup.string().required("Text is required"),
  targetLanguage: Yup.string().required("Target language is required"),
  sourceLanguage: Yup.string().required("Source language is required"),
});

const TranslateComponent = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // translateAi(values)
    //   .then((results) => {
    //     console.log(results);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <Formik
      initialValues={{
        text: "",
        sourceLanguage: "",
        targetLanguage: "",
      }}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ error, touched }) => {
        return (
          <div className="container">
            <h2 className="font-sans text-2xl text-red-500">Hello</h2>
            <Form>
              <button type="submit" className="btn btn-accent">
                Translate
              </button>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default TranslateComponent;
