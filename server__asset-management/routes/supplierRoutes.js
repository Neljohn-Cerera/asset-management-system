const express = require("express");
const router = express.Router();
const {
  supplierView,
  supplierRegistration,
  supplierDelete,
  supplierUpdate,
} = require("../controllers/supplierController");

// supplier routes
router
  .route("/")
  .get(supplierView)
  .post(supplierRegistration)
  .put(supplierUpdate)
  .delete(supplierDelete);

module.exports = router;
