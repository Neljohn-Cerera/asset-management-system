import { useContext } from "react";
import {
  Form,
  FormGroup,
  StyledButton,
  StyledInput,
  StyledSelect,
} from "../styles";
import PersonnelContext from "../../../context/personnel/context";

const PersonnelFormAddAccountComponent: React.FC = (): JSX.Element => {
  const {
    personnelStates,
    personnelArrayStates,
    handleClickCloseModal,
    handleChange,
    handleSubmitAddAccountPersonnel,
  } = useContext(PersonnelContext);
  return (
    <Form onSubmit={handleSubmitAddAccountPersonnel}>
      <h2>Account Registration</h2>
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
          value={
            personnelStates?.firstName && personnelStates?.lastName
              ? `${personnelStates?.firstName} ${personnelStates?.lastName}`
              : "None"
          }
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
          value={personnelStates.email}
        />
        <StyledSelect
          name="role"
          onChange={handleChange}
          value={personnelStates.role}
        >
          <option value="role">--Role--</option>
          {personnelArrayStates.roles.map((role, index) => (
            <option key={index} value={role.name}>
              {role.name}
            </option>
          ))}
        </StyledSelect>
      </div>
      {!personnelStates.error ? null : (
        <p
          style={{
            fontSize: 16,
            color: "red",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {personnelStates.error}
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
          disabled={
            personnelStates?.firstName && personnelStates?.lastName
              ? false
              : true
          }
          type="submit"
        >
          Submit
        </StyledButton>
      </FormGroup>
    </Form>
  );
};

export default PersonnelFormAddAccountComponent;
