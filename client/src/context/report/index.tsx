import React, { useEffect, useReducer } from "react";
import {
  getFiveYearsReports,
  getRoomReports,
  getRooms,
  getYearlyReports,
} from "../../api/getData";
import {
  reportArrayReducer,
  reportReducer,
  reportInitialStates,
  reportInitialArrayStates,
} from "./reducer";
import ReportContext from "./context";
import { ReportViewTypes } from "./types";
/**
 * Report Context Provider
 * @param props
 * @returns
 */
const ReportContextProvider: React.FC = (props) => {
  /** non array states */
  const [reportStates, dispatch] = useReducer(
    reportReducer,
    reportInitialStates
  );
  /** array states */
  const [reportArrayStates, dispatchArray] = useReducer(
    reportArrayReducer,
    reportInitialArrayStates
  );
  /** fetch rooms */
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const { data: rooms, error } = await getRooms();

      if (error && isMounted) {
        dispatch({ type: "SET_ERROR", name: "", payload: error });
      }
      if (rooms && isMounted) {
        dispatchArray({ type: "SET_ARRAY_ROOMS", payload: rooms });
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  /**
   * Generate reports
   *
   * @returns `Promise` void
   */
  const onGenerateClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    reportView: ReportViewTypes
  ): Promise<void> => {
    e.preventDefault();
    dispatch({ type: "SET_REPORT_VIEW", name: "", payload: reportView });
    /** if reportview === `five years report` */
    if (reportView === "five years report") {
      const { data: fiveyearsreports, error } = await getFiveYearsReports(
        reportStates.startYear!,
        reportStates.endYear!
      );

      if (error) {
        dispatch({ type: "SET_ERROR", name: "", payload: error });
      }
      if (fiveyearsreports) {
        dispatchArray({
          type: "SET_ARRAY_FIVEYEARS_REPORTS",
          payload: fiveyearsreports,
        });
      }
    }
    /** if reportview === `yearly report` */
    if (reportView === "yearly report") {
      const { data: yearlyReports, error } = await getYearlyReports(
        reportStates.year
      );
      if (error) {
        dispatch({ type: "SET_ERROR", name: "", payload: error });
      }
      if (yearlyReports) {
        dispatchArray({
          type: "SET_ARRAY_YEARLY_REPORTS",
          payload: yearlyReports,
        });
      }
    }
    /** if reportview === `per room report` */
    if (reportView === "per room report") {
      const { data: roomReports, error } = await getRoomReports(
        reportStates.roomid,
        reportStates.roomYear
      );
      if (error) {
        dispatch({ type: "SET_ERROR", name: "", payload: error });
      }
      if (roomReports) {
        dispatchArray({ type: "SET_ARRAY_ROOM_REPORTS", payload: roomReports });
      }
    }
    window.print();
    // window.location.href = window.location.href;
    return;
  };

  /**
   * Dispatch `ON_CHANGE` | `SET_END_YEAR` action
   *
   * @param e React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   * @returns `void`
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "startYear") {
      dispatch({
        type: "SET_END_YEAR",
        payload: parseInt(e.target.value),
      });
    }
    dispatch({
      type: "ON_CHANGE",
      fieldName: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <ReportContext.Provider
      value={{
        reportStates,
        reportArrayStates,
        handleChange,
        onGenerateClick,
      }}
    >
      {props.children}
    </ReportContext.Provider>
  );
};

export default ReportContextProvider;
