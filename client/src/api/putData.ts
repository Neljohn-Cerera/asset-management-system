import { axiosPut } from "./axios";
import {
  AccountInput,
  PersonnelInput,
  AssetInput,
  Category,
  Department,
  Role,
  Supplier,
  SupplierInput,
  DepartmentInput,
  RoleInput,
  RoomInput,
  Room,
  StatusInput,
  Status,
  CategoryInput,
  ItemConsumablesInput,
  ItemConsumables,
  Stocks,
  StocksInput,
} from "./types";

type PutResponse<T> = {
  data?: T;
  success?: boolean;
  status?: string;
  error?: string;
};
/**
 * UPDATE ACCOUNT
 *
 * @param rangeYear string
 * @param year number
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putSettings = async (
  rangeYear: string,
  year: number
): Promise<PutResponse<null>> => {
  const { data, status, error } = await axiosPut<
    { rangeYear: string; year: number }, // req body props
    { success: boolean } // res data props
  >({
    url: "settings",
    body: {
      rangeYear,
      year,
    },
    config: {
      withCredentials: true,
    },
  });

  return { success: data?.success, status, error };
};
/**
 * UPDATE ACCOUNT
 *
 * @param accountid personnel primary key
 * @param input role, passWord, email
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateAccount = async (
  accountid: string,
  input: AccountInput
): Promise<PutResponse<null>> => {
  const { data, status, error } = await axiosPut<
    AccountInput | { id: string },
    { success: boolean }
  >({
    url: "personnel/account",
    body: {
      id: accountid,
      role: input.role.name as Role,
      passWord: input.passWord,
      email: input.email,
    },
    config: {
      withCredentials: true,
    },
  });

  return { success: data?.success, status, error };
};

/**
 * UPDATE ASSET
 *
 * @param input  assetid, name, code, serialNumber, price, supplier, category,
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateAsset = async (
  input: AssetInput
): Promise<PutResponse<null>> => {
  const { data, status, error } = await axiosPut<
    AssetInput | { id: string },
    { success: boolean }
  >({
    url: "item",
    body: {
      id: input.assetid,
      code: input.code,
      serialNumber: input.serialNumber,
      name: input.name,
      category: input.category?.name as Category,
      price: input.price,
      supplier: input.supplier?.name as Supplier,
      purchaseDate: input.purchaseDate,
      useFullLife: input.useFullLife,
    },
    config: {
      withCredentials: true,
    },
  });

  return { success: data?.success, status, error };
};

/**
 * UPDATE PERSONNEL
 *
 * @param input department, idNumber, firstName, lastName
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdatePersonnel = async (
  input: PersonnelInput
): Promise<PutResponse<null>> => {
  const { data, status, error } = await axiosPut<
    PersonnelInput | { id: string },
    { success: boolean }
  >({
    url: "personnel",
    body: {
      id: input.personnelid,
      department: input.department.name as Department,
      idNumber: input.idNumber,
      firstName: input.firstName,
      lastName: input.lastName,
    },
    config: {
      withCredentials: true,
    },
  });

  return { success: data?.success, status, error };
};

/**
 * UPDATE SUPPLIER
 *
 * @param _id supplier primary key
 * @param input name, address
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateSupplier = async (
  _id: string,
  input: SupplierInput
): Promise<PutResponse<Supplier>> => {
  const { data, status, error } = await axiosPut<
    SupplierInput | { _id: string },
    { supplier: Supplier }
  >({
    url: "supplier",
    body: {
      _id,
      name: input.name,
      address: input.address,
    },
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.supplier, status, error };
};
/**
 * UPDATE Department
 *
 * @param _id Department primary key
 * @param input name, address
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateDepartment = async (
  _id: string,
  input: DepartmentInput
): Promise<PutResponse<Department>> => {
  const { data, status, error } = await axiosPut<
    DepartmentInput | { _id: string },
    { department: Department }
  >({
    url: "department",
    body: {
      _id,
      name: input.name,
    },
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.department, status, error };
};
/**
 * UPDATE Role
 *
 * @param _id Role primary key
 * @param input name
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateRole = async (
  _id: string,
  input: RoleInput
): Promise<PutResponse<Role>> => {
  const { data, status, error } = await axiosPut<
    RoleInput | { _id: string },
    { role: Role }
  >({
    url: "role",
    body: {
      _id,
      name: input.name,
    },
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.role, status, error };
};

/**
 * UPDATE Room
 *
 * @param _id Room primary key
 * @param input name
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateRoom = async (
  _id: string,
  input: RoomInput
): Promise<PutResponse<Room>> => {
  const { data, status, error } = await axiosPut<
    RoomInput | { _id: string },
    { room: Room }
  >({
    url: "room",
    body: {
      _id,
      name: input.name,
      no: input.no,
    },
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.room, status, error };
};

/**
 * UPDATE Status
 *
 * @param _id Status primary key
 * @param input name
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateStatus = async (
  _id: string,
  input: StatusInput
): Promise<PutResponse<Status>> => {
  const { data, status, error } = await axiosPut<
    StatusInput | { _id: string },
    { status: Status }
  >({
    url: "status",
    body: {
      _id,
      name: input.name,
    },
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.status, status, error };
};

/**
 * UPDATE ItemCategory
 *
 * @param _id Category primary key
 * @param input name
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateItemCategory = async (
  _id: string,
  input: CategoryInput
): Promise<PutResponse<Category>> => {
  const { data, status, error } = await axiosPut<
    CategoryInput | { _id: string },
    { itemCategory: Category }
  >({
    url: "itemCategory",
    body: {
      _id,
      name: input.name,
    },
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.itemCategory, status, error };
};

/**
 * UPDATE Item Consumables
 *
 * @param _id ItemConsumables primary key
 * @param input name
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateItemsConsumables = async (
  _id: string,
  input: ItemConsumablesInput
): Promise<PutResponse<ItemConsumables>> => {
  const { data, status, error } = await axiosPut<
    ItemConsumablesInput | { _id: string },
    { itemConsumables: ItemConsumables }
  >({
    url: "itemConsumables",
    body: {
      _id,
      name: input.name,
      description: input.description,
      restock: input.restock,
      unitid: input.unitid,
    },
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.itemConsumables, status, error };
};

/**
 * REMOVE STOCK
 *
 * @param input item, description, unit, quantity, idNumber, roomid
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const putUpdateStockOut = async (
  input: StocksInput
): Promise<PutResponse<Stocks>> => {
  const { data, status, error } = await axiosPut<
    StocksInput,
    { stock: Stocks }
  >({
    url: "itemconsumablesstocks",
    body: {
      item: input.item,
      description: input.description,
      quantity: input.quantity,
      unit: input.unit,
      personnelid: input.personnelid,
      roomid: input.roomid,
    },
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.stock, status, error };
};
