import { RoomReport, YearlyReport } from "../../../api/types";
import { RAReport, IASReport, ISReport } from "../types";

/** non arrray states */
export const reportInitialStates: ISReport = {
  roomid: "",
  roomYear: new Date().getFullYear().toString(),
  year: new Date().getFullYear(),
  startYear: new Date().getFullYear(),
  endYear: new Date().getFullYear() + 4,
  fromYear: 0,
  toYear: 2026,
  reportView: "",
  error: "",
};
/** for non array reducer */
export const reportReducer = (state: ISReport, action: RAReport) => {
  switch (action.type) {
    case "ON_CHANGE": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }

    case "SET_REPORT_VIEW": {
      return {
        ...state,
        reportView: action.payload,
      } as ISReport;
    }
    case "SET_END_YEAR": {
      return {
        ...state,
        endYear: action.payload + 4,
      } as ISReport;
    }
    case "SET_ERROR": {
      return {
        ...state,
        error: action.payload,
      } as ISReport;
    }

    default:
      return state;
  }
};
/** arrays states */
export const reportInitialArrayStates: IASReport = {
  rooms: [],
  fiveYearsReports: [],
  yearlyReports: {} as YearlyReport,
  roomReport: {} as RoomReport,
};
/** for array reducer */
export const reportArrayReducer = (state: IASReport, action: RAReport) => {
  switch (action.type) {
    case "SET_ARRAY_FIVEYEARS_REPORTS": {
      state.roomReport = {} as RoomReport;
      state.yearlyReports = {} as YearlyReport;
      state.fiveYearsReports = [];
      return {
        ...state,
        fiveYearsReports: action.payload,
      } as IASReport;
    }
    case "SET_ARRAY_YEARLY_REPORTS": {
      state.roomReport = {} as RoomReport;
      state.fiveYearsReports = [];
      return {
        ...state,
        yearlyReports: action.payload,
      } as IASReport;
    }
    case "SET_ARRAY_ROOM_REPORTS": {
      state.yearlyReports = {} as YearlyReport;
      state.fiveYearsReports = [];
      return {
        ...state,
        roomReport: action.payload,
      } as IASReport;
    }
    case "SET_ARRAY_ROOMS": {
      state.roomReport = {} as RoomReport;
      state.rooms = [];
      state.fiveYearsReports = [];
      return {
        ...state,
        rooms: action.payload,
      } as IASReport;
    }
    default:
      return state;
  }
};
