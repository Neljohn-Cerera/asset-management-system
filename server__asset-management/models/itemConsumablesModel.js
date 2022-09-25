const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemConsumablesSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Enter item name"],
    },
    description: {
      type: String,
      required: [true, "Enter item description"],
    },
    unit: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "stockUnit",
    },
    restock: {
      type: Number,
      required: [true, "Enter restock count"],
    },
    color: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("itemConsumables", itemConsumablesSchema);
