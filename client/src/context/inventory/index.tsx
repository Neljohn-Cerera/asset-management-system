import React, { useEffect, useReducer } from "react";
import {
  getAssets,
  getHistories,
  getPersonnels,
  getRooms,
  getStatus,
} from "../../api/getData";
import {
  inventoryArrayReducer,
  inventoryReducer,
  inventoryInitialArrayStates,
  inventoryInitialStates,
} from "./reducer";
import InventoryContext from "./context";
import { postAddInventory } from "../../api/postData";
import { Asset, Personnel } from "../../api/types";

const InventoryContextProvider: React.FC = (props): JSX.Element => {
  // non array states
  const [inventoryStates, dispatch] = useReducer(
    inventoryReducer,
    inventoryInitialStates
  );
  // non array states
  const [inventoryArrayStates, dispatchArray] = useReducer(
    inventoryArrayReducer,
    inventoryInitialArrayStates
  );

  // fetching rooms
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const { data: roomsData, error: roomError } = await getRooms();
      const { data: statusData, error: statusError } = await getStatus();

      if (roomError || statusError) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: roomError! || statusError!,
        });
      }
      if (roomsData && statusData && isMounted) {
        dispatchArray({
          type: "SET_ROOMS",
          payload: roomsData,
        });
        dispatchArray({
          type: "SET_STATUS",
          payload: statusData,
        });
      }
    }
    // if modal is open fetch data
    if (inventoryStates.isModalOpen) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [inventoryStates.isModalOpen]);
  // fetching histories
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getHistories(
        inventoryStates.page,
        inventoryStates.limit
      );
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (data && isMounted) {
        dispatchArray({
          type: "SET_HISTORIES",
          payload: data,
        });
      }
    }
    // if modal is close fetch data
    if (inventoryStates.isModalOpen === false) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [
    inventoryStates.page,
    inventoryStates.limit,
    inventoryStates.isModalOpen,
  ]);

  /**
   * `onSubmit`
   *
   * Adding inventory
   *
   * @param e React.FormEvent
   * @returns `Promise` void
   */
  const handleSubmitAddInventory = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    const { data, error } = await postAddInventory({
      personnelid: inventoryStates.personnelid,
      itemid: inventoryStates.itemid,
      roomid: inventoryStates.roomid,
      status: inventoryStates.status,
      remarks: inventoryStates.remarks,
      year: inventoryStates.year,
    });
    if (error) {
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
    }
    if (data) {
      window.alert("Invetory created successfully");
      // dispatch({ type: "close modal" });
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: "",
      });
      dispatch({
        type: "SET_STATE",
        state: "itemid",
        payload: "",
      });
    }
  };
  /**
   * `onClick`
   *
   * Click add inventory button && opens modal
   *
   * @returns void
   */
  const handleClickAddInventory = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: "open modal" });
  };
  /**
   * `onClick`
   *
   * Click add close add inventory modal button && close modal
   *
   * @returns void
   */
  const handleClickAddInventoryClose = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: "close modal" });
  };
  /**
   * `onClick`
   *
   * opens insert item modal
   *
   * @returns void
   */
  const handleClickAddInventoryInsertItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: "SET_STATE", state: "modalView", payload: "item search" });
  };
  /**
   * `onClick`
   *
   * close insert item modal
   *
   * @returns void
   */
  const handleClickAddInventoryInsertItemClose = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ): void => {
    e.preventDefault();
    dispatch({ type: "SET_STATE", state: "modalView", payload: "" });
    dispatchArray({
      type: "SET_ITEMS",
      payload: [],
    });
  };
  /**
   * `onClick`
   *
   * opens insert personnel modal
   *
   * @returns void
   */
  const handleClickAddInventoryInsertPersonnel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "personnel search",
    });
  };
  /**
   * `onClick`
   *
   * close insert personnel modal
   *
   * @returns void
   */
  const handleClickAddInventoryInsertPersonnelClose = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    e.preventDefault();
    dispatch({ type: "SET_STATE", state: "modalView", payload: "" });
    dispatchArray({
      type: "SET_PERSONNELS",
      payload: [],
    });
  };
  const handleClickPrevious = async () => {
    dispatch({
      type: "SET_PREVIOUS",
    });
  };
  const handleClickNext = async () => {
    dispatch({
      type: "SET_NEXT",
    });
  };
  /**
   * `onClick`
   *
   * Selecting asset to be add for inventory
   *
   * @param e React.FormEvent
   * @returns  `void`
   */
  const handleClickSelectAsset = (e: React.FormEvent, asset: Asset): void => {
    e.preventDefault();
    dispatch({ type: "SET_STATE", state: "modalView", payload: "" });

    dispatchArray({
      type: "SET_ITEMS",
      payload: [],
    });
    dispatch({
      type: "SET_STATE",
      state: "itemName",
      payload: `${asset.name!} - ${asset.code}`,
    });
    dispatch({
      type: "SET_STATE",
      state: "itemid",
      payload: asset._id!,
    });
  };
  /**
   * `onClick`/
   *
   * Selecting personnel to be add for inventory
   *
   * @param e React.FormEvent
   * @returns  `void`
   */
  const handleClickSelectPersonnel = (
    e: React.FormEvent,
    personnel: Personnel
  ): void => {
    e.preventDefault();
    dispatch({ type: "SET_STATE", state: "modalView", payload: "" });
    dispatchArray({
      type: "SET_PERSONNELS",
      payload: [],
    });
    dispatch({
      type: "SET_STATE",
      state: "fullName",
      payload: `${personnel.firstName} ${personnel.lastName}`,
    });
    dispatch({
      type: "SET_STATE",
      state: "personnelid",
      payload: personnel._id!,
    });
  };
  /**
   * `onClick`
   *
   * Searching items
   *
   * @param e React.FormEvent
   * @returns `Promise` void
   */
  const handleClickItemSearch = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const { data, error } = await getAssets(inventoryStates.itemSearch, 1, 500);
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_ITEMS",
        payload: data,
      });
    }
  };

  /**
   * `onClick`
   *
   * Searching specific personnel by idnumber
   *
   * @param e React.FormEvent
   * @returns `Promise` void
   */
  const handleClickPersonnelSearch = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    const { data, error } = await getPersonnels(
      inventoryStates.personnelSearch,
      1,
      500
    );
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      dispatchArray({
        type: "SET_PERSONNELS",
        payload: data,
      });
    }
  };
  /**
   * Dispatching `onChange` action in `inventoryReducer`
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

  return (
    <InventoryContext.Provider
      value={{
        inventoryStates,
        inventoryArrayStates,
        handleChange,
        handleClickAddInventory,
        handleClickAddInventoryClose,
        handleClickAddInventoryInsertItem,
        handleClickAddInventoryInsertItemClose,
        handleClickAddInventoryInsertPersonnel,
        handleClickAddInventoryInsertPersonnelClose,
        handleClickNext,
        handleClickPrevious,
        handleClickSelectAsset,
        handleClickSelectPersonnel,
        handleClickPersonnelSearch,
        handleClickItemSearch,
        handleSubmitAddInventory,
      }}
    >
      {props.children}
    </InventoryContext.Provider>
  );
};

export default InventoryContextProvider;
