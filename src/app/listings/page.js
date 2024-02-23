"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Map from "@/components/Maps/Map";
import ViewListIcon from "@mui/icons-material/ViewList";
import AppsIcon from "@mui/icons-material/Apps";
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
  const [age, setAge] = React.useState("");
  const [showInputs, setShowInputs] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    setShowInputs(!showInputs); // Toggle input field visibility
  };
  return (
    <div>
      <Map />
      <div className="bg-white flex flex-row  justify-center ">
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Location</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Location"
            onChange={handleChange}
          >
            <MenuItem value={50}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={10}>Addis Ababa</MenuItem>
            <MenuItem value={20}>Adema</MenuItem>
            <MenuItem value={30}>Bishoftu</MenuItem>
            <MenuItem value={30}>Sebeta</MenuItem>
            <MenuItem value={30}>Debre Brehan</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
          <InputLabel id="demo-select-small-label">Property Type</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Property Type"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>All Type</em>
            </MenuItem>
            <MenuItem value={20}>For Sale</MenuItem>
            <MenuItem value={30}>For Rent</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 175 }} size="small">
          <InputLabel id="demo-select-small-label">
            Property Category
          </InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Property Category"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>All Properties</em>
            </MenuItem>
            <MenuItem value={20}>House</MenuItem>
            <MenuItem value={30}>Vehicles</MenuItem>
            <MenuItem value={30}>Land</MenuItem>
            <MenuItem value={30}>Job</MenuItem>
          </Select>
        </FormControl>
        <div className="mr-2">
          <TextField
            id="outlined-basic"
            label="Min.Price"
            variant="outlined"
            size="small"
            margin="dense"
            style={{ width: 110 }}
          />
        </div>
        <div className="mr-2">
          <TextField
            id="outlined-basic"
            label="Max.Price"
            variant="outlined"
            size="small"
            margin="dense"
            style={{ width: 110 }}
          />
        </div>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Curreny</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={age}
            label="Currency"
            onChange={handleChange}
          >
            <MenuItem value={50}>
              <em>All</em>
            </MenuItem>
            <MenuItem value={10}>ETB</MenuItem>
            <MenuItem value={20}>USD</MenuItem>
          </Select>
        </FormControl>

        <button
          className="flex items-center justify-center bg-green rounded h-10 mt-2 pr-2 mr-2 ml-2"
          onClick={handleButtonClick}
        >
          <span className="ml-2  text-white  hover:text-white hover:font-bold">
            Advanced
          </span>
        </button>
        <button className="flex items-center justify-center bg-green rounded h-10 mt-2 pr-2  ">
          <span className="ml-2  text-white font-bold hover:text-white">
            Search
          </span>
        </button>
        <button
          className="flex items-center justify-center rounded h-10 mt-2 pr-2 ml-2 hover:bg-green "
          style={btnStyle}
        >
          <span className="ml-2  text-black font-bold text-center hover:text-white">
            Clear
          </span>
        </button>
      </div>
      {showInputs && (
        <div
          className={`bg-white flex flex-row justify-start ml-32 overflow-hidden transition-height duration-500 ease-in-out
${showInputs ? "max-h-48" : "max-h-0"}`}
          style={{ overflow: "hidden" }}
        >
          <div className="mr-2">
            <TextField
              id="outlined-basic"
              label="Bedrooms"
              variant="outlined"
              size="small"
              margin="dense"
              style={{ width: 110 }}
              className={`bg-white flex flex-row justify-start ml-48 overflow-hidden transition-max-height duration-500 ${
                showInputs ? "max-h-48" : "max-h-0"
              }`}
            />
          </div>
          <div className="mr-2">
            <TextField
              id="outlined-basic"
              label="Bedrooms"
              variant="outlined"
              size="small"
              margin="dense"
              style={{ width: 110 }}
            />
          </div>
          <div className="mr-2">
            <TextField
              id="outlined-basic"
              label="Bedrooms"
              variant="outlined"
              size="small"
              margin="dense"
              style={{ width: 110 }}
            />
          </div>
          <div className="mr-2">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Location</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Location"
                onChange={handleChange}
              >
                <MenuItem value={50}>
                  <em>All</em>
                </MenuItem>
                <MenuItem value={10}>Addis Ababa</MenuItem>
                <MenuItem value={20}>Adema</MenuItem>
                <MenuItem value={30}>Bishoftu</MenuItem>
                <MenuItem value={30}>Sebeta</MenuItem>
                <MenuItem value={30}>Debre Brehan</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      )}
      <section className="px-24 mt-5 ">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-normal text-2xl">Search Result</h1>
          <div>
            <ViewListIcon />
            <AppsIcon style={{ height: "20px" }} />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center mt-10">
          <h1 className="font-semibold text-1xl">25 Results Found</h1>
          <div className="flex items-center">
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
          </div>
        </div>
      </section>
      <section className="px-24  mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-12">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-end">
          <Pagination count={5} />
        </div>
      </section>
    </div>
  );
}
