import React, { useContext } from "react";
import { options } from "./options";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import DashBoardContext from "../../../context/dashboard/context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.font.size = 16;

const ChartComponent: React.FC = (): JSX.Element => {
 const { dashBoardArrayStates } =
   useContext(DashBoardContext);

  const chartData: ChartData<"bar", number[], number> = {
    labels: dashBoardArrayStates.statistics.map((t) => t.year),
    datasets: [
      {
        label: "Lost",
        data: dashBoardArrayStates.statistics.map((t) => t.lost),
        backgroundColor: "rgb(255, 99, 132)",
        stack: "Stack 0",
      },
      {
        label: "Good Condition",
        data: dashBoardArrayStates.statistics.map((t) => t.goodCondition),
        backgroundColor: "#4bc0c0",
        stack: "Stack 2",
      },
      {
        label: "New",
        data: dashBoardArrayStates.statistics.map((t) => t.new),
        backgroundColor: "rgb(53, 162, 235)",
        stack: "Stack 3",
      },
      {
        label: "For Repairs",
        data: dashBoardArrayStates.statistics.map((t) => t.forRepairs),
        backgroundColor: "rgb(180, 192, 75)",
        stack: "Stack 4",
      },
      {
        label: "For Replacements",
        data: dashBoardArrayStates.statistics.map((t) => t.forReplacements),
        backgroundColor: "rgb(235, 65, 53)",
        stack: "Stack 5",
      },
      {
        label: "Discarded",
        data: dashBoardArrayStates.statistics.map((t) => t.discarded),
        backgroundColor: "#743935",
        stack: "Stack 6",
      },
    ],
  };
  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        boxSizing: "border-box",
      }}
    >
      <Bar options={options} data={chartData} />
    </div>
  );
};

export default ChartComponent;
