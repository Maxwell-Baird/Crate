'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'shippingAddress',
     Sequelize.TEXT
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users',
      'shippingAddress',
     Sequelize.TEXT
    );
  }
};
