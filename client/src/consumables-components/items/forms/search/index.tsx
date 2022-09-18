import { useContext } from "react";
import ConsumablesItemsContext from "../../../../consumables-context/items/context";
import { FormSearch, StyledButton, StyledInput } from "../../styles";

const FormSearchComponent: React.FC = () => {
  const {
    consumablesItemsStates,
    handleChange,
    handleSubmitSearchItemsConsumables,
  } = useContext(ConsumablesItemsContext);
  return (
    <FormSearch
      onSubmit={handleSubmitSearchItemsConsumables}
      style={{ alignItems: "flex-start" }}
    >
      <StyledInput
        style={{ width: "59%" }}
        type="text"
        name="search"
        placeholder="Search"
        onChange={handleChange}
        value={consumablesItemsStates.search}
      />
      <StyledButton style={{ width: "150px", marginTop: "5px" }} type="submit">
        Submit
      </StyledButton>
    </FormSearch>
  );
};

export default FormSearchComponent;
