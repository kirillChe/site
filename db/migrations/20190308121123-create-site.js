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
      type: {
        allowNull: false,
        type: Sequelize.ENUM('regular', 'default-site'),
        defaultValue: 'regular'
      },
      accountId: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      templateId: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM('active', 'inactive', 'suspended'),
        defaultValue: 'active'
      },
      underConstruction: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      subdomain: {
        allowNull: false,
        type: Sequelize.STRING(256),
      },
      domain: {
        allowNull: true,
        type: Sequelize.STRING(256),
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
