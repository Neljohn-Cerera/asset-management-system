const asyncHandler = require("express-async-handler");
const itemModel = require("../models/itemModel");
const itemCategoryModel = require("../models/itemCategoryModel");
const supplierModel = require("../models/supplierModel");
const { returnError } = require("../helper/returnError");

/**
 * Create item
 *
 * Route - api/item.
 *
 * Method - Post.
 *
 * @Body { code, serialNumber, name, category, price, supplier } item data
 *
 */
const itemRegistration = asyncHandler(async (req, res) => {
  const {
    code,
    serialNumber,
    name,
    category,
    price,
    purchaseDate,
    useFullLife,
    supplier,
  } = req.body;

  // sometimes buggy using !
  // validate input fields
  if (code === "" || name === "" || category === "" || purchaseDate === "") {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  const itemCodeExist = await itemModel.findOne({ code: code });

  if (itemCodeExist) {
    // return 400
    return res.status(400).json({
      message: "Duplicate Item code.",
    });
  }
  // Check if category exists
  const _category = await itemCategoryModel.findOne({ name: category });
  if (!_category) {
    // return 400
    return res.status(400).json({
      message: "Category could not be found.",
    });
  }
  try {
    // Find supplier
    const _supplier = await supplierModel.findOne({ name: supplier });

    // Create item
    const item = await itemModel.create({
      code,
      serialNumber: serialNumber ? serialNumber : "",
      name,
      category: _category._id,
      supplier: supplier ? _supplier._id : null,
      purchaseDate,
      useFullLife,
      price,
    });

    // return 200
    return res.status(200).json({
      item,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "/api/item");
  }
});

/**
 * Retrieve all active items
 *
 * Route - api/item.
 *
 * Method - Get.
 *
 * @returns { itemModel } [item]
 */
const itemView = asyncHandler(async (req, res) => {
  try {
    // Find all item
    const item = await itemModel
      .find()
      .populate(["supplier", "category", "status"])
      .sort({ createdAt: -1 });
    // return 200
    return res.status(200).json({
      item,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "/api/item");
  }
});
/**
 * Retrieve item by code
 *
 * Route - api/item/:code.
 *
 * Method - Get.
 *
 * @returns { itemModel } [item]
 */
const itemFindOneByCode = asyncHandler(async (req, res) => {
  const { code } = req.params;
  try {
    // Find all item
    const item = await itemModel
      .findOne({ code })
      .select("_id code name serialNumber");
    // return 200
    return res.status(200).json({
      item,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "/api/item/:code");
  }
});

/**
 * Retrieve all active items base on text/search query
 *
 * Route - api/item/search?text=text.
 *
 * Method - Get.
 *
 * @Query {  text } use for searching specific item
 *
 * @returns { itemModel } [item]
 */
const itemSearch = asyncHandler(async (req, res) => {
  const { text } = req.query;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;

  try {
    // Find item & filter by code | name | serialNumber base on text query
    const item = await itemModel
      .find({
        $or: [
          { code: { $regex: text, $options: "i" } },
          { name: { $regex: text, $options: "i" } },
          { serialNumber: { $regex: text, $options: "i" } },
        ],
        $and: [
          {
            isActive: true,
            // status: { $ne: "lost" },
          },
        ],
      })
      .populate([
        {
          path: "category",
          model: "itemCategory",
          select: "-_id -__v",
        },
        {
          path: "supplier",
          model: "supplier",
          select: "-_id -__v",
        },
        {
          path: "status",
          model: "status",
          select: "-_id -__v",
        },
      ])
      .select("-__v")
      .limit(limit)
      .skip(startIndex)
      .sort({ createdAt: -1 });

    // return 200
    return res.status(200).json({
      item,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "/api/item/search");
  }
});

/**
 * Update item isActive data
 *
 * Route - api/item
 *
 * Method - Delete
 *
 * @Body { id } item id
 *
 */
const itemDeleteOne = asyncHandler(async (req, res) => {
  const { id } = req.body;

  try {
    // Update speciic item isActive field
    const item = await itemModel.updateOne(
      { _id: id },
      {
        isActive: false,
      }
    );
    if (!item) {
      // return 500
      returnError(res, "Delete", "/api/item");
    }
    // return 200
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    // return 500
    returnError(res, "Delete", "/api/item");
  }
});

/**
 * Update item data
 *
 * Route - api/item
 *
 * Method - Put
 *
 * @Body { id, code, serialNumber, name, category, price, supplier } item data
 *
 */
const itemUpdateOne = asyncHandler(async (req, res) => {
  const {
    id,
    code,
    serialNumber,
    name,
    category,
    price,
    purchaseDate,
    useFullLife,
    supplier,
  } = req.body;
  // validate input fields
  if (
    id === "" ||
    code === "" ||
    name === "" ||
    category === "" ||
    purchaseDate === "" ||
    useFullLife === ""
  ) {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  try {
    // Check if category exists
    const _category = await itemCategoryModel.findOne({ name: category });
    if (!_category) {
      // return 400
      return res.status(400).json({
        message: "Category could not be found.",
      });
    }
    // Check if supplier exists
    let _supplier;
    if (supplier) {
      _supplier = await supplierModel.findOne({ name: supplier });
      if (!_supplier) {
        // return 400
        return res.status(400).json({
          message: "Supplier could not be found.",
        });
      }
    }
    // Updating item
    const item = await itemModel.updateOne(
      { _id: id },
      {
        name,
        code,
        serialNumber: serialNumber ? serialNumber : null,
        category: _category._id,
        supplier: supplier ? _supplier._id : null,
        price: price,
        purchaseDate,
        useFullLife: parseInt(useFullLife),
      }
    );
    // If returns null item serr
    if (!item) {
      // return 500
      returnError("Put", "/api/item");
    }
    // return 200
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    // return 500
    returnError("Put", "/api/item");
  }
});

module.exports = {
  itemRegistration,
  itemFindOneByCode,
  itemView,
  itemSearch,
  itemDeleteOne,
  itemUpdateOne,
};
