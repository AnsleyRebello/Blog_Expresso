const express = require("express");
const { handleGetAllUsers, handlePostAllUsers, handleGetUserById , handleEditUserById , handleDeleteUserById } = require("../controllers/user");
const router = express.Router();

router
  .route("/")
  .get(handleGetAllUsers)
  .post(handlePostAllUsers)

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleEditUserById)
  .delete(handleDeleteUserById);

module.exports = router;
