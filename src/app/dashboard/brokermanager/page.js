import React from "react";
import Cards from "@/components/DashboardCom/Cards";
import HouseIcon from "@mui/icons-material/House";
import { FaRegUser } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { MdOutlineSupportAgent } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className="ml-4 flex flex-wrap md:gap-2 lg:gap-0 sm:gap-2">
        {/* Display three Cards in a row with equal width */}
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full ">
          <Cards title="Total Properties" amount="4" icon={HouseIcon} />
        </div>
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full">
          <Cards title="Total Users" amount="2" icon={LuUsers} />
        </div>
        <div className="flex flex-grow justify-center lg:w-1/3 md:w-full sm:w-full">
          <Cards
            title="Total Agents "
            amount="2"
            icon={MdOutlineSupportAgent}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
