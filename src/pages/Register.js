import React from "react";
import Navbar from "../components/Navbar";
import Logo from "../assets/logo-no-bg-2.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Navbar />
      <section className="register-section bg-sky-300 py-10">
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="content w-full flex justify-center items-center">
            <form className="w-full max-w-lg bg-white rounded-lg py-8 px-10 shadow-md mt-10">
              <img src={Logo} alt="logo" className="w-1/4 mx-auto" />
              <h2 className="text-2xl text-start font-bold mt-5 mb-5">
                Register
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="input-group flex flex-col mb-5">
                  <label className="input-label">First Name</label>
                  <input
                    type="text"
                    className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="input-group flex flex-col mb-5">
                  <label className="input-label">Last Name</label>
                  <input
                    type="text"
                    className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
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
              <div className="input-group flex flex-col mb-5">
                <label className="input-label">Confirm Password</label>
                <input
                  type="password"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="input-group flex flex-col">
                <button
                  type="submit"
                  className="btn bg-blue-500 text-white hover:bg-blue-600 py-2"
                >
                  Register
                </button>
                <p className="text-center mt-5">
                  Already have an account? &nbsp;
                  <Link to="/login" className="text-blue-500 hover:underline">
                    Login
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

export default Register;
