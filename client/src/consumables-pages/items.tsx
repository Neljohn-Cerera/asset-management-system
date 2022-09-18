import React from "react";
import ItemsConsumablesComponent from "../consumables-components/items";
import { ConsumablesItemsContextProvider } from "../consumables-context";

const ItemsConsumables: React.FC = (): JSX.Element => {
  return (
    <ConsumablesItemsContextProvider>
      <ItemsConsumablesComponent />
    </ConsumablesItemsContextProvider>
  );
};

export default ItemsConsumables;
