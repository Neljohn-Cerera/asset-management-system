import React, { useContext } from "react";
import { FormFiveYears, FormYearly, FormPerRoom } from "./forms";
import { PrintFiveYearsReports, PrintYearly, PrintPerRoom } from "./prints";
import { Container, Title, ReportContainer } from "./styles";
import ReportContext from "../../context/report/context";
//
const ReportComponent: React.FC = () => {
  const { reportStates } = useContext(ReportContext);
  return (
    <>
      <ReportContainer>
        <Container>
          <Title>Generate Reports</Title>
          {/* Form Five Years */}
          <FormFiveYears />
          {/* For Yearly */}
          <FormYearly />
          {/* Form Per Room */}
          <FormPerRoom />
        </Container>
      </ReportContainer>
      {/* For Printing */}
      {reportStates?.reportView === "five years report" ? (
        <PrintFiveYearsReports />
      ) : null}
      {reportStates?.reportView === "yearly report" ? <PrintYearly /> : null}
      {reportStates?.reportView === "per room report" ? <PrintPerRoom /> : null}
    </>
  );
};

export default ReportComponent;
