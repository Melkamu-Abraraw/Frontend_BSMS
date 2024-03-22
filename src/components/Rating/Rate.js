"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const Rate = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex mt-1 mb-1 pr-5 pb-2">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              className="hidden"
              type="radio"
              name="rating"
              value={currentRating}
              onChange={(e) => setRating(currentRating)}
            />
            <AiFillStar
              className="star"
              size={20}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#C6DCBA"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rate;
