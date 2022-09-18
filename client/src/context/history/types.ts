import { History } from "../../api/types";

/** context */
export type CHistory = {
  historyStates: ISHistory;
  historyArrayStates: IASHistory;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleOpenModal: (history: History) => Promise<void>;
  handleCloseModal: () => void;
  handleClickPreviousPage: () => void;
  handleClickNextPage: () => void;
};
/** initial states */
export type ISHistory = {
  search: string;
  openModal: boolean;
  page: number;
  limit: number;
  history: History;
  error: string;
};
/** initial array states */
export type IASHistory = {
  histories: History[];
  itemRecords: History[];
};
/** action */
export type RAHistory =
  | {
      type: "SET_STATE";
      state: "search" | "openModal" | "page" | "limit" | "error";
      payload: string | number | boolean;
    }
  | {
      type: "SET_HISTORY";
      payload: History;
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "SET_ARRAY_HISTORIES";
      payload: History[];
    }
  | {
      type: "SET_ARRAY_ITEMRECORDS";
      payload: History[];
    };
