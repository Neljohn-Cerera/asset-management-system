const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");

// history routes routes
router
  .route("/")
  .get(historyController.historyView)
  .post(historyController.inventoryRegistration);
router.route("/search/:text").get(historyController.historySearch);
router
  .route("/search/records/:text")
  .get(historyController.historySearchRecords);

module.exports = router;
