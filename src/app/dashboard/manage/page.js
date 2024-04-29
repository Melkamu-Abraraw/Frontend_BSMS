"use client";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setData } from "@/redux/features/auth-slice";
import { Button } from "@/components/ui/button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function DataTable() {
  const [managers, setManagers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const persistedState = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateClick = (params) => {
    const user = params.row;
    dispatch(setData(user));
  };

  const getStatusCellStyle = (status) => {
    let style = {
      padding: "6px 12px",
      borderRadius: "4px",
      boxShadow: "none",
      backgroundColor: "transparent",
      color: "inherit",
    };

    if (status === "Deactive") {
      style.backgroundColor = "#f1646c26";
      style.color = "#f1646c";
      style.boxShadow = "0 0 13px #f1646c0d";
    } else if (status === "Active") {
      style.backgroundColor = "#1ecab826";
      style.color = "#1ecab8";
      style.boxShadow = "0 0 13px #f1646c0d";
    }

    return style;
  };
  const columns = [
    {
      field: "no",
      headerName: "No",
      width: 30,
      renderHeader: (params) => <strong>{"No "}</strong>,
    },
    {
      field: "firstName",
      headerName: "First Name",
      width: 120,
      renderHeader: (params) => <strong>{"First Name "}</strong>,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 120,
      renderHeader: (params) => <strong>{"Last Name "}</strong>,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderHeader: (params) => <strong>{"Email "}</strong>,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 150,
      renderHeader: (params) => <strong>{"Phone Number "}</strong>,
    },
    {
      field: "status",
      headerName: "Status ",
      width: 150,
      headerAlign: "bold-header",
      renderHeader: (params) => (
        <strong className=" text-md">{"Status"}</strong>
      ),
      renderCell: (params) => (
        <div>
          <span style={getStatusCellStyle(params.value)}>{params.value}</span>
        </div>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 110,
      renderHeader: (params) => <strong>{"Actions "}</strong>,

      renderCell: (params) => (
        <div>
          <Link href="/dashboard/manage/update">
            <IconButton
              aria-label="edit"
              size="small"
              style={{ color: "green" }}
              onClick={() => handleUpdateClick(params)}
            >
              <EditIcon />
            </IconButton>
          </Link>

          <IconButton
            aria-label="delete"
            onClick={handleClickOpen}
            size="small"
            style={{ color: "red" }}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            aria-label="view"
            onClick={() => handleView(params.id)}
            size="small"
          ></IconButton>
        </div>
      ),
    },
  ];
  const rows = managers.map((item, index) => ({
    id: item._id,
    no: index + 1,
    firstName: item.FirstName,
    lastName: item.LastName,
    email: item.Email,
    phone: "+251" + item.Phone,
    status: "Deactive",
  }));

  React.useEffect(() => {
    const fetchManagers = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/User/manager`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${persistedState.token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setManagers(data.users);
      } catch (error) {
        console.error("Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchManagers();
  }, []);

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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Do You Want to Delete the User?"}</DialogTitle>
        <DialogActions>
          <Button
            onClick={handleClose}
            className="text-white  mt-2"
            style={{ backgroundColor: "red" }}
          >
            Yes
          </Button>
          <Button
            onClick={handleClose}
            className="text-white  mt-2"
            style={{ backgroundColor: "green" }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
