import LoginComponent from "../components/login";
import { LoginContextProvider } from "../context";

const Login: React.FC = (): JSX.Element => {
  return (
    <LoginContextProvider>
      <LoginComponent />
    </LoginContextProvider>
  );
};
export default Login;
