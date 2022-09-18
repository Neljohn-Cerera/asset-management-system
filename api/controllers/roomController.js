const asyncHandler = require("express-async-handler");
const roomModel = require("../models/roomModel");
const { returnError } = require("../helper/returnError");

/**
 * Create room
 *
 * Route - api/room.
 *
 * Method - Post.
 *
 * @Body { name } dapartment name
 *
 */
const roomRegistration = asyncHandler(async (req, res) => {
  const { name, no } = req.body;
  // validate input fields
  if (name === "" || no === "") {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  try {
    // Create room
    const room = await roomModel.create({
      name,
      no,
    });
    // return 200
    return res.status(200).json({
      room,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "api/room");
  }
});

/**
 * Find all room
 *
 * Route - api/room.
 *
 * Method - Get.
 *
 * @returns {roomModel} [rooms]
 *
 */
const roomView = asyncHandler(async (req, res) => {
  try {
    // Find all room
    const room = await roomModel.find();
    // return 200
    return res.status(200).json({
      room,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/room");
  }
});

const roomUpdate = async (req, res) => {
  const { _id, name } = req.body;
  try {
    const room = await roomModel.updateOne(
      { _id },
      {
        name,
      }
    );
    return res.status(200).json({
      room,
    });
  } catch (error) {
    // return 500
    returnError(res, "PUT", "api/room");
  }
};
const roomDelete = async (req, res) => {
  const { _id } = req.body;
  try {
    const room = await roomModel.findByIdAndDelete(_id);
    return res.status(200).json({
      room,
    });
  } catch (error) {
    // return 500
    returnError(res, "DELETE", "api/room");
  }
};
module.exports = {
  roomRegistration,
  roomUpdate,
  roomDelete,
  roomView,
};
