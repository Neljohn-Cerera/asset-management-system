import React, { useEffect, useReducer } from "react";
import {
  historyArrayReducer,
  historyReducer,
  historyInitialStates,
  historyInitialArrayStates,
} from "./reducer";
import HistoryContext from "./context";
import { getStockHistories } from "../../api/getData";
/**
 * History Context Provider
 * @param props
 * @returns
 */
const HistoryContextProvider: React.FC = (props) => {
  /** non array states */
  const [historyStates, dispatch] = useReducer(
    historyReducer,
    historyInitialStates
  );
  /** array states */
  const [historyArrayStates, dispatchArray] = useReducer(
    historyArrayReducer,
    historyInitialArrayStates
  );
  /** fetching stock histories data */
  useEffect(() => {
    document.title = "Consumables History";
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getStockHistories(
        historyStates.search,
        historyStates.page,
        historyStates.limit
      );

      if (error) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: error,
          });
        }
      }
      if (data) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_HISTORIES",
            payload: data,
          });
        }
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [historyStates.page, historyStates.limit]);

  /**
   * SEARCH STOCK HISTORIES
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitSearchStockHistories = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();

    const { data, error } = await getStockHistories(
      historyStates.search,
      historyStates.page,
      historyStates.limit
    );
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
      return;
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_HISTORIES",
        payload: data,
      });
      return;
    }
  };
  /**
   * SET PREVIOUS PAGE
   *
   * @returns void
   */
  const handleClickPreviousPage = (): void => {
    dispatch({
      type: "SET_STATE",
      state: "page",
      payload: historyStates.page - 1,
    });
  };
  /**
   * SET NEXT PAGE
   *
   * @returns void
   */
  const handleClickNextPage = (): void => {
    dispatch({
      type: "SET_STATE",
      state: "page",
      payload: historyStates.page + 1,
    });
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
    <HistoryContext.Provider
      value={{
        historyStates,
        historyArrayStates,
        handleClickNextPage,
        handleClickPreviousPage,
        handleSubmitSearchStockHistories,
        handleChange,
      }}
    >
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
