import React, { useContext } from "react";
import StockReportsContext from "../../../../consumables-context/reports/context";
import yearDataGenerator from "../../../../utils/yearDataGenerator";
import { CButton, CSelect } from "../../../shared";
import { Flex } from "../../../shared/styles";
import { FormContainer, SubTitle } from "../../styles";

const FormStockOutComponent: React.FC = () => {
  const { onGenerateClick, handleChange, stockReportsStates } =
    useContext(StockReportsContext);
  const { data } = yearDataGenerator({ from: 2020, to: 2040 });
  return (
    <FormContainer>
      <SubTitle>Stock Out Report</SubTitle>
      <Flex>
        <CSelect
          defaultData="-- Year --"
          selectData={data}
          label="Year"
          selectName="year"
          onChange={handleChange}
          value={stockReportsStates.year}
        />
        <CButton
          width={380}
          ph={20}
          ml={10}
          text="Generate"
          onClick={() => onGenerateClick("stocks out")}
        />
      </Flex>
    </FormContainer>
  );
};

export default FormStockOutComponent;
