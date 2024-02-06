import React from "react";
import Heading from "../Heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Next-Gen Brokerage Platform"
            subtitle="Find new and featured property in you desired area."
          />
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
              <span className="category">Price Range</span>
              <input
                className=" text-veryDarkBlue"
                type="text"
                placeholder="Price Range"
              />
            </div>
            <div className="box">
              <h4 className="category">Advance Filter</h4>
            </div>
            <button className="">
              <i className="fa fa-search not-italic text-darkBlue">Search</i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Hero;
