import React from "react";
import Heading from "../Heading/Heading";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="text-white text-3xl font-medium">
            Find <span className="text-lightBlue">Properties</span> <br />
            That Suits You.
          </h1>
          {/* <Heading
            title="Next-Gen Brokerage Platform"
            subtitle="Find new and featured property in you desired area."
          /> */}
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
            <button className="flex items-center justify-center bg-blue rounded h-9 mt-11 pr-2">
              <span className="ml-2  text-white">Search</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
