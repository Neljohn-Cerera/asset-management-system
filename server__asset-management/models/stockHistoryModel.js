const mongoose = require("mongoose");
const { Schema } = mongoose;

const stockHistorySchema = new Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "itemConsumables",
    },
    quantity: {
      type: Number,
      required: true,
    },
    designation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "room",
    },
    requestedby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "personnel",
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("stockHistory", stockHistorySchema);
