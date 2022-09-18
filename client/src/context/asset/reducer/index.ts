import { formatDate } from "../../../utils/formatDate";
import { RAAsset, IASAsset, ISAsset } from "../types";

/** non arrray states */
export const assetInitialStates: ISAsset = {
  isModalOpen: false,
  modalView: "",
  search: "",
  page: 1,
  limit: 5,
  assetid: "",
  name: "",
  code: "",
  serialNumber: "",
  price: "",
  supplier: "",
  category: "",
  purchaseDate: formatDate(
    new Date().toLocaleString("en-US", {
      timeZone: "Asia/Manila",
    })
  ),
  useFullLife: 0,
  error: "",
};
/** for non array reducer */
export const assetReducer = (state: ISAsset, action: RAAsset) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISAsset;
    }
    case "SET_DEFAULTS": {
      state.isModalOpen = false;
      state.modalView = "";
      state.search = "";
      state.page = 1;
      state.limit = 5;
      state.assetid = "";
      state.name = "";
      state.code = "";
      state.serialNumber = "";
      state.price = "";
      state.supplier = "";
      state.category = "";
      state.purchaseDate = formatDate(
        new Date().toLocaleString("en-US", {
          timeZone: "Asia/Manila",
        })
      );
      state.useFullLife = 0;
      state.error = "";
      return {
        ...state,
      } as ISAsset;
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
export const assetInitialArrayStates: IASAsset = {
  assets: [],
  suppliers: [],
  categories: [],
};
/** for array reducer */
export const assetArrayReducer = (state: IASAsset, action: RAAsset) => {
  switch (action.type) {
    case "SET_ARRAY_ASSETS": {
      return {
        ...state,
        assets: action.payload,
      } as IASAsset;
    }
    case "SET_ARRAY_SUPPLIERS": {
      return {
        ...state,
        suppliers: action.payload,
      } as IASAsset;
    }
    case "SET_ARRAY_CATEGORIES": {
      return {
        ...state,
        categories: action.payload,
      } as IASAsset;
    }
    default:
      return state;
  }
};
