const express = require("express");
const router = express.Router();
const {
  stockOUTReportsView,
} = require("../controllers/stockReportsController");

// item consumables stock OUT reports
router.route("/stocksout").get(stockOUTReportsView);

module.exports = router;
