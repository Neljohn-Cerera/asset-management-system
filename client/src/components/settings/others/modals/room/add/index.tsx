import React, { useContext } from "react";
import SettingsContext from "../../../../../../context/settings/context";
import { CButton, CInput } from "../../../../../shared";
import { AddContainer, AddFormContainer, Title } from "../../../../styles";

const AddRoomComponent: React.FC = (): JSX.Element => {
  const {
    settingsStates,
    handleClickCloseChildrenModal,
    handleChange,
    handleSubmitAddRoom,
  } = useContext(SettingsContext);
  return (
    <AddContainer>
      <AddFormContainer>
        <Title>ADD ROOM</Title>
        <CInput
          mb={20}
          label="Room Name"
          inputName="roomName"
          inputType="text"
          onChange={handleChange}
          value={settingsStates.roomName}
        />
        <CInput
          mb={20}
          label="Room No"
          inputName="roomNo"
          inputType="text"
          onChange={handleChange}
          value={settingsStates.roomNo}
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
        <CButton text="Save" onClick={handleSubmitAddRoom} />
        <CButton
          mt={20}
          text="Cancel"
          onClick={handleClickCloseChildrenModal}
        />
      </AddFormContainer>
    </AddContainer>
  );
};

export default AddRoomComponent;
