const express = require("express");
const router = express.Router();
const {
  colorsView,
  colorsRegistration,
  colorsDelete,
  colorsUpdate,
} = require("../controllers/colorsController");
// colors routes
router
  .route("/")
  .get(colorsView)
  .post(colorsRegistration)
  .put(colorsUpdate)
  .delete(colorsDelete);

module.exports = router;
