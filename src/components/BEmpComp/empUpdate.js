"use client";
import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { FaCamera } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loadProfile } from "@/redux/features/auth-slice";

const EmpUpdate = ({ formId, formData, setFormData }) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("updated");
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
              <span className="px-2 items-center">Edit </span>
            </div>
          )}
        </div>
      </label>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          // defaultValue={FirstName}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="firstname"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          //defaultValue={LastName}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="lastname"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="phone"
          onChange={setFormData}
          // defaultValue={phoneNumber}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="phone"
        />
      </div>
      <div className="input-type">
        <input
          type="date"
          name="dob"
          //defaultValue={DOB}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="dob"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="experience"
          //defaultValue={Experience}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="experience"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="gender"
          // defaultValue={Gender}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="gender"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="jobtype"
          //defaultValue={JobType}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="jobtype"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="skill"
          //defaultValue={Skill}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="skill"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="skill"
          //defaultValue={Description}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="description"
        />
      </div>
      <div className="flex justify-center">
        <button
          className="flex justify-center items-center text-md w-2/6
                   bg-blue text-white px-12 py-2 border rounded-md hover:bg-gray-300
                   hover:border-gray-500 hover:text-black"
        >
          Update{" "}
          <span className="px-1">
            <BiEditAlt size={24} />
          </span>
        </button>
      </div>
    </form>
  );
};

export default EmpUpdate;
