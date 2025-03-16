const express = require("express");
const { loginUser, createUser } = require("../Controllers/AuthController");


const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", createUser);

module.exports = router;