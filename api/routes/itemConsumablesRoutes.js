const express = require("express");
const {
  itemConsumablesView,
  itemConsumablesRegistration,
  itemConsumablesUpdate,
  itemConsumablesDelete,
} = require("../controllers/itemConsumablesController");
const router = express.Router();

// item consumables routes
router
  .route("/")
  .get(itemConsumablesView)
  .post(itemConsumablesRegistration)
  .put(itemConsumablesUpdate)
  .delete(itemConsumablesDelete);

module.exports = router;
