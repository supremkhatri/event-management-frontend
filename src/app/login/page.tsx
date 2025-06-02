"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";


const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
});

interface LoginFormValues {
  email: string;
  password: string;
}

// Login component
const Login: React.FC = () => {
  // Handle form submission
  const handleSubmit = (values: LoginFormValues) => {
    console.log("Form Data Submitted:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="bg-gray-800/30 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-500/40 transition duration-300 hover:shadow-orange-400/40 hover:border-orange-400">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">Login</h1>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="space-y-5">
              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Password field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-1">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border border-gray-500 rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-white text-black font-semibold rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-colors border border-transparent"
              >
                Login
              </button>
            </Form>
          )}
        </Formik>

        {/* Link to Signup */}
        <p className="text-gray-400 mt-4 text-center">
          Don't have an account?
          <Link href="/signup" className="text-orange-400 ml-3 hover:text-orange-300">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
