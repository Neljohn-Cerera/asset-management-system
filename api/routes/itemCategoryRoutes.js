const express = require("express");
const router = express.Router();
const {
  itemCategoryView,
  itemCategoryRegistration,
  itemCategoryDelete,
  itemCategoryUpdate,
} = require("../controllers/itemCategoryController");

// itemCategory routes
router
  .route("/")
  .get(itemCategoryView)
  .post(itemCategoryRegistration)
  .put(itemCategoryUpdate)
  .delete(itemCategoryDelete);

module.exports = router;
