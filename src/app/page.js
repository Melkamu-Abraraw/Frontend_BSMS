import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import FeaturedPropertiesList from "@/components/propertyList/FeaturedProperty";
import Card from "@/components/propertyList/Card";
import Featured from "@/components/Featured/Featured";
import Trending from "@/components/Trending/Trending";
import Partners from "@/components/Partners/Partners";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Featured />
      <Trending />
      <Footer />
    </div>
  );
}
