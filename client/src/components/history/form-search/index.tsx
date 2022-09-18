import React, { useContext } from "react";
import HistoryContext from "../../../context/history/context";
import { FormSearch, StyledButton, StyledInput } from "../styles";

const FormSearchComponent: React.FC = () => {
  const { historyStates, handleChange, handleSubmit } =
    useContext(HistoryContext);
  return (
    <FormSearch onSubmit={handleSubmit} style={{ alignItems: "flex-start" }}>
      <StyledInput
        style={{ width: "59%" }}
        placeholder="Search by code | serial "
        type="text"
        name="search"
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
