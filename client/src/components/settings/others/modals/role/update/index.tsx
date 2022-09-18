import React, { useContext } from "react";
import SettingsContext from "../../../../../../context/settings/context";
import { CButton, CInput } from "../../../../../shared";
import { AddContainer, AddFormContainer, Title } from "../../../../styles";

const UpdateRoleComponent: React.FC = (): JSX.Element => {
  const {
    settingsStates,
    handleClickCloseChildrenModal,
    handleChange,
    handleSubmitUpdateRole,
  } = useContext(SettingsContext);
  return (
    <AddContainer>
      <AddFormContainer>
        <Title>UPDATE ROLE</Title>
        <CInput
          mb={20}
          label="Role Name"
          inputName="roleName"
          inputType="text"
          onChange={handleChange}
          value={settingsStates.roleName}
        />
        {!settingsStates.error ? null : (
          <p
            style={{
              fontSize: 16,
              color: "red",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {settingsStates.error}
          </p>
        )}
        <CButton text="Save" onClick={handleSubmitUpdateRole} />
        <CButton
          mt={20}
          text="Cancel"
          onClick={handleClickCloseChildrenModal}
        />
      </AddFormContainer>
    </AddContainer>
  );
};

export default UpdateRoleComponent;
