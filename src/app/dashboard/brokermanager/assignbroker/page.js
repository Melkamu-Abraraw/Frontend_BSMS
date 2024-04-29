"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid } from "@mui/x-data-grid";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDispatch } from "react-redux";
import { setValue } from "@/redux/features/auth-slice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Homepage() {
  const path = `/dashboard/brokermanager/assignbroker/broker-list`;
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [myProperties, setMyProperties] = useState([]);
  const [brokers, setBrokers] = useState([]);
  const [loadingProperties, setLoadingProperties] = useState(true);
  const [loadingBrokers, setLoadingBrokers] = useState(true);
  const [brokerEmail, setBrokerEmail] = useState("");
  const [propType, setPropType] = useState("");
  const [id, setId] = useState(1);
  const persistedState = JSON.parse(localStorage.getItem("user"));
  const [pdfs, setPdfs] = useState([]);

  const showToastMessage = (message, type) => {
    toast.success(message, {
      position: "top-right",
    });
  };
  const showToastError = (message) => {
    toast.error(message, {
      position: "top-right",
    });
  };

  const onAssign = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/${propType}/assign/${id}/${brokerEmail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const res = await response.json();
      if (res.success) {
        showToastMessage(res.message);
        showToastMessage();
      } else {
        showToastError("Invalid email or password!");
      }
    } catch (error) {
      console.error("Error:", error);
      showToastError("An error occurred. Please try again."); // Show error toast message
    }
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/Allproperty/pending`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${persistedState.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMyProperties(data.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingProperties(false);
      }
    };

    const fetchBrokers = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/User/`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${persistedState.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const brokers = data.response.filter((user) => user.Role === "Broker");
        setBrokers(brokers);
        console.log(brokers);
      } catch (error) {
        console.error("Error fetching brokers:", error);
      } finally {
        setLoadingBrokers(false);
      }
    };

    fetchBrokers();
    fetchListings();
  }, []);

  const getStatusCellStyle = (status) => {
    let style = {
      padding: "6px 12px",
      borderRadius: "4px",
      boxShadow: "none",
      backgroundColor: "transparent",
      color: "inherit",
    };

    if (status === "Pending") {
      style.backgroundColor = "#1ecab826";
      style.color = "#1ecab8";
      style.boxShadow = "0 0 13px #1ecab80d";
    } else if (status === "Rejected") {
      style.backgroundColor = "#f1646c26";
      style.color = "#f1646c";
      style.boxShadow = "0 0 13px #f1646c0d";
    }

    return style;
  };
  const handleVisibilityClick = (property) => {
    const { propertyType, id } = property;
    window.location.href = `/listings/${propertyType}/detail/${id}`;
  };

  const handleApproveChange = (property) => {
    const { propertyType, id } = property;
    dispatch(setValue(property));
  };

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 300,
      headerAlign: "center",
      renderHeader: (params) => (
        <strong className=" text-md">{"Image "}</strong>
      ),
      renderCell: (params) => (
        <div style={{ width: 250, height: 200, padding: 4 }}>
          <Image
            alt="Image"
            src={params.value}
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
          />
        </div>
      ),
    },
    {
      field: "propertyType",
      headerName: "Property Type",
      width: 200,
      headerAlign: "bold-header",
      renderHeader: (params) => (
        <strong className=" text-md">{"Property Type"}</strong>
      ),
      renderCell: (params) => (
        <div style={{ marginBottom: 100 }}>{params.value}</div>
      ),
    },
    {
      field: "status",
      headerName: "Status ",
      width: 150,
      headerAlign: "bold-header",
      renderHeader: (params) => (
        <strong className=" text-md">{"Status "}</strong>
      ),
      renderCell: (params) => (
        <div>
          <span style={getStatusCellStyle(params.value)}>{params.value}</span>
        </div>
      ),
    },
    {
      field: "price",
      headerName: "Price ",
      width: 150,
      renderHeader: (params) => (
        <strong className=" text-md">{"Price "}</strong>
      ),
      renderCell: (params) => (
        <div style={{ paddingBottom: 100 }}>{params.value}</div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderHeader: (params) => (
        <strong className=" text-md">{"Actions "}</strong>
      ),
      renderCell: (params) => (
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <IconButton
                  aria-label="view"
                  size="medium"
                  onClick={() => handleVisibilityClick(params.row)}
                >
                  <VisibilityIcon className="text-black" />
                </IconButton>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Detail</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={path}
                  onClick={() => handleApproveChange(params.row)}
                >
                  <IconButton aria-label="view" size="medium">
                    <MdOutlineAssignmentInd className="text-green" />
                  </IconButton>
                </Link>
                {/* <Link href={`/target-page?param1=${value1}&param2=${value2}`}>
                  <a>Go to Target Page</a>
                </Link> */}
              </TooltipTrigger>
              <TooltipContent>
                <p>Approve Property</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button className="bg-red-700 text-sm hover:bg-red-500">
            Reject
          </Button>
        </div>
      ),
    },
  ];

  const propertyRows = myProperties.map((item, index) => ({
    id: item._id,
    image: item.imageUrls[0],
    propertyType: item.PropertyType,
    status: item.Status,
    price: item.Price,
  }));

  return (
    <>
      <div
        style={{
          height: 537,
          width: "97%",
          marginLeft: 24,
          marginBottom: 4,
        }}
      >
        {loadingProperties ? (
          <p>Loading properties...</p>
        ) : (
          <DataGrid
            rows={propertyRows}
            columns={columns.map((column) => ({
              ...column,
              headerClassName: "bold-header",
            }))}
            rowHeight={220}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            disableRowSelectionOnClick
            disableMultipleRowSelection
            disableColumnSelector
            pageSizeOptions={[5, 10]}
          />
        )}
      </div>
    </>
  );
}

export default Homepage;
