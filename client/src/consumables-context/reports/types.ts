import { StockOutReports } from "../../api/types";

/** context */
export type CStockReports = {
  stockReportsStates: ISStockReports;
  stockReportsArrayStates: IASStockReports;
  onGenerateClick: (reportView: ReportView) => Promise<void>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};
export type ReportView = "stocks out" | "stocks in" | "";
/** initial states */
export type ISStockReports = {
  reportView: ReportView;
  year: number;
  error: string;
};
/** initial array states */
export type IASStockReports = {
  stockOutReports: StockOutReports[];
};
/** action */
export type RAStockReports =
  | {
      type: "SET_STATE";
      state: "year" | "error" | "reportView";
      payload: string | number | boolean;
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "SET_ARRAY_STOCKS_OUT";
      payload: StockOutReports[];
    };
