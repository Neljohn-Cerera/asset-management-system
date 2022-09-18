import { RAHistory, IASHistory, ISHistory } from "../types";

/** non arrray states */
export const historyInitialStates: ISHistory = {
  search: "",
  limit: 5,
  page: 1,
  error: "",
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
    default:
      return state;
  }
};
