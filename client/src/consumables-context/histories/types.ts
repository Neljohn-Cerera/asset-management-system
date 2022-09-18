import { StockHistory } from "../../api/types";

/** context */
export type CHistory = {
  historyStates: ISHistory;
  historyArrayStates: IASHistory;
  handleClickNextPage: () => void;
  handleClickPreviousPage: () => void;
  handleSubmitSearchStockHistories: (e: React.FormEvent) => Promise<void>;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};
/** initial states */
export type ISHistory = {
  search: string;
  page: number;
  limit: number;
  error: string;
};
/** initial array states */
export type IASHistory = {
  histories: StockHistory[];
};
/** action */
export type RAHistory =
  | {
      type: "SET_STATE";
      state: "search" | "page" | "limit" | "error";
      payload: string | number | boolean;
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "SET_ARRAY_HISTORIES";
      payload: any[];
    };
