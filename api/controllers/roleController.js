const asyncHandler = require("express-async-handler");
const roleModel = require("../models/roleModel");
const { returnError } = require("../helper/returnError");

/**
 * Create role
 *
 * Route - api/role.
 *
 * Method - Post.
 *
 * @Body { name } role name
 *
 */
const roleRegistration = asyncHandler(async (req, res) => {
  const { name } = req.body;
  // validate input fields
  if (name === "") {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  try {
    // Create item
    const role = await roleModel.create({
      name,
    });
    // return 200
    return res.status(200).json({
      role,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "api/role");
  }
});

/**
 * Retrieves all roles
 *
 * Route - api/role.
 *
 * Method - Get.
 *
 * @returns { roleModel } [role]
 *
 */
const roleView = asyncHandler(async (req, res) => {
  try {
    // Find all roles
    const role = await roleModel.find();
    // return 200
    return res.status(200).json({
      role,
    });
  } catch (error) {
    // return 500
    returnError(res, "Post", "api/role");
  }
});

const roleUpdate = async (req, res) => {
  const { _id, name } = req.body;
  try {
    const role = await roleModel.updateOne(
      { _id },
      {
        name,
      }
    );
    return res.status(200).json({
      role,
    });
  } catch (error) {
    // return 500
    returnError(res, "PUT", "api/role");
  }
};
const roleDelete = async (req, res) => {
  const { _id } = req.body;
  try {
    const role = await roleModel.findByIdAndDelete(_id);
    return res.status(200).json({
      role,
    });
  } catch (error) {
    // return 500
    returnError(res, "DELETE", "api/role");
  }
};
module.exports = {
  roleRegistration,
  roleUpdate,
  roleDelete,
  roleView,
};
