import React, { useContext } from "react";
import SettingsContext from "../../../../../context/settings/context";
import { CButton } from "../../../../shared";
import { ModalButtonContainer } from "../../../styles";
import ModalContentComponent from "../content-container";
import AddStatusComponent from "./add";
import TableComponent from "./table";
import UpdateStatusComponent from "./update";

const ModalStatusComponent: React.FC = (): JSX.Element => {
  const { settingsStates, handleClickCloseModal, handleClickModalChildrenAdd } =
    useContext(SettingsContext);
  return (
    <ModalContentComponent title="Status">
      <TableComponent />
      <ModalButtonContainer>
        <CButton text="Close" onClick={handleClickCloseModal} />
        <CButton
          ml={20}
          text="Add New Status"
          onClick={() => handleClickModalChildrenAdd("status add")}
        />
      </ModalButtonContainer>
      {/* modal children ADD component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "status add" ? (
        <AddStatusComponent />
      ) : null}
      {/* modal children UPDATE component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "status update" ? (
        <UpdateStatusComponent />
      ) : null}
    </ModalContentComponent>
  );
};

export default ModalStatusComponent;
