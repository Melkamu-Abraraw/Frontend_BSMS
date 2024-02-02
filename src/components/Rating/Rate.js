"use client";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

const Rate = () => {
  const [rating, setRating] = useState(null);
  const [hover, sethover] = useState(null);

  return (
    <div className="flex ml-2">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return (
          <label>
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
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => sethover(currentRating)}
              onMouseLeave={() => sethover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rate;
