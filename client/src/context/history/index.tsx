import React, { useEffect, useReducer } from "react";
import {
  historyArrayReducer,
  historyReducer,
  historyInitialStates,
  historyInitialArrayStates,
} from "./reducer";
import HistoryContext from "./context";
import {
  getHistories,
  getHistoriesByItemCode,
  getHistoryByItemCode,
} from "../../api/getData";
import { History } from "../../api/types";
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
  /** fetch histories */
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getHistories(
        historyStates.page,
        historyStates.limit
      );
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
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
   * Clicking Submit button
   *
   * @param e React.FormEvent
   */
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    const { data, error } = await getHistoryByItemCode(historyStates.search);
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_HISTORIES",
        payload: [data],
      });
    }
  };
  /**
   * Opening modal for Item records
   *
   * @param history `History`
   */
  const handleOpenModal = async (history: History): Promise<void> => {
    dispatch({
      type: "SET_STATE",
      state: "openModal",
      payload: true,
    });
    dispatch({
      type: "SET_HISTORY",
      payload: history,
    });
    const { data, error } = await getHistoriesByItemCode(
      history.item.code as string
    );
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_ITEMRECORDS",
        payload: data,
      });
    }
  };
  /**
   * Closing modal for Item records
   *
   */
  const handleCloseModal = (): void => {
    dispatch({
      type: "SET_STATE",
      state: "openModal",
      payload: false,
    });
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
  const handleClickNextPage = () => {
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
        handleChange,
        handleOpenModal,
        handleCloseModal,
        handleSubmit,
        handleClickNextPage,
        handleClickPreviousPage,
      }}
    >
      {props.children}
    </HistoryContext.Provider>
  );
};

export default HistoryContextProvider;
