const express = require("express");
const router = express.Router();
const {
  statusView,
  statusRegistration,
  statusDelete,
  statusUpdate,
} = require("../controllers/statusController");

// status routes
router
  .route("/")
  .get(statusView)
  .post(statusRegistration)
  .put(statusUpdate)
  .delete(statusDelete);

module.exports = router;
