const express = require("express");
const mongoose = require('mongoose');
const { welcomePageResponse, aboutsResponseV1, aboutsResponseV2 } = require("./Controllers/HomeController");
const UserRoute = require("./Routes/UserRoute");
const BlogRoute = require("./Routes/BlogsRoute");
const HomeRoute = require("./Routes/HomeRoute");
const AuthRoute = require("./Routes/AuthRoute");
const dotenv = require('dotenv');
const server = express();
const cors  = require("cors");

// LOADING CONFIG
dotenv.config()



// MIDDLWARES 
server.use(cors());
server.use(express.json());
server.use((req,res, next) => {
    req.PASSWORD = process.env.PASSWORD;
    next();
})




// -------  ROUTERS ------------
server.use("/v1", HomeRoute);
server.use("/v1/user", UserRoute);
server.use("/v1/blogs", BlogRoute);
server.use("/v1/auth", AuthRoute);

server.get("/v2/abouts", aboutsResponseV2)


// CONNECT TO DB 
const databaseUrl = process.env.DATABASE_URL;
const databaseName = process.env.DATABASE_NAME;
const connectionUrl = databaseUrl + databaseName;

mongoose.connect(connectionUrl)
  .then(() => console.log('Database is connected'))
  .catch((error) => {
    console.log("some error with db connection")
  });


const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log("THUMBS UP SERVER IS RUNNING AT PORT ", PORT);
})

