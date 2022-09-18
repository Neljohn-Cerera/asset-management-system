import React, { useContext } from "react";
import SettingsContext from "../../../../context/settings/context";
import ModalDepartmentComponent from "./department";
import ModalItemCategoryComponent from "./itemcategory";
import ModalRoleComponent from "./role";
import ModalRoomComponent from "./room";
import ModalStatusComponent from "./status";
import ModalSupplierComponent from "./supplier";

const ModalsComponent: React.FC = (): JSX.Element => {
  const { settingsStates } = useContext(SettingsContext);
  return (
    <>
      {settingsStates.modalView === "supplier" ? (
        <ModalSupplierComponent />
      ) : settingsStates.modalView === "department" ? (
        <ModalDepartmentComponent />
      ) : settingsStates.modalView === "itemCategory" ? (
        <ModalItemCategoryComponent />
      ) : settingsStates.modalView === "room" ? (
        <ModalRoomComponent />
      ) : settingsStates.modalView === "status" ? (
        <ModalStatusComponent />
      ) : settingsStates.modalView === "role" ? (
        <ModalRoleComponent />
      ) : null}
    </>
  );
};

export default ModalsComponent;
