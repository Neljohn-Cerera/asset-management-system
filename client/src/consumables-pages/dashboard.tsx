import React from "react";
import DashBoardComponent from "../consumables-components/dashboard";
import { DashboardContextProvider } from "../consumables-context";

const DashboardConsumables: React.FC = (): JSX.Element => {
  return (
    <DashboardContextProvider>
      <DashBoardComponent />
    </DashboardContextProvider>
  );
};

export default DashboardConsumables;
