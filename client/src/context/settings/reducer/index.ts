import { RASettings, ISSettings, IASSettings } from "../types";

/** states */
export const settingsInitialStates: ISSettings = {
  isUpdate: false,
  refresh: false,
  startYear: 0,
  endYear: 0,
  year: 0,
  rangeYear: "",
  isModalOpen: false,
  modalView: "",
  isModalChildrenOpen: false,
  modalChildrenView: "",
  supplierid: "",
  supplierName: "",
  supplierAddress: "",
  roomid: "",
  roomName: "",
  roomNo: "",
  departmentid: "",
  departmentName: "",
  roleid: "",
  roleName: "",
  statusid: "",
  statusName: "",
  itemCategoryid: "",
  itemCategoryName: "",
  error: "",
};
/** for non array reducerr */
export const settingsReducer = (state: ISSettings, action: RASettings) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        [action.state]: action.payload,
      } as ISSettings;
    }
    case "SET_STATE_DEFAULTS_ADD_UPDATE": {
      state.supplierid = "";
      state.supplierName = "";
      state.supplierAddress = "";
      state.roomid = "";
      state.roomName = "";
      state.roomNo = "";
      state.departmentid = "";
      state.departmentName = "";
      state.roleid = "";
      state.roleName = "";
      state.statusid = "";
      state.statusName = "";
      state.itemCategoryid = "";
      state.itemCategoryName = "";
      return {
        ...state,
      };
    }
    case "SET_CHILDREN_MODAL_CLOSE": {
      state.isModalChildrenOpen = false;
      state.modalChildrenView = "";
      state.supplierid = "";
      state.supplierName = "";
      state.supplierAddress = "";
      state.roomid = "";
      state.roomName = "";
      state.roomNo = "";
      state.departmentid = "";
      state.departmentName = "";
      state.roleid = "";
      state.roleName = "";
      state.statusid = "";
      state.statusName = "";
      state.itemCategoryid = "";
      state.itemCategoryName = "";
      return {
        ...state,
      };
    }
    case "SET_REFRESH": {
      return {
        ...state,
        refresh: !state.refresh,
      } as ISSettings;
    }
    case "SET_ISUPDATE": {
      return {
        ...state,
        refresh: !state.refresh,
      } as ISSettings;
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
export const settingsInitialArrayStates: IASSettings = {
  suppliers: [],
  departments: [],
  itemCategories: [],
  rooms: [],
  roles: [],
  status: [],
};
/** for array reducer */
export const settingsArrayReducer = (
  state: IASSettings,
  action: RASettings
) => {
  switch (action.type) {
    case "SET_ARRAY_SUPPLIERS": {
      return {
        ...state,
        suppliers: action.payload,
      } as IASSettings;
    }
    case "SET_ARRAY_DEPARTMENTS": {
      return {
        ...state,
        departments: action.payload,
      } as IASSettings;
    }
    case "SET_ARRAY_ITEM_CATEGORIES": {
      return {
        ...state,
        itemCategories: action.payload,
      } as IASSettings;
    }
    case "SET_ARRAY_ROLES": {
      return {
        ...state,
        roles: action.payload,
      } as IASSettings;
    }
    case "SET_ARRAY_ROOMS": {
      return {
        ...state,
        rooms: action.payload,
      } as IASSettings;
    }
    case "SET_ARRAY_STATUS": {
      return {
        ...state,
        status: action.payload,
      } as IASSettings;
    }
    case "SET_ARRAY_DEFAULTS": {
      state.departments = [];
      state.itemCategories = [];
      state.roles = [];
      state.rooms = [];
      state.status = [];
      state.suppliers = [];
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
