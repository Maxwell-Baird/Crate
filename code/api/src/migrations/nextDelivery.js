'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'subscriptions',
      'nextDelivery',
     Sequelize.TEXT
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'subscriptions',
      'nextDelivery',
     Sequelize.TEXT
    );
  }
};
