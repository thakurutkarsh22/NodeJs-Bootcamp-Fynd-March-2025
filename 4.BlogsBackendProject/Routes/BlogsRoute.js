const express = require("express");
const { welcomePageResponse, aboutsResponseV1, aboutsResponseV2 } = require("../Controllers/HomeController");


const router = express.Router();

router.post("/", welcomePageResponse);
router.get("/home", welcomePageResponse);
router.get("/abouts", aboutsResponseV1);
router.delete("/deleteBlog/:id", aboutsResponseV2);



module.exports = router;