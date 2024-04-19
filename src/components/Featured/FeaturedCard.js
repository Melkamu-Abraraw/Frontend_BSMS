import React from "react";
import { featured } from "@/data/Data";

const FeaturedCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-10">
      {featured.map((item, index) => (
        <div className="box " key={index}>
          <img src={item.cover} alt={item.name} className="w-full text-sm" />
          <h4 className="text-base font-medium text-green">{item.name}</h4>
          <label className="text-sm font-medium">{item.total}</label>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCard;
