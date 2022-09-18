import { createContext } from "react";
import { CStocks } from "../types";

const StocksContext = createContext({} as CStocks);

export default StocksContext;
