'use strict';

const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [
      {
        userId: 2,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "Returned",
        deliveryDate: "Jul 01 2020"
      },
      {
        userId: 2,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "Kept",
        deliveryDate: "Jul 01 2020"
      },
      {
        userId: 1,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: "Kept",
        deliveryDate: "Jul 01 2020"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
}
