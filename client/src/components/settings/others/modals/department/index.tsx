import React, { useContext } from "react";
import SettingsContext from "../../../../../context/settings/context";
import { CButton } from "../../../../shared";
import { ModalButtonContainer } from "../../../styles";
import ModalContentComponent from "../content-container";
import AddDepartmentComponent from "./add";
import TableComponent from "./table";
import UpdateDepartmentComponent from "./update";

const ModalDepartmentComponent: React.FC = (): JSX.Element => {
  const { settingsStates, handleClickCloseModal, handleClickModalChildrenAdd } =
    useContext(SettingsContext);
  return (
    <ModalContentComponent title="Departments">
      <TableComponent />
      <ModalButtonContainer>
        <CButton text="Close" onClick={handleClickCloseModal} />
        <CButton
          ml={20}
          text="Add New Department"
          onClick={() => handleClickModalChildrenAdd("department add")}
        />
      </ModalButtonContainer>
      {/* modal children ADD component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "department add" ? (
        <AddDepartmentComponent />
      ) : null}
      {/* modal children UPDATE component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "department update" ? (
        <UpdateDepartmentComponent />
      ) : null}
    </ModalContentComponent>
  );
};

export default ModalDepartmentComponent;
