import {
  ItemConsumables,
  ItemConsumablesStocks,
  Personnel,
  Room,
  Unit,
} from "../../api/types";

/** context */
export type CStocks = {
  stocksStates: ISStocks;
  stocksArrayStates: IASStocks;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSelectItem: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    itemConsumables: ItemConsumables
  ) => void;
  handleSelectPersonnel: (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    personnel: Personnel
  ) => void;
  handleSubmitRemoveStock: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  handleSubmitAddItemConsumablesStock: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => Promise<void>;
  handleSubmitSearchItemsConsumables: (e: React.FormEvent) => Promise<void>;
  handleSubmitSearchPersonnel: (e: React.FormEvent) => Promise<void>;
  handleSubmitSearchItemsConsumablesStocks: (
    e: React.FormEvent
  ) => Promise<void>;
  handleClickAddNewStocks: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;

  handleClickStockOut: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    itemConsumablesStock: ItemConsumablesStocks
  ) => void;
  handleClickNextPage: () => void;
  handleClickPreviousPage: () => void;
  handleClickCloseModalChildren: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickModalInsertItem: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickModalInsertPersonnel: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickCloseModal: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};
type ModalView = "stock in" | "stock out" | "";
type ModalChildrenView =
  | "form add insert item"
  | "form add insert personnel"
  | "";
/** initial states */
export type ISStocks = {
  isModalOpen: boolean;
  isChildrenModalOpen: boolean;
  modalView: ModalView;
  modalChildrenView: ModalChildrenView;
  searchItem: string;
  searchPersonnel: string;
  personnelName: string;
  personnelid: string;
  search: string;
  page: number;
  limit: number;
  quantity: number;
  currentQuantity: number;
  purchaseDate: string;
  roomid: string;
  unitid: string;
  unitName: string;
  itemid: string;
  itemName: string;
  itemDescription: string;
  error: string;
};
/** initial array states */
export type IASStocks = {
  units: Unit[];
  itemConsumablesStocks: ItemConsumablesStocks[];
  itemConsumables: ItemConsumables[];
  rooms: Room[];
  personnels: Personnel[];
};
/** action */
export type RAStocks =
  | {
      type: "SET_STATE";
      state:
        | "isModalOpen"
        | "isChildrenModalOpen"
        | "modalView"
        | "modalChildrenView"
        | "searchItem"
        | "searchPersonnel"
        | "personnelName"
        | "personnelid"
        | "search"
        | "page"
        | "limit"
        | "quantity"
        | "currentQuantity"
        | "roomid"
        | "unitid"
        | "unitName"
        | "purchaseDate"
        | "itemid"
        | "itemName"
        | "itemDescription"
        | "error";
      payload: string | number | boolean;
    }
  | {
      type: "SET_DEFAULTS";
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "SET_ARRAY_EXAMPLE";
      payload: any[];
    }
  | {
      type: "SET_ARRAY_CONSUMABLES_STOCKS";
      payload: ItemConsumablesStocks[];
    }
  | {
      type: "SET_ARRAY_UNITS";
      payload: Unit[];
    }
  | {
      type: "SET_ARRAY_ROOMS";
      payload: Room[];
    }
  | {
      type: "SET_ARRAY_ITEMS_CONSUMABLES";
      payload: ItemConsumables[];
    }
  | {
      type: "SET_ARRAY_PERSONNELS";
      payload: Personnel[];
    };
