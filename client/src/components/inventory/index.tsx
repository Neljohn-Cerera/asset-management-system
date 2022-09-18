import React, { useContext } from "react";
import InventoryContext from "../../context/inventory/context";
import { HistoryContainer } from "./styles";
import InventoryFormAddComponent from "./form-add";
import InventoryTableComponent from "./table";
import { ModalContainer } from "../shared/styles";

const InventoryComponent: React.FC = () => {
  const {
    inventoryStates,
    inventoryArrayStates,
    handleClickNext,
    handleClickPrevious,
  } = useContext(InventoryContext);
  return (
    <HistoryContainer>
      {/* Table Component */}
      <InventoryTableComponent />
      <div>
        <button
          disabled={inventoryStates.page === 1 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickPrevious}
        >
          Prev
        </button>
        <button
          disabled={inventoryArrayStates.histories?.length! < 5 ? true : false}
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={handleClickNext}
        >
          Next
        </button>
      </div>
      {/* Modal Component */}
      {inventoryStates.isModalOpen ? (
        <ModalContainer>
          <InventoryFormAddComponent />
        </ModalContainer>
      ) : null}
    </HistoryContainer>
  );
};

export default InventoryComponent;
