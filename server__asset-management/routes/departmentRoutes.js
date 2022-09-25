const express = require("express");
const router = express.Router();
const {
  departmentView,
  departmentRegistration,
  departmentDelete,
  departmentUpdate,
} = require("../controllers/departmentController");

// department routes
router
  .route("/")
  .get(departmentView)
  .post(departmentRegistration)
  .put(departmentUpdate)
  .delete(departmentDelete);

module.exports = router;
