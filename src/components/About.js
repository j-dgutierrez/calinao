import React from "react";
import baptismImage from "../assets/baptism.jpg";
import birthdayImage from "../assets/birthday.jpg";
import weddingImage from "../assets/wedding.jpg";
import partyImage from "../assets/party.jpg";

const About = () => {
  const titleStyle = {
    position: "relative",
    zIndex: 1,
    color: "rgb(251,70,17)",
  };

  const lineStyle = {
    borderTop: "2px solid #000",
    content: '""',
    margin: "0 auto",
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    bottom: 0,
    width: "50%",
    zIndex: -1,
  };

  const spanStyle = {
    background: "#7dd3fc",
    padding: "0 15px",
  };

  return (
    <section className="about-section bg-sky-300 py-10">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="content w-full ">
          <h2 className="text-3xl text-center font-bold" style={titleStyle}>
            <span style={lineStyle}></span>
            <span style={spanStyle}>About Us</span>
          </h2>
          <div className="about-content flex justify-center items-start py-4 h-auto sm:flex-row flex-col-reverse">
            <div className="about-image pr-2.5 sm:w-2/5 w-full">
              <table>
                <tbody>
                  <tr>
                    <td className="w-1/2 p-1">
                      <img src={baptismImage} alt="baptism" />
                    </td>
                    <td className="w-1/2 p-1">
                      <img src={birthdayImage} alt="birthday" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-1" colSpan="2">
                      <img src={weddingImage} alt="wedding" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="about-info pl-2.5 h-full sm:w-3/5 w-full sm:mt-0 mt-5">
              <h3 className="sm:text-start font-bold text-xl text-center text-black mb-2">
                Why Calinao's Catering Services?
              </h3>
              <p className="text-base text-justify text-black mx-auto ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quibusdam, quos, voluptate voluptas dolorum
                quia voluptatibus quod quae quas fugit. Quisquam voluptatum,
                quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam voluptatum, quibusdam, quos, voluptate voluptas
                dolorum quia voluptatibus quod quae quas fugit. Quisquam
                voluptatum, quibusdam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam voluptatum, quibusdam, quos,
                voluptate voluptas dolorum quia voluptatibus quod quae quas
                fugit. Quisquam voluptatum, quibusdam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam voluptatum,
                quibusdam, quos, voluptate voluptas dolorum quia voluptatibus
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
