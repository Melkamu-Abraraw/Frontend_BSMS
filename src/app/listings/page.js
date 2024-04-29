"use client";
import * as React from "react";
import * as yup from "yup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Map from "@/components/Maps/ShowProperty";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Card from "@/components/propertyList/Card";
import Pagination from "@mui/material/Pagination";

export default function SelectSmall() {
  const btnStyle = {
    color: "black",
    border: "2px solid rgb(0, 167, 111)",
    marginRight: "6px",
    textTransform: "capitalize",
    fontWeight: "bold",
  };

  const [propType, setPropType] = React.useState("All");
  const [contractType, setcontractType] = React.useState("All");
  const [city, setcity] = React.useState("All");
  const [price, setPrice] = React.useState(null);
  const [properties, setProperties] = React.useState([]);
  const [searchPerformed, setSearchPerformed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const propertiesPerPage = 3;

  const handleContractTypeChange = (event) => {
    setcontractType(event.target.value);
  };
  const handleCityChange = (e) => {
    setcity(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handlePropTypeChange = (e) => {
    setPropType(e.target.value);
  };
  const handleClear = (e) => {
    setPrice(null);
    setPropType("All");
    setcity("All");
    setcontractType("All");
  };

  const propertySchema = yup.object().shape({
    Price: yup
      .number()
      .typeError("Price required and must be a number")
      .required("Price is required")
      .test(
        "is-positive",
        "Price must be a positive number",
        (value) => parseFloat(value) > 0
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(propertySchema),
  });

  React.useEffect(() => {
    const fetchAllProperty = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/Allproperty/all`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.data) {
          setProperties(data.data);
        } else {
          console.log("No Properties Found!");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchAllProperty();
  }, []);

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const onSubmit = (data) => {
    const filteredProperties = properties.filter((property) => {
      let score = 0;
      if (propType !== "All" && property.propertyType === propType) {
        score += 1;
      }
      if (contractType !== "All" && property.contractType === contractType) {
        score += 1;
      }
      if (city !== "All" && property.city === city) {
        score += 1;
      }
      if (
        price !== null &&
        Math.abs(property.price - parseFloat(price)) < 1000
      ) {
        score += 1;
      }
      return score >= 2;
    });

    setProperties(filteredProperties);
    setSearchPerformed(true);
  };

  return (
    <div>
      <div className="mt-20">
        <Map height={400} width={1100} />
      </div>
      <div className="bg-white flex flex-col md:flex-row justify-center items-center mx-28 ">
        <div className="flex flex-wrap justify-center md:justify-start">
          <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
            <InputLabel>Property Type</InputLabel>
            <Select
              value={propType}
              label="Property Category"
              onChange={handlePropTypeChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Vehicles">Vehicles</MenuItem>
              <MenuItem value="Land">Land</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
            <InputLabel>Contract Type</InputLabel>
            <Select
              value={contractType}
              label="Contract Type"
              onChange={handleContractTypeChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="For Rent">For Rent</MenuItem>
              <MenuItem value="For Sale">For Sale</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
            <InputLabel>City</InputLabel>
            <Select value={city} label="City" onChange={handleCityChange}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Addis Abeba">Addis Abeba</MenuItem>
              <MenuItem value="Adama">Adama</MenuItem>
              <MenuItem value="Jimma">Jimma</MenuItem>
              <MenuItem value="Ambo">Ambo</MenuItem>
            </Select>
          </FormControl>
          <div>
            <Input
              type="number"
              value={price}
              id="price"
              placeholder="Price"
              className="mt-2 w-44"
              onChange={handlePriceChange}
              {...register("Price")}
            />
            <p
              className={`p-1 text-red-600 text-sm ${
                errors.Price ? "" : "hidden"
              } absolute`}
            >
              {errors.Price?.message}
            </p>
          </div>
          <div className="flex justify-center items-center  md:mt-0 ">
            <button
              className="flex items-center justify-center bg-green rounded h-10 pr-2 ml-2 hover:bg-green/70"
              onClick={handleSubmit(onSubmit)}
            >
              <span className="ml-2 text-white font-bold ">Search</span>
            </button>
            <button
              className="flex items-center justify-center rounded h-10 pr-2 ml-2 hover:bg-green/85"
              style={btnStyle}
              onClick={handleClear}
            >
              <span className="ml-2 text-black font-bold text-center hover:text-white ">
                Clear
              </span>
            </button>
          </div>
        </div>
      </div>
      <section className="px-24 mt-5 ">
        <div className="flex flex-row justify-between items-center">
          {searchPerformed && (
            <h1 className="font-normal text-2xl ml-6">Search Result</h1>
          )}
        </div>
        <div className="flex flex-row justify-between items-center mt-10">
          {searchPerformed && (
            <h1 className="font-semibold text-1xl ml-6">
              {properties.length}
              <span> Results Found</span>
            </h1>
          )}
        </div>
      </section>
      <section className="px-24  mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-12">
          {currentProperties.map((property) => (
            <Card key={property.id} property={property} />
          ))}
        </div>
        <div className="flex justify-end">
          <Pagination
            count={Math.ceil(properties.length / propertiesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
}
