const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemConsumablesStocksSchema = new Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "itemConsumables",
    },
    purchaseDate: {
      type: Date,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "itemConsumablesStocks",
  itemConsumablesStocksSchema
);
