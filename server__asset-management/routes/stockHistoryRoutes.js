const express = require("express");
const router = express.Router();
const { stockHistoryView } = require("../controllers/stockHistoryController");

// item consumables stock histories
router.route("/").get(stockHistoryView).post().put().delete();

module.exports = router;
