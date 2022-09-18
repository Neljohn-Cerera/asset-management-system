import React, { useContext } from "react";
import SettingsContext from "../../../context/settings/context";
import { OthersContainer, Title } from "../styles";
import ButtonGroupComponent from "./button-group";
import ModalsComponent from "./modals";

const OthersComponent: React.FC = (): JSX.Element => {
  const {
    settingsStates,
    handleClickRole,
    handleClickRoom,
    handleClickStatus,
    handleClickSupplier,
    handleClickDepartment,
    handleClickItemCategory,
  } = useContext(SettingsContext);

  return (
    <OthersContainer>
      <Title>Others</Title>
      <ButtonGroupComponent
        onClickLeft={handleClickSupplier}
        btnLeftText="Supplier"
        onClickRight={handleClickDepartment}
        btnRightText="Department"
      />
      <ButtonGroupComponent
        onClickLeft={handleClickItemCategory}
        btnLeftText="Item Category"
        onClickRight={handleClickRoom}
        btnRightText="Room"
      />
      <ButtonGroupComponent
        onClickLeft={handleClickRole}
        btnLeftText="Role"
        onClickRight={handleClickStatus}
        btnRightText="Status"
      />
      {settingsStates.isModalOpen ? <ModalsComponent /> : null}
    </OthersContainer>
  );
};

export default OthersComponent;
