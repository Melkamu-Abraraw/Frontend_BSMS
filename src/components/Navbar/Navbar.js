"use client";
import * as React from "react";
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
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const pages = ["Home", "Listings", "Jobs", "Contact", "About Us"];

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  const appBarStyle = {
    backgroundColor: "white",
    boxShadow: "0px 2px 4px rgba(000, 000, 000, 0.1)",
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
  };
  const listStyle = {
    textTransform: "capitalize",
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsLoggedIn(false);
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
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ textTransform: "capitalize" }}
                >
                  <Typography textAlign="center">
                    <Link href={`/${page.toLowerCase()}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
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
                onClick={handleCloseNavMenu}
                sx={{
                  color: "black",
                  display: "block",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "15px",
                  textAlign: "center",
                }}
                className="hover:text-white hover:bg-green"
              >
                <Link href={`/${page.toLowerCase()}`}>{page}</Link>
              </Button>
            ))}
            <Button
              variant="contained"
              style={addBtnStyle}
              className="bg-green text-center ml-5 hover:bg-veryDarkBlue hover:text-white"
            >
              <Link
                href="/add-listing"
                className="flex items-center"
                style={{ textDecoration: "none" }}
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
              </Link>
            </Button>
          </Box>
          {isLoggedIn && (
            <div style={{ display: "inline-block", marginRight: "10px" }}>
              <Tooltip title="Listings">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9 text-darkBlue mx-1 mt-2"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    padding: "5px",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              </Tooltip>
            </div>
          )}
          {isLoggedIn && (
            <div style={{ display: "inline-block", marginRight: "10px" }}>
              <Tooltip title="Messages">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9 text-darkBlue mx-1 mt-2"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    padding: "5px",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
              </Tooltip>
            </div>
          )}
          {isLoggedIn && (
            <div style={{ display: "inline-block", marginRight: "10px" }}>
              <Tooltip title="Notifications">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9 text-darkBlue mx-1 mt-2"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    padding: "5px",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                  />
                </svg>
              </Tooltip>
            </div>
          )}
          {isLoggedIn && (
            <div style={{ display: "inline-block", marginRight: "10px" }}>
              <Tooltip title="Saved">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-9 text-darkBlue mx-1 mt-2"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "#e0e0e0",
                    padding: "5px",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </Tooltip>
            </div>
          )}

          {isLoggedIn && (
            <div>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "10px",
                  marginLeft: "5px",
                }}
              >
                <Tooltip title="Account">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>

              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}

          {!isLoggedIn && (
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="outlined"
                style={btnStyle}
                className=" text-center  hover:bg-green "
              >
                <Link href="/login">
                  <span className=" text-black font-bold hover:text-white">
                    Log In
                  </span>
                </Link>
              </Button>
              <Button
                variant="outlined"
                style={signUpBtnStyle}
                className="hover:bg-green text-center hover:text-white"
              >
                <Link href="/register">
                  <span className=" text-black font-bold hover:text-white">
                    Sign Up
                  </span>
                </Link>
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
