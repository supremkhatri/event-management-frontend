"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { EVENTS } from "@/lib/event_data";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const navigateHandler = (routerName : string) => {
    router.push(routerName);
  };

  const isLandingPage = pathname === "/";
  const Navbarclass = isLandingPage
    ? "backdrop-blur-lg mt-2 bg-transparent fixed top-0 w-full z-50"
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
      className={`rounded-3xl w-full top-0 z-50 text-white p-2 border border-emerald-100/10 ${Navbarclass}`}
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
                    href={`/events/${event.status}/${event.title.replace(/\s+/g, '-')}`}
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

        {/* Links and Buttons */}
        <div className="hidden md:flex items-center space-x-7 mr-6">
          <Link href="/events" className="hover:text-gray-300">
            Events
          </Link>
          <Link href="#" className="hover:text-gray-300">
            Class
          </Link>
          <Link href="contact" className="hover:text-gray-300">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
