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

const ModalItemComponent: React.FC = (): JSX.Element => {
  const {
    stocksStates,
    stocksArrayStates,
    handleChange,
    handleClickCloseModalChildren,
    handleSubmitSearchItemsConsumables,
  } = useContext(StocksContext);
  return (
    <ModalItemContainer>
      <ModalItemForm>
        <p style={{ fontSize: "18px", fontWeight: "700" }}>Items</p>
        <Flex>
          <CInput
            mr={20}
            mb={20}
            label="Search Item"
            inputName="searchItem"
            inputType="text"
            onChange={handleChange}
            value={stocksStates.searchItem}
          />
          <StyledButton
            style={{ width: "150px", marginTop: "32px" }}
            onClick={handleSubmitSearchItemsConsumables}
          >
            Search
          </StyledButton>
        </Flex>
        {stocksArrayStates.itemConsumables.length === 0 ? (
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

export default ModalItemComponent;
