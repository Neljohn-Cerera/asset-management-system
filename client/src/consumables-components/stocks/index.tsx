import React, { useContext } from "react";
import StocksContext from "../../consumables-context/stocks/context";
import { ModalContainer } from "../shared/styles";
import FormAddComponent from "./forms/add";
import FormRemoveComponent from "./forms/remove";
import FormSearchComponent from "./forms/search";
import { ConsumablesStocksContainer } from "./styles";
import TableComponent from "./table";

const StocksConsumablesComponent: React.FC = (): JSX.Element => {
  const { stocksStates } = useContext(StocksContext);
  return (
    <ConsumablesStocksContainer>
      <FormSearchComponent />
      <TableComponent />
      {stocksStates.isModalOpen ? (
        <ModalContainer>
          {stocksStates.modalView === "stock in" ? (
            <FormAddComponent />
          ) : stocksStates.modalView === "stock out" ? (
            <FormRemoveComponent />
          ) : null}
        </ModalContainer>
      ) : null}
    </ConsumablesStocksContainer>
  );
};

export default StocksConsumablesComponent;
