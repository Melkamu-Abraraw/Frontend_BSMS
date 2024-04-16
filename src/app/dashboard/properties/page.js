"use client";
import React from "react";
import Image from "next/image";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid } from "@mui/x-data-grid";


function Homepage() {
  const [myProperties, seMyProperties] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const persistedState = JSON.parse(localStorage.getItem('user')) 

  React.useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          `http://localhost:3030/api/Allproperty/getProperty`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${persistedState.token}`
            }
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        seMyProperties(data.data);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };
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
    const { 
      propertyType, id } = property;
    window.location.href = `/listings/${propertyType}/${id}`;
  };

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 300,
      headerAlign: "center",
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
      width: 150,
      headerAlign: "bold-header",
      renderCell: (params) => (
        <div style={{ marginBottom: 100 }}>{params.value}</div>
      ),
    },
    {
      field: "status",
      headerName: "Status ",
      width: 150,
      headerAlign: "bold-header",
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
      renderCell: (params) => (
        <div style={{ paddingBottom: 100 }}>{params.value}</div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 110,
      renderCell: (params) => (
        <div>
          <IconButton
            aria-label="view"
            size="small"
            onClick={() => handleVisibilityClick(params.row)}
          >
            <VisibilityIcon />
          </IconButton>
        </div>
      ),
    },
  ];

  console.log(myProperties)
  const rows = myProperties.map((item, index) => ({
    id:item._id ,
    image: item.imageUrls[0],
    propertyType: item.PropertyType,
    status: item.Status,
    price: item.Price,
  }));

  const customStyles = {
    root: {
      "& .MuiDataGrid-colCell:focus-within": {
        outline: " none !important",
      },
    },
  };

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
        <DataGrid
          sx={{
            "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
              outline: "none !important",
            },
          }}
          rows={rows}
          columns={columns.map((column) => ({
            ...column,
            headerClassName: "bold-header",
          }))}
          rowHeight={300}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          disableRowSelectionOnClick
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
  );
}
export default Homepage;
