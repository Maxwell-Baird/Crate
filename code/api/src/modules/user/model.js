'use strict'

// User
// Defines a table in sequelize that graphql can interact with

module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })
// Add additional attributes: image, description, token, shipping address?
// Defines relationships
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }
// Returns the now-built User 
  return User
}
