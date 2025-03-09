const express = require("express");
const userData = require("./usersData");
const { welcomePageResponse, aboutsResponse, aboutsResponseV1, aboutsResponseV2 } = require("./Controllers/HomeController");
const { getAllUsers, getUserDetailViaQueryParams, getUserDetailViaParams } = require("./Controllers/UserController");
const UserRoute = require("./Routes/UserRoute");
const server = express();
const PORT = 8087;


server.get("/v1/", welcomePageResponse)

server.get("/v1/home", welcomePageResponse)


server.get("/v1/abouts", aboutsResponseV1)

server.get("/v2/abouts", aboutsResponseV2)


// USE supports get, put, post, delete patch request etc ....
server.use("/v1/user", UserRoute)


server.listen(PORT, () => {
    console.log("THUMBS UP SERVER IS RUNNING AT PORT ", PORT);
})


