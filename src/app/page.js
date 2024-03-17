"use client";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import FeaturedPropertiesList from "@/components/propertyList/FeaturedProperty";
import Card from "@/components/propertyList/Card";
import Featured from "@/components/Featured/Featured";
import Trending from "@/components/Trending/Trending";
import Partners from "@/components/Partners/Partners";
import Footer from "@/components/Footer/Footer";
import Listings from "@/components/Listings/Listings";
import { useSelector } from "react-redux";

export default function Home() {
  const username = useSelector((state) => state.authReducer.value.username);
  const isLoggedIn = useSelector((state) => state.authReducer.value.isLoggedIn);

  return (
    <div style={{ backgroundColor: "#f7f8f9" }}>
      <Navbar />
      <Hero />
      <Featured />
      <Trending />
      <Listings />
      <Footer />
    </div>
  );
}
