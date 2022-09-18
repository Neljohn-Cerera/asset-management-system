import React, { useContext } from "react";
import { CButton } from "../../../../shared";
import { ModalButtonContainer } from "../../../styles";
import ModalContentComponent from "../content-container";
import TableComponent from "./table";
import SettingsContext from "../../../../../context/settings/context";
import AddItemCategoryComponent from "./add";
import UpdateItemCategoryComponent from "./update";

const ModalItemCategoryComponent: React.FC = (): JSX.Element => {
  const { settingsStates, handleClickCloseModal, handleClickModalChildrenAdd } =
    useContext(SettingsContext);
  return (
    <ModalContentComponent title="Item Categories">
      <TableComponent />
      <ModalButtonContainer>
        <CButton text="Close" onClick={handleClickCloseModal} />
        <CButton
          ml={20}
          text="Add New Item Category"
          onClick={() => handleClickModalChildrenAdd("itemCategory add")}
        />
      </ModalButtonContainer>
      {/* modal children ADD component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "itemCategory add" ? (
        <AddItemCategoryComponent />
      ) : null}
      {/* modal children UPDATE component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "itemCategory update" ? (
        <UpdateItemCategoryComponent />
      ) : null}
    </ModalContentComponent>
  );
};

export default ModalItemCategoryComponent;
