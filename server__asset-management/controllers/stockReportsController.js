const asyncHandler = require("express-async-handler");
const itemConsumablesStocksModel = require("../models/itemConsumablesStocksModel");
const { returnError } = require("../helper/returnError");
const stockHistoryModel = require("../models/stockHistoryModel");
/**
 * retrieve  stock OUT reports
 *
 * Route - api/stockreports/stocksout.
 *
 * Method - Get.
 *
 */
const stockOUTReportsView = asyncHandler(async (req, res) => {
  const { year } = req.query;
  try {
    // retrieve  stock OUT reprots
    const stockOutReports = await stockHistoryModel.aggregate([
      {
        $lookup: {
          from: "itemconsumables",
          localField: "item",
          foreignField: "_id",
          pipeline: [{ $project: { name: 1, description: 1, unit: 1 } }],
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
          },
          quantity: { $sum: "$quantity" },
        },
      },
      {
        $match: {
          "_id.year": parseInt(year),
        },
      },
      {
        $project: {
          _id: 0,
          item: "$_id.item",
          description: "$_id.description",
          unit: "$_id.unit",
          year: "$_id.year",
          quantity: "$quantity",
        },
      },
      { $sort: { item: 1 } },
    ]);
    // return 200
    return res.status(200).json({
      stockOutReports,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/stockreports/stocksout");
  }
});

module.exports = {
  stockOUTReportsView,
};
