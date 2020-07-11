'use strict';

const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {

  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('subscriptions', [
      {
        userId: 2,
        crateId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        nextDelivery: "Jul 31 2020"
      },
      {
        userId: 2,
        crateId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        nextDelivery: "Sep 04 2020"
      },
      {
        userId: 2,
        crateId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        nextDelivery: "Dec 04 2020"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subscriptions', null, {});
  }
}
