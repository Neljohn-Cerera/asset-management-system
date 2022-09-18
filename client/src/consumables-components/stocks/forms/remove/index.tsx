import React, { useContext } from "react";
import { CInput } from "../../../../components/shared";
import StocksContext from "../../../../consumables-context/stocks/context";
import { CButton, CSelect } from "../../../shared";
import { Flex, Label } from "../../../shared/styles";
import { Form, Title } from "../../styles";
import ModalPersonnelComponent from "./modal";

const FormRemoveComponent: React.FC = (): JSX.Element => {
  const {
    handleClickCloseModal,
    stocksStates,
    stocksArrayStates,
    handleChange,
    handleSubmitRemoveStock,
    handleClickModalInsertPersonnel,
  } = useContext(StocksContext);
  const selectData = stocksArrayStates.rooms.map((room) => {
    return { _id: room._id, name: `${room.name}-${room.no}` };
  });
  return (
    <Form>
      {stocksStates.modalChildrenView === "form add insert personnel" ? (
        <ModalPersonnelComponent />
      ) : null}
      <Title>Stocks Out</Title>
      <Flex>
        <CButton
          ph={10}
          mb={20}
          mt={20}
          width={150}
          text="Requested by"
          onClick={handleClickModalInsertPersonnel}
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
          {stocksStates.personnelName}
        </span>
      </Flex>
      <Flex>
        <CInput
          label="Quantity"
          inputName="quantity"
          inputType="number"
          onChange={handleChange}
          value={stocksStates.quantity}
        />
        <CSelect
          ml={20}
          isId
          defaultData="-- ROOM --"
          selectData={selectData}
          label="Room"
          selectName="roomid"
          onChange={handleChange}
          value={stocksStates?.roomid}
        />
      </Flex>

      <Flex column>
        <Label mt={20} align="left">
          Item :{" "}
          <b style={{ fontSize: "18px", marginLeft: "10px" }}>
            {stocksStates.itemName}
          </b>
        </Label>
        <Label mt={20} align="left">
          Description :{" "}
          <b style={{ fontSize: "18px", marginLeft: "10px" }}>
            {stocksStates.itemDescription}
          </b>
        </Label>

        <Label mt={20} align="left">
          Current Quantity :{" "}
          <b style={{ fontSize: "18px", marginLeft: "10px" }}>
            {stocksStates.currentQuantity}
          </b>
        </Label>
        <Label mt={20} align="left">
          Unit :{" "}
          <b style={{ fontSize: "18px", marginLeft: "10px" }}>
            {stocksStates.unitName}
          </b>
        </Label>
      </Flex>

      <Flex>
        <CButton mt={20} text="Cancel" onClick={handleClickCloseModal} />
        <CButton
          mt={20}
          ml={20}
          text="Submit"
          onClick={handleSubmitRemoveStock}
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

export default FormRemoveComponent;
