
import AccountComponent from "../components/account";
import { AccountContextProvider } from "../context";

const Account = (): JSX.Element => {
  return (
    <AccountContextProvider>
     <AccountComponent/>
    </AccountContextProvider>
   
  );
};

export default Account;
