import { useContext } from "react";
import AssetContext from "../../../context/asset/context";
import { StyledInput, FormSearch, StyledButton } from "../styles";

const FormSearchComponent: React.FC = () => {
  const { assetStates, handleChange, handleSubmitSearchAsset } =
    useContext(AssetContext);
  return (
    <FormSearch
      onSubmit={handleSubmitSearchAsset}
      style={{ alignItems: "flex-start" }}
    >
      <StyledInput
        style={{ width: "59%" }}
        placeholder="Search by Item / Item code / Serial number"
        name="search"
        type="text"
        onChange={handleChange}
        value={assetStates.search}
      />
      <StyledButton style={{ width: "150px", marginTop: "5px" }} type="submit">
        Submit
      </StyledButton>
    </FormSearch>
  );
};

export default FormSearchComponent;
