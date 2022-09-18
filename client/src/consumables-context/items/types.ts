import { ItemConsumables, Unit } from "../../api/types";

export type ModalView = "item-consumables add" | "item-consumables update" | "";

/** context */
export type CConsumablesItems = {
  consumablesItemsStates: ISConsumablesItems;
  consumablesItemsArrayStates: IASConsumablesItems;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleClickOpenModal: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickCloseModal: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickUpdateItemConsumables: (item: ItemConsumables) => void;
  handleClickNextPage: () => void;
  handleClickPreviousPage: () => void;
  handleSubmitSearchItemsConsumables: (e: React.FormEvent) => Promise<void>;
  handleSubmitAddItemConsumables: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  handleSubmitUpdateItemConsumables: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  handleClickDeleteConsumable: (itemid: string) => Promise<void>;
};
/** initial states */
export type ISConsumablesItems = {
  isModalOpen: boolean;
  modalView: ModalView;
  search: string;
  page: number;
  limit: number;
  error: string;
  itemid: string;
  itemName: string;
  restock: number;
  itemDescription: string;
  unitid: string;
};
/** initial array states */
export type IASConsumablesItems = {
  items: ItemConsumables[];
  units: Unit[];
};
/** action */
export type RAConsumablesItems =
  | {
      type: "SET_STATE";
      state:
        | "isModalOpen"
        | "modalView"
        | "search"
        | "page"
        | "limit"
        | "itemid"
        | "itemName"
        | "restock"
        | "itemDescription"
        | "unitid"
        | "error";
      payload: string | number | boolean;
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "SET_DEFAULTS";
    }
  | {
      type: "SET_ARRAY_EXAMPLE";
      payload: any[];
    }
  | {
      type: "SET_ARRAY_ITEMS";
      payload: ItemConsumables[];
    }
  | {
      type: "SET_ARRAY_UNITS";
      payload: Unit[];
    };
