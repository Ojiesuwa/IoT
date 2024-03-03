const express = require("express");
const userController = require("../Controllers/user-controller");

const router = express.Router();
router.use(express.json());

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
