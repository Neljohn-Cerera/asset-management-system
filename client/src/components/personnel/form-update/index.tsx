import { useContext } from "react";
import {
  Form,
  FormGroup,
  StyledButton,
  StyledInput,
  StyledSelect,
} from "../styles";
import PersonnelContext from "../../../context/personnel/context";

const PersonnelFormUpdateComponent: React.FC = () => {
  const {
    personnelStates,
    personnelArrayStates,
    handleClickCloseModal,
    handleSubmitUpdatePersonnel,
    handleChange,
  } = useContext(PersonnelContext);
  return (
    <Form onSubmit={handleSubmitUpdatePersonnel}>
      <h2>Update Personnel</h2>
      <FormGroup>
        <div
          style={{
            width: "100%",
            marginRight: "10px",
          }}
        >
          <StyledInput
            type="text"
            name="idNumber"
            placeholder="idNumber"
            onChange={handleChange}
            value={personnelStates.idNumber}
          />
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <StyledSelect
            name="department"
            id="department"
            onChange={handleChange}
            value={personnelStates.department}
          >
            <option value="department">--Department--</option>
            {personnelArrayStates.departments.map((department, index) => (
              <option key={index} value={department.name}>
                {department.name}
              </option>
            ))}
          </StyledSelect>
        </div>
      </FormGroup>
      <FormGroup>
        <div
          style={{
            width: "100%",
            marginRight: "10px",
          }}
        >
          <StyledInput
            type="text"
            name="firstName"
            placeholder="FirstName"
            onChange={handleChange}
            value={personnelStates.firstName}
          />
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <StyledInput
            type="text"
            name="lastName"
            placeholder="LastName"
            onChange={handleChange}
            value={personnelStates.lastName}
          />
        </div>
      </FormGroup>
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
        <div
          style={{
            width: "100%",
            marginRight: "10px",
          }}
        >
          <StyledButton
            onClick={handleClickCloseModal}
            style={{ marginRight: "5px" }}
            type="button"
          >
            Close
          </StyledButton>
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <StyledButton
            // disabled={isSubmitting ? true : false}
            type="submit"
          >
            Submit
          </StyledButton>
        </div>
      </FormGroup>
    </Form>
  );
};

export default PersonnelFormUpdateComponent;
