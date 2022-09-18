import { useContext } from "react";
import PersonnelContext from "../../../context/personnel/context";
import { FormSearch, StyledInput, StyledButton } from "../styles";

const FormSearchComponent: React.FC = (): JSX.Element => {
  const { personnelStates, handleChange, handleSubmitSearchPersonnel } =
    useContext(PersonnelContext);
  return (
    <FormSearch
      onSubmit={handleSubmitSearchPersonnel}
      style={{ alignItems: "flex-start" }}
    >
      <StyledInput
        style={{ width: "58%" }}
        placeholder="Search by IDnumber / firstname / lastname"
        type="text"
        name="search"
        onChange={handleChange}
        value={personnelStates.search}
      />
      <StyledButton style={{ width: "150px", marginTop: "5px" }} type="submit">
        Submit
      </StyledButton>
    </FormSearch>
  );
};

export default FormSearchComponent;
