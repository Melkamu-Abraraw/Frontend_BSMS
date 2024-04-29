"use client";
import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ShadowedIconButton = ({ children }) => (
  <IconButton
    style={{
      marginRight: "10px",
      backgroundColor: "white",
      "&:focus": {
        outline: "none",
      },
      "&:active": {
        backgroundColor: "white",
      },
    }}
  >
    {children}
  </IconButton>
);

const Header = () => {
  const user = useSelector((state) => state.auth.value);
  const persistedState = JSON.parse(localStorage.getItem("user"));
  const router = useRouter();
  console.log(persistedState);

  const handleLogout = async () => {
    localStorage.removeItem("user"); // Remove persisted state data
    // Wait for the redirection to complete
    router.push("/login");
  };

  return (
    <div className="flex flex-row justify-between px-12 pt-6">
      <div className="flex items-center">
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
      <Box display="flex" alignItems="center">
        {/* ICONS */}
        <ShadowedIconButton>
          <NotificationsOutlinedIcon className="mb-1" />
        </ShadowedIconButton>
        <span className="block">
          <span className="block text-sm font-medium text-black">
            {`${persistedState.user.FirstName} ${persistedState.user.LastName}`}
          </span>
          <span className="block text-xs">{persistedState.user.Role}</span>
        </span>
        <div className="ml-2">
          <div className="rounded-full overflow-hidden h-12 w-12">
            <Image
              src={persistedState.user.imageUrls[0]}
              alt="Profile Picture"
              height={70}
              width={70}
              className="rounded-full ml-1"
            />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-2 focus:outline-none">
              <RiArrowDropDownLine size={30} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <Link href="/dashboard/seller/profile">
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout </span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Box>
    </div>
  );
};

export default Header;
