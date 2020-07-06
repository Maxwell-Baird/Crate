'use strict'

// User
//Defines the variables/fields of a User and what associates it has
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      //DataTypes.TEXT allows for longer strings
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })
  //Defines the relationships between user and other models
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
