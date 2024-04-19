"use client";
import classNames from "classnames";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaHouseChimney } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";
import { CollapsIcon } from "../icons";
import { CiChat2 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {
  MdOutlineSupportAgent,
  MdOutlineRealEstateAgent,
  MdOutlineFeedback,
} from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { IoIosList } from "react-icons/io";
import { useSelector } from "react-redux";
import { BiListPlus, BiUserPlus } from "react-icons/bi";
import { VscDiffAdded } from "react-icons/vsc";
import { TbBuildingWarehouse } from "react-icons/tb";



const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const menuRef = useRef(null);
  const [toggleChildCollapse, setToggleChildCollapse] = useState(false);
  const user = useSelector((state) => state.auth.value);
  const persistedState = JSON.parse(localStorage.getItem('user')) 
    if (!user) {
    return null;
  }
  const menuItems_user = [
    {
      id: 1,
      label: "Dashboard",
      icon: <RxDashboard size={25} />,
      link: "/dashboard",
    },
    {
      id: 3,
      label: "Post Properties",
      icon: <VscDiffAdded size={25} />,
      link: "/dashboard/seller/post",
    },
    {
      id: 2,
      label: "My Properties",
      icon: <TbBuildingWarehouse size={25} />,
      link: "/dashboard/seller/properties",
    },
    {
      id: 4,
      label: "Conversation",
      icon: <CiChat2 size={25} />,
      link: "/dashboard/seller/conversation",
    },
    {
      id: 5,
      label: "Profile",
      icon: <CgProfile size={25} />,
      link: "/dashboard/profile",
    },
    {
      id: 6,
      label: "Logout",
      icon: <TbLogout size={25} />,
      link: "/",
    },
  ];

  const menuItems_admin = [
    {
      id: 1,
      label: "Dashboard",
      icon: <RxDashboard size={25} />,
      link: "/dashboard/companies",
    },
    {
      id: 2,
      title: "Managers",
      icon: <FaHouseChimney size={25} />,
      link: "/dashboard/manage",

      children: [
        {
          id: 7,
          title: "Add Manager",
          icon: <IoIosAddCircleOutline size={20} />,
          link: "/dashboard/add",
        },
        {
          id: 8,
          title: "Manage Managers",
          icon: <MdOutlineManageAccounts size={20} />,
          link: "/dashboard/manage",
        },
      ],
    },

    {
      id: 5,
      label: "Profile",
      icon: <CgProfile size={25} />,
      link: "/dashboard/profile",
    },
    {
      id: 6,
      label: "Logout",
      icon: <TbLogout size={25} />,
      link: "/",
    },
  ];

  const menuItems_brokerManager = [
    {
      id: 1,
      label: "Dashboard",
      icon: <RxDashboard size={25} />,
      link: "/dashboard/brokermanager",
    },
    {
      id: 2,
      title: "User",
      icon: <FaRegUser size={25} />,
      children: [
        {
          id: 5,
          title: "Customer",
          icon: <FiUserCheck size={20} />,
          link: "/dashboard/brokermanager/customers",
        },
        {
          id: 6,
          title: "Agent",
          icon: <MdOutlineSupportAgent size={20} />,
          link: "/dashboard/brokermanager/agents",
        },
      ],
    },
    {
      id: 3,
      title: "Property",
      icon: <MdOutlineRealEstateAgent size={25} />,
      children: [
        {
          id: 7,
          title: " Property Add",
          icon: <IoIosAddCircleOutline size={20} />,
          link: "/dashboard/brokermanager/add",
        },
        {
          id: 8,
          title: "Assign Broker",
          icon: <MdAppRegistration size={20} />,
          link: "/dashboard/brokermanager/assignbroker",
        },
        {
          id: 9,
          title: " Property List",
          icon: <IoIosList size={20} />,
          link: "/dashboard/brokermanager/list",
        },
      ],
    },
    {
      id: 4,
      title: "Feedback",
      icon: <MdOutlineFeedback size={25} />,
      children: [
        {
          id: 10,
          title: " Feedback List",
          icon: <IoIosList size={20} />,
          link: "/dashboard/brokermanager/feedback",
        },
      ],
    },
  ];

  //brokers
  const menuItems_broker = [
    {
      id: 1,
      label: "Dashboard",
      icon: <RxDashboard size={25} />,
      link: "/dashboard/broker",
    },
    {
      id: 2,
      label: "Employees",
      icon: <BiUserPlus size={25} />,
      link: "/dashboard/broker/employee",
    },
    {
      id: 3,
      label: "Property",
      icon: <BiListPlus size={25} />,
      link: "/dashboard/broker/property",
    },
    {
      id: 4,
      label: "Approval",
      icon: <BiListPlus size={25} />,
      link: "/dashboard/broker/approval",
    },
    {
      id: 5,
      label: "Conversation",
      icon: <CiChat2 size={25} />,
      link: "/dashboard/broker/chat",
    },
    {
      id: 6,
      label: "Profile",
      icon: <CgProfile size={25} />,
      link: "/dashboard/broker/profile",
    },
  ];

  let activeSidebarItems = (() => {
    if (persistedState.role === "Admin") {
      return menuItems_admin;
    } else if (persistedState.role === "Seller") {
      return menuItems_user;
    } else if (persistedState.role === "BrokerAdmin") {
      return menuItems_brokerManager;
    } else if (user.role === "Broker") {
      return menuItems_broker;
    }

    // Return an empty array if user role is not recognized
    return [];
  })();

  const handleCollapse = () => {
    setToggleChildCollapse(!toggleChildCollapse);
  };

  const handleItemClick = (item) => {
    setActiveItem(item.id);
  };

  const wrapperClasses = classNames(
    "bg-gray-100 h-full fixed px-2 bg-light flex justify-between flex-col border border-gray-300"
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div className={wrapperClasses} ref={menuRef}>
      <div className="flex flex-col pt-4">
        <div className="flex items-center justify-between relative px-3">
          <div className="flex items-center pl-2 gap-4 mb-2">
            <span className=" text-lg font-medium text-text">
              <Link href="/">
                <div className=" p-2 rounded-lg inline-block">
                  <span className="text-1xl text-green font-bold">BSMS</span>
                </div>
              </Link>
            </span>
          </div>
          <button
            className={collapseIconClasses}
            onClick={handleSidebarToggle}
            style={{ marginBottom: "7px" }}
          >
            <CollapsIcon />
          </button>
        </div>
        <div className="flex flex-col items-start mt-5 gap-3">
          {activeSidebarItems.map(
            ({ id, title, icon, children, label, link }) => (
              <div key={id} className="relative">
                {!toggleCollapse && title && (
                  <div
                    style={{ marginTop: "10px", marginLeft: "4px" }}
                    className={classNames({
                      "flex items-center text-sm text-gray-800":
                        activeItem !== id,
                      "flex items-center text-sm text-green":
                        activeItem === id || usePathname() === link,
                    })}
                    onClick={() => handleItemClick({ id })}
                  >
                    {icon}
                    <span className={classNames("text-ml text-gray-800 ml-4")}>
                      {title}
                    </span>
                  </div>
                )}
                {children && !toggleCollapse ? (
                  <div className="flex flex-col mt-2">
                    {children.map(({ id, title, icon, link }) => (
                      <Link href={link || "#"}>
                        <div
                          key={id}
                          className={classNames({
                            "flex items-center text-sm text-gray-800 ml-10 py-1 cursor-pointer":
                              activeItem !== id,
                            "flex items-center text-sm text-green ml-10 py-1 cursor-pointer":
                              activeItem === id || usePathname() === link,
                          })}
                          onClick={() => handleItemClick({ id })}
                        >
                          {icon}
                          <span className="ml-2">{title}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link href={link || "#"}>
                    <div
                      className={classNames({
                        "flex px-1 items-center cursor-pointer hover:bg-gray-200 hover:rounded-lg":
                          activeItem !== id,
                        "flex px-1 items-center cursor-pointer hover:bg-gray-200 hover:rounded-lg  text-green bg-LGreen":
                          activeItem === id || usePathname() === link,
                      })}
                      onClick={() => handleItemClick({ id })}
                    >
                      {icon}
                      {!toggleCollapse && !title && (
                        <div
                          className="cursor-pointer p-4 rounded-lg flex items-center"
                          style={{ width: "12rem" }}
                        >
                          <span
                            className={classNames({
                              "text-sm text-gray-800": activeItem !== id,
                              "text-sm text-green":
                                activeItem === id || usePathname() === link,
                            })}
                            onClick={() => handleItemClick({ id })}
                          >
                            {label}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
