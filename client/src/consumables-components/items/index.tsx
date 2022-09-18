import React, { useContext, useState } from "react";
import ConsumablesItemsContext from "../../consumables-context/items/context";
import { ModalContainer } from "../shared/styles";
import FormAddComponent from "./forms/add";
import FormSearchComponent from "./forms/search";
import FormUpdateComponent from "./forms/update";
import { ConsumablesItemsContainer } from "./styles";
import TableComponent from "./table";

const ItemsConsumablesComponent: React.FC = (): JSX.Element => {
  const { consumablesItemsStates } = useContext(ConsumablesItemsContext);
  return (
    <ConsumablesItemsContainer>
      <FormSearchComponent />
      <TableComponent />
      {consumablesItemsStates.isModalOpen ? (
        <ModalContainer>
          {consumablesItemsStates.modalView === "item-consumables add" ? (
            <FormAddComponent />
          ) : null}
          {consumablesItemsStates.modalView === "item-consumables update" ? (
            <FormUpdateComponent />
          ) : null}
        </ModalContainer>
      ) : null}
    </ConsumablesItemsContainer>
  );
};

export default ItemsConsumablesComponent;
