import {
  FiveYearsReport,
  Room,
  RoomReport,
  YearlyReport,
} from "../../api/types";
/**
 * C - Context
 * IS - Initial States
 * IAS - Initial Array States
 * RA - Reducer Action
 */
/** context */
export type CReport = {
  reportStates: ISReport;
  reportArrayStates: IASReport;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  onGenerateClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    reportView: ReportViewTypes
  ) => Promise<void>;
};
/** initial states */
export type ISReport = {
  roomid: string;
  roomYear: string;
  year: number;
  startYear: number;
  endYear: number;
  fromYear: number;
  toYear: number;
  reportView: ReportViewTypes;
  error: string;
};
/** initial array states */
export type IASReport = {
  rooms: Room[];
  fiveYearsReports: FiveYearsReport[];
  yearlyReports: YearlyReport;
  roomReport: RoomReport;
};
/** action */
export type RAReport =
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "SET_ERROR" | "SET_REPORT_VIEW";
      name: string;
      payload: string;
    }
  | {
      type: "SET_END_YEAR";
      payload: number;
    }
  | {
      type: "SET_ARRAY_FIVEYEARS_REPORTS" | "SET_ARRAY_ROOMS";
      payload: any[];
    }
  | {
      type: "SET_ARRAY_YEARLY_REPORTS";
      payload: YearlyReport;
    }
  | {
      type: "SET_ARRAY_ROOM_REPORTS";
      payload: {};
    };

export type ReportViewTypes =
  | "yearly report"
  | "five years report"
  | "per room report"
  | "";
