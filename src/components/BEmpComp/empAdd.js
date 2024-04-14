// "use client";
// import "../../app/globals.css";
// import React, { useState } from "react";
// import { BiPlus, BiX } from "react-icons/bi";
// import TextField from "@mui/material/TextField";
// import { Grid } from "@mui/material";
// import { useMutation, useQueryClient } from "react-query";
// import { createEmployee, getEmployees } from "@/data/empdata/lib/EmpHelper";
// import { useDispatch } from "react-redux";
// import { loadProfile } from "@/redux/empRedux/reducer";
// import Bug from "./errorChecker";
// import Success from "./successMsg";

// const EmpAdd = ({ formData, setFormData }) => {
//   //quers
//   const queryClient = useQueryClient();
//   const empAddMutation = useMutation(createEmployee, {
//     onSuccess: () => {
//       console.log("Successfuly Inserted");
//       queryClient.prefetchQuery("workers", getEmployees);
//       window.location.reload();
//     },
//   });

//   //states
//   const dispatch = useDispatch();
//   const [empImage, setEmpImage] = useState(null);
//   const [relImage, setRelImage] = useState(null);
//   const [file, setFile] = useState(null);

//   //handel and upload employe image
//   const handleEmpImage = (e) => {
//     const file = e.target.files[0];
//     const imageUrl = URL.createObjectURL(file);
//     setEmpImage(imageUrl);
//     dispatch(loadProfile(imageUrl));
//     setFile(file);
//   };

//   //handel and upload Relative image
//   const handleRelImage = (e) => {
//     const file = e.target.files[0];
//     const imageUrl = URL.createObjectURL(file);
//     setRelImage(imageUrl);
//     dispatch(loadProfile(imageUrl));
//     setFile(file);
//   };

//   //submit form
//   const handleAddSubmit = async (e) => {
//     const formDataToSend = new FormData();
//     e.preventDefault();
//     if (Object.keys(formData).length == 0)
//       return console.log("You Don't Have any Data");
// let {
//   // empImage,
//   FullName,
//   Age,
//   Gender,
//   Phone,
//   Address,
//   JobType,
//   Experience,
//   // relImage,
//   RelativeName,
//   RelativePhone,
//   RelativeAddress,
//   Relationship,
// } = formData;

//     const empId = formDataToSend.append("empImage", file);
//     const relId = formDataToSend.append("relImage", file);
//     const addModel = {
//       // EmpAvator: `${empId}`,
//       FullName,
//       Age,
//       Gender,
//       Phone,
//       Address,
//       JobType,
//       Experience,
//       // RelAvator: `${relId}`,
//       RelativeName,
//       RelativePhone,
//       RelativeAddress,
//       Relationship,
//     };
//     empAddMutation.mutate(addModel);
//     console.log(addModel);
//   };

//   if (empAddMutation.isLoading) return <div>LOADING...</div>;
//   if (empAddMutation.isError)
//     return <Bug message={empAddMutation.error.message}></Bug>;
//   if (empAddMutation.isSuccess)
//     return (
//       <Success message={"Congratulation! Emp Added Successfuly"}></Success>
//     );

//   return (
//     <>
//       <form
//         className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white py-5 px-5 border border-gray-200 rounded-md"
//         onSubmit={handleAddSubmit}
//       >
//         <section>
//           <h1 className="text-xl  font-semibold mb-4 text-center">
//             Add Workers Information
//           </h1>
//           <label
//             htmlFor="emp-upload-input"
//             className="block mx-auto md:mx-0  md:mb-5"
//           >
//             <input
//               id="emp-upload-input"
//               type="file"
//               accept="empImage/*"
//               onChange={handleEmpImage}
//               className="sr-only"
//             />
//             <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer mx-auto">
//               {empImage ? (
//                 <img
//                   src={empImage}
//                   alt="Uploaded"
//                   className="w-full h-full rounded-full"
//                 />
//               ) : (
//                 <p className="text-gray-500">Emp_ID</p>
//               )}
//             </div>
//           </label>

//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="FullName"
//                 onChange={setFormData}
//                 label="Employee FullName"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="number"
//                 name="Age"
//                 onChange={setFormData}
//                 label="Employee Age"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="Gender"
//                 onChange={setFormData}
//                 label="Employee Gender"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="Phone"
//                 onChange={setFormData}
//                 label="Employee Phone"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="Address"
//                 onChange={setFormData}
//                 label="Employee Address"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="JobType"
//                 onChange={setFormData}
//                 label="Employee JobType"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="Experience"
//                 onChange={setFormData}
//                 label="Employee Experience"
//               />
//             </Grid>
//           </Grid>
//         </section>
//         <section>
//           <h1 className="text-xl font-semibold mb-4 md:text-center">
//             Add Relatives Information
//           </h1>
//           <label
//             htmlFor="rel-upload-input"
//             className="block mx-auto md:mx-0  md:mb-5"
//           >
//             <input
//               id="rel-upload-input"
//               type="file"
//               accept="relImage/*"
//               onChange={handleRelImage}
//               className="sr-only"
//             />
//             <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer mx-auto">
//               {relImage ? (
//                 <img
//                   src={relImage}
//                   alt="Uploaded"
//                   className="w-full h-full rounded-full"
//                 />
//               ) : (
//                 <p className="text-gray-500">Rel_ID</p>
//               )}
//             </div>
//           </label>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="RelativeName"
//                 onChange={setFormData}
//                 label="Relative FullName"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="RelativePhone"
//                 onChange={setFormData}
//                 label="Relative PhoneNumber"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="RelativeAddress"
//                 onChange={setFormData}
//                 label="Relative Address"
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 type="text"
//                 name="Relationship"
//                 onChange={setFormData}
//                 label="There Relationship "
//               />
//             </Grid>
//           </Grid>
//           <div className="flex gap-5 justify-end mt-20">
//             <button
//               type="submit"
//               className="flex justify-center  text-md h-30 w-20
//                          bg-red-300 font-bold text-black px-12 py-2 border
//                          rounded-md hover:bg-gray-600 hover:border-green-500 hover:text-white"
//             >
//               Create{" "}
//               <span className="px-1">
//                 <BiPlus size={24} />
//               </span>
//             </button>
//           </div>
//         </section>
//       </form>
//     </>
//   );
// };

// export default EmpAdd;

// "use client";
// import "../../app/globals.css";
// import React, { useState } from "react";
// import { BiPlus, BiX } from "react-icons/bi";
// import TextField from "@mui/material/TextField";
// import { Grid } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { useMutation, useQueryClient } from "react-query";
// import { createEmployee, getEmployees } from "@/lib/emphelper";
// import { loadProfile } from "@/redux/features/auth-slice";
// import Success from "./successMsg";

// const EmpAdd = ({ formData, setFormData }) => {
//   const queryClient = useQueryClient();
//   const dispatch = useDispatch();

//   const empAddMutation = useMutation(createEmployee, {
//     onSuccess: () => {
//       console.log("Successfuly Inserted");
//       queryClient.prefetchQuery("workers", getEmployees);
//       window.location.reload();
//     },
//   });

//   const [empImageFile, setEmpImageFile] = useState(null);
//   const [relImageFile, setRelImageFile] = useState(null);
//   const [file, setFile] = useState(null);

//   const handleEmpImage = (e) => {
//     const file = e.target.files[0];
//     const imageUrl = URL.createObjectURL(file);
//     setEmpImageFile(imageUrl);
//     dispatch(loadProfile(imageUrl));
//     setFile(file);
//   };

//   const handleRelImage = (e) => {
//     const file = e.target.files[0];
//     const imageUrl = URL.createObjectURL(file);
//     setRelImageFile(imageUrl);
//     dispatch(loadProfile(imageUrl));
//     setFile(file);
//   };
//   const imageUrl = useSelector(
//     (state) => state.authForProfileImageReducer.value.url
//   );
//   const baseUrl = useSelector(
//     (state) => state.authForProfileImageReducer.value.baseUrl
//   );

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();
//     if (Object.keys(formData).length == 0)
//       return console.log("You Don't Have any Data");
//     const imageData = new FormData();
//     let {
//       FullName,
//       Age,
//       Gender,
//       Phone,
//       Address,
//       JobType,
//       Experience,
//       RelativeName,
//       RelativePhone,
//       RelativeAddress,
//       Relationship,
//     } = formData;

//     const empImageFile = imageData.append("images", file);
//     const relImageFile = imageData.append("images", file);

//     const model = {
//       EmpAvator: empImageFile,
//       FullName,
//       Age,
//       Gender,
//       Phone,
//       Address,
//       JobType,
//       Experience,
//       RelAvator: relImageFile,
//       RelativeName,
//       RelativePhone,
//       RelativeAddress,
//       Relationship,
//     };
//     empAddMutation.mutate(model);
//   };
//   if (empAddMutation.isSuccess)
//     return (
//       <Success message={"Congratulation! Emp Added Successfuly"}></Success>
//     );

"use client";
import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import { createEmployee, getEmployees } from "@/lib/emphelper";
import { loadProfile } from "@/redux/features/auth-slice";
import Success from "./successMsg";

const EmpAdd = ({ formData, setFormData }) => {
  const [empImageFile, setEmpImageFile] = useState(null);
  const [relImageFile, setRelImageFile] = useState(null);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const handleEmpImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setEmpImageFile(imageUrl);
      dispatch(loadProfile(imageUrl));
      setFormData({ ...formData, empImageFile: file });
    }
  };

  const handleRelImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setRelImageFile(imageUrl);
      dispatch(loadProfile(imageUrl));
      setFormData({ ...formData, relImageFile: file });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const empAddMutation = useMutation(createEmployee, {
    onSuccess: () => {
      console.log("Successfully Inserted");
      queryClient.prefetchQuery("workers", getEmployees);
      window.location.reload();
    },
    onError: (error) => {
      console.error("Error inserting employee:", error);
    },
  });
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      console.log("You Don't Have any Data");
      return;
    }
    const imageData = new FormData();
    const { empImageFile, relImageFile, ...restFormData } = formData;

    imageData.append("EmpAvator", empImageFile);
    imageData.append("RelAvator", relImageFile);

    const model = { ...restFormData };
    empAddMutation.mutate(model);
  };

  if (empAddMutation.isSuccess) {
    return <Success message={"Congratulations! Employee added successfully"} />;
  }
  return (
    <>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white py-5 px-5 border border-gray-200 rounded-md"
        onSubmit={handleAddSubmit}
      >
        <section>
          <h1 className="text-xl  font-semibold mb-4 text-center">
            Add Workers Information
          </h1>

          <label
            htmlFor="emp-upload-input"
            className="block mx-auto md:mx-0  md:mb-5"
          >
            <input
              id="emp-upload-input"
              type="file"
              name="EmpAvator"
              accept="image/*"
              onChange={handleEmpImage}
              className="sr-only"
            />
            <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer mx-auto">
              {empImageFile ? (
                <img
                  src={empImageFile}
                  alt="Uploaded"
                  className="w-full h-full rounded-full"
                />
              ) : (
                <p className="text-gray-500">Emp_ID</p>
              )}
            </div>
          </label>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="FullName"
                onChange={handleInputChange}
                label="Employee FullName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="number"
                name="Age"
                onChange={handleInputChange}
                label="Employee Age"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="Gender"
                onChange={handleInputChange}
                label="Employee Gender"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="Phone"
                onChange={handleInputChange}
                label="Employee Phone"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="Address"
                onChange={handleInputChange}
                label="Employee Address"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="JobType"
                onChange={handleInputChange}
                label="Employee JobType"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="Experience"
                onChange={handleInputChange}
                label="Employee Experience"
              />
            </Grid>
          </Grid>
        </section>
        <section>
          <h1 className="text-xl font-semibold mb-4 md:text-center">
            Add Relatives Information
          </h1>
          <label
            htmlFor="rel-upload-input"
            className="block mx-auto md:mx-0  md:mb-5"
          >
            <input
              id="rel-upload-input"
              type="file"
              name="RelAvator"
              accept="image/*"
              onChange={handleRelImage}
              className="sr-only"
            />
            <div className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer mx-auto">
              {relImageFile ? (
                <img
                  src={relImageFile}
                  alt="Uploaded"
                  className="w-full h-full rounded-full"
                />
              ) : (
                <p className="text-gray-500">Rel_ID</p>
              )}
            </div>
          </label>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="RelativeName"
                onChange={handleInputChange}
                label="Relative FullName"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="RelativePhone"
                onChange={handleInputChange}
                label="Relative PhoneNumber"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="RelativeAddress"
                onChange={handleInputChange}
                label="Relative Address"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                name="Relationship"
                onChange={handleInputChange}
                label="There Relationship "
              />
            </Grid>
          </Grid>
          <div className="flex gap-5 justify-end mt-20">
            <button
              type="submit"
              className="flex justify-center  text-md h-30 w-20
                         bg-red-300 font-bold text-black px-12 py-2 border
                         rounded-md hover:bg-gray-600 hover:border-green-500 hover:text-white"
            >
              Create{" "}
              <span className="px-1">
                <BiPlus size={24} />
              </span>
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

export default EmpAdd;
