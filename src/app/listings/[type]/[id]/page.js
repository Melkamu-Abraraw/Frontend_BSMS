"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useParams } from "next/navigation";
import Map from "@/components/Maps/MapShow";
import Card from "@/components/propertyList/Card";

const Detail = () => {
  const [propertyDetail, setPropertyDetail] = React.useState([]);
  const [similarProperty, setSimilarProperty] = React.useState([]);
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
        console.log(data);
        setPropertyDetail(data.mainHouse);
        setSimilarProperty(data.similarHouses);
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
          <section className=" flex justify-between ">
            <div className="flex flex-col">
              <h1 className="font-normal text-2xl">
                {propertyDetail.PropertyType}
              </h1>
              <h6 className="bg-green rounded-sm mt-2 text-white w-20 pl-2 ">
                {propertyDetail.ContractType}
              </h6>
            </div>
            <div className=" text-green text-2xl font-bold">
              {propertyDetail.Price.toLocaleString()}
              <span className="ml-1"> ETB</span>
            </div>
          </section>
        </div>
        <div className="container flex flex-row">
          <Carousel width="59%" className="mt-2 ">
            {propertyDetail.imageUrls.map((imageUrl, index) => (
              <div className="h-80  ">
                <img
                  key={index}
                  src={imageUrl}
                  className="object-cover rounded"
                />
              </div>
            ))}
            {propertyDetail.imageUrls.map((imageUrl, index) => (
              <div className="h-80  ">
                <img
                  key={index}
                  src={imageUrl}
                  className="object-cover rounded"
                />
              </div>
            ))}
            {propertyDetail.imageUrls.map((imageUrl, index) => (
              <div className="h-80  ">
                <img
                  key={index}
                  src={imageUrl}
                  className="object-cover rounded"
                />
              </div>
            ))}
            {propertyDetail.imageUrls.map((imageUrl, index) => (
              <div className="h-80  ">
                <img
                  key={index}
                  src={imageUrl}
                  className="object-cover rounded"
                />
              </div>
            ))}
          </Carousel>
          <div className="container   p-2 bg-white rounded shadow-lg items-center">
            <h1 className="text-2xl font-normal mb-4 text-center mx-auto mt-2">
              Agent Information
            </h1>
            <div className=" mb-4 w-72 p-4 items-center">
              <div className="flex flex-row">
                {propertyDetail.Broker.imageUrls &&
                  propertyDetail.Broker.imageUrls[0] && ( // Check if broker.imageUrls exists and has at least one element
                    <div className="relative rounded-full overflow-hidden h-12 w-12">
                      <Image
                        src={propertyDetail.Broker.imageUrls[0]}
                        alt={propertyDetail.Description}
                        height={70}
                        width={70}
                        className="rounded-full"
                      />
                    </div>
                  )}
                <h2 className=" font-light mt-3 ml-2">{`${propertyDetail.Broker.FirstName} ${propertyDetail.Broker.LastName}`}</h2>
              </div>
              <div>
                <div className="mt-3">
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded"
                    disabled
                    value={`+251${propertyDetail.Broker.Phone}`}
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
          <h5 className="mt-5 mb-6 text-veryDarkBlue">Details</h5>
          <hr className="mt-5 mb-6" />
          <div className="flex justify-evenly">
            <ul>
              <li className="list-none flex justify-between">
                <strong className="mr-4">Price:</strong>
                <span>{`${propertyDetail.Price.toLocaleString()} ETB`}</span>
              </li>
              <hr className="mt-5 mb-6" />
              {propertyDetail.PropertyType === "House" && (
                <li className="list-none flex justify-between">
                  <strong>Area:</strong>
                  <span className="ml-1">
                    {propertyDetail.Area} <span className="ml-1">m²</span>
                  </span>
                </li>
              )}
              <hr className="mt-5 mb-6" />
              {propertyDetail.PropertyType === "House" && (
                <li className="list-none flex justify-between">
                  <strong className="mr-12">Price Category:</strong>
                  {propertyDetail.ContractType}
                </li>
              )}
              <hr className="mt-5 mb-6" />
              {propertyDetail.PropertyType === "House" && (
                <li className="list-none flex justify-between">
                  <strong>Property Category:</strong>
                  <span className="ml-1">{propertyDetail.HouseType}</span>
                </li>
              )}
            </ul>
            <ul>
              {propertyDetail.PropertyType === "House" && (
                <li className="list-none flex justify-between">
                  <strong>Bedrooms:</strong>
                  <span className="ml-1">{propertyDetail.Bedroom}</span>
                </li>
              )}
              <hr className="mt-5 mb-6" />
              {propertyDetail.PropertyType === "House" && (
                <li className="list-none flex justify-between">
                  <strong>Bathrooms:</strong>
                  <span className="ml-1">{propertyDetail.Bathroom}</span>
                </li>
              )}
              <hr className="mt-5 mb-6" />
              <li className="list-none flex justify-between ">
                <strong className="mr-12">Contract Type:</strong>
                <span>{propertyDetail.ContractType}</span>
              </li>

              <hr className="mt-5 mb-6" />
            </ul>
          </div>
        </section>
        <section className="shadow-lg bg-white rounded-lg p-6  mx-8 my-8 w-7/12 ">
          <h5 className="mt-5 mb-6">Address</h5>
          <ul>
            <hr className="mt-5 mb-6" />
            <li className="list-none flex ">
              <strong className="mr-4">City:</strong>
              <span>{propertyDetail.City}</span>
            </li>
            <hr className="mt-5 mb-6" />
            <li className="list-none flex ">
              <strong className="mr-4">Location:</strong>
            </li>
          </ul>
          <Map height={350} width={1200} />
        </section>
        <section className="container p-6 mx-8 my-8 w-11/12 items-center">
          <h5 className="text-2xl text-green font-bold text-center mb-2">
            Recommended Properties
          </h5>
          <hr className="w-28 h-1 bg-black mx-auto mt-1"></hr>
          <div className="grid grid-cols-3 gap-4">
            {similarProperty.map((property, index) => (
              <Card property={property} key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Detail;
