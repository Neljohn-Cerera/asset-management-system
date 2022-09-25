const express = require("express");
const router = express.Router();
const {
  stockUnitView,
  stockUnitRegistration,
} = require("../controllers/stockUnitController");

// item consumables stock unit
router.route("/").get(stockUnitView).post(stockUnitRegistration).put().delete();

module.exports = router;
