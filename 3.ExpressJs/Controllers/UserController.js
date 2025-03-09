const userData = require("../usersData");

function getAllUsers (req, res) {
    res.status(200).json(userData.data.map(user => {
        return {
            name: user.name
        }
    }));
}


function getUserDetailViaQueryParams (req, res) {
    const query = req.query;
    const urlName = query.name;
    const urlAge = query.age;

    const user = userData.data.find(user => user.name.first === urlName)
    if(user) {
        res.status(200).json(user)
    } else {
        res.status(200).json({message: "NO USER FOUND"});
    }
}

function getUserDetailViaParams (req, res) {
    const params = req.params; // {name: "value"}
    const urlName = params.name;
    
    const user = userData.data.find(user => user.name.first === urlName)
    if(user) {
        res.status(200).json(user)
    } else {
        res.status(200).json({message: "NO USER FOUND"});
    }
}

module.exports = {
    getAllUsers,
    getUserDetailViaQueryParams,
    getUserDetailViaParams
}