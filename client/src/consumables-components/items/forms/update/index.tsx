import React, { useContext } from "react";
import { CInput } from "../../../../components/shared";
import ConsumablesItemsContext from "../../../../consumables-context/items/context";
import { CButton, CSelect } from "../../../shared";
import { Flex, Label } from "../../../shared/styles";
import { Form } from "../../styles";

const FormUpdateComponent: React.FC = (): JSX.Element => {
  const {
    consumablesItemsArrayStates,
    consumablesItemsStates,
    handleChange,
    handleSubmitUpdateItemConsumables,
    handleClickCloseModal,
  } = useContext(ConsumablesItemsContext);
  return (
    <Form>
      <Label mb={20} align="center">
        Update Item
      </Label>
      <CInput
        mb={20}
        label="Item name"
        inputName="itemName"
        inputType="text"
        onChange={handleChange}
        value={consumablesItemsStates.itemName}
      />
      <CInput
        mb={20}
        label="Item Description"
        inputName="itemDescription"
        inputType="text"
        onChange={handleChange}
        value={consumablesItemsStates.itemDescription}
      />
      <CSelect
        isId
        mb={20}
        defaultData="-- UNIT --"
        selectData={consumablesItemsArrayStates.units}
        label="Unit"
        selectName="unitid"
        onChange={handleChange}
        value={consumablesItemsStates.unitid}
      />
      <CInput
        mb={20}
        label="Restock Count"
        inputName="restock"
        inputType="text"
        onChange={handleChange}
        value={consumablesItemsStates.restock}
      />
      <Flex>
        <CButton mt={20} text="Cancel" onClick={handleClickCloseModal} />
        <CButton
          mt={20}
          ml={20}
          text="Save"
          onClick={(e) => {
            handleSubmitUpdateItemConsumables(e);
          }}
        />
      </Flex>
    </Form>
  );
};

export default FormUpdateComponent;
