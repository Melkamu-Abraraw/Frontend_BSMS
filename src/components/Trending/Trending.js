import React from "react";
import Card from "@/components/propertyList/Card";

const Trending = () => {
  return (
    <>
      <div className="container text-center">
        <h4 className="text-darkBlue text-2xl mt-10">Trending Property </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ml-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default Trending;
