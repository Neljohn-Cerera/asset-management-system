import { lazy } from "react";

const DashboardConsumablesPage = lazy(() => import("./dashboard"));
const HistoryConsumablesPage = lazy(() => import("./history"));
const ItemsConsumablesPage = lazy(() => import("./items"));
const ReportsConsumablesPage = lazy(() => import("./reports"));
const StocksConsumablesPage = lazy(() => import("./stocks"));

export {
  DashboardConsumablesPage,
  HistoryConsumablesPage,
  ItemsConsumablesPage,
  ReportsConsumablesPage,
  StocksConsumablesPage,
};
