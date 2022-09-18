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
      CoreChartOptions<"bar"> &
        ElementChartOptions<"bar"> &
        PluginChartOptions<"bar"> &
        DatasetChartOptions<"bar"> &
        BarControllerChartOptions &
        ScaleChartOptions<"bar">
    >
  | undefined = {
  maintainAspectRatio: false,
  plugins: {
    // subtitle: {
    //   font: {
    //     size: 20,
    //   },
    // },
    title: {
      display: true,
      text: "5 Years Assets Statistics",
      font: {
        size: 18,
      },
    },
  },
  // responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  layout: {
    padding: 20,
  },
  scales: {
    x: {
      grid: {
        display: true,
      },
      stacked: true,
    },
    y: {
      grid: {
        display: true,
      },
      stacked: true,
    },
  },
};
