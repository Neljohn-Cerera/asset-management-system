const asyncHandler = require("express-async-handler");
const itemConsumablesStocksModel = require("../models/itemConsumablesStocksModel");
const itemConsumablesModel = require("../models/itemConsumablesModel");
const stockUnitModel = require("../models/stockUnit");
const stockHistoryModel = require("../models/stockHistoryModel");
const personnelModel = require("../models/personnelModel");
const { returnError } = require("../helper/returnError");

/**
 * ADD STOCK
 *
 * Route - api/itemconsumablesstocks.
 *
 * Method - Post.
 *
 * @Body {  item, purchaseDate, quantity, unit } itemconsumablesstocks
 *
 */
const addConsumablesStocks = asyncHandler(async (req, res) => {
  const { item, purchaseDate, quantity } = req.body;

  // validate input fields
  if (item === "" || purchaseDate === "" || quantity === 0) {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  try {
    const _item = await itemConsumablesModel.findById(item);
    if (!_item) {
      return res.status(400).json({
        message: "Item not found",
      });
    }

    const itemConsumablesStocks = await itemConsumablesStocksModel.create({
      item: _item._id,
      purchaseDate,
      quantity: parseInt(quantity),
    });
    // return 200
    return res.status(200).json({
      itemConsumablesStocks,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "api/itemconsumablesstocks");
  }
});
/**
 * REMOVE STOCK
 *
 * Route - api/itemconsumablesstocks.
 *
 * Method - PUT.
 *
 * @Body {  item, purchaseDate, quantity, unit } itemconsumablesstocks
 *
 */
const removeConsumablesStocks = asyncHandler(async (req, res) => {
  const { item, description, unit, quantity, personnelid, roomid } = req.body;
  // validate input fields
  if (
    item === "" ||
    description === "" ||
    unit == "" ||
    personnelid === "" ||
    roomid === ""
  ) {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  // find unit
  const stockUnit = await stockUnitModel.findOne({
    name: unit,
  });
  if (!stockUnit) {
    return res.status(400).json({
      message: "Unit not found",
    });
  }

  // find one consumable
  const itemConsumables = await itemConsumablesModel.findOne({
    name: item,
    description,
    unit: stockUnit._id,
  });

  if (!itemConsumables) {
    return res.status(400).json({
      message: "Item not found",
    });
  }

  // find one personnel
  const personnel = await personnelModel.findById(personnelid);
  if (!personnel) {
    return res.status(400).json({
      message: "Personnel not found",
    });
  }
  // find stocks
  const itemConsumablesStocks = await itemConsumablesStocksModel
    .find({
      item: itemConsumables._id,
      quantity: { $ne: 0 },
    })
    .sort({ purchaseDate: 1 });
  if (itemConsumablesStocks.length === 0) {
    return res.status(400).json({
      message: "Dont have stocks for this item",
    });
  }
  if (quantity > itemConsumablesStocks[0].quantity) {
    return res.status(400).json({
      message: `Old stock should be consume first, Stock count : ${itemConsumablesStocks[0].quantity}`,
    });
  }
  try {
    // update stock quantity
    const stock = await itemConsumablesStocksModel
      .findOneAndUpdate(
        { _id: itemConsumablesStocks[0]._id },
        {
          quantity:
            parseInt(itemConsumablesStocks[0].quantity) - parseInt(quantity),
        }
      )
      .populate([
        {
          path: "item",
          model: "itemConsumables",
          select: "id name description unit",
          populate: {
            path: "unit",
            model: "stockUnit",
            select: "id name",
          },
        },
      ]);
    if (stock) {
      // insert stock history
      const stockHistory = await stockHistoryModel.create({
        item: itemConsumables._id,
        quantity,
        designation: roomid,
        requestedby: personnel._id,
      });
      if (stockHistory) {
        // return 200
        return res.status(200).json({
          stock,
        });
      }
    }
  } catch (err) {
    // return 500
    returnError(res, "PUT", "api/itemconsumablesstocks");
  }
});

/**
 * Retrieves all STOCKS
 *
 * Route - api/itemconsumablesstocks.
 *
 * Method - Get..
 *
 * @returns { itemConsumablesStocksModel } [itemconsumablesstocks]
 *
 */
const consumablesStocksView = async (req, res) => {
  const { text } = req.query;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  try {
    // Find all itemConsumabless
    const itemConsumablesStocks = await itemConsumablesStocksModel.aggregate([
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
        $match: {
          $or: [
            { "item.name": { $regex: text, $options: "i" } },
            { "item.description": { $regex: text, $options: "i" } },
          ],
        },
      },
      {
        $group: {
          _id: {
            item: "$item.name",
            description: "$item.description",
            unit: "$unit.name",
            restock: "$item.restock",
          },
          quantity: { $sum: "$quantity" },
        },
      },
      {
        $project: {
          _id: 0,
          item: "$_id.item",
          description: "$_id.description",
          restock: "$_id.restock",
          unit: "$_id.unit",
          quantity: "$quantity",
        },
      },
      { $sort: { item: 1 } },
      { $skip: startIndex },
      { $limit: limit },
    ]);

    // return 200
    return res.status(200).json({
      itemConsumablesStocks,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/itemconsumablesstocks");
  }
};

module.exports = {
  consumablesStocksView,
  addConsumablesStocks,
  removeConsumablesStocks,
};
