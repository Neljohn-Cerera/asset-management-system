import SettingsComponent from "../components/settings";
import { SettingsContextProvider } from "../context";

const Settings = () => {
  return (
    <SettingsContextProvider>
      <SettingsComponent />
    </SettingsContextProvider>
  );
};

export default Settings;
