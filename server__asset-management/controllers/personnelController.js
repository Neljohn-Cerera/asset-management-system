const asyncHandler = require("express-async-handler");
const personnelModel = require("../models/personnelModel");
const departmentModel = require("../models/departmentModel");
const roleModel = require("../models/roleModel");
const bcrypt = require("bcryptjs");
const { returnError } = require("../helper/returnError");

/**
 * Personnel login
 *
 * Route - api/personnel/login.
 *
 * Method - Post.
 *
 * @Body { email, passWord } personnel account
 *
 */
const personnelLogin = asyncHandler(async (req, res) => {
  const { email, passWord } = req.body;
  // validate input fields
  if (email === "" || passWord === "") {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }

  try {
    // Find by email
    const personnel = await personnelModel
      .findOne({ "account.email": email })
      .populate([
        {
          path: "account.role",
          model: "role",
        },
        {
          path: "department",
          model: "department",
        },
      ]);

    if (!personnel) {
      // return 400
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    // compare password
    const isMatch = await bcrypt.compare(passWord, personnel.account.passWord);

    if (isMatch) {
      const user = {
        department: personnel.department?.name,
        idNumber: personnel.idNumber,
        firstName: personnel.firstName,
        lastName: personnel.lastName,
        role: personnel.account.role?.name,
        email: personnel.account?.email,
      };
      // setting session data
      req.session.isAuth = true;
      req.session.role = personnel.account.role?.name;
      // return 200
      return res.status(200).json({
        user,
      });
    } else {
      // return 400
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    // return 500
    returnError(res, "Post", "api/personnel");
  }
});
/**
 * Personnel logout
 *
 * Route - api/personnel/logout.
 *
 * Method - Post.
 *
 * @Body { email, passWord } personnel account
 *
 */
const personnelLogout = asyncHandler(async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      returnError(res, "Post", "api/personnel/logout");
    } else {
      return res.status(200).json({
        success: true,
      });
    }
  });
});
/**
 * Create personnel informations
 *
 * Route - api/personnel.
 *
 * Method - Post.
 *
 * @Body { department, idNumber, firstName, lastName } personnel informations
 *
 */
const personnelCreate = asyncHandler(async (req, res) => {
  const { department, idNumber, firstName, lastName } = req.body;
  // validate input fields
  if (
    department === "" ||
    idNumber === "" ||
    firstName === "" ||
    lastName === ""
  ) {
    // return 400
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  try {
    // Check if idnumber exists
    const idNumberExist = await personnelModel.findOne({ idNumber });
    if (idNumberExist) {
      // return 400
      return res.status(400).json({
        message: "Idnumber already in used",
      });
    }
    // Check if department exists
    const _department = await departmentModel.findOne({ name: department });
    if (!_department) {
      // return 400
      return res.status(400).json({
        message: "Department not found",
      });
    }
    // Create personnel informations
    const personnel = await personnelModel.create({
      idNumber,
      firstName,
      lastName,
      department: _department._id,
      account: {},
    });
    // return 400
    if (!personnel) {
      return res.status(400).json({
        message: "Invalid personnel data",
      });
    }
    // return 200
    return res.status(200).json({
      personnel,
    });
  } catch (error) {
    // return 500
    returnError(res, "Post", "api/personnel");
  }
});
/**
 * Create personnel account
 *
 * Route - api/personnel/account.
 *
 * Method - Post.
 *
 * @Body { id, email, role, passWord } personnel account data
 *
 */
const personnelCreateAccount = asyncHandler(async (req, res) => {
  const { id, email, role, passWord } = req.body;
  // validate input fields
  if (email === "" || passWord === "" || role === "") {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  // Check if role exists
  const _role = await roleModel.findOne({ name: role.toLowerCase() });
  if (!_role) {
    // return 400
    return res.status(400).json({
      message: "Role not found",
    });
  }
  try {
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(passWord, salt);
    // Create personnel account
    const personnel = await personnelModel.updateOne(
      { _id: id },
      {
        account: {
          role: _role._id,
          email,
          passWord: hashedPassword,
        },
      }
    );
    if (!personnel) {
      // return 500
      returnError(res, "Put", "api/personnel");
    }
    // return 200
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    // return 500
    returnError(res, "Put", "api/personnel");
  }
});

/**
 * Find all personnel
 *
 * Route - api/personnel.
 *
 * Method - Get.
 *
 * @returns {personnelModel} [personnel]
 *
 */
const personnelView = asyncHandler(async (req, res) => {
  try {
    // Find all personnel
    const personnel = await personnelModel.find().populate({
      path: "account.role",
      model: "role",
    });
    // return 200
    return res.status(200).json({
      personnel,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/personnel");
  }
});
/**
 * Find personnel by idnumber
 *
 * Route - api/personnel/:idNumber.
 *
 * Method - Get.
 *
 * @returns {personnelModel} personnel
 *
 */
const personnelFindOneByIdNumber = asyncHandler(async (req, res) => {
  const { idNumber } = req.params;
  try {
    const personnel = await personnelModel
      .findOne({ idNumber })
      .select("_id firstName lastName idNumber");
    if (!personnel) {
      // return 400
      return res.status(400).json({
        message: "Personnel not found",
      });
    }
    // return 200
    return res.status(200).json({
      personnel,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/personnel/:idNumber");
  }
});

/**
 * Retrieve all active personnel base on text/search query
 *
 * Route - api/personnel/search?text=text
 *
 * Method - Get.
 *
 * @Query {  text } use for searching specific personnel
 *
 * @returns { personnelModel } [personnel]
 */
const personnelSearch = asyncHandler(async (req, res) => {
  const { text } = req.query;
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  try {
    // Find all personnell
    const personnel = await personnelModel
      .find({
        $or: [
          { idNumber: { $regex: text, $options: "i" } },
          { firstName: { $regex: text, $options: "i" } },
          { lastName: { $regex: text, $options: "i" } },
        ],
        $and: [
          {
            isActive: true,
          },
        ],
      })
      .populate([
        {
          path: "account.role",
          model: "role",
          select: "-_id -__v",
        },
        {
          path: "department",
          model: "department",
          select: "-_id -__v",
        },
      ])
      .select("-account.passWord -__v")
      .limit(limit)
      .skip(startIndex)
      .sort({ firstName: 1 });
    // return 200
    return res.status(200).json({
      personnel,
    });
  } catch (error) {
    // return 500
    returnError(res, "Get", "api/personnel/search");
  }
});

/**
 * Update personnel isActive data
 *
 * Route - api/personnel
 *
 * Method - Delete
 *
 * @Body { id } personnel id
 *
 */
const personnelDeleteOne = asyncHandler(async (req, res) => {
  const { id } = req.body;
  try {
    // Update personnel
    const item = await personnelModel.updateOne(
      { _id: id },
      {
        isActive: false,
      }
    );
    if (!item) {
      // return 500
      returnError(res, "Delete", "api/personnel");
    }
    // return 200
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    // return 500
    returnError(res, "Delete", "api/personnel");
  }
});

/**
 * Update personnel data
 *
 * Route - api/personnel
 *
 * Method - Put
 *
 * @Body { id, department, idNumber, firstName, lastName } personnel data
 *
 */
const personnelUpdateInformation = asyncHandler(async (req, res) => {
  const { id, department, idNumber, firstName, lastName } = req.body;
  // validate input fields
  if (idNumber === "" || firstName === "" || lastName === "") {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  try {
    // Check if department exists
    const _department = await departmentModel.findOne({ name: department });
    if (!_department) {
      // return 400
      return res.status(400).json({
        message: "Department not found",
      });
    }
    // Update personnel information
    const personnel = await personnelModel.updateOne(
      { _id: id },
      {
        idNumber,
        firstName,
        lastName,
        department: _department._id,
      }
    );
    if (!personnel) {
      // return 500
      returnError(res, "Put", "api/personnel");
    }
    // return 200
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    // return 500
    returnError(res, "Put", "api/personnel");
  }
});

/**
 * Update personnel account
 *
 * Route - api/personnel/account
 *
 * Method - Put
 *
 * @Body { id, email, role, passWord } account data
 *
 */
const personnelUpdateAccount = asyncHandler(async (req, res) => {
  const { id, email, role, passWord } = req.body;
  // validate input fields
  if (email === "" || role === "" || passWord === "") {
    return res.status(400).json({
      message: "Please fill all fields",
    });
  }
  // Check if role exists
  const _role = await roleModel.findOne({ name: role });
  if (!_role) {
    // return 400
    return res.status(400).json({
      message: "Role not found",
    });
  }
  try {
    // hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(passWord, salt);
    // Update personnel information
    const personnel = await personnelModel.updateOne(
      { _id: id },
      {
        account: {
          role: _role._id,
          email,
          passWord: hashedPassword,
        },
      }
    );
    if (!personnel) {
      // return 500
      returnError(res, "Put", "api/personnel");
    }
    // return 200
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    // return 500
    returnError(res, "Put", "api/personnel");
  }
});

/**
 * Delete personnel account
 *
 * Route - api/personnel/account
 *
 * Method - Put
 *
 * @Body { id, email, role, passWord } account data
 *
 */
const personnelDeleteAccount = asyncHandler(async (req, res) => {
  const { id } = req.body;
  try {
    // Delete personnel account
    const personnel = await personnelModel.updateOne(
      { _id: id },
      {
        account: {},
      }
    );
    if (!personnel) {
      // return 500
      returnError(res, "Delete", "api/personnel/account");
    }
    // return 200
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    // return 500
    returnError(res, "Delete", "api/personnel/account");
  }
});

module.exports = {
  personnelLogin,
  personnelLogout,
  personnelCreate,
  personnelCreateAccount,
  personnelView,
  personnelFindOneByIdNumber,
  personnelSearch,
  personnelDeleteOne,
  personnelUpdateInformation,
  personnelUpdateAccount,
  personnelDeleteAccount,
};
