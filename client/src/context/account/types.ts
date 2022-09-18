import { Personnel, Role } from "../../api/types";

/** context */
export type CAccount = {
  accountStates: ISAccount;
  accountArrayStates: IASAccount;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmitSearchAccount: (
    e: React.FormEvent,
    firstName?: string
  ) => Promise<void>;
  handleSubmitUpdateAccount: (e: React.FormEvent) => Promise<void>;
  handleClickDeleteAccount: (personnelid: string) => Promise<void>;
  handleClickUpdateAccount: (personnel: Personnel) => void;
  handleClickCloseModal: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickPreviousPage: () => void;
  handleClickNextPage: () => void;
};

/** initial states */
export type ISAccount = {
  isModalOpen: boolean;
  search: string;
  page: number;
  limit: number;
  personnelid: string;
  fullName: string;
  email: string;
  passWord: string;
  role: string;
  error: string;
};
/** initial array states */
export type IASAccount = {
  personnels: Personnel[];
  roles: Role[];
};
/** action */
export type RAAccount =
  | {
      type: "SET_STATE";
      state:
        | "isModalOpen"
        | "search"
        | "page"
        | "limit"
        | "personnelid"
        | "fullName"
        | "email"
        | "passWord"
        | "role"
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
      type: "SET_ARRAY_PERSONNELS";
      payload: Personnel[];
    }
  | {
      type: "SET_ARRAY_ROLES";
      payload: Role[];
    };
