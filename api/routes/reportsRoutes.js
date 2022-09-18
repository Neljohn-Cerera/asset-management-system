const express = require("express");
const router = express.Router();
const {
  fiveYearsReports,
  yearlyReports,
  roomReports,
} = require("../controllers/reportsController");
// reports routes
router.route("/five-years").get(fiveYearsReports);
router.route("/yearly").get(yearlyReports);
router.route("/room").get(roomReports);

module.exports = router;
