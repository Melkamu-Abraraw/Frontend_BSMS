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

function Homepage() {
  return (
    <>
      <div className="ml-4 flex flex-wrap md:gap-2 lg:gap-0 sm:gap-2">
        {/* Display three Cards in a row with equal width */}
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full ">
          <Cards title="Total Properties" amount="4" icon={HouseIcon} />
        </div>
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full">
          <Cards title="Assigned Properties" amount="2" icon={AccessTimeIcon} />
        </div>
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full">
          <Cards title="Published " amount="2" icon={CloudUploadIcon} />
        </div>
      </div>
    </>
  );
}
export default Homepage;
