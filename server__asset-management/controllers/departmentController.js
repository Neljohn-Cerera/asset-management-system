const asyncHandler = require("express-async-handler");
const departmentModel = require("../models/departmentModel");
const { returnError } = require("../helper/returnError");

/**
 * Create department
 *
 * Route - api/department.
 *
 * Method - Post.
 *
 * @Body { name } dapartment name
 *
 */
const departmentRegistration = asyncHandler(async (req, res) => {
  const { name } = req.body;
  // validate input fields
  if (name === "") {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  try {
    // Create department
    const department = await departmentModel.create({
      name,
    });
    // return 200
    return res.status(200).json({
      department,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "api/department");
  }
});

/**
 * Find all department
 *
 * Route - api/department.
 *
 * Method - Get.
 *
 * @returns {departmentModel} [departments]
 *
 */
const departmentView = asyncHandler(async (req, res) => {
  try {
    // Find all department
    const department = await departmentModel.find();
    // return 200
    return res.status(200).json({
      department,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/department");
  }
});

const departmentUpdate = async (req, res) => {
  const { _id, name } = req.body;
  try {
    const department = await departmentModel.updateOne(
      { _id },
      {
        name,
      }
    );
    return res.status(200).json({
      department,
    });
  } catch (error) {
    // return 500
    returnError(res, "PUT", "api/department");
  }
};
const departmentDelete = async (req, res) => {
  const { _id } = req.body;
  try {
    const department = await departmentModel.findByIdAndDelete(_id);
    return res.status(200).json({
      department,
    });
  } catch (error) {
    // return 500
    returnError(res, "DELETE", "api/department");
  }
};
module.exports = {
  departmentRegistration,
  departmentUpdate,
  departmentDelete,
  departmentView,
};
