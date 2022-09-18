const asyncHandler = require("express-async-handler");
const stockHistoryModel = require("../models/stockHistoryModel");
const { returnError } = require("../helper/returnError");

/**
 * Find all stock histories
 *
 * Route - api/stockhistory.
 *
 * Method - Get.
 *
 * @returns {stockHistoryModel} [stock histories]
 *
 */
const stockHistoryView = asyncHandler(async (req, res) => {
  const { text } = req.query;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  try {
    // Find all stock HISTORIES
    const stockHistories = await stockHistoryModel
      .aggregate([
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
          $lookup: {
            from: "rooms",
            localField: "designation",
            foreignField: "_id",
            as: "room",
          },
        },
        { $unwind: "$room" },
        {
          $lookup: {
            from: "personnels",
            localField: "requestedby",
            foreignField: "_id",
            as: "requestedby",
          },
        },
        { $unwind: "$requestedby" },
        {
          $match: {
            $or: [
              { "item.name": { $regex: text, $options: "i" } },
              { "item.description": { $regex: text, $options: "i" } },
            ],
          },
        },
        {
          $project: {
            designation: 0,
            item: {
              name: "$item.name",
              description: "$item.description",
            },
            quantity: "$quantity",
            unit: "$unit.name",
            requestdby: {
              firstName: "$requestedby.firstName",
              lastName: "$requestedby.lastName",
            },
            designation: {
              name: "$room.name",
              no: "$room.no",
            },
            date: "$createdAt",
          },
        },
      ])
      .skip(startIndex)
      .limit(limit);

    // return 200
    return res.status(200).json({
      stockHistories,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/stockhistory");
  }
});

module.exports = {
  stockHistoryView,
};
