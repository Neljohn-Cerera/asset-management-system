const mongoose = require("mongoose");
const { Schema } = mongoose;

const settingsSchema = new Schema(
  {
    rangeYear: {
      type: String,
    },
    year: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("settings", settingsSchema);
