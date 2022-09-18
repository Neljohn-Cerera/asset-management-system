import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Personnel",
    path: "/personnel",
    icon: <FaIcons.FaUsers />,
  },
  {
    title: "Account",
    path: "/account",
    icon: <FaIcons.FaUserCircle />,
  },
  {
    title: "Assets",
    path: "/assets",
    icon: <FaIcons.FaDatabase />,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: <FaIcons.FaPlusSquare />,
  },
  {
    title: "Consumables",
    path: "/consumables/dashboard",
    icon: <FaIcons.FaPlusSquare />,
  },
  {
    title: "History",
    path: "/history",
    icon: <FaIcons.FaHistory />,
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FaIcons.FaChartBar />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaIcons.FaCog />,
  },
  {
    title: "Logout",
    path: "",
    icon: <FiIcons.FiLogOut />,
  },
];
