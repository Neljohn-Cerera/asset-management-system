const asyncHandler = require("express-async-handler");
const stockUnitModel = require("../models/stockUnit");
const { returnError } = require("../helper/returnError");

/**
 * Find all stock units
 *
 * Route - api/stockunit.
 *
 * Method - Get.
 *
 * @returns {stockUnitModel} [stock units]
 *
 */
const stockUnitView = asyncHandler(async (req, res) => {
  try {
    // Find all stock units
    const stockunits = await stockUnitModel.find();
    // return 200
    return res.status(200).json({
      stockunits,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/stockunit");
  }
});

/**
 * Create stock unit
 *
 * Route - api/stockunit.
 *
 * Method - Post.
 *
 * @Body { name } unit name
 *
 */
const stockUnitRegistration = asyncHandler(async (req, res) => {
  const { name } = req.body;
  // validate input fields
  if (!name) {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  try {
    // Create unit
    const stockunit = await stockUnitModel.create({
      name,
    });
    // return 200
    return res.status(200).json({
      stockunit,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "api/stockunit");
  }
});

module.exports = {
  stockUnitView,
  stockUnitRegistration,
};
