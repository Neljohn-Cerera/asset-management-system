import { axiosGet } from "./axios";
import {
  FiveYearsReport,
  RoomReport,
  Status,
  YearlyReport,
  History,
  Personnel,
  Asset,
  Department,
  Category,
  Role,
  Room,
  Supplier,
  ItemConsumables,
  Unit,
  ItemConsumablesStocks,
  StockHistory,
  PieChart,
  StockOutReports,
  Settings,
} from "./types";

type GetResponse<T> = {
  data?: T;
  error?: string;
  status?: string;
};
/**
 *  GET DASHBOARD STATISTICS
 *
 * @returns data? : any [ ]
 * @returns error? : string
 */
export const getDashboardStatistics = async (): Promise<GetResponse<any[]>> => {
  const { data, status, error } = await axiosGet<{ data: any[] }>({
    url: "dashboard",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.data, status, error };
};
/**
 *  GET DASHBOARD ASSETS COUNT
 *
 * @returns data? : any [ ]
 * @returns error? : string
 */
export const getDashboardAssetsCount = async (
  assetStatus: string
): Promise<GetResponse<any[]>> => {
  const { data, status, error } = await axiosGet<{ data: any[] }>({
    url: "dashboard/assets-count",
    config: {
      withCredentials: true,
      params: {
        status: assetStatus,
      },
    },
  });

  return { data: data?.data, status, error };
};
/**
 *  GET SETTINGS DATA
 *
 * @returns data? : Settings
 * @returns error? : string
 */
export const getSettings = async (): Promise<GetResponse<Settings>> => {
  const { data, status, error } = await axiosGet<{ data: Settings }>({
    url: "settings",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.data, status, error };
};

/**
 *  GET ALL PERSONNELS BY FIRSTNAME | LASTNAME
 *
 * @param search text to be search in personnel records
 * @returns data? : Personnel [ ]
 * @returns error? : string
 */
export const getPersonnels = async (
  search: string,
  page: number,
  limit: number
): Promise<GetResponse<Personnel[]>> => {
  const { data, status, error } = await axiosGet<{ personnel: Personnel[] }>({
    url: "personnel/search",
    config: {
      params: {
        text: search,
        page,
        limit,
      },
      withCredentials: true,
    },
  });

  return { data: data?.personnel, status, error };
};

/**
 *  GET ALL ACCOUNTS BY FIRSTNAME | LASTNAME
 *
 * @param search text to be search in account records
 * @returns data? : Personnel[ ]
 * @returns error? : string
 */
export const getAccounts = async (
  search: string,
  page: number,
  limit: number
): Promise<GetResponse<Personnel[]>> => {
  const { data, status, error } = await axiosGet<{ personnel: Personnel[] }>({
    url: "personnel/search",
    config: {
      params: {
        text: search,
        page,
        limit,
      },
      withCredentials: true,
    },
  });

  return { data: data?.personnel, status, error };
};

/**
 *  GET ALL ASSETS BY CODE | SERIAL | NAME
 *
 * @param search text use in searching assets records
 * @returns data? : Asset[ ]
 * @returns error? : string
 */
export const getAssets = async (
  search: string,
  page: number,
  limit: number
): Promise<GetResponse<Asset[]>> => {
  const { data, status, error } = await axiosGet<{ item: Asset[] }>({
    url: "item/search",
    config: {
      withCredentials: true,
      params: {
        text: search,
        page,
        limit,
      },
    },
  });

  return { data: data?.item, status, error };
};

/**
 *  GET ASSET BY ITEM CODE
 *
 * @param code  is use in searching specific asset
 * @returns data? : Asset
 * @returns error? : string
 */
export const getAssetByCode = async (
  code: string
): Promise<GetResponse<Asset>> => {
  const { data, status, error } = await axiosGet<{ item: Asset }>({
    url: `item/${code}`,
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.item, status, error };
};

/**
 *  GET PERSONNEL BY IDNUMBER
 *
 * @param idNumber is use in searching specific personnel
 * @returns data? : Personnel
 * @returns error? : string
 */
export const getPersonnelByIdNumber = async (
  idNumber: string
): Promise<GetResponse<Personnel>> => {
  const { data, status, error } = await axiosGet<{ personnel: Personnel }>({
    url: `personnel/${idNumber}`,
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.personnel, status, error };
};

/**
 *  GET ALL DEPARTMENTS
 *
 * @returns data? : Department [ ]
 * @returns error? : string
 */
export const getDepartments = async (): Promise<
  GetResponse<Array<Department>>
> => {
  const { data, status, error } = await axiosGet<{ department: Department[] }>({
    url: "department",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.department, status, error };
};

/**
 *  GET ALL ITEM CATEGORIES
 *
 * @returns data? : Category [ ]
 * @returns error? : string
 */
export const getItemCategories = async (): Promise<GetResponse<Category[]>> => {
  const { data, status, error } = await axiosGet<{ itemCategory: Category[] }>({
    url: "itemCategory",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.itemCategory, status, error };
};

/**
 *  GET ALL ROLES
 *
 * @returns data? : Role [ ]
 * @returns error? : string
 */
export const getRoles = async (): Promise<GetResponse<Role[]>> => {
  const { data, error } = await axiosGet<{ role: Role[] }>({
    url: "role",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.role, error };
};

/**
 *  GET ALL ROOMS
 *
 * @returns data? : Room [ ]
 * @returns error? : string
 */
export const getRooms = async (): Promise<GetResponse<Room[]>> => {
  const { data, status, error } = await axiosGet<{ room: Room[] }>({
    url: "room",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.room, status, error };
};

/**
 * GET ALL SUPPLIERS
 *
 * @returns data? : Supplier [ ]
 * @returns error? : string
 */
export const getSuppliers = async (): Promise<GetResponse<Supplier[]>> => {
  const { data, status, error } = await axiosGet<{ suppliers: Supplier[] }>({
    url: "supplier",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.suppliers, status, error };
};

/**
 * GET ALL HISTORIES
 *
 * @returns data? : hISTORY [ ]
 * @returns error? : string
 */
export const getHistories = async (
  page: number,
  limit: number
): Promise<GetResponse<History[]>> => {
  const { data, status, error } = await axiosGet<{ history: History[] }>({
    url: "history",
    config: {
      withCredentials: true,
      params: {
        page,
        limit,
      },
    },
  });

  return { data: data?.history, status, error };
};

/**
 * GET HISTORY BY ITEM CODE
 *
 * @returns data? : history
 * @returns error? : string
 */
export const getHistoryByItemCode = async (
  code: string
): Promise<GetResponse<History>> => {
  const { data, status, error } = await axiosGet<{ history: History }>({
    url: `history/search/${code}`,
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.history, status, error };
};
/**
 * GET ALL HISTORY BY ITEM CODE
 *
 * @returns data? : history[]
 * @returns error? : string
 */
export const getHistoriesByItemCode = async (
  code: string
): Promise<GetResponse<History[]>> => {
  const { data, status, error } = await axiosGet<{ history: History[] }>({
    url: `history/search/records/${code}`,
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.history, status, error };
};

/**
 * GET ALL HISTORY RECORDS BY SPECIFIC ITEM
 *
 * @returns data? : history
 * @returns error? : string
 */
export const getHistoryRecordsByItemCode = async (
  code: string
): Promise<GetResponse<History[]>> => {
  const { data, status, error } = await axiosGet<{ history: History[] }>({
    url: `history/search/records/${code}`,
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.history, status, error };
};

/**
 * GET 5 YEARS REPORTS
 *
 * @returns data? : FiveYearsReportsType []
 * @returns error? : string
 */
export const getFiveYearsReports = async (
  fromYear: number,
  toYear: number
): Promise<GetResponse<FiveYearsReport[]>> => {
  const { data, status, error } = await axiosGet<{
    data: FiveYearsReport[];
  }>({
    url: `reports/five-years`,
    config: {
      withCredentials: true,
      params: {
        fromYear,
        toYear,
      },
    },
  });

  return { data: data?.data, status, error };
};

/**
 * GET YEARLY REPORTS
 *
 * @returns data? : `YearlyReportType`
 * @returns error? : string
 */
export const getYearlyReports = async (
  year: number
): Promise<GetResponse<YearlyReport>> => {
  const { data, status, error } = await axiosGet<{
    data: YearlyReport;
  }>({
    url: `reports/yearly`,
    config: {
      withCredentials: true,
      params: {
        year,
      },
    },
  });

  return { data: data?.data, status, error };
};
/**
 * GET ROOM REPORTS
 *
 * @returns data? : `RoomReportType`
 * @returns error? : string
 */
export const getRoomReports = async (
  roomid: string,
  year: string
): Promise<GetResponse<RoomReport>> => {
  const { data, status, error } = await axiosGet<{
    data: RoomReport;
  }>({
    url: `reports/room`,
    config: {
      withCredentials: true,
      params: {
        roomid,
        year,
      },
    },
  });

  return { data: data?.data, status, error };
};

/**
 * GET STATUS
 *
 * @returns data? : `RoomReportType`
 * @returns error? : string
 */
export const getStatus = async (): Promise<GetResponse<Status[]>> => {
  const { data, status, error } = await axiosGet<{
    status: Status[];
  }>({
    url: `status`,
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.status, status, error };
};

/**
 * GET item Consumables
 *
 * @returns data? : `itemConsumables`
 * @returns error? : string
 */
export const getItemConsumables = async (
  search: string,
  page: number,
  limit: number
): Promise<GetResponse<ItemConsumables[]>> => {
  const { data, status, error } = await axiosGet<{
    itemConsumables: ItemConsumables[];
  }>({
    url: "itemconsumables",
    config: {
      params: {
        text: search,
        page,
        limit,
      },
      withCredentials: true,
    },
  });

  return { data: data?.itemConsumables, status, error };
};

/**
 * GET item Consumables Stocks
 *
 * @returns data? : `itemConsumablesStocks`
 * @returns error? : string
 */
export const getItemConsumablesStocks = async (
  search: string,
  page: number,
  limit: number
): Promise<GetResponse<ItemConsumablesStocks[]>> => {
  const { data, status, error } = await axiosGet<{
    itemConsumablesStocks: ItemConsumablesStocks[];
  }>({
    url: "itemconsumablesstocks",
    config: {
      params: {
        text: search,
        page,
        limit,
      },
      withCredentials: true,
    },
  });

  return { data: data?.itemConsumablesStocks, status, error };
};
/**
 * GET stock units
 *
 * @returns data? : `stockunits`
 * @returns error? : string
 */
export const getStockUnits = async (): Promise<GetResponse<Unit[]>> => {
  const { data, status, error } = await axiosGet<{
    stockunits: Unit[];
  }>({
    url: "stockunit",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.stockunits, status, error };
};

/**
 * GET stock histories
 *
 * @returns data? : `stockHistories`
 * @returns error? : string
 */
export const getStockHistories = async (
  search: string,
  page: number,
  limit: number
): Promise<GetResponse<StockHistory[]>> => {
  const { data, status, error } = await axiosGet<{
    stockHistories: StockHistory[];
  }>({
    url: "stockhistory",
    config: {
      params: {
        text: search,
        page,
        limit,
      },
      withCredentials: true,
    },
  });

  return { data: data?.stockHistories, status, error };
};

/**
 * GET stock OUT Reports
 *
 * @returns data? : `stockOutReports`
 * @returns error? : string
 */
export const getStockOutReports = async (
  year: number
): Promise<GetResponse<StockOutReports[]>> => {
  const { data, status, error } = await axiosGet<{
    stockOutReports: StockOutReports[];
  }>({
    url: "stockreports/stocksOUT",
    config: {
      params: {
        year: year,
      },
      withCredentials: true,
    },
  });

  return { data: data?.stockOutReports, status, error };
};

/**
 * GET stocks data for PIE CHART STOCK IN
 *
 * @returns data? : `pieChartStockin`
 * @returns error? : string
 */
export const getStocksPieChartDataStockin = async (): Promise<
  GetResponse<PieChart[]>
> => {
  const { data, status, error } = await axiosGet<{
    pieChartStockin: PieChart[];
  }>({
    url: "stockdashboard/piechart/stockin",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.pieChartStockin, status, error };
};

/**
 * GET stocks data for PIE CHART STOCK OUT
 *
 * @returns data? : `pieChartStockout`
 * @returns error? : string
 */
export const getStocksPieChartDataStockout = async (): Promise<
  GetResponse<PieChart[]>
> => {
  const { data, status, error } = await axiosGet<{
    pieChartStockout: PieChart[];
  }>({
    url: "stockdashboard/piechart/stockout",
    config: {
      withCredentials: true,
    },
  });

  return { data: data?.pieChartStockout, status, error };
};
