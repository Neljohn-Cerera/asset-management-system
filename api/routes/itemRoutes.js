const express = require("express");
const router = express.Router();
const itemModel = require("../models/itemModel");

const {
  itemView,
  itemSearch,
  itemRegistration,
  itemDeleteOne,
  itemUpdateOne,
  itemFindOneByCode,
} = require("../controllers/itemController");

// item routes
router
  .route("/")
  .get(itemView)
  .post(itemRegistration)
  .put(itemUpdateOne)
  .delete(itemDeleteOne);
router.route("/search").get(itemSearch);
router.route("/:code").get(itemFindOneByCode);

module.exports = router; 
