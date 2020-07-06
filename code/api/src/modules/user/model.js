'use strict'

// User
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

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
