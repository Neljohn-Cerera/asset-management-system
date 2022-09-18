import React, { useContext } from "react";
import { FormContainer, SubTitle } from "../../styles";
import { Flex } from "../../../shared/styles";
import { CSelect, CButton } from "../../../shared";
import ReportContext from "../../../../context/report/context";
import yearDataGenerator from "../../../../utils/yearDataGenerator";

const FormYearly: React.FC = () => {
  const { reportStates, handleChange, onGenerateClick } =
    useContext(ReportContext);
  const { data } = yearDataGenerator({ from: 2010, to: 2030 });
  return (
    <FormContainer>
      <SubTitle>Yearly Report</SubTitle>
      <Flex>
        <CSelect
          selectData={data}
          label="Year"
          selectName="year"
          onChange={handleChange}
          value={reportStates?.year}
        />
        <CButton
          width={380}
          ph={20}
          ml={10}
          text="Generate"
          onClick={(e) => onGenerateClick(e, "yearly report")}
        />
      </Flex>
    </FormContainer>
  );
};

export default FormYearly;
