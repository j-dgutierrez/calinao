import React from "react";
import StatementCard from "./StatementCard";

const Statement = () => {
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
    background: "#FFF",
    padding: "0 15px",
  };
  return (
    <section className="statement-section py-10 bg-white">
      <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="content w-full">
          <h2
            className="text-3xl text-center font-bold mb-3"
            style={titleStyle}
          >
            <span style={lineStyle}></span>
            <span style={spanStyle}>Mission and Vision</span>
          </h2>
          <div className="statement-content flex justify-between items-start py-4 h-auto sm:flex-row flex-col-reverse">
            <StatementCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statement;
