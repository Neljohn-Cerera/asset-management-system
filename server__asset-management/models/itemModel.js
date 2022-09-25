const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema(
  {
    code: {
      type: String,
      required: [true, "Enter item code"],
      unique: true,
    },
    serialNumber: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: [true, "Enter item name"],
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "itemCategory",
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "supplier",
      required: false,
    },
    // '2002-12-09'
    purchaseDate: {
      type: Date,
    },
    price: {
      type: String,
      default: "0.00",
    },
    useFullLife: {
      type: Number,
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "status",
      required: false,
      default: null,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("item", itemSchema);
