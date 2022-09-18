/**
 * C - Context
 * IS - Initial States
 * IAS - Initial Array States
 * RA - Reducer Action
 */

import {
  Category,
  Department,
  Role,
  Room,
  Status,
  Supplier,
} from "../../api/types";

/** context props */
export type CSettings = {
  settingsStates: ISSettings;
  settingsArrayStates: IASSettings;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleChangeIsUpdate: () => void;
  handleChangeStartYear: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleClickSave: () => Promise<void>;
  handleClickRefresh: () => void;
  handleClickSupplier: () => Promise<void>;
  handleClickDepartment: () => Promise<void>;
  handleClickRoom: () => Promise<void>;
  handleClickItemCategory: () => Promise<void>;
  handleClickRole: () => Promise<void>;
  handleClickStatus: () => Promise<void>;
  handleClickCloseModal: () => void;
  handleClickCloseChildrenModal: () => void;
  handleClickModalChildrenAdd: (modalChildrenView: ModalChildrenView) => void;
  handleClickModalChildrenUpdate: (
    modalChildrenView: ModalChildrenView,
    data: any
  ) => void;
  handleDeleteSupplier: (_id: string, name: string) => Promise<void>;
  handleDeleteDepartment: (_id: string, name: string) => Promise<void>;
  handleDeleteRoom: (_id: string, name: string) => Promise<void>;
  handleDeleteRole: (_id: string, name: string) => Promise<void>;
  handleDeleteStatus: (_id: string, name: string) => Promise<void>;
  handleDeleteItemCategory: (_id: string, name: string) => Promise<void>;
  handleSubmitAddSupplier: () => Promise<void>;
  handleSubmitUpdateSupplier: () => Promise<void>;
  handleSubmitAddDepartment: () => Promise<void>;
  handleSubmitUpdateDepartment: () => Promise<void>;
  handleSubmitAddRole: () => Promise<void>;
  handleSubmitUpdateRole: () => Promise<void>;
  handleSubmitAddRoom: () => Promise<void>;
  handleSubmitUpdateRoom: () => Promise<void>;
  handleSubmitAddStatus: () => Promise<void>;
  handleSubmitUpdateStatus: () => Promise<void>;
  handleSubmitAddItemCategory: () => Promise<void>;
  handleSubmitUpdateItemCategory: () => Promise<void>;
};

export type ModalChildrenView =
  | "supplier add"
  | "supplier update"
  | "department add"
  | "department update"
  | "room add"
  | "room update"
  | "role add"
  | "role update"
  | "status add"
  | "status update"
  | "itemCategory add"
  | "itemCategory update"
  | "";
export type ModalView =
  | "supplier"
  | "department"
  | "itemCategory"
  | "room"
  | "role"
  | "status"
  | "";

/** initialstates */
export type ISSettings = {
  isUpdate: boolean;
  refresh: boolean;
  year: number;
  startYear: number;
  endYear: number;
  rangeYear: string;
  isModalChildrenOpen: boolean;
  modalChildrenView: ModalChildrenView;
  isModalOpen: boolean;
  modalView: ModalView;
  supplierid: string;
  supplierName: string;
  supplierAddress: string;
  roomid: string;
  roomName: string;
  roomNo: string;
  departmentid: string;
  departmentName: string;
  roleid: string;
  roleName: string;
  statusName: string;
  statusid: string;
  itemCategoryid: string;
  itemCategoryName: string;
  error: string;
};
/** initial array states */
export type IASSettings = {
  suppliers: Supplier[];
  departments: Department[];
  rooms: Room[];
  roles: Role[];
  itemCategories: Category[];
  status: Status[];
};
/** actions */
export type RASettings =
  | {
      type: "SET_STATE";
      state:
        | "isUpdate"
        | "refresh"
        | "startYear"
        | "endYear"
        | "year"
        | "rangeYear"
        | "isModalOpen"
        | "modalView"
        | "isModalChildrenOpen"
        | "modalChildrenView"
        | "supplierid"
        | "departmentid"
        | "departmentName"
        | "roleid"
        | "roleName"
        | "roomid"
        | "roomName"
        | "roomNo"
        | "statusid"
        | "statusName"
        | "itemCategoryid"
        | "itemCategoryName"
        | "supplierName"
        | "supplierAddress"
        | "error";
      payload: string | number | boolean;
    }
  | {
      type: "SET_STATE_DEFAULTS_ADD_UPDATE";
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "SET_REFRESH" | "SET_ISUPDATE";
    }
  | {
      type: "SET_ARRAY_SUPPLIERS";
      payload: Supplier[];
    }
  | {
      type: "SET_ARRAY_DEPARTMENTS";
      payload: Department[];
    }
  | {
      type: "SET_ARRAY_ROOMS";
      payload: Room[];
    }
  | {
      type: "SET_ARRAY_ROLES";
      payload: Role[];
    }
  | {
      type: "SET_ARRAY_ITEM_CATEGORIES";
      payload: Category[];
    }
  | {
      type: "SET_ARRAY_STATUS";
      payload: Status[];
    }
  | {
      type: "SET_ARRAY_DEFAULTS";
    }
  | {
      type: "SET_CHILDREN_MODAL_CLOSE";
    };
