/** context */
export type CDashBoard = {
  dashBoardStates: ISDashBoard;
  dashBoardArrayStates: IASDashBoard;
  handleOpenModal: (title: string, status: string) => void;
  handleCloseModal: () => void;
};
/** initial states */
export type ISDashBoard = {
  isModalOpen: boolean;
  modalTitle: string;
  assetStatus: string;
  error: string;
};
/** initial array states */
export type IASDashBoard = {
  statistics: any[];
  assets: any[];
  settings: any;
};
/** action */
export type RADashBoard =
  | {
      type: "SET_STATE";
      state: "isModalOpen" | "modalTitle" | "assetStatus";
      payload: string | number | boolean;
    }
  | {
      type: "SET_ERROR";
      payload: string;
    }
  | {
      type: "ON_CHANGE";
      fieldName: string;
      payload: string;
    }
  | {
      type: "SET_ARRAY_ASSETS";
      payload: any[];
    }
  | {
      type: "SET_ARRAY_STATISTICS";
      payload: any[];
    }
  | {
      type: "SET_SETTINGS";
      payload: any;
    };
