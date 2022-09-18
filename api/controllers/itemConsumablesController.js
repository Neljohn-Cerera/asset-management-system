const asyncHandler = require("express-async-handler");
const itemConsumablesModel = require("../models/itemConsumablesModel");
const stockUnitModel = require("../models/stockUnit");
const colorsModel = require("../models/colorsModel");
const { returnError } = require("../helper/returnError");

/**
 * Create itemConsumables
 *
 * Route - api/itemconsumables.
 *
 * Method - Post.
 *
 * @Body { name } itemConsumables name
 *
 */
const itemConsumablesRegistration = asyncHandler(async (req, res) => {
  const { name, description, restock, unitid } = req.body;
  // validate input fields
  if (name === "" || description === "" || unitid === "") {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  const color = await colorsModel.find({ inUse: false }).limit(1);
  const unit = await stockUnitModel.findById(unitid);
  if (!unit) {
    return res.status(400).json({
      message: "Unit not found",
    });
  }

  try {
    // Create item consumables
    const itemConsumables = await itemConsumablesModel.create({
      name,
      description,
      unit: unit._id,
      restock,
      color: color[0].name,
    });
    if (itemConsumables) {
      await colorsModel.updateOne(
        { _id: color[0]._id },
        {
          inUse: true,
        }
      );
    }
    // return 200
    return res.status(200).json({
      itemConsumables,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "api/itemconsumables");
  }
});

/**
 * Retrieves all itemconsumables
 *
 * Route - api/itemconsumables.
 *
 * Method - Get.
 *
 * @returns { itemConsumablesModel } [itemConsumables]
 *
 */
const itemConsumablesView = async (req, res) => {
  const { text } = req.query;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  try {
    // Find all itemConsumabless
    const itemConsumables = await itemConsumablesModel
      .find({
        $or: [
          { name: { $regex: text, $options: "i" } },
          { description: { $regex: text, $options: "i" } },
        ],
        $and: [{ isActive: true }],
      })
      .populate([
        {
          path: "unit",
          model: "stockUnit",
          select: "name",
        },
      ])
      .select("name description restock")
      .limit(limit)
      .skip(startIndex)
      .sort({ name: 1 });
    // return 200
    return res.status(200).json({
      itemConsumables,
    });
  } catch (error) {
    // return 500
    returnError(res, "Post", "api/itemconsumables");
  }
};
/**
 * Update itemconsumables
 *
 * Route - api/itemconsumables.
 *
 * Method - PUT.
 *
 * @returns
 *
 */
const itemConsumablesUpdate = async (req, res) => {
  const { _id, name, description, restock, unitid } = req.body;
  // validate input fields
  if (name === "" || description === "" || unitid === "") {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  const unit = await stockUnitModel.findById(unitid);
  if (!unit) {
    return res.status(400).json({
      message: "Unit not found",
    });
  }
  try {
    const itemConsumables = await itemConsumablesModel.updateOne(
      { _id },
      {
        name,
        description,
        unit: unit._id,
        restock,
      }
    );
    return res.status(200).json({
      itemConsumables,
    });
  } catch (error) {
    // return 500
    returnError(res, "PUT", "api/itemConsumables");
  }
};

const itemConsumablesDelete = async (req, res) => {
  const { _id } = req.body;

  try {
    // Update speciic item consumables isActive field
    const itemconsumables = await itemConsumablesModel.updateOne(
      { _id: _id },
      {
        isActive: false,
      }
    );
    if (!itemconsumables) {
      // return 500
      returnError(res, "Delete", "/api/itemconsumables");
    }
    // return 200
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    // return 500
    returnError(res, "Delete", "/api/itemconsumables");
  }
};

module.exports = {
  itemConsumablesView,
  itemConsumablesRegistration,
  itemConsumablesUpdate,
  itemConsumablesDelete,
};
