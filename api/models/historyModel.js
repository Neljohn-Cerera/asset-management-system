const mongoose = require("mongoose");
const { Schema } = mongoose;

const historySchema = new Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "item",
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "room",
    },
    personnel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "personnel",
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "status",
    },
    remarks: {
      type: String,
    },
    year: {
      type: Number,
    },
    uniqueCode: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("history", historySchema);
