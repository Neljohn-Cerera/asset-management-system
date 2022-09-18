import { axiosDelete } from "./axios";
import { Supplier, Department, Room, Role, Status, Category } from "./types";

type DeleteResponse<T> = {
  data?: T;
  success?: boolean;
  status?: string;
  error?: string;
};

/**
 * DELETE ACCOUNT
 *
 * @param personnelid personnel primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deleteAccount = async (
  personnelid: string
): Promise<DeleteResponse<null>> => {
  const { data, status, error } = await axiosDelete<{ success: boolean }>({
    url: "personnel/account",
    config: {
      data: { id: personnelid },
      withCredentials: true,
    },
  });
  return { success: data?.success, status, error };
};

/**
 * DELETE ASSET
 *
 * @param assetid asset primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deleteAsset = async (
  assetid: string
): Promise<DeleteResponse<null>> => {
  const { data, status, error } = await axiosDelete<{ success: boolean }>({
    url: "item",
    config: {
      data: { id: assetid },
      withCredentials: true,
    },
  });
  return { success: data?.success, status, error };
};

/**
 * DELETE PERSONNEL
 *
 * @param personnelid personnel primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deletePersonnel = async (
  personnelid: string
): Promise<DeleteResponse<null>> => {
  const { data, status, error } = await axiosDelete<{ success: boolean }>({
    url: "personnel",
    config: {
      data: { id: personnelid },
      withCredentials: true,
    },
  });
  return { success: data?.success, status, error };
};

/**
 * DELETE Supplier
 *
 * @param _id supplier primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deleteSupplier = async (
  _id: string
): Promise<DeleteResponse<Supplier>> => {
  const { data, status, error } = await axiosDelete<{ supplier: Supplier }>({
    url: "supplier",
    config: {
      data: { _id },
      withCredentials: true,
    },
  });
  return { data: data?.supplier, status, error };
};

/**
 * DELETE Department
 *
 * @param _id department primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deleteDepartment = async (
  _id: string
): Promise<DeleteResponse<Department>> => {
  const { data, status, error } = await axiosDelete<{ department: Department }>(
    {
      url: "department",
      config: {
        data: { _id },
        withCredentials: true,
      },
    }
  );
  return { data: data?.department, status, error };
};
/**
 * DELETE Room
 *
 * @param _id room primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deleteRoom = async (
  _id: string
): Promise<DeleteResponse<Room>> => {
  const { data, status, error } = await axiosDelete<{ room: Room }>({
    url: "room",
    config: {
      data: { _id },
      withCredentials: true,
    },
  });
  return { data: data?.room, status, error };
};
/**
 * DELETE Role
 *
 * @param _id role primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deleteRole = async (
  _id: string
): Promise<DeleteResponse<Role>> => {
  const { data, status, error } = await axiosDelete<{ role: Role }>({
    url: "role",
    config: {
      data: { _id },
      withCredentials: true,
    },
  });
  return { data: data?.role, status, error };
};
/**
 * DELETE Status
 *
 * @param _id status primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deleteStatus = async (
  _id: string
): Promise<DeleteResponse<Status>> => {
  const { data, status, error } = await axiosDelete<{ status: Status }>({
    url: "status",
    config: {
      data: { _id },
      withCredentials: true,
    },
  });
  return { data: data?.status, status, error };
};
/**
 * DELETE Item Category
 *
 * @param _id itemcategory primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deleteItemCategory = async (
  _id: string
): Promise<DeleteResponse<Status>> => {
  const { data, status, error } = await axiosDelete<{ itemcategory: Category }>(
    {
      url: "itemcategory",
      config: {
        data: { _id },
        withCredentials: true,
      },
    }
  );
  return { data: data?.itemcategory, status, error };
};

/**
 * DELETE COMSUMABLES
 *
 * @param consumablesid consumable primary key
 * @returns success? : boolean
 * @returns status? : idle | pending | success | error
 * @returns error? : string
 */
export const deleteConsumables = async (
  _id: string
): Promise<DeleteResponse<null>> => {
  const { data, status, error } = await axiosDelete<{ success: boolean }>({
    url: "itemconsumables",
    config: {
      data: { _id },
      withCredentials: true,
    },
  });
  return { success: data?.success, status, error };
};
