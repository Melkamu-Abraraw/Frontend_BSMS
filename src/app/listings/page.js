"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Map from "@/components/Maps/Map";

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
          style={{ overflow: "hidden" }} // Ensure overflow is hidden initially
        >
          {/* Changed justify-start to justify-center */}
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
    </div>
  );
}
