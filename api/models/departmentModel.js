const mongoose = require("mongoose");
const { Schema } = mongoose;
//
const departmentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter department"],
  },
});

module.exports = mongoose.model("department", departmentSchema);
