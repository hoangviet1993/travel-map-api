var jwt = require('jsonwebtoken');
const { tokenSecret } = require('../secrets/secret');
const User = require('../models').User;
const bcrypt = require('bcryptjs');
const { AuthenticationError } = require('apollo-server');
const { saltRounds } = require('../secrets/secret');



let generateUserToken = async (user) => {
    try {
        token = await jwt.sign({ user_id: user.id }, tokenSecret);
        return { "token": token }

    } catch (err) {
        console.error(err)
        return err
    }

}

let loginUser = async (username, password) => {
    try {
        let user = await User.findOne({ where: { username } });
        let isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            return generateUserToken(user)
        }
        throw new AuthenticationError("Invalid Credentials")
    } catch (err) {
        console.error(err)
        return err
    }
}

let registerUser = async (userObj) => {
    try {
        let plainPassword = userObj.password;
        let hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
        userObj.password = hashedPassword;
        let user = await User.create(userObj);
        return generateUserToken(user);
    } catch (err) {
        console.error(err)
        return err
    }
}


let verifyToken = async (token) => {
    try {
        let decodedData = await jwt.verify(token, tokenSecret);
        if (decodedData) {
            return decodedData
        }
        throw new AuthenticationError("Invalid JWT token passed")
    } catch (err) {
        console.error(err)
        return err
    }

}

let isNotLoggedIn = (user) => {
    return user == null
}

let isNotLoggedInOrAuthorized = (user, userIdToCheck) => {
    return (user == null || user.id !== userIdToCheck)
}


module.exports = {
    generateUserToken,
    loginUser,
    registerUser,
    verifyToken,
    isNotLoggedIn,
    isNotLoggedInOrAuthorized
}