"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { EVENTS } from "@/lib/event_data";
import { useUserStore } from "@/store/useUserStore";
import { Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useUserStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const navigateHandler = (routerName: string) => {
    router.push(routerName);
  };

  useEffect(() => {
    useUserStore.getState().setUser("Suprem Khatri", "images/users/user_1.jpeg");
  }, []);

  const isLandingPage = pathname === "/";
  const Navbarclass = isLandingPage
    ? "backdrop-blur-lg mt-2 bg-transparent top-0 w-full z-50"
    : "bg-black top-0 w-full z-50";

  const filteredResults = EVENTS.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      event.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav
      className={`rounded-3xl fixed w-full top-0 z-50 text-white p-2 border border-emerald-100/10 ${Navbarclass}`}
    >
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <div
          className="ml-4 text-xl font-bold cursor-pointer"
          onClick={() => navigateHandler("/")}
        >
          EM
        </div>

        {/* Search Bar */}
        <div className="flex items-center flex-grow mx-4 lg:max-w-md relative">
          <input
            type="text"
            placeholder="Search Events"
            className="p-2 rounded-full border border-white text-sm text-white w-full outline-none bg-neutral-500/10 border-transparent focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />
          {showResults && searchQuery && (
            <div className="absolute top-12 left-0 w-full bg-black text-white p-4 rounded-lg shadow-lg z-50">
              {filteredResults.length > 0 ? (
                filteredResults.map((event, index) => (
                  <Link
                    key={index}
                    href={`/events/${event.status}/${event.title.replace(
                      /\s+/g,
                      "-"
                    )}`}
                    className="flex items-start mb-4 hover:bg-neutral-700 p-2 rounded"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-12 h-12 rounded mr-3"
                    />
                    <div>
                      <h4 className="font-bold">{event.title}</h4>
                      <p className="text-sm text-gray-400">
                        {event.description}
                      </p>
                      <div className="text-xs text-gray-500 mt-1">
                        Tags: {event.tags.join(", ")}
                      </div>
                      <div className="text-xs text-green-500 mt-1">
                        Status: {event.status}
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-gray-400">No results found.</p>
              )}
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-7 mr-6">
          <Link href="/events" className="hover:text-gray-300">
            Events
          </Link>
          <Link href="/class" className="hover:text-gray-300">
            Class
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>

          {/* Desktop Auth */}
          {isLoggedIn && user ? (
            <Menu as="div" className="relative">
              <Menu.Button>
                <img
                  src={user.photo}
                  alt="avatar"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-lg z-10">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logout}
                      className={`block bg-red-400 w-full text-left px-4 py-2 ${
                        active ? "bg-red-200" : ""
                      }`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <>
              <button
                onClick={() => navigateHandler("/signup")}
                className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white"
              >
                Signup
              </button>
              <button
                onClick={() => navigateHandler("/login")}
                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black"
              >
                Login
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        {isLoggedIn && user ? (
          <div className="flex md:hidden justify-between items-center space-x-4 mr-4">
            <Menu as="div" className="relative">
              <Menu.Button>
                <img
                  src={user.photo}
                  alt="avatar"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-28 bg-white text-black rounded shadow-lg z-10">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={logout}
                      className={`block w-full bg-red-800 text-left px-4 py-2 ${
                        active ? "bg-red-200" : ""
                      }`}
                    >
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <Menu.Button>
                    {open ? (
                      <XIcon className="h-6 w-6" />
                    ) : (
                      <MenuIcon className="h-6 w-6" />
                    )}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 w-40 bg-black text-white rounded-md shadow-lg z-50 flex flex-col items-start p-2 space-y-2">
                    <Menu.Item>
                      <Link href="/events" className="hover:text-gray-300">
                        Events
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/class" className="hover:text-gray-300">
                        Class
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/contact" className="hover:text-gray-300">
                        Contact
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </>
              )}
            </Menu>
          </div>
        ) : (
          <>
            <Menu
              as="div"
              className="relative md:hidden inline-block text-left"
            >
              {({ open }) => (
                <>
                  <Menu.Button>
                    {open ? (
                      <XIcon className="h-6 w-6" />
                    ) : (
                      <MenuIcon className="h-6 w-6" />
                    )}
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 w-40 bg-black text-white rounded-md shadow-lg z-50 flex flex-col items-start p-2 space-y-4">
                    <Menu.Item>
                      <Link href="/events" className="hover:text-gray-300">
                        Events
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/class" className="hover:text-gray-300">
                        Class
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Link href="/contact" className="hover:text-gray-300">
                        Contact
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        onClick={() => navigateHandler("/signup")}
                        className=" hover:bg-neutral-800 bg-green-800 border-none p-2 rounded border  w-full "
                      >
                        SignUp
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        onClick={() => navigateHandler("/login")}
                        className=" hover:bg-neutral-800 bg-blue-800 w-full border-none p-2 rounded"
                      >
                        Login
                      </button>
                    </Menu.Item>
                  </Menu.Items>
                </>
              )}
            </Menu>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
