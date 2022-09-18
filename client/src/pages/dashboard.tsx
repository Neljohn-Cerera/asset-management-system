import React from "react";
import DashBoardComponent from "../components/dashboard";
import { DashBoardContextProvider } from "../context";

const DashBoard: React.FC = (): JSX.Element => {
  return (
    <DashBoardContextProvider>
      <DashBoardComponent />;
    </DashBoardContextProvider>
  );
};

export default DashBoard;
