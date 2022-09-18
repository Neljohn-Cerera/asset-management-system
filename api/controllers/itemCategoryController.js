const asyncHandler = require("express-async-handler");
const { returnError } = require("../helper/returnError");
const itemCategoryModel = require("../models/itemCategoryModel");

/**
 * Create item
 *
 * Route - api/itemcategory.
 *
 * Method - Post.
 *
 * @Body { name } item name
 *
 */
const itemCategoryRegistration = asyncHandler(async (req, res) => {
  const { name } = req.body;

  // validate input fields
  if (name === "") {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  try {
    // Create item
    const itemCategory = await itemCategoryModel.create({
      name,
    });
    // return 200
    return res.status(200).json({
      itemCategory,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "api/itemcategory");
  }
});

/**
 * Retrieves item category data
 *
 * Route - api/itemcategory.
 *
 * Method - Get.
 *
 * @returns { itemCategoryModel } [itemCategory]
 *
 */
const itemCategoryView = asyncHandler(async (req, res) => {
  try {
    // Find item categories
    const itemCategory = await itemCategoryModel.find();
    // return 200
    return res.status(200).json({
      itemCategory,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/itemcategory");
  }
});

const itemCategoryUpdate = async (req, res) => {
  const { _id, name } = req.body;
  try {
    const itemCategory = await itemCategoryModel.updateOne(
      { _id },
      {
        name,
      }
    );
    return res.status(200).json({
      itemCategory,
    });
  } catch (error) {
    // return 500
    returnError(res, "PUT", "api/itemCategory");
  }
};
const itemCategoryDelete = async (req, res) => {
  const { _id } = req.body;
  try {
    const itemCategory = await itemCategoryModel.findByIdAndDelete(_id);

    return res.status(200).json({
      itemCategory,
    });
  } catch (error) {
    // return 500
    returnError(res, "DELETE", "api/itemCategory");
  }
};
module.exports = {
  itemCategoryRegistration,
  itemCategoryUpdate,
  itemCategoryDelete,
  itemCategoryView,
};
