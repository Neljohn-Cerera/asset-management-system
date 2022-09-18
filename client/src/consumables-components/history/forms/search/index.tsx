import { useContext } from "react";
import HistoryContext from "../../../../consumables-context/histories/context";
import { FormSearch, StyledButton, StyledInput } from "../../styles";

const FormSearchComponent: React.FC = () => {
  const { historyStates, handleChange, handleSubmitSearchStockHistories } =
    useContext(HistoryContext);
  return (
    <FormSearch
      style={{ alignItems: "flex-start" }}
      onSubmit={handleSubmitSearchStockHistories}
    >
      <StyledInput
        style={{ width: "59%" }}
        type="text"
        name="search"
        placeholder="Search"
        onChange={handleChange}
        value={historyStates.search}
      />
      <StyledButton style={{ width: "150px", marginTop: "5px" }} type="submit">
        Submit
      </StyledButton>
    </FormSearch>
  );
};

export default FormSearchComponent;
