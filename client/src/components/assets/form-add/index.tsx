import { useContext } from "react";
import {
  Form,
  FormGroup,
  StyledButton,
  StyledInput,
  StyledSelect,
} from "../styles";
import AssetContext from "../../../context/asset/context";

const AssetFormAddComponent: React.FC = () => {
  const {
    assetStates,
    assetArrayStates,
    handleChange,
    handleSubmitAddAsset,
    handleClickCloseModal,
  } = useContext(AssetContext);
  return (
    <Form onSubmit={handleSubmitAddAsset}>
      <h2>Assets Registration</h2>
      <FormGroup>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginRight: "10px",
          }}
        >
          <label style={{ textAlign: "left", fontSize: "14px" }} htmlFor="name">
            Item code
          </label>
          <StyledInput
            required
            type="text"
            name="code"
            placeholder="Item Code"
            onChange={handleChange}
            value={assetStates.code}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label
            style={{ textAlign: "left", fontSize: "14px" }}
            htmlFor="serialNumber"
          >
            Serial Number
          </label>
          <StyledInput
            required
            type="text"
            name="serialNumber"
            placeholder="Serial Number"
            onChange={handleChange}
            value={assetStates.serialNumber}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginRight: "10px",
            marginTop: "10px",
          }}
        >
          <label style={{ textAlign: "left", fontSize: "14px" }} htmlFor="name">
            Item name
          </label>
          <StyledInput
            style={{ margin: "0px" }}
            required
            type="text"
            name="name"
            placeholder="Item Name"
            onChange={handleChange}
            value={assetStates.name}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <label
            style={{ textAlign: "left", fontSize: "14px" }}
            htmlFor="price"
          >
            Price
          </label>
          <StyledInput
            style={{ margin: "0px" }}
            required
            type="text"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            value={assetStates.price}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginRight: "15px",
            marginTop: "10px",
          }}
        >
          <label
            style={{ textAlign: "left", fontSize: "14px" }}
            htmlFor="purchaseDate"
          >
            Purchase Date
          </label>
          <StyledInput
            required
            type="date"
            name="purchaseDate"
            placeholder="Purchase Date"
            onChange={handleChange}
            value={assetStates.purchaseDate}
          />
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          <label
            style={{ textAlign: "left", fontSize: "14px" }}
            htmlFor="useFullLife"
          >
            Usefull Life
          </label>
          <StyledInput
            style={{ margin: "0px" }}
            required
            type="number"
            name="useFullLife"
            placeholder="Usefull life in Years"
            onChange={handleChange}
            value={assetStates.useFullLife}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <StyledSelect
          name="supplier"
          id="supplier"
          onChange={handleChange}
          value={assetStates.supplier}
        >
          <option value="supplier">--Supplier--</option>
          {assetArrayStates.suppliers.map((supplier, index) => (
            <option key={index} value={supplier.name}>
              {supplier.name}
            </option>
          ))}
        </StyledSelect>
      </FormGroup>
      <FormGroup>
        <StyledSelect
          name="category"
          id="category"
          onChange={handleChange}
          value={assetStates.category}
        >
          <option value="category">--Category--</option>

          {assetArrayStates.categories.map((category, index) => (
            <option key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </StyledSelect>
      </FormGroup>
      {!assetStates.error ? null : (
        <p
          style={{
            fontSize: 16,
            color: "red",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {assetStates.error}
        </p>
      )}
      <FormGroup>
        <StyledButton
          onClick={handleClickCloseModal}
          style={{ marginRight: "5px" }}
          type="button"
        >
          Close
        </StyledButton>
        <StyledButton
          // disabled={formik.isSubmitting ? true : false}
          type="submit"
        >
          Submit
        </StyledButton>
      </FormGroup>
    </Form>
  );
};

export default AssetFormAddComponent;
