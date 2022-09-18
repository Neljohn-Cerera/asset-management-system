import { formatDate } from "../../../utils/formatDate";
import { RAStocks, IASStocks, ISStocks } from "../types";

/** non arrray states */
export const stocksInitialStates: ISStocks = {
  isModalOpen: false,
  isChildrenModalOpen: false,
  modalView: "",
  modalChildrenView: "",
  searchItem: "",
  searchPersonnel: "",
  personnelName: "",
  personnelid: "",
  search: "",
  limit: 5,
  page: 1,
  quantity: 0,
  currentQuantity: 0,
  purchaseDate: formatDate(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Manila",
    })
  ),
  roomid: "",
  unitid: "",
  unitName: "",
  itemid: "",
  itemName: "",
  itemDescription: "",
  error: "",
};
/** for non array reducer */
export const stocksReducer = (state: ISStocks, action: RAStocks) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISStocks;
    }
    case "SET_DEFAULTS": {
      state.isModalOpen = false;
      state.isChildrenModalOpen = false;
      state.search = "";
      state.searchItem = "";
      state.searchPersonnel = "";
      state.page = 1;
      state.limit = 5;
      state.quantity = 0;
      state.currentQuantity = 0;
      state.unitid = "";
      state.unitName = "";
      state.purchaseDate = formatDate(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Manila",
        })
      );
      state.itemid = "";
      state.roomid = "";
      state.itemName = "";
      state.itemDescription = "";
      state.personnelid = "";
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
export const stocksInitialArrayStates: IASStocks = {
  units: [],
  itemConsumablesStocks: [],
  itemConsumables: [],
  rooms: [],
  personnels: [],
};
/** for array reducer */
export const stocksArrayReducer = (state: IASStocks, action: RAStocks) => {
  switch (action.type) {
    case "SET_ARRAY_UNITS": {
      return {
        ...state,
        units: action.payload,
      } as IASStocks;
    }
    case "SET_ARRAY_ROOMS": {
      return {
        ...state,
        rooms: action.payload,
      } as IASStocks;
    }
    case "SET_ARRAY_CONSUMABLES_STOCKS": {
      return {
        ...state,
        itemConsumablesStocks: action.payload,
      } as IASStocks;
    }
    case "SET_ARRAY_ITEMS_CONSUMABLES": {
      return {
        ...state,
        itemConsumables: action.payload,
      } as IASStocks;
    }
    case "SET_ARRAY_PERSONNELS": {
      return {
        ...state,
        personnels: action.payload,
      } as IASStocks;
    }
    default:
      return state;
  }
};
