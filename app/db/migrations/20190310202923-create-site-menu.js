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
      contentId: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model: 'SiteContent',
          key: 'id'
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(128)
      },
      sortOrder: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED
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
    return queryInterface.dropTable('SiteMenu');
  }
};
