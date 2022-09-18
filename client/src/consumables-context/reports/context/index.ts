import { createContext } from "react";
import { CStockReports } from "../types";

const StockReportsContext = createContext({} as CStockReports);

export default StockReportsContext;