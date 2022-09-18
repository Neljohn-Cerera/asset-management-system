import { Room, Status, Personnel, History, Asset } from "../../api/types";
/**
 * C - Context
 * IS - Initial States
 * IAS - Initial Array States
 * RA - Reducer Action
 */
/** context */
export type CInventory = {
  inventoryStates: ISInventory;
  inventoryArrayStates: IASInventory;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleClickSelectAsset: (e: React.FormEvent, asset: Asset) => void;
  handleClickSelectPersonnel: (
    e: React.FormEvent,
    personnel: Personnel
  ) => void;
  handleClickPrevious: () => void;
  handleClickNext: () => void;
  handleClickAddInventoryInsertPersonnelClose: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void;
  handleClickAddInventoryInsertPersonnel: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickAddInventoryInsertItemClose: (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => void;
  handleClickAddInventoryInsertItem: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickAddInventoryClose: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickAddInventory: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickPersonnelSearch: (e: React.FormEvent) => Promise<void>;
  handleClickItemSearch: (e: React.FormEvent) => Promise<void>;
  handleSubmitAddInventory: (e: React.FormEvent) => Promise<void>;
};
/** initial states */
export type ISInventory = {
  page: number;
  limit: number;
  isModalOpen: boolean;
  modalView: "item search" | "personnel search" | "";
  itemSearch: string;
  personnelSearch: string;
  search: string;
  status: string;
  itemCode: string;
  idNumber: string;
  remarks: string;
  fullName: string;
  itemName: string;
  itemid: string;
  personnelid: string;
  roomid: string;
  error: string;
  year: number;
};

export type IASInventory = {
  rooms: Room[];
  items: Asset[];
  personnels: Personnel[];
  histories: History[];
  status: Status[];
};
/** action */
export type RAInventory =
  | {
      type: "SET_STATE";
      state:
        | "page"
        | "limit"
        | "isModalOpen"
        | "modalView"
        | "itemSearch"
        | "personnelSearch"
        | "search"
        | "status"
        | "itemCode"
        | "itemName"
        | "itemid"
        | "roomid"
        | "personnelid"
        | "idNumber"
        | "fullName"
        | "remarks"
        | "error";
      payload: string | number | boolean;
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "open modal" | "close modal" | "SET_PREVIOUS" | "SET_NEXT";
    }
  | {
      type: "SET_HISTORIES";
      payload: Array<History>;
    }
  | {
      type: "SET_PERSONNELS";
      payload: Array<Personnel>;
    }
  | {
      type: "SET_ITEMS";
      payload: Array<Asset>;
    }
  | {
      type: "SET_ROOMS";
      payload: Array<Room>;
    }
  | {
      type: "SET_STATUS";
      payload: Array<Status>;
    };

export type Name = {
  _id: string;
  firstName: string;
  lastName: string;
};
