"use client";
import React from "react";
import Map from "@/components/Maps/MapShow";
import Card from "@/components/propertyList/Card";
import { Button } from "@/components/ui/button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "next/navigation";

const Detail = () => {
  const [propertyDetail, setPropertyDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const params = useParams();

  React.useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/${params.type}/${params.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setPropertyDetail(data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
    fetchDetail();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col w-full items-center mt-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-spin mx-auto w-12 h-12"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        <h4 className="mx-auto items-center text-2xl pl-2 mb-80 mt-6">
          Loading...
        </h4>
      </div>
    );
  }

  return (
    <div className="flex flex-row">
      <div className="">
        <div className="  mt-20  container">
          <section className=" flex justify-between mx-6">
            <div className="flex flex-col">
              <h1 className="font-normal text-2xl">{propertyDetail.Title}</h1>
              <h6 className="bg-green rounded-sm mt-2 text-white w-20 pl-2 ">
                {propertyDetail.ContractType}
              </h6>
            </div>
            <div className=" text-green text-2xl font-bold">
              {propertyDetail.Price}
              <span className="ml-1"> ETB/month</span>
            </div>
          </section>
        </div>
        <div className="container flex flex-row">
          <Carousel width="59%">
            <div className="h-80">
              <img src="/../images/hero/house.png" className="object-cover" />
            </div>
            <div className="h-80">
              <img src="/../images/hero/house.png" className="object-cover" />
            </div>
            <div className="h-80">
              <img src="/../images/hero/house.png" className="object-cover" />
            </div>
            <div className="h-80">
              <img src="/../images/hero/house.png" className="object-cover" />
            </div>
            <div className="h-80">
              <img src="/../images/hero/house.png" className="object-cover" />
            </div>
          </Carousel>
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
          <p className="text-black leading-9">{propertyDetail.Description}</p>
        </section>
        <section className="shadow-lg bg-white rounded-lg p-6 w-7/12  mx-8 my-8">
          <h5 className="mt-5 mb-6">Details</h5>
          <hr className="mt-5 mb-6" />
          <div className="flex justify-evenly">
            <ul>
              <li className="list-none flex justify-between">
                <strong className="mr-4">Price:</strong>
                <span>
                  {propertyDetail.Price}
                  ETB
                </span>
              </li>
              <hr className="mt-5 mb-6" />
              <li className="list-none flex justify-between">
                <strong>Property Size:</strong>
                <span className="ml-1">
                  {propertyDetail.Area} <span className="ml-1">m²</span>
                </span>
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
                <span>{propertyDetail.Bedroom}</span>
              </li>
              <hr className="mt-5 mb-6" />
              <li className="list-none flex justify-between">
                <strong>Bathrooms:</strong>
                <span>{propertyDetail.Bathroom}</span>
              </li>
              <hr className="mt-5 mb-6" />

              <li className="list-none flex justify-between ">
                <strong className="mr-12">Property Status:</strong>
                <span>{propertyDetail.ContractType}</span>
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
        {/* <section className="shadow-lg bg-white rounded-lg p-6 w-7/12  mx-8 my-8">
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
        </section> */}
        <section className="shadow-lg bg-white rounded-lg p-6  mx-8 my-8 w-7/12 ">
          <h5 className="mt-5 mb-6">Location</h5>
          <ul>
            <hr className="mt-5 mb-6" />
            <li className="list-none flex ">
              <strong className="mr-4">City:</strong>
              <span>{propertyDetail.City}</span>
            </li>
            <hr className="mt-5 mb-6" />
          </ul>
          {/* <Map height={350} width={1200} location={propertyDetail.City}/> */}
        </section>
        <section className="container  p-6  mx-8 my-8 w-7/12 ">
          <h5 className="font-semibold text-2xl bg-green text-white p-2 rounded-sm">
            Similar Listings
          </h5>
          <hr className="mt-5 mb-6" />
          <div className="grid grid-cols-2 "></div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
