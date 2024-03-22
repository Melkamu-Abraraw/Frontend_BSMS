"use client";
import "../../app/globals.css";
import React, { useState } from "react";
import { BiCheck, BiUserPlus, BiX } from "react-icons/bi";
import EmpTable from "@/components/BEmpComp/empTable";
import EmpForm from "@/components/BEmpComp/empForm";

const EmpHome = () => {
  const [visible, setVisisble] = useState(false);

  const handler = () => {
    setVisisble(!visible);
  };
  return (
    <div className="py-5 px-5">
      <h1
        className="text-xl md:text-xl text-center font-bold py-2 text-gray-800"
        style={{ fontFamily: "initial" }}
      >
        Job-Seekers Management Page
      </h1>

      <div className="flex items-center gap-3 container mx-auto flex justify-end py-2">
        <button
          onClick={handler}
          className="flex bg-indigo-400 text-white px-2 py-2 border font-bold rounded-md hover:bg-gray-200 hover:border-indigo-500 hover:text-black"
        >
          Add{" "}
          <span className="px-1">
            <BiUserPlus size={23} />
          </span>
        </button>
      </div>

      {visible ? <EmpForm /> : <></>}

      <div>
        <EmpTable />
      </div>
    </div>
  );
};

export default EmpHome;
