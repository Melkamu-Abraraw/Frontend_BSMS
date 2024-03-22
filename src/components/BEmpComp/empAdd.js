        "use client";
import "../../app/globals.css";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { useReducer } from "react";
import Success from "./successMsg";
import Bug from "./errorChecker";
import { FaCamera } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loadProfile } from "@/redux/features/auth-slice";

const EmpAdd = ({ formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
    dispatch(loadProfile(imageUrl));
    setFile(file);
  };

  return (
    <form className="grid lg:grid-cols-1 w-60 gap-4" onSubmit={handleSubmit}>
      <label htmlFor="upload-input" className="relative mx-auto">
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="sr-only"
        />
        <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer">
          {image ? (
            <img
              src={image}
              alt="Uploaded"
              className="w-full h-full rounded-full"
            />
          ) : (
            <div className="items-center justify-center">
              <FaCamera className="text-gray-500 w-12 h-12" />
              <p>Emp Id</p>
            </div>
          )}
        </div>
      </label>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Emp FirstName..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Emp LastName..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="phone"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Emp phone..."
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="date"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Emp dob..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="experiance"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Emp Experiance..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="Gender"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Job-seeker gender..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="jobtype"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Emp jobtype..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="skill"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Emp Skill..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="description"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Emp Description..."
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="flex justify-center text-md w-2/6
                         bg-red-400 font-bold text-black px-12 py-2 border 
                         rounded-md hover:bg-gray-500 hover:border-green-500 hover:text-white"
        >
          Create{" "}
          <span className="px-0">
            <BiPlus size={24} />
          </span>
        </button>
      </div>
    </form>
  );
};

export default EmpAdd;
