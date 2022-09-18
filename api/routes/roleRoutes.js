const express = require("express");
const router = express.Router();
const {
  roleView,
  roleRegistration,
  roleUpdate,
  roleDelete,
} = require("../controllers/roleController");

// role routes
router
  .route("/")
  .get(roleView)
  .post(roleRegistration)
  .put(roleUpdate)
  .delete(roleDelete);

module.exports = router;
