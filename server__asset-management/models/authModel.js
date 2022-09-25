const mongoose = require("mongoose");
const { Schema } = mongoose;
//
const authSchema = new Schema(
  {
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "role",
    },
    passWord: {
      type: String,
      required: [true, "Enter secure password"],
    },

    personnel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "personnel",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("auth", authSchema);
