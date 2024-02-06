import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className="heading">
        <h2 className="text-darkBlue text-5xl mb-6 mt-32">{title}</h2>
        <p className="text-darkBlue">{subtitle}</p>
      </div>
    </>
  );
};

export default Heading;
