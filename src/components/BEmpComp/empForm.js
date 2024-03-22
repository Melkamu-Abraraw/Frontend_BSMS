"use client";
import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import EmpAdd from "./empAdd";
import EmpUpdate from "./empUpdate";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const EmpForm = () => {
  const f = true;
  return (
    <div className="container mx-auto py-5">
      {f ? <EmpAdd /> : <EmpUpdate />}
    </div>
  );
};
export default EmpForm;
