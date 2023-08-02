import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import plateImg from "../assets/plate.png";
import FoodCard from "./FoodCard";

const ReservationForm = () => {
  const [middleName, setMiddleName] = useState("");

  const handleInputMiddleName = (e) => {
    setMiddleName(e.target.value);
  };

  const reservations = [
    "RESERVATION 1",
    "RESERVATION 2",
    "RESERVATION 3",
    "RESERVATION 4",
  ];
  const [reservationIndex, setReservationIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [foodPackages, setFoodPackages] = useState([
    {
      id: 1,
      name: "Kaldereta",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: plateImg,
    },
    {
      id: 2,
      name: "Adobo",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: plateImg,
    },
    {
      id: 3,
      name: "Sinigang",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: plateImg,
    },
    {
      id: 4,
      name: "Pork Steak",
      price: 1000,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: plateImg,
    },
  ]);

  const handleNextClick = () => {
    if (reservationIndex !== reservations.length - 1) {
      setReservationIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (reservationIndex !== 0) {
      setReservationIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleAddToCart = (foodPackage) => {
    setCart((prevCart) => [...prevCart, foodPackage]);
  };

  const handleRemoveFromCart = (foodPackage) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== foodPackage.id)
    );
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    const steps = document.querySelectorAll(".step");

    steps.forEach((step, index) => {
      if (index <= reservationIndex) {
        step.classList.remove("bg-gray-300");
        step.classList.add("bg-blue-600");
        step.classList.add("text-white");
      } else {
        step.classList.add("bg-gray-300");
        step.classList.remove("bg-blue-600");
        step.classList.remove("text-white");
      }
    });
  }, [reservationIndex]);

  return (
    <section className="reservation-form py-10 bg-sky-600 min-h-screen">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-10">
        <div className="reservation-form bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto p-10">
          <h1 className="text-xl font-bold text-black mb-2">
            Reservation Form
          </h1>
          <p className="text-gray-700 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum quibusdam voluptatibus, quia, quos, voluptas dolorum
          </p>
          <hr className="border-t border-black my-3" />
          <div className="step-container grid grid-cols-4 gap-2 mb-3">
            <div className="step p-2">
              <div className="step__label text-xs	">Personal and Event Info</div>
            </div>
            <div className="step p-2">
              <div className="step__label text-xs	">Food Packages</div>
            </div>
            <div className="step p-2">
              <div className="step__label text-xs	">Summary</div>
            </div>
            <div className="step p-2">
              <div className="step__label text-xs	">Payment</div>
            </div>
          </div>
          <div className="reservaton-1" hidden={reservationIndex !== 0}>
            <h4 className="text-lg font-bold text-black mb-2">
              Fill up the form below
            </h4>
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="input-group flex flex-col">
                <label className="input-label">First Name</label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="input-group flex flex-col">
                <label className="input-label">Middle Name</label>
                <input
                  type="text"
                  className={`input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400 ${
                    middleName ? "border-blue-400" : ""
                  }`}
                  placeholder="Enter your middle name"
                  value={middleName}
                  onChange={handleInputMiddleName}
                />
              </div>

              <div className="input-group flex flex-col">
                <label className="input-label">Last Name</label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="input-group flex flex-col col-span-2">
                <label className="input-label">Email Address</label>
                <input
                  type="email"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="input-group flex flex-col">
                <label className="input-label">Contact Number</label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your contact number"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-3">
              <div className="input-group flex flex-col col-span-2">
                <label className="input-label">Date</label>
                <input
                  type="date"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your date"
                  required
                />
              </div>
              <div className="input-group flex flex-col">
                <label className="input-label">Start Time</label>
                <input
                  type="time"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your start time"
                  required
                />
              </div>
              <div className="input-group flex flex-col">
                <label className="input-label">End Time</label>
                <input
                  type="time"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your end time"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="input-group flex flex-col">
                <label className="input-label">Event Type</label>
                <select
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  required
                >
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="baptism">Baptism</option>
                  <option value="debut">Debut</option>
                  <option value="corporate">Corporate</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div className="input-group flex flex-col">
                {/* if others, plese specity */}
                <label className="input-label">If others, please specify</label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your event type"
                />
              </div>
              <div className="input-group flex flex-col">
                <label className="input-label">Number of Guests</label>
                <input
                  type="number"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter your number of guests"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-3">
              <div className="input-group flex flex-col">
                <label className="input-label">Province</label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter province"
                  required
                />
              </div>
              <div className="input-group flex flex-col">
                <label className="input-label">City / Municipality</label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter city / municipality"
                  required
                />
              </div>
              <div className="input-group flex flex-col">
                <label className="input-label">Postal Code</label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter postal code"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="input-group flex flex-col">
                <label className="input-label">Barangay</label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter barangay"
                  required
                />
              </div>
              <div className="input-group flex flex-col">
                <label className="input-label">
                  Street / Bldg. / House No.
                </label>
                <input
                  type="text"
                  className="input-text border border-gray-300 px-3 py-2 outline-none focus:border-blue-400"
                  placeholder="Enter street"
                  required
                />
              </div>
            </div>
          </div>
          <div className="reservaton-2" hidden={reservationIndex !== 1}>
            <h4 className="text-lg font-bold text-black mb-2">
              Choose from our food packages
            </h4>
            <FoodCard
              foodPackages={foodPackages}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </div>

          <div
            className="flex justify-between items-center"
            hidden={reservationIndex !== 1}
          >
            <button
              onClick={handlePreviousClick}
              hidden={reservationIndex === 0}
            >
              Previous
            </button>

            <Link
              to="/"
              hidden={reservationIndex !== 0}
              className="text-blue-500"
            >
              Back to Home
            </Link>
            <button
              className="bg-blue-500 text-white px-3 py-2 rounded-full w-content"
              onClick={handleNextClick}
              disabled={reservationIndex === reservations.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
