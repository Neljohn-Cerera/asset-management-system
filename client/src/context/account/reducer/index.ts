import { RAAccount, IASAccount, ISAccount } from "../types";

/** non arrray states */
export const accountInitialStates: ISAccount = {
  isModalOpen: false,
  search: "",
  page: 1,
  limit: 5,
  personnelid: "",
  fullName: "",
  email: "",
  passWord: "",
  role: "",
  error: "",
};
/** for non array reducer */
export const accountReducer = (state: ISAccount, action: RAAccount) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISAccount;
    }
    case "SET_DEFAULTS": {
      state.isModalOpen = false;
      state.search = "";
      state.page = 1;
      state.limit = 5;
      state.personnelid = "";
      state.fullName = "";
      state.email = "";
      state.passWord = "";
      state.role = "";
      state.error = "";
      return {
        ...state,
      };
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
export const accountInitialArrayStates: IASAccount = {
  personnels: [],
  roles: [],
};
/** for array reducer */
export const accountArrayReducer = (state: IASAccount, action: RAAccount) => {
  switch (action.type) {
    case "SET_ARRAY_PERSONNELS": {
      return {
        ...state,
        personnels: action.payload,
      } as IASAccount;
    }
    case "SET_ARRAY_ROLES": {
      return {
        ...state,
        roles: action.payload,
      } as IASAccount;
    }
    default:
      return state;
  }
};
