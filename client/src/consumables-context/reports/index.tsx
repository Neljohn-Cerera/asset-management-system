import React, { useEffect, useReducer } from "react";
import {
  stockReportsArrayReducer,
  stockReportsReducer,
  stockReportsInitialStates,
  stockReportsInitialArrayStates,
} from "./reducer";
import StockReportsContext from "./context";
import { getStockOutReports } from "../../api/getData";
import { ReportView } from "./types";
/**
 * StockReports Context Provider
 * @param props
 * @returns
 */
const StockReportsContextProvider: React.FC = (props) => {
  /** non array states */
  const [stockReportsStates, dispatch] = useReducer(
    stockReportsReducer,
    stockReportsInitialStates
  );
  /** array states */
  const [stockReportsArrayStates, dispatchArray] = useReducer(
    stockReportsArrayReducer,
    stockReportsInitialArrayStates
  );
  /** fetching stock out reports */
  useEffect(() => {
    document.title = "Consumables Reports";
  }, []);
  /**
   * Generate reports
   *
   * @returns `Promise` void
   */
  const onGenerateClick = async (reportView: ReportView): Promise<void> => {
    dispatch({ type: "SET_STATE", state: "reportView", payload: reportView });
    /** if reportview === `stock out */
    if (reportView === "stocks out") {
      const { data, error } = await getStockOutReports(stockReportsStates.year);
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        dispatchArray({
          type: "SET_ARRAY_STOCKS_OUT",
          payload: data,
        });
      }
    }
    window.print();
    return;
  };
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
    <StockReportsContext.Provider
      value={{
        stockReportsStates,
        stockReportsArrayStates,
        onGenerateClick,
        handleChange,
      }}
    >
      {props.children}
    </StockReportsContext.Provider>
  );
};

export default StockReportsContextProvider;
