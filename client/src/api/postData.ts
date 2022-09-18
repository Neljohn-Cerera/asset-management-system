import { axiosPost } from "./axios";
import {
  AccountInput,
  AssetInput,
  InventoryInput,
  PersonnelInput,
  LoginInput,
  Inventory,
  Personnel,
  Asset,
  Supplier,
  Role,
  Category,
  Department,
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
  ConsumablesStocks,
  ConsumablesStocksInput,
} from "./types";

type GetResponse<T> = {
  data?: T;
  error?: string;
  status?: string;
};

/**
 * LOGIN
 *
 * @param input email , passWord
 * @returns data? : any
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postLogin = async (
  input: LoginInput
): Promise<GetResponse<any>> => {
  const { data, status, error } = await axiosPost<LoginInput, any>({
    url: "personnel/login",
    body: {
      email: input.email,
      passWord: input.passWord,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.user comes from the server response
  return { data: data?.user, status, error };
};
/**
 * LOGOUT
 *
 * @returns data? : success
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postLogout = async (): Promise<GetResponse<any>> => {
  const { data, status, error } = await axiosPost<any, any>({
    url: "personnel/logout",
    config: {},
  });

  // object data.user comes from the server response
  return { data: data?.success, status, error };
};

/**
 * ADD ASSET
 *
 * @param input code, serialNumber, name, category.name, price, supplier.name
 * @returns data? : Asset
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddAsset = async (
  input: AssetInput
): Promise<GetResponse<Asset>> => {
  const { data, status, error } = await axiosPost<AssetInput, { item: Asset }>({
    url: "item",
    body: {
      code: input.code,
      serialNumber: input.serialNumber,
      name: input.name,
      category: input.category.name as Category,
      price: input.price,
      supplier: input.supplier.name as Supplier,
      purchaseDate: input.purchaseDate,
      useFullLife: input.useFullLife,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.item comes from the server response
  return { data: data?.item, status, error };
};

/**
 * ADD PERSONNEL
 *
 * @param input department, idNumber, firstName, lastName
 * @returns data? : Personnel
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddPersonnel = async (
  input: PersonnelInput
): Promise<GetResponse<Personnel>> => {
  const { data, status, error } = await axiosPost<
    PersonnelInput,
    { personnel: Personnel }
  >({
    url: "personnel",
    body: {
      department: input.department.name as Department,
      idNumber: input?.idNumber,
      firstName: input?.firstName,
      lastName: input?.lastName,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.personnel comes from the server response
  return { data: data?.personnel, status, error };
};

/**
 * ADD ACCOUNT
 *
 * @param personnelid personnel primary key
 * @param input _id, role, passWord, email
 * @returns data? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddAccount = async (
  personnelid: string,
  input: AccountInput
): Promise<GetResponse<boolean>> => {
  const { data, status, error } = await axiosPost<
    AccountInput | { id: string },
    { success: boolean }
  >({
    url: "personnel/account",
    body: {
      id: personnelid,
      role: input.role.name as Role,
      passWord: input.passWord,
      email: input.email,
    },
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.success, status, error };
};

/**
 * ADD INVENTORY
 *
 * @param input  personnelid,itemid,roomid,status,remarks
 * @returns data? : Inventory
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddInventory = async (
  input: InventoryInput
): Promise<GetResponse<Inventory>> => {
  const { data, status, error } = await axiosPost<
    InventoryInput,
    { inventory: Inventory }
  >({
    url: "history",
    body: {
      personnelid: input.personnelid,
      itemid: input.itemid,
      roomid: input.roomid,
      status: input.status,
      remarks: input.remarks,
      year: input.year,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.inventory comes from the server response
  return { data: data?.inventory, status, error };
};

/**
 * ADD SUPPLIER
 *
 * @param input name,address
 * @returns data? : Supplier
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddSupplier = async (
  input: SupplierInput
): Promise<GetResponse<Supplier>> => {
  const { data, status, error } = await axiosPost<
    SupplierInput,
    { supplier: Supplier }
  >({
    url: "supplier",
    body: {
      name: input.name,
      address: input.address,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.supplier comes from the server response
  return { data: data?.supplier, status, error };
};
/**
 * ADD Department
 *
 * @param input name
 * @returns data? : Department
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddDepartment = async (
  input: DepartmentInput
): Promise<GetResponse<Department>> => {
  const { data, status, error } = await axiosPost<
    DepartmentInput,
    { department: Department }
  >({
    url: "department",
    body: {
      name: input.name,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.department comes from the server response
  return { data: data?.department, status, error };
};

/**
 * ADD Role
 *
 * @param input name
 * @returns data? : Role
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddRole = async (
  input: RoleInput
): Promise<GetResponse<Role>> => {
  const { data, status, error } = await axiosPost<RoleInput, { role: Role }>({
    url: "role",
    body: {
      name: input.name,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.role comes from the server response
  return { data: data?.role, status, error };
};
/**
 * ADD Room
 *
 * @param input name
 * @returns data? : Room
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddRoom = async (
  input: RoomInput
): Promise<GetResponse<Room>> => {
  const { data, status, error } = await axiosPost<RoomInput, { room: Room }>({
    url: "room",
    body: {
      name: input.name,
      no: input.no,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.room comes from the server response
  return { data: data?.room, status, error };
};

/**
 * ADD Status
 *
 * @param input name
 * @returns data? : Status
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddStatus = async (
  input: StatusInput
): Promise<GetResponse<Status>> => {
  const { data, status, error } = await axiosPost<
    StatusInput,
    { status: Status }
  >({
    url: "status",
    body: {
      name: input.name,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.status comes from the server response
  return { data: data?.status, status, error };
};

/**
 * ADD ItemCategory
 *
 * @param input name
 * @returns data? : Category
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddItemCategory = async (
  input: CategoryInput
): Promise<GetResponse<Category>> => {
  const { data, status, error } = await axiosPost<
    CategoryInput,
    { itemCategory: Category }
  >({
    url: "itemCategory",
    body: {
      name: input.name,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.Category comes from the server response
  return { data: data?.itemCategory, status, error };
};

/**
 * ADD Item Consumables
 *
 * @param input name, description
 * @returns data? : Category
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddItemConsumables = async (
  input: ItemConsumablesInput
): Promise<GetResponse<ItemConsumables>> => {
  const { data, status, error } = await axiosPost<
    ItemConsumablesInput,
    { itemConsumables: ItemConsumables }
  >({
    url: "itemconsumables",
    body: {
      name: input.name,
      description: input.description,
      restock: input.restock,
      unitid: input.unitid,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.itemConsumables comes from the server response
  return { data: data?.itemConsumables, status, error };
};

/**
 * ADD Item Consumables STOCK
 *
 * @param input item, purchaseDate, quantity, unit
 * @returns data? : ConsumablesStocks
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const postAddItemConsumablesStock = async (
  input: ConsumablesStocksInput
): Promise<GetResponse<ConsumablesStocks>> => {
  const { data, status, error } = await axiosPost<
    ConsumablesStocksInput,
    { itemConsumablesStocks: ConsumablesStocks }
  >({
    url: "itemconsumablesstocks",
    body: {
      item: input.item,
      purchaseDate: input.purchaseDate,
      quantity: input.quantity,
      unit: input.unit,
    },
    config: {
      withCredentials: true,
    },
  });
  // object data.itemConsumablesStocks comes from the server response
  return { data: data?.itemConsumablesStocks, status, error };
};
