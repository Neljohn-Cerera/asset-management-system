import React from "react";
import InventoryComponent from "../components/inventory";
import { InventoryContextProvider } from "../context";

const Inventory: React.FC = (): JSX.Element => {
  return (
    <InventoryContextProvider>
      <InventoryComponent />;
    </InventoryContextProvider>
  );
};

export default Inventory;
