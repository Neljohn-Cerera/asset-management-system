import React, { useContext } from "react";
import { CButton, CCheckBox, CInput, CSelect } from "../../shared";
import { Flex, Label } from "../../shared/styles";
import { DashboardContainer, Title } from "../styles";
import SettingsContext from "../../../context/settings/context";
import yearDataGenerator from "../../../utils/yearDataGenerator";

const DashboardComponent: React.FC = (): JSX.Element => {
  const {
    settingsStates,
    handleChange,
    handleChangeStartYear,
    handleChangeIsUpdate,
    handleClickSave,
    handleClickRefresh,
  } = useContext(SettingsContext);
  const { data } = yearDataGenerator({ from: 2010, to: 2030 });
  return (
    <DashboardContainer>
      <Title>Settings</Title>
      <Flex>
        <CCheckBox
          label="Update Settings"
          checkBoxName="isUpdate"
          checked={settingsStates.isUpdate}
          onChange={handleChangeIsUpdate}
        />
        <CButton
          width={70}
          textSize={12}
          ph={5}
          ml={10}
          isDisabled={!settingsStates.isUpdate}
          text="Refresh"
          onClick={handleClickRefresh}
        />
      </Flex>
      <CSelect
        selectDisabled={!settingsStates.isUpdate}
        selectData={data}
        label="Dashboard Year Statistics"
        selectName="year"
        onChange={handleChange}
        value={settingsStates.year}
      />
      <Label align="left" mt={10}>
        Dashboard Chart
      </Label>
      <Flex>
        <CSelect
          selectDisabled={!settingsStates.isUpdate}
          selectData={data}
          width={150}
          label="Start Year"
          selectName="startYear"
          onChange={handleChangeStartYear}
          value={settingsStates.startYear}
        />
        <CInput
          inputDisabled={true}
          ml={10}
          width={150}
          label="End Year"
          inputName="endYear"
          inputType="text"
          required={false}
          value={settingsStates.endYear}
        />
      </Flex>
      <CButton
        ph={20}
        mt={20}
        text="Save"
        onClick={handleClickSave}
        isDisabled={!settingsStates.isUpdate}
      />
    </DashboardContainer>
  );
};

export default DashboardComponent;
