import { RAPersonnel, IASPersonnel, ISPersonnel } from "../types";

/** non arrray states */
export const personnelInitialStates: ISPersonnel = {
  isModalOpen: false,
  modalView: "",
  search: "",
  page: 1,
  limit: 5,
  personnelid: "",
  firstName: "",
  lastName: "",
  idNumber: "",
  department: "",
  email: "",
  passWord: "password",
  role: "",
  error: "",
};
/** for non array reducer */
export const personnelReducer = (state: ISPersonnel, action: RAPersonnel) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISPersonnel;
    }
    case "SET_DEFAULTS": {
      state.modalView = "";
      state.isModalOpen = false;
      state.search = "";
      state.page = 1;
      state.limit = 5;
      state.personnelid = "";
      state.firstName = "";
      state.lastName = "";
      state.idNumber = "";
      state.department = "";
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
export const personnelInitialArrayStates: IASPersonnel = {
  personnels: [],
  departments: [],
  roles: [],
};
/** for array reducer */
export const personnelArrayReducer = (
  state: IASPersonnel,
  action: RAPersonnel
) => {
  switch (action.type) {
    case "SET_ARRAY_PERSONNELS": {
      return {
        ...state,
        personnels: action.payload,
      } as IASPersonnel;
    }
    case "SET_ARRAY_DEPARTMENTS": {
      return {
        ...state,
        departments: action.payload,
      } as IASPersonnel;
    }
    case "SET_ARRAY_ROLES": {
      return {
        ...state,
        roles: action.payload,
      } as IASPersonnel;
    }
    default:
      return state;
  }
};
