import { lazy } from "react";

const AccountPage = lazy(() => import("./account"));
const AssetsPage = lazy(() => import("./assets"));
const DashboardPage = lazy(() => import("./dashboard"));
const HistoryPage = lazy(() => import("./history"));
const InventoryPage = lazy(() => import("./inventory"));
const PersonnelPage = lazy(() => import("./personnel"));
const LoginPage = lazy(() => import("./login"));
const SettingsPage = lazy(() => import("./settings"));
const ReportsPage = lazy(() => import("./reports"));

export {
  AccountPage,
  AssetsPage,
  DashboardPage,
  HistoryPage,
  InventoryPage,
  LoginPage,
  PersonnelPage,
  SettingsPage,
  ReportsPage,
};
