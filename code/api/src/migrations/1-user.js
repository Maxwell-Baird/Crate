module.exports = {
  up: (queryInterface, Sequelize) => {
    //Adds new colums to the User table
    return queryInterface.createTable('users', {
      id: {
        //This field can not be null and whenever a new is created it will autoIncrement
        //the id value by 1
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        //This field can not be null
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        //This field can not be null
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //destroys the table if wanted
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}
