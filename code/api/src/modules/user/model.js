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
      type: DataTypes.TEXT,
      defaultValue: "USER"
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "Placeholder description."
    },
    shippingAddress: {
      type: DataTypes.TEXT,
      defaultValue: "Placeholder address."
    },
    userImage: {
      type: DataTypes.TEXT,
      defaultValue: "https://i.imgflip.com/23j9y5.jpg"
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
    User.hasMany(models.Item)
  }

  return User
}
