const asyncHandler = require("express-async-handler");
const { returnError } = require("../helper/returnError");
const supplierModel = require("../models/supplierModel");

/**
 * Create supplier
 *
 * Route - api/supplier.
 *
 * Method - Post.
 *
 * @Body { name, address } supplier name, address
 *
 */
const supplierRegistration = asyncHandler(async (req, res) => {
  const { name, address } = req.body;
  // validate input fields
  if (name === "" || address === "") {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  try {
    // Create supplier
    const supplier = await supplierModel.create({
      name,
      address,
    });
    // return 200
    return res.status(200).json({
      supplier,
    });
  } catch (error) {
    // return 500
    returnError(res, "Post", "api/supplier");
  }
});

/**
 * Route - api/supplier.
 * Method - Retrive supplier data.
 */

/**
 * Find all supplier
 *
 * Route - api/supplier.
 *
 * Method - Get.
 *
 * @returns { supplierModel } [suppliers]
 *
 */
const supplierView = asyncHandler(async (req, res) => {
  try {
    // Find suppliers
    const suppliers = await supplierModel.find();
    // return 200
    return res.status(200).json({
      suppliers,
    });
  } catch (error) {
    // return 500
    returnError(res, "Post", "api/supplier");
  }
});

const supplierUpdate = async (req, res) => {
  const { _id, name, address } = req.body;
  try {
    const supplier = await supplierModel.updateOne(
      { _id },
      {
        name,
        address,
      }
    );
    return res.status(200).json({
      supplier,
    });
  } catch (error) {
    // return 500
    returnError(res, "PUT", "api/supplier");
  }
};
const supplierDelete = async (req, res) => {
  const { _id } = req.body;
  try {
    const supplier = await supplierModel.findByIdAndDelete(_id);
    return res.status(200).json({
      supplier,
    });
  } catch (error) {
    // return 500
    returnError(res, "DELETE", "api/supplier");
  }
};
module.exports = {
  supplierRegistration,
  supplierUpdate,
  supplierDelete,
  supplierView,
};
