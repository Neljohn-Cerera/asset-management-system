const asyncHandler = require("express-async-handler");
const itemConsumablesStocksModel = require("../models/itemConsumablesStocksModel");
const stockHistoryModel = require("../models/stockHistoryModel");
const settingsModel = require("../models/settingsModel");
const { returnError } = require("../helper/returnError");

const settingsID = "63278c49694d6bbdc1e3aa77";

/**
 * data for stock dashboard pie chart stock in
 *
 * Route - api/stockdashboard/piechart/stockin.
 *
 * Method - Get.
 *
 *
 */
const stockDashboardPieChartStockin = asyncHandler(async (req, res) => {
  try {
    const settings = await settingsModel.findById({
      _id: settingsID,
    });
    if (!settings) {
      return res.status(400).json({
        message: "Settings could not be found.",
      });
    }

    // retrieve  stocks pei chart data stock in
    const pieChartStockin = await itemConsumablesStocksModel.aggregate([
      {
        $lookup: {
          from: "itemconsumables",
          localField: "item",
          foreignField: "_id",
          pipeline: [
            { $project: { name: 1, description: 1, unit: 1, color: 1 } },
          ],
          as: "item",
        },
      },
      { $unwind: "$item" },
      {
        $lookup: {
          from: "stockunits",
          localField: "item.unit",
          foreignField: "_id",
          pipeline: [{ $project: { name: 1 } }],
          as: "unit",
        },
      },
      { $unwind: "$unit" },
      {
        $group: {
          _id: {
            item: "$item.name",
            description: "$item.description",
            unit: "$unit.name",
            year: { $year: "$createdAt" },
            color: "$item.color",
          },
          quantity: { $sum: "$quantity" },
        },
      },
      {
        $match: { "_id.year": parseInt(settings?.year) },
      },
      {
        $project: {
          _id: 0,
          item: "$_id.item",
          description: "$_id.description",
          unit: "$_id.unit",
          year: "$_id.year",
          color: "$_id.color",
          quantity: "$quantity",
        },
      },
      { $sort: { item: 1 } },
    ]);

    // return 200
    return res.status(200).json({
      pieChartStockin,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/stockdashboard/piechart");
  }
});

/**
 * data for stock dashboard pie chart stock out
 *
 * Route - api/stockdashboard/piechart/stockout.
 *
 * Method - Get.
 *
 *
 */
const stockDashboardPieChartStockout = asyncHandler(async (req, res) => {
  try {
    const settings = await settingsModel.findById({
      _id: settingsID,
    });
    if (!settings) {
      return res.status(400).json({
        message: "Settings could not be found.",
      });
    }
    // retrieve  stocks pei chart data stock out
    const pieChartStockout = await stockHistoryModel.aggregate([
      {
        $lookup: {
          from: "itemconsumables",
          localField: "item",
          foreignField: "_id",
          as: "item",
        },
      },
      { $unwind: "$item" },
      {
        $lookup: {
          from: "stockunits",
          localField: "item.unit",
          foreignField: "_id",
          as: "unit",
        },
      },
      { $unwind: "$unit" },

      {
        $group: {
          _id: {
            item: "$item.name",
            description: "$item.description",
            unit: "$unit.name",
            year: { $year: "$createdAt" },
            color: "$item.color",
          },
          quantity: { $sum: "$quantity" },
        },
      },
      {
        $match: { "_id.year": parseInt(settings?.year) },
      },
      {
        $project: {
          _id: 0,
          item: "$_id.item",
          description: "$_id.description",
          unit: "$_id.unit",
          year: "$_id.year",
          color: "$_id.color",
          quantity: "$quantity",
        },
      },
      { $sort: { item: 1 } },
    ]);
    // return 200
    return res.status(200).json({
      pieChartStockout,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/stockdashboard/piechart");
  }
});

module.exports = {
  stockDashboardPieChartStockin,
  stockDashboardPieChartStockout,
};
