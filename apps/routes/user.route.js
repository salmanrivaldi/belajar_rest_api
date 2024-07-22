const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.get("/", UserController.getUsers);

router.post("/create", UserController.createUser);

module.exports = router;
