import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Link from "next/link";

const ShadowedIconButton = ({ children }) => (
  <IconButton
    style={{
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
      marginRight: "10px",
      backgroundColor: "white",
      "&:focus": {
        outline: "none",
      },
      "&:active": {
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.15)",
        backgroundColor: "white",
      },
    }}
  >
    {children}
  </IconButton>
);

const Header = () => {
  return (
    <div className="flex flex-row justify-between px-12  ">
      <div className="flex items-center ">
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor="white"
          borderRadius="6px"
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
        >
          <InputBase sx={{ ml: 2 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </div>
      <Box
        display="flex"
        justifyContent="space-between"
        p={3}
      >
        {/* ICONS */}
        <Box display="flex">
          <ShadowedIconButton>
            <NotificationsOutlinedIcon />
          </ShadowedIconButton>
          <ShadowedIconButton>
            <Link href="/">
              <PersonOutlinedIcon />
            </Link>
          </ShadowedIconButton>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
