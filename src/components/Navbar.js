import React, { useState } from "react";
import logo from "../assets/logo-no-bg-2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-sky-700 fixed w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full p-2 text-gray-400 hover:bg-white hover:text-black focus:outline-none "
              aria-controls="mobile-menu"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 md:block md:ml-10 sm:space-x-8 sm:block">
              <div className="flex space-x-4 ">
                <a
                  href="/"
                  className="hover:bg-white hover:text-black text-white rounded-full px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-full px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-full px-3 py-2 text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-full px-3 py-2 text-sm font-medium"
                >
                  Achievements
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-full px-3 py-2 text-sm font-medium"
                >
                  Find Us
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-full px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </a>
                <Link
                  to="/login"
                  className="text-black bg-white rounded-full px-6 py-2 text-sm font-medium"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/"
            className="text-white hover:bg-white hover:text-black block rounded-full px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="/"
            className="text-white hover:bg-white hover:text-black block rounded-full px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="/"
            className="text-white hover:bg-white hover:text-black block rounded-full px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="/"
            className="text-white hover:bg-white hover:text-black block rounded-full px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
          <a
            href="/"
            className="bg-white text-black hover:bg-white hover:text-black block rounded-full px-3 py-2 text-base font-medium"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
