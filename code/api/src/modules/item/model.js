'use strict'

// Subscription
module.exports = function(sequelize, DataTypes) {
  let Item = sequelize.define('items', {
    userId: {
      type: DataTypes.INTEGER
    },
    productId: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.TEXT
    },
    deliveryDate: {
      type: DataTypes.TEXT
    }
  })

  Item.associate = function(models) {
    Item.belongsTo(models.User)
    Item.belongsTo(models.Product)
  }

  return Item
}
