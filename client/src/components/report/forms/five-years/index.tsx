import React, { useContext } from "react";
import { FormContainer, SubTitle } from "../../styles";
import ReportContext from "../../../../context/report/context";
import { Flex } from "../../../shared/styles";
import { CButton, CSelect } from "../../../shared";
import yearDataGenerator from "../../../../utils/yearDataGenerator";

const FormFiveYears: React.FC = () => {
  const { reportStates, handleChange, onGenerateClick } =
    useContext(ReportContext);
  const { data } = yearDataGenerator({ from: 2010, to: 2030 });

  return (
    <FormContainer>
      <SubTitle>5 Years Report</SubTitle>
      <Flex>
        <CSelect
          selectData={data}
          label=" Start Year"
          selectName="startYear"
          onChange={handleChange}
          value={reportStates?.startYear}
        />
        <CSelect
          selectDisabled
          selectData={data}
          ml={10}
          label=" End Year"
          selectName="endYear"
          onChange={handleChange}
          value={reportStates?.endYear}
        />
        <CButton
          ph={20}
          ml={10}
          text="Generate"
          onClick={(e) => onGenerateClick(e,"five years report")}
        />
      </Flex>
    </FormContainer>
  );
};

export default FormFiveYears;
