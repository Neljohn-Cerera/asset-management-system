const express = require("express");
const router = express.Router();

const {
  stockDashboardPieChartStockin,
  stockDashboardPieChartStockout,
} = require("../controllers/stockDashboardController");

// stock dashboard stock in
router.route("/piechart/stockin").get(stockDashboardPieChartStockin);
// stock dashboard stock out
router.route("/piechart/stockout").get(stockDashboardPieChartStockout);

module.exports = router;
