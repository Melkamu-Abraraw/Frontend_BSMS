import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className="heading">
        <h1 className="text-veryDarkBlue">{title}</h1>
        <p className="text-darkBlue">{subtitle}</p>
      </div>
    </>
  );
};

export default Heading;
