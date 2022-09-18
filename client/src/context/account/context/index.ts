import { createContext } from "react";
import { CAccount } from "../types";

const AccountContext = createContext({} as CAccount);

export default AccountContext;
