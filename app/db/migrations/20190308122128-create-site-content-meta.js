'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.createTable('SiteContentMeta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11).UNSIGNED
      },
      contentId: {
        allowNull: false,
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: {
          model: 'SiteContent',
          key: 'id'
        },
      },
      key: {
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
    return queryInterface.addIndex('SiteContentMeta', ['contentId', 'key'], {
      indexName: 'SiteContentMeta',
      indexType: 'BTREE'
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('SiteContentMeta');
  }
};
