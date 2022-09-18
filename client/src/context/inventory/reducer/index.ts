import { ISInventory, RAInventory, IASInventory, CInventory } from "../types";

/** initial states */
export const inventoryInitialStates: ISInventory = {
  page: 1,
  limit: 5,
  isModalOpen: false,
  modalView: "",
  itemSearch: "",
  personnelSearch: "",
  search: "",
  status: "",
  itemCode: "",
  itemName: "",
  itemid: "",
  roomid: "",
  personnelid: "",
  idNumber: "",
  fullName: "",
  remarks: "",
  error: "",
  year: new Date().getFullYear(),
};
/** reducer */
export const inventoryReducer = (state: ISInventory, action: RAInventory) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISInventory;
    }
    case "ON_CHANGE": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "open modal": {
      return {
        ...state,
        isModalOpen: true,
      } as ISInventory;
    }
    case "close modal": {
      state.status = "";
      state.itemCode = "";
      state.itemName = "";
      state.itemid = "";
      state.roomid = "";
      state.personnelid = "";
      state.idNumber = "";
      state.fullName = "";
      state.remarks = "";
      state.modalView = "";
      state.error = "";
      return {
        ...state,
        isModalOpen: false,
      } as ISInventory;
    }
    case "SET_PREVIOUS": {
      return {
        ...state,
        page: state.page - 1,
      } as ISInventory;
    }
    case "SET_NEXT": {
      return {
        ...state,
        page: state.page + 1,
      } as ISInventory;
    }
    default:
      return state;
  }
};
/** initial arrays states */
export const inventoryInitialArrayStates: IASInventory = {
  rooms: [],
  items: [],
  personnels: [],
  histories: [],
  status: [],
};
/** for array reducer */
export const inventoryArrayReducer = (
  state: IASInventory,
  action: RAInventory
) => {
  switch (action.type) {
    case "SET_HISTORIES": {
      state.items = [];
      state.personnels = [];
      return {
        ...state,
        histories: action.payload,
      } as IASInventory;
    }
    case "SET_ITEMS": {
      state.histories = [];
      state.personnels = [];
      return {
        ...state,
        items: action.payload,
      } as IASInventory;
    }
    case "SET_PERSONNELS": {
      state.histories = [];
      state.items = [];
      return {
        ...state,
        personnels: action.payload,
      } as IASInventory;
    }
    case "SET_ROOMS": {
      state.histories = [];
      state.items = [];
      state.personnels = [];
      return {
        ...state,
        rooms: action.payload,
      } as IASInventory;
    }
    case "SET_STATUS": {
      state.histories = [];
      state.items = [];
      state.personnels = [];
      return {
        ...state,
        status: action.payload,
      } as IASInventory;
    }
    default:
      return state;
  }
};
