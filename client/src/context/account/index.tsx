import React, { useEffect, useReducer } from "react";
import {
  accountArrayReducer,
  accountReducer,
  accountInitialStates,
  accountInitialArrayStates,
} from "./reducer";
import AccountContext from "./context";
import { getAccounts, getRoles } from "../../api/getData";
import { putUpdateAccount } from "../../api/putData";
import { deleteAccount } from "../../api/deleteData";
import { Personnel } from "../../api/types";
/**
 * Account Context Provider
 * @param props
 * @returns
 */
const AccountContextProvider: React.FC = (props) => {
  /** non array states */
  const [accountStates, dispatch] = useReducer(
    accountReducer,
    accountInitialStates
  );
  /** array states */
  const [accountArrayStates, dispatchArray] = useReducer(
    accountArrayReducer,
    accountInitialArrayStates
  );
  /** fetch roles */
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      document.title = "Account";
      const { data } = await getRoles();
      if (data) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_ROLES",
            payload: data,
          });
        }
      }
    };
    if (accountStates.isModalOpen) {
      fetchData();
    }
    // cleanup
    return () => {
      isMounted = false;
    };
  }, [accountStates.isModalOpen]);
  /** fetch accounts */
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getAccounts(
        accountStates.search,
        accountStates.page,
        accountStates.limit
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
            type: "SET_ARRAY_PERSONNELS",
            payload: data,
          });
        }
      }
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [accountStates.page, accountStates.limit]);
  /**
   * SEARCH ACCOUNT
   *
   * @param e FormEvent
   * @param firstName state use in loading data after update
   * @returns Promise
   */
  const handleSubmitSearchAccount = async (
    e: React.FormEvent,
    firstName?: string
  ): Promise<void> => {
    e.preventDefault();
    const { data, error } = await getAccounts(
      firstName ? firstName : accountStates.search,
      accountStates.page,
      accountStates.limit
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
        type: "SET_ARRAY_PERSONNELS",
        payload: data,
      });
      return;
    }
  };
  /**
   * UPDATE ACCOUNT
   *
   * @param e
   * @returns Promise
   */
  const handleSubmitUpdateAccount = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const updateAuth = window.confirm("Do you want to update this account?");
    const fName = accountStates.fullName.split(" ");
    if (updateAuth) {
      const { success, error } = await putUpdateAccount(
        accountStates.personnelid,
        {
          email: accountStates.email,
          passWord: accountStates.passWord,
          role: { name: accountStates.role },
        }
      );
      if (error) {
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
        return;
      }
      if (success) {
        // calls handleSubmitSearchAccount function
        handleSubmitSearchAccount(e, fName[0] as string);
        dispatch({
          type: "SET_DEFAULTS",
        });
        window.alert("Account updated successfully");
        return;
      }
    }
  };
  /**
   * DELETE ACCOUNT
   *
   * @param personnelid primary key
   * @returns Promise void
   */
  const handleClickDeleteAccount = async (
    personnelid: string
  ): Promise<void> => {
    const deleteAsset = window.confirm("Do you want to delete this data?");
    if (deleteAsset) {
      document.title = "Loading...";
      const { success, error } = await deleteAccount(personnelid);
      if (error) {
        document.title = "Account";
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
        return;
      }
      if (success) {
        document.title = "Account";
        window.alert("Account deleted successfully");
        const { data, error } = await getAccounts(
          accountStates.search,
          accountStates.page,
          accountStates.limit
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
        return;
      }
    }
    document.title = "Account";
  };
  /**
   * RETRIEVE ACCOUNT DATA FOR UPDATE FROM ACCOUNT TABLE
   *
   * @param personnel data
   * @returns void
   */
  const handleClickUpdateAccount = (personnel: Personnel): void => {
    dispatch({
      type: "SET_STATE",
      state: "role",
      payload: personnel.account?.role?.name as string,
    });
    dispatch({
      type: "SET_STATE",
      state: "passWord",
      payload: "password",
    });
    dispatch({
      type: "SET_STATE",
      state: "email",
      payload: personnel.account?.email as string,
    });
    dispatch({
      type: "SET_STATE",
      state: "personnelid",
      payload: personnel._id as string,
    });
    dispatch({
      type: "SET_STATE",
      state: "fullName",
      payload: `${personnel.firstName} ${personnel.lastName}`,
    });
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    return;
  };
  /**
   * CLOSE MODAL
   *
   * @param e FormEvent
   * @returns void
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
      payload: accountStates.page - 1,
    });
  };
  /**
   * SET NEXT PAGE
   *
   * @returns void
   */
  const handleClickNextPage = () => {
    dispatch({
      type: "SET_STATE",
      state: "page",
      payload: accountStates.page + 1,
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
    <AccountContext.Provider
      value={{
        accountStates,
        accountArrayStates,
        handleChange,
        handleSubmitSearchAccount,
        handleSubmitUpdateAccount,
        handleClickUpdateAccount,
        handleClickDeleteAccount,
        handleClickCloseModal,
        handleClickNextPage,
        handleClickPreviousPage,
      }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export default AccountContextProvider;
