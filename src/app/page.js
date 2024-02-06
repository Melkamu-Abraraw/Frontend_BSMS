import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import FeaturedPropertiesList from "@/components/propertyList/FeaturedProperty";
import Card from "@/components/propertyList/Card";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Card />
      {/* <FeaturedPropertiesList /> */}
    </div>
  );
}
