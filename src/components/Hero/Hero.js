import React from "react";
import Heading from "../Heading/Heading";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="text-white text-3xl font-medium">
            Find <span className="text-green pt-10">Properties </span>
            That Suits You.
          </h1>
          <form className="flex">
            <div className="box">
              <span className="category">Location</span>
              <select className="equal-size-select ">
                <option value="" className="opt">
                  All locations
                </option>
                <option value="">Addis Ababa</option>
                <option value="">Adama</option>
                <option value="">Jimma</option>
                <option value="">Debre Birhan</option>
              </select>
            </div>
            <div className="box">
              <span className="category">Property Type</span>
              <select className="equal-size-select ">
                <option value="">All Type</option>
                <option value="">For Sale</option>
                <option value="">For Rent</option>
              </select>
            </div>
            <div className="box">
              <span className="category">Property Category</span>
              <select className="equal-size-select">
                <option value="">All Properties</option>
                <option value="">House</option>
                <option value="">Vehicles</option>
                <option value="">Land</option>
                <option value="">Job</option>
              </select>
            </div>
            <div className="box">
              <span className="category">Price</span>
              <input
                className="equal-size-select input"
                type="number"
                placeholder="Price"
              />
            </div>
            <button className="flex items-center justify-center bg-green rounded h-9 mt-11 pr-2">
              <span className="ml-2  text-black font-bold">Search</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
