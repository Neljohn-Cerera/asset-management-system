const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemCategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Enter category"],
  },
});

module.exports = mongoose.model("itemCategory", itemCategorySchema);
