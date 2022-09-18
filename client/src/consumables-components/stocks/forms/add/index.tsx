import React, { useContext } from "react";
import { CInput } from "../../../../components/shared";
import { CButton, CSelect } from "../../../shared";
import { Flex, Label } from "../../../shared/styles";
import { Form, Title } from "../../styles";
import StocksContext from "../../../../consumables-context/stocks/context";
import ModalItemComponent from "./modal";

const FormAddComponent: React.FC = (): JSX.Element => {
  const {
    stocksStates,
    handleChange,
    handleSubmitAddItemConsumablesStock,
    handleClickCloseModal,
    handleClickModalInsertItem,
  } = useContext(StocksContext);
  return (
    <Form>
      {stocksStates.modalChildrenView === "form add insert item" ? (
        <ModalItemComponent />
      ) : null}
      <Title>Add Stocks</Title>
      <Flex>
        <CButton
          ph={10}
          mb={20}
          mt={20}
          width={150}
          text="Insert item"
          onClick={handleClickModalInsertItem}
        />
        <span
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginLeft: "20px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          {stocksStates.itemName}
        </span>
      </Flex>
      <Flex>
        <CInput
          required
          label="Purchase Date"
          inputName="purchaseDate"
          inputType="date"
          onChange={handleChange}
          value={stocksStates.purchaseDate}
        />
        <CInput
          ml={20}
          label="Quantity"
          inputName="quantity"
          inputType="number"
          onChange={handleChange}
          value={stocksStates.quantity}
        />
      </Flex>

      <Flex>
        <CButton mt={20} text="Cancel" onClick={handleClickCloseModal} />
        <CButton
          mt={20}
          ml={20}
          text="Submit"
          onClick={handleSubmitAddItemConsumablesStock}
        />
      </Flex>

      {stocksStates.error && (
        <Flex>
          <Label style={{ color: "red" }} align="center">
            {stocksStates.error}
          </Label>
        </Flex>
      )}
    </Form>
  );
};

export default FormAddComponent;
