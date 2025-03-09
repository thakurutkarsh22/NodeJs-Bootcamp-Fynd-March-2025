const express = require("express");
const { getAllUsers, getUserDetailViaParams, getUserDetailViaQueryParams } = require("../Controllers/UserController");
const router = express.Router();

router.get("/users", getAllUsers);

// CONCEPT OF QUERY PARAMS (?)
// get the user detail via its name 
// ex - google is using query params (https://www.google.com/search?q=virat)
router.get("/getDetail", getUserDetailViaQueryParams);

// CONCEPT OF PARAMS - get the user detail via its name
// ex - Pokeapi uses params - (https://pokeapi.co/api/v2/pokemon/pikachhu)
router.get("/:name", getUserDetailViaParams);

// router.post()

module.exports = router;