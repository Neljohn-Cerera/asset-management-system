import { Suspense } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePeristedState from "./utils/usePersistedState";
import { light } from "./styles/Themes/light";
import { GlobalStyle } from "./styles/globalStyled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import {
  AccountPage,
  AssetsPage,
  DashboardPage,
  HistoryPage,
  InventoryPage,
  LoginPage,
  PersonnelPage,
  ReportsPage,
  SettingsPage,
} from "./pages";
import {
  StocksConsumablesPage,
  DashboardConsumablesPage,
  HistoryConsumablesPage,
  ItemsConsumablesPage,
  ReportsConsumablesPage,
} from "./consumables-pages";
import LoadingSpinner from "./pages/LoadingSpinner";
import AssetsLayout from "./pages/Layout";
import ConsumablesLayout from "./consumables-pages/layout";
// import IsAuth from "./utils/isAuth";

const App = () => {
  const [theme] = usePeristedState<DefaultTheme>("theme", light);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route element={<AssetsLayout />}>
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <DashboardPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/assets"
                element={
                  <PrivateRoute>
                    <AssetsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/inventory"
                element={
                  <PrivateRoute>
                    <InventoryPage />
                  </PrivateRoute>
                }
              />

              <Route
                path="/history"
                element={
                  <PrivateRoute>
                    <HistoryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/personnel"
                element={
                  <PrivateRoute>
                    <PersonnelPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/account"
                element={
                  <PrivateRoute>
                    <AccountPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/settings"
                element={
                  <PrivateRoute>
                    <SettingsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/reports"
                element={
                  <PrivateRoute>
                    <ReportsPage />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route element={<ConsumablesLayout />}>
              <Route
                path="/consumables/dashboard"
                element={
                  <PrivateRoute>
                    <DashboardConsumablesPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/consumables/items"
                element={
                  <PrivateRoute>
                    <ItemsConsumablesPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/consumables/stocks"
                element={
                  <PrivateRoute>
                    <StocksConsumablesPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/consumables/history"
                element={
                  <PrivateRoute>
                    <HistoryConsumablesPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/consumables/reports"
                element={
                  <PrivateRoute>
                    <ReportsConsumablesPage />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default App;
