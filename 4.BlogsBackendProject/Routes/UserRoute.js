const express = require("express");
const { getAllUsers, getUserDetailViaParams, getUserDetailViaQueryParams } = require("../Controllers/UserController");
const AuthenticateUser = require("../Middlewares/AuthMiddleware");
const router = express.Router();

router.get("/users", AuthenticateUser, getAllUsers);


router.get("/getDetail",  getUserDetailViaQueryParams);

router.get("/:name", getUserDetailViaParams);


// router.get("/protected/users", getAllUsers);




module.exports = router;