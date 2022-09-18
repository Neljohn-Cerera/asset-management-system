/** five years reports */
export type FiveYearsReport = {
  room: {
    name: string;
    personnel: string;
    schoolYear: string;
    totalAssets: number;
    counts: {
      goodCondition: number;
      new: number;
      forReplacement: number;
      forRepair: number;
      lost: number;
      year: number;
    }[];
    assets: {
      _id: {
        code: string;
        name: string;
      };
      status: {
        status: string;
        year: number;
      }[];
    }[];
  };
};
/** yearly reports */
export type YearlyReport = {
  year: string;
  data: Array<{
    room: {
      name: string;
      personnel: string;
      assetsCount: {
        status: {
          name: string;
        };
        count: number;
      }[];
      assets: {
        _id: string;
        item: {
          name: string;
          code: string;
        };
        status: {
          name: string;
        };
        year: number;
      }[];
    };
  }>;
};
/** room reports */
export type RoomReport = {
  room: string;
  personnel: string;
  year: string;
  assetsCount: {
    status: {
      name: string;
    };
    count: number;
  }[];
  assets: {
    _id: string;
    item: {
      name: string;
      code: string;
      remarks: string;
    };
    status: {
      name: string;
    };
    year: number;
  }[];
};
/** personnel */
export type Personnel = {
  _id: string;
  firstName: string;
  lastName: string;
  idNumber: string;
  isActive: number;
  department: Department;
  account: Account;
};
/** personnel input */
export type PersonnelInput = Omit<Personnel, "isActive" | "_id" | "account"> & {
  personnelid?: string;
};
/** asset */
export type Asset = {
  _id: string;
  name: string;
  code: string;
  serialNumber: string;
  price: string;
  supplier: Supplier;
  category: Category;
  status: {
    name: string;
  };
  purchaseDate: string;
  useFullLife: number;
};
/** asset input */
export type AssetInput = Omit<Asset, "status" | "_id"> & { assetid?: string };
/** inventory */
export type Inventory = {
  itemid?: string;
  personnelid?: string;
  roomid?: string;
  status?: string;
  remarks?: string;
};
/** inventory input */
export type InventoryInput = Required<Inventory> & { year: number };
/** history */
export type History = {
  _id: string;
  item: Asset;
  room: {
    name: string;
    no: string;
  };
  personnel: Personnel;
  status: {
    name: string;
  };
  remarks: string;
  year: number;
  createdAt: Date;
};
/** category */
export type Category = {
  _id?: string;
  name?: string;
};
type CategoryRequired = Required<Category>;
/** category input */
export type CategoryInput = Omit<CategoryRequired, "_id">;
/** department */
export type Department = {
  _id?: string;
  name?: string;
};
type DepartmentRequired = Required<Department>;
/** department input */
export type DepartmentInput = Omit<DepartmentRequired, "_id">;
/** account */
export type Account = {
  _id: string;
  role: Role;
  passWord: string;
  email: string;
};
/** account input */
export type AccountInput = Omit<Account, "_id">;
/** role */
export type Role = {
  _id?: string;
  name?: string;
};
type RoleRequired = Required<Role>;
/** role input */
export type RoleInput = Omit<RoleRequired, "_id">;
/** supplier */
export type Supplier = {
  _id?: string;
  name?: string;
  address?: string;
};
type SupplieRequired = Required<Supplier>;
/** supplier input*/
export type SupplierInput = Omit<SupplieRequired, "_id">;
/** status */
export type Status = {
  _id?: string;
  name?: string;
};
type StatusRequired = Required<Status>;
/** status input */
export type StatusInput = Omit<StatusRequired, "_id">;
/** room */
export type Room = {
  _id?: string;
  name?: string;
  no?: string;
};
type RoomRequired = Required<Room>;
/** room input */
export type RoomInput = Omit<RoomRequired, "_id">;
/** login input */
export type LoginInput = {
  email: string;
  passWord: string;
};
/** item consumbales */
export type ItemConsumables = {
  _id: string;
  name: string;
  description: string;
  restock: number;
  unit: Unit;
};
/** item consumbales input */
export type ItemConsumablesInput = Omit<ItemConsumables, "_id" | "unit"> & {
  unitid: string;
};
/** unit */
export type Unit = {
  _id: string;
  name: string;
};
/** unit input */
export type UnitInput = Omit<Unit, "_id">;

/** item consumables stocks */
export type ItemConsumablesStocks = {
  item: string;
  description: string;
  unit: string;
  quantity: number;
  restock?: number;
};

export type Stocks = {
  _id: string;
  item: string;
  purchaseDate: string;
  quantity: number;
  unit: string;
};

export type StocksInput = {
  item: string;
  description: string;
  unit: string;
  quantity: number;
  personnelid: string;
  roomid: string;
};

/**  consumables stocks */
export type ConsumablesStocks = {
  _id: string;
  item: string;
  purchaseDate: string;
  quantity: number;
  unit: string;
};
/** consumables stocks input */
export type ConsumablesStocksInput = Omit<ConsumablesStocks, "_id">;

export type StockHistory = {
  _id: string;
  item: {
    name: string;
    description: string;
  };
  designation: {
    name: string;
    no: string;
  };
  quantity: number;
  unit: string;
  requestdby: {
    firstName: string;
    lastName: string;
  };
  date: Date;
};

export type StockOutReports = {
  item: string;
  description: string;
  unit: string;
  year: number;
  quantity: number;
};
export type StockInReports = {
  item: string;
  description: string;
  unit: string;
  year: number;
  color: string;
  quantity: number;
};

export type PieChart = {
  item: string;
  description: string;
  unit: string;
  year: number;
  color: string;
  quantity: number;
};

export type Settings = {
  _id: string;
  rangeYear: string;
  createdAt: string;
  updatedAt: string;
  year: number;
};
