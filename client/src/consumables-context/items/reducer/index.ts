import {
  RAConsumablesItems,
  IASConsumablesItems,
  ISConsumablesItems,
} from "../types";

/** non arrray states */
export const consumablesItemsInitialStates: ISConsumablesItems = {
  isModalOpen: false,
  modalView: "",
  search: "",
  limit: 5,
  page: 1,
  itemid: "",
  itemName: "",
  restock: 0,
  itemDescription: "",
  unitid: "",
  error: "",
};
/** for non array reducer */
export const consumablesItemsReducer = (
  state: ISConsumablesItems,
  action: RAConsumablesItems
) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISConsumablesItems;
    }
    case "ON_CHANGE": {
      return {
        ...state,
        [action.fieldName]: action.payload,
      };
    }
    case "SET_DEFAULTS": {
      state.isModalOpen = false;
      state.search = "";
      state.page = 1;
      state.limit = 5;
      state.itemid = "";
      state.itemName = "";
      state.itemDescription = "";
      state.restock = 0;
      state.error = "";
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
/** arrays states */
export const consumablesItemsInitialArrayStates: IASConsumablesItems = {
  items: [],
  units: [],
};
/** for array reducer */
export const consumablesItemsArrayReducer = (
  state: IASConsumablesItems,
  action: RAConsumablesItems
) => {
  switch (action.type) {
    case "SET_ARRAY_EXAMPLE": {
      return {
        ...state,
      };
    }
    case "SET_ARRAY_ITEMS": {
      return {
        ...state,
        items: action.payload,
      } as IASConsumablesItems;
    }
    case "SET_ARRAY_UNITS": {
      return {
        ...state,
        units: action.payload,
      } as IASConsumablesItems;
    }
    default:
      return state;
  }
};
