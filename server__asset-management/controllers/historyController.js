const asyncHandler = require("express-async-handler");
const itemModel = require("../models/itemModel");
const roomModel = require("../models/roomModel");
const historyModel = require("../models/historyModel");
const statusModel = require("../models/statusModel");
const { returnError } = require("../helper/returnError");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
/**
 * Create inventory
 *
 * Route - api/history.
 *
 * Method - Post.
 *
 * @Body {  personnelid, itemid, roomid, status, remarks? } item data
 *
 */
const inventoryRegistration = asyncHandler(async (req, res) => {
  const { personnelid, itemid, roomid, status, remarks, year } = req.body;
  // let year = 2022;

  // validate input fields
  if (personnelid === "" || itemid === "" || roomid === "" || status === "") {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  const isExist = await historyModel.findOne({
    uniqueCode: `${itemid}-${year}`,
  });
  if (isExist) {
    // return 400
    return res.status(400).json({
      message: "Inventory for this item was already been made",
    });
  }
  const item = await itemModel.findById({ _id: itemid });
  if (!item) {
    // return 400
    return res.status(400).json({
      message: "Item Not Found",
    });
  }
  const room = await roomModel.findById({ _id: roomid });
  if (!room) {
    // return 400
    return res.status(400).json({
      message: "Room Not Found",
    });
  }
  const currentStatus = await statusModel.findOne({ name: status });

  if (!room) {
    // return 400
    return res.status(400).json({
      message: "Status Not Found",
    });
  }
  try {
    // Create inventory
    const inventory = await historyModel.create({
      personnel: personnelid,
      item: itemid,
      room: roomid,
      status: currentStatus._id,
      remarks,
      year: parseInt(year),
      uniqueCode: `${itemid}-${year}`,
    });
    if (!inventory) {
      // return 5000
      returnError(res, "Post", "/api/history");
    }
    if (inventory) {
      const itemUpdate = await itemModel.updateOne(
        { _id: itemid },
        status === "lost" || status === "discarded"
          ? { status: currentStatus._id, isActive: false }
          : { status: currentStatus._id, isActive: true }
      );
      if (!itemUpdate) {
        await historyModel.findByIdAndDelete({ _id: inventory._id });
        // return 500
        returnError(res, "Post", "/api/history");
      }
    }

    // return 200
    return res.status(200).json({
      inventory,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "/api/history");
  }
});

/**
 * Retrieves all history
 *
 * Route - api/history.
 *
 * Method - Get.
 *
 * @returns { historyModel } [history]
 */
const historyView = asyncHandler(async (req, res) => {
  // const page = parseInt(req.query.page);
  // const limit = parseInt(req.query.limit);
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  try {
    // Find all item
    const history = await historyModel
      .find()
      .populate([
        {
          path: "item",
          model: "item",
          select: "code serialNumber name -_id",
        },
        {
          path: "room",
          model: "room",
          select: "_id -__v",
        },
        {
          path: "personnel",
          model: "personnel",
          select: "idNumber firstName lastName -_id",
        },
        {
          path: "status",
          model: "status",
          select: "name -_id",
        },
      ])
      // .select("-uniqueCode -__v")
      .limit(limit)
      .skip(startIndex)
      .sort({ createdAt: -1 });

    // const count = await historyModel.count();
    // return 200
    return res.status(200).json({
      history,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "/api/history");
  }
});

/**
 * Retrieve history base on item code or serialNumber
 *
 * Route - api/history/search/:text.
 *
 * Method - Get.
 *
 * @Param {  text } use for searching specific history
 *
 * @returns { historyModel } history
 */
const historySearch = asyncHandler(async (req, res) => {
  const { text } = req.params;

  try {
    const item = await itemModel.findOne({
      $or: [{ code: text }, { serialNumber: text }],
    });

    if (!item) {
      // return 400 //
      return res.status(400).json({
        message: "Item could not be found.",
      });
    }
    if (item) {
      const history = await historyModel
        .findOne({ item: item._id })
        .populate([
          {
            path: "item",
            model: "item",
            select: "code serialNumber name -_id",
          },
          {
            path: "room",
            model: "room",
            select: "-__v",
          },
          {
            path: "personnel",
            model: "personnel",
            select: "idNumber firstName lastName -_id",
          },
          {
            path: "status",
            model: "status",
            select: "name -_id",
          },
        ])
        .select("-__v");

      // return 200
      return res.status(200).json({
        history,
      });
    }
  } catch (error) {
    // return 500
    returnError(res, "Get", "/api/history/search");
  }
});
//
/**
 * Retrieve history base on item code or serialNumber
 *
 * Route - api/history/search/:text.
 *
 * Method - Get..
 *
 * @Param {  text } use for searching specific history
 *
 * @returns { historyModel } history
 */

const historySearchRecords = asyncHandler(async (req, res) => {
  const { text } = req.params;

  try {
    const item = await itemModel.findOne({
      $or: [{ code: text }, { serialNumber: text }],
    });

    if (!item) {
      // return 400 //
      return res.status(400).json({
        message: "Item could not be found.",
      });
    }
    if (item) {
      const history = await historyModel
        .find({ item: item._id })
        .populate([
          {
            path: "item",
            model: "item",
            select: "code serialNumber name _id",
          },
          {
            path: "room",
            model: "room",
            // select: "-__v _id",
          },
          {
            path: "personnel",
            model: "personnel",
            select: "idNumber firstName lastName _id",
          },
          {
            path: "status",
            model: "status",
            select: "name -_id",
          },
        ])
        .select("-__v");

      // return 200
      return res.status(200).json({
        history,
      });
    }
  } catch (error) {
    // return 500
    returnError(res, "Get", "/api/history/search");
  }
});

module.exports = {
  inventoryRegistration,
  historyView,
  historySearch,
  historySearchRecords,
};
