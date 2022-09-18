import { RADashBoard, IASDashBoard, ISDashBoard } from "../types";

/** non arrray states */
export const dashBoardInitialStates: ISDashBoard = {
  isModalOpen: false,
  modalTitle: "",
  assetStatus: "",
  error: "",
};
/** for non array reducer */
export const dashBoardReducer = (state: ISDashBoard, action: RADashBoard) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISDashBoard;
    }
    case "SET_ERROR": {
      state.assetStatus = "";
      state.error = "";
      state.isModalOpen = false;
      state.modalTitle = "";
      return {
        ...state,
        error: action.payload,
      } as ISDashBoard;
    }
    default:
      return state;
  }
};
/** arrays states */
export const dashBoardInitialArrayStates: IASDashBoard = {
  assets: [],
  statistics: [],
  settings: {},
};
/** for array reducer */
export const dashBoardArrayReducer = (
  state: IASDashBoard,
  action: RADashBoard
) => {
  switch (action.type) {
    case "SET_ARRAY_ASSETS": {
      return {
        ...state,
        assets: action.payload,
      } as IASDashBoard;
    }
    case "SET_ARRAY_STATISTICS": {
      return {
        ...state,
        statistics: action.payload,
      } as IASDashBoard;
    }
    case "SET_SETTINGS": {
      return {
        ...state,
        settings: action.payload,
      } as IASDashBoard;
    }
    default:
      return state;
  }
};
