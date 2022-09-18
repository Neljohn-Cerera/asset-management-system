import React from "react";
import ReportComponent from "../consumables-components/reports";
import { ReportsContextProvider } from "../consumables-context";

const ReportsConsumables: React.FC = (): JSX.Element => {
  return (
    <ReportsContextProvider>
      <ReportComponent />
    </ReportsContextProvider>
  );
};

export default ReportsConsumables;
