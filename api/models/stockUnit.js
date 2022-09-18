const mongoose = require("mongoose");
const { Schema } = mongoose;

const stockUnitSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Enter unit"],
  },
});

module.exports = mongoose.model("stockUnit", stockUnitSchema);
