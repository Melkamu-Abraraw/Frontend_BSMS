import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import FeaturedPropertiesList from "@/components/propertyList/FeaturedProperty";
import Card from "@/components/propertyList/Card";
import Featured from "@/components/Featured/Featured";
import Trending from "@/components/Trending/Trending";
import Partners from "@/components/Partners/Partners";
import Footer from "@/components/Footer/Footer";
import Listings from "@/components/Listings/Listings";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f7f8f9" }}>
      <Hero />
      <Featured />
      <Trending />
      <Listings />
    </div>
  );
}
