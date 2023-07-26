import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Regular style icon
//paperpale
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import baptismImage from "../assets/baptism.jpg";
import birthdayImage from "../assets/birthday.jpg";
import weddingImage from "../assets/wedding.jpg";
import partyImage from "../assets/party.jpg";

const ServiceCard = () => {
  const services = [
    {
      title: "Birthday",
      image: birthdayImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam voluptatum.",
    },
    {
      title: "Wedding",
      image: weddingImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam voluptatum.",
    },
    {
      title: "Baptism",
      image: baptismImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam voluptatum.",
    },
    {
      title: "More",
      image: partyImage,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Quisquam voluptatum.",
    },
  ];

  return (
    <>
      {services.map((service, index) => (
        <div
          className="service-card bg-white rounded-lg shadow-sm border border-gray-300 hover:shadow transition duration-300 w-full relative"
          key={index}
        >
          {/* <div
            className="absolute w-8 h-5 top-5 end-0 shadow"
            style={{ backgroundColor: "rgb(251,70,17)" }}
          ></div> */}
          <div className="image flex justify-center items-center">
            <img
              src={service.image}
              alt="service"
              className="w-full h-full object-cover  rounded-t-lg"
            />
          </div>
          <div className="content p-4">
            <h3 className="text-base text-center font-bold text-sky-700">
              {service.title}
            </h3>
            <p className="text-sm text-center mt-2 text-black">
              {service.description}
            </p>
            <div className="flex justify-center mt-4">
              <button className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-4 rounded-full">
                <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceCard;
