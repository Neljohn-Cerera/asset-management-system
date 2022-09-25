const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const historyModel = require("../models/historyModel");
const roomModel = require("../models/roomModel");
const statusModel = require("../models/statusModel");
const personnelModel = require("../models/personnelModel");
const { returnError } = require("../helper/returnError");

const ObjectId = mongoose.Types.ObjectId;

const settingsID = "63278c49694d6bbdc1e3aa77";

/**
 * Retrieve Five years reports
 *
 * Route - api/reports/five-years?fromYear=&toYear=.
 *
 * Method - Get.
 *
 * @returns {data} [reports data]
 *
 */

const fiveYearsReports = asyncHandler(async (req, res) => {
  const { fromYear, toYear } = req.query;

  let fiveYears = [];
  let year = fromYear;
  for (year; year <= toYear; year++) {
    fiveYears.push(parseInt(year));
  }
  let currentYear = new Date().getFullYear();
  let data = [];
  let assetsCount = [];
  // let statusCounts = [];

  try {
    // 1st - find all rooms data
    const rooms = await roomModel.find({}).select("-__v");

    if (rooms) {
      const res = rooms.map(async (room) => {
        for (let yearVal of fiveYears) {
          const statusGood = await statusModel.findOne({
            name: "good condition",
          });
          const goodConditionAssetsCounts = await historyModel.count({
            room: room?._id,
            year: yearVal,
            status: statusGood?._id,
          });
          const statusLostGood = await statusModel.findOne({ name: "lost" });
          const lostAssetsCounts = await historyModel.count({
            room: room?._id,
            year: yearVal,
            status: statusLostGood?._id,
          });
          const statusForRepairGood = await statusModel.findOne({
            name: "for repair",
          });
          const forRepairAssetsCounts = await historyModel.count({
            room: room?._id,
            year: yearVal,
            status: statusForRepairGood?._id,
          });
          const statusFoReplacementGood = await statusModel.findOne({
            name: "for replacement",
          });
          const forReplacementAssetsCounts = await historyModel.count({
            room: room?._id,
            year: yearVal,
            status: statusFoReplacementGood?._id,
          });
          const statusNewGood = await statusModel.findOne({
            name: "new",
          });
          const newAssetsCounts = await historyModel.count({
            room: room?._id,
            year: yearVal,
            status: statusNewGood?._id,
          });
          assetsCount.push({
            roomid: room?._id,
            year: yearVal,
            goodCondition: goodConditionAssetsCounts,
            new: newAssetsCounts,
            lost: lostAssetsCounts,
            forRepair: forRepairAssetsCounts,
            forReplacement: forReplacementAssetsCounts,
          });
        }
        let roomAssets = await historyModel.aggregate([
          {
            $match: { room: ObjectId(`${room?._id}`) },
          },
          {
            $lookup: {
              from: "status",
              localField: "status",
              foreignField: "_id",
              as: "status",
            },
          },
          { $unwind: "$status" },
          {
            $lookup: {
              from: "items",
              localField: "item",
              foreignField: "_id",
              as: "items",
            },
          },
          { $unwind: "$items" },
          {
            $project: {
              _id: 0,
              item: {
                name: "$items.name",
                code: "$items.code",
              },
              year: "$year",
              status: "$status.name",
            },
          },
          { $unwind: "$item" },
          {
            $group: {
              _id: { name: "$item.name", code: "$item.code" },
              status: { $push: { year: "$year", status: "$status" } },
            },
          },
        ]);

        if (roomAssets.length !== 0) {
          const roomAssetsCounts = await historyModel.count({
            room: room._id,
            year: { $gt: parseInt(fromYear) - 1, $lt: parseInt(toYear) },
          });

          const personnelInRoom = await historyModel
            .findOne({ room: room._id })
            .select("personnel");

          // 6th - retrieving personnel data base on personnelRoom.personnel
          const personnel = await personnelModel
            .findById({
              _id: personnelInRoom.personnel,
            })
            .select("firstName lastName idNumber");
          // 7th - pushing retrieves data to data array
          data.push({
            room: {
              name: `${room.name} ${room.no}`, // room name and room no from rooms.map
              personnel: `${personnel.idNumber}-${personnel.firstName} ${personnel.lastName}`,
              schoolYear: `${currentYear}-${currentYear + 1}`, // setting school year for the current year
              totalAssets: roomAssetsCounts, // assets count per room
              counts: assetsCount.filter((dt) => dt.roomid === room._id),
              assets: roomAssets, // all assets per room ,{assets[]}
            },
          });
        }
      });
      await Promise.all(res);
    }

    // return 200
    return res.status(200).json({
      // counts: assetsCount,
      data: data.sort((a, b) => {
        let fa = a.room.name.toLowerCase(),
          fb = b.room.name.toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      }),
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/reports/five-years?fromYear=&toYear=");
  }
});

/**
 * Retrieve Yearly reports
 *
 * Route - api/reports/yearly?year=.
 *
 * Method - Get.
 *
 * @returns {data} [reports data]
 *
 */

const yearlyReports = asyncHandler(async (req, res) => {
  const { year } = req.query;
  let data = [];
  try {
    // 1st - find all rooms data
    const rooms = await roomModel.find({}).select("-__v");
    if (rooms) {
      // 2nd - map rooms data
      const res = rooms.map(async (room) => {
        // 3rd - retrieving history base on every map room & fromYear, toYear
        const roomAssets = await historyModel
          .find({
            room: room._id,
            year,
          })
          .populate([
            {
              path: "item",
              model: "item",
              select: "code remarks name  -_id",
            },
            {
              path: "status",
              model: "status",
              select: "name -_id",
            },
          ])
          .select("_id item status year");

        const assetsCount = await historyModel.aggregate([
          {
            $match: {
              $and: [{ room: ObjectId(`${room._id}`), year: parseInt(year) }],
            },
          },
          {
            $lookup: {
              from: "status",
              localField: "status",
              foreignField: "_id",
              as: "status",
            },
          },
          { $unwind: "$status" },

          {
            $group: {
              _id: "$status.name",
              count: { $sum: 1 },
            },
          },
          {
            $project: {
              _id: 0,
              status: "$_id",
              count: "$count",
            },
          },
        ]);

        // if room does have assets
        if (roomAssets.length !== 0) {
          // 5th - retrieving personnel from history base on every map room and the current year
          const personnelInRoom = await historyModel
            .findOne({ room: room._id, year })
            .select("personnel");
          // 6th - retrieving personnel data base on personnelRoom.personnel
          const personnel = await personnelModel
            .findById({
              _id: personnelInRoom.personnel,
            })
            .select("firstName lastName idNumber");
          // 7th - pushing retrieves data to data array
          data.push({
            room: {
              name: `${room.name} ${room.no}`,
              personnel: `${personnel.firstName} ${personnel.lastName}-${personnel.idNumber}`,
              assetsCount,
              assets: roomAssets,
            },
          });
        }
      });
      await Promise.all(res);
    }

    // return 200
    return res.status(200).json({
      data: {
        year,
        data: data.sort((a, b) => {
          let fa = a.room.name.toLowerCase(),
            fb = b.room.name.toLowerCase();
          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        }),
      },
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/reports/yearly?year=");
  }
});
/**
 * Retrieve Yearly Room reports
 *
 * Route - api/reports//room?roomid=&year=
 *
 * Method - Get.
 *
 * @returns {data} [reports data]
 *
 */
const roomReports = asyncHandler(async (req, res) => {
  const { roomid, year } = req.query;
  let data = {};
  try {
    const room = await roomModel.findById({ _id: roomid });
    if (!room) {
      // return 400
      return res.status(400).json({
        message: "Room not found",
      });
    }
    const roomAssets = await historyModel
      .find({
        room: room._id,
        year,
      })
      .populate([
        {
          path: "item",
          model: "item",
          select: "code serialNumber name -_id",
        },
        {
          path: "status",
          model: "status",
          select: "name -_id",
        },
      ])
      .select("_id item");
    const assetsCount = await historyModel.aggregate([
      {
        $match: {
          $and: [{ room: ObjectId(`${room._id}`), year: parseInt(year) }],
        },
      },
      {
        $lookup: {
          from: "status",
          localField: "status",
          foreignField: "_id",
          as: "status",
        },
      },
      { $unwind: "$status" },
      {
        $group: {
          _id: "$status.name",
          count: { $count: {} },
        },
      },
      {
        $project: {
          _id: 0,
          status: "$_id",
          count: "$count",
        },
      },
    ]);

    if (roomAssets.length !== 0) {
      const personnelInRoom = await historyModel
        .findOne({ room: room._id, year })
        .select("personnel");

      const personnel = await personnelModel
        .findById({
          _id: personnelInRoom.personnel,
        })
        .select("firstName lastName idNumber");
      data = {
        room: `${room.name}-${room.no}`,
        personnel: `${personnel.idNumber}-${personnel.firstName} ${personnel.lastName}`,
        year,
        assetsCount,
        assets: roomAssets,
      };
    }

    // return 200
    return res.status(200).json({
      data,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/reports/room?roomid=&year=");
  }
});

module.exports = {
  fiveYearsReports,
  yearlyReports,
  roomReports,
};
