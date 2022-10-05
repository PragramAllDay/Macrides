import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  // {
  //   title: "Reports",
  //   path: "/reports",
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: "nav-text",
  // },
  {
    title: "Your Cars",
    path: "/investors-Cars",
    icon: <FaIcons.FaCar />,
    cName: "nav-text",
  },
  {
    title: "Register Car",
    path: "/register-car-via-panel",
    icon: <FaIcons.FaRegistered />,
    cName: "nav-text",
  },
  // {
  //   title: "Team",
  //   path: "/team",
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Messages",
  //   path: "/messages",
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Logout",
  //   path: "/",
  //   icon: <FaIcons.FaCircleNotch />,
  //   cName: "nav-text",
  // },
];
