import React, { useContext } from "react";
import SettingsContext from "../../../../../context/settings/context";
import { CButton } from "../../../../shared";
import { ModalButtonContainer } from "../../../styles";
import ModalContentComponent from "../content-container";
import TableComponent from "./table";
import AddSupplierComponent from "./add";
import UpdateSupplierComponent from "./update";

const ModalSupplierComponent: React.FC = (): JSX.Element => {
  const { settingsStates, handleClickCloseModal, handleClickModalChildrenAdd } =
    useContext(SettingsContext);
  return (
    <ModalContentComponent title="Suppliers">
      {/* table */}
      <TableComponent />
      {/* button group */}
      <ModalButtonContainer>
        <CButton text="Close" onClick={handleClickCloseModal} />
        <CButton
          onClick={() => handleClickModalChildrenAdd("supplier add")}
          ml={20}
          text="Add New Supplier"
        />
      </ModalButtonContainer>
      {/* modal children ADD component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "supplier add" ? (
        <AddSupplierComponent />
      ) : null}
      {/* modal children UPDATE component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "supplier update" ? (
        <UpdateSupplierComponent />
      ) : null}
    </ModalContentComponent>
  );
};

export default ModalSupplierComponent;
