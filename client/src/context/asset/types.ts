import { Asset, AssetInput, Category, Supplier } from "../../api/types";

/** context */
export type CAsset = {
  assetStates: ISAsset;
  assetArrayStates: IASAsset;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmitSearchAsset: (e: React.FormEvent) => Promise<void>;
  handleSubmitAddAsset: (e: React.FormEvent) => Promise<void>;
  handleSubmitUpdateAsset: (e: React.FormEvent) => Promise<void>;
  handleClickAddAsset: (e: React.FormEvent) => void;
  handleClickUpdateAsset: (e: React.FormEvent, asset: Asset) => void;
  handleClickDeleteAsset: (ssetid: string) => Promise<void>;
  handleClickCloseModal: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickPreviousPage: () => void;
  handleClickNextPage: () => void;
};
/** initial states */
export type ISAsset = {
  isModalOpen: boolean;
  modalView: string;
  search: string;
  page: number;
  limit: number;
  assetid: string;
  name: string;
  code: string;
  serialNumber: string;
  price: string;
  supplier: string;
  category: string;
  purchaseDate: string;
  useFullLife: number;
  error: string;
};
/** initial array states */
export type IASAsset = {
  assets: Asset[];
  suppliers: Supplier[];
  categories: Category[];
};
/** action */
export type RAAsset =
  | {
      type: "SET_STATE";
      state:
        | "isModalOpen"
        | "modalView"
        | "search"
        | "page"
        | "limit"
        | "assetid"
        | "name"
        | "code"
        | "serialNumber"
        | "price"
        | "supplier"
        | "category"
        | "purchaseDate"
        | "useFullLife"
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
      type: "SET_ARRAY_ASSETS";
      payload: Asset[];
    }
  | {
      type: "SET_ARRAY_SUPPLIERS";
      payload: Supplier[];
    }
  | {
      type: "SET_ARRAY_CATEGORIES";
      payload: Category[];
    };
