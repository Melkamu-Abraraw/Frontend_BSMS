"use client";
import "../../app/globals.css";
import React from "react";
import { BiPlus } from "react-icons/bi";
import { useReducer } from "react";
import Success from "./successMsg";
import Bug from "./errorChecker";

const EmpAdd = ({ formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (Object.keys(formData).length == 0)
    //   return console.log("no data exists!");
    console.log(formData);
  };
  // if (Object.keys(formData).length > 0)
  //   return <Success message={"Data Added Successfuly!"} />;
  // if (Object.keys(formData).length == 0)
  //   return <Bug message={"Data Not Added!"} />;

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Job-seeker FirstName..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Job-seeker LastName..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="phone"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Job-seeker phone..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="address"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Job-seeker address..."
        />
      </div>
      <div className="input-type">
        <input
          type="number"
          name="age"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Job-seeker age..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="gender"
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
          placeholder="Enter Job-seeker jobtype..."
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="experiance"
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="Enter Job-seeker expriance..."
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
