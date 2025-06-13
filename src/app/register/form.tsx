"use client";

import { useUserStore } from "@/store/useUserStore";
import { useState } from "react";


export default function RegisterForm({
  title,
  terms,
}: {
  title: string;
  terms: string[];
}) {
  const { user } = useUserStore();
  const [showTerms, setShowTerms] = useState(false);

  const handleTermsandcondition = () => {
    setShowTerms(true);
  };
  return (
    <>
      <div className="mt-10 pt-8">
        <form
          className="bg-black border max-w-6xl  border-gray-400 md:mx-auto mx-4 shadow-md rounded-lg py-10 px-8 pt-6 pb-8"
          action="#"
          method="POST"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              readOnly
              value={user?.name}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="eventname"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Event You &apos; ve Chosen
            </label>
            <input
              type="text"
              id="name"
              name="name"
              readOnly
              value={title}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="number"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="phonenumber"
              id="number"
              name="number"
              placeholder="Enter your number"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="collegename"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Enter the name of the institute you&apos;re studying in.
            </label>
            <input
              id="collegename"
              name="collegename"
              placeholder="Eg. Thapathali Campus, IOE"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            ></input>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="md:text-lg text-xs text-white">
              I agree to the Terms and Conditions.{" "}
            </label>
            <span
              onClick={handleTermsandcondition}
              className="underline md:text-lg text-xs text-gray-400 cursor-pointer"
            >
              Terms and Conditions
            </span>
          </div>
          {showTerms && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-xl w-auto max-w-sm md:max-w-md">
                <h2 className="text-xl text-center font-semibold mb-4 text-gray-800">
                  Terms and Conditions
                </h2>
                {terms.map((term, index) => (
                  <p key={index} className="text-black mb-2 text-sm">
                    {" "}
                    {index+1}. {term}{" "}
                  </p>
                ))}
                <button
                  onClick={() => setShowTerms(false)}
                  className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
