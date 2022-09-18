const mongoose = require("mongoose");
const { Schema } = mongoose;

const colorsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    inUse: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("colors", colorsSchema);
