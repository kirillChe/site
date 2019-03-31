'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SiteWidgets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      siteId: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model: 'Sites',
          key: 'id'
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      type: {
        allowNull: false,
        type: Sequelize.ENUM(
          'template-widget',
        ),
        defaultValue: 'template-widget'
      },
      ref: {
        type: Sequelize.STRING(128)
      },
      data: {
        type: Sequelize.JSON
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('SiteWidgets');
  }
};
