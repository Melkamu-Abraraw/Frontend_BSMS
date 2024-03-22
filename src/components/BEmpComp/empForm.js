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
  const f = false;
  // const [formData, setFormData] = useReducer(formReducer, {});
  // const formId = useSelector((state) => state.app.client.formId);
  return (
    <div className="container mx-auto py-5">
      {/* {formId
        ? EmpUpdate({ formId, formData, setFormData })
        : EmpAdd({ formData, setFormData })} */}
      {f ? <EmpAdd /> : <EmpUpdate />}
      {/* <EmpAdd />
       <EmpUpdate /> */}
    </div>
  );
};
export default EmpForm;
