import React, { useContext } from "react";
import { Container, ReportContainer, Title } from "./styles";
import FormStockOutComponent from "./forms/stockout";
import StockReportsContext from "../../consumables-context/reports/context";
import { PrintStockOutComponent } from "./print";

const ReportComponent: React.FC = (): JSX.Element => {
  const { stockReportsStates } = useContext(StockReportsContext);
  return (
    <>
      <ReportContainer>
        <Container>
          <Title>Generate Consumables Reports</Title>
          <FormStockOutComponent />
        </Container>
      </ReportContainer>
      {stockReportsStates.reportView === "stocks out" ? (
        <PrintStockOutComponent />
      ) : null}
    </>
  );
};

export default ReportComponent;
