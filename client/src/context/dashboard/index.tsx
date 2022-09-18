import React, { useEffect, useReducer } from "react";
import {
  dashBoardArrayReducer,
  dashBoardReducer,
  dashBoardInitialStates,
  dashBoardInitialArrayStates,
} from "./reducer";
import DashBoardContext from "./context";
import {
  getDashboardAssetsCount,
  getDashboardStatistics,
  getSettings,
} from "../../api/getData";
/**
 * DashBoard Context Provider
 * @param props
 * @returns
 */
const DashBoardContextProvider: React.FC = (props) => {
  /** non array states */
  const [dashBoardStates, dispatch] = useReducer(
    dashBoardReducer,
    dashBoardInitialStates
  );
  /** array states */
  const [dashBoardArrayStates, dispatchArray] = useReducer(
    dashBoardArrayReducer,
    dashBoardInitialArrayStates
  );

  useEffect(() => {
    document.title = "Dashboard";
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getDashboardStatistics();
      const { data: resSettings, error: resSettingsError } =
        await getSettings();
      if (error) {
        dispatch({
          type: "SET_ERROR",
          payload: error,
        });
      }
      if (resSettingsError) {
        dispatch({
          type: "SET_ERROR",
          payload: resSettingsError,
        });
      }
      if (data) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_STATISTICS",
            payload: data,
          });
          dispatchArray({
            type: "SET_SETTINGS",
            payload: resSettings!,
          });
        }
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  // fetch assets counts
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getDashboardAssetsCount(
        dashBoardStates.assetStatus
      );
      if (error) {
        dispatch({
          type: "SET_ERROR",
          payload: error,
        });
      }
      if (data) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_ASSETS",
            payload: data,
          });
        }
      }
    }
    if (dashBoardStates.isModalOpen) {
      fetchData();
    }
    return () => {
      isMounted = false;
    };
  }, [dashBoardStates.assetStatus, dashBoardStates.isModalOpen]);

  const handleOpenModal = (title: string, status: string) => {
    dispatch({
      type: "SET_STATE",
      state: "assetStatus",
      payload: status,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalTitle",
      payload: title,
    });
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
  };
  const handleCloseModal = () => {
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: false,
    });
  };

  return (
    <DashBoardContext.Provider
      value={{
        dashBoardStates,
        dashBoardArrayStates,
        handleOpenModal,
        handleCloseModal,
      }}
    >
      {props.children}
    </DashBoardContext.Provider>
  );
};

export default DashBoardContextProvider;
