const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users1", userController.getUsers);

module.exports = router;