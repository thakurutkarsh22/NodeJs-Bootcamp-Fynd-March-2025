const express = require("express");
const mongoose = require('mongoose');
const { welcomePageResponse, aboutsResponse, aboutsResponseV1, aboutsResponseV2 } = require("./Controllers/HomeController");
const UserRoute = require("./Routes/UserRoute");
const BlogRoute = require("./Routes/BlogsRoute");
const dotenv = require('dotenv');
const server = express();
const PORT = 8087;

// This line will take every entry in .env file and will put those entries in process.env
dotenv.config()


// NO PATH - this means for EVERY REQUEST
// for every request I am saying that autheticate yourself
// THIS MIDDLEWARE IS A UNIVERSAL : RN WE WILL NOT USE IT.
// server.use( AuthenticateUser)

server.use(express.json());



// MIDDLWARE WORKING FOR ALL THE PATHS
server.use((req,res, next) => {
    req.PASSWORD = process.env.PASSWORD;
    next();
})



// /this means for only /v1/ request
server.get("/v1/", welcomePageResponse)

server.get("/v1/home", welcomePageResponse)


server.get("/v1/abouts", aboutsResponseV1)

server.get("/v2/abouts", aboutsResponseV2)


// USE supports get, put, post, delete patch request etc ....
server.use("/v1/user", UserRoute)

// server.get("", (req,res, next) => {
//     const headers = req.headers
//     const authorization = headers.authorization
// })

server.use("/v1/blogs", BlogRoute)



console.log(process.env.PASSWORD, "password of the server");



// CONNECT TO DB 

mongoose.connect('mongodb://127.0.0.1:27017/Fynd')
  .then(() => console.log('Connected database!'))
  .catch((error) => {
    console.log("some error with db connection")
  });


server.listen(PORT, () => {
    console.log("THUMBS UP SERVER IS RUNNING AT PORT ", PORT);
})


