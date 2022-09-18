/** context */
export type CLogin = {
  inputRef: any;
  loginStates: ISLogin;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmitLogin: (e: React.FormEvent) => Promise<void>;
};
/** initial states */
export type ISLogin = {
  email: string;
  passWord: string;
  error: string;
};

/** action */
export type RALogin =
  | {
      type: "SET_STATE";
      state: "email" | "passWord" | "error";
      payload: string;
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    };
