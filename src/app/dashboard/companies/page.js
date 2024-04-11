"use client";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/DashboardCom/Header";
import Sidebar from "@/components/DashboardCom/Sidebar";
import Cards from "@/components/DashboardCom/Cards";
import Layout from "@/components/DashboardCom/layout";
import RecentActivities from "@/components/DashboardCom/RecentActivities";
import HouseIcon from "@mui/icons-material/House";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { FaUserAltSlash } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";

function Homepage() {
  return (
    <>
      <div className="ml-4 flex flex-wrap md:gap-2 lg:gap-0 sm:gap-2">
        {/* Display three Cards in a row with equal width */}
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full ">
          <Cards title="Total Managers" amount="4" icon={FaHospitalUser} />
        </div>
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full">
          <Cards title="Active Managers" amount="2" icon={FaUserCheck} />
        </div>
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full">
          <Cards title="Deactive Managers" amount="2" icon={FaUserAltSlash} />
        </div>
      </div>
    </>
  );
}
export default Homepage;
