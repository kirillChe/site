'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('SiteMenu', {
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
      parentId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model: 'SiteMenu',
          key: 'id'
        },
      },
      itemType: {
        type: Sequelize.STRING(128)
      },
      itemId: {
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      sortOrder: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
        defaultValue: Sequelize.NOW
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('SiteMenu');
  }
};
