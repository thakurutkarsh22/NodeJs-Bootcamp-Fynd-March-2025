
// HOW TO FORWARD THE REQQUEST ? 
// use next(); 
const SECRET_PASSWORD = "asdf1234";

function AuthenticateUser (req, res, next) {

    const headers = req.headers;
    const authorization = headers.authorization;
    console.log("AuthenticateUser Middleware")

    if(authorization === SECRET_PASSWORD){
        next();
    } else {
        res.status(403).json({mesasge: "buddy password needed"});
    }
}

module.exports = AuthenticateUser;

