import React, { useContext } from "react";
import DashBoardContext from "../../../context/dashboard/context";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { StatisticsContainer } from "../styles";
import CardComponent from "./card";

const StatisticsComponent: React.FC = (): JSX.Element => {
  const { dashBoardArrayStates, handleOpenModal } =
    useContext(DashBoardContext);
  const { height } = useWindowDimensions();
  const yearAssetCount = dashBoardArrayStates.statistics?.filter(
    (dt: any) => dt?.year === dashBoardArrayStates.settings?.year
  );

  return (
    <StatisticsContainer height={height - 475}>
      <CardComponent
        bgColor="blue"
        label="Assets"
        year={dashBoardArrayStates.settings?.year}
        count={yearAssetCount.length !== 0 ? yearAssetCount[0].assets : 0}
      />
      <CardComponent
        hasButton
        bgColor="pink"
        label="Lost Assets"
        year={dashBoardArrayStates.settings?.year}
        count={yearAssetCount.length !== 0 ? yearAssetCount[0].lost : 0}
        onClick={() => handleOpenModal("Lost Assets", "lost")}
      />
      <CardComponent
        hasButton
        bgColor="yellow"
        label="For Repairs"
        year={dashBoardArrayStates.settings?.year}
        count={yearAssetCount.length !== 0 ? yearAssetCount[0].forRepairs : 0}
        onClick={() => handleOpenModal("For Repair Assets", "for repair")}
      />
      <CardComponent
        hasButton
        bgColor="red"
        label="For Replacements"
        year={dashBoardArrayStates.settings?.year}
        count={
          yearAssetCount.length !== 0 ? yearAssetCount[0].forReplacements : 0
        }
        onClick={() =>
          handleOpenModal("For Replacement Assets", "for replacement")
        }
      />
      <CardComponent
        hasButton
        bgColor="dark red"
        label="Discarded"
        year={dashBoardArrayStates.settings?.year}
        count={yearAssetCount.length !== 0 ? yearAssetCount[0].discarded : 0}
        onClick={() => handleOpenModal("Discarded", "discarded")}
      />
    </StatisticsContainer>
  );
};

export default StatisticsComponent;
