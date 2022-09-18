import React from "react";
import ReportComponent from "../components/report";
import {ReportContextProvider} from "../context";

const Reports: React.FC = (): JSX.Element => {
  return (
    <ReportContextProvider>
      <ReportComponent />
    </ReportContextProvider>
  );
};

export default Reports;
