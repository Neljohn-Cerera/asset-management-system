const mongoose = require("mongoose");
const { Schema } = mongoose;

const supplierSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter room"],
  },
  address: {
    type: String,
    required: [true, "Enter supplier address"],
  },
});

module.exports = mongoose.model("supplier", supplierSchema);
