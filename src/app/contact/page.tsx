import React from "react";
export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-black py-12 px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Have questions or want to collaborate with us? Fill out the form below
          or reach out directly!
        </p>
        <form
          className="bg-black border border-gray-700 shadow-md rounded-lg px-8 pt-6 pb-8"
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
              required
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
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-950 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300"
          >
            Send Message
          </button>
        </form>
        <p className="mt-8 text-sm text-gray-600 dark:text-gray-400">
          Or email us directly at{" "}
          <a
            href="mailto:contact@eventmanagement.com"
            className="text-blue-500 hover:underline"
          >
            contact@eventmanagement.com
          </a>
        </p>
      </div>
    </section>
  );
}
