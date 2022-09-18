import React, { useContext } from "react";
import SettingsContext from "../../../../../../context/settings/context";
import { CButton, CInput } from "../../../../../shared";
import { AddContainer, AddFormContainer, Title } from "../../../../styles";

const AddSupplierComponent: React.FC = (): JSX.Element => {
  const {
    settingsStates,
    handleClickCloseChildrenModal,
    handleChange,
    handleSubmitAddSupplier,
  } = useContext(SettingsContext);
  return (
    <AddContainer>
      <AddFormContainer>
        <Title>ADD SUPPLIER</Title>
        <CInput
          mb={20}
          label="Supplier Name"
          inputName="supplierName"
          inputType="text"
          onChange={handleChange}
          value={settingsStates.supplierName}
        />
        <CInput
          mb={20}
          label="Supplier Address"
          inputName="supplierAddress"
          inputType="text"
          onChange={handleChange}
          value={settingsStates.supplierAddress}
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
        <CButton text="Save" onClick={handleSubmitAddSupplier} />
        <CButton
          mt={20}
          text="Cancel"
          onClick={handleClickCloseChildrenModal}
        />
      </AddFormContainer>
    </AddContainer>
  );
};

export default AddSupplierComponent;
