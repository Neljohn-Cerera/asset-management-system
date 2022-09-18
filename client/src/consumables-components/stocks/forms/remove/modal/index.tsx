import React, { useContext } from "react";
import StocksContext from "../../../../../consumables-context/stocks/context";
import { CButton, CInput } from "../../../../shared";
import { Flex, Label } from "../../../../shared/styles";
import {
  ModalItemContainer,
  ModalItemForm,
  StyledButton,
} from "../../../styles";
import TableComponent from "./table";

const ModalPersonnelComponent: React.FC = (): JSX.Element => {
  const {
    stocksStates,
    stocksArrayStates,
    handleChange,
    handleClickCloseModalChildren,
    handleSubmitSearchPersonnel,
  } = useContext(StocksContext);
  return (
    <ModalItemContainer>
      <ModalItemForm>
        <p style={{ fontSize: "18px", fontWeight: "700" }}>Personnels</p>
        <Flex>
          <CInput
            mr={20}
            mb={20}
            label="Search Personnel"
            inputName="searchPersonnel"
            inputType="text"
            onChange={handleChange}
            value={stocksStates.searchPersonnel}
          />
          <StyledButton
            style={{ width: "150px", marginTop: "32px" }}
            onClick={handleSubmitSearchPersonnel}
          >
            Search
          </StyledButton>
        </Flex>
        {stocksArrayStates.personnels.length === 0 ? (
          <p
            style={{
              fontSize: "18px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            NO DATA
          </p>
        ) : (
          <TableComponent />
        )}

        <CButton text="Close" onClick={handleClickCloseModalChildren} />
      </ModalItemForm>
    </ModalItemContainer>
  );
};

export default ModalPersonnelComponent;
