const express = require("express");
const router = express.Router();
const {
  consumablesStocksView,
  addConsumablesStocks,
  removeConsumablesStocks,
} = require("../controllers/itemConsumablesStocksController");

// item consumables stocks routes
router
  .route("/")
  .get(consumablesStocksView)
  .post(addConsumablesStocks)
  .put(removeConsumablesStocks)
  .delete();

module.exports = router;
