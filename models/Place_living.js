'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place_living = sequelize.define('Place_living', {
    country: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    countryId: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    countryISO: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    city: {
      type: DataTypes.STRING
    },
    cityId: {
      type: DataTypes.INTEGER
    },
    city_latitude: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    city_longitude: {
      type: DataTypes.INTEGER
    },
    description: DataTypes.STRING,
    living_time: {
      type: DataTypes.STRING,
      validate: {
        isDate: true
      }
    },
    year: {
      type: DataTypes.INTEGER
    },
    days: {
      type: DataTypes.INTEGER
    },
    trip_purpose: {
      type: DataTypes.STRING
    },
    trip_company: {
      type: DataTypes.STRING
    },
  }, {
      tableName: "places_living",
      name: {
        singular: 'Place_living',
        plural: 'Places_living'
      }

    });
  Place_living.associate = function (models) {
    Place_living.belongsTo(models.User)
    Place_living.hasMany(models.CityReview)
  };
  return Place_living;
};
