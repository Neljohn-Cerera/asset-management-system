const express = require("express");
const router = express.Router();
const {
  findSettings,
  createSettings,
  updateSettings,
} = require("../controllers/settingsController");

// settings routes
router.route("/").get(findSettings).post(createSettings).put(updateSettings);

module.exports = router;
