const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const UserValidation = require("../validations/user.validation");

router.get("/", UserController.getUsers);
router.get("/:user_id", UserController.getUser);
router.post("/create", UserValidation.createUser, UserController.createUser);
router.put("/update/:user_id", UserController.updateUser);
router.delete("/delete/:user_id", UserController.deleteUser);

module.exports = router;
