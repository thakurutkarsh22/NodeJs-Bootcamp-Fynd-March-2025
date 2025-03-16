const UserModel = require("../Database/Models/UserModel");

class AuthService {

    static  async signUserService(userObject) {

        try {
            const userCollectionObject = new UserModel(userObject);
            const response = await userCollectionObject.save();
            return response;
        } catch (error) {
            return error
        }
    }

    static async findUserByUserName(username) {
        try {
            const response = UserModel.find({username : username})
            return response;
        } catch (error) {
            return error
        }
    }


}

module.exports = AuthService


