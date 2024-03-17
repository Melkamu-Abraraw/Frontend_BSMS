import React from "react";
import Card from "@/components/propertyList/Card";
import { Button } from "@mui/material";

const Listings = () => {
  return (
    <div className="text-center">
      <h4 className="text-black text-3xl mt-10 font-light">Latest Listings</h4>

      {/* Display cards horizontally on large screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Button
        variant="outlined"
        className="mb-7 px-8 text-black capitalize hover:font-bold"
      >
        Load More
      </Button>
    </div>
  );
};

export default Listings;
