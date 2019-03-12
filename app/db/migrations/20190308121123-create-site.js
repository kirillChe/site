'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      templateId: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED'),
        defaultValue: 'ACTIVE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Sites');
  }
};
