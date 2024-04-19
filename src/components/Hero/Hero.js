import React from "react";
import Heading from "../Heading/Heading";
import "./Hero.css";

const Hero = () => {
  const btnStyle = {
    color: "black",
    border: "2px solid rgb(0, 167, 111)",
    marginRight: "6px",
    textTransform: "capitalize",
    fontWeight: "bold",
  };

  return (
    <>
      <section className="hero sm:mb-24">
        <div className="container">
          <h1 className="text-white text-3xl font-medium">
            Find <span className="text-green pt-10">Properties </span>
            That Suits You.
          </h1>
          <form className="flex">
            <div className="box">
              <span className="text-black font-bold">Location</span>
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
              <span className="text-black font-bold">Property Type</span>
              <select className="equal-size-select ">
                <option value="">All Type</option>
                <option value="">For Sale</option>
                <option value="">For Rent</option>
              </select>
            </div>
            <div className="box">
              <span className="text-black font-bold">Property Category</span>
              <select className="equal-size-select ">
                <option value="">All Properties</option>
                <option value="">House</option>
                <option value="">Vehicles</option>
                <option value="">Land</option>
                <option value="">Job</option>
              </select>
            </div>
            <div className="box">
              <span className="text-black font-bold block">Price</span>
              <input
                className="price-input "
                type="number"
                placeholder="Min.Price(ETB)"
              />
              <input
                className="price-input ml-4"
                type="number"
                placeholder="Max.Price(ETB)"
              />
            </div>
            <button className="flex items-center justify-center bg-green rounded h-10 mt-10 pr-2 ">
              <span className="ml-2  text-black font-bold hover:text-white">
                Search
              </span>
            </button>
            <button
              className="flex items-center justify-center rounded h-10 mt-10 pr-2 ml-2 hover:bg-green "
              style={btnStyle}
            >
              <span className="ml-2  text-black font-bold text-center hover:text-white">
                Clear
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
