import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/consumables/dashboard",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Items",
    path: "/consumables/items",
    icon: <FaIcons.FaDatabase />,
  },
  {
    title: "Stocks",
    path: "/consumables/stocks",
    icon: <FaIcons.FaPlusSquare />,
  },

  {
    title: "History",
    path: "/consumables/history",
    icon: <FaIcons.FaHistory />,
  },
  {
    title: "Reports",
    path: "/consumables/reports",
    icon: <FaIcons.FaChartBar />,
  },
  {
    title: "Logout",
    path: "",
    icon: <FiIcons.FiLogOut />,
  },
  {
    title: "Assets",
    path: "/dashboard",
    icon: <FaIcons.FaArrowLeft />,
  },
];
