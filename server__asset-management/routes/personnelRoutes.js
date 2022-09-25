const express = require("express");
const router = express.Router();
const {
  personnelLogin,
  personnelLogout,
  personnelView,
  personnelFindOneByIdNumber,
  personnelSearch,
  personnelCreate,
  personnelCreateAccount,
  personnelUpdateInformation,
  personnelDeleteOne,
  personnelUpdateAccount,
  personnelDeleteAccount,
} = require("../controllers/personnelController");

// item routes
router
  .route("/")
  .get(personnelView)
  .post(personnelCreate)
  .put(personnelUpdateInformation)
  .delete(personnelDeleteOne);
router
  .route("/account")
  .post(personnelCreateAccount)
  .put(personnelUpdateAccount)
  .delete(personnelDeleteAccount);
router.route("/search").get(personnelSearch);
router.route("/login").post(personnelLogin);
router.route("/logout").post(personnelLogout);
router.route("/:idNumber").get(personnelFindOneByIdNumber);

module.exports = router;
