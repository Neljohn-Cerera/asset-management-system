import { useEffect, useRef, useState, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { loginReducer, loginInitialStates } from "./reducer";
import Cookies from "universal-cookie";
import LoginContext from "./context";
import { postLogin } from "../../api/postData";
/**
 * Login Context Provider
 * @param props
 * @returns
 */
const LoginContextProvider: React.FC = (props) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const inputRef: any = useRef();
  /** non array states */
  const [loginStates, dispatch] = useReducer(loginReducer, loginInitialStates);

  useEffect(() => {
    document.title = "Login";
    // inputRef.current.focus();
  }, []);
  /**
   * LOGIN ACCOUNT
   *
   * @param e
   * @returns void
   */
  const handleSubmitLogin = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    document.title = "loading...";
    const { data, error } = await postLogin({
      email: loginStates.email,
      passWord: loginStates.passWord,
    });
    if (error) {
      document.title = "Login";
      dispatch({
        type: "SET_STATE",
        state: "error",
        payload: error,
      });
      return;
    }
    if (data) {
      document.title = "Login";
      cookies.set("personnel", data, { path: "/" });
      navigate("/dashboard");
      return;
    }
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
    <LoginContext.Provider
      value={{
        inputRef,
        loginStates,
        handleChange,
        handleSubmitLogin,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
