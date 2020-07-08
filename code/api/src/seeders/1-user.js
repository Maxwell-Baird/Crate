'use strict';

const bcrypt = require('bcrypt');
const config = require('../config/server.json');
const params = require('../config/params.json');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'The Admin',
        email: 'admin@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.admin,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "I like cheese",
        userImage: "https://thumbs.dreamstime.com/z/sad-man-laptop-21893562.jpg",
        shippingAddress: "1234 Street, City, ST"
      },
      {
        name: 'The User',
        email: 'user@crate.com',
        password: bcrypt.hashSync('123456', config.saltRounds),
        role: params.user.roles.user,
        createdAt: new Date(),
        updatedAt: new Date(),
        description: "I like cheese",
        userImage: "https://thumbs.dreamstime.com/z/sadness-22416194.jpg",
        shippingAddress: "1234 Street, City, ST"
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
}
