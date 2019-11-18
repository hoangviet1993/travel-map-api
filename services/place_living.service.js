const User = require('../models').User;
const PlaceLiving = require('../models').Place_living;
const {
    ForbiddenError
} = require('apollo-server');
const AuthService = require('../services/auth.service');

let addPlaceLiving = async (userId, placeLivingObj) => {
  console.log("placeLivingObj: ", placeLivingObj)
    try {
        let user = await User.findByPk(userId);
        if (AuthService.isNotLoggedIn(user)) {
            throw new ForbiddenError("Not Authorized to add a place living to someone elses account")
        }
          let livingPlace = {
            country: placeLivingObj.country.country,
            countryId: placeLivingObj.country.countryId,
            countryISO: placeLivingObj.country.countryISO}
            if (placeLivingObj.cities.city !== undefined) {
                livingPlace.city = placeLivingObj.cities.city;
                livingPlace.cityId = placeLivingObj.cities.cityId;
                livingPlace.city_latitude =  placeLivingObj.cities.city_latitude;
                livingPlace.city_longitude = placeLivingObj.cities.city_longitude;
            }
          
          return await user.createPlace_living(livingPlace).then(livingPlace => livingPlace);
        
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

let removePlaceLiving = async (userId, placeLivingId) => {
    console.log("removePLaceLiving: ", userId)
    try {
        let user = await User.findByPk(userId);
        console.log('user: ', user)
        let placeLiving = await PlaceLiving.findByPk(placeLivingId);
        console.log('PlaceLiving: ', placeLiving)
        if (AuthService.isNotLoggedInOrAuthorized(user, placeLiving.UserId)) {
            throw new ForbiddenError("Not Authorized to remove a place living on someone elses account")
        }
        return await placeLiving.destroy();
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}

// This following method assumes userId is passed in the graphql mutation
let updatePlaceLiving = async (userId, updatedPlaceLivingObj) => {
    try {
        console.log(userId)
        console.log(updatedPlaceLivingObj)
        let user = await User.findByPk(userId);
        let placeLiving = await PlaceLiving.findByPk(updatedPlaceLivingObj.id);
        if (!placeLiving) {
          throw new Error("Not a valid living place instance")
        };
        if (AuthService.isNotLoggedIn(user, placeLiving.UserId)) {
            throw new ForbiddenError("Not Authorized to add a place living to someone elses account")
        }
        let livingPlace = {
          country: updatedPlaceLivingObj.country.country,
          countryId: updatedPlaceLivingObj.country.countryId,
          countryISO: updatedPlaceLivingObj.country.countryISO,
          city: updatedPlaceLivingObj.cities.city,
          cityId: updatedPlaceLivingObj.cities.cityId,
          city_latitude: updatedPlaceLivingObj.cities.city_latitude,
          city_longitude: updatedPlaceLivingObj.cities.city_longitude
        }
        return await placeLiving.update(livingPlace).then(place_living => place_living);
    } catch (err) {
        console.error(err)
        throw new Error(err)
    }
}


let updateLivingCityBasics = async (userId, cityInfoObject) => {
    let user = await User.findByPk(userId);
      if (AuthService.isNotLoggedInOrAuthorized(user, user.id)) {
        throw new ForbiddenError("Not Authorized to edit this user's info");
      }
      try {
        let placeRecord = await PlaceLiving.findByPk(cityInfoObject.PlaceLivingId);
      let cityBasicInfo = {
        days: cityInfoObject.cityBasics.days,
        year: cityInfoObject.cityBasics.year,
        trip_purpose: cityInfoObject.cityBasics.trip_purpose,
        trip_company: cityInfoObject.cityBasics.trip_company
      };
      return await placeRecord.update(cityBasicInfo).then((placeRecord) => placeRecord);
    } catch (err) {
      throw new Error(err);
    }
  };


module.exports = {
    addPlaceLiving,
    removePlaceLiving,
    updatePlaceLiving,
    updateLivingCityBasics
}
