const asyncHandler = require("express-async-handler");
const settingsModel = require("../models/settingsModel");
const { returnError } = require("../helper/returnError");

/**
 * Retrieve Settings
 *
 * Route - api/settings.
 *
 * Method - Get.
 *
 * @returns {settingsModel} [settingss]
 *
 */
const findSettings = asyncHandler(async (req, res) => {
  try {
    // Find settings
    const settings = await settingsModel.findById({
      _id: "63278c49694d6bbdc1e3aa77",
    });
    // const settings = await settingsModel.find({});
    // return 200
    return res.status(200).json({
      data: settings,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/settings");
  }
});
/**
 * Create Settings
 *
 * Route - api/settings.
 *
 * Method - POST.
 *
 * @returns {settingsModel} [settingss]
 *
 */
const createSettings = asyncHandler(async (req, res) => {
  const { rangeYear, year } = req.body;
  try {
    // Create settings
    const settings = await settingsModel.create({
      rangeYear,
      year,
    });
    // return 200
    return res.status(200).json({
      settings,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/settings");
  }
});
/**
 * Update Settings
 *
 * Route - api/settings.
 *
 * Method - PUT.
 *
 * @returns {settingsModel} [settingss]
 *
 */
const updateSettings = asyncHandler(async (req, res) => {
  const { rangeYear, year } = req.body;
  try {
    // update settings
    const settings = await settingsModel.updateOne(
      { _id: "63278c49694d6bbdc1e3aa77" },
      {
        rangeYear,
        year,
      }
    );
    if (!settings) {
      // return 500
      returnError("Put", "/api/settings");
    }
    if (settings) {
      // return 200
      return res.status(200).json({
        success: true,
      });
    }
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/settings");
  }
});
module.exports = {
  findSettings,
  createSettings,
  updateSettings,
};
