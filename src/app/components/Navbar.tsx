"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import path from "path";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // code to authenticate user
  let logedIn = true;

  let router = useRouter();

  const pathname = usePathname();

  const navigateHandler = (routerName: string): void => {
    router.push(routerName);
  };


  const isLandingPage = pathname === "/";

  const Navbarclass = isLandingPage
    ? "backdrop-blur-lg mt-2  bg-transparent fixed top-0 w-full z-50"
    : "bg-black top-0 w-full z-50";

  return (
    <nav
      className={`rounded-3xl w-full top-0 z-50 text-white p-2 border border-emerald-100/10 ${Navbarclass}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className=" ml-4 text-xl font-bold" onClick={()=> navigateHandler("/")}>EM</div>

        {/* Search Bar (Visible in all views, adjusted for large screens) */}
        <div className="flex items-center flex-grow mx-4 lg:max-w-md">
        <input
  type="text"
  placeholder="Search Events"
  className="p-2 rounded-full border border-white text-sm text-white w-full outline-none bg-neutral-500/10 border-transparent focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-300"
  style={{ padding: "10px" }}
/>
<button className="mx-4 border border-white p-3 bg-transparent rounded-xl text-sm text-white hover:bg-gray-700 hover:border-transparent focus:ring-2 focus:ring-yellow-500 transition duration-300">
  Search
</button>

        </div>

        {/* Links and Buttons (Hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-7 mr-6">
          <Link href="events" className="hover:text-gray-300">
            Events
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Class
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Contact
          </Link>
          <button
            onClick={() => navigateHandler("/signup")}
            className="bg-white text-black border border-black px-4 py-2 rounded-md transition-transform transform hover:bg-black hover:text-white hover:border-white hover:scale-105"
          >
            Signup
          </button>
          <button
            onClick={() => navigateHandler("/login")}
            className="bg-transparent text-white border border-white px-4 py-2 rounded-md transition-transform transform hover:bg-white hover:text-black hover:scale-105"
          >
            Login
          </button>
          {logedIn ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="	https://avatars.githubusercontent.com/u/128308240?v=4"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content border border-emerald-900 bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <button className="bg-blue-900  text-sm px-4 py-2 rounded-full hover:bg-blue-800">
                Log In
              </button>
              <button className="bg-green-900 text-sm px-4 py-2 rounded-full hover:bg-green-800">
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
          {logedIn ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-8 mx-2 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="	https://avatars.githubusercontent.com/u/128308240?v=4"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content border border-emerald-900 bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">Profile</a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="events"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Events
            </a>
            <a
              href="#"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Class
            </a>
            <a
              href="#"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              Contact
            </a>
          </div>

          {logedIn ? (
            <></>
          ) : (
            <>
              <div className="px-5 pt-4 pb-3 flex justify-between space-x-4">
                <button className="w-full rounded-full bg-blue-900 px-4 py-2 hover:bg-blue-800">
                  Log In
                </button>
                <button className="w-full bg-green-900 px-4 py-2 rounded-full hover:bg-green-800">
                  Sign Up
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
