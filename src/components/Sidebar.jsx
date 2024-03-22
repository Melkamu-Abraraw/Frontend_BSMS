import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

const Sidebar = ({ children }) => {
  const role = false;

  return (
    <div className="flex">
      <div className="fixed w-80 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col">
          <Link href="/">
            <div className="bg-green text-white p-2 rounded-lg inline-block">
              <span className="text-xs">BSMS</span>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-4 flex items-center">
              <RxDashboard size={20} />
              <span className="text-xs ml-2">Dashboard</span>
            </div>
          </Link>
          {role && (
            <Link href="/user">
              <div className="relative">
                <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-4 flex items-center">
                  <RxPerson size={20} />
                  <span className="text-xs ml-2">User</span>
                </div>
              </div>
            </Link>
          )}

          <Link href="/orders">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-4  flex items-center">
              <HiOutlineShoppingBag size={20} />
              <span className="text-xs ml-2"> Property</span>
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-4 flex items-center">
              <FiSettings size={20} />
              <span className="text-xs ml-2">Feedback</span>
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
