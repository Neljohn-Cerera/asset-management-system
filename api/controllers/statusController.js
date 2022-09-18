const asyncHandler = require("express-async-handler");
const statusModel = require("../models/statusModel");
const { returnError } = require("../helper/returnError");

/**
 * Create status
 *
 * Route - api/status.
 *
 * Method - Post.
 *
 * @Body { name } dapartment name
 *
 */
const statusRegistration = asyncHandler(async (req, res) => {
  const { name } = req.body;
  // validate input fields
  if (!name) {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  try {
    // Create status
    const status = await statusModel.create({
      name,
    });
    // return 200
    return res.status(200).json({
      status,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "api/status");
  }
});

/**
 * Find all status
 *
 * Route - api/status.
 *
 * Method - Get.
 *
 * @returns {statusModel} [status]
 *
 */
const statusView = asyncHandler(async (req, res) => {
  try {
    // Find all status
    const status = await statusModel.find();
    // return 200
    return res.status(200).json({
      status,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/status");
  }
});
const statusUpdate = async (req, res) => {
  const { _id, name } = req.body;
  try {
    const status = await statusModel.updateOne(
      { _id },
      {
        name,
      }
    );
    return res.status(200).json({
      status,
    });
  } catch (error) {
    // return 500
    returnError(res, "PUT", "api/status");
  }
};
const statusDelete = async (req, res) => {
  const { _id } = req.body;
  try {
    const status = await statusModel.findByIdAndDelete(_id);
    return res.status(200).json({
      status,
    });
  } catch (error) {
    // return 500
    returnError(res, "DELETE", "api/status");
  }
};
module.exports = {
  statusRegistration,
  statusDelete,
  statusUpdate,
  statusView,
};
