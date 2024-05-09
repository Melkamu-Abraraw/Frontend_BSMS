"use client";
import * as yup from "yup";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@/components/ui/button";
import { styled } from "@mui/material/styles";
import { BsPersonPlus } from "react-icons/bs";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";

export default function DataTable() {
  const [open, setOpen] = React.useState(false);
  const [openAlert, setAlertOpen] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [userIdToDelete, setUserIdToDelete] = React.useState(null);
  const persistedState = JSON.parse(localStorage.getItem("user"));

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  const fetchUsers = async () => {
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
      setUsers(data.response);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const deleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/User/remove/${userId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${persistedState.token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.success) {
        showToastMessage(data.message);
        fetchUsers();
      } else {
        showToastError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const getStatusCellStyle = (status) => {
    let style = {
      padding: "6px 12px",
      borderRadius: "4px",
      boxShadow: "none",
      backgroundColor: "transparent",
      color: "inherit",
    };

    if (status === "Active") {
      style.backgroundColor = "#1ecab826";
      style.color = "green";
      style.boxShadow = "0 0 13px #1ecab80d";
    } else if (status === "Deactive") {
      style.backgroundColor = "#1ecab826";
      style.color = "red";
      style.boxShadow = "0 0 13px #f1646c0d";
    }

    return style;
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const handleDeleteUser = (userId) => {
    handleAlertClickOpen(); // Open the confirmation dialog
    setUserIdToDelete(userId); // Set the user ID to be deleted
  };
  const handleAlertClickOpen = () => {
    setAlertOpen(true);
  };
  const handleAlertClose = () => {
    setAlertOpen(false);
  };
  const columns = [
    {
      field: "no",
      headerName: "No",
      width: 30,
      renderHeader: (params) => <strong>{"No "}</strong>,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      width: 170,
      renderHeader: (params) => <strong>{"Full Name "}</strong>,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      renderHeader: (params) => <strong>{"Email "}</strong>,
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
      width: 150,
      renderHeader: (params) => <strong>{"Actions "}</strong>,

      renderCell: (params) => (
        <div>
          <IconButton
            aria-label="edit"
            onClick={() => handleEdit(params.id)}
            size="small"
            style={{ color: "green" }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteUser(params.id)}
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

  const rows = users.map((item, index) => ({
    id: item._id,
    no: index + 1,
    fullName: `${item.FirstName}  ${item.LastName}`,
    email: item.Email,
    status: "Active",
  }));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const schema = yup.object().shape({
    FirstName: yup
      .string()
      .required("First Name is required")
      .matches(/^[A-Za-z]+$/, "First Name must contain only characters"),
    LastName: yup
      .string()
      .required("Last Name is required")
      .matches(/^[A-Za-z]+$/, "Last Name must contain only characters"),
    Email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Invalid email format"),
    Password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?!.*\s).{8,}$/,
        "Password must be at least 8 characters long and should not contain spaces"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords Does Not Match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const showToastMessage = (msg) => {
    toast.success(msg, {
      position: "top-right",
    });
  };

  const showToastError = (msg) => {
    toast.error(msg, {
      position: "top-right",
    });
  };

  const onSubmit = async (formData) => {
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        formDataToSend.append(key, formData[key]);
      }
    }
    try {
      const response = await fetch(
        `http://localhost:3001/api/User/userRegister`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.success) {
        showToastMessage(data.message);
        setTimeout(() => {
          reset({
            LastName: "",
            FirstName: "",
            Email: "",
            Password: "",
            confirmPassword: "",
          });
        }, 5000);
        fetchUsers();
        handleClose();
      } else {
        showToastError(data.message);
      }
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDialogOpen = () => {
    reset({});
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="ml-12">
      <Button
        className="bg-green mb-2 hover:bg-green/85"
        onClick={handleClickOpen}
      >
        <BsPersonPlus size={22} />
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
          className="font-bold"
        >
          Add New User
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right font-semibold">
                First Name:
              </Label>
              <div className="col-span-3">
                <Input
                  id="fname"
                  placeholder="First Name"
                  {...register("FirstName")}
                />
                <p className="p-1 text-xs	 text-red-600">
                  {errors.FirstName?.message}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right font-semibold">
                Last Name:
              </Label>
              <div className="col-span-3">
                <Input
                  id="lname"
                  placeholder="Last Name"
                  {...register("LastName")}
                />
                <p className="p-1 text-xs	 text-red-600">
                  {errors.LastName?.message}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right font-semibold">
                Email:
              </Label>
              <div className="col-span-3">
                <Input id="email" placeholder="Email" {...register("Email")} />
                <p className="p-1 text-xs	 text-red-600">
                  {errors.Email?.message}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="pass" className="text-right font-semibold">
                Password:
              </Label>
              <div className="col-span-3">
                <Input
                  id="pass"
                  type="password"
                  placeholder="Password"
                  {...register("Password")}
                />
                <p className="p-1 text-xs	 text-red-600">
                  {errors.Password?.message}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 items-center gap-4">
              <Label
                htmlFor="cpass"
                className="text-right col-span-2 font-semibold "
              >
                Confirm Password:
              </Label>
              <div className="col-span-3">
                <Input
                  id="cpass"
                  type="password"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                <p className="p-1 text-xs	 text-red-600">
                  {errors.confirmPassword?.message}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            className="bg-green hover:bg-green/85"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </DialogActions>
      </BootstrapDialog>
      <Dialog
        open={openAlert}
        onClose={handleAlertClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to Delete user permanently?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running. */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              handleAlertClose();
              deleteUser(userIdToDelete); // Call the delete function with the user ID
            }}
            className="text-white  mt-2"
            style={{ backgroundColor: "red" }}
          >
            Yes
          </Button>
          <Button
            onClick={handleAlertClose}
            className="text-white  mt-2"
            style={{ backgroundColor: "green" }}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>

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
