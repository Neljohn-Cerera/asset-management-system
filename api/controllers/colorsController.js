const asyncHandler = require("express-async-handler");
const colorsModel = require("../models/colorsModel");
const { returnError } = require("../helper/returnError");

/**
 * Create colors
 *
 * Route - api/colors.
 *
 * Method - Post.
 *
 * @Body { name } dapartment name
 *
 */
const colorsRegistration = asyncHandler(async (req, res) => {
  // const { name } = req.body;

  // // validate input fieldss
  // if (name === "") {
  //   // return 400
  //   return res.status(400).json({
  //     message: "Please fill all fields",
  //   });
  // }
  try {
    let colors = [];
    for (let index = 0; index < 200; index++) {
      const randomColor =
        "#" +
        Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, "0");
      const color = await colorsModel.create({
        name: randomColor,
      });
      colors.push(color);
    }

    // return 200
    return res.status(200).json({
      colors,
    });
  } catch (err) {
    // return 500
    returnError(res, "Post", "api/colors");
  }
});

/**
 * Find all colors
 *
 * Route - api/colors.
 *
 * Method - Get.
 *
 * @returns {colorsModel} [colorss]
 *
 */
const colorsView = asyncHandler(async (req, res) => {
  try {
    // Find all colors
    const colors = await colorsModel.find();
    // return 200
    return res.status(200).json({
      colors,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/colors");
  }
});

const colorsUpdate = async (req, res) => {
  const { _id, name } = req.body;
  try {
    const colors = await colorsModel.updateOne(
      { _id },
      {
        name,
      }
    );
    return res.status(200).json({
      colors,
    });
  } catch (error) {
    // return 500
    returnError(res, "PUT", "api/colors");
  }
};
const colorsDelete = async (req, res) => {
  const { _id } = req.body;
  try {
    const colors = await colorsModel.findByIdAndDelete(_id);
    return res.status(200).json({
      colors,
    });
  } catch (error) {
    // return 500
    returnError(res, "DELETE", "api/colors");
  }
};
module.exports = {
  colorsRegistration,
  colorsUpdate,
  colorsDelete,
  colorsView,
};
