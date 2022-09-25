const mongoose = require("mongoose");
const { Schema } = mongoose;

const personnelSchema = new Schema(
  {
    idNumber: {
      type: String,
      unique: true,
      required: [true, "Enter idnumber"],
    },
    firstName: {
      type: String,
      required: [true, "Enter firstname"],
    },
    lastName: {
      type: String,
      required: [true, "Enter lastname"],
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    account: {
      role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "role",
      },
      email: {
        type: String,
        required: false,
      },
      passWord: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("personnel", personnelSchema);
