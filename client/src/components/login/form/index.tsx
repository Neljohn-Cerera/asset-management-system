import { useContext } from "react";
import LoginContext from "../../../context/login/context";
import { Form } from "../styles";
import { CInput, CButton } from "../../shared";

const LoginFormComponent: React.FC = () => {
  const { loginStates, handleChange, handleSubmitLogin } =
    useContext(LoginContext);
  return (
    <Form onSubmit={handleSubmitLogin}>
      <CInput
        mb={20}
        // ref={inputRef}
        label="Email"
        inputName="email"
        inputType="email"
        onChange={handleChange}
        value={loginStates.email}
      />
      <CInput
        mb={20}
        label="Password"
        inputName="passWord"
        inputType="password"
        onChange={handleChange}
        value={loginStates.passWord}
      />
      <CButton type="submit" text="Login" />
      {!loginStates.error ? null : (
        <p style={{ fontSize: 16, color: "red" }}>{loginStates.error}</p>
      )}
    </Form>
  );
};

export default LoginFormComponent;
