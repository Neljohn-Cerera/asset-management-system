import React, { useContext } from "react";
import InventoryContext from "../../../context/inventory/context";
import {
  Form,
  FormGroup,
  StyledInput,
  StyledButton,
  SearchContainer,
  ButtonSearch,
  StyledSelect,
} from "../styles";
import ModalItemComponent from "./modal-item";
import ModalPersonnelComponent from "./modal-personnel";

const InventoryFormAddComponent: React.FC = (): JSX.Element => {
  const {
    inventoryStates,
    inventoryArrayStates,
    handleClickAddInventoryClose,
    handleClickAddInventoryInsertItem,
    handleClickAddInventoryInsertPersonnel,
    handleSubmitAddInventory,
    handleChange,
  } = useContext(InventoryContext);

  let fromYear = 2010;
  let toYear = 2030;
  let years = [];
  for (fromYear; fromYear <= toYear; fromYear++) {
    years.push(fromYear);
  }

  return (
    <Form>
      <h2>Add Inventory</h2>
      {/* Modals */}
      {inventoryStates.modalView === "item search" ? (
        <ModalItemComponent />
      ) : inventoryStates.modalView === "personnel search" ? (
        <ModalPersonnelComponent />
      ) : null}
      {/* Insert Item */}
      <SearchContainer>
        <ButtonSearch onClick={(e) => handleClickAddInventoryInsertItem(e)}>
          Insert item
        </ButtonSearch>
        <p>
          Item :<span>{inventoryStates.itemName}</span>
        </p>
      </SearchContainer>
      {/* Insert Personnel */}
      <SearchContainer>
        <ButtonSearch
          onClick={(e) => handleClickAddInventoryInsertPersonnel(e)}
        >
          Insert Personnel
        </ButtonSearch>
        <p>
          Personnel :<span>{inventoryStates.fullName}</span>
        </p>
      </SearchContainer>
      <FormGroup>
        <StyledSelect
          name="roomid"
          onChange={handleChange}
          value={inventoryStates.roomid}
        >
          <option value="room">-- Room --</option>
          {inventoryArrayStates.rooms.map((room, index) => (
            <option key={index} value={room._id}>
              {`${room.name} ${room.no}`}
            </option>
          ))}
        </StyledSelect>
        <StyledSelect
          name="status"
          onChange={handleChange}
          value={inventoryStates.status}
        >
          <option value="status">-- Status --</option>
          {inventoryArrayStates.status?.map((stat, index) => (
            <option key={stat._id} value={stat.name}>
              {stat.name}
            </option>
          ))}
        </StyledSelect>
      </FormGroup>
      <FormGroup>
        <StyledSelect
          name="year"
          onChange={handleChange}
          value={inventoryStates.year}
        >
          <option value="year">-- Year --</option>
          {years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </StyledSelect>
      </FormGroup>

      <FormGroup>
        <div
          style={{
            borderColor: "red",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <StyledInput
            type="text"
            name="remarks"
            placeholder="Type remarks"
            onChange={handleChange}
            value={inventoryStates.remarks}
          />
        </div>
      </FormGroup>

      <FormGroup>
        <StyledButton
          onClick={(e) => handleClickAddInventoryClose(e)}
          style={{ marginRight: "5px" }}
          type="button"
        >
          Close
        </StyledButton>
        <StyledButton
          // disabled={isSubmitting ? true : false}
          onClick={(e) => handleSubmitAddInventory(e)}
          type="button"
        >
          Submit
        </StyledButton>
      </FormGroup>
      {!inventoryStates.error ? null : (
        <p
          style={{
            fontSize: 16,
            color: "red",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {inventoryStates.error}
        </p>
      )}
    </Form>
  );
};

export default InventoryFormAddComponent;
