import { RAStockReports, IASStockReports, ISStockReports } from "../types";

/** non arrray states */
export const stockReportsInitialStates: ISStockReports = {
  year: new Date().getFullYear(),
  reportView: "",
  error: "",
};
/** for non array reducer */
export const stockReportsReducer = (
  state: ISStockReports,
  action: RAStockReports
) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISStockReports;
    }
    case "ON_CHANGE": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    default:
      return state;
  }
};
/** arrays states */
export const stockReportsInitialArrayStates: IASStockReports = {
  stockOutReports: [],
};
/** for array reducer */
export const stockReportsArrayReducer = (
  state: IASStockReports,
  action: RAStockReports
) => {
  switch (action.type) {
    case "SET_ARRAY_STOCKS_OUT": {
      return {
        ...state,
        stockOutReports: action.payload,
      } as IASStockReports;
    }
    default:
      return state;
  }
};
