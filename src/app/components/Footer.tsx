"use client";
import React from "react";
import Link from "next/link";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";


const Footer = () => {
  return (
    <footer className="bg-gray-800/10 text-white py-8 px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-400">
            We provide a platform to create, manage, and register for events
            with ease. Discover and share exciting experiences today.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-gray-300">
                {" "}
                Events{" "}
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-gray-300">
                {" "}
                Class{" "}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p className="text-gray-400">Maitighar, Kathmandu, Nepal</p>
          <p className="text-gray-400">Email: info@eventapp.com</p>
          <p className="text-gray-400">Phone: +977-</p>
        </div>

        {/* Social Media Links */}
        <div className="col-span-1">
          <h3 className="font-bold text-lg mb-4 mx-2">Follow Us</h3>
          <div className="flex flex-row ">
            <a href="#" className="text-gray-400 mr-2 hover:text-gray-200">
              <IconBrandFacebook />
            </a>
            <a href="#" className="text-gray-400 mr-2 hover:text-gray-200">
              <IconBrandTwitter />
            </a>
            <a href="#" className="text-gray-400 mr-2 hover:text-gray-200">
              <IconBrandInstagram />
            </a>
            <a href="#" className="text-gray-400 mr-2 hover:text-gray-200">
              <IconBrandLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-12 text-center">
        <h3 className="font-bold text-2xl md:text-3xl mb-4 text-white">Stay Updated</h3>
        <p className="text-gray-400 mb-6 text-lg md:text-xl">
          Subscribe to our newsletter for the latest updates.
        </p>
        <form className="flex justify-center items-center gap-4 md:gap-6 w-full max-w-md mx-auto">
          <input
            type="email"
            className="p-3 rounded-full border border-transparent text-sm text-white w-full outline-none bg-neutral-800/40 focus:bg-neutral-700 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="p-3 rounded-full border text-sm text-white w-full sm:w-auto bg-primary-500 focus:outline-2 focus:outline-yellow-500 hover:bg-primary-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>&copy; 2024 Event Management App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
