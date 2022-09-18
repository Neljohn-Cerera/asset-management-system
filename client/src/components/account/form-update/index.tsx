import { useContext } from "react";
import AccountContext from "../../../context/account/context";
import {
  Form,
  FormGroup,
  StyledButton,
  StyledInput,
  StyledSelect,
} from "../styles";

const AccountFormUpdateComponent: React.FC = () => {
  const {
    accountStates,
    accountArrayStates,
    handleChange,
    handleClickCloseModal,
    handleSubmitUpdateAccount,
  } = useContext(AccountContext);
  return (
    <Form>
      <h2>Account Update</h2>
      <div
        style={{
          width: "98%",
        }}
      >
        <StyledInput
          style={{ backgroundColor: "gray", color: "#ffffff" }}
          disabled
          type="text"
          name="name"
          value={accountStates.fullName ? accountStates.fullName : "None"}
        />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
      >
        <StyledInput
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={accountStates.email}
        />

        <StyledSelect
          name="role"
          id="role"
          onChange={handleChange}
          value={accountStates.role}
        >
          <option value="role">--Role--</option>
          {accountArrayStates.roles.map((role, index) => (
            <option key={index} value={role?.name}>
              {role?.name}
            </option>
          ))}
        </StyledSelect>
      </div>
      <div
        style={{
          width: "98%",
        }}
      >
        <StyledInput
          type="passWord"
          name="passWord"
          placeholder="Password"
          onChange={handleChange}
          value={accountStates.passWord}
        />
      </div>

      {!accountStates.error ? null : (
        <p
          style={{
            fontSize: 16,
            color: "red",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {accountStates.error}
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
          onClick={handleSubmitUpdateAccount}
          disabled={!accountStates.fullName ? true : false}
          type="submit"
        >
          Save
        </StyledButton>
      </FormGroup>
    </Form>
  );
};

export default AccountFormUpdateComponent;
