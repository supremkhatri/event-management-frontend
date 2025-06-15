"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is Required")
    .matches(/^[a-zA-Z ]+$/, "Name must be alphabet characters only"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email field is required"),
  message: Yup.string().max(
    100,
    "The message field cannot be longer than 100 characters"
  ).required("Message is Required"),
});

interface contactus {
  name: string;
  email: string;
  message: string;
}

const Contactus: React.FC = () => {
  const handleSubmit = (values: contactus) => {
    console.log("Form Data Submitted:", values);
  };

  return (
    <div
      id="contact"
      className="bg-white dark:bg-black mt-10 py-12 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center dark:text-gray-400 mb-8">
          Have questions or want to collaborate with us? Fill out the form below
          or reach out directly!
        </p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-5">
              {/* Name field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Email field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* Message field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* submit button */}
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-white text-black font-semibold rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-colors border border-transparent"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contactus;
