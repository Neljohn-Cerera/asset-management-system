import React from "react";
import HistoryComponent from "../consumables-components/history";

import { StockHistoriesContextProvider } from "../consumables-context";

const HistoryConsumables: React.FC = (): JSX.Element => {
  return (
    <StockHistoriesContextProvider>
      <HistoryComponent />
    </StockHistoriesContextProvider>
  );
};

export default HistoryConsumables;
