"use client";
import React from "react";
import { BiEditAlt } from "react-icons/bi";
// import { useMutation, useQuery, useQueryClient } from "react-query";
// import { getUser, getUsers, updateUser } from "../dbHelper/helper";

const EmpUpdate = ({ formId, formData, setFormData }) => {
  //   const queryClient = useQueryClient();
  //   const { isLoading, isError, data, error } = useQuery(
  //     ["employees", formId],
  //     () => getUser(formId)
  //   );

  //   const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
  //     onSuccess: async (data) => {
  //       // queryClient.setQueryData('users', (old) => [data]);
  //       // console.log(`data updated`);
  //       queryClient.prefetchQuery("employees", getUsers);
  //     },
  //   });

  //   if (isLoading) return <div>Loading !</div>;
  //   if (isError) return <div>Error ! </div>;

  //   const {
  //     firstname,
  //     lastname,
  //     phone,
  //     address,
  //     age,
  //     gender,
  //     jobtype,
  //     experiance,
  //   } = data;

  const handleSubmit = async (e) => {
    e.preventDefault();
    //     let updated = Object.assign({}, data);
    console.log("updated");
    //     await UpdateMutation.mutate(updated);
  };

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
      <div className="input-type">
        <input
          type="text"
          name="firstname"
          // defaultValue={firstname}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="firstname"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="lastname"
          //defaultValue={lastname}
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
          // defaultValue={phone}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="phone"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="address"
          //defaultValue={address}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="address"
        />
      </div>
      <div className="input-type">
        <input
          type="number"
          name="age"
          //defaultValue={age}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="age"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="gender"
          // defaultValue={gender}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="gender"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="jobtype"
          //defaultValue={jobtype}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="jobtype"
        />
      </div>
      <div className="input-type">
        <input
          type="text"
          name="expriance"
          //defaultValue={experiance}
          onChange={setFormData}
          className="border w-full px-5 py-2 focus:outline-none rounded-md"
          placeholder="experiance"
        />
      </div>
      <button
        className="flex justify-center items-center text-md w-2/6
                   bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-300
                   hover:border-gray-500 hover:text-black"
      >
        Update{" "}
        <span className="px-1">
          <BiEditAlt size={24} />
        </span>
      </button>
    </form>
  );
};

export default EmpUpdate;
