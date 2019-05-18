const User = require('../models').User;
const PlaceVisited = require('../models').Place_visited;
const { ForbiddenError } = require('apollo-server-express');
const AuthService = require('../services/auth.service');


let addPlaceVisited = async (userId, placeVisitedObj) => {
    try {
        let user = await User.findByPk(userId);
        if (AuthService.isNotLoggedIn(user)) {
            throw new ForbiddenError("Not Authorized to add place visited")
        }
        let place_visited = await user.createPlace_visited(placeVisitedObj);
        return place_visited;

    } catch (err) {
        console.log(err)
        throw new Error("Error adding place visited")
    }
}

let deletePlaceVisited = async (userId, placeVisitedId) => {
    try {
        let user = await User.findByPk(userId);
        let place_visited = await PlaceVisited.findByPk(placeVisitedId);
        if (AuthService.isNotLoggedInOrAuthorized(user, place_visited.UserId)) {
            throw new ForbiddenError("Not Authorized to delete a place visited to someone elses account")
        }
        return await place_visited.destroy();
    } catch (err) {
        console.error(err)
        throw new Error("Error deleting place visited")
    }
}

module.exports = {
    addPlaceVisited,
    deletePlaceVisited
}
