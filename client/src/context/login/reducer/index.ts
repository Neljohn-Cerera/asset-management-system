import { RALogin, ISLogin } from "../types";

/** non arrray states */
export const loginInitialStates: ISLogin = {
  email: "guest@gmail.com",
  passWord: "password",
  error: "",
};
/** for non array reducer */
export const loginReducer = (state: ISLogin, action: RALogin) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISLogin;
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
