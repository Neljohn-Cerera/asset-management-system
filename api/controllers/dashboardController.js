const asyncHandler = require("express-async-handler");
const historyModel = require("../models/historyModel");
const settingsModel = require("../models/settingsModel");
const statusModel = require("../models/statusModel");
const { returnError } = require("../helper/returnError");

const settingsID = "63278c49694d6bbdc1e3aa77";

//  {
//     lost: 20,
//     new: 88,
//     goodCondition: 255,
//     forRepairs: 10,
//     forReplacements: 30,
//     year: 2022,
//   },
// 2022-2026

const dashboardStatistics = asyncHandler(async (req, res) => {
  try {
    const settings = await settingsModel.findById({
      _id: settingsID,
    });

    const yearSplit = settings?.rangeYear?.split("-");
    let from = parseInt(yearSplit[0]);
    let to = parseInt(yearSplit[1]);
    let data = [];
    let lostItems;
    let newItems;
    let goodCondition;
    let forRepair;
    let forReplacement;
    let discarded;
    for (from; from <= to; from++) {
      const assets = await historyModel.count({
        year: from,
      });

      const statusLost = await statusModel.findOne({ name: "lost" });
      if (statusLost) {
        lostItems = await historyModel.count({
          year: from,
          status: statusLost?._id,
        });
      }

      const statusNew = await statusModel.findOne({ name: "new" });
      if (statusLost) {
        newItems = await historyModel.count({
          year: from,
          status: statusNew?._id,
        });
      }
      const statusGood = await statusModel.findOne({ name: "good condition" });

      if (statusLost) {
        goodCondition = await historyModel.count({
          year: from,
          status: statusGood?._id,
        });
      }
      const statusForRepair = await statusModel.findOne({ name: "for repair" });
      if (statusLost) {
        forRepair = await historyModel.count({
          year: from,
          status: statusForRepair?._id,
        });
      }
      const statusForReplacement = await statusModel.findOne({
        name: "for replacement",
      });
      if (statusLost) {
        forReplacement = await historyModel.count({
          year: from,
          status: statusForReplacement?._id,
        });
      }
      const statusDiscarded = await statusModel.findOne({ name: "discarded" });
      if (statusLost) {
        discarded = await historyModel.count({
          year: from,
          status: statusDiscarded?._id,
        });
      }

      data.push({
        assets,
        lost: lostItems,
        new: newItems,
        goodCondition: goodCondition,
        forRepairs: forRepair,
        forReplacements: forReplacement,
        discarded,
        year: from,
      });
    }
    // return 200
    return res.status(200).json({
      data,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/dashboard");
  }
});

const dashboardAssetsCount = asyncHandler(async (req, res) => {
  const { status } = req.query;
  try {
    const settings = await settingsModel.findById({
      _id: settingsID,
    });

    if (!settings) {
      // return 500
      returnError(res, "Get", "api/dashboard/assets-count");
    }
    if (settings) {
      const assetsStatus = await statusModel.findOne({ name: status });
      const assets = await historyModel
        .find({ status: assetsStatus?._id, year: settings?.year })
        .populate([
          {
            path: "item",
            model: "item",
            select: "code serialNumber name -_id",
          },
          {
            path: "room",
            model: "room",
            select: "-_id -__v",
          },
          {
            path: "personnel",
            model: "personnel",
            select: "idNumber firstName lastName -_id",
          },
        ])
        .select("-uniqueCode -__v")
        .sort({ createdAt: -1 });
      // return 200
      return res.status(200).json({
        data: assets,
      });
    }
  } catch (error) {
    console.log(error);
    // return 500
    returnError(res, "Get", "api/dashboard/assets-count");
  }
});
module.exports = {
  dashboardStatistics,
  dashboardAssetsCount,
};
