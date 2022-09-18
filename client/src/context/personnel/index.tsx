import React, { useEffect, useReducer } from "react";
import {
  personnelArrayReducer,
  personnelReducer,
  personnelInitialStates,
  personnelInitialArrayStates,
} from "./reducer";
import PersonnelContext from "./context";
import { getDepartments, getPersonnels, getRoles } from "../../api/getData";
import { putUpdatePersonnel } from "../../api/putData";
import { postAddAccount, postAddPersonnel } from "../../api/postData";
import { Personnel } from "../../api/types";
import { deletePersonnel } from "../../api/deleteData";
/**
 * Personnel Context Provider
 * @param props
 * @returns
 */
const PersonnelContextProvider: React.FC = (props) => {
  /** non array states */
  const [personnelStates, dispatch] = useReducer(
    personnelReducer,
    personnelInitialStates
  );
  /** array states */
  const [personnelArrayStates, dispatchArray] = useReducer(
    personnelArrayReducer,
    personnelInitialArrayStates
  );
  /** fetching departments & roles data */
  useEffect(() => {
    document.title = "Personnel";
    let isMounted = true;
    const fetchData = async () => {
      const { data: departments } = await getDepartments();
      const { data: roles } = await getRoles();
      if (departments && roles) {
        if (isMounted) {
          dispatchArray({
            type: "SET_ARRAY_DEPARTMENTS",
            payload: departments,
          });
          dispatchArray({
            type: "SET_ARRAY_ROLES",
            payload: roles,
          });
        }
      }
    };
    if (personnelStates.isModalOpen) {
      fetchData();
    }
    // cleanup
    return () => {
      isMounted = false;
    };
  }, [personnelStates.isModalOpen]);
  /** fetching personnels data */
  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      const { data, error } = await getPersonnels(
        personnelStates.search,
        personnelStates.page,
        personnelStates.limit
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
  }, [personnelStates.page, personnelStates.limit]);
  /**
   * SEARCH PERSONNEL
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitSearchPersonnel = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    const { data, error } = await getPersonnels(
      personnelStates.search,
      personnelStates.page,
      personnelStates.limit
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
   * UPDATE PERSONNEL
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitUpdatePersonnel = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const updateAuth = window.confirm("Do you want to update this personnel?");
    if (updateAuth) {
      const { success, error } = await putUpdatePersonnel({
        personnelid: personnelStates.personnelid,
        firstName: personnelStates.firstName,
        lastName: personnelStates.lastName,
        idNumber: personnelStates.idNumber,
        department: { name: personnelStates.department },
      });
      if (error) {
        document.title = "Personnel";
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
        return;
      }
      if (success) {
        document.title = "Personnel";
        const { data: personnels } = await getPersonnels(
          personnelStates.firstName as string,
          personnelStates.page,
          personnelStates.limit
        );
        if (personnels) {
          dispatchArray({
            type: "SET_ARRAY_PERSONNELS",
            payload: personnels,
          });
        }
        dispatch({
          type: "SET_DEFAULTS",
        });
        window.alert("Personnel updated successfully");
        return;
      }
    }
  };
  /**
   * ADD PERSONNEL
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitAddPersonnel = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const { data: personnel, error } = await postAddPersonnel({
      personnelid: personnelStates.personnelid,
      firstName: personnelStates.firstName,
      lastName: personnelStates.lastName,
      idNumber: personnelStates.idNumber,
      department: { name: personnelStates.department },
    });
    if (error) {
      document.title = "Personnel";
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
      return;
    }
    if (personnel) {
      document.title = "Personel";
      // set states back to default
      dispatch({
        type: "SET_DEFAULTS",
      });
      window.alert("Personnel created successfully");
      return;
    }
  };
  /**
   * ADD ACCOUNT
   *
   * @param e FormEvent
   * @returns Promise
   */
  const handleSubmitAddAccountPersonnel = async (
    e: React.FormEvent
  ): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const { data: success, error } = await postAddAccount(
      personnelStates.personnelid as string,
      {
        email: personnelStates.email,
        passWord: personnelStates.passWord,
        role: { name: personnelStates.role },
      }
    );
    if (error) {
      document.title = "Personnel";
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
      return;
    }
    if (success) {
      document.title = "Personnel";
      const { data: personnels } = await getPersonnels(
        personnelStates.firstName as string,
        personnelStates.page,
        personnelStates.limit
      );
      if (personnels) {
        dispatchArray({
          type: "SET_ARRAY_PERSONNELS",
          payload: personnels,
        });
      }
      // set states back to default
      dispatch({
        type: "SET_DEFAULTS",
      });
      window.alert("Account created successfully");
      return;
    }
  };
  /**
   * SHOW MODAL ADD ACCOUNT
   *
   * @param e FormEvent
   * @param personnel data
   * @returns void
   */
  const handleClickAddAccount = (
    e: React.FormEvent,
    personnel: Personnel
  ): void => {
    e.preventDefault();
    dispatch({
      type: "SET_STATE",
      state: "isModalOpen",
      payload: true,
    });
    dispatch({
      type: "SET_STATE",
      state: "modalView",
      payload: "insertaccount",
    });
    dispatch({
      type: "SET_STATE",
      state: "personnelid",
      payload: personnel._id,
    });
    dispatch({
      type: "SET_STATE",
      state: "firstName",
      payload: personnel.firstName,
    });
    dispatch({
      type: "SET_STATE",
      state: "lastName",
      payload: personnel.lastName,
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
   * SHOW MODAL ADD PERSONNEL
   *
   * @param e FormEvent
   * @returns void
   *
   */
  const handleClickAddPersonnel = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
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
    return;
  };
  /**
   * SHOW MODAL UPDATE PERSONNEL
   *
   * @param e FormEvent
   * @param personnel data
   * @returns void
   */
  const handleClickUpdatePersonnel = (
    e: React.FormEvent,
    personnel: Personnel
  ): void => {
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
      state: "personnelid",
      payload: personnel._id,
    });
    dispatch({
      type: "SET_STATE",
      state: "idNumber",
      payload: personnel.idNumber,
    });
    dispatch({
      type: "SET_STATE",
      state: "firstName",
      payload: personnel.firstName,
    });
    dispatch({
      type: "SET_STATE",
      state: "lastName",
      payload: personnel.lastName,
    });
    dispatch({
      type: "SET_STATE",
      state: "department",
      payload: personnel.department?.name as string,
    });

    return;
  };
  /**
   * DELETE PERSONNEL
   *
   * @param personnelid primary key
   * @returns Promise
   */
  const handleClickDeletePersonnel = async (
    e: React.FormEvent,
    personnelid: string
  ): Promise<void> => {
    e.preventDefault();
    const isDelete = window.confirm("Delete this personnel?");
    if (isDelete) {
      document.title = "Loading...";
      const { success, error } = await deletePersonnel(personnelid);
      if (error) {
        document.title = "Personnel";
        dispatch({
          type: "SET_STATE",
          state: "error",
          payload: error,
        });
        return;
      }
      if (success) {
        document.title = "Personnel";
        const { data, error } = await getPersonnels(
          personnelStates.search,
          personnelStates.page,
          personnelStates.limit
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
        window.alert("Personnel deleted successfully");
        return;
      }
    }
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
      payload: personnelStates.page - 1,
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
      payload: personnelStates.page + 1,
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
    <PersonnelContext.Provider
      value={{
        personnelStates,
        personnelArrayStates,
        handleChange,
        handleClickAddPersonnel,
        handleClickAddAccount,
        handleClickUpdatePersonnel,
        handleClickDeletePersonnel,
        handleClickCloseModal,
        handleClickPreviousPage,
        handleClickNextPage,
        handleSubmitAddPersonnel,
        handleSubmitAddAccountPersonnel,
        handleSubmitUpdatePersonnel,
        handleSubmitSearchPersonnel,
      }}
    >
      {props.children}
    </PersonnelContext.Provider>
  );
};

export default PersonnelContextProvider;
