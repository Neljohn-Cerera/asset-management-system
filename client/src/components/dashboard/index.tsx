import React, { useContext } from "react";
import DashBoardContext from "../../context/dashboard/context";
import ModalComponent from "./modal";
import ChartComponent from "./chart";
import StatisticsComponent from "./statistics";

const DashBoardComponent: React.FC = (): JSX.Element => {
  const { dashBoardStates } = useContext(DashBoardContext);

  return (
    <>
      <ChartComponent />
      <StatisticsComponent />
      {dashBoardStates.isModalOpen ? <ModalComponent /> : null}
    </>
  );
};

export default DashBoardComponent;
