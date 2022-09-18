import { useContext } from "react";
import AccountContext from "../../../context/account/context";
import {
  FormSearch,
  StyledButton,
  StyledInput,
} from "../styles";

const FormSearchComponent: React.FC = () => {
  const { accountStates, handleChange, handleSubmitSearchAccount } =
    useContext(AccountContext);
  return (
    <FormSearch
      onSubmit={handleSubmitSearchAccount}
      style={{ alignItems: "flex-start" }}
    >
      <StyledInput
        style={{ width: "59%" }}
        type="text"
        name="search"
        placeholder="Search"
        onChange={handleChange}
        value={accountStates.search}
      />
      <StyledButton style={{ width: "150px", marginTop: "5px" }} type="submit">
        Submit
      </StyledButton>
    </FormSearch>
  );
};

export default FormSearchComponent;
