import React, { useEffect, useReducer } from "react";
import {
  getSettings,
  getSuppliers,
  getDepartments,
  getRooms,
  getItemCategories,
  getRoles,
  getStatus,
} from "../../api/getData";
import {
  putSettings,
  putUpdateDepartment,
  putUpdateItemCategory,
  putUpdateRole,
  putUpdateRoom,
  putUpdateStatus,
} from "../../api/putData";
import {
  deleteSupplier,
  deleteDepartment,
  deleteRole,
  deleteRoom,
  deleteStatus,
  deleteItemCategory,
} from "../../api/deleteData";
import SettingsContext from "./context";
import {
  settingsReducer,
  settingsInitialStates,
  settingsArrayReducer,
  settingsInitialArrayStates,
} from "./reducer";
import { ModalChildrenView } from "./types";
import {
  postAddDepartment,
  postAddItemCategory,
  postAddRole,
  postAddRoom,
  postAddStatus,
  postAddSupplier,
} from "../../api/postData";
import { putUpdateSupplier } from "../../api/putData";

const SettingsContextProvider: React.FC = (props) => {
  /** context states */
  const [settingsStates, dispatch] = useReducer(
    settingsReducer,
    settingsInitialStates
  );
  /** array states */
  const [settingsArrayStates, dispatchArray] = useReducer(
    settingsArrayReducer,
    settingsInitialArrayStates
  );
  /** fetch settings data */
  useEffect(() => {
    document.title = "Settings";
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getSettings();
      const resRangeYear = data?.rangeYear.split("-");
      if (error) {
        console.log("error: ", error);
      }
      if (data) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "year",
            payload: data.year as number,
          });
          dispatch({
            type: "SET_STATE",
            state: "startYear",
            payload: parseInt(resRangeYear![0]),
          });
          dispatch({
            type: "SET_STATE",
            state: "endYear",
            payload: parseInt(resRangeYear![1]),
          });
          dispatch({
            type: "SET_STATE",
            state: "rangeYear",
            payload: data.rangeYear as string,
          });
        }
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [settingsStates.isUpdate, settingsStates.refresh]);

  // #region Handle Clicks

  const handleClickSave = async (): Promise<void> => {
    const isUpdated = window.confirm("Continue updating settings?");
    if (isUpdated) {
      const { success, error } = await putSettings(
        settingsStates.rangeYear,
        settingsStates.year
      );
      if (error) {
        console.log("error : ", error);
      }
      if (success) {
        dispatch({
          type: "SET_STATE",
          state: "refresh",
          payload: !settingsStates.refresh,
        });
        dispatch({
          type: "SET_STATE",
          state: "isUpdate",
          payload: !settingsStates.isUpdate,
        });

        window.alert("Settings updated successfully");
      }
    }
  };

  const handleClickRefresh = () => {
    dispatch({
      type: "SET_STATE",
      state: "refresh",
      payload: !settingsStates.refresh,
    });
  };
  /**
   * Click Suppliers Button for modal Suppliers
   *
   */
  const handleClickSupplier = async (): Promise<void> => {
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "supplier",
    });
    const { data, error } = await getSuppliers();
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_SUPPLIERS",
        payload: data,
      });
    }
  };

  /**
   * Click Department Button for modal department
   *
   */
  const handleClickDepartment = async (): Promise<void> => {
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "department",
    });
    const { data, error } = await getDepartments();
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_DEPARTMENTS",
        payload: data,
      });
    }
  };
  /**
   * Click Rooms Button for modal Rooms
   *
   */
  const handleClickRoom = async (): Promise<void> => {
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "room",
    });
    const { data, error } = await getRooms();
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_ROOMS",
        payload: data,
      });
    }
  };
  /**
   * Click ItemCategories Button for modal ItemCategories
   *
   */
  const handleClickItemCategory = async (): Promise<void> => {
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "itemCategory",
    });
    const { data, error } = await getItemCategories();
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_ITEM_CATEGORIES",
        payload: data,
      });
    }
  };
  /**
   * Click Roles Button for modal Roles
   *
   */
  const handleClickRole = async (): Promise<void> => {
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "role",
    });
    const { data, error } = await getRoles();
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_ROLES",
        payload: data,
      });
    }
  };
  /**
   * Click Status Button for modal Status
   *
   */
  const handleClickStatus = async (): Promise<void> => {
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "status",
    });
    const { data, error } = await getStatus();
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_STATUS",
        payload: data,
      });
    }
  };
  /**
   * Open children modal add
   *
   */
  const handleClickModalChildrenAdd = (
    modalChildrenView: ModalChildrenView
  ): void => {
    dispatch({
      type: "SET_STATE",
      state: "isModalChildrenOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalChildrenView",
      payload: modalChildrenView,
    });
    dispatch({
      type: "SET_STATE",
      state: "error",
      payload: "",
    });
  };
  /**
   * Open children modal update
   *
   */
  const handleClickModalChildrenUpdate = (
    modalChildrenView: ModalChildrenView,
    data: any
  ): void => {
    dispatch({
      type: "SET_STATE",
      state: "isModalChildrenOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "error",
      payload: "",
    });
    dispatch({
      type: "SET_STATE",
      state: "modalChildrenView",
      payload: modalChildrenView,
    });
    if (modalChildrenView === "supplier update") {
      dispatch({
        type: "SET_STATE",
        state: "supplierid",
        payload: data._id,
      });
      dispatch({
        type: "SET_STATE",
        state: "supplierName",
        payload: data.supplierName,
      });
      dispatch({
        type: "SET_STATE",
        state: "supplierAddress",
        payload: data.supplierAddress,
      });
    }
    if (modalChildrenView === "department update") {
      dispatch({
        type: "SET_STATE",
        state: "departmentid",
        payload: data._id,
      });
      dispatch({
        type: "SET_STATE",
        state: "departmentName",
        payload: data.departmentName,
      });
    }
    if (modalChildrenView === "room update") {
      dispatch({
        type: "SET_STATE",
        state: "roomid",
        payload: data._id,
      });
      dispatch({
        type: "SET_STATE",
        state: "roomName",
        payload: data.roomName,
      });
      dispatch({
        type: "SET_STATE",
        state: "roomNo",
        payload: data.roomNo,
      });
    }
    if (modalChildrenView === "role update") {
      dispatch({
        type: "SET_STATE",
        state: "roleid",
        payload: data._id,
      });
      dispatch({
        type: "SET_STATE",
        state: "roleName",
        payload: data.roleName,
      });
    }
    if (modalChildrenView === "status update") {
      dispatch({
        type: "SET_STATE",
        state: "statusid",
        payload: data._id,
      });
      dispatch({
        type: "SET_STATE",
        state: "statusName",
        payload: data.statusName,
      });
    }
    if (modalChildrenView === "itemCategory update") {
      dispatch({
        type: "SET_STATE",
        state: "itemCategoryid",
        payload: data._id,
      });
      dispatch({
        type: "SET_STATE",
        state: "itemCategoryName",
        payload: data.itemCategoryName,
      });
    }
  };
  /**
   * Closing Modal
   *
   */
  const handleClickCloseModal = (): void => {
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: false,
    });
    dispatchArray({
      type: "SET_ARRAY_DEFAULTS",
    });
  };

  /**
   * Close Children Modal
   *
   */
  const handleClickCloseChildrenModal = (): void => {
    dispatch({
      type: "SET_CHILDREN_MODAL_CLOSE",
    });
  };
  // #endregion

  // #region Handle Deletes
  /**
   * Handle delete supplier
   *
   */
  const handleDeleteSupplier = async (
    _id: string,
    name: string
  ): Promise<void> => {
    const isDelete = window.confirm(`Do you want to delete ${name} supplier?`);
    if (isDelete) {
      const { data, error } = await deleteSupplier(_id);
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: suppliers, error: supplierError } = await getSuppliers();
        if (supplierError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: supplierError,
          });
        }
        if (suppliers) {
          dispatchArray({
            type: "SET_ARRAY_SUPPLIERS",
            payload: suppliers,
          });
        }
        window.alert("Successfully deleted");
      }
    }
  };
  /**
   * Handle delete department
   *
   */
  const handleDeleteDepartment = async (
    _id: string,
    name: string
  ): Promise<void> => {
    const isDelete = window.confirm(
      `Do you want to delete ${name} department?`
    );
    if (isDelete) {
      const { data, error } = await deleteDepartment(_id);
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: departments, error: departmentError } =
          await getDepartments();
        if (departmentError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: departmentError,
          });
        }
        if (departments) {
          dispatchArray({
            type: "SET_ARRAY_DEPARTMENTS",
            payload: departments,
          });
        }
        window.alert("Successfully deleted");
      }
    }
  };
  /**
   * Handle delete item category
   *
   */
  const handleDeleteItemCategory = async (
    _id: string,
    name: string
  ): Promise<void> => {
    const isDelete = window.confirm(`Do you want to delete ${name} category?`);
    if (isDelete) {
      const { data, error } = await deleteItemCategory(_id);
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: itemCategories, error: itemCategoriesError } =
          await getItemCategories();
        if (itemCategoriesError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: itemCategoriesError,
          });
        }
        if (itemCategories) {
          dispatchArray({
            type: "SET_ARRAY_ITEM_CATEGORIES",
            payload: itemCategories,
          });
        }
        window.alert("Successfully deleted");
      }
    }
  };
  /**
   * Handle delete room
   *
   */
  const handleDeleteRoom = async (_id: string, name: string): Promise<void> => {
    const isDelete = window.confirm(`Do you want to delete ${name} room?`);
    if (isDelete) {
      const { data, error } = await deleteRoom(_id);
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: rooms, error: roomError } = await getRooms();
        if (roomError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: roomError,
          });
        }
        if (rooms) {
          dispatchArray({
            type: "SET_ARRAY_ROOMS",
            payload: rooms,
          });
        }
        window.alert("Successfully deleted");
      }
    }
  };
  /**
   * Handle delete role
   *
   */
  const handleDeleteRole = async (_id: string, name: string): Promise<void> => {
    const isDelete = window.confirm(`Do you want to delete ${name} role?`);
    if (isDelete) {
      const { data, error } = await deleteRole(_id);
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: roles, error: roleError } = await getRoles();
        if (roleError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: roleError,
          });
        }
        if (roles) {
          dispatchArray({
            type: "SET_ARRAY_ROLES",
            payload: roles,
          });
        }
        window.alert("Successfully deleted");
      }
    }
  };
  /**
   * Handle delete status
   *
   */
  const handleDeleteStatus = async (
    _id: string,
    name: string
  ): Promise<void> => {
    const isDelete = window.confirm(`Do you want to delete ${name} status?`);
    if (isDelete) {
      const { data, error } = await deleteStatus(_id);
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: status, error: statusError } = await getStatus();
        if (statusError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: statusError,
          });
        }
        if (status) {
          dispatchArray({
            type: "SET_ARRAY_ROLES",
            payload: status,
          });
        }
        window.alert("Successfully deleted");
      }
    }
  };
  // #endregion

  // #region Handle Submits
  /**
   * Adding `Supplier`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitAddSupplier = async (): Promise<void> => {
    const { data, error } = await postAddSupplier({
      name: settingsStates.supplierName,
      address: settingsStates.supplierAddress,
    });
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      const { data: suppliers, error: supplierError } = await getSuppliers();
      if (supplierError) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: supplierError,
        });
      }
      if (suppliers) {
        dispatchArray({
          type: "SET_ARRAY_SUPPLIERS",
          payload: suppliers,
        });
      }
      window.alert("Added successfull");
    }
    dispatch({
      type: "SET_STATE_DEFAULTS_ADD_UPDATE",
    });
  };
  /**
   * Updating `Supplier`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitUpdateSupplier = async (): Promise<void> => {
    const isupdate = window.confirm("Do you want to update this data?");
    if (isupdate) {
      const { data, error } = await putUpdateSupplier(
        settingsStates.supplierid,
        {
          name: settingsStates.supplierName,
          address: settingsStates.supplierAddress,
        }
      );
      console.log("error : ", error);
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: suppliers, error: supplierError } = await getSuppliers();
        if (supplierError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: supplierError,
          });
        }
        if (suppliers) {
          dispatchArray({
            type: "SET_ARRAY_SUPPLIERS",
            payload: suppliers,
          });
        }
        window.alert("Updated successfull");
      }

      dispatch({
        type: "SET_STATE_DEFAULTS_ADD_UPDATE",
      });
    }
  };
  /**
   * Adding `Department`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitAddDepartment = async (): Promise<void> => {
    const { data, error } = await postAddDepartment({
      name: settingsStates.departmentName,
    });
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      const { data: departments, error: departmentsError } =
        await getDepartments();
      if (departmentsError) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: departmentsError,
        });
      }
      if (departments) {
        dispatchArray({
          type: "SET_ARRAY_DEPARTMENTS",
          payload: departments,
        });
      }
      window.alert("Added successfull");
    }
    dispatch({
      type: "SET_STATE_DEFAULTS_ADD_UPDATE",
    });
  };
  /**
   * Updating `Department`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitUpdateDepartment = async (): Promise<void> => {
    const isupdate = window.confirm("Do you want to update this data?");
    if (isupdate) {
      const { data, error } = await putUpdateDepartment(
        settingsStates.departmentid,
        {
          name: settingsStates.departmentName,
        }
      );
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: departments, error: departmentError } =
          await getDepartments();
        if (departmentError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: departmentError,
          });
        }
        if (departments) {
          dispatchArray({
            type: "SET_ARRAY_DEPARTMENTS",
            payload: departments,
          });
        }
        window.alert("Updated successfull");
      }

      dispatch({
        type: "SET_STATE_DEFAULTS_ADD_UPDATE",
      });
    }
  };
  /**
   * Adding `Role`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitAddRole = async (): Promise<void> => {
    const { data, error } = await postAddRole({
      name: settingsStates.roleName,
    });
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      const { data: roles, error: rolesError } = await getRoles();
      if (rolesError) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: rolesError,
        });
      }
      if (roles) {
        dispatchArray({
          type: "SET_ARRAY_ROLES",
          payload: roles,
        });
      }
      window.alert("Added successfull");
    }
    dispatch({
      type: "SET_STATE_DEFAULTS_ADD_UPDATE",
    });
  };
  /**
   * Updating `Role`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitUpdateRole = async (): Promise<void> => {
    const isupdate = window.confirm("Do you want to update this data?");
    if (isupdate) {
      const { data, error } = await putUpdateRole(settingsStates.roleid, {
        name: settingsStates.roleName,
      });
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: roles, error: roleError } = await getRoles();
        if (roleError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: roleError,
          });
        }
        if (roles) {
          dispatchArray({
            type: "SET_ARRAY_ROLES",
            payload: roles,
          });
        }
        window.alert("Updated successfull");
      }

      dispatch({
        type: "SET_STATE_DEFAULTS_ADD_UPDATE",
      });
    }
  };
  /**
   * Adding `Room`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitAddRoom = async (): Promise<void> => {
    const { data, error } = await postAddRoom({
      name: settingsStates.roomName,
      no: settingsStates.roomNo,
    });
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      const { data: rooms, error: roomsError } = await getRooms();
      if (roomsError) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: roomsError,
        });
      }
      if (rooms) {
        dispatchArray({
          type: "SET_ARRAY_ROOMS",
          payload: rooms,
        });
      }
      window.alert("Added successfull");
    }
    dispatch({
      type: "SET_STATE_DEFAULTS_ADD_UPDATE",
    });
  };
  /**
   * Updating `Room`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitUpdateRoom = async (): Promise<void> => {
    const isupdate = window.confirm("Do you want to update this data?");
    if (isupdate) {
      const { data, error } = await putUpdateRoom(settingsStates.roomid, {
        name: settingsStates.roomName,
        no: settingsStates.roomNo,
      });
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: rooms, error: roomError } = await getRooms();
        if (roomError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: roomError,
          });
        }
        if (rooms) {
          dispatchArray({
            type: "SET_ARRAY_ROOMS",
            payload: rooms,
          });
        }
        window.alert("Updated successfull");
      }

      dispatch({
        type: "SET_STATE_DEFAULTS_ADD_UPDATE",
      });
    }
  };
  /**
   * Adding `Status`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitAddStatus = async (): Promise<void> => {
    const { data, error } = await postAddStatus({
      name: settingsStates.statusName,
    });
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      const { data: statusData, error: statusDataError } = await getStatus();
      if (statusDataError) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: statusDataError,
        });
      }
      if (statusData) {
        dispatchArray({
          type: "SET_ARRAY_STATUS",
          payload: statusData,
        });
      }
      window.alert("Added successfull");
    }
    dispatch({
      type: "SET_STATE_DEFAULTS_ADD_UPDATE",
    });
  };
  /**
   * Updating `Status`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitUpdateStatus = async (): Promise<void> => {
    const isupdate = window.confirm("Do you want to update this data?");
    if (isupdate) {
      const { data, error } = await putUpdateStatus(settingsStates.statusid, {
        name: settingsStates.statusName,
      });
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: statusData, error: statusDataError } = await getStatus();
        if (statusDataError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: statusDataError,
          });
        }
        if (statusData) {
          dispatchArray({
            type: "SET_ARRAY_STATUS",
            payload: statusData,
          });
        }
        window.alert("Updated successfull");
      }

      dispatch({
        type: "SET_STATE_DEFAULTS_ADD_UPDATE",
      });
    }
  };
  /**
   * Adding `ItemCategory`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitAddItemCategory = async (): Promise<void> => {
    const { data, error } = await postAddItemCategory({
      name: settingsStates.itemCategoryName,
    });
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      const { data: itemCategories, error: itemCategoriesError } =
        await getItemCategories();
      if (itemCategoriesError) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: itemCategoriesError,
        });
      }
      if (itemCategories) {
        dispatchArray({
          type: "SET_ARRAY_ITEM_CATEGORIES",
          payload: itemCategories,
        });
      }
      window.alert("Added successfull");
    }
    dispatch({
      type: "SET_STATE_DEFAULTS_ADD_UPDATE",
    });
  };
  /**
   * Updating `ItemCategory`
   *
   * @returns `Promise` `void`
   */
  const handleSubmitUpdateItemCategory = async (): Promise<void> => {
    const isupdate = window.confirm("Do you want to update this data?");
    if (isupdate) {
      const { data, error } = await putUpdateItemCategory(
        settingsStates.itemCategoryid,
        {
          name: settingsStates.itemCategoryName,
        }
      );
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data) {
        const { data: itemCategories, error: itemCategoriesError } =
          await getItemCategories();
        if (itemCategoriesError) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: itemCategoriesError,
          });
        }
        if (itemCategories) {
          dispatchArray({
            type: "SET_ARRAY_ITEM_CATEGORIES",
            payload: itemCategories,
          });
        }
        window.alert("Updated successfull");
      }

      dispatch({
        type: "SET_STATE_DEFAULTS_ADD_UPDATE",
      });
    }
  };
  // #endregion

  // #region Handle Change
  /**
   * Dispatching `onChange` action in `settingsReducer`
   *
   * @param e React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   * @returns `void`
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    dispatch({
      type: "ON_CHANGE",
      fieldName: e.target.name,
      payload: e.target.value,
    });
  };
  /**
   * Handle change isUpate
   *
   * @returns `void`
   */
  const handleChangeIsUpdate = (): void => {
    dispatch({
      type: "SET_STATE",
      state: "isUpdate",
      payload: !settingsStates.isUpdate,
    });
  };
  /**
   * Handle change startYear
   *
   * @param e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
   * @returns `void`
   */
  const handleChangeStartYear = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    dispatch({
      type: "SET_STATE",
      state: "startYear",
      payload: parseInt(e.target.value),
    });
    dispatch({
      type: "SET_STATE",
      state: "endYear",
      payload: parseInt(e.target.value) + 4,
    });
    dispatch({
      type: "SET_STATE",
      state: "rangeYear",
      payload: `${e.target.value}-${(parseInt(e.target.value) + 4).toString()}`,
    });
  };
  // #endregion

  return (
    <SettingsContext.Provider
      value={{
        settingsStates,
        settingsArrayStates,
        handleChange,
        handleChangeStartYear,
        handleChangeIsUpdate,
        handleClickRefresh,
        handleClickSave,
        handleClickSupplier,
        handleClickDepartment,
        handleClickRoom,
        handleClickItemCategory,
        handleClickRole,
        handleClickStatus,
        handleClickCloseModal,
        handleClickCloseChildrenModal,
        handleClickModalChildrenAdd,
        handleClickModalChildrenUpdate,
        handleDeleteSupplier,
        handleDeleteDepartment,
        handleDeleteItemCategory,
        handleDeleteRole,
        handleDeleteRoom,
        handleDeleteStatus,
        handleSubmitAddSupplier,
        handleSubmitUpdateSupplier,
        handleSubmitAddDepartment,
        handleSubmitUpdateDepartment,
        handleSubmitAddRole,
        handleSubmitUpdateRole,
        handleSubmitAddRoom,
        handleSubmitUpdateRoom,
        handleSubmitAddStatus,
        handleSubmitUpdateStatus,
        handleSubmitAddItemCategory,
        handleSubmitUpdateItemCategory,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsContextProvider;
