import { useContext } from "react";
import StocksContext from "../../../../consumables-context/stocks/context";
import { FormSearch, StyledButton, StyledInput } from "../../styles";

const FormSearchComponent: React.FC = () => {
  const {
    stocksStates,
    handleChange,
    handleSubmitSearchItemsConsumablesStocks,
  } = useContext(StocksContext);
  return (
    <FormSearch
      style={{ alignItems: "flex-start" }}
      onSubmit={handleSubmitSearchItemsConsumablesStocks}
    >
      <StyledInput
        style={{ width: "59%" }}
        type="text"
        name="search"
        placeholder="Search"
        onChange={handleChange}
        value={stocksStates.search}
      />
      <StyledButton style={{ width: "150px", marginTop: "5px" }} type="submit">
        Submit
      </StyledButton>
    </FormSearch>
  );
};

export default FormSearchComponent;
