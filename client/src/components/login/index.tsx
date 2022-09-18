import { FaFacebook, FaEnvelopeOpenText } from "react-icons/fa";
import { LoginContainer, ContentContainer } from "./styles";
import logo from "../../assets/logo.png";
import LoginFormComponent from "./form";

const LoginComponent: React.FC = (): JSX.Element => {
  return (
    <LoginContainer>
      <ContentContainer>
        <a href="http://spct.edu.ph/">
          <img src={logo} alt="logo" />
        </a>
        <h2>SAMS LOGIN</h2>
        {/* Login Form Component */}
        <LoginFormComponent />
        <span>
          <a href="https://www.facebook.com/spctinstitutionalupdates">
            <FaFacebook />
          </a>
          <a href="saintpeterscollegeoftoril@gmail.com">
            <FaEnvelopeOpenText />
          </a>
        </span>
      </ContentContainer>
    </LoginContainer>
  );
};
export default LoginComponent;
