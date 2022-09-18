import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import DashboardContext from "../../../../consumables-context/dashboard/context";
import { options } from "./options";
import { PieChartContainer } from "../../styles";
import TableComponent from "./table";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.size = 16;

const ChartStockOutComponent: React.FC = (): JSX.Element => {
  const {  dashboardArrayStates } =
    useContext(DashboardContext);
  const chartDataSets = dashboardArrayStates.pieChartStockout.map(
    (val, index) => {
      return {
        label: `${val.item} ${val.description}`,
        data: [val.quantity],
        backgroundColor: val.color,
        stack: `Stack ${index}`,
        hoverOffset: 4,
      };
    }
  );
  const chartData = {
    labels: chartDataSets.map((val) => val.label),
    datasets: [
      {
        label: "# of Votes",
        data: chartDataSets.map((val) => val.data),
        backgroundColor: chartDataSets.map((val) => val.backgroundColor),
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <PieChartContainer>
      <div style={{ width: "400px", height: "100%", padding: "20px" }}>
        <Pie options={options} data={chartData} />
      </div>
      <TableComponent />
    </PieChartContainer>
  );
};

export default ChartStockOutComponent;
