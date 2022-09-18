import React, { useEffect, useReducer } from "react";
import {
  consumablesItemsArrayReducer,
  consumablesItemsReducer,
  consumablesItemsInitialStates,
  consumablesItemsInitialArrayStates,
} from "./reducer";
import ConsumablesItemsContext from "./context";
import { getItemConsumables, getStockUnits } from "../../api/getData";
import { postAddItemConsumables } from "../../api/postData";
import { ItemConsumables } from "../../api/types";
import { ModalView } from "./types";
import { putUpdateItemsConsumables } from "../../api/putData";
import { deleteConsumables } from "../../api/deleteData";
/**
 * ConsumablesItems Context Provider
 * @param props
 * @returns
 */
const ConsumablesItemsContextProvider: React.FC = (props) => {
  /** non array states */
  const [consumablesItemsStates, dispatch] = useReducer(
    consumablesItemsReducer,
    consumablesItemsInitialStates
  );
  /** array states */
  const [consumablesItemsArrayStates, dispatchArray] = useReducer(
    consumablesItemsArrayReducer,
    consumablesItemsInitialArrayStates
  );
  /** fetching personnels data */
  useEffect(() => {
    document.title = "Consumables Items";
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getItemConsumables(
        consumablesItemsStates.search,
        consumablesItemsStates.page,
        consumablesItemsStates.limit
      );
      const { data: units, error: unitsError } = await getStockUnits();
      if (error) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: error,
          });
        }
      }
      if (unitsError) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: unitsError,
          });
        }
      }
      if (data && units) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_ITEMS",
            payload: data,
          });
          dispatchArray({
            type: "SET_ARRAY_UNITS",
            payload: units,
          });
        }
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [consumablesItemsStates.page, consumablesItemsStates.limit]);
  /**
   * SEARCH ITEM CONSUMABLES
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitSearchItemsConsumables = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    const { data, error } = await getItemConsumables(
      consumablesItemsStates.search,
      consumablesItemsStates.page,
      consumablesItemsStates.limit
    );
    if (error) {
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
      return;
    }
    if (data) {
      dispatchArray({
        type: "SET_ARRAY_ITEMS",
        payload: data,
      });
      return;
    }
  };
  /**
   * ADD item consumables
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitAddItemConsumables = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const { data: itemConsumables, error } = await postAddItemConsumables({
      name: consumablesItemsStates.itemName,
      description: consumablesItemsStates.itemDescription,
      restock: consumablesItemsStates.restock,
      unitid: consumablesItemsStates.unitid,
    });
    if (error) {
      document.title = "Consumables";
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
      return;
    }
    if (itemConsumables) {
      document.title = "Consumables";
      const { data, error: dataError } = await getItemConsumables(
        consumablesItemsStates.itemName,
        1,
        5
      );
      if (dataError) {
        document.title = "Consumables";
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: dataError,
        });
        return;
      }
      if (data) {
        dispatchArray({
          type: "SET_ARRAY_ITEMS",
          payload: data,
        });
      }
      // set states back to default
      dispatch({
        type: "SET_DEFAULTS",
      });
      window.alert("Item registered successfully");
      return;
    }
  };

  /**
   * UPDATE item consumables
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitUpdateItemConsumables = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const isUpdate = window.confirm(
      `Do you want to update item : ${consumablesItemsStates.itemName}`
    );
    if (isUpdate) {
      const { data, error } = await putUpdateItemsConsumables(
        consumablesItemsStates.itemid,
        {
          name: consumablesItemsStates.itemName,
          description: consumablesItemsStates.itemDescription,
          restock: consumablesItemsStates.restock,
          unitid: consumablesItemsStates.unitid,
        }
      );
      if (error) {
        document.title = "Item Consumables";
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
        return;
      }
      if (data) {
        document.title = "Item Consumables";
        const { data, error: dataError } = await getItemConsumables(
          consumablesItemsStates.search,
          1,
          5
        );
        if (dataError) {
          document.title = "Item Consumables";
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: dataError,
          });
          return;
        }
        if (data) {
          dispatchArray({
            type: "SET_ARRAY_ITEMS",
            payload: data,
          });
        }
        // set states back to default
        dispatch({
          type: "SET_DEFAULTS",
        });
        window.alert("Item Consumable updated successfully");
        return;
      }
    }
  };
  const handleClickDeleteConsumable = async (itemid: string) => {
    const isDeleted = window.confirm("Do you want to delete this data?");
    if (isDeleted) {
      document.title = "Loading...";
      const { success, error } = await deleteConsumables(itemid);
      if (error) {
        document.title = "Item Consumables";
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (success) {
        document.title = "Item Consumables";
        window.alert("Item Consumable deleted successfully");
        // Calls getAssets function
        const { data, error: dataError } = await getItemConsumables(
          consumablesItemsStates.search,
          1,
          5
        );
        if (dataError) {
          document.title = "Item Consumables";
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: dataError,
          });
          return;
        }
        if (data) {
          dispatchArray({
            type: "SET_ARRAY_ITEMS",
            payload: data,
          });
        }
      }
    }
  };

  /**
   * Open MODAL
   *
   * @param e FormEvent
   * @returns void
   */
  const handleClickOpenModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    // set states back to default
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "item-consumables add" as ModalView,
    });
    return;
  };
  /**
   * CLICK UPDATE ITEM CONSUMABLES
   *
   * @param item ItemConsumables
   * @returns void
   */
  const handleClickUpdateItemConsumables = (item: ItemConsumables): void => {
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "item-consumables update" as ModalView,
    });
    dispatch({
      type: "SET_STATE",
      state: "itemid",
      payload: item._id,
    });
    dispatch({
      type: "SET_STATE",
      state: "unitid",
      payload: item.unit._id,
    });
    dispatch({
      type: "SET_STATE",
      state: "itemName",
      payload: item.name,
    });
    dispatch({
      type: "SET_STATE",
      state: "itemDescription",
      payload: item.description,
    });
    dispatch({
      type: "SET_STATE",
      state: "restock",
      payload: item.restock,
    });
    return;
  };
  /**
   * CLOSE MODAL
   *
   * @param e FormEvent
   * @returns void
   *
   */
  const handleClickCloseModal = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    // set states back to default
    dispatch({
      type: "SET_DEFAULTS",
    });
    return;
  };
  /**
   * SET PREVIOUS PAGE
   *
   * @returns void
   */
  const handleClickPreviousPage = (): void => {
    dispatch({
      type: "SET_STATE",
      state: "page",
      payload: consumablesItemsStates.page - 1,
    });
  };
  /**
   * SET NEXT PAGE
   *
   * @returns void
   */
  const handleClickNextPage = (): void => {
    dispatch({
      type: "SET_STATE",
      state: "page",
      payload: consumablesItemsStates.page + 1,
    });
  };

  /**
   * Dispatch `ON_CHANGE` action
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
    <ConsumablesItemsContext.Provider
      value={{
        consumablesItemsStates,
        consumablesItemsArrayStates,
        handleChange,
        handleClickOpenModal,
        handleClickCloseModal,
        handleClickUpdateItemConsumables,
        handleClickNextPage,
        handleClickPreviousPage,
        handleSubmitAddItemConsumables,
        handleSubmitUpdateItemConsumables,
        handleSubmitSearchItemsConsumables,
        handleClickDeleteConsumable,
      }}
    >
      {props.children}
    </ConsumablesItemsContext.Provider>
  );
};

export default ConsumablesItemsContextProvider;
