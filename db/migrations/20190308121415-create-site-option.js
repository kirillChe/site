'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('SiteOptions', {
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
        type: Sequelize.STRING(256)
      },
      value: {
        type: Sequelize.TEXT
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
    return queryInterface.addIndex('SiteOptions', ['siteId', 'name'], {
      indexName: 'SiteOptions',
      indexType: 'BTREE'
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('SiteOptions');
  }
};
