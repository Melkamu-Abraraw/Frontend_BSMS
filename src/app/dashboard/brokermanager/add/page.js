"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Map from "@/components/Maps/Map";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleImageChange = (e) => {
  const files = Array.from(e.target.files);
  const images = files.map((file) => URL.createObjectURL(file));
  setFormData((prevData) => ({
    ...prevData,
    images: [...prevData.images, ...images],
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Send formData to backend or perform any other necessary action
  console.log(formData);
};

function Homepage() {
  const [propertyType, setPropertyType] = useState("");
  const [pdfs, setPdfs] = useState([]);

  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    price: "",
    description: "",
    images: [],
  });
  const colors = [
    { name: "Red", value: "#FF0000" },
    { name: "Green", value: "#00FF00" },
    { name: "Blue", value: "#0000FF" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Purple", value: "#800080" },
    { name: "Black", value: "#000" },
    { name: "White", value: "#FFF" },
    { name: "Mix", value: "    #4F1396" },
    // Add more colors as needed
  ];
  const handlePdfChange = (event) => {
    const selectedPdfs = Array.from(event.target.files);
    setPdfs((prevPdfs) => [...prevPdfs, ...selectedPdfs]);
  };

  const handleRemovePdf = (indexToRemove) => {
    setPdfs((prevPdfs) =>
      prevPdfs.filter((_, index) => index !== indexToRemove)
    );
  };

  // State to store the selected color
  const [selectedColor, setSelectedColor] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...selectedImages]);
  };
  // Event handler for when a color is selected
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };
  const handlePropertyTypeChange = (e) => {
    console.log(e.target);
    console.log(propertyType);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white shadow-2xl rounded-lg px-8  "
      >
        <div className="mb-2">
          <Label htmlFor="title" className="font-bold">
            Property Title :
          </Label>
          <Input type="text" id="title" placeholder="Title" className="mt-3" />
        </div>
        <div className="mb-2">
          <Label htmlFor="location" className="font-bold">
            Property Location :
          </Label>
          <Map height="300px" width="100%" />
        </div>
        <div className="mb-3">
          <Label htmlFor="location" className="font-bold">
            Property Description :
          </Label>
          <Textarea
            placeholder="Type your property Description here."
            className="mt-3"
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div>
            <div className="mb-4">
              <Label htmlFor="type" className="font-bold">
                Proprety Type :
              </Label>
            </div>
            <Select id="propertyType" onValueChange={(e) => setPropertyType(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder="Select an Option"
                  className="font-bold"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="House">House</SelectItem>
                  <SelectItem value="Vehicle">Vehicle</SelectItem>
                  <SelectItem value="Land">Land</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {propertyType === "House" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Property Category :
                </Label>
              </div>
              <Select id="propertyType">
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder="Select an Option"
                    className="font-bold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Villa">Villa</SelectItem>
                    <SelectItem value="Condominium">Condominium</SelectItem>
                    <SelectItem value="Apartment">Apartment</SelectItem>
                    <SelectItem value="Office">Office</SelectItem>
                    <SelectItem value="Single Familiy">
                      Single Familiy
                    </SelectItem>
                    <SelectItem value="G+">G+</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Brand :
                </Label>
              </div>
              <Select id="propertyType">
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder="Select an Option"
                    className="font-bold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Toyota">Toyota</SelectItem>
                    <SelectItem value="Suzuki">Suzuki</SelectItem>
                    <SelectItem value="Sinotruck">Sinotruck</SelectItem>
                    <SelectItem value="Scania">Scania</SelectItem>
                    <SelectItem value="Renault">Renault</SelectItem>
                    <SelectItem value="Jetour">Jetour</SelectItem>
                    <SelectItem value="Nissan">Nissan</SelectItem>
                    <SelectItem value="Scannia">Scannia</SelectItem>
                    <SelectItem value="Lifan">Lifan</SelectItem>
                    <SelectItem value="Mercedes">Mercedes</SelectItem>
                    <SelectItem value="Isuzu">Isuzu</SelectItem>
                    <SelectItem value="Hundai">Hundai</SelectItem>
                    <SelectItem value="Chevrolet">Chevrolet</SelectItem>
                    <SelectItem value="Ford">Ford</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Model :
                </Label>
              </div>
              <Select id="propertyType">
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder="Select an Option"
                    className="font-bold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Corolla">Corolla</SelectItem>
                    <SelectItem value="Yaris">Yaris</SelectItem>
                    <SelectItem value="Hilux">Hilux</SelectItem>
                    <SelectItem value="Platz">Platz</SelectItem>
                    <SelectItem value="Rava4">Rava4</SelectItem>
                    <SelectItem value="Tacomma">Tacomma</SelectItem>
                    <SelectItem value="Vitz">Vitz</SelectItem>
                    <SelectItem value="Highlander">Highlander</SelectItem>
                    <SelectItem value="Carina">Carina</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Transmission :
                </Label>
              </div>
              <Select id="propertyType">
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder="Select an Option"
                    className="font-bold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Manual">Manual</SelectItem>
                    <SelectItem value="Automatic">Automatic</SelectItem>
                    <SelectItem value="Both">Both</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Body Type :
                </Label>
              </div>
              <Select id="propertyType">
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder="Select an Option"
                    className="font-bold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Sedan">Sedan</SelectItem>
                    <SelectItem value="Truck">Truck</SelectItem>
                    <SelectItem value="Compact">Compact</SelectItem>
                    <SelectItem value="Minibus">Minibus</SelectItem>
                    <SelectItem value="SUV">SUV</SelectItem>
                    <SelectItem value="Pickup">Pickup</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Fuel Type :
                </Label>
              </div>
              <Select id="propertyType">
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder="Select an Option"
                    className="font-bold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Benzine">Benzine</SelectItem>
                    <SelectItem value="Diesel">Diesel</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                    <SelectItem value="Electric">Electric</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Engine Size :
                </Label>
              </div>
              <Select id="propertyType">
                <SelectTrigger className="w-[180px]">
                  <SelectValue
                    placeholder="Select an Option"
                    className="font-bold"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="0,8">0,8</SelectItem>
                    <SelectItem value="0,9">0,9</SelectItem>
                    <SelectItem value="1,0">1,0</SelectItem>
                    <SelectItem value="1,2">1,2</SelectItem>
                    <SelectItem value="1,3">1,3</SelectItem>
                    <SelectItem value="1,4">1,4</SelectItem>
                    <SelectItem value="1,5">1,5</SelectItem>
                    <SelectItem value="1,6">1,6</SelectItem>
                    <SelectItem value="1,7">1,7</SelectItem>
                    <SelectItem value="1,8">1,8</SelectItem>
                    <SelectItem value="1,9">1,9</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div className="mb-2">
              <Label htmlFor="title" className="font-bold">
                Mileage :
              </Label>
              <Input
                type="number"
                id="mileage"
                placeholder="Mileage"
                className="mt-3 w-44"
              />
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div className="mb-2">
              <Label htmlFor="title" className="font-bold">
                Year :
              </Label>
              <Input
                type="number"
                id="year"
                placeholder="Year"
                className="mt-3 w-44"
              />
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <Label htmlFor="title" className="font-bold">
                Color :
              </Label>
              <select
                value={selectedColor}
                onChange={handleColorChange}
                className="block w-44 py-2 px-3 border focus:border-black rounded-md shadow-sm"
                style={{
                  backgroundColor: "transparent", // Remove green background on hover
                }}
              >
                <option value="">Select an Option</option>
                {colors.map((color) => (
                  <option
                    key={color.name}
                    value={color.value}
                    className="flex items-center hover:bg-transparent"
                    style={{
                      padding: "5px",
                      borderRadius: "50px",
                      backgroundColor: color.value,
                      color:
                        color.value === "#000" || color.value === "#FFFFFF"
                          ? color.value === "#000"
                            ? "#FFF" // White text on black background
                            : "#000000" // Black text on white background
                          : "#000000", // Conditional color based on background color
                    }}
                  >
                    {/* Display the color circle */}
                    <div
                      className="w-4 h-4 rounded-full mr-2"
                      style={{ backgroundColor: color.value }}
                    ></div>
                    <span> {color.name}</span>
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <div className="mb-4">
              <Label htmlFor="type" className="font-bold">
                Contract Type :
              </Label>
            </div>
            <Select className="mt-4">
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder="Select an Option"
                  className="font-bold"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="For Sale">For Sale</SelectItem>
                  <SelectItem value="For Rent">For Rent</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="mb-4">
              <Label htmlFor="type" className="font-bold">
                Currency :
              </Label>
            </div>
            <Select className="mt-6">
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder="Select an Option"
                  className="font-bold"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="ETB">ETB</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="mb-4">
              <Label htmlFor="type" className="font-bold">
                City :
              </Label>
            </div>
            <Select className="mt-4">
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder="Select an Option"
                  className="font-bold"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Addis Abeba">Addis Abeba</SelectItem>
                  <SelectItem value="Adama">Adama</SelectItem>
                  <SelectItem value="Jimma">Jimma</SelectItem>
                  <SelectItem value="Ambo">Ambo</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="mb-4">
              <Label htmlFor="type" className="font-bold">
                Price Category :
              </Label>
            </div>
            <Select className="mt-4">
              <SelectTrigger className="w-[180px]">
                <SelectValue
                  placeholder="Select an Option"
                  className="font-bold"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Negotiable">Negotiable</SelectItem>
                  <SelectItem value="Adama">Slightliy Negotiable</SelectItem>
                  <SelectItem value="Jimma">Fixed</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-2">
            <Label htmlFor="title" className="font-bold">
              Proprety Price :
            </Label>
            <Input
              type="number"
              id="title"
              placeholder="Price"
              className="mt-3 w-44"
            />
          </div>

          <div className="mb-2">
            <Label htmlFor="title" className="font-bold">
              Price Prefix :
            </Label>
            <Input
              type="text"
              id="title"
              placeholder="Price"
              className="mt-3 w-44"
            />
          </div>
          {propertyType === "House" && (
            <div className="mb-2">
              <Label htmlFor="title" className="font-bold">
                Bedrooms :
              </Label>
              <Input
                type="number"
                id="title"
                placeholder="Price"
                className="mt-3 w-44"
              />
            </div>
          )}
          {propertyType === "House" && (
            <div className="mb-2">
              <Label htmlFor="title" className="font-bold">
                Bathrooms :
              </Label>
              <Input
                type="number"
                id="title"
                placeholder="Price"
                className="mt-3 w-44"
              />
            </div>
          )}
          {propertyType === "House" && (
            <div className="mb-2">
              <Label htmlFor="title" className="font-bold">
                Year Built :
              </Label>
              <Input
                type="number"
                id="title"
                placeholder="Price"
                className="mt-3 w-44"
              />
            </div>
          )}
          {propertyType === "House" ||
            (propertyType === "Land" && (
              <div className="mb-2">
                <Label htmlFor="title" className="font-bold">
                  Area :
                </Label>
                <Input
                  type="number"
                  id="title"
                  placeholder="Price"
                  className="mt-3 w-44"
                />
              </div>
            ))}
          {propertyType === "House" ||
            (propertyType === "Land" && (
              <div className="mb-2">
                <Label htmlFor="title" className="font-bold">
                  Area Prefix:
                </Label>
                <Input
                  type="text"
                  id="title"
                  placeholder="Price"
                  className="mt-3 w-44"
                />
              </div>
            ))}
        </div>
        <div>
          <label htmlFor="title" className="font-bold">
            Images :
          </label>
          <div className="w-full rounded-lg border border-gray-300 p-4">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="image-upload"
              className="custom-file-upload block  mx-auto text-center  text-black rounded-lg p-2 cursor-pointer mt-4"
            >
              Click to Select files
            </label>
            <label
              htmlFor="image-upload"
              className="custom-file-upload block w-36 mx-auto text-center bg-green text-white rounded-lg p-2 cursor-pointer mt-1"
            >
              Browse files
            </label>
            <div className="flex flex-wrap">
              {images.map((image, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index}`}
                    style={{ maxWidth: "200px", margin: "10px" }}
                  />
                  <button
                    aria-label="delete"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 text-red-500 bg-transparent border-none cursor-pointer mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.293 4.293a1 1 0 0 1 1.414 1.414L11.414 12l5.293 5.293a1 1 0 1 1-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 12 3.293 6.707a1 1 0 0 1 1.414-1.414L10 10.586l5.293-5.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="title" className="font-bold">
            Personal ID :
          </label>
          <div className="w-full rounded-lg border border-gray-300 p-4">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="image-upload"
              className="custom-file-upload block  mx-auto text-center  text-black rounded-lg p-2 cursor-pointer mt-4"
            >
              Click to Select files
            </label>
            <label
              htmlFor="image-upload"
              className="custom-file-upload block w-36 mx-auto text-center bg-green text-white rounded-lg p-2 cursor-pointer mt-1"
            >
              Browse files
            </label>
            <div className="flex flex-wrap">
              {images.map((image, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Image ${index}`}
                    style={{ maxWidth: "200px", margin: "10px" }}
                  />
                  <button
                    aria-label="delete"
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-0 right-0 text-red-500 bg-transparent border-none cursor-pointer mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.293 4.293a1 1 0 0 1 1.414 1.414L11.414 12l5.293 5.293a1 1 0 1 1-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 12 3.293 6.707a1 1 0 0 1 1.414-1.414L10 10.586l5.293-5.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="title" className="font-bold">
            Property Ownership Documents :
          </label>
          <div className="w-full rounded-lg border border-gray-300 p-4">
            <input
              id="pdf-upload"
              type="file"
              accept=".pdf" // Accepts only PDF files
              multiple
              onChange={handlePdfChange}
              className="hidden"
            />
            <label
              htmlFor="pdf-upload"
              className="custom-file-upload block mx-auto text-center text-black rounded-lg p-2 cursor-pointer mt-4"
            >
              Click to Select PDF files
            </label>
            <label
              htmlFor="pdf-upload"
              className="custom-file-upload block w-36 mx-auto text-center bg-green text-white rounded-lg p-2 cursor-pointer mt-1"
            >
              Browse PDF files
            </label>
            <div className="flex flex-wrap">
              {pdfs.map((pdf, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <embed
                    src={URL.createObjectURL(pdf)}
                    type="application/pdf"
                    className="max-w-200px m-2"
                  />
                  <button
                    aria-label="delete"
                    onClick={() => handleRemovePdf(index)}
                    className="absolute top-0 right-0 text-red-500 bg-transparent border-none cursor-pointer mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.293 4.293a1 1 0 0 1 1.414 1.414L11.414 12l5.293 5.293a1 1 0 1 1-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 12 3.293 6.707a1 1 0 0 1 1.414-1.414L10 10.586l5.293-5.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <Button className="bg-green  mb-3 mt-4 px-6 hover:bg-green/90">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
}
export default Homepage;
