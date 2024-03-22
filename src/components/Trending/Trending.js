"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "@/components/propertyList/Card";
import Autoplay from "embla-carousel-autoplay";

function Trending() {
  const [featuredProperties, setFeaturedProperties] = React.useState([]);

  React.useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/House/showHouse`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data.response) {
          setFeaturedProperties(data.response);
        } else {
          console.log("No Properties Found!");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchTrending();
  }, []); // Call fetchTrending only once on component mount

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="text-center " style={{ width: "95%" }}>
      <h4 className="text-black text-3xl mt-10 font-light">
        Featured Listings
      </h4>
      <Carousel
        className="ml-16"
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {featuredProperties.map((property, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <Card property={property} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
export default Trending;
