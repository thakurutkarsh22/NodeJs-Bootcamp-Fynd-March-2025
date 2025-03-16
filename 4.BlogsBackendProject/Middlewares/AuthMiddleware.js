
// HOW TO FORWARD THE REQQUEST ? 
// use next(); 


function AuthenticateUser (req, res, next) {
    const PASSWORD = req.PASSWORD

    const headers = req.headers;
    const authorization = headers.authorization;

    if(authorization === PASSWORD){
        next();
    } else {
        res.status(403).json({mesasge: "buddy password needed"});
    }
}

module.exports = AuthenticateUser;

