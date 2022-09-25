const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  name: {
    type: String,
    required: [true, "Enter room"],
  },
  no: {
    type: String,
  },
});

module.exports = mongoose.model("room", roomSchema);
