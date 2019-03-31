'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SiteUrlAliases', {
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
      itemType: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      itemId: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      alias: {
        allowNull: false,
        type: Sequelize.STRING(256)
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
    return queryInterface.dropTable('SiteUrlAliases');
  }
};
