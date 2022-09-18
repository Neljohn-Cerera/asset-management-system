import { Outlet } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { dark } from "../styles/Themes/dark";
import { light } from "../styles/Themes/light";
import usePersistedState from "../utils/usePersistedState";
import { Footer, Header } from "../components/shared";

const AssetsLayout: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        {/* Use Outlet instead of children */}
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default AssetsLayout;
