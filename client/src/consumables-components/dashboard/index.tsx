import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { ChartStockInComponent, ChartStockOutComponent } from "./chart";

import { StockDashboardContainer } from "./styles";

const DashBoardComponent: React.FC = (): JSX.Element => {
  const { height } = useWindowDimensions();

  return (
    <StockDashboardContainer height={height - 75}>
      <ChartStockInComponent />
      <ChartStockOutComponent />
    </StockDashboardContainer>
  );
};

export default DashBoardComponent;
