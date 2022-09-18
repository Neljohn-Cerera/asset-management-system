import { RAHistory, IASHistory, ISHistory } from "../types";
import { History } from "../../../api/types";

/** non arrray states */
export const historyInitialStates: ISHistory = {
  page: 1,
  limit: 5,
  openModal: false,
  search: "",
  error: "",
  history: {} as History,
};
/** for non array reducer */
export const historyReducer = (state: ISHistory, action: RAHistory) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISHistory;
    }
    case "SET_HISTORY": {
      return {
        ...state,
        history: action.payload,
      } as ISHistory;
    }
    case "ON_CHANGE": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    default:
      return state;
  }
};
/** arrays states */
export const historyInitialArrayStates: IASHistory = {
  histories: [],
  itemRecords: [],
};
/** for array reducer */
export const historyArrayReducer = (state: IASHistory, action: RAHistory) => {
  switch (action.type) {
    case "SET_ARRAY_HISTORIES": {
      return {
        ...state,
        histories: action.payload,
      } as IASHistory;
    }
    case "SET_ARRAY_ITEMRECORDS": {
      return {
        ...state,
        itemRecords: action.payload,
      } as IASHistory;
    }
    default:
      return state;
  }
};
