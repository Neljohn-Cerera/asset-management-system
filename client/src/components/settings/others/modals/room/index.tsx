import React, { useContext } from "react";
import SettingsContext from "../../../../../context/settings/context";
import { CButton } from "../../../../shared";
import { ModalButtonContainer } from "../../../styles";
import ModalContentComponent from "../content-container";
import AddRoomComponent from "./add";
import TableComponent from "./table";
import UpdateRoomComponent from "./update";

const ModalRoomComponent: React.FC = (): JSX.Element => {
  const {settingsStates, handleClickCloseModal,handleClickModalChildrenAdd } = useContext(SettingsContext);
  return (
    <ModalContentComponent title="Rooms">
      <TableComponent />
      <ModalButtonContainer>
        <CButton text="Close" onClick={handleClickCloseModal} />
        <CButton ml={20} text="Add New Room" 
             onClick={() => handleClickModalChildrenAdd("room add")}
        />
      </ModalButtonContainer>
       {/* modal children ADD component */}
       {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "room add" ? (
        <AddRoomComponent />
      ) : null}
      {/* modal children UPDATE component */}
      {settingsStates.isModalChildrenOpen &&
      settingsStates.modalChildrenView === "room update" ? (
        <UpdateRoomComponent />
      ) : null}
    </ModalContentComponent>
  );
};

export default ModalRoomComponent;
