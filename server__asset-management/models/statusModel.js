const mongoose = require("mongoose");
const { Schema } = mongoose;

const statusSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter status"],
  },
});

module.exports = mongoose.model("status", statusSchema);
