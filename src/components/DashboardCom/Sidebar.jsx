import classNames from "classnames";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { RxPerson, RxDashboard } from "react-icons/rx";
import {MdOutlineSupportAgent, MdCarRental, MdOutlineRealEstateAgent,MdOutlineFeedback } from "react-icons/md";
import { FaListOl, FaUser } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { CollapsIcon } from "../icons";

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: <RxDashboard size={25} />,
      link: "/",
    },
    {
      id: 2,
      title: "User",
      children: [
        { id: 5, title: "Customer", icon:<FaUser size={24} />, link: "/" },
        { id: 6, title: "Agent", icon: <MdOutlineSupportAgent size={25} />, link: "/" },
      ],
    },
    {
      id: 3,
      title: "Property",
      children: [
        { id: 7, title: " Property Add", icon:  <MdOutlineRealEstateAgent size={25} />, link: "/" },
        { id: 8, title: "Property Approval", icon:  <FcApproval size={25} />, link: "/" },
        { id: 9, title: " Property List", icon:  <FaListOl size={24} />, link: "/" },
      ],
    },
    {
      id: 4,
      title: "Feedback",
      children: [
        { id: 10, title: " Feedback List", icon:   <MdOutlineFeedback size={25} />, link: "/" }]
    },
  ];

  const wrapperClasses = classNames("bg-gray-100 h-screen px-3 pt-10 pb-4 bg-light flex justify-between flex-col border border-gray-300", {
    "w-70": !toggleCollapse,
    "w-30": toggleCollapse,
    "overflow-y-auto": true,
  });

  const collapseIconClasses = classNames("p-4 rounded bg-light-lighter absolute right-0", {
    "rotate-180": toggleCollapse,
  });

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div className={wrapperClasses} ref={menuRef}>
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center pl-2 gap-4">
            <span className="mt-3 text-lg font-medium text-text">
              <Link href="/">
                <div className="bg-green text-white p-2 rounded-lg inline-block">
                  <span className="text-xs">BSMS</span>
                </div>
              </Link>
            </span>
          </div>
          <button className={collapseIconClasses} onClick={handleSidebarToggle}>
            <CollapsIcon />
          </button>
        </div>
        <div className="flex flex-col items-start mt-5">
          {menuItems.map(({ id, title, icon, children }) => (
            <div key={id} className="relative">
              {title && !toggleCollapse && (
              <div style={{ marginTop: '20px', marginLeft: '10px' }}>
              <span className={classNames("text-ml text-gray-800")} style={{ fontWeight: 'bold' }}>{title}</span>
          </div>
          
            
              )}
              {children ? (
                <div className="flex flex-col">
                {!toggleCollapse &&
                  children.map(({ id, title, icon, link }) => (
                    <div key={id} className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-2 p-3 rounded-lg inline-block flex items-center">
                      {icon}
                      <span className="ml-2">{title}</span>
                    </div>
                  ))}
              </div>
              
              ) : (
                <div className="flex px-1 items-center cursor-pointer">
                  {icon}
                  {!toggleCollapse && !title && (
                    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer p-4 rounded-lg flex items-center" style={{ width: "8rem" }}>
                      <span className={classNames("text-sm text-gray-800")}>Dashboard</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
