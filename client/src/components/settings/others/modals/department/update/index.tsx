import React, { useContext } from "react";
import SettingsContext from "../../../../../../context/settings/context";
import { CButton, CInput } from "../../../../../shared";
import { AddContainer, AddFormContainer, Title } from "../../../../styles";

const UpdateDepartmentComponent: React.FC = (): JSX.Element => {
  const {
    settingsStates,
    handleClickCloseChildrenModal,
    handleChange,
    handleSubmitUpdateDepartment,
  } = useContext(SettingsContext);
  return (
    <AddContainer>
      <AddFormContainer>
        <Title>UPDATE DEPARTMENT</Title>
        <CInput
          mb={20}
          label="Department Name"
          inputName="departmentName"
          inputType="text"
          onChange={handleChange}
          value={settingsStates.departmentName}
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
        <CButton text="Save" onClick={handleSubmitUpdateDepartment} />
        <CButton
          mt={20}
          text="Cancel"
          onClick={handleClickCloseChildrenModal}
        />
      </AddFormContainer>
    </AddContainer>
  );
};

export default UpdateDepartmentComponent;
