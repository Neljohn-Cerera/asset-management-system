const express = require("express");
const router = express.Router();
const {
  roomView,
  roomRegistration,
  roomDelete,
  roomUpdate,
} = require("../controllers/roomController");

// room routes
router
  .route("/")
  .get(roomView)
  .post(roomRegistration)
  .put(roomUpdate)
  .delete(roomDelete);

module.exports = router;
