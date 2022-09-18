import React, { useEffect, useReducer } from "react";
import {
  assetArrayReducer,
  assetReducer,
  assetInitialStates,
  assetInitialArrayStates,
} from "./reducer";
import AssetContext from "./context";
import { getAssets, getItemCategories, getSuppliers } from "../../api/getData";
import { postAddAsset } from "../../api/postData";
import { putUpdateAsset } from "../../api/putData";
import { Asset } from "../../api/types";
import { deleteAsset } from "../../api/deleteData";
import { formatDate } from "../../utils/formatDate";
/**
 * Asset Context Provider
 * @param props
 * @returns
 */
const AssetContextProvider: React.FC = (props) => {
  /** non array states */
  const [assetStates, dispatch] = useReducer(assetReducer, assetInitialStates);
  /** array states */
  const [assetArrayStates, dispatchArray] = useReducer(
    assetArrayReducer,
    assetInitialArrayStates
  );

  /** fetch assets */
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getAssets(
        assetStates.search,
        assetStates.page,
        assetStates.limit
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
            type: "SET_ARRAY_ASSETS",
            payload: data,
          });
        }
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [assetStates.page, assetStates.limit]);
  /** fetch suppliers & categories data when modal is open */
  useEffect(() => {
    document.title = "Asset";
    let isMounted = true;
    const fetchData = async () => {
      const { data: suppliers } = await getSuppliers();
      const { data: categories } = await getItemCategories();
      if (suppliers && categories) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_SUPPLIERS",
            payload: suppliers,
          });
          dispatchArray({
            type: "SET_ARRAY_CATEGORIES",
            payload: categories,
          });
        }
      }
    };
    if (assetStates.isModalOpen) {
      fetchData();
    }
    // cleanup
    return () => {
      isMounted = false;
    };
  }, [assetStates.isModalOpen]);
  /**
   * SEARCH ASSET
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitSearchAsset = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const { data, error } = await getAssets(
      assetStates.search,
      assetStates.page,
      assetStates.limit
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
        type: "SET_ARRAY_ASSETS",
        payload: data,
      });
    }
  };
  /**
   * ADD ASSET
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitAddAsset = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const { data, error } = await postAddAsset({
      assetid: assetStates.assetid,
      name: assetStates.name,
      code: assetStates.code,
      price: assetStates.price,
      serialNumber: assetStates.serialNumber,
      purchaseDate: assetStates.purchaseDate,
      useFullLife: assetStates.useFullLife,
      supplier: { name: assetStates.supplier },
      category: { name: assetStates.category },
    });
    if (error) {
      document.title = "Asset Registration";
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
    }
    if (data) {
      document.title = "Asset Registration";
      dispatch({
        type: "SET_DEFAULTS",
      });
      window.alert("Asset created successfully");
      return;
    }
  };
  /**
   * UPDATE ASSET
   *
   * @param e
   * @returns Promise
   */
  const handleSubmitUpdateAsset = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const updateAuth = window.confirm("Do you want to update this asset?");
    if (updateAuth) {
      const { success, error } = await putUpdateAsset({
        assetid: assetStates.assetid,
        name: assetStates.name,
        code: assetStates.code,
        price: assetStates.price,
        serialNumber: assetStates.serialNumber,
        purchaseDate: assetStates.purchaseDate,
        useFullLife: assetStates.useFullLife,
        supplier: { name: assetStates.supplier },
        category: { name: assetStates.category },
      });
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
        return;
      }
      if (success) {
        dispatch({
          type: "SET_DEFAULTS",
        });
        window.alert("Asset updated successfully");
        return;
      }
    }
  };
  /**
   * ADD ASSET
   *
   * @param e FormEvent
   * @returns void
   */
  const handleClickAddAsset = (e: React.FormEvent): void => {
    e.preventDefault();
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "insert",
    });
  };
  /**
   * UPDATE ASSET
   *
   * @param e FormEvent
   * @param asset
   */
  const handleClickUpdateAsset = (e: React.FormEvent, asset: Asset): void => {
    e.preventDefault();
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "update",
    });
    dispatch({
      type: "SET_STATE",
      state: "assetid",
      payload: asset._id,
    });
    dispatch({
      type: "SET_STATE",
      state: "name",
      payload: asset.name,
    });
    dispatch({
      type: "SET_STATE",
      state: "code",
      payload: asset.code,
    });
    dispatch({
      type: "SET_STATE",
      state: "serialNumber",
      payload: asset.serialNumber,
    });
    dispatch({
      type: "SET_STATE",
      state: "price",
      payload: asset.price,
    });
    dispatch({
      type: "SET_STATE",
      state: "purchaseDate",
      payload: formatDate(
        new Date(asset.purchaseDate).toLocaleString("en-US", {
          timeZone: "Asia/Manila",
        })
      ),
    });
    dispatch({
      type: "SET_STATE",
      state: "useFullLife",
      payload: asset.useFullLife,
    });
    dispatch({
      type: "SET_STATE",
      state: "category",
      payload: asset.category.name as string,
    });
    dispatch({
      type: "SET_STATE",
      state: "supplier",
      payload: asset.supplier.name as string,
    });
  };
  /**
   * DELETE ASSET
   *
   * @param assetid primary key
   * @returns Promise
   */
  const handleClickDeleteAsset = async (assetid: string): Promise<void> => {
    const isDeleted = window.confirm("Do you want to delete this data?");
    if (isDeleted) {
      document.title = "Loading...";
      const { success, error } = await deleteAsset(assetid);
      if (error) {
        document.title = "Account";
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
      }
      if (success) {
        document.title = "Asset";
        window.alert("Asset deleted successfully");
        // Calls getAssets function
        const { data, error } = await getAssets(
          assetStates.search,
          assetStates.page,
          assetStates.limit
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
            type: "SET_ARRAY_ASSETS",
            payload: data,
          });
        }
      }
    }
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
      payload: assetStates.page - 1,
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
      payload: assetStates.page + 1,
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
    <AssetContext.Provider
      value={{
        assetStates,
        assetArrayStates,
        handleChange,
        handleSubmitSearchAsset,
        handleSubmitAddAsset,
        handleSubmitUpdateAsset,
        handleClickAddAsset,
        handleClickUpdateAsset,
        handleClickDeleteAsset,
        handleClickCloseModal,
        handleClickNextPage,
        handleClickPreviousPage,
      }}
    >
      {props.children}
    </AssetContext.Provider>
  );
};

export default AssetContextProvider;
