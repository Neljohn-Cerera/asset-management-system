import { PieChart, StockInReports } from "../../api/types";

/** context */
export type CDashboard = {
  dashboardStates: ISDashboard;
  dashboardArrayStates: IASDashboard;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};
/** initial states */
export type ISDashboard = {
  search: string;
  page: number;
  limit: number;
  settingsYear:number;
  error: string;
};
/** initial array states */
export type IASDashboard = {
  pieChartStockin: PieChart[];
  pieChartStockout: PieChart[];
};
/** action */
export type RADashboard =
  | {
      type: "SET_STATE";
      state: "search" | "page" | "limit" | "error" | "settingsYear"
      payload: string | number | boolean;
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "SET_ARRAY_PIECHART";
      state: "pieChartStockin" | "pieChartStockout";
      payload: PieChart[];
    };
