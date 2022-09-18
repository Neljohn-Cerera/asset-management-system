import React, { useContext } from "react";
import SettingsContext from "../../../../../../context/settings/context";
import { CButton, CInput } from "../../../../../shared";
import { AddContainer, AddFormContainer, Title } from "../../../../styles";

const UpdateStatusComponent: React.FC = (): JSX.Element => {
  const {
    settingsStates,
    handleClickCloseChildrenModal,
    handleChange,
    handleSubmitUpdateStatus,
  } = useContext(SettingsContext);
  return (
    <AddContainer>
      <AddFormContainer>
        <Title>UPDATE STATUS</Title>
        <CInput
          mb={20}
          label="Status Name"
          inputName="statusName"
          inputType="text"
          onChange={handleChange}
          value={settingsStates.statusName}
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
        <CButton text="Save" onClick={handleSubmitUpdateStatus} />
        <CButton
          mt={20}
          text="Cancel"
          onClick={handleClickCloseChildrenModal}
        />
      </AddFormContainer>
    </AddContainer>
  );
};

export default UpdateStatusComponent;
