"use client";
import { FaCamera } from "react-icons/fa";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const UserUpdate = () => {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file); // Get URL of the selected file

    setImage(imageUrl); // Set the image URL in component state
    setFile(file); // Set the file object in component state
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  return (
    <>
      <section>
        <div className="mx-12 mt-4 shadow border rounded">
          <Tabs defaultValue="General" className="w-full mt-3 ">
            <TabsList className="ml-2">
              <TabsTrigger
                value="General"
                className="text-black text-1xl font-bold "
              >
                User Information
              </TabsTrigger>
            </TabsList>

            <TabsContent value="General">
              <div className="grid  grid-cols-2 w-full gap-3">
                <div className="mb-3 mx-2 mt-2">
                  <Label htmlFor="location" className="font-bold block">
                    First Name :
                  </Label>
                  <Input
                    type="text"
                    id="title"
                    placeholder="   First Name "
                    className="mt-3"
                  />
                </div>
                <div className="mb-3 mx-2 mt-2">
                  <Label htmlFor="location" className="font-bold block">
                    Last Name :
                  </Label>
                  <Input
                    type="text"
                    id="title"
                    placeholder="   Last Name"
                    className="mt-3"
                  />
                </div>

                <div className="mb-3 mx-2">
                  <Label htmlFor="location" className="font-bold block">
                    Email:
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="mt-3"
                  />
                </div>
                <div className="mb-3 mx-2">
                  <Label htmlFor="location" className="font-bold block">
                    Phone Number :
                  </Label>
                  <Input
                    type="number"
                    id="title"
                    placeholder="Phone Number"
                    className="mt-3"
                  />
                </div>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small-label ">Status</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={status}
                    label="status"
                    onChange={handleStatusChange}
                  >
                    <MenuItem value="Active">Active</MenuItem>
                    <MenuItem value="Deactive">Deactive</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Button className="bg-green mx-2 mb-3 mt-4 hover:bg-green/90">
                Save Changes
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default UserUpdate;
