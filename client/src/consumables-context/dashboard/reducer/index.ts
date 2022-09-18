import { RADashboard, IASDashboard, ISDashboard } from "../types";

/** non arrray states */
export const dashboardInitialStates: ISDashboard = {
  search: "",
  limit: 100,
  page: 1,
  error: "",
  settingsYear: new Date().getFullYear(),
};
/** for non array reducer */
export const dashboardReducer = (state: ISDashboard, action: RADashboard) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISDashboard;
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
export const dashboardInitialArrayStates: IASDashboard = {
  pieChartStockin: [],
  pieChartStockout: [],
};
/** for array reducer */
export const dashboardArrayReducer = (
  state: IASDashboard,
  action: RADashboard
) => {
  switch (action.type) {
    case "SET_ARRAY_PIECHART": {
      return {
        ...state,
        [action.state]: action.payload,
      } as IASDashboard;
    }
    default:
      return state;
  }
};
