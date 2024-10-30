"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  collegeName: Yup.string().required("College name is required"),
  faculty: Yup.string().required("Faculty is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Phone number must be digits")
    .min(10, "Phone number must be at least 10 digits"),
});

// Signup component
const Signup: React.FC = () => {
  // Handle form submission
  const handleSubmit = (values: any) => {
    console.log("Form Data Submitted:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="bg-gray-800/30 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-500/40 transition duration-300 hover:shadow-orange-400/40 hover:border-orange-400">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Signup
        </h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            collegeName: "",
            faculty: "",
            phoneNumber: "",
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

              {/* College Name field */}
              <div>
                <label
                  htmlFor="collegeName"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  College Name
                </label>
                <Field
                  type="text"
                  name="collegeName"
                  className="w-full px-4 py-2 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage
                  name="collegeName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Faculty field as a dropdown */}
              <div>
                <label
                  htmlFor="faculty"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Faculty
                </label>
                <Field
                  as="select"
                  name="faculty"
                  className="w-full px-4 py-2 border border-gray-500 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="" className="bg-white text-black">
                    Select Faculty
                  </option>
                  <option value="Electronics Engineering">
                    Electronics Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Computer Engineering">
                    Computer Engineering
                  </option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>

                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Architecture">Architecture</option>
                  <option value="Other">Other</option>
                </Field>
                <ErrorMessage
                  name="faculty"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Phone Number field */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-200 mb-1"
                >
                  Phone Number
                </label>
                <Field
                  type="tel"
                  name="phoneNumber"
                  className="w-full px-4 py-2 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-white text-black font-semibold rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-colors border border-transparent"
              >
                Signup
              </button>
            </Form>
          )}
        </Formik>

        {/* Link to Login */}
        <p className="text-gray-400 mt-4 text-center">
          Already have an account?
          <Link
            href="/login"
            className="text-orange-400 ml-3 hover:text-orange-300"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
