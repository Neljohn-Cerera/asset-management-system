import PersonnelComponent from "../components/personnel";
import { PersonnelContextProvider } from "../context";

const Personnel: React.FC = (): JSX.Element => {
  return (
    <PersonnelContextProvider>
      <PersonnelComponent />
    </PersonnelContextProvider>
  );
};

export default Personnel;
