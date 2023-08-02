import React from "react";
import missionHeader from "../assets/mission-header.jpg";
import visionHeader from "../assets/vision-header.jpg";
import coreValuesHeader from "../assets/core-header.jpg";
import missionIcon from "../assets/mission-icon.png";
import visionIcon from "../assets/vision-icon.png";
import coreValuesIcon from "../assets/core-icon.png";

const StatementCard = () => {
  const statement = [
    {
      id: 1,
      title: "Mission",
      content: "To provide the best quality of service to our clients.",
      header: missionHeader,
      icon: missionIcon,
    },
    {
      id: 2,
      title: "Vision",
      content: "To be the best catering service provider in the country.",
      header: visionHeader,
      icon: visionIcon,
    },
    {
      id: 3,
      title: "Core Values",
      content: "To be the best catering service provider in the country.",
      header: coreValuesHeader,
      icon: coreValuesIcon,
    },
  ];

  return (
    <>
      {statement.map((item) => (
        <div
          className="statement-card w-full sm:w-[30%] shadow-sm border border-gray-300 hover:shadow transition duration-300 relative"
          key={item.id}
        >
          <div className="statement-header bg-sky-600 ">
            <img src={item.header} alt={item.title} />
          </div>
          <div className="statement-content relative pt-16 pb-4 px-4">
            <div className="statement-icon absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-5 bg-sky-600 shadow-lg shadow-indigo-500/40 border-8 border-white">
              <img src={item.icon} alt={item.title} className="w-14" />
            </div>
            <h3 className="text-2xl font-bold text-center text-sky-600 mb-2">
              {item.title}
            </h3>
            <p className="text-center text-black">{item.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default StatementCard;
