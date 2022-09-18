import { createContext } from "react";
import { CHistory } from "../types";

const HistoryContext = createContext({} as CHistory);

export default HistoryContext;
