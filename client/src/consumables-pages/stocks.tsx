import React from "react";
import StocksConsumablesComponent from "../consumables-components/stocks";
import { ConsumablesStocksContextProvider } from "../consumables-context";


const StocksConsumables: React.FC = (): JSX.Element => {
  return (
    <ConsumablesStocksContextProvider>
      <StocksConsumablesComponent />
    </ConsumablesStocksContextProvider>
  );
};

export default StocksConsumables;
