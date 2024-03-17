"use client";
import React from "react";
import Carousel from "@/components/carousel/Carousel";
import Map from "@/components/Maps/Map";
import Card from "@/components/propertyList/Card";
import { Button } from "@/components/ui/button";

const Detail = () => {
  return (
    <div className="flex flex-row">
      <div className="">
        <div className="  mt-20  container">
          <section className=" flex justify-between mx-6">
            <div className="flex flex-col">
              <h1 className="font-normal text-2xl">
                Bole Olompia, Furnished 3 Bedrooms House For Rent, Addis Ababa.
              </h1>
              <h6 className="bg-green rounded-sm mt-2 text-white w-20 pl-2 ">
                For Rent
              </h6>
            </div>
            <div className=" text-green text-2xl font-bold">2000 ETB/month</div>
          </section>
        </div>
        <div className="container flex flex-row">
          <Carousel />
          <div className="container   p-2 bg-white rounded shadow-lg">
            <h1 className="text-2xl font-normal mb-4 text-center mx-auto mt-2">
              Agent Information
            </h1>
            <div className=" mb-4 w-72 p-4">
              <div className="flex flex-row">
                <img
                  src="/../images/agent.jpg"
                  alt="Agent Avatar"
                  className="w-16 h-16 rounded mr-4"
                />
                <h2 className=" font-light mt-3">John Doe</h2>
              </div>
              <div>
                <div className="mt-3">
                  <input
                    type="email"
                    placeholder="+251994104901"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <textarea
                    placeholder="Enter your message"
                    className="w-full p-2 border border-gray-300 rounded mt-3"
                  />
                </div>
              </div>
              <div className="mt-3">
                <Button variant="send" className="w-full my-3">
                  Send
                </Button>
                <Button variant="call" className="w-full">
                  Call
                </Button>
              </div>
            </div>
          </div>
        </div>
        <section className="shadow-lg bg-white rounded-lg p-6 w-7/12  mx-8 my-8">
          <h5 className="mt-5 mb-6">Description</h5>
          <hr className="mt-5 mb-6" />
          <p className="text-black leading-9">
            Summit, 3 bedroom furnished apartment for rent, Addis Ababa. The
            apartment is located in safe residential compound and it is on the
            4th floor. It has living and dinning room with balcony, kitchen,
            master bedroom with it’s own shower room, two bedrooms with common
            shower room and garage for one car. The building comes with elevator
            and terrace on roof top. The rate is 1,600 USD or 160,000 Birr per
            month and negotiable.
          </p>
        </section>
        <section className="shadow-lg bg-white rounded-lg p-6 w-7/12  mx-8 my-8">
          <h5 className="mt-5 mb-6">Details</h5>
          <hr className="mt-5 mb-6" />
          <div className="flex justify-evenly">
            <ul>
              <li className="list-none flex justify-between">
                <strong className="mr-4">Price:</strong>
                <span>1,200,000 ETB</span>
              </li>
              <hr className="mt-5 mb-6" />
              <li className="list-none flex justify-between">
                <strong>Property Size:</strong>
                <span>198 m²</span>
              </li>
              <hr className="mt-5 mb-6" />

              <li className="list-none flex justify-between">
                <strong>Land Area:</strong>
                <span>198 m²</span>
              </li>
              <hr className="mt-5 mb-6" />
              <li className="list-none flex justify-between">
                <strong>Floor:</strong>
                <span>4</span>
              </li>
              <hr className="mt-5 mb-6" />
            </ul>
            <ul>
              <li className="list-none flex justify-between">
                <strong>Bedrooms:</strong>
                <span>3</span>
              </li>
              <hr className="mt-5 mb-6" />
              <li className="list-none flex justify-between">
                <strong>Bathrooms:</strong>
                <span>2</span>
              </li>
              <hr className="mt-5 mb-6" />

              <li className="list-none flex justify-between ">
                <strong className="mr-12">Property Status:</strong>
                <span>For Rent</span>
              </li>

              <hr className="mt-5 mb-6" />
              <li className="list-none flex justify-between ">
                <strong className="mr-12">Furnished:</strong>
                <span>Yes</span>
              </li>

              <hr className="mt-5 mb-6" />
            </ul>
          </div>
        </section>
        <section className="shadow-lg bg-white rounded-lg p-6 w-7/12  mx-8 my-8">
          <h5 className="mt-5 mb-6">Features</h5>
          <hr className="mt-5 mb-6" />
          <ul className="flex row-span-1 justify-between">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-light">balcony</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-light">generator</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-light">terrace</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-light">elevator</span>
            </li>
          </ul>
          <ul className="flex row-span-1 justify-between mt-7">
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-light">internet</span>
            </li>
            <li className="flex items-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2  "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-light">water-pump</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-light">garage</span>
            </li>
            <li className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="font-light">security</span>
            </li>
          </ul>
        </section>
        <section className="shadow-lg bg-white rounded-lg p-6  mx-8 my-8 w-7/12 ">
          <h5 className="mt-5 mb-6">Location</h5>
          <hr className="mt-5 mb-6" />
          <ul>
            <hr className="mt-5 mb-6" />
            <li className="list-none flex ">
              <strong className="mr-4">City:</strong>
              <span>Addis Abeba</span>
            </li>
            <hr className="mt-5 mb-6" />
            <li className="list-none flex ">
              <strong className="mr-4">Area:</strong>
              <span>Summit</span>
            </li>
            <hr className="mt-5 mb-6" />
          </ul>
          <Map />
        </section>
        <section className="container  p-6  mx-8 my-8 w-7/12 ">
          <h5 className="font-semibold text-2xl bg-green text-white p-2 rounded-sm">
            Similar Listings
          </h5>
          <hr className="mt-5 mb-6" />
          <div className="grid grid-cols-2 ">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
