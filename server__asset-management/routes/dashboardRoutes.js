const express = require("express");
const router = express.Router();
const {
  dashboardStatistics,
  dashboardAssetsCount,
} = require("../controllers/dashboardController");

// dashboard routes
router.route("/").get(dashboardStatistics);
router.route("/assets-count").get(dashboardAssetsCount);

module.exports = router;
