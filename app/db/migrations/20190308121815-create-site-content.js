'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('SiteContent', {
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
          model: 'SiteContent',
          key: 'id'
        },
      },
      type: {
        type: Sequelize.STRING(128)
      },
      name: {
        type: Sequelize.STRING(256)
      },
      data: {
        type: Sequelize.TEXT
      },
      sortOrder: {
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      permalink: {
        type: Sequelize.STRING(128)
      },
      layoutId: {
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
    return queryInterface.addIndex('SiteContent', ['siteId', 'permalink'], {
      indexName: 'SiteContentPermalink',
      indexType: 'BTREE'
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('SiteContent');
  }
};
