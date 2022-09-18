import {
  CoreChartOptions,
  ElementChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  BarControllerChartOptions,
  ScaleChartOptions,
} from "chart.js";
import { _DeepPartialObject } from "chart.js/types/utils";

export const options:
  | _DeepPartialObject<
      CoreChartOptions<"pie"> &
        ElementChartOptions<"pie"> &
        PluginChartOptions<"pie"> &
        DatasetChartOptions<"pie"> &
        BarControllerChartOptions &
        ScaleChartOptions<"pie">
    >
  | undefined = {
  maintainAspectRatio: false,
  plugins: {
    // subtitle: {
    //   font: {
    //     size: 20,
    //   },
    // },
    legend: {
      display: false,
      // position: "bottom",
    },
    // title: {
    //   display: true,
    //   text: "Yearly Stocks OUT",
    //   font: {
    //     size: 18,
    //   },
    // },
  },
  // responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  // layout: {
  //   padding: 20,
  // },
};
