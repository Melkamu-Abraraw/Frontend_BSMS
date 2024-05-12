"use client";
import React, { useState, useEffect } from "react";
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
  const persistedState = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  const [myProperties, setMyProperties] = useState([]);
  const [error, setError] = React.useState(null);
  const [loadingProperties, setLoadingProperties] = useState(true);

  const [propertyCounts, setPropertyCounts] = useState({
    total: 0,
    approved: 0,
    assigned: 0,
  });

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/Allproperty/assigned/approved`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${persistedState.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setMyProperties(data.data);
        const counts = {
          total: data.data.length,
          pending: data.data.filter((property) => property.Status === "Pending")
            .length,
          approved: data.data.filter(
            (property) => property.Status === "Approved"
          ).length,
          assigned: data.data.filter(
            (property) => property.Status === "Assigned"
          ).length,
        };
        setPropertyCounts(counts);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoadingProperties(false);
      }
    };
    fetchListings();
  }, []);

  return (
    <>
      <div className="ml-4 flex flex-wrap md:gap-2 lg:gap-0 sm:gap-2">
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full ">
          <Cards
            title="Total Properties"
            amount={propertyCounts.total}
            icon={HouseIcon}
          />
        </div>
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full">
          <Cards
            title="Assigned Properties"
            amount={propertyCounts.assigned}
            icon={AccessTimeIcon}
          />
        </div>
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full">
          <Cards
            title="Published "
            amount={propertyCounts.approved}
            icon={CloudUploadIcon}
          />
        </div>
      </div>
    </>
  );
}
export default Homepage;
