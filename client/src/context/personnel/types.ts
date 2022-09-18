import { Department, Personnel, Role } from "../../api/types";

/** context */
export type CPersonnel = {
  personnelStates: ISPersonnel;
  personnelArrayStates: IASPersonnel;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmitSearchPersonnel: (e: React.FormEvent) => Promise<void>;
  handleSubmitUpdatePersonnel: (e: React.FormEvent) => Promise<void>;
  handleSubmitAddPersonnel: (e: React.FormEvent) => Promise<void>;
  handleSubmitAddAccountPersonnel: (e: React.FormEvent) => Promise<void>;
  handleClickAddAccount: (e: React.FormEvent, personnel: Personnel) => void;
  handleClickCloseModal: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickAddPersonnel: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  handleClickUpdatePersonnel: (
    e: React.FormEvent,
    personnel: Personnel
  ) => void;
  handleClickDeletePersonnel: (
    e: React.FormEvent,
    personnelid: string
  ) => Promise<void>;
  handleClickPreviousPage: () => void;
  handleClickNextPage: () => void;
};
/** initial states */
export type ISPersonnel = {
  modalView: string;
  isModalOpen: boolean;
  search: string;
  page: number;
  limit: number;
  personnelid: string;
  idNumber: string;
  firstName: string;
  lastName: string;
  department: string;
  email: string;
  passWord: string;
  role: string;
  error: string;
};
/** initial array states */
export type IASPersonnel = {
  personnels: Personnel[];
  roles: Role[];
  departments: Department[];
};
/** action */
export type RAPersonnel =
  | {
      type: "SET_STATE";
      state:
        | "modalView"
        | "isModalOpen"
        | "search"
        | "page"
        | "limit"
        | "personnelid"
        | "idNumber"
        | "firstName"
        | "lastName"
        | "department"
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
      type: "SET_ARRAY_EXAMPLE";
      payload: any[];
    }
  | {
      type: "SET_ARRAY_PERSONNELS";
      payload: Personnel[];
    }
  | {
      type: "SET_ARRAY_DEPARTMENTS";
      payload: Department[];
    }
  | {
      type: "SET_ARRAY_ROLES";
      payload: Role[];
    };
