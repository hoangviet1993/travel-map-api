"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "places_visited",
      [
        {
          UserId: 34,
          country: "Brazil",
          countryId: 124474,
          countryISO: "BR",
          "city": "Rio de Janeiro",
          "cityId": 8678,
          "city_latitude": -22.911,
          "city_longitude": -43.2094,
          "year": 2018,
          "days": 12,
          "best_comment": null,
          "hardest_comment": null,
          "trip_purpose": "vacation",
          "trip_company": "with friends",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
            UserId: 35,
            country: "Brazil",
            countryId: 124474,
            countryISO: "BR",
            "city": "Rio de Janeiro",
            "cityId": 8678,
            "city_latitude": -22.911,
            "city_longitude": -43.2094,
            "year": 2018,
            "days": 12,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "Canada",
            countryId: 428227,
            countryISO: "CA",
            "city": "Canmore",
            "cityId": 991515,
            "city_latitude": 51.0867,
            "city_longitude": -115.3481,
            "year": 2018,
            "days": 4,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "United States of America",
            countryId: 905300,
            countryISO: "US",
            "city": "New York City",
            "cityId": 60,
            "city_latitude": 40.7648,
            "city_longitude": -73.9808,
            "year": 2018,
            "days": 6,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "United States of America",
            countryId: 905300,
            countryISO: "US",
            "city": "Las Vegas",
            "cityId": 23768,
            "city_latitude": 36.1663,
            "city_longitude": -115.1492,
            "year": 2018,
            "days": 6,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "United States of America",
            countryId: 905300,
            countryISO: "US",
            "city": "Austin",
            "cityId": 16559,
            "city_latitude": 30.2711,
            "city_longitude": -97.7437,
            "year": 2018,
            "days": 6,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "United States of America",
            countryId: 905300,
            countryISO: "US",
            "city": "Fremont",
            "cityId": 49220,
            "city_latitude": 37.5483,
            "city_longitude": -121.9886,
            "year": 2018,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "United States of America",
            countryId: 905300,
            countryISO: "US",
            "city": "Denver",
            "cityId": 16554,
            "city_latitude": 39.7348,
            "city_longitude": -104.9653,
            "year": 2018,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "United States of America",
            countryId: 905300,
            countryISO: "US",
            "city": "Nashville",
            "cityId": 23197,
            "city_latitude": 36.1622,
            "city_longitude": -86.7744,
            "year": 2018,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 36,
            country: "United States of America",
            countryId: 905300,
            countryISO: "US",
            "city": "Nashville",
            "cityId": 23197,
            "city_latitude": 36.1622,
            "city_longitude": -86.7744,
            "year": 2018,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "United States of America",
            countryId: 905300,
            countryISO: "US",
            "city": "Seattle",
            "cityId": 5083,
            "city_latitude": 47.6038,
            "city_longitude": -122.3301,
            "year": 2018,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 34,
            country: "Canada",
            countryId: 428227,
            countryISO: "CA",
            "city": "Vancouver",
            "cityId": 24639,
            "city_latitude": 49.2609,
            "city_longitude": -123.1139,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 34,
            country: "Canada",
            countryId: 428227,
            countryISO: "CA",
            "city": "Banff",
            "cityId": 58337,
            "city_latitude": 51.1778,
            "city_longitude": -115.5683,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 34,
            country: "Canada",
            countryId: 428227,
            countryISO: "CA",
            "city": "Ottawa",
            "cityId": 1930,
            "city_latitude": 45.421,
            "city_longitude": -75.69,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 34,
            country: "Canada",
            countryId: 428227,
            countryISO: "CA",
            "city": "Toronto",
            "cityId": 172,
            "city_latitude": 43.6529,
            "city_longitude": -79.3849,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "Canada",
            countryId: 428227,
            countryISO: "CA",
            "city": "Toronto",
            "cityId": 172,
            "city_latitude": 43.6529,
            "city_longitude": -79.3849,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            country: "India",
            countryId: 168924,
            countryISO: "IN",
            "city": "Bangalore",
            "cityId": 1355,
            "city_latitude": 12.96991,
            "city_longitude": 77.59796,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "India",
            "countryId": 168924,
            "countryISO": "IN",
            "city": "Mumbai",
            "cityId": 1156,
            "city_latitude": 18.96667,
            "city_longitude": 72.83333,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "Austria",
            "countryId": 906629,
            "countryISO": "AT",
            "city": "Vienna",
            "cityId": 1741,
            "city_latitude": 48.20833,
            "city_longitude": 16.37306,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "Germany",
            "countryId": 107432,
            "countryISO": "DE",
            "city": "Munich",
            "cityId": 1726,
            "city_latitude": 48.13333,
            "city_longitude": 11.56667,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 37,
            "country": "Germany",
            "countryId": 107432,
            "countryISO": "DE",
            "city": "Munich",
            "cityId": 1726,
            "city_latitude": 48.13333,
            "city_longitude": 11.56667,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "Italy",
            "countryId": 474798,
            "countryISO": "IT",
            "city": "Turin",
            "cityId": 495,
            "city_latitude": 45.06667,
            "city_longitude": 7.7,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "Ecuador",
            "countryId": 100232,
            "countryISO": "EC",
            "city": "Quito",
            "cityId": 2900,
            "city_latitude": -0.21861,
            "city_longitude": -78.50972,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 34,
            "country": "Ecuador",
            "countryId": 100232,
            "countryISO": "EC",
            "city": "Quito",
            "cityId": 2900,
            "city_latitude": -0.21861,
            "city_longitude": -78.50972,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "Germany",
            "countryId": 107432,
            "countryISO": "DE",
            "city": "Berlin",
            "cityId": 64,
            "city_latitude": 52.51667,
            "city_longitude": 13.38333,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "Italy",
            "countryId": 474798,
            "countryISO": "IT",
            "city": "Ischia",
            "cityId": 189387,
            "city_latitude": 40.72,
            "city_longitude": 13.91056,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "Mexico",
            "countryId": 189187,
            "countryISO": "MX",
            "city": "Mexico City",
            "cityId": 1489,
            "city_latitude": 19.41944,
            "city_longitude": -99.14556,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "Mexico",
            "countryId": 189187,
            "countryISO": "MX",
            "city": "Mexico City",
            "cityId": 1489,
            "city_latitude": 19.41944,
            "city_longitude": -99.14556,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            UserId: 35,
            "country": "France",
            "countryId": 975953,
            "countryISO": "FR",
            "city": "Paris",
            "cityId": 90,
            "city_latitude": 48.85658,
            "city_longitude": 2.35183,
            "year": 2014,
            "days": 2,
            "best_comment": null,
            "hardest_comment": null,
            "trip_purpose": "vacation",
            "trip_company": "with friends",
            createdAt: new Date(),
            updatedAt: new Date()
          },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("places_visited", null, {});

  }
};
