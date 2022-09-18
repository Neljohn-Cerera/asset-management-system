import React, { useEffect, useReducer } from "react";
import {
  dashboardArrayReducer,
  dashboardReducer,
  dashboardInitialStates,
  dashboardInitialArrayStates,
} from "./reducer";
import DashboardContext from "./context";
import {
  getStocksPieChartDataStockin,
  getStocksPieChartDataStockout,
  getSettings,
} from "../../api/getData";
/**
 * Dashboard Context Provider
 * @param props
 * @returns
 */
const DashboardContextProvider: React.FC = (props) => {
  /** non array states */
  const [dashboardStates, dispatch] = useReducer(
    dashboardReducer,
    dashboardInitialStates
  );
  /** array states */
  const [dashboardArrayStates, dispatchArray] = useReducer(
    dashboardArrayReducer,
    dashboardInitialArrayStates
  );
  /** fetching sotcks in & stock out data reports */
  useEffect(() => {
    document.title = "Consumables Dashboard";
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getStocksPieChartDataStockin();
      const { data: settings, error: settingsError } = await getSettings();
      const { data: stockouts, error: stockouterror } =
        await getStocksPieChartDataStockout();
      if (error) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: error,
          });
        }
      }
      if (settingsError) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: settingsError,
          });
        }
      }
      if (stockouterror) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: stockouterror,
          });
        }
      }

      if (data && stockouts && settings) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_PIECHART",
            state: "pieChartStockin",
            payload: data,
          });
          dispatchArray({
            type: "SET_ARRAY_PIECHART",
            state: "pieChartStockout",
            payload: stockouts,
          });
          dispatch({
            type: "SET_STATE",
            state: "settingsYear",
            payload: settings.year,
          });
        }
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);
  /**
   * Dispatch `ON_CHANGE` action
   *
   * @param e React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   * @returns `void`
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch({
      type: "ON_CHANGE",
      fieldName: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <DashboardContext.Provider
      value={{
        dashboardStates,
        dashboardArrayStates,
        handleChange,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
