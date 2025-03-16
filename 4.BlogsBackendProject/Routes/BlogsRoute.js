const express = require("express");
const { createBlog, getAllBlogs, getById, deleteBlogByID, editBlogByID } = require("../Controllers/BlogController");
const AuthenticateUser = require("../Middlewares/AuthMiddleware");


const router = express.Router();

router.post("/createnewblog", AuthenticateUser, createBlog);
router.get("/getAllBlogs", getAllBlogs);
router.get("/getBlog/:id", getById);
router.delete("/deleteBlog/:id", deleteBlogByID);
router.put("/editBlog/:id", editBlogByID);



module.exports = router;