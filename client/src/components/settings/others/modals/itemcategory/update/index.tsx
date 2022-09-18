import React, { useContext } from "react";
import SettingsContext from "../../../../../../context/settings/context";
import { CButton, CInput } from "../../../../../shared";
import { AddContainer, AddFormContainer, Title } from "../../../../styles";

const UpdateItemCategoryComponent: React.FC = (): JSX.Element => {
  const {
    settingsStates,
    handleClickCloseChildrenModal,
    handleChange,
    handleSubmitUpdateItemCategory,
  } = useContext(SettingsContext);
  return (
    <AddContainer>
      <AddFormContainer>
        <Title>UPDATE ITEM CATEGORY</Title>
        <CInput
          mb={20}
          label="Item Category Name"
          inputName="itemCategoryName"
          inputType="text"
          onChange={handleChange}
          value={settingsStates.itemCategoryName}
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
        <CButton text="Save" onClick={handleSubmitUpdateItemCategory} />
        <CButton
          mt={20}
          text="Cancel"
          onClick={handleClickCloseChildrenModal}
        />
      </AddFormContainer>
    </AddContainer>
  );
};

export default UpdateItemCategoryComponent;
