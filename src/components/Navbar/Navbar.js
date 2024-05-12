"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "@/redux/features/auth-slice";
import Image from "next/image";
import { useRouter } from "next/navigation";

const pages = ["Home", "Listings", "Jobs", "Contact", "About Us"];

function Navbar() {
  const dispatch = useDispatch();
  const [userData, setUserData] = React.useState({});

  React.useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("user"));
    setUserData(storedUserData || {});
  }, []);

  if (!userData) {
    return null;
  }
  const user = userData.user ? userData.user : "";
  const router = useRouter();

  const handleAddProperty = () => {
    if (userData) {
      router.push(`/dashboard/seller/post`);
    } else {
      router.push("/login");
    }
  };

  const appBarStyle = {
    backgroundColor: "white",
    boxShadow: "0px 2px 4px rgba(000, 000, 000, 0.1)",
    width: "100%",
  };

  const btnStyle = {
    color: "black",
    border: "2px solid rgb(0, 167, 111)",
    marginRight: "6px",
    textTransform: "capitalize",
    fontWeight: "bold",
  };

  const signUpBtnStyle = {
    color: "black",
    border: "2px solid rgb(0, 167, 111)",
    textTransform: "capitalize",
    fontWeight: "bold",
    backgroundColor: "rgb(0, 167, 111)",
  };
  const addBtnStyle = {
    color: "black",
    textTransform: "capitalize",
    fontWeight: "bold",
    backgroundColor: "rgb(0, 167, 111)",
    ":hover": {
      backgroundColor: "rgba(0, 167, 111, 0.1)", // Adjust the opacity or any other properties for the hover effect
      cursor: "pointer",
    },
    marginLeft: "10px",
  };

  const listStyle = {
    textTransform: "capitalize",
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="fixed" style={appBarStyle} className="container">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "hsl(228, 39%, 23%)",
              textDecoration: "none",
            }}
            className="hover:text-veryDarkBlue"
          >
            BSMS
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: { lg: "200px", md: "150px" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: "black",
                  display: "block",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "15px",
                  textAlign: "center",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "rgb(0, 167, 111)",
                  },
                }}
              >
                <Link href={`/${page.toLowerCase()}`}>{page}</Link>
              </Button>
            ))}
            <Button
              variant="contained"
              style={addBtnStyle}
              className="bg-green text-center ml-10  hover:text-white"
              onClick={handleAddProperty}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5" // Note: Use camelCase for attribute names in JSX
                stroke="currentColor"
                className="w-6 h-6 ml-1 text-white mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span className="text-white font-bold inline-flex items-center capitalize">
                Add Property
              </span>
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <div className="flex flex-row mt-4">
                <div className="mt-2 flex flex-row">
                  <Link href="/dashboard/seller">
                    <Link href="/dashboard/seller">
                      <span className=" text-green font-bold  mr-4">
                        Dashboard
                      </span>
                    </Link>
                  </Link>
                  <span className="block">
                    <span className="block text-sm font-medium text-black">
                      {`${user.FirstName} ${user.LastName}`}
                    </span>
                    <span className="block text-xs">{user.Role}</span>
                  </span>
                </div>
                <div className="rounded-full overflow-hidden h-12 w-12 pb-1">
                  <Image
                    src={user.imageUrls[0]}
                    alt="Profile Picture"
                    height={70}
                    width={70}
                    className="rounded-full ml-1"
                  />
                </div>
              </div>
            ) : (
              <>
                <Button variant="outlined" style={btnStyle}>
                  <Link href="/login">
                    <span className=" text-black font-bold hover:text-black">
                      Log In
                    </span>
                  </Link>
                </Button>
                <Button
                  variant="outlined"
                  style={signUpBtnStyle}
                  className=" text-center hover:text-white"
                >
                  <Link href="/register">
                    <span className=" text-black font-bold hover:text-white">
                      Sign Up
                    </span>
                  </Link>
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
