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
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "@/redux/features/auth-slice";

const pages = ["Home", "Listings", "Jobs", "Contact", "About Us"];

function Navbar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.value.isLoggedIn);

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
    // Adding hover effect
    ":hover": {
      backgroundColor: "rgba(0, 167, 111, 0.1)", // Adjust the opacity or any other properties for the hover effect
      cursor: "pointer",
      // Change cursor to pointer on hover
    },
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

  const handleLogout = () => {
    dispatch(logout());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              className="bg-green text-center ml-5  hover:text-white"
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
                className=" text-center hover:text-white"
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
