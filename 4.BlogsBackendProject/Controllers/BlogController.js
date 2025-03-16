const BlogModel = require("../Database/Models/BlogModel");
const AuthService = require("../Services/AuthService");

async function createBlog  (req,res) {
    const userId = req.userId;
    const body = req.body;
    const title = body.title;
    const content = body.content;

    const author = await AuthService.findUserById(userId);


    const blogObject = {
        title,
        content,
        authors: [author.username],
    }
    const blogModelObject = BlogModel(blogObject);

    try {
       const response = await blogModelObject.save();
       res.status(201).json(response)
    } catch(error) {
        res.status(400).json(error)
    }
}

async function getAllBlogs  (req,res) {
    try {
       const response = await BlogModel.find({});
       res.status(200).json(response)
    } catch(error) {
        res.status(400).json(error)
    }
}

async function getById  (req,res) {

    const params = req.params;
    const id = params.id;
    try {
       const response = await BlogModel.findById(id);
       res.status(200).json(response)
    } catch(error) {
        res.status(400).json(error)
    }
}

async function deleteBlogByID  (req,res) {

    const params = req.params;
    const id = params.id;
    try {
       const response = await BlogModel.deleteOne({_id: id});
       res.status(200).json(response)
    } catch(error) {
        res.status(400).json(error)
    }
}

async function editBlogByID  (req,res) {

    const params = req.params;
    const id = params.id;

    const body = req.body;
    const titleFromRequest = body.title;

    try {
       const response = await BlogModel.updateOne({_id: id}, {$set: {title: titleFromRequest}});
       res.status(200).json(response)
    } catch(error) {
        res.status(400).json(error)
    }
}




module.exports = { createBlog, getAllBlogs, getById, deleteBlogByID, editBlogByID }