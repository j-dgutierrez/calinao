import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo-no-bg-2.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <section className="login-section bg-sky-300 h-screen">
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
          <div className="content w-full h-full flex justify-center items-center">
            <form className="w-full max-w-lg bg-white rounded-lg py-8 px-10 shadow-md">
              <img src={Logo} alt="logo" className="w-1/4 mx-auto" />
              <h2 className="text-2xl text-start font-bold mt-5 mb-5">Login</h2>
              <div className="input-group flex flex-col mb-5">
                <label className="input-label">Email Address</label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="input-group flex flex-col mb-5">
                <label className="input-label">Password</label>
                <input
                  type="password"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="option flex justify-between items-center mb-5">
                <a href="/" className="text-blue-500 hover:underline">
                  Forgot Password?
                </a>
                <div className="remember-me flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    for="default-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="input-group flex flex-col">
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white hover:bg-blue-600 py-2"
                >
                  Login
                </button>
                <p className="text-center mt-5">
                  New to Calinao's Catering Services? &nbsp;
                  <Link
                    to="/register"
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
