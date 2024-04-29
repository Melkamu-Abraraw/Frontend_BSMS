"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DataTable() {
  const property = useSelector((state) => state.setPropertyInfo.value);
  const persistedState = JSON.parse(localStorage.getItem("user"));
  const [broker, setBroker] = React.useState([]);

  const showToastMessage = (message, type) => {
    console.log(message);
    toast.success(message, {
      position: "top-right",
    });
  };

  const showToastError = (message) => {
    toast.error(message, {
      position: "top-right",
    });
  };

  React.useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/User/broker`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${persistedState.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setBroker(data.users);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        //setLoadingProperties(false);
      }
    };
    fetchUserList();
  }, []);

  const columns = [
    {
      field: "no",
      headerName: "No",
      width: 70,
      renderHeader: (params) => <strong className=" text-lg">{"No "}</strong>,
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 150,
      renderHeader: (params) => (
        <strong className=" text-md">{"First Name"}</strong>
      ),
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 150,
      renderHeader: (params) => (
        <strong className=" text-md">{"Last Name "}</strong>
      ),
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderHeader: (params) => (
        <strong className=" text-md">{"Email "}</strong>
      ),
    },
    {
      field: "assigned",
      headerName: "Assigned Property",
      width: 200,
      renderHeader: (params) => (
        <strong className=" text-md">{"Assigned Property "}</strong>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 110,
      renderHeader: (params) => (
        <strong className="text-md">{"Action "}</strong>
      ),

      renderCell: (params) => (
        <div>
          <Button className="ml-2" onClick={() => handleAssign(params.row)}>
            Assign
          </Button>
        </div>
      ),
    },
  ];

  const rows = broker.map((item, index) => ({
    id: item._id,
    no: index + 1,
    firstName: item.FirstName,
    lastName: item.LastName,
    email: item.Email,
    assigned: 1,
  }));

  const handleAssign = async (broker) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/${property.propType}/assign/${property.id}/${broker.email}`,
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
  return (
    <div className="ml-12">
      <div style={{ height: 520, width: "95%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          checkboxSelection
        />
      </div>
      <ToastContainer />
    </div>
  );
}
export default DataTable;
