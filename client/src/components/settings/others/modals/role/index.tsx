import React, { useContext } from "react";
import SettingsContext from "../../../../../context/settings/context";
import { CButton } from "../../../../shared";
import { ModalButtonContainer } from "../../../styles";
import ModalContentComponent from "../content-container";
import AddRoleComponent from "./add";
import TableComponent from "./table";
import UpdateRoleComponent from "./update";

const ModalRoleComponent: React.FC = (): JSX.Element => {
  const { settingsStates, handleClickCloseModal, handleClickModalChildrenAdd } =
    useContext(SettingsContext);
  return (
    <ModalContentComponent title="Roles">
      <TableComponent />
      <ModalButtonContainer>
        <CButton text="Close" onClick={handleClickCloseModal} />
        <CButton
          ml={20}
          text="Add New Role"
          onClick={() => handleClickModalChildrenAdd("role add")}
        />
      </ModalButtonContainer>
      {/* modal children ADD component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "role add" ? (
        <AddRoleComponent />
      ) : null}
      {/* modal children UPDATE component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "role update" ? (
        <UpdateRoleComponent />
      ) : null}
    </ModalContentComponent>
  );
};

export default ModalRoleComponent;
