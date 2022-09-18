import React, { useEffect, useReducer } from "react";
import {
  stocksArrayReducer,
  stocksReducer,
  stocksInitialStates,
  stocksInitialArrayStates,
} from "./reducer";
import StocksContext from "./context";
import {
  getItemConsumables,
  getItemConsumablesStocks,
  getPersonnels,
  getRooms,
  getStockUnits,
} from "../../api/getData";
import {
  ItemConsumables,
  ItemConsumablesStocks,
  Personnel,
} from "../../api/types";
import { postAddItemConsumablesStock } from "../../api/postData";
import { putUpdateStockOut } from "../../api/putData";

/**
 * Stocks Context Provider
 * @param props
 * @returns
 */
const StocksContextProvider: React.FC = (props) => {
  /** non array states */
  const [stocksStates, dispatch] = useReducer(
    stocksReducer,
    stocksInitialStates
  );

  /** array states */
  const [stocksArrayStates, dispatchArray] = useReducer(
    stocksArrayReducer,
    stocksInitialArrayStates
  );

  /** fetching stock units data */
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getStockUnits();
      const { data: roomsData, error: roomError } = await getRooms();
      if (error) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: error,
          });
        }
      }
      if (roomError) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: roomError,
          });
        }
      }
      if (data && roomsData) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_UNITS",
            payload: data,
          });
          dispatchArray({
            type: "SET_ARRAY_ROOMS",
            payload: roomsData,
          });
        }
      }
    }
    if (stocksStates.isModalOpen) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [stocksStates.isModalOpen]);

  /** fetching consumables stocks data */
  useEffect(() => {
    document.title = "Consumables Stocks";
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getItemConsumablesStocks(
        stocksStates.search,
        stocksStates.page,
        stocksStates.limit
      );
      if (error) {
        if (isMounted) {
          dispatch({
            type: "SET_STATE",
            state: "error",
            payload: error,
          });
        }
      }
      if (data) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_CONSUMABLES_STOCKS",
            payload: data,
          });
        }
      }
    }

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [stocksStates.page, stocksStates.limit]);
  /**
   * ADD item consumables STOCK
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitAddItemConsumablesStock = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const { data: itemConsumablesStocks, error } =
      await postAddItemConsumablesStock({
        item: stocksStates.itemid,
        purchaseDate: stocksStates.purchaseDate,
        quantity: stocksStates.quantity,
        unit: stocksStates.unitid,
      });
    if (error) {
      document.title = "Consumables Stock";
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
      return;
    }
    if (itemConsumablesStocks) {
      document.title = "Consumables Stock";
      const { data, error: dataError } = await getItemConsumablesStocks(
        stocksStates.search,
        stocksStates.page,
        stocksStates.limit
      );
      if (dataError) {
        document.title = "Consumables Stock";
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: dataError,
        });
        return;
      }
      if (data) {
        dispatchArray({
          type: "SET_ARRAY_CONSUMABLES_STOCKS",
          payload: data,
        });
      }
      // set states back to default
      dispatch({
        type: "SET_DEFAULTS",
      });
      window.alert("Stock added successfully");
      return;
    }
  };
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
      stocksStates.searchItem,
      1,
      1000
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
        type: "SET_ARRAY_ITEMS_CONSUMABLES",
        payload: data,
      });
      return;
    }
  };
  /**
   * SEARCH ITEM CONSUMABLES STOCKS
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitSearchItemsConsumablesStocks = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    const { data, error } = await getItemConsumablesStocks(
      stocksStates.search,
      stocksStates.page,
      stocksStates.limit
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
        type: "SET_ARRAY_CONSUMABLES_STOCKS",
        payload: data,
      });
      return;
    }
  };
  /**
   * REMOVE STOCK
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitRemoveStock = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const { data: stock, error } = await putUpdateStockOut({
      item: stocksStates.itemName,
      description: stocksStates.itemDescription,
      personnelid: stocksStates.personnelid,
      quantity: stocksStates.quantity,
      unit: stocksStates.unitName,
      roomid: stocksStates.roomid,
    });
    if (error) {
      document.title = "Consumables Stock";
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
      return;
    }
    if (stock) {
      document.title = "Consumables Stock";
      const { data, error: dataError } = await getItemConsumablesStocks(
        stocksStates.search,
        stocksStates.page,
        stocksStates.limit
      );
      if (dataError) {
        document.title = "Consumables Stock";
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: dataError,
        });
        return;
      }
      if (data) {
        dispatchArray({
          type: "SET_ARRAY_CONSUMABLES_STOCKS",
          payload: data,
        });
      }
      // set states back to default
      dispatch({
        type: "SET_DEFAULTS",
      });
      window.alert("Stock removed successfully");
      return;
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
  const handleSubmitSearchPersonnel = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    const { data, error } = await getPersonnels(
      stocksStates.searchPersonnel,
      1,
      1000
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
        type: "SET_ARRAY_PERSONNELS",
        payload: data,
      });
    }
  };

  /**
   * SELECT ITEM
   *
   * @param e FormEvent
   * @returns void
   */
  const handleSelectItem = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    itemConsumables: ItemConsumables
  ): void => {
    e.preventDefault();
    dispatch({
      type: "SET_STATE",
      state: "itemid",
      payload: itemConsumables._id,
    });
    dispatch({
      type: "SET_STATE",
      state: "itemName",
      payload: `${itemConsumables.name} ${itemConsumables.description} - ${itemConsumables.unit.name}`,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalChildrenView",
      payload: "",
    });
    dispatch({
      type: "SET_STATE",
      state: "searchItem",
      payload: "",
    });

    return;
  };
  /**
   * SELECT PERSONNEL
   *
   * @param e FormEvent
   * @returns void
   */
  const handleSelectPersonnel = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    personnel: Personnel
  ): void => {
    e.preventDefault();
    dispatch({
      type: "SET_STATE",
      state: "personnelid",
      payload: personnel._id,
    });
    dispatch({
      type: "SET_STATE",
      state: "personnelName",
      payload: `${personnel.firstName} - ${personnel.lastName}`,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalChildrenView",
      payload: "",
    });
    dispatch({
      type: "SET_STATE",
      state: "searchPersonnel",
      payload: "",
    });

    return;
  };
  /**
   * Click Add New Stocks button
   *
   * @param e FormEvent
   * @returns void
   */
  const handleClickAddNewStocks = (
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
      payload: "stock in",
    });
    return;
  };
  /**
   * Click Add stock out button from table
   *
   * @param e FormEvent
   * @returns void
   */
  const handleClickStockOut = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    itemConsumablesStock: ItemConsumablesStocks
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
      payload: "stock out",
    });
    dispatch({
      type: "SET_STATE",
      state: "itemName",
      payload: itemConsumablesStock.item,
    });
    dispatch({
      type: "SET_STATE",
      state: "itemDescription",
      payload: itemConsumablesStock.description,
    });
    dispatch({
      type: "SET_STATE",
      state: "currentQuantity",
      payload: itemConsumablesStock.quantity,
    });
    dispatch({
      type: "SET_STATE",
      state: "unitName",
      payload: itemConsumablesStock.unit,
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
   * Click Form button insert item
   *
   * @param e FormEvent
   * @returns void
   */
  const handleClickModalInsertItem = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    // set states back to default
    dispatch({
      type: "SET_STATE",
      state: "modalChildrenView",
      payload: "form add insert item",
    });

    return;
  };
  /**
   * Click Form button insert personnel
   *
   * @param e FormEvent
   * @returns void
   */
  const handleClickModalInsertPersonnel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    // set states back to default
    dispatch({
      type: "SET_STATE",
      state: "modalChildrenView",
      payload: "form add insert personnel",
    });

    return;
  };
  /**
   * Close CHILDREN MODAL
   *
   * @param e FormEvent
   * @returns void
   */
  const handleClickCloseModalChildren = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    dispatch({
      type: "SET_STATE",
      state: "modalChildrenView",
      payload: "",
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
      payload: stocksStates.page - 1,
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
      payload: stocksStates.page + 1,
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
    <StocksContext.Provider
      value={{
        stocksStates,
        stocksArrayStates,
        handleChange,
        handleSubmitRemoveStock,
        handleSubmitAddItemConsumablesStock,
        handleSelectItem,
        handleSelectPersonnel,
        handleSubmitSearchPersonnel,
        handleSubmitSearchItemsConsumables,
        handleSubmitSearchItemsConsumablesStocks,
        handleClickAddNewStocks,
        handleClickStockOut,
        handleClickCloseModal,
        handleClickModalInsertItem,
        handleClickModalInsertPersonnel,
        handleClickCloseModalChildren,
        handleClickNextPage,
        handleClickPreviousPage,
      }}
    >
      {props.children}
    </StocksContext.Provider>
  );
};

export default StocksContextProvider;
