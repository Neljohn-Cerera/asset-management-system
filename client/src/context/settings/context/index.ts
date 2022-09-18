import { createContext } from "react";
import { CSettings } from "../types";

const SettingsContext = createContext({} as CSettings);

export default SettingsContext;
