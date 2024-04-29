"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Map from "@/components/Maps/ShowProperty";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
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
  const [showInputs, setShowInputs] = React.useState(false);
  const [category, setCategory] = React.useState("All");
  const [contractType, setcontractType] = React.useState("All");
  const [propType, setPropType] = React.useState("All");
  const [bedrooms, setBedrooms] = React.useState("All");
  const [bathrooms, setBathrooms] = React.useState("All");
  const [currency, setCurrency] = React.useState("All");
  const [location, setLocation] = React.useState("All");
  const [featuredProperties, setFeaturedProperties] = React.useState([]);
  const [searchPerformed, setSearchPerformed] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const propertiesPerPage = 3;

  var filteredProperties;
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePropertyChange = (e) => {
    setPropType(e.target.value);
  };

  const handleContractTypeChange = (e) => {
    setcontractType(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  React.useEffect(() => {
    const fetchTrending = async () => {
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
          setFeaturedProperties(data.data);
        } else {
          console.log("No Properties Found!");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchTrending();
  }, []); // Call fetchTrending only once on component mount

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handlePropTypeChange = (event) => {
    setProType(event.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowInputs(!showInputs); // Toggle input field visibility
  };
  const handleSearch = () => {
    const filteredProperties = featuredProperties.filter((property) =>
      // property.Location.toLowerCase().includes(location.toLowerCase()) ||
      property.PropertyType.toLowerCase().includes(category.toLowerCase())
    );
    setFeaturedProperties(filteredProperties);
    setSearchPerformed(true);
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = featuredProperties.slice(
    indexOfFirstProperty,
    indexOfLastProperty
  );
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
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
              onChange={handlePropertyChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="House">House</MenuItem>
              <MenuItem value="Vehicles">Vehicles</MenuItem>
              <MenuItem value="Land">Land</MenuItem>
            </Select>
          </FormControl>
          {propType === "House" && (
            <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
              <InputLabel>Property Category</InputLabel>
              <Select
                value={category}
                label="Property Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Villa">Villa</MenuItem>
                <MenuItem value="Condominium">Condominium</MenuItem>
                <MenuItem value="Apartment">Apartment</MenuItem>
                <MenuItem value="Office">Office</MenuItem>
                <MenuItem value="Single Familiy">Single Familiy</MenuItem>
              </Select>
            </FormControl>
          )}
          {propType === "Vehicles" && (
            <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
              <InputLabel>Brand</InputLabel>
              <Select
                value={category}
                label="Property Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Benzine">Benzine</MenuItem>
                <MenuItem value="Suzuki">Suzuki</MenuItem>
                <MenuItem value="Scania">Scania</MenuItem>
                <MenuItem value="Renault">Renault</MenuItem>
                <MenuItem value="Jetour">Jetour</MenuItem>
                <MenuItem value="Scannia">Scannia</MenuItem>
                <MenuItem value="Lifan">Lifan</MenuItem>
                <MenuItem value="Chevrolet">Chevrolet</MenuItem>
              </Select>
            </FormControl>
          )}
          {propType === "Vehicles" && (
            <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
              <InputLabel>Fuel Type</InputLabel>
              <Select
                value={category}
                label="Property Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Benzine">Benzine</MenuItem>
                <MenuItem value="Suzuki">Diesel</MenuItem>
                <MenuItem value="Hybrid">Hybrid</MenuItem>
                <MenuItem value="Electric">Electric</MenuItem>
              </Select>
            </FormControl>
          )}
          {propType === "Vehicles" && (
            <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
              <InputLabel>Body Type</InputLabel>
              <Select
                value={category}
                label="Property Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Sedan">Sedan</MenuItem>
                <MenuItem value="Truck">Truck</MenuItem>
                <MenuItem value="Compact">Compact</MenuItem>
                <MenuItem value="Minibus">Minibus</MenuItem>
                <MenuItem value="SUV">SUV</MenuItem>
                <MenuItem value="Pickup">Pickup</MenuItem>
              </Select>
            </FormControl>
          )}
          {propType === "Vehicles" && (
            <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
              <InputLabel>Body Type</InputLabel>
              <Select
                value={category}
                label="Property Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Manual">Manual</MenuItem>
                <MenuItem value="Automatic">Automatic</MenuItem>
                <MenuItem value="Both">Both</MenuItem>
              </Select>
            </FormControl>
          )}
          {propType === "Vehicles" && (
            <div className="mr-2">
              <Input
                type="number"
                id="Year"
                placeholder="Year"
                className="mt-2 w-36"
                // {...register(" Mileage")}
              />
            </div>
          )}

          <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
            <InputLabel>Contract Type</InputLabel>
            <Select
              value={contractType}
              label="Property Type"
              onChange={handleContractTypeChange}
            >
              <MenuItem value="All">
                <>All </>
              </MenuItem>
              <MenuItem value="For Sell">For Sell</MenuItem>
              <MenuItem value="For Rent">For Rent</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">City</InputLabel>
            <Select
              value={location}
              label="City"
              onChange={handleLocationChange}
            >
              <MenuItem value="All">
                <>All</>
              </MenuItem>
              <MenuItem value="Addis Ababa">Addis Ababa</MenuItem>
              <MenuItem value="Adama">Adama</MenuItem>
              <MenuItem value="Bishoftu">Bishoftu</MenuItem>
              <MenuItem value="Sebeta">Sebeta</MenuItem>
              <MenuItem value="Debre Brehan">Debre Brehan</MenuItem>
            </Select>
          </FormControl>
          <div className="mr-2">
            <Input
              type="number"
              id="Max.Price"
              placeholder="Max.Price"
              className="mt-2 w-36"
              // {...register(" Mileage")}
            />
          </div>
          <div className="mr-2">
            <Input
              type="number"
              id="Min.Price"
              placeholder="Min.Price"
              className="mt-2 w-36"
              // {...register(" Mileage")}
            />
          </div>
          {(propType === "House" || propType === "Land") && (
            <div className="mr-2">
              <Input
                type="number"
                id="Area"
                placeholder="Area in m2"
                className="mt-2 w-32"
                // {...register(" Mileage")}
              />
            </div>
          )}
          {propType === "House" && (
            <div className="mr-2">
              <Input
                type="number"
                id="Bedrooms"
                placeholder="Bedrooms"
                className="mt-2 w-36"
                // {...register(" Mileage")}
              />
            </div>
          )}
          {propType === "House" && (
            <div className="mr-2">
              <Input
                type="number"
                id="Bathrooms"
                placeholder="Bathrooms"
                className="mt-2 w-36"
                // {...register(" Mileage")}
              />
            </div>
          )}

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel>Curreny</InputLabel>
            <Select
              value={currency}
              label="Currency"
              onChange={handleCurrencyChange}
            >
              <MenuItem value="All">
                <>All</>
              </MenuItem>
              <MenuItem value="ETB">ETB</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
            </Select>
          </FormControl>
          <div className="flex justify-center items-center mt-2 md:mt-0">
            <button
              className="flex items-center justify-center bg-green rounded h-10 pr-2 ml-2 hover:bg-green/90"
              onClick={handleSearch}
            >
              <span className="ml-2 text-white font-bold hover:text-black">
                Search
              </span>
            </button>
            <button
              className="flex items-center justify-center rounded h-10 pr-2 ml-2 hover:bg-green"
              style={btnStyle}
            >
              <span className="ml-2 text-black font-bold text-center hover:text-white">
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
              {featuredProperties.length}
              <span> Results Found</span>
            </h1>
          )}

          {/* <div className="flex items-center">
            <span className="mr-1 inline mb-1">sort by:</span>
            <div className="inline ">
              <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                <InputLabel id="demo-select-small-label">
                  Default Order
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Location"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Price</MenuItem>
                  <MenuItem value={20}>Bedrooms</MenuItem>
                  <MenuItem value={30}>Bathrooms</MenuItem>
                  <MenuItem value={30}>Area</MenuItem>
                  <MenuItem value={30}>Location</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div> */}
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
            count={Math.ceil(featuredProperties.length / propertiesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
}
