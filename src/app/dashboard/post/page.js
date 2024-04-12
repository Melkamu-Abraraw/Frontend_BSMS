"use client";
import * as yup from "yup";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Map from "@/components/Maps/Map";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Homepage() {
  const [propertyType, setPropertyType] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [location, setLocation] = useState(null);
  const [images, setImages] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const schema = yup.object().shape({
    title: yup.string().required("title is required"),
    description: yup.string().required("Description is required"),
    PropretyType: yup.string().required("Proprety Type is required"),
    PropertyCategory: yup.string().required("Property Category is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    PropretyType: "",
  });
  const handleLocationChange = ({ lat, lng }) => {
    setLocation({ lat, lng });
  };
  const onSubmit = async (formData) => {
    const propertyType = formData.PropretyType;
  };
  const colors = [
    { name: "Red", value: "#FF0000" },
    { name: "Green", value: "#00FF00" },
    { name: "Blue", value: "#0000FF" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Purple", value: "#800080" },
    { name: "Black", value: "#000" },
    { name: "White", value: "#FFF" },
    { name: "Mix", value: "    #4F1396" },
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

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...selectedImages]);
  };
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };
  const handlePropertyTypeChange = (value) => {
    setPropertyType(value);
  };
  
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full bg-white shadow-2xl rounded-lg px-8 pt-6 "
      >
        <div className="mb-2">
          <Label htmlFor="title" className="font-bold">
            Property Title :
          </Label>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            {...register("title")}
          />
        </div>
        <div className="mb-2">
          <Label htmlFor="location" className="font-bold">
            Property Location :
          </Label>
          <Map height="300px" width="100%" onClick={handleLocationChange} />
        </div>
        <div className="mb-3">
          <Label htmlFor="location" className="font-bold">
            Property Description :
          </Label>
          <Textarea
            placeholder="Type your property Description here."
            className="mt-3"
            {...register("description")}
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div>
            <div className="mb-4">
              <Label htmlFor="type" className="font-bold">
                Proprety Type :
              </Label>
            </div>
            <select
              {...register("PropretyType")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="House">House</option>
              <option value="Vehicle">Vehicle</option>
              <option value="Land">Land</option>
            </select>
          </div>
          {propertyType === "House" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Property Category :
                </Label>
              </div>
              <select
              {...register(" PropertyCategory ")}
              className="block appearance-none w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="Villa">Villa</option>
              <option value="Condominium">Condominium</option>
              <option value="Apartment">Apartment</option>
              <option value="Office">Office</option>
              <option value="Single Familiy">Single Familiy</option>
            </select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Brand :
                </Label>
              </div>
              <select
              {...register("Brand")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="Toyota">Toyota</option>
              <option value="Suzuki">Suzuki</option>
              <option value="Scania">Scania</option>
              <option value="Renault">Renault</option>
              <option value="Jetour">Jetour</option>
              <option value="Scania">Scannia</option>
              <option value="Lifan">Lifan</option>
              <option value="Chevrolet">Chevrolet</option>
            </select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Model :
                </Label>
              </div>
              <select
              {...register("Model")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="Corolla">Corolla</option>
              <option value="Yaris">Yaris</option>
              <option value="Hilux">Hilux</option>
              <option value="Platz">Platz</option>
              <option value="Rava4">Rava4</option>
              <option value="Vitz">Vitz</option>
              <option value="Highlander">Highlander</option>
            </select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Transmission :
                </Label>
              </div>
             
              <select
              {...register("Transmission")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Body Type :
                </Label>
              </div>
              <select
              {...register(" BodyType")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="Sedan">Sedan</option>
              <option value="Truck">Truck</option>
              <option value="Compact">Compact</option>
              <option value="Minibus">Minibus</option>
              <option value="SUV">SUV</option>
              <option value="Pickup">Pickup</option>
            </select>
            </div>
          )}
          {propertyType === "Vehicle" && (
            <div>
              <div className="mb-4">
                <Label htmlFor="type" className="font-bold">
                  Fuel Type :
                </Label>
              </div>
              <select
              {...register(" FuelType")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="Benzine">Benzine</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Electric">Electric</option>
            </select>
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
            <select
              {...register(" ContractType")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
             
            </select>
          </div>
          <div>
            <div className="mb-4">
              <Label htmlFor="type" className="font-bold">
                Currency :
              </Label>
            </div>
            <select
              {...register(" Currency")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="USD">USD</option>
              <option value="ETB">ETB</option>
             
            </select>
          </div>
          <div>
            <div className="mb-4">
              <Label htmlFor="type" className="font-bold">
                City :
              </Label>
            </div>
            <select
              {...register(" City")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="Addis Abeba">Addis Abeba</option>
              <option value="Adama">Adama</option>
              <option value="Jimma">Jimma</option>
              <option value="Ambo">Ambo</option>
             
            </select>
          </div>
          <div>
            <div className="mb-4">
              <Label htmlFor="type" className="font-bold">
                Price Category :
              </Label>
            </div>
      
            <select
              {...register(" PriceCategory")}
              className="block appearance-none marker w-[180px] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              onChange={(e) => handlePropertyTypeChange(e.target.value)}
            >
              <option value="" disabled>
                Select option
              </option>
              <option value="Negotiable">Negotiable</option>
              <option value="Adama">Slightliy Negotiable</option>
              <option value="Jimma">Fixed</option>
            </select>
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
