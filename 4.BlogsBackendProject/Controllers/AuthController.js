const UserModel = require("../Database/Models/UserModel");
const AuthService = require("../Services/AuthService");
const jwt = require("jsonwebtoken");

const secretKey = "sdjaldladjkjhaksjdfhaksjfhaskjdfhajs";

async function createUser(req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;
    const email = body.email;
    const userObject = {
        username,
        password,
        email,
    }

    try {
        const response = await AuthService.signUserService(userObject);
        res.status(201).json({
            success: true,
            user: response
        });
    } catch(error) {
        res.status(400).json({
            message: "something went wrong",
            stacktrace: error
        })
    }
    
}

async function loginUser(req, res) {
    const body = req.body;
    const username = body.username;
    const password = body.password;

    //1. Find the user with username
    const foundUser = await AuthService.findUserByUserName(username);

    if(!foundUser || foundUser.length === 0) {
        res.status(401).json({
            success: false,
            message: "Invalid username found"
        });
    } else {
        const user = foundUser[0];
        if(password === user.password) {
            const authData = {
                user: {id: user._id}
            }
            const token = jwt.sign( authData ,secretKey)
            res.status(200).json({
                success:true,
                user: user,
                token
            })
        } else {
            res.status(401).json({
                success:false,
                message: "Invalid Password"
            })
        }
    }

}

module.exports = { createUser, loginUser }