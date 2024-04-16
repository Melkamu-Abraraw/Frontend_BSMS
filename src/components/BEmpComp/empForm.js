"use client";
import React, { useReducer, useState } from "react";
import { useSelector } from "react-redux";
import EmpUpdate from "./empUpdate";
import EmpAdd from "./empAdd";

// const formReducer = (state, event) => {
//   return {
//     ...state,
//     [event.target.name]: event.target.value,
//   };
// };

const EmpForm = () => {
  const [formData, setFormData] = useState({});
  const formId = useSelector((state) => state.app.client.formId);
  return (
    <div className="container mx-auto py-5">
      {formId ? (
        <EmpUpdate
          formId={formId}
          formData={formData}
          setFormData={setFormData}
        />
      ) : (
        <EmpAdd formData={formData} setFormData={setFormData} />
      )}
    </div>
  );
};
export default EmpForm;
