const mongoose = require("mongoose");
const { Schema } = mongoose;

const roleSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter role"],
  },
});

module.exports = mongoose.model("role", roleSchema);
