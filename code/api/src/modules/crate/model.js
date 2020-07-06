'use strict'
// Defines a table in sequelize that graphql can interact with
module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })
// Defines relationships
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
  }
// Update relationship to products
  return Crate
}
